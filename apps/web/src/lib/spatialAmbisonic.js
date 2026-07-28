// Decodificador ambisónico (B-format, primer orden) → binaural, usando
// únicamente la Web Audio API nativa (sin dependencias externas de HRTF).
//
// Técnica: el B-format de 4 canales se decodifica hacia un arreglo de
// "parlantes virtuales" dispuestos alrededor del oyente; cada parlante
// virtual se renderiza en binaural mediante un PannerNode con
// panningModel: 'HRTF'. Es la misma idea que usan decodificadores
// ambisónicos como Omnitone, implementada aquí de forma directa para no
// añadir una dependencia pesada.
//
// Es un decodificador "básico" (no aplica el filtro de shelving max-rE que
// usan los decodificadores de referencia para arreglos grandes) — suficiente
// para dar una sensación espacial real, no para precisión de referencia.
//
// Supuesto de orden de canales: AmbiX / ACN (W, Y, Z, X), que es la
// convención más común en flujos de audio espacial modernos (YouTube 360,
// la mayoría de micrófonos/planos de exportación ambisónicos). Si tus
// grabaciones usan el orden clásico B-format/FuMa (W, X, Y, Z), cambia
// AMBISONIC_CHANNEL_ORDER más abajo.

export const AMBISONIC_CHANNEL_ORDER = ['W', 'Y', 'Z', 'X']; // AmbiX/ACN

const VIRTUAL_SPEAKERS = [
  { azimuth: 45, elevation: 0 },
  { azimuth: -45, elevation: 0 },
  { azimuth: 135, elevation: 0 },
  { azimuth: -135, elevation: 0 },
  { azimuth: 0, elevation: 60 },
  { azimuth: 0, elevation: -60 },
];

function azElToCartesian(azimuthDeg, elevationDeg) {
  const az = (azimuthDeg * Math.PI) / 180;
  const el = (elevationDeg * Math.PI) / 180;
  return {
    x: Math.cos(el) * Math.sin(az),
    y: Math.sin(el),
    z: -Math.cos(el) * Math.cos(az), // -Z es "adelante" en el espacio del listener de Web Audio
  };
}

// Decodificador ambisónico básico (energía aproximadamente preservada):
// ganancia(parlante) = (1/N)·W + (2/N)·(X·x + Y·y + Z·z)
function speakerDecodeGains(x, y, z, numSpeakers) {
  const wGain = 1 / numSpeakers;
  const dirGain = 2 / numSpeakers;
  return { w: wGain, x: dirGain * x, y: dirGain * y, z: dirGain * z };
}

/**
 * Construye el grafo de decodificación ambisónica → binaural.
 * @param {AudioContext} audioContext
 * @param {string[]} channelOrder orden de los 4 canales del archivo fuente
 * @returns {{ input: ChannelSplitterNode, output: GainNode, dispose: () => void }}
 */
export function buildAmbisonicDecoder(audioContext, channelOrder = AMBISONIC_CHANNEL_ORDER) {
  const input = audioContext.createChannelSplitter(4);
  const output = audioContext.createGain();
  const nodes = [input, output];

  const idx = {
    W: channelOrder.indexOf('W'),
    X: channelOrder.indexOf('X'),
    Y: channelOrder.indexOf('Y'),
    Z: channelOrder.indexOf('Z'),
  };

  VIRTUAL_SPEAKERS.forEach((speaker) => {
    const { x, y, z } = azElToCartesian(speaker.azimuth, speaker.elevation);
    const gains = speakerDecodeGains(x, y, z, VIRTUAL_SPEAKERS.length);

    const sum = audioContext.createGain();
    sum.gain.value = 1;

    const wGain = audioContext.createGain(); wGain.gain.value = gains.w;
    const xGain = audioContext.createGain(); xGain.gain.value = gains.x;
    const yGain = audioContext.createGain(); yGain.gain.value = gains.y;
    const zGain = audioContext.createGain(); zGain.gain.value = gains.z;

    input.connect(wGain, idx.W);
    input.connect(xGain, idx.X);
    input.connect(yGain, idx.Y);
    input.connect(zGain, idx.Z);

    wGain.connect(sum);
    xGain.connect(sum);
    yGain.connect(sum);
    zGain.connect(sum);

    const panner = audioContext.createPanner();
    panner.panningModel = 'HRTF';
    panner.distanceModel = 'inverse';
    panner.refDistance = 1;
    if (panner.positionX) {
      panner.positionX.value = x;
      panner.positionY.value = y;
      panner.positionZ.value = z;
    } else {
      // Safari antiguo: API basada en setPosition()
      panner.setPosition(x, y, z);
    }

    sum.connect(panner);
    panner.connect(output);

    nodes.push(sum, wGain, xGain, yGain, zGain, panner);
  });

  return {
    input,
    output,
    dispose() {
      nodes.forEach((n) => { try { n.disconnect(); } catch (_) { /* noop */ } });
    },
  };
}

/** true si el AudioBuffer decodificado tiene 4 canales (candidato a B-format). */
export function isAmbisonicBuffer(audioBuffer) {
  return audioBuffer && audioBuffer.numberOfChannels === 4;
}

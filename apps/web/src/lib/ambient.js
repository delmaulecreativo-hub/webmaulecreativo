// A tiny synthesized "paisaje sonoro" — a soft evolving river/wind drone.
// No external audio files; built with the Web Audio API.

let ctx = null;
let master = null;
let nodes = [];
let running = false;
const listeners = new Set();

function notify() {
  listeners.forEach((fn) => fn(running));
}

function build() {
  ctx = new (window.AudioContext || window.webkitAudioContext)();
  master = ctx.createGain();
  master.gain.value = 0.0;
  master.connect(ctx.destination);

  // Two detuned low drones (river body)
  [55, 82.4, 110].forEach((freq, i) => {
    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.value = freq;
    const g = ctx.createGain();
    g.gain.value = i === 2 ? 0.06 : 0.12;
    // slow LFO for movement
    const lfo = ctx.createOscillator();
    lfo.frequency.value = 0.05 + i * 0.03;
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 0.04;
    lfo.connect(lfoGain);
    lfoGain.connect(g.gain);
    osc.connect(g);
    g.connect(master);
    osc.start();
    lfo.start();
    nodes.push(osc, lfo);
  });

  // Filtered noise = wind / water shimmer
  const bufferSize = 2 * ctx.sampleRate;
  const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const output = noiseBuffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) output[i] = Math.random() * 2 - 1;
  const noise = ctx.createBufferSource();
  noise.buffer = noiseBuffer;
  noise.loop = true;
  const bp = ctx.createBiquadFilter();
  bp.type = 'bandpass';
  bp.frequency.value = 700;
  bp.Q.value = 0.7;
  const ng = ctx.createGain();
  ng.gain.value = 0.05;
  const nlfo = ctx.createOscillator();
  nlfo.frequency.value = 0.08;
  const nlfoGain = ctx.createGain();
  nlfoGain.gain.value = 350;
  nlfo.connect(nlfoGain);
  nlfoGain.connect(bp.frequency);
  noise.connect(bp);
  bp.connect(ng);
  ng.connect(master);
  noise.start();
  nlfo.start();
  nodes.push(noise, nlfo);
}

export function toggleAmbient() {
  if (!ctx) build();
  if (ctx.state === 'suspended') ctx.resume();
  if (running) {
    master.gain.linearRampToValueAtTime(0.0001, ctx.currentTime + 0.8);
    running = false;
  } else {
    master.gain.linearRampToValueAtTime(0.5, ctx.currentTime + 1.5);
    running = true;
  }
  notify();
  return running;
}

export function isAmbientOn() {
  return running;
}

export function subscribeAmbient(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

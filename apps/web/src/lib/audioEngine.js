// Motor de audio del Atlas Sonoro.
//
// Dos backends unificados detrás de la misma interfaz de "capa" (play,
// pause, stop, seek, setVolume, fadeVolume):
//   - HowlLayer:      audio estéreo/mono normal, vía Howler.js.
//   - AmbisonicLayer: audio B-format de 4 canales, decodificado a binaural
//                      con Web Audio API puro (ver spatialAmbisonic.js).
//
// AtlasPlayerEngine coordina hasta dos capas simultáneas (p. ej. paisaje +
// recitado), fade-in al reproducir desde silencio, y crossfade entre piezas.

import { Howl } from 'howler';
import { buildAmbisonicDecoder } from './spatialAmbisonic';

export const DEFAULT_FADE_MS = 1500;

let sharedAudioContext = null;
export function getAudioContext() {
  if (!sharedAudioContext) {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    sharedAudioContext = new Ctx();
  }
  return sharedAudioContext;
}

class BaseLayer {
  constructor(pieza) {
    this.pieza = pieza;
    this.volume = 1;
  }
  async load() {}
  play() {}
  pause() {}
  stop() {}
  seek(_t) {}
  get currentTime() { return 0; }
  get duration() { return this.pieza.duracion || 0; }
  get playing() { return false; }
  setVolume(_v) {}
  fadeVolume(_target, _ms) { return Promise.resolve(); }
  destroy() {}
}

class HowlLayer extends BaseLayer {
  constructor(pieza) {
    super(pieza);
    this._howl = null;
    this._loadPromise = null;
  }

  load() {
    if (this._loadPromise) return this._loadPromise;
    this._loadPromise = new Promise((resolve, reject) => {
      this._howl = new Howl({
        src: [this.pieza.audioUrl],
        html5: true,
        volume: 0,
        onload: () => resolve(),
        onloaderror: (_id, err) => reject(err),
      });
    });
    return this._loadPromise;
  }

  play() { this._howl && this._howl.play(); }
  pause() { this._howl && this._howl.pause(); }
  stop() { this._howl && this._howl.stop(); }
  seek(t) { this._howl && this._howl.seek(t); }

  get currentTime() { return this._howl ? (this._howl.seek() || 0) : 0; }
  get duration() { return (this._howl && this._howl.duration()) || this.pieza.duracion || 0; }
  get playing() { return !!this._howl && this._howl.playing(); }

  setVolume(v) {
    this.volume = v;
    this._howl && this._howl.volume(v);
  }

  fadeVolume(target, ms) {
    return new Promise((resolve) => {
      if (!this._howl) { resolve(); return; }
      const from = this._howl.volume();
      if (ms <= 0) {
        this._howl.volume(target);
      } else {
        this._howl.fade(from, target, ms);
      }
      this.volume = target;
      setTimeout(resolve, Math.max(ms, 0));
    });
  }

  destroy() {
    if (this._howl) {
      this._howl.unload();
      this._howl = null;
    }
  }
}

// Audio B-format (4 canales) → binaural, vía Web Audio API pura.
class AmbisonicLayer extends BaseLayer {
  constructor(pieza) {
    super(pieza);
    this._ctx = getAudioContext();
    this._buffer = null;
    this._decoder = null;
    this._masterGain = null;
    this._source = null;
    this._offset = 0;
    this._startedAt = null;
    this._playing = false;
    this._loadPromise = null;
  }

  load() {
    if (this._loadPromise) return this._loadPromise;
    this._loadPromise = (async () => {
      const res = await fetch(this.pieza.audioUrl);
      const arrayBuffer = await res.arrayBuffer();
      this._buffer = await this._ctx.decodeAudioData(arrayBuffer);
      this._decoder = buildAmbisonicDecoder(this._ctx);
      this._masterGain = this._ctx.createGain();
      this._masterGain.gain.value = 0;
      this._decoder.output.connect(this._masterGain);
      this._masterGain.connect(this._ctx.destination);
    })();
    return this._loadPromise;
  }

  _createSource() {
    const source = this._ctx.createBufferSource();
    source.buffer = this._buffer;
    source.connect(this._decoder.input);
    source.onended = () => {
      if (this._source === source) this._playing = false;
    };
    return source;
  }

  play() {
    if (!this._buffer || this._playing) return;
    if (this._ctx.state === 'suspended') this._ctx.resume();
    const startOffset = this._buffer.duration > 0 ? this._offset % this._buffer.duration : 0;
    this._source = this._createSource();
    this._source.start(0, startOffset);
    this._startedAt = this._ctx.currentTime;
    this._playing = true;
  }

  pause() {
    if (!this._playing) return;
    this._offset += this._ctx.currentTime - this._startedAt;
    try { this._source && this._source.stop(); } catch (_) { /* ya detenido */ }
    this._source = null;
    this._playing = false;
  }

  stop() {
    this.pause();
    this._offset = 0;
  }

  seek(t) {
    const wasPlaying = this._playing;
    if (wasPlaying) this.pause();
    this._offset = t;
    if (wasPlaying) this.play();
  }

  get currentTime() {
    if (!this._playing) return this._offset;
    return this._offset + (this._ctx.currentTime - this._startedAt);
  }

  get duration() { return (this._buffer && this._buffer.duration) || this.pieza.duracion || 0; }
  get playing() { return this._playing; }

  setVolume(v) {
    this.volume = v;
    if (this._masterGain) this._masterGain.gain.setValueAtTime(v, this._ctx.currentTime);
  }

  fadeVolume(target, ms) {
    return new Promise((resolve) => {
      if (!this._masterGain) { resolve(); return; }
      const now = this._ctx.currentTime;
      const g = this._masterGain.gain;
      g.cancelScheduledValues(now);
      g.setValueAtTime(g.value, now);
      if (ms <= 0) {
        g.setValueAtTime(target, now);
      } else {
        g.linearRampToValueAtTime(target, now + ms / 1000);
      }
      this.volume = target;
      setTimeout(resolve, Math.max(ms, 0));
    });
  }

  destroy() {
    this.stop();
    this._decoder && this._decoder.dispose();
    this._masterGain && this._masterGain.disconnect();
  }
}

function createLayer(pieza) {
  return pieza.canales === 4 ? new AmbisonicLayer(pieza) : new HowlLayer(pieza);
}

/**
 * Coordina la reproducción del Atlas Sonoro: una capa principal, una capa
 * secundaria opcional (modo "dos capas simultáneas"), fade-in desde silencio
 * y crossfade entre piezas.
 */
export class AtlasPlayerEngine {
  constructor() {
    this.primary = null; // { pieza, layer }
    this.secondary = null;
    this._listeners = new Set();
  }

  subscribe(fn) {
    this._listeners.add(fn);
    fn(this.getState());
    return () => this._listeners.delete(fn);
  }

  _emit() {
    const snapshot = this.getState();
    this._listeners.forEach((fn) => fn(snapshot));
  }

  getState() {
    return {
      primary: this.primary
        ? { pieza: this.primary.pieza, playing: this.primary.layer.playing, volume: this.primary.layer.volume }
        : null,
      secondary: this.secondary
        ? { pieza: this.secondary.pieza, playing: this.secondary.layer.playing, volume: this.secondary.layer.volume }
        : null,
    };
  }

  /**
   * Reproduce una pieza como capa principal. Si ya había algo sonando, hace
   * crossfade (fade-out de lo anterior + fade-in de lo nuevo); si no había
   * nada sonando, es un fade-in simple desde silencio — el caso de "click en
   * un marcador del mapa".
   */
  async playPieza(pieza, { fadeMs = DEFAULT_FADE_MS } = {}) {
    const nextLayer = createLayer(pieza);
    await nextLayer.load();
    nextLayer.setVolume(0);
    nextLayer.play();

    const previous = this.primary;
    this.primary = { pieza, layer: nextLayer };
    this._emit();

    const tasks = [nextLayer.fadeVolume(1, fadeMs).then(() => this._emit())];
    if (previous) {
      tasks.push(previous.layer.fadeVolume(0, fadeMs).then(() => previous.layer.destroy()));
    }
    await Promise.all(tasks);
  }

  /** Añade/reemplaza la capa secundaria (p. ej. recitado sobre el paisaje). */
  async playSecondary(pieza, { fadeMs = DEFAULT_FADE_MS } = {}) {
    if (this.secondary) {
      const old = this.secondary;
      this.secondary = null;
      await old.layer.fadeVolume(0, fadeMs / 2).then(() => old.layer.destroy());
    }
    const layer = createLayer(pieza);
    await layer.load();
    layer.setVolume(0);
    layer.play();
    this.secondary = { pieza, layer };
    this._emit();
    await layer.fadeVolume(1, fadeMs);
    this._emit();
  }

  async stopSecondary({ fadeMs = DEFAULT_FADE_MS } = {}) {
    if (!this.secondary) return;
    const { layer } = this.secondary;
    this.secondary = null;
    this._emit();
    await layer.fadeVolume(0, fadeMs);
    layer.destroy();
  }

  setPrimaryVolume(v) {
    if (!this.primary) return;
    this.primary.layer.setVolume(v);
    this._emit();
  }

  setSecondaryVolume(v) {
    if (!this.secondary) return;
    this.secondary.layer.setVolume(v);
    this._emit();
  }

  togglePlayPause() {
    if (!this.primary) return;
    const shouldPlay = !this.primary.layer.playing;
    if (shouldPlay) {
      this.primary.layer.play();
      this.secondary && this.secondary.layer.play();
    } else {
      this.primary.layer.pause();
      this.secondary && this.secondary.layer.pause();
    }
    this._emit();
  }

  async stopAll({ fadeMs = DEFAULT_FADE_MS } = {}) {
    const layers = [this.primary, this.secondary].filter(Boolean);
    this.primary = null;
    this.secondary = null;
    this._emit();
    await Promise.all(
      layers.map(({ layer }) => layer.fadeVolume(0, fadeMs).then(() => layer.destroy()))
    );
  }
}

export const atlasPlayerEngine = new AtlasPlayerEngine();

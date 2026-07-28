import React, { useEffect, useState } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';
import { atlasPlayerEngine } from '@/lib/audioEngine';

function formatTime(s) {
  if (!Number.isFinite(s) || s < 0) return '0:00';
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${String(sec).padStart(2, '0')}`;
}

/* Botón de reproducción del Atlas Sonoro para usar embebido en cualquier
   página (no depende de la barra fija del mapa). Comparte el mismo motor
   (atlasPlayerEngine), así que solo una pieza suena a la vez en todo el sitio. */
export default function SoundPlayButton({ pieza, label = 'Escuchar obra sonora' }) {
  const [state, setState] = useState(atlasPlayerEngine.getState());
  const [progress, setProgress] = useState({ current: 0, duration: pieza.duracion || 0 });

  useEffect(() => atlasPlayerEngine.subscribe(setState), []);

  const isActive = state.primary?.pieza.id === pieza.id;
  const playing = isActive && state.primary.playing;

  useEffect(() => {
    if (!isActive) { setProgress({ current: 0, duration: pieza.duracion || 0 }); return; }
    const id = setInterval(() => {
      const layer = atlasPlayerEngine.primary?.layer;
      if (layer) setProgress({ current: layer.currentTime, duration: layer.duration });
    }, 250);
    return () => clearInterval(id);
  }, [isActive, pieza.duracion]);

  const handleClick = () => {
    if (isActive) {
      atlasPlayerEngine.togglePlayPause();
    } else {
      atlasPlayerEngine.playPieza(pieza);
    }
  };

  return (
    <div className="inline-flex flex-col gap-2">
      <button
        onClick={handleClick}
        className="group inline-flex items-center gap-3 rounded-full border border-primary/40 bg-primary/10 px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/70 hover:bg-primary/15"
      >
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform group-active:scale-95">
          {playing ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5 translate-x-0.5" />}
        </span>
        {label}
        <Volume2 className="h-4 w-4 text-primary/70" strokeWidth={1.6} />
      </button>
      {isActive && (
        <div className="flex items-center gap-2 pl-1">
          <div className="h-1 w-40 overflow-hidden rounded-full bg-border/50">
            <div
              className="h-full bg-primary transition-[width] duration-200"
              style={{ width: `${progress.duration ? Math.min(100, (progress.current / progress.duration) * 100) : 0}%` }}
            />
          </div>
          <span className="font-mono text-[10px] text-muted-foreground">
            {formatTime(progress.current)} / {formatTime(progress.duration)}
          </span>
        </div>
      )}
    </div>
  );
}

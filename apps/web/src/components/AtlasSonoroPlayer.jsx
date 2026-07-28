import React, { useEffect, useState } from 'react';
import { Play, Pause, X, Volume2, Layers, Headphones } from 'lucide-react';
import { atlasPlayerEngine } from '@/lib/audioEngine';
import { ACTO_LABEL, TIPO_LABEL } from '@/lib/atlasSonoro';

function formatTime(s) {
  if (!Number.isFinite(s) || s < 0) return '0:00';
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${String(sec).padStart(2, '0')}`;
}

export default function AtlasSonoroPlayer({ piezas }) {
  const [state, setState] = useState(atlasPlayerEngine.getState());
  const [progress, setProgress] = useState({ current: 0, duration: 0 });
  const [pickerOpen, setPickerOpen] = useState(false);

  useEffect(() => atlasPlayerEngine.subscribe(setState), []);

  useEffect(() => {
    const id = setInterval(() => {
      const layer = atlasPlayerEngine.primary?.layer;
      if (layer) {
        setProgress({ current: layer.currentTime, duration: layer.duration });
      }
    }, 250);
    return () => clearInterval(id);
  }, []);

  if (!state.primary) return null;

  const { pieza, playing, volume } = state.primary;
  const secondaryOptions = piezas.filter((p) => p.id !== pieza.id && p.id !== state.secondary?.pieza?.id);

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border/50 bg-background/85 px-4 py-3 backdrop-blur-lg md:px-8">
      <div className="mx-auto flex max-w-[90rem] flex-col gap-3">
        <div className="flex flex-wrap items-center gap-4">
          <button
            onClick={() => atlasPlayerEngine.togglePlayPause()}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105 active:scale-95"
            aria-label={playing ? 'Pausar' : 'Reproducir'}
          >
            {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 translate-x-0.5" />}
          </button>

          <div className="min-w-0 flex-1">
            <p className="truncate font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
              {ACTO_LABEL[pieza.acto]} · {TIPO_LABEL[pieza.tipo]}
            </p>
            <p className="truncate font-display text-base">{pieza.titulo}</p>
            <div className="mt-1.5 h-1 w-full max-w-md overflow-hidden rounded-full bg-border/50">
              <div
                className="h-full bg-primary transition-[width] duration-200"
                style={{ width: `${progress.duration ? Math.min(100, (progress.current / progress.duration) * 100) : 0}%` }}
              />
            </div>
            <p className="mt-1 font-mono text-[10px] text-muted-foreground">
              {formatTime(progress.current)} / {formatTime(progress.duration)}
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <Volume2 className="h-4 w-4 text-muted-foreground" />
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={(e) => atlasPlayerEngine.setPrimaryVolume(Number(e.target.value))}
              className="h-1 w-20 cursor-pointer accent-primary"
              aria-label="Volumen de la capa principal"
            />
          </div>

          <button
            onClick={() => setPickerOpen((v) => !v)}
            className={`flex shrink-0 items-center gap-2 rounded-full border px-3 py-2 text-xs transition-colors ${
              state.secondary ? 'border-secondary/60 text-secondary' : 'border-border/60 text-muted-foreground hover:text-foreground'
            }`}
            title="Escuchar una segunda capa simultánea"
          >
            <Layers className="h-3.5 w-3.5" /> Doble capa
          </button>

          <button
            onClick={() => atlasPlayerEngine.stopAll()}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Detener"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {state.secondary && (
          <div className="flex flex-wrap items-center gap-3 border-t border-border/30 pt-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-secondary">Capa 2</span>
            <span className="truncate text-sm text-foreground/80">{state.secondary.pieza.titulo}</span>
            <Volume2 className="h-3.5 w-3.5 text-muted-foreground" />
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={state.secondary.volume}
              onChange={(e) => atlasPlayerEngine.setSecondaryVolume(Number(e.target.value))}
              className="h-1 w-20 cursor-pointer accent-secondary"
              aria-label="Volumen de la capa secundaria"
            />
            <button
              onClick={() => atlasPlayerEngine.stopSecondary()}
              className="ml-auto text-muted-foreground hover:text-foreground"
              aria-label="Quitar capa secundaria"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        )}

        {pickerOpen && !state.secondary && (
          <div className="flex flex-wrap gap-2 border-t border-border/30 pt-3">
            {secondaryOptions.length === 0 && (
              <span className="text-xs text-muted-foreground">No hay otras piezas disponibles todavía.</span>
            )}
            {secondaryOptions.map((p) => (
              <button
                key={p.id}
                onClick={async () => {
                  await atlasPlayerEngine.playSecondary(p);
                  setPickerOpen(false);
                }}
                className="rounded-full border border-border/60 px-3 py-1.5 text-xs text-foreground/80 transition-colors hover:border-secondary/60 hover:text-secondary"
              >
                {TIPO_LABEL[p.tipo]} · {p.titulo}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function HeadphoneHint({ visible, onDismiss }) {
  if (!visible) return null;
  return (
    <div className="fixed bottom-24 left-1/2 z-40 w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 rounded-xl border border-border/50 bg-card/90 px-4 py-3 text-sm shadow-lg backdrop-blur md:bottom-6 md:left-6 md:w-auto md:translate-x-0">
      <div className="flex items-start gap-3">
        <Headphones className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.6} />
        <div className="flex-1">
          <p className="text-foreground/90">Esta experiencia está diseñada para audífonos.</p>
          <p className="mt-0.5 text-xs text-muted-foreground">El audio espacial se aprecia mejor con ellos puestos.</p>
        </div>
        <button onClick={onDismiss} aria-label="Cerrar sugerencia" className="text-muted-foreground hover:text-foreground">
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { LLONGOCURA_IMG, LLONGOCURA_ESCENARIOS } from '@/lib/llongocuraData';

// Mapa interactivo sobre la foto aérea. Los marcadores se posicionan en % para
// mantenerse alineados con la imagen en cualquier tamaño de pantalla.
export default function LlongocuraMap({ activeId, onSelect }) {
  const [params] = useSearchParams();
  const calibrar = params.has('calibrar');
  const [punto, setPunto] = useState(null);

  const onClickMapa = (e) => {
    if (!calibrar) return;
    const r = e.currentTarget.getBoundingClientRect();
    setPunto({
      x: +(((e.clientX - r.left) / r.width) * 100).toFixed(1),
      y: +(((e.clientY - r.top) / r.height) * 100).toFixed(1),
    });
  };

  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl border border-border/50"
      style={{ aspectRatio: `${LLONGOCURA_IMG.ancho} / ${LLONGOCURA_IMG.alto}` }}
      onClick={onClickMapa}
    >
      <img src={LLONGOCURA_IMG.src} alt={LLONGOCURA_IMG.alt} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-background/10" />

      {LLONGOCURA_ESCENARIOS.map((e, i) => {
        const activo = e.id === activeId;
        return (
          <button
            key={e.id}
            type="button"
            onClick={(ev) => { ev.stopPropagation(); onSelect(e.id); }}
            aria-pressed={activo}
            aria-label={e.nombre}
            style={{ left: `${e.x}%`, top: `${e.y}%` }}
            className="group absolute -translate-x-1/2 -translate-y-1/2 focus:outline-none"
          >
            <span
              className={`flex h-9 w-9 items-center justify-center rounded-full border-2 font-mono text-xs font-bold shadow-lg backdrop-blur-sm transition-all md:h-11 md:w-11 ${
                activo
                  ? 'scale-110 border-primary bg-primary text-primary-foreground'
                  : 'border-foreground/80 bg-background/70 text-foreground group-hover:border-primary group-focus-visible:border-primary'
              }`}
            >
              {i + 1}
            </span>
            <span
              className={`pointer-events-none absolute bottom-full left-1/2 mb-1.5 -translate-x-1/2 whitespace-nowrap rounded-full bg-background/85 px-2.5 py-1 text-[11px] backdrop-blur-sm transition-opacity ${
                activo ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100'
              } hidden md:block`}
            >
              {e.nombre}
            </span>
          </button>
        );
      })}

      {calibrar && (
        <div className="absolute left-3 top-3 rounded-md bg-background/90 px-3 py-2 font-mono text-xs">
          {punto ? `x: ${punto.x}, y: ${punto.y}` : 'Modo calibración: haz clic en el mapa'}
        </div>
      )}
      {calibrar && punto && (
        <span style={{ left: `${punto.x}%`, top: `${punto.y}%` }} className="pointer-events-none absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500 ring-2 ring-white" />
      )}
    </div>
  );
}

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SiteChrome from '@/components/SiteChrome';
import PageHead from '@/components/PageHead';
import SiteFooter from '@/components/SiteFooter';
import LlongocuraMap from '@/components/LlongocuraMap';
import { Reveal } from '@/components/ccr/CCRSection';
import { LLONGOCURA_TITULO, LLONGOCURA_SUBTITULO, LLONGOCURA_ESCENARIOS, LLONGOCURA_IMG } from '@/lib/llongocuraData';

export default function LlongocuraPage() {
  const [activeId, setActiveId] = useState(LLONGOCURA_ESCENARIOS[0].id);
  const activo = LLONGOCURA_ESCENARIOS.find((e) => e.id === activeId);

  return (
    <div className="grain relative bg-background">
      <PageHead
        title={LLONGOCURA_TITULO}
        description="Mapa de escenarios del Campo Cultural Llongocura: Anfiteatro, El Nido, Ruka y Estacionamiento."
        image={LLONGOCURA_IMG.src}
      />
      <SiteChrome current="Campo Cultural Llongocura" />

      <main className="mx-auto max-w-6xl px-6 pb-20 pt-28 md:px-12">
        <Link to="/experiencias" className="inline-flex items-center gap-2 rounded-full border border-foreground/25 px-4 py-2 text-xs transition-colors hover:border-foreground/60">
          <ArrowLeft className="h-3.5 w-3.5" /> Experiencias
        </Link>

        <Reveal className="mt-8 max-w-3xl">
          <span className="font-mono text-[11px] uppercase tracking-[0.4em] text-primary">Mapa de escenarios</span>
          <h1 className="mt-4 font-display text-5xl font-light leading-[1.02] tracking-tight md:text-6xl">{LLONGOCURA_TITULO}</h1>
          <p className="mt-5 text-[15px] leading-relaxed text-foreground/80">{LLONGOCURA_SUBTITULO}</p>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_340px]">
          <LlongocuraMap activeId={activeId} onSelect={setActiveId} />

          <aside className="flex flex-col gap-4">
            <div className="rounded-2xl border border-border/50 bg-card/40 p-6" aria-live="polite">
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">{activo.tipo}</span>
              <h2 className="mt-2 font-display text-2xl font-light">{activo.nombre}</h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground/80">{activo.descripcion}</p>
              <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50">Por confirmar</p>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-foreground/70">
                {activo.porConfirmar.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </div>

            <ol className="grid gap-2">
              {LLONGOCURA_ESCENARIOS.map((e, i) => (
                <li key={e.id}>
                  <button
                    type="button"
                    onClick={() => setActiveId(e.id)}
                    aria-pressed={e.id === activeId}
                    className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-colors ${
                      e.id === activeId ? 'border-primary bg-primary/10' : 'border-border/50 hover:border-foreground/40'
                    }`}
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-foreground/40 font-mono text-xs">{i + 1}</span>
                    {e.nombre}
                  </button>
                </li>
              ))}
            </ol>
          </aside>
        </div>

        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-foreground/50">
          Propuesta inicial: las posiciones sobre la fotografía aérea son aproximadas y están pendientes de validación en terreno.
        </p>
      </main>

      <SiteFooter />
    </div>
  );
}

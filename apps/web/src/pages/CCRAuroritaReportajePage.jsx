import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import SiteChrome from '@/components/SiteChrome';
import PageHead from '@/components/PageHead';
import SiteFooter from '@/components/SiteFooter';
import { Reveal } from '@/components/ccr/CCRSection';
import { CCR_AURORITA, CCR_AURORITA_FOTOS } from '@/lib/ccrData';

function Foto({ index, className = '' }) {
  const foto = CCR_AURORITA_FOTOS[index];
  if (!foto) return null;
  return (
    <figure className={className}>
      <div className="overflow-hidden rounded-md">
        <img src={foto.src} alt={foto.alt} className="aspect-[3/2] w-full object-cover" loading="lazy" />
      </div>
      <figcaption className="mt-2 text-xs text-muted-foreground">{foto.alt}</figcaption>
    </figure>
  );
}

export default function CCRAuroritaReportajePage() {
  const r = CCR_AURORITA;
  const [
    sSalaEscucha, sQuienEs, sSeisMeses, sDosCanciones, sSesion, sPorQueImporta,
  ] = r.secciones;

  return (
    <div className="grain relative bg-background">
      <PageHead
        title="Aurorita Ramos y el coro del taller de adulto mayor — CCR"
        description="Reportaje: el taller de canto tradicional que la folclorista de Hualañé dicta con un grupo de adultos mayores registró en estudio dos canciones del cancionero popular chileno en el Centro Creativo Rural."
      />
      <SiteChrome current="Crear · CCR · Trabajos previos" />

      {/* HERO */}
      <section className="relative flex min-h-[90dvh] flex-col overflow-hidden">
        <div className="absolute inset-0">
          <img src={CCR_AURORITA_FOTOS[0].src} alt={CCR_AURORITA_FOTOS[0].alt} className="h-full w-full origin-center animate-slow-pan object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/45 to-background" />
        </div>

        <div className="relative z-10 flex flex-1 flex-col justify-end px-6 pb-16 pt-28 md:px-12">
          <Link to="/ccr#trabajos-previos" className="mb-auto inline-flex w-fit items-center gap-2 rounded-full border border-foreground/25 bg-background/30 px-4 py-2 text-xs backdrop-blur-sm transition-colors hover:border-foreground/60">
            <ArrowLeft className="h-3.5 w-3.5" /> Centro Creativo Rural
          </Link>

          <div className="max-w-3xl">
            <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="font-mono text-[11px] uppercase tracking-[0.4em] text-primary">
              Trabajos previos en el CCR
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} className="mt-4 font-display text-4xl font-light leading-tight tracking-tight md:text-6xl">
              {r.titulo}
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.7 }} className="mt-5 max-w-xl text-[15px] leading-relaxed text-foreground/80">
              {r.bajada}
            </motion.p>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        {/* La sala escucha */}
        <Reveal>
          <h2 className="font-display text-2xl font-light tracking-tight md:text-3xl">{sSalaEscucha.titulo}</h2>
          {sSalaEscucha.parrafos.map((p, i) => (
            <p key={i} className="mt-4 text-[15px] leading-relaxed text-foreground/85">{p}</p>
          ))}
        </Reveal>

        {/* Quién es Aurorita Ramos + Foto 2 */}
        <Reveal className="mt-16" delay={0.05}>
          <h2 className="font-display text-2xl font-light tracking-tight md:text-3xl">{sQuienEs.titulo}</h2>
          <Foto index={1} className="my-6" />
          {sQuienEs.parrafos.map((p, i) => (
            <p key={i} className="mt-4 text-[15px] leading-relaxed text-foreground/85">{p}</p>
          ))}
        </Reveal>

        {/* Seis meses de taller + Fotos 3 y 4 */}
        <Reveal className="mt-16" delay={0.05}>
          <h2 className="font-display text-2xl font-light tracking-tight md:text-3xl">{sSeisMeses.titulo}</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-foreground/85">{sSeisMeses.parrafos[0]}</p>
          <Foto index={2} className="my-6" />
          <p className="mt-4 text-[15px] leading-relaxed text-foreground/85">{sSeisMeses.parrafos[1]}</p>
          <Foto index={3} className="my-6" />
        </Reveal>

        {/* Las dos canciones + Foto 5 */}
        <Reveal className="mt-16" delay={0.05}>
          <h2 className="font-display text-2xl font-light tracking-tight md:text-3xl">{sDosCanciones.titulo}</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-foreground/85">{sDosCanciones.parrafos[0]}</p>
          <Foto index={4} className="my-6" />
          <div className="mt-4 space-y-5">
            {sDosCanciones.canciones.map((c, i) => (
              c.pendiente ? (
                <div key={i} className="rounded-lg border border-dashed border-border/60 px-5 py-4">
                  <p className="text-sm italic text-foreground/60">Nombre de la segunda canción — pendiente por confirmar.</p>
                </div>
              ) : (
                <p key={i} className="text-[15px] leading-relaxed text-foreground/85">
                  <span className="font-display text-base font-medium text-foreground">{c.titulo}. </span>
                  {c.texto}
                </p>
              )
            ))}
          </div>
        </Reveal>

        {/* La sesión + Foto 6 */}
        <Reveal className="mt-16" delay={0.05}>
          <h2 className="font-display text-2xl font-light tracking-tight md:text-3xl">{sSesion.titulo}</h2>
          {sSesion.parrafos.map((p, i) => (
            <p key={i} className="mt-4 text-[15px] leading-relaxed text-foreground/85">{p}</p>
          ))}
          <Foto index={5} className="my-6" />
        </Reveal>

        {/* Por qué importa */}
        <Reveal className="mt-16" delay={0.05}>
          <h2 className="font-display text-2xl font-light tracking-tight md:text-3xl">{sPorQueImporta.titulo}</h2>
          {sPorQueImporta.parrafos.map((p, i) => (
            <p key={i} className="mt-4 text-[15px] leading-relaxed text-foreground/85">{p}</p>
          ))}
        </Reveal>

        {/* Ficha técnica */}
        <Reveal className="mt-20 border-t border-border/40 pt-12" delay={0.05}>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Ficha técnica</span>
          <dl className="mt-6 space-y-4">
            {r.fichaTecnica.map((f) => (
              <div key={f.label} className="grid gap-1 sm:grid-cols-[14rem_1fr] sm:gap-4">
                <dt className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">{f.label}</dt>
                <dd className="text-sm text-foreground/85">{f.valor}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* Cierre — Foto 7 */}
        <Reveal className="mt-16" delay={0.05}>
          <Foto index={6} className="my-6" />
          <p className="text-xs italic text-muted-foreground">{r.creditoPendiente}</p>
        </Reveal>
      </article>

      <SiteFooter />
    </div>
  );
}

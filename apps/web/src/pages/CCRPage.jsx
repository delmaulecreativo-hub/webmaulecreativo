import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight, Mail } from 'lucide-react';
import SiteChrome from '@/components/SiteChrome';
import PageHead from '@/components/PageHead';
import SiteFooter from '@/components/SiteFooter';
import CCRSection, { Reveal } from '@/components/ccr/CCRSection';
import CCRList from '@/components/ccr/CCRList';
import { CCR_TITULO, CCR_SUBTITULO, CCR_HERO_IMG, CCR_FICHA, CCR_BLOQUE_LABORATORIO } from '@/lib/ccrData';

const ANCLAS = CCR_FICHA.map((s) => ({ id: s.id, label: s.kicker.replace(/^\d+\s*·\s*/, '') }));

export default function CCRPage() {
  return (
    <div className="grain relative bg-background">
      <PageHead
        title="Centro Creativo Rural (CCR)"
        description="Casa-estudio de arte, sonido y territorio en el sector rural de La Leonera, Licantén: residencias artísticas por invitación curada, equipamiento profesional y base física del Laboratorio de Ingeniería Creativa."
      />
      <SiteChrome current="Crear · Centro Creativo Rural" />

      {/* HERO */}
      <section className="relative flex min-h-[100dvh] flex-col overflow-hidden">
        <div className="absolute inset-0">
          <img src={CCR_HERO_IMG.src} alt={CCR_HERO_IMG.alt} className="h-full w-full origin-center animate-slow-pan object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/45 to-background" />
        </div>

        <div className="relative z-10 flex flex-1 flex-col justify-end px-6 pb-16 pt-28 md:px-12">
          <Link to="/experiencias" className="mb-auto inline-flex w-fit items-center gap-2 rounded-full border border-foreground/25 bg-background/30 px-4 py-2 text-xs backdrop-blur-sm transition-colors hover:border-foreground/60">
            <ArrowLeft className="h-3.5 w-3.5" /> Experiencias
          </Link>

          <div className="max-w-3xl">
            <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="font-mono text-[11px] uppercase tracking-[0.4em] text-primary">
              CCR · La Leonera, Licantén
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} className="mt-4 font-display text-5xl font-light leading-[1.02] tracking-tight md:text-7xl">
              {CCR_TITULO}
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.7 }} className="mt-5 max-w-xl text-[15px] leading-relaxed text-foreground/80">
              {CCR_SUBTITULO}
            </motion.p>
          </div>

          {/* Navegación rápida a las secciones ancladas */}
          <nav className="mt-10 flex flex-wrap gap-2">
            {ANCLAS.map((a) => (
              <a
                key={a.id}
                href={`#${a.id}`}
                className="rounded-full border border-foreground/20 bg-background/30 px-3 py-1.5 text-[11px] font-mono uppercase tracking-[0.15em] text-foreground/70 backdrop-blur-sm transition-colors hover:border-primary/60 hover:text-primary"
              >
                {a.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* SECCIONES 1–9 */}
      {CCR_FICHA.map((s) => (
        <CCRSection key={s.id} id={s.id} kicker={s.kicker} titulo={s.titulo}>
          {s.parrafos && s.parrafos.map((p, i) => (
            <p key={i} className="mt-4 text-[15px] leading-relaxed text-foreground/85 first:mt-0">{p}</p>
          ))}

          {s.intro && <p className="text-[15px] leading-relaxed text-foreground/80">{s.intro}</p>}

          {s.subtitulo && (
            <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-secondary">{s.subtitulo}</p>
          )}

          {s.lista && <div className={s.intro || s.subtitulo ? 'mt-6' : ''}><CCRList items={s.lista} /></div>}

          {s.cierre && <p className="mt-6 text-[15px] leading-relaxed text-foreground/70">{s.cierre}</p>}

          {s.cta && (
            <a
              href={s.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3"
            >
              {s.cta.texto} <ArrowUpRight className="h-4 w-4 transition-all" />
            </a>
          )}

          {s.trabajos && (
            <div className="mt-2 flex flex-col divide-y divide-border/30">
              {s.trabajos.map((t) => (
                <div key={t.titulo} className="py-6 first:pt-0 last:pb-0">
                  <p className="font-display text-lg text-foreground">{t.titulo}</p>
                  <p className="mt-2 text-[15px] leading-relaxed text-foreground/75">{t.texto}</p>
                  <Link to={t.to} className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3">
                    {t.ctaTexto} <ArrowRight className="h-4 w-4 transition-all" />
                  </Link>
                </div>
              ))}
            </div>
          )}

          {s.email && (
            <a
              href={`mailto:${s.email}?subject=${encodeURIComponent(s.asunto)}`}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/50 px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
            >
              <Mail className="h-4 w-4" /> {s.email}
            </a>
          )}
        </CCRSection>
      ))}

      {/* TAREA C — bloque contextual CCR → Laboratorio */}
      <section className="relative overflow-hidden border-t border-border/40 py-20">
        <Reveal className="mx-auto max-w-2xl px-6 text-center">
          <p className="font-display text-2xl font-light leading-snug md:text-3xl">{CCR_BLOQUE_LABORATORIO.titulo}</p>
          <p className="mt-4 text-[15px] leading-relaxed text-foreground/75">{CCR_BLOQUE_LABORATORIO.texto}</p>
          <a
            href={CCR_BLOQUE_LABORATORIO.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3"
          >
            {CCR_BLOQUE_LABORATORIO.ctaTexto} <ArrowUpRight className="h-4 w-4 transition-all" />
          </a>
        </Reveal>
      </section>

      <SiteFooter />
    </div>
  );
}

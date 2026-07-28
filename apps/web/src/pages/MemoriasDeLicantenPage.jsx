import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, User, Mail, Instagram, BookOpen } from 'lucide-react';
import SiteChrome from '@/components/SiteChrome';
import PageHead from '@/components/PageHead';
import {
  LICANTEN_PROYECTO, LICANTEN_IMG, LICANTEN_PRESENTACION, LICANTEN_AUTORES, LICANTEN_TALLER,
  LICANTEN_LANZAMIENTO, LICANTEN_FICHA, LICANTEN_ADQUIRIR, LICANTEN_ECOSISTEMA, LICANTEN_CREDITOS,
} from '@/lib/mauleData';

const EASE = [0.22, 1, 0.36, 1];

function Reveal({ children, delay = 0, y = 24, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

function mailtoUrl({ to, subject, body }) {
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/* Motivo decorativo muy sutil de libro abierto — sin fotografía todavía */
function BookMotif() {
  return (
    <svg
      viewBox="0 0 600 300"
      preserveAspectRatio="xMidYMid slice"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.14]"
      aria-hidden="true"
    >
      <path d="M40 60 C120 40, 200 40, 300 60 L300 240 C200 220, 120 220, 40 240 Z" fill="none" stroke="hsl(var(--sand))" strokeWidth="1" />
      <path d="M560 60 C480 40, 400 40, 300 60 L300 240 C400 220, 480 220, 560 240 Z" fill="none" stroke="hsl(var(--sand))" strokeWidth="1" />
      {[80, 100, 120, 140].map((y) => (
        <line key={`l-${y}`} x1="60" y1={y} x2="270" y2={y - 4} stroke="hsl(var(--sand))" strokeWidth="0.6" />
      ))}
      {[80, 100, 120, 140].map((y) => (
        <line key={`r-${y}`} x1="330" y1={y - 4} x2="540" y2={y} stroke="hsl(var(--sand))" strokeWidth="0.6" />
      ))}
    </svg>
  );
}

/* Tarjeta de autor/a — retrato pendiente hasta confirmar pareo foto↔nombre */
function AutorCard({ autor, i }) {
  return (
    <Reveal delay={(i % 5) * 0.06} className="flex flex-col items-center text-center">
      <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[hsl(var(--sand)/0.35)] bg-card/40 sm:h-28 sm:w-28">
        {autor.retrato ? (
          <img src={autor.retrato} alt={autor.nombre} className="h-full w-full rounded-full object-cover" />
        ) : (
          <User className="h-8 w-8 text-muted-foreground" strokeWidth={1.3} />
        )}
      </div>
      <p className="mt-4 max-w-[10rem] font-display text-base leading-snug">{autor.nombre}</p>
    </Reveal>
  );
}

export default function MemoriasDeLicantenPage() {
  const cta = LICANTEN_ADQUIRIR.mailto;

  return (
    <div className="grain relative bg-background">
      <PageHead
        title="Memorias de Licantén — Un libro de 10 adultos mayores de Licantén"
        description="Diez habitantes de Licantén relatan su historia de vida en este libro de relatos financiado por el Fondo del Libro y la Lectura 2023. Adquiere tu ejemplar impreso."
        image={LICANTEN_IMG.mockup}
      />
      <SiteChrome current="Personas · Patrimonio Vivo · Memorias de Licantén" />

      {/* HERO */}
      <section className="relative flex min-h-[90dvh] flex-col justify-center overflow-hidden px-6 py-32 md:px-12">
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--sand)/0.08)] via-background to-background" />
        <BookMotif />

        <div className="relative mx-auto grid max-w-[75rem] items-center gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
          <div className="text-center md:text-left">
            <Reveal>
              <span className="font-mono text-xs uppercase tracking-[0.4em] text-[hsl(var(--sand))]">
                Libro de relatos · Patrimonio vivo
              </span>
              <h1 className="mt-6 font-display text-4xl font-light leading-[1.05] tracking-tight md:text-6xl">
                {LICANTEN_PROYECTO.titulo}
              </h1>
              <p className="mt-4 font-display text-xl italic text-foreground/70 md:text-2xl">
                {LICANTEN_PROYECTO.subtitulo}
              </p>
              <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-foreground/75 md:mx-0">
                {LICANTEN_PROYECTO.bajada}
              </p>
            </Reveal>

            <Reveal delay={0.15} className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-start">
              <a
                href={mailtoUrl(cta)}
                className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-foreground px-8 py-4 text-sm font-medium text-background transition-all duration-300 hover:gap-3 active:scale-[0.98]"
              >
                <span className="absolute inset-0 -translate-x-full bg-[hsl(var(--sand))] transition-transform duration-500 ease-out group-hover:translate-x-0" />
                <span className="relative">Adquirir un ejemplar — {LICANTEN_PROYECTO.precioTexto}</span>
                <ArrowRight className="relative h-4 w-4 transition-transform" />
              </a>
              <a
                href="#autores"
                className="group flex items-center gap-2 rounded-full border border-foreground/25 px-8 py-4 text-sm font-medium text-foreground/90 backdrop-blur-sm transition-all duration-300 hover:border-foreground/60 hover:gap-3"
              >
                Conocer a los autores
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-[420px]">
              <div className="absolute -inset-8 rounded-full bg-[hsl(var(--sand)/0.12)] blur-3xl" />
              <img
                src={LICANTEN_IMG.mockup}
                alt="Mockup del libro Memorias de Licantén: portada con retratos circulares de los diez autores, contraportada y ejemplares apilados"
                className="relative w-full drop-shadow-2xl"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* PRESENTACIÓN */}
      <section id="presentacion" className="relative border-t border-border/40 py-24 md:py-32">
        <div className="mx-auto max-w-2xl space-y-6 px-6 text-[15px] leading-relaxed text-foreground/80">
          {LICANTEN_PRESENTACION.map((p) => (
            <Reveal key={p.slice(0, 24)}>
              <p>{p}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* LAS AUTORAS Y AUTORES */}
      <section id="autores" className="relative border-t border-border/40 py-24 md:py-32">
        <div className="mx-auto max-w-[75rem] px-6 md:px-12">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[hsl(var(--sand))]">Las autoras y autores</span>
            <h2 className="mt-3 font-display text-3xl font-light tracking-tight md:text-5xl">Diez voces, un mismo territorio</h2>
            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-foreground/70">
              Diez oficios, diez historias de vida cruzándose en Licantén.
            </p>
          </Reveal>

          <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 md:grid-cols-5 md:gap-y-16">
            {LICANTEN_AUTORES.map((autor, i) => (
              <AutorCard key={autor.nombre} autor={autor} i={i} />
            ))}
          </div>

          <Reveal delay={0.1} className="mt-14 text-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Fotografía: Cristian Piérola — retratos por publicar
            </p>
          </Reveal>
        </div>
      </section>

      {/* EL TALLER */}
      <section id="taller" className="relative border-t border-border/40 py-24 md:py-32">
        <div className="mx-auto max-w-[90rem] px-6 md:px-12">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <Reveal>
              <div className="flex aspect-[4/5] flex-col items-center justify-center gap-3 rounded-sm border border-dashed border-border/60 bg-card/40 text-center">
                <BookOpen className="h-8 w-8 text-muted-foreground" strokeWidth={1.3} />
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Foto del taller — pendiente</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-[hsl(var(--sand))]">El taller</span>
              <h2 className="mt-3 font-display text-3xl font-light tracking-tight md:text-5xl">Del relato oral a la página</h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-foreground/80">{LICANTEN_TALLER.texto}</p>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-foreground/65">{LICANTEN_TALLER.metodo}</p>
              <a
                href={`https://www.instagram.com/${LICANTEN_TALLER.instagram.replace('@', '')}/`}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm text-primary hover:gap-3"
              >
                <Instagram className="h-4 w-4" /> {LICANTEN_TALLER.tallerista} · {LICANTEN_TALLER.instagram}
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* EL LANZAMIENTO */}
      <section id="lanzamiento" className="relative border-t border-border/40 py-24 md:py-32">
        <div className="mx-auto max-w-[90rem] px-6 md:px-12">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16 md:[&>*:first-child]:order-2">
            <Reveal>
              <div className="flex aspect-[4/5] flex-col items-center justify-center gap-3 rounded-sm border border-dashed border-border/60 bg-card/40 text-center">
                <BookOpen className="h-8 w-8 text-muted-foreground" strokeWidth={1.3} />
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Foto del lanzamiento — pendiente</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-[hsl(var(--sand))]">El lanzamiento</span>
              <h2 className="mt-3 font-display text-3xl font-light tracking-tight md:text-5xl">{LICANTEN_LANZAMIENTO.fecha}, {LICANTEN_LANZAMIENTO.lugar}</h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-foreground/80">{LICANTEN_LANZAMIENTO.texto}</p>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-foreground/65">{LICANTEN_LANZAMIENTO.cierre}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FICHA TÉCNICA */}
      <section id="ficha-tecnica" className="relative border-t border-border/40 py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal className="text-center">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[hsl(var(--sand))]">Ficha técnica</span>
            <h2 className="mt-3 font-display text-3xl font-light tracking-tight md:text-5xl">El libro en detalle</h2>
          </Reveal>

          <Reveal delay={0.1} className="mt-12 divide-y divide-border/40 border-y border-border/40">
            {LICANTEN_FICHA.map((f) => (
              <div key={f.t} className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[14rem_1fr] sm:gap-6">
                <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">{f.t}</span>
                <span className="text-[15px] text-foreground/85">{f.d}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CÓMO ADQUIRIR EL LIBRO */}
      <section id="adquirir" className="relative border-t border-border/40 py-24 md:py-32">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[hsl(var(--sand))]">Cómo adquirir el libro</span>
            <h2 className="mt-3 font-display text-3xl font-light tracking-tight md:text-5xl">Un ejemplar — {LICANTEN_PROYECTO.precioTexto}</h2>
            <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-foreground/80">{LICANTEN_ADQUIRIR.stock}</p>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-foreground/70">{LICANTEN_ADQUIRIR.comoComprar}</p>
          </Reveal>

          <Reveal delay={0.1} className="mt-8">
            <a
              href={mailtoUrl(cta)}
              className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--sand))] px-8 py-4 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
            >
              <Mail className="h-4 w-4" /> Escribir a {cta.to}
            </a>
            <p className="mt-4 text-sm text-foreground/60">{LICANTEN_ADQUIRIR.aporte}</p>
          </Reveal>

          <Reveal delay={0.15} className="mx-auto mt-14 max-w-xl rounded-xl border border-dashed border-border/60 p-6 text-left">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Versión digital</p>
            <p className="mt-3 text-sm leading-relaxed text-foreground/70">{LICANTEN_ADQUIRIR.digital}</p>
          </Reveal>
        </div>
      </section>

      {/* ECOSISTEMA LOCAL DE MEMORIA */}
      <section id="ecosistema" className="relative border-t border-border/40 py-24 md:py-32">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[hsl(var(--sand))]">En el ecosistema local de memoria</span>
            <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-foreground/75">{LICANTEN_ECOSISTEMA}</p>
          </Reveal>
        </div>
      </section>

      {/* CRÉDITOS COMPLETOS */}
      <section id="creditos" className="relative border-t border-border/40 py-20">
        <div className="mx-auto max-w-2xl px-6">
          <Reveal className="text-center">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Créditos completos</span>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 space-y-3">
            {LICANTEN_CREDITOS.map((c) => (
              <p key={c.t} className="text-center text-sm text-foreground/70">
                <span className="text-foreground/50">{c.t}:</span> {c.d}
              </p>
            ))}
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-border/40 px-6 py-12 md:px-12">
        <div className="mx-auto flex max-w-[90rem] flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <p className="font-display text-lg">Memorias de Licantén</p>
          <Link to="/experiencias" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
            <ArrowLeft className="h-4 w-4" /> Volver a Experiencias
          </Link>
        </div>
      </footer>
    </div>
  );
}

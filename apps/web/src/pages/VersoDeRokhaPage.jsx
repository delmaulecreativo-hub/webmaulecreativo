import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CalendarDays, Clock, MapPin, Quote, Mic2 } from 'lucide-react';
import SiteChrome from '@/components/SiteChrome';
import PageHead from '@/components/PageHead';
import {
  ROKHA_IMG, ROKHA_GALERIA, ROKHA_POETA, ROKHA_BANDA, ROKHA_CONCIERTO,
} from '@/lib/mauleData';

function Reveal({ children, delay = 0, y = 28, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function VersoDeRokhaPage() {
  return (
    <div className="grain relative bg-background">
      <PageHead
        title="Verso de Rokha — Museo Digital"
        description="Museo digital en homenaje a Pablo de Rokha: su vida y obra, el proyecto musical Verso de Rokha y el archivo del concierto en el Anfiteatro Pasarela de Licantén."
      />
      <SiteChrome current="Crear · Museo Digital · Verso de Rokha" />

      {/* HERO */}
      <section className="relative flex min-h-[100dvh] flex-col overflow-hidden">
        <div className="absolute inset-0">
          <img src={ROKHA_IMG.hero} alt="Verso de Rokha en concierto" className="h-full w-full origin-center animate-slow-pan object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/45 to-background" />
        </div>

        <div className="relative z-10 flex flex-1 flex-col justify-end px-6 pb-16 pt-28 md:px-12">
          <Link to="/experiencias" className="mb-auto inline-flex w-fit items-center gap-2 rounded-full border border-foreground/25 bg-background/30 px-4 py-2 text-xs backdrop-blur-sm transition-colors hover:border-foreground/60">
            <ArrowLeft className="h-3.5 w-3.5" /> Experiencias
          </Link>

          <div className="max-w-3xl">
            <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="font-mono text-[11px] uppercase tracking-[0.4em] text-primary">
              Museo digital · Homenaje a Pablo de Rokha
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} className="mt-4 font-display text-5xl font-light leading-[1.02] tracking-tight md:text-7xl">
              Verso de Rokha
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.7 }} className="mt-5 max-w-xl text-[15px] leading-relaxed text-foreground/80">
              La épica de Pablo de Rokha, nacido en Licantén, vuelta a poner en movimiento: un proyecto musical que devuelve al Maule la voz de su poeta.
            </motion.p>
          </div>
        </div>
      </section>

      {/* EL POETA */}
      <section className="relative border-t border-border/40 py-24 md:py-32">
        <div className="mx-auto max-w-[90rem] px-6 md:px-12">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                <img src={ROKHA_IMG.poeta} alt="Licantén, tierra natal de Pablo de Rokha" className="h-full w-full object-cover" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Quién fue</span>
              <h2 className="mt-3 font-display text-3xl font-light tracking-tight md:text-5xl">{ROKHA_POETA.nombre}</h2>
              <p className="mt-5 text-[15px] leading-relaxed text-foreground/85">{ROKHA_POETA.bio}</p>
              <p className="mt-4 text-[15px] leading-relaxed text-foreground/70">{ROKHA_POETA.legado}</p>
              <div className="mt-8 flex flex-col gap-3 border-t border-border/40 pt-6 text-sm text-foreground/70 sm:flex-row sm:gap-10">
                <span><span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Nacimiento</span><br />{ROKHA_POETA.nacimiento}</span>
                <span><span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Muerte</span><br />{ROKHA_POETA.muerte}</span>
                <span><span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Reconocimiento</span><br />{ROKHA_POETA.premio}</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CITA — espacio reservado, sin atribuir versos sin verificar */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <Quote className="mx-auto h-8 w-8 text-primary/60" strokeWidth={1.3} />
            <div className="mt-6 rounded-xl border border-dashed border-border/60 px-6 py-10">
              <p className="font-display text-xl font-light italic leading-relaxed text-foreground/60 md:text-2xl">
                Espacio reservado para un verso de la obra de Pablo de Rokha.
              </p>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Pendiente: seleccionar el pasaje y citar obra + año
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* LA BANDA */}
      <section className="relative border-t border-border/40 py-24 md:py-32">
        <div className="mx-auto max-w-[90rem] px-6 md:px-12">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16 md:[&>*:first-child]:order-2">
            <Reveal>
              <div className="relative aspect-[16/10] overflow-hidden rounded-sm">
                <img src={ROKHA_IMG.banda} alt="Verso de Rokha, proyecto musical, en vivo" className="h-full w-full object-cover" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-primary">
                <Mic2 className="h-4 w-4" /> {ROKHA_BANDA.kicker}
              </span>
              <h2 className="mt-3 font-display text-3xl font-light tracking-tight md:text-5xl">El proyecto</h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-foreground/85">{ROKHA_BANDA.desc}</p>
              <div className="mt-6 flex flex-col gap-2 text-sm text-foreground/70">
                <span><span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Formato · </span>{ROKHA_BANDA.formato}</span>
                <span><span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Origen · </span>{ROKHA_BANDA.origen}</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* EL CONCIERTO */}
      <section className="relative border-t border-border/40 py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Archivo del concierto</span>
            <h2 className="mt-3 font-display text-3xl font-light tracking-tight md:text-5xl">{ROKHA_CONCIERTO.titulo}</h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-foreground/80">{ROKHA_CONCIERTO.resumen}</p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-10 grid gap-6 overflow-hidden rounded-xl border border-border/50 bg-card/60 p-6 backdrop-blur sm:grid-cols-3 md:p-8">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.6} />
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Lugar</p>
                  <p className="mt-1 text-sm text-foreground/90">{ROKHA_CONCIERTO.lugar}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.6} />
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Fecha</p>
                  <p className="mt-1 text-sm text-foreground/90">{ROKHA_CONCIERTO.fecha}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.6} />
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Hora</p>
                  <p className="mt-1 text-sm text-foreground/90">{ROKHA_CONCIERTO.hora}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* GALERÍA */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-[95rem] px-6 md:px-12">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Galería</span>
            <h2 className="mt-3 font-display text-3xl font-light tracking-tight md:text-5xl">La noche en Licantén</h2>
          </Reveal>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {ROKHA_GALERIA.map((src, i) => (
              <Reveal key={i} delay={(i % 3) * 0.08}>
                <div className={`overflow-hidden rounded-md ${i % 3 === 1 ? 'md:mt-10' : ''}`}>
                  <img src={src} alt={`Verso de Rokha en concierto — registro ${i + 1}`} className="aspect-[4/3] w-full object-cover transition-transform duration-[1.2s] hover:scale-105" />
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <p className="mt-8 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Imágenes de referencia — pendiente reemplazo por el registro fotográfico real del concierto
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-border/40 py-16">
        <Link to="/colabora" className="group relative block w-full">
          <div className="absolute inset-0">
            <img src={ROKHA_IMG.afiche} alt="Colabora con Verso de Rokha" className="h-full w-full object-cover opacity-25 transition-opacity duration-500 group-hover:opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background" />
          </div>
          <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 py-20 text-center">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Un homenaje vivo</span>
            <p className="mt-3 font-display text-3xl font-light md:text-5xl">Ayúdanos a llevar este museo más lejos</p>
            <span className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all group-hover:gap-3">
              Quiero colaborar <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </Link>
      </section>

      <footer className="border-t border-border/40 px-6 py-12 md:px-12">
        <div className="mx-auto flex max-w-[90rem] flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <p className="font-display text-lg">Museo Digital Verso de Rokha</p>
          <Link to="/experiencias" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
            <ArrowLeft className="h-4 w-4" /> Volver a Experiencias
          </Link>
        </div>
      </footer>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowDown, Plus, MapPin, Headphones, BrainCircuit, Layers, ExternalLink } from 'lucide-react';
import SiteChrome from '@/components/SiteChrome';
import PageHead from '@/components/PageHead';
import {
  LAB_MONTAGE,
  LINEAS_INVESTIGACION,
  LAB_METODO,
  LAB_EQUIPO,
  LAB_TERRITORIOS,
} from '@/lib/mauleData';

const LINEAS_ID = [
  { icon: MapPin, t: 'Inteligencia Territorial', d: 'Datos georreferenciados y cartografía del territorio.' },
  { icon: Headphones, t: 'Experiencias Inmersivas — Estación Sonora', d: 'Audio espacial, XR y video 360°.' },
  { icon: BrainCircuit, t: 'IA aplicada a Patrimonio', d: 'Transcripción de memoria oral y asistentes territoriales.' },
  { icon: Layers, t: 'Plataformas Territoriales', d: 'Infraestructura digital para municipios y comunidades.' },
];

const PROTOTIPOS = [
  { t: 'Plataforma Web del Ecosistema', d: 'El ecosistema digital de Maule Creativo.', href: 'https://maulecreativo.cl', externo: true },
  { t: 'Verso de Rokha', d: 'Experiencia inmersiva sobre la obra y el territorio.', href: 'https://maulecreativo.cl/verso-de-rokha', externo: true },
  { t: 'Museo Digital del Maule', d: 'Patrimonio del Maule en formato digital.', href: 'https://maulecreativo.cl/museo-digital', externo: true },
  { t: 'Atlas Sensorial', d: 'Registro sensorial de los territorios del Maule.', href: '/atlas', externo: false },
];

const TRAYECTORIA = [
  { a: '2012', d: 'Investigación en ingeniería acústica y paisaje sonoro.' },
  { a: '2015', d: 'Experiencias inmersivas y turismo creativo.' },
  { a: '2018', d: 'Laboratorio de Ingeniería Creativa.' },
  { a: '2021', d: 'Centro de Innovación Cultural.' },
  { a: '2026', d: 'Laboratorio Tecnológico Creativo con infraestructura propia (VPS, IA, plataforma territorial).' },
];

function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* Composición de pantalla completa que se alterna con transiciones suaves */
function MontageHero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % LAB_MONTAGE.length), 5200);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative flex min-h-[100dvh] items-end overflow-hidden">
      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.img
            key={i}
            src={LAB_MONTAGE[i].src}
            alt={LAB_MONTAGE[i].cap}
            className="absolute inset-0 h-full w-full animate-slow-pan object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/45 to-background/50" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[90rem] px-6 pb-20 md:px-12">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-mono text-xs uppercase tracking-[0.35em] text-primary"
        >
          Estación 02 · Media Lab territorial
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mt-5 max-w-4xl font-display text-4xl font-light leading-[1.05] tracking-tight md:text-7xl"
        >
          Laboratorio de<br />Ingeniería Creativa
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-7 max-w-2xl text-lg leading-relaxed text-foreground/85 md:text-xl"
        >
          Un espacio donde investigamos, diseñamos y prototipamos nuevas formas de
          conectar a las personas con los territorios mediante patrimonio, creatividad
          y tecnologías inmersivas.
        </motion.p>

        <div className="mt-10 flex items-center gap-3">
          {LAB_MONTAGE.map((_, k) => (
            <span
              key={k}
              className={`h-px transition-all duration-500 ${k === i ? 'w-10 bg-primary' : 'w-5 bg-foreground/25'}`}
            />
          ))}
          <span className="ml-4 font-mono text-[11px] uppercase tracking-widest text-foreground/60">
            {LAB_MONTAGE[i].cap}
          </span>
        </div>
      </div>
    </section>
  );
}

/* Línea de investigación — diagrama vertical con hover */
function LineaInvestigacion() {
  const [open, setOpen] = useState(null);
  return (
    <section className="mx-auto max-w-3xl px-6 py-28 md:px-12">
      <Reveal className="text-center">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-secondary">Línea de investigación</span>
        <h2 className="mt-4 font-display text-3xl font-light tracking-tight md:text-4xl">
          Cinco áreas que convergen
        </h2>
      </Reveal>

      <div className="mt-16 flex flex-col items-center">
        <Reveal className="w-full">
          <div className="mx-auto flex w-fit items-center gap-3 rounded-full border border-primary/40 bg-primary/10 px-7 py-3">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="font-mono text-sm uppercase tracking-[0.25em] text-primary">Laboratorio</span>
          </div>
        </Reveal>

        {LINEAS_INVESTIGACION.map((l, i) => (
          <React.Fragment key={l.t}>
            <Reveal delay={0.04}>
              <ArrowDown className="my-3 h-5 w-5 text-border" strokeWidth={1.4} />
            </Reveal>
            <Reveal delay={0.05} className="w-full">
              <button
                onMouseEnter={() => setOpen(i)}
                onMouseLeave={() => setOpen(null)}
                onClick={() => setOpen(open === i ? null : i)}
                className="group w-full overflow-hidden rounded-sm border border-border/60 bg-card text-left transition-colors hover:border-primary/50"
              >
                <div className="flex items-center justify-between gap-4 px-6 py-5 md:px-8">
                  <span className="font-display text-xl md:text-2xl">{l.t}</span>
                  <Plus
                    className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${open === i ? 'rotate-45' : ''}`}
                    strokeWidth={1.5}
                  />
                </div>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground md:px-8">{l.d}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </Reveal>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default function LaboratorioPage() {
  const [activo, setActivo] = useState(LAB_TERRITORIOS[0].id);
  const territorio = LAB_TERRITORIOS.find((t) => t.id === activo);

  return (
    <div className="grain relative min-h-[100dvh] bg-background">
      <PageHead 
        title="El Laboratorio"
        description="Centro Creativo Rural de investigación en tecnología creativa, paisaje sonoro, realidad virtual, inteligencia artificial y cartografía territorial en el Maule."
      />
      <SiteChrome current="Investigar · El Laboratorio" />

      <MontageHero />

      {/* Manifiesto */}
      <section className="mx-auto max-w-3xl px-6 py-28 md:px-12">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-secondary">Manifiesto</span>
          <div className="mt-8 space-y-7 font-display text-2xl font-light leading-snug tracking-tight text-foreground/90 md:text-3xl">
            <p>El laboratorio no es solamente un lugar físico.</p>
            <p>
              Es un espacio de investigación donde el territorio se convierte en un{' '}
              <span className="marker-underline">laboratorio vivo</span>.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
              Aquí exploramos nuevas metodologías para comprender la identidad de los lugares
              mediante paisaje sonoro, producción audiovisual, inteligencia artificial, realidad
              virtual, cartografía digital y procesos de co-creación con las comunidades.
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-2 border-l-2 border-primary/60 pl-6">
            <p className="font-display text-xl italic text-foreground/90">Cada proyecto comienza escuchando.</p>
            <p className="font-display text-xl italic text-foreground/90">Cada experiencia nace del territorio.</p>
          </div>
        </Reveal>
      </section>

      <LineaInvestigacion />

      {/* ¿Cómo investigamos? */}
      <section className="border-t border-border/40 bg-card/30 px-6 py-28 md:px-12">
        <div className="mx-auto max-w-[90rem]">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-secondary">Metodología</span>
            <h2 className="mt-4 font-display text-3xl font-light tracking-tight md:text-5xl">¿Cómo investigamos?</h2>
          </Reveal>
          <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-border/50 bg-border/50 md:grid-cols-5">
            {LAB_METODO.map((m, i) => (
              <Reveal key={m.n} delay={i * 0.07} className="bg-background">
                <div className="group flex h-full flex-col p-7 transition-colors hover:bg-card/60">
                  <span className="font-mono text-sm text-primary">{m.n}</span>
                  <p className="mt-4 font-display text-2xl">{m.t}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{m.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Laboratorio móvil */}
      <section className="mx-auto max-w-[90rem] px-6 py-28 md:px-12">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-secondary">Equipamiento</span>
          <h2 className="mt-4 font-display text-3xl font-light tracking-tight md:text-5xl">Nuestro laboratorio móvil</h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            No son productos. Son herramientas de investigación del territorio. Cada una responde a una pregunta:
            <span className="text-foreground/80"> ¿para qué la utilizamos?</span>
          </p>
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border/50 bg-border/50 sm:grid-cols-2 lg:grid-cols-3">
          {LAB_EQUIPO.map((e, i) => (
            <Reveal key={e.t} delay={(i % 3) * 0.06} className="bg-card">
              <div className="group h-full p-8 transition-colors hover:bg-card/50">
                <p className="font-display text-xl">{e.t}</p>
                <p className="mt-4 font-mono text-[11px] uppercase tracking-widest text-primary/80">¿Para qué lo utilizamos?</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.para}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* El territorio es nuestro laboratorio */}
      <section className="border-t border-border/40 bg-card/30 px-6 py-28 md:px-12">
        <div className="mx-auto max-w-[90rem]">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-secondary">Territorio</span>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-light tracking-tight md:text-5xl">
              El territorio es nuestro laboratorio
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Nuestro laboratorio comienza en el Centro Creativo Rural, pero su verdadero espacio de
              experimentación son los territorios y las comunidades.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <Reveal className="relative aspect-[4/3] overflow-hidden rounded-sm border border-border/60 bg-background">
              {/* mapa estilizado */}
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 30% 40%, hsl(var(--secondary)/0.25), transparent 60%), radial-gradient(circle at 70% 70%, hsl(var(--primary)/0.18), transparent 55%)',
                }}
              />
              <svg className="absolute inset-0 h-full w-full opacity-30" preserveAspectRatio="none">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M40 0 L0 0 0 40" fill="none" stroke="hsl(var(--border))" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>

              {LAB_TERRITORIOS.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActivo(t.id)}
                  onMouseEnter={() => setActivo(t.id)}
                  className="group absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${t.x}%`, top: `${t.y}%` }}
                  aria-label={t.nombre}
                >
                  <span className="relative flex h-4 w-4 items-center justify-center">
                    {activo === t.id && (
                      <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-primary/60" />
                    )}
                    <span
                      className={`relative h-3 w-3 rounded-full border transition-all ${
                        activo === t.id
                          ? 'scale-125 border-primary bg-primary'
                          : 'border-foreground/50 bg-background group-hover:border-primary'
                      }`}
                    />
                  </span>
                  <span
                    className={`absolute left-1/2 top-5 -translate-x-1/2 whitespace-nowrap font-mono text-[10px] uppercase tracking-widest transition-colors ${
                      activo === t.id ? 'text-primary' : 'text-foreground/60'
                    }`}
                  >
                    {t.nombre}
                  </span>
                </button>
              ))}
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex flex-col gap-6">
                <div className="flex flex-wrap gap-2">
                  {LAB_TERRITORIOS.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setActivo(t.id)}
                      className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                        activo === t.id
                          ? 'border-primary bg-primary/10 text-primary'
                          : 'border-border/60 text-muted-foreground hover:border-foreground/40'
                      }`}
                    >
                      {t.nombre}
                    </button>
                  ))}
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activo}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35 }}
                    className="rounded-sm border border-border/50 bg-background p-8"
                  >
                    <p className="font-display text-3xl font-light">{territorio.nombre}</p>
                    <p className="mt-4 leading-relaxed text-muted-foreground">{territorio.d}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Líneas de I+D */}
      <section className="border-t border-border/40 bg-card/30 px-6 py-28 md:px-12">
        <div className="mx-auto max-w-[90rem]">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-secondary">Líneas de I+D</span>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-light tracking-tight md:text-5xl">Capacidades de investigación y desarrollo</h2>
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border/50 bg-border/50 md:grid-cols-2">
            {LINEAS_ID.map((l, i) => {
              const Icon = l.icon;
              return (
                <Reveal key={l.t} delay={(i % 2) * 0.06} className="bg-card">
                  <div className="flex h-full gap-5 p-8 transition-colors hover:bg-card/50">
                    <Icon className="h-7 w-7 shrink-0 text-primary" strokeWidth={1.4} />
                    <div>
                      <p className="font-display text-xl md:text-2xl">{l.t}</p>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{l.d}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Prototipos en operación */}
      <section className="mx-auto max-w-[90rem] px-6 py-28 md:px-12">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-secondary">Prototipos en operación</span>
          <h2 className="mt-4 font-display text-3xl font-light tracking-tight md:text-5xl">Lo que ya funciona</h2>
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border/50 bg-border/50 sm:grid-cols-2">
          {PROTOTIPOS.map((p, i) => {
            const inner = (
              <div className="group flex h-full flex-col p-8 transition-colors hover:bg-card/50">
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-secondary/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-secondary">
                    <span className="h-1.5 w-1.5 rounded-full bg-secondary" /> En operación
                  </span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" strokeWidth={1.5} />
                </div>
                <p className="mt-6 font-display text-xl md:text-2xl">{p.t}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
              </div>
            );
            return (
              <Reveal key={p.t} delay={(i % 2) * 0.06} className="bg-card">
                {p.externo ? (
                  <a href={p.href} target="_blank" rel="noreferrer noopener" className="block h-full">{inner}</a>
                ) : (
                  <Link to={p.href} className="block h-full">{inner}</Link>
                )}
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Trayectoria */}
      <section className="border-t border-border/40 bg-card/30 px-6 py-28 md:px-12">
        <div className="mx-auto max-w-[90rem]">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-secondary">Trayectoria</span>
            <h2 className="mt-4 font-display text-3xl font-light tracking-tight md:text-5xl">Una capacidad construida en el tiempo</h2>
          </Reveal>
          <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-border/50 bg-border/50 md:grid-cols-5">
            {TRAYECTORIA.map((t, i) => (
              <Reveal key={t.a} delay={i * 0.06} className="bg-background">
                <div className="flex h-full flex-col p-7">
                  <span className="font-mono text-lg text-primary">{t.a}</span>
                  <span className="mt-3 h-px w-8 bg-primary/40" />
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Proyección */}
      <section className="mx-auto max-w-3xl px-6 py-28 md:px-12">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-secondary">Proyección</span>
          <h2 className="mt-4 font-display text-3xl font-light tracking-tight md:text-5xl">Del Maule al mundo</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            El laboratorio desarrolla metodología y tecnología replicables, con capacidad de escalar
            desde el territorio hacia otros contextos.
          </p>
          <div className="mt-10 space-y-4">
            {[
              { e: 'Regional', d: 'Municipios del Maule.' },
              { e: 'Nacional', d: 'Territorios rurales de Chile.' },
              { e: 'Internacional', d: 'América Latina.' },
            ].map((s) => (
              <div key={s.e} className="flex items-baseline gap-4 border-l-2 border-primary/50 pl-5">
                <span className="font-mono text-xs uppercase tracking-widest text-primary">{s.e}</span>
                <span className="text-foreground/85">{s.d}</span>
              </div>
            ))}
          </div>
          <p className="mt-10 font-display text-2xl font-light italic leading-snug text-foreground/90">
            Buscamos aliados: universidades, gobiernos, fondos de innovación.
          </p>
        </Reveal>
      </section>

      {/* Cierre */}
      <section className="border-t border-border/40 px-6 py-32 text-center md:px-12">
        <Reveal>
          <p className="mx-auto max-w-4xl font-display text-3xl font-light leading-tight tracking-tight text-foreground md:text-6xl">
            No diseñamos experiencias para los territorios.
            <br />
            <span className="text-primary">Las diseñamos junto a ellos.</span>
          </p>
          <Link
            to="/atlas"
            className="mt-12 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Conoce el Atlas Sensorial <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>
    </div>
  );
}

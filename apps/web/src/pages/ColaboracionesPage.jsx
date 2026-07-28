import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowDown, CalendarClock, Plus, Mail, Linkedin, Instagram } from 'lucide-react';
import SiteChrome from '@/components/SiteChrome';
import { COLAB_ORGS, COLAB_CREAR, COLAB_PROCESO, COLAB_IMG } from '@/lib/mauleData';

function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function ColaboracionesPage() {
  const [abierto, setAbierto] = useState(null);

  return (
    <div className="grain relative min-h-[100dvh] bg-background">
      <SiteChrome current="Colaboraciones · Construyamos juntos" />

      {/* Hero con mapa mundial sutil */}
      <section className="relative flex min-h-[85dvh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={COLAB_IMG.mundo} alt="Mapa del mundo conectado en red" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-[80rem] px-6 pt-28 md:px-12">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-mono text-xs uppercase tracking-[0.35em] text-primary">
            Colaboraciones
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="mt-5 max-w-4xl font-display text-4xl font-light leading-[1.05] tracking-tight md:text-7xl"
          >
            Construyamos el próximo territorio juntos.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-7 max-w-2xl space-y-4 text-lg leading-relaxed text-foreground/80"
          >
            <p>
              Creemos que la innovación cultural surge cuando diferentes disciplinas, comunidades e
              instituciones trabajan de manera colaborativa.
            </p>
            <p>
              Buscamos desarrollar proyectos junto a organizaciones que compartan una visión de
              patrimonio vivo, creatividad y tecnología.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cuadrícula de organizaciones */}
      <section className="mx-auto max-w-[90rem] px-6 py-24 md:px-12">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-secondary">Con quiénes colaboramos</span>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-light tracking-tight md:text-5xl">
            Un laboratorio abierto al mundo
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border/50 bg-border/50 sm:grid-cols-2 lg:grid-cols-3">
          {COLAB_ORGS.map((o, i) => {
            const open = abierto === i;
            return (
              <Reveal key={o.t} delay={(i % 3) * 0.05} className="bg-card">
                <button
                  onClick={() => setAbierto(open ? null : i)}
                  className="group flex h-full w-full flex-col p-7 text-left transition-colors hover:bg-card/60"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-display text-xl md:text-2xl">{o.t}</span>
                    <Plus className={`mt-1 h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${open ? 'rotate-45' : ''}`} strokeWidth={1.5} />
                  </div>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="mt-4 overflow-hidden text-sm leading-relaxed text-muted-foreground"
                      >
                        {o.ej}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </button>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ¿Qué podemos crear juntos? */}
      <section className="border-t border-border/40 bg-card/30 px-6 py-24 md:px-12">
        <div className="mx-auto max-w-[90rem]">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-secondary">Posibilidades</span>
            <h2 className="mt-4 font-display text-3xl font-light tracking-tight md:text-5xl">¿Qué podemos crear juntos?</h2>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {COLAB_CREAR.map((c, i) => (
              <Reveal key={c.t} delay={(i % 3) * 0.06}>
                <div className="group flex h-full flex-col justify-between rounded-sm border border-border/50 bg-background p-8 transition-colors hover:border-primary/50">
                  <div>
                    <span className="font-mono text-[11px] text-primary/70">{String(i + 1).padStart(2, '0')}</span>
                    <p className="mt-3 font-display text-2xl font-light leading-tight">{c.t}</p>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Nuestro proceso de colaboración */}
      <section className="mx-auto max-w-3xl px-6 py-28 md:px-12">
        <Reveal className="text-center">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-secondary">Metodología</span>
          <h2 className="mt-4 font-display text-3xl font-light tracking-tight md:text-5xl">
            Nuestro proceso de colaboración
          </h2>
        </Reveal>
        <div className="mt-16 flex flex-col items-center">
          {COLAB_PROCESO.map((p, i) => (
            <React.Fragment key={p.n}>
              <Reveal delay={0.04} className="w-full">
                <div className="flex w-full items-start gap-6 rounded-sm border border-border/60 bg-card p-6 md:p-8">
                  <span className="font-mono text-2xl text-primary md:text-3xl">{p.n}</span>
                  <div>
                    <p className="font-display text-2xl">{p.t}</p>
                    <p className="mt-2 text-muted-foreground">{p.d}</p>
                  </div>
                </div>
              </Reveal>
              {i < COLAB_PROCESO.length - 1 && (
                <Reveal delay={0.02}>
                  <ArrowDown className="my-3 h-5 w-5 text-border" strokeWidth={1.4} />
                </Reveal>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* Visión global — frase grande sobre mapa sutil */}
      <section className="relative overflow-hidden border-y border-border/40 px-6 py-32 md:px-12">
        <div className="absolute inset-0">
          <img src={COLAB_IMG.mundo} alt="Red global de territorios" className="h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-background/60" />
        </div>
        <div className="relative mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="text-sm leading-relaxed text-muted-foreground">
              El Maule representa el origen del laboratorio. Nuestra metodología puede desarrollarse en
              cualquier territorio de Chile y del mundo.
            </p>
            <p className="mt-10 font-display text-3xl font-light leading-tight tracking-tight text-foreground md:text-5xl">
              &ldquo;Cada territorio posee una identidad.
              <br />
              <span className="text-primary">Nos interesa descubrirla junto a quienes la habitan.&rdquo;</span>
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/colabora"
                className="group flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
              >
                Diseñemos un proyecto juntos <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/colabora"
                className="group flex items-center gap-2 rounded-full border border-foreground/25 px-8 py-4 text-sm font-medium text-foreground/90 backdrop-blur-sm transition-colors hover:border-foreground/60"
              >
                <CalendarClock className="h-4 w-4" /> Agenda una reunión
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Cierre emocional — fin de exposición inmersiva */}
      <section className="relative flex min-h-[90dvh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={COLAB_IMG.cierre} alt="Persona frente a la costa del Maule al atardecer" className="h-full w-full animate-slow-pan object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-[80rem] px-6 pb-16 md:px-12">
          <Reveal>
            <p className="max-w-3xl font-display text-3xl font-light leading-tight tracking-tight text-foreground md:text-6xl">
              El futuro de los territorios comienza escuchándolos.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-16 flex flex-col gap-8 border-t border-foreground/15 pt-8 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="font-display text-2xl">Maule Creativo</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Centro Creativo Rural
                  <br />
                  Laboratorio de Ingeniería Creativa
                  <br />
                  Licantén · Región del Maule · Chile
                </p>
              </div>
              <div className="flex items-center gap-5">
                <a href="mailto:hola@maulecreativo.cl" aria-label="Correo" className="text-muted-foreground transition-colors hover:text-primary">
                  <Mail className="h-5 w-5" strokeWidth={1.5} />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted-foreground transition-colors hover:text-primary">
                  <Linkedin className="h-5 w-5" strokeWidth={1.5} />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-muted-foreground transition-colors hover:text-primary">
                  <Instagram className="h-5 w-5" strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

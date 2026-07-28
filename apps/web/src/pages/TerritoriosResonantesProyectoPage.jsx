import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft, ArrowRight, Ear, BookOpen, Map, Leaf, Mic, Users, Globe, Instagram, Music, FolderOpen,
} from 'lucide-react';
import SiteChrome from '@/components/SiteChrome';
import PageHead from '@/components/PageHead';
import SoundPlayButton from '@/components/SoundPlayButton';
import {
  TR_IMG, TR_PROYECTO, TR_DEFINICION, TR_MANIFIESTO, TR_JUSTIFICACION, TR_OBJETIVOS,
  TR_EXPERIENCIA, TR_PUBLICO, TR_MEDIACION, TR_ESTACIONES, TR_ARCHIVO_VIVO, TR_REDES,
  TR_ARTISTAS, TR_PROYECCION, TR_REFERENTES, TR_CIERRE, TR_CONTACTO, TR_AUDIO,
} from '@/lib/mauleData';

const ESTACION_ICONS = [Ear, BookOpen, Map, Leaf, Mic];

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

export default function TerritoriosResonantesProyectoPage() {
  return (
    <div className="grain relative bg-background">
      <PageHead
        title="Territorios Resonantes — Residencia Creativa"
        description="Instalación inmersiva de Karolina Mättig y Carlos González que combina pintura, escultura, plantas y tecnología sonora para revelar las voces invisibles del territorio del Maule."
      />
      <SiteChrome current="Crear · Residencia Creativa · Territorios Resonantes" />

      {/* HERO */}
      <section className="relative flex min-h-[100dvh] flex-col overflow-hidden">
        <div className="absolute inset-0">
          <img src={TR_IMG.hero} alt="Instalación inmersiva Territorios Resonantes" className="h-full w-full origin-center animate-slow-pan object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/45 to-background" />
        </div>

        <div className="relative z-10 flex flex-1 flex-col justify-end px-6 pb-16 pt-28 md:px-12">
          <Link to="/experiencias" className="mb-auto inline-flex w-fit items-center gap-2 rounded-full border border-foreground/25 bg-background/30 px-4 py-2 text-xs backdrop-blur-sm transition-colors hover:border-foreground/60">
            <ArrowLeft className="h-3.5 w-3.5" /> Experiencias
          </Link>

          <div className="max-w-3xl">
            <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="font-mono text-[11px] uppercase tracking-[0.4em] text-primary">
              {TR_PROYECTO.kicker}
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} className="mt-4 font-display text-5xl font-light leading-[1.02] tracking-tight md:text-7xl">
              {TR_PROYECTO.titulo}
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.7 }} className="mt-5 max-w-xl text-[15px] leading-relaxed text-foreground/80">
              {TR_PROYECTO.tagline} — una residencia creativa de Karolina Mättig y Carlos González.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ¿QUÉ ES? */}
      <section className="relative border-t border-border/40 py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <img src={TR_IMG.emblema} alt="Emblema Territorios Resonantes" className="mx-auto h-20 w-20 opacity-90" />
            <h2 className="mt-6 font-display text-3xl font-light tracking-tight md:text-5xl">{TR_DEFINICION.pregunta}</h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-foreground/80">{TR_DEFINICION.texto}</p>
            <div className="mx-auto mt-8 max-w-md space-y-1">
              {TR_DEFINICION.lineas.map((l) => (
                <p key={l} className="font-display text-lg italic text-foreground/70">{l}</p>
              ))}
            </div>
            <div className="mx-auto mt-8 flex max-w-xl flex-wrap items-center justify-center gap-2">
              {TR_DEFINICION.chips.map((c) => (
                <span key={c} className="rounded-full border border-border/50 bg-card/40 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-foreground/70">
                  {c}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* MANIFIESTO */}
      <section className="relative overflow-hidden border-t border-border/40 py-24 md:py-32">
        <div className="absolute inset-0">
          <img src={TR_IMG.bosqueLuz} alt="Bosque del Maule" className="h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
        </div>
        <div className="relative mx-auto max-w-2xl px-6 text-center">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Manifiesto</span>
            <p className="mt-6 font-display text-xl font-light italic leading-relaxed text-foreground/90 md:text-2xl">
              {TR_PROYECTO.pregunta}
            </p>
          </Reveal>
          <Reveal delay={0.12} className="mt-8 space-y-5 text-[15px] leading-relaxed text-foreground/75">
            {TR_MANIFIESTO.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </Reveal>
        </div>
      </section>

      {/* JUSTIFICACIÓN */}
      <section className="relative border-t border-border/40 py-24 md:py-32">
        <div className="mx-auto max-w-[90rem] px-6 md:px-12">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <Reveal>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[4/5] overflow-hidden rounded-sm">
                  <img src={TR_IMG.procesoPintura} alt="Karolina Mättig pintando" className="h-full w-full object-cover" />
                </div>
                <div className="mt-8 aspect-[4/5] overflow-hidden rounded-sm">
                  <img src={TR_IMG.esculturaRaices} alt="Materiales naturales para las esculturas vivas" className="h-full w-full object-cover" />
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Justificación artística y conceptual</span>
              <p className="mt-5 text-[15px] leading-relaxed text-foreground/80">{TR_JUSTIFICACION.intro}</p>
              <div className="mt-8 space-y-6 border-t border-border/40 pt-6">
                {TR_JUSTIFICACION.columnas.map((c) => (
                  <div key={c.t}>
                    <p className="font-display text-lg">{c.t}</p>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/65">{c.d}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* OBJETIVOS */}
      <section className="relative border-t border-border/40 py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Objetivos</span>
            <h2 className="mt-3 font-display text-3xl font-light tracking-tight md:text-5xl">Objetivo general</h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-foreground/80">{TR_OBJETIVOS.general}</p>
          </Reveal>
        </div>
        <div className="mx-auto mt-14 grid max-w-[90rem] gap-5 px-6 sm:grid-cols-2 md:grid-cols-3 md:px-12">
          {TR_OBJETIVOS.especificos.map((o, i) => (
            <Reveal key={o.t} delay={(i % 3) * 0.08}>
              <div className="h-full rounded-sm border border-border/50 bg-card/40 p-6 backdrop-blur-sm">
                <p className="font-display text-lg">{o.t}</p>
                <p className="mt-2 text-sm leading-relaxed text-foreground/65">{o.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* LA EXPERIENCIA */}
      <section className="relative border-t border-border/40 py-24 md:py-32">
        <div className="mx-auto max-w-[90rem] px-6 md:px-12">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16 md:[&>*:first-child]:order-2">
            <Reveal>
              <div className="relative aspect-[16/10] overflow-hidden rounded-sm">
                <img src={TR_IMG.instalacionInterior} alt="Interior de la instalación inmersiva" className="h-full w-full object-cover" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">La experiencia</span>
              <h2 className="mt-3 font-display text-3xl font-light tracking-tight md:text-5xl">Un recorrido, no una exposición</h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-foreground/85">{TR_EXPERIENCIA.intro}</p>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-foreground/65">{TR_EXPERIENCIA.recorrido}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PÚBLICO */}
      <section className="relative border-t border-border/40 py-24 md:py-32">
        <div className="mx-auto max-w-[90rem] px-6 md:px-12">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Público</span>
            <h2 className="mt-3 font-display text-3xl font-light tracking-tight md:text-5xl">Múltiples puertas de entrada</h2>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {TR_PUBLICO.map((p, i) => (
              <Reveal key={p.t} delay={(i % 2) * 0.1}>
                <div className="flex h-full items-start gap-3 rounded-sm border border-border/50 bg-card/40 p-6 backdrop-blur-sm">
                  <Users className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.5} />
                  <div>
                    <p className="font-display text-lg">{p.t}</p>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/65">{p.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.15} className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3">
            {[TR_IMG.publicoEscucha1, TR_IMG.publicoEncuentro, TR_IMG.publicoEscucha2].map((src) => (
              <div key={src} className="aspect-square overflow-hidden rounded-full">
                <img src={src} alt="Público experimentando la instalación" className="h-full w-full object-cover" />
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* MEDIACIÓN CULTURAL */}
      <section className="relative border-t border-border/40 py-24 md:py-32">
        <div className="mx-auto max-w-[90rem] px-6 md:px-12">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Mediación cultural</span>
            <h2 className="mt-3 font-display text-3xl font-light tracking-tight md:text-5xl">Cuatro momentos</h2>
          </Reveal>
          <div className="relative mt-16 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4 md:gap-8">
            <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block" />
            {TR_MEDIACION.map((m, i) => (
              <Reveal key={m.n} delay={i * 0.08} className="relative flex flex-col items-center text-center">
                <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-primary/40 bg-background font-mono text-sm text-primary">
                  {m.n}
                </span>
                <h3 className="mt-4 font-display text-xl font-light tracking-tight">{m.t}</h3>
                <p className="mt-2 max-w-[16rem] text-sm leading-relaxed text-foreground/65">{m.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ESTACIONES DE EXPERIENCIA + ARCHIVO VIVO */}
      <section className="relative border-t border-border/40 py-24 md:py-32">
        <div className="mx-auto max-w-[90rem] px-6 md:px-12">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Estaciones de experiencia</span>
            <h2 className="mt-3 font-display text-3xl font-light tracking-tight md:text-5xl">Y el Archivo Vivo del Territorio</h2>
          </Reveal>

          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {TR_ESTACIONES.map((e, i) => {
              const Icon = ESTACION_ICONS[i];
              return (
                <Reveal key={e.t} delay={(i % 2) * 0.08}>
                  <div className="flex items-start gap-4 rounded-sm border border-border/50 bg-card/40 p-6 backdrop-blur-sm">
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.5} />
                    <div>
                      <p className="font-display text-lg">{e.t}</p>
                      <p className="mt-2 text-sm leading-relaxed text-foreground/65">{e.d}</p>
                      {i === 0 && (
                        <div className="mt-4">
                          <SoundPlayButton pieza={TR_AUDIO.pieza} label="Escuchar Ecos del Mataquito" />
                        </div>
                      )}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.1} className="mt-14 grid items-center gap-10 rounded-xl border border-border/50 bg-card/40 p-8 backdrop-blur-sm md:grid-cols-[1fr_1.2fr] md:gap-12 md:p-12">
            <div className="grid grid-cols-2 gap-3">
              <div className="aspect-square overflow-hidden rounded-sm">
                <img src={TR_IMG.estacionCartografia} alt="Estación Cartografía Sensible" className="h-full w-full object-cover" />
              </div>
              <div className="aspect-square overflow-hidden rounded-sm">
                <img src={TR_IMG.estacionEscuchaParlante} alt="Estación de Escucha" className="h-full w-full object-cover" />
              </div>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">El gran diferenciador</p>
              <p className="mt-4 text-[15px] leading-relaxed text-foreground/80">{TR_ARCHIVO_VIVO}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* REDES, COLABORACIONES Y TRAYECTORIAS */}
      <section className="relative border-t border-border/40 py-24 md:py-32">
        <div className="mx-auto max-w-[90rem] px-6 md:px-12">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Redes, colaboraciones y trayectorias</span>
            <h2 className="mt-3 font-display text-3xl font-light tracking-tight md:text-5xl">Un proyecto de territorio</h2>
          </Reveal>

          <div className="mt-14 grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">Red de colaboradores</p>
              <ul className="mt-4 space-y-2">
                {TR_REDES.map((r) => (
                  <li key={r} className="flex items-center gap-2 text-sm text-foreground/75">
                    <span className="h-1 w-1 rounded-full bg-primary" /> {r}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1} className="grid gap-8 sm:grid-cols-2">
              <div>
                <p className="font-display text-lg">{TR_ARTISTAS.karolina.nombre}</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">{TR_ARTISTAS.karolina.rol}</p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">{TR_ARTISTAS.karolina.bio}</p>
              </div>
              <div>
                <p className="font-display text-lg">{TR_ARTISTAS.carlos.nombre}</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">{TR_ARTISTAS.carlos.rol}</p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">{TR_ARTISTAS.carlos.bio}</p>
              </div>
              <p className="text-sm leading-relaxed text-foreground/60 sm:col-span-2">{TR_ARTISTAS.trabajoConjunto}</p>
            </Reveal>
          </div>

          {/* Obras en proceso — avance del proyecto */}
          <Reveal delay={0.1} className="mt-16">
            <p className="text-center font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Obras en proceso de creación
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-5">
              {TR_IMG.obras.map((src, i) => (
                <div key={src} className="aspect-[4/3] overflow-hidden rounded-sm">
                  <img src={src} alt={`Obra en proceso ${i + 1}, Territorios Resonantes`} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROYECCIÓN, REFERENTES Y CIERRE */}
      <section className="relative overflow-hidden border-t border-border/40 py-24 md:py-32">
        <div className="absolute inset-0">
          <img src={TR_IMG.bosqueDorado} alt="Bosque del Maule al amanecer" className="h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
        </div>
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Proyección y cierre</span>
            <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-foreground/75">{TR_PROYECCION}</p>
          </Reveal>

          <Reveal delay={0.1} className="mx-auto mt-10 flex max-w-xl flex-col gap-4 border-t border-border/40 pt-8 text-sm text-foreground/65 sm:flex-row sm:justify-center sm:gap-10">
            <span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Referentes artísticos</span>
              <br />{TR_REFERENTES.artisticos.join(' · ')}
            </span>
            <span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Pensamiento</span>
              <br />{TR_REFERENTES.pensamiento.join(' · ')}
            </span>
          </Reveal>

          <Reveal delay={0.2} className="mt-14 border-t border-foreground/15 pt-10">
            <blockquote className="font-display text-2xl font-light italic leading-snug tracking-tight md:text-4xl">
              &ldquo;{TR_CIERRE}&rdquo;
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* CONTACTO */}
      <section className="relative border-t border-border/40 py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Contacto</span>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm text-foreground/80">
              <span className="flex items-center gap-2"><Globe className="h-4 w-4 text-primary" strokeWidth={1.6} /> {TR_CONTACTO.web}</span>
              <span className="flex items-center gap-2"><Instagram className="h-4 w-4 text-primary" strokeWidth={1.6} /> {TR_CONTACTO.instagram}</span>
              <span className="flex items-center gap-2"><Music className="h-4 w-4 text-primary" strokeWidth={1.6} /> Spotify · {TR_CONTACTO.spotify}</span>
              <span className="flex items-center gap-2"><FolderOpen className="h-4 w-4 text-primary" strokeWidth={1.6} /> Portafolio · {TR_CONTACTO.portafolio}</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-border/40 py-16">
        <Link to="/colabora" className="group relative block w-full">
          <div className="absolute inset-0">
            <img src={TR_IMG.tagline} alt="Colabora con Territorios Resonantes" className="h-full w-full object-cover opacity-20 transition-opacity duration-500 group-hover:opacity-35" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background" />
          </div>
          <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 py-20 text-center">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Cada obra tiene una voz</span>
            <p className="mt-3 font-display text-3xl font-light md:text-5xl">Súmate a Territorios Resonantes</p>
            <span className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all group-hover:gap-3">
              Quiero colaborar <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </Link>
      </section>

      <footer className="border-t border-border/40 px-6 py-12 md:px-12">
        <div className="mx-auto flex max-w-[90rem] flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <p className="font-display text-lg">Territorios Resonantes — Residencia Creativa</p>
          <Link to="/experiencias" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
            <ArrowLeft className="h-4 w-4" /> Volver a Experiencias
          </Link>
        </div>
      </footer>
    </div>
  );
}

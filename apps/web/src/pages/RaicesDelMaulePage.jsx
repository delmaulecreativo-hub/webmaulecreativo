import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Sprout, Waves, Leaf, Mail, Globe, MapPin, Phone } from 'lucide-react';
import SiteChrome from '@/components/SiteChrome';
import PageHead from '@/components/PageHead';
import SoundPlayButton from '@/components/SoundPlayButton';
import {
  RAICES_IMG, RAICES_PROYECTO, RAICES_ARTISTAS, RAICES_OBRAS,
  RAICES_SONORO, RAICES_PLANTAS, RAICES_ARTESANIA, RAICES_VIDEO, RAICES_CONTACTO,
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

export default function RaicesDelMaulePage() {
  return (
    <div className="grain relative bg-background">
      <PageHead
        title="Raíces del Maule — Grupo C"
        description="Proyecto artístico interdisciplinario de Karolina Mättig y Carlos González: pintura, arte sonoro, escucha de plantas y artesanía decorativa en Gualleco, Curepto."
      />
      <SiteChrome current="Crear · Proyecto de Creación · Raíces del Maule" />

      {/* HERO */}
      <section className="relative flex min-h-[100dvh] flex-col overflow-hidden">
        <div className="absolute inset-0">
          <img src={RAICES_IMG.hero} alt="Paisaje del Maule pintado por Karolina Mättig" className="h-full w-full origin-center animate-slow-pan object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/45 to-background" />
        </div>

        <div className="relative z-10 flex flex-1 flex-col justify-end px-6 pb-16 pt-28 md:px-12">
          <Link to="/experiencias" className="mb-auto inline-flex w-fit items-center gap-2 rounded-full border border-foreground/25 bg-background/30 px-4 py-2 text-xs backdrop-blur-sm transition-colors hover:border-foreground/60">
            <ArrowLeft className="h-3.5 w-3.5" /> Experiencias
          </Link>

          <div className="max-w-3xl">
            <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="font-mono text-[11px] uppercase tracking-[0.4em] text-primary">
              {RAICES_PROYECTO.grupo} · Proyecto de creación
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} className="mt-4 font-display text-5xl font-light leading-[1.02] tracking-tight md:text-7xl">
              {RAICES_PROYECTO.titulo}
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.7 }} className="mt-5 max-w-xl text-[15px] leading-relaxed text-foreground/80">
              Pintura, arte sonoro, escucha de plantas y artesanía: una colaboración entre Karolina Mättig y Carlos González nacida en Gualleco, Curepto.
            </motion.p>
          </div>
        </div>
      </section>

      {/* EL PROYECTO */}
      <section className="relative border-t border-border/40 py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">El proyecto</span>
            <p className="mx-auto mt-6 text-lg leading-relaxed text-foreground/80">{RAICES_PROYECTO.intro}</p>
            <p className="mx-auto mt-6 text-sm text-foreground/60">
              {RAICES_ARTISTAS.karolina.nombre} — {RAICES_ARTISTAS.karolina.rol} · {RAICES_ARTISTAS.carlos.nombre} — {RAICES_ARTISTAS.carlos.rol}
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-16 grid max-w-[90rem] gap-8 px-6 sm:grid-cols-3 md:px-12">
          {RAICES_PROYECTO.caracteristicas.map((c, i) => (
            <Reveal key={c.t} delay={i * 0.1}>
              <div className="h-full rounded-sm border border-border/50 bg-card/40 p-6 backdrop-blur-sm">
                <p className="font-display text-lg">{c.t}</p>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mx-auto mt-14 grid max-w-[90rem] grid-cols-3 gap-3 px-6 md:px-12">
          {RAICES_IMG.expo.map((src, i) => (
            <div key={src} className="aspect-[4/3] overflow-hidden rounded-sm">
              <img src={src} alt={`Público en la muestra Raíces del Maule ${i + 1}`} className="h-full w-full object-cover" />
            </div>
          ))}
        </Reveal>
      </section>

      {/* OBRAS VISUALES — KAROLINA MÄTTIG */}
      <section className="relative border-t border-border/40 py-24 md:py-32">
        <div className="mx-auto max-w-[90rem] px-6 md:px-12">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Registro de las obras · 01</span>
            <h2 className="mt-3 font-display text-3xl font-light tracking-tight md:text-5xl">Obras visuales — Karolina Mättig</h2>
            <p className="mx-auto mt-5 text-[15px] italic leading-relaxed text-foreground/70">&ldquo;{RAICES_ARTISTAS.karolina.statement}&rdquo;</p>
          </Reveal>

          <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-3">
            {RAICES_OBRAS.map((obra, i) => (
              <Reveal key={obra.titulo} delay={(i % 3) * 0.08}>
                <div className={`overflow-hidden ${obra.circular ? 'aspect-square rounded-full' : 'aspect-[4/3] rounded-sm'}`}>
                  <img src={obra.img} alt={`Obra: ${obra.titulo}, ${obra.medida}, acrílico sobre lienzo`} className="h-full w-full object-cover transition-transform duration-[1.2s] hover:scale-105" />
                </div>
                <p className="mt-3 text-center font-display text-base italic">{obra.titulo}</p>
                <p className="text-center font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">{obra.medida} · Acrílico sobre lienzo, 2024</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OBRAS SONORAS — CARLOS GONZÁLEZ */}
      <section className="relative border-t border-border/40 py-24 md:py-32">
        <div className="mx-auto max-w-[90rem] px-6 md:px-12">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                <img src={RAICES_IMG.sonido} alt="Carlos González registrando paisaje sonoro" className="h-full w-full object-cover" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-primary">
                <Waves className="h-4 w-4" /> Registro de las obras · 02
              </span>
              <h2 className="mt-3 font-display text-3xl font-light tracking-tight md:text-5xl">{RAICES_SONORO.titulo}</h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-foreground/85">{RAICES_SONORO.desc}</p>
              <div className="mt-6">
                <SoundPlayButton pieza={RAICES_SONORO.pieza} label="Escuchar Raíces Naturales de Curepto" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* INSTALACIÓN DE ESCUCHA DE PLANTAS */}
      <section className="relative border-t border-border/40 py-24 md:py-32">
        <div className="mx-auto max-w-[90rem] px-6 md:px-12">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16 md:[&>*:first-child]:order-2">
            <Reveal>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[4/5] overflow-hidden rounded-sm">
                  <img src={RAICES_IMG.plantasVr} alt="Visitante escuchando la instalación con auriculares de realidad virtual" className="h-full w-full object-cover" />
                </div>
                <div className="aspect-[4/5] overflow-hidden rounded-sm">
                  <img src={RAICES_IMG.plantaSensor} alt="Planta conectada a un sensor de bioelectricidad" className="h-full w-full object-cover" />
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-primary">
                <Sprout className="h-4 w-4" /> Registro de las obras · 03
              </span>
              <h2 className="mt-3 font-display text-3xl font-light tracking-tight md:text-5xl">Instalación de Escucha de Plantas</h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-foreground/85">{RAICES_PLANTAS.desc}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ARTESANÍA DECORATIVA */}
      <section className="relative border-t border-border/40 py-24 md:py-32">
        <div className="mx-auto max-w-[90rem] px-6 md:px-12">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <Reveal>
              <div className="grid grid-cols-2 gap-3">
                {RAICES_ARTESANIA.galeria.map((src, i) => (
                  <div key={src} className={`aspect-square overflow-hidden rounded-sm ${i % 3 === 1 ? 'mt-6' : ''}`}>
                    <img src={src} alt={`Artesanía decorativa con ramas de árbol ${i + 1}`} className="h-full w-full object-cover" />
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-primary">
                <Leaf className="h-4 w-4" /> Registro de las obras · 04
              </span>
              <h2 className="mt-3 font-display text-3xl font-light tracking-tight md:text-5xl">Artesanía Decorativa</h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-foreground/85">{RAICES_ARTESANIA.desc}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* VIDEO DE MUESTRA */}
      <section className="relative border-t border-border/40 py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal className="text-center">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Material audiovisual</span>
            <h2 className="mt-3 font-display text-3xl font-light tracking-tight md:text-5xl">{RAICES_VIDEO.titulo}</h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-foreground/80">{RAICES_VIDEO.desc}</p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-10 overflow-hidden rounded-xl border border-border/50">
              <div className="aspect-video w-full">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${RAICES_VIDEO.youtubeId}`}
                  title={RAICES_VIDEO.titulo}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTACTO */}
      <section className="relative border-t border-border/40 py-24 md:py-32">
        <div className="mx-auto max-w-[90rem] px-6 md:px-12">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                <img src={RAICES_IMG.contacto} alt="Karolina Mättig junto a su obra" className="h-full w-full object-cover" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Contacto</span>
              <h2 className="mt-3 font-display text-3xl font-light tracking-tight md:text-5xl">Escríbenos</h2>
              <div className="mt-8 flex flex-col gap-5 text-sm text-foreground/85">
                <span className="flex items-center gap-3"><Globe className="h-4 w-4 shrink-0 text-primary" strokeWidth={1.6} /> {RAICES_CONTACTO.web}</span>
                <span className="flex items-center gap-3"><Mail className="h-4 w-4 shrink-0 text-primary" strokeWidth={1.6} /> {RAICES_CONTACTO.email}</span>
                <span className="flex items-center gap-3"><MapPin className="h-4 w-4 shrink-0 text-primary" strokeWidth={1.6} /> {RAICES_CONTACTO.lugar}</span>
                <span className="flex items-center gap-3"><Phone className="h-4 w-4 shrink-0 text-primary" strokeWidth={1.6} /> {RAICES_CONTACTO.telefono}</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-border/40 py-16">
        <Link to="/colabora" className="group relative block w-full">
          <div className="absolute inset-0">
            <img src={RAICES_IMG.hero} alt="Colabora con Raíces del Maule" className="h-full w-full object-cover opacity-20 transition-opacity duration-500 group-hover:opacity-35" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background" />
          </div>
          <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 py-20 text-center">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Un ecosistema sonoro y visual</span>
            <p className="mt-3 font-display text-3xl font-light md:text-5xl">Ayúdanos a llevar Raíces del Maule más lejos</p>
            <span className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all group-hover:gap-3">
              Quiero colaborar <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </Link>
      </section>

      <footer className="border-t border-border/40 px-6 py-12 md:px-12">
        <div className="mx-auto flex max-w-[90rem] flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <p className="font-display text-lg">Raíces del Maule — Grupo C</p>
          <Link to="/experiencias" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
            <ArrowLeft className="h-4 w-4" /> Volver a Experiencias
          </Link>
        </div>
      </footer>
    </div>
  );
}

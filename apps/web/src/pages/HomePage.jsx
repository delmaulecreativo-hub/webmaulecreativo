import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowDown, Headphones, Boxes, Map, Cpu, Users, MapPin, BookOpen } from 'lucide-react';
import SiteChrome from '@/components/SiteChrome';
import PageHead from '@/components/PageHead';
import IngenieriaCreativa from '@/components/IngenieriaCreativa';
import TerritoriosResonantes from '@/components/TerritoriosResonantes';
import { ESTACIONES, EXPERIENCIAS, IMG, HERO_MONTAGE } from '@/lib/mauleData';

// Fondo cinematográfico: montaje lento tipo documental, sin cortes bruscos
function CinematicBackground() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    HERO_MONTAGE.forEach((src) => {
      const im = new Image();
      im.src = src;
    });
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % HERO_MONTAGE.length);
    }, 7000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-background">
      <AnimatePresence>
        <motion.img
          key={idx}
          src={HERO_MONTAGE[idx]}
          alt="Paisajes, personas y tecnología del territorio del Maule"
          className="absolute inset-0 h-full w-full origin-center object-cover"
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1.16 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 2.4, ease: 'easeInOut' },
            scale: { duration: 9, ease: 'linear' },
          }}
        />
      </AnimatePresence>
      {/* Capa oscura para lectura */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/45 to-background" />
      <div className="absolute inset-0 bg-background/30" />
    </div>
  );
}

function Reveal({ children, delay = 0, y = 28, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function ProgressRail({ active }) {
  return (
    <nav className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-4 md:flex">
      {ESTACIONES.slice(1).map((e) => (
        <a key={e.id} href={`#${e.id}`} className="group flex items-center justify-end gap-3">
          <span
            className={`whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.2em] transition-all duration-300 ${
              active === e.id ? 'text-primary opacity-100' : 'text-muted-foreground opacity-0 group-hover:opacity-100'
            }`}
          >
            {e.n} · {e.titulo}
          </span>
          <span
            className={`h-2 w-2 rounded-full border transition-all duration-300 ${
              active === e.id ? 'scale-125 border-primary bg-primary' : 'border-muted-foreground bg-transparent group-hover:border-primary'
            }`}
          />
        </a>
      ))}
    </nav>
  );
}

export default function HomePage() {
  const [active, setActive] = useState('ingenieria');

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) setActive(en.target.id);
        });
      },
      { threshold: 0.5 }
    );
    ESTACIONES.slice(1).forEach((e) => {
      const el = document.getElementById(e.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="grain relative bg-background">
      <PageHead />
      <SiteChrome />
      <ProgressRail active={active} />

      {/* ESTACIÓN 00 — ENTRADA */}
      <section id="inicio" className="relative flex min-h-[100dvh] flex-col overflow-hidden">
        <CinematicBackground />

        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pt-28 pb-24 text-center">
          <div className="mx-auto max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="font-mono text-[11px] uppercase tracking-[0.5em] text-foreground/70"
            >
              Centro Creativo Rural
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 font-display text-4xl font-light leading-[1.05] tracking-tight text-balance text-foreground sm:text-5xl md:text-[4.25rem]"
            >
              Laboratorio de<br className="hidden sm:block" /> Ingeniería Creativa
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 1.4, ease: 'easeOut' }}
              className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-foreground/75 md:text-lg"
            >
              Revelamos la identidad de los territorios mediante patrimonio, paisaje sonoro,
              tecnologías inmersivas e inteligencia artificial.
            </motion.p>

            <motion.blockquote
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.4, delay: 2.1, ease: 'easeOut' }}
              className="mx-auto mt-12 max-w-lg border-t border-foreground/15 pt-8"
            >
              <p className="font-display text-xl font-light italic leading-relaxed text-foreground/85 md:text-2xl">
                &ldquo;Todo territorio tiene una identidad. Nuestra misión es escucharla,
                interpretarla y transformarla en experiencias.&rdquo;
              </p>
            </motion.blockquote>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.7, ease: 'easeOut' }}
              className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <a
                href="#ingenieria"
                className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-foreground px-8 py-4 text-sm font-medium text-background transition-all duration-300 hover:gap-3 active:scale-[0.98]"
              >
                <span className="absolute inset-0 -translate-x-full bg-primary transition-transform duration-500 ease-out group-hover:translate-x-0" />
                <span className="relative">Comenzar la experiencia</span>
                <ArrowRight className="relative h-4 w-4 transition-transform" />
              </a>
              <Link
                to="/atlas"
                className="group flex items-center gap-2 rounded-full border border-foreground/25 px-8 py-4 text-sm font-medium text-foreground/90 backdrop-blur-sm transition-all duration-300 hover:border-foreground/60 hover:gap-3"
              >
                Explorar el Atlas Sensorial
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Indicador de scroll */}
        <motion.a
          href="#ingenieria"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.3 }}
          className="relative z-10 mx-auto mb-10 flex flex-col items-center gap-3 text-foreground/60 transition-colors hover:text-foreground"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Descubre nuestra metodología</span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown className="h-4 w-4" strokeWidth={1.5} />
          </motion.span>
        </motion.a>
      </section>

      {/* MANIFIESTO — TERRITORIOS RESONANTES */}
      <TerritoriosResonantes />

      {/* ESTACIÓN 01 — INGENIERÍA CREATIVA */}
      <IngenieriaCreativa />

      {/* ESTACIÓN 02 — EL LABORATORIO */}
      <section id="laboratorio" className="relative overflow-hidden py-28 md:py-40">
        <div className="absolute inset-0">
          <img src={IMG.laboratorio} alt="Interior del laboratorio creativo rural" className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
        </div>
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Estación 02</span>
            <h2 className="mt-4 font-display text-4xl font-light leading-tight tracking-tight md:text-6xl">El Laboratorio</h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-foreground/80">
              Un Centro Creativo Rural. No hay oficinas: hay experimentos. El equipamiento no es tecnología, es una
              herramienta de investigación del territorio.
            </p>
          </Reveal>
          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { icon: Headphones, t: 'Sonido', d: 'Registro y paisaje sonoro' },
              { icon: Boxes, t: 'Oculus / VR', d: 'Inmersión 360°' },
              { icon: Map, t: 'Cartografía', d: 'Mapas sensoriales' },
              { icon: Cpu, t: 'Inteligencia Artificial', d: 'Lectura de datos del paisaje' },
            ].map((it, i) => (
              <Reveal key={it.t} delay={i * 0.08}>
                <div className="group h-full rounded-sm border border-border/50 bg-card/40 p-6 backdrop-blur-sm transition-colors hover:border-primary/50">
                  <it.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                  <p className="mt-4 font-display text-lg">{it.t}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{it.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <Link
              to="/laboratorio"
              className="mt-12 inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3"
            >
              Entrar al laboratorio <ArrowRight className="h-4 w-4 transition-all" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ESTACIÓN 03 — ATLAS SENSORIAL */}
      <section id="atlas" className="relative overflow-hidden border-y border-border/40 py-28 md:py-40">
        <div className="mx-auto max-w-[90rem] px-6 md:px-12">
          <div className="grid items-center gap-12 md:grid-cols-[1fr_1.1fr] md:gap-16">
            <Reveal>
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Estación 03</span>
              <h2 className="mt-4 font-display text-4xl font-light leading-tight tracking-tight md:text-5xl">
                Atlas Sensorial
              </h2>
              <p className="mt-6 max-w-md text-lg text-foreground/80">
                El territorio no se recorre en scroll: se explora en el mapa. Cada punto guarda video, audio, 360°,
                historia, personas y cómo llegar.
              </p>
              <Link
                to="/atlas"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground transition-transform hover:-translate-y-0.5"
              >
                Abrir el mapa interactivo <Map className="h-4 w-4" />
              </Link>
            </Reveal>

            <Reveal delay={0.15}>
              <Link to="/atlas" className="group relative block aspect-[4/3] overflow-hidden rounded-sm border border-border/60 bg-card">
                <img src={IMG.hero} alt="Mapa del territorio del Maule" className="h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-secondary/10" />
                {[
                  { x: 38, y: 34 }, { x: 18, y: 58 }, { x: 30, y: 46 }, { x: 26, y: 30 }, { x: 52, y: 52 },
                ].map((p, i) => (
                  <span key={i} className="absolute" style={{ left: `${p.x}%`, top: `${p.y}%` }}>
                    <span className="absolute -inset-1 animate-ping-slow rounded-full bg-primary/60" />
                    <MapPin className="relative h-5 w-5 -translate-x-1/2 -translate-y-full text-primary drop-shadow" />
                  </span>
                ))}
                <span className="absolute bottom-4 left-4 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/90">
                  5 estaciones sensoriales
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ESTACIÓN 04 — EXPERIENCIAS */}
      <section id="experiencias" className="relative overflow-hidden py-28 md:py-40">
        <div className="mx-auto max-w-[90rem] px-6 md:px-12">
          <Reveal>
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Estación 04</span>
                <h2 className="mt-4 font-display text-4xl font-light leading-tight tracking-tight md:text-5xl">Experiencias</h2>
              </div>
              <p className="max-w-sm text-foreground/70">Aplicaciones vivas del laboratorio. El método hecho encuentro, ruta y creación.</p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {EXPERIENCIAS.map((ex, i) => (
              <Reveal key={ex.id} delay={i * 0.08}>
                <Link to="/experiencias" className="group block overflow-hidden rounded-sm border border-border/50 bg-card">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    {ex.img ? (
                      <>
                        <img src={ex.img} alt={ex.titulo} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                      </>
                    ) : (
                      <div className="flex h-full w-full flex-col items-center justify-center gap-2 border border-dashed border-border/60 bg-card/60 text-center">
                        <BookOpen className="h-6 w-6 text-muted-foreground" strokeWidth={1.4} />
                        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">Imagen pendiente</span>
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">{ex.kicker}</span>
                    <p className="mt-2 font-display text-xl">{ex.titulo}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{ex.desc}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ESTACIÓN 05 — COLABORA */}
      <section id="colabora" className="relative overflow-hidden py-28 md:py-40">
        <div className="absolute inset-0">
          <img src={IMG.colabora} alt="Colaboración sobre el mapa del territorio" className="h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Estación 05</span>
            <h2 className="mt-4 font-display text-4xl font-light leading-tight tracking-tight md:text-6xl">
              Colabora con nosotros
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-foreground/80">
              El laboratorio crece con quienes creen que el territorio es un archivo vivo.
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {['Museos', 'Universidades', 'Empresas', 'Territorios'].map((a, i) => (
              <Reveal key={a} delay={i * 0.08}>
                <div className="rounded-sm border border-border/50 bg-card/40 px-4 py-8 backdrop-blur-sm">
                  <Users className="mx-auto h-5 w-5 text-primary" strokeWidth={1.5} />
                  <p className="mt-3 font-display text-lg">{a}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <Link
              to="/colabora"
              className="mt-12 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Iniciar una colaboración <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-border/40 px-6 py-12 md:px-12">
        <div className="mx-auto flex max-w-[90rem] flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="font-display text-xl">Maule Creativo</p>
            <p className="mt-1 text-sm text-muted-foreground">Laboratorio de Ingeniería Creativa · Región del Maule, Chile</p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <Link to="/atlas" className="hover:text-primary">Atlas Sensorial</Link>
            <Link to="/laboratorio" className="hover:text-primary">Laboratorio</Link>
            <Link to="/experiencias" className="hover:text-primary">Experiencias</Link>
            <Link to="/colabora" className="hover:text-primary">Colaborar</Link>
          </div>
          <p className="font-mono text-xs text-muted-foreground">© {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}

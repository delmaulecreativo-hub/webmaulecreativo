import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Ear, Search, Sparkles, Share2, ArrowRight } from 'lucide-react';
import { RESONANTES_IMG, RESONANTES_ETAPAS } from '@/lib/mauleData';

const ICONS = {
  escuchar: Ear,
  investigar: Search,
  interpretar: Sparkles,
  compartir: Share2,
};

const EASE = [0.22, 1, 0.36, 1];

function Fade({ children, delay = 0, y = 24, className = '' }) {
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

/* Capas sutiles: ondas sonoras, líneas topográficas y constelación de datos */
function AmbientOverlay() {
  return (
    <svg
      viewBox="0 0 800 400"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.18]"
      aria-hidden="true"
    >
      {/* líneas topográficas */}
      <circle cx="660" cy="90" r="50" fill="none" stroke="hsl(var(--sand))" strokeWidth="0.6" />
      <circle cx="660" cy="90" r="90" fill="none" stroke="hsl(var(--sand))" strokeWidth="0.6" />
      <circle cx="660" cy="90" r="130" fill="none" stroke="hsl(var(--sand))" strokeWidth="0.6" />

      {/* onda sonora */}
      <polyline
        className="animate-dash"
        points="-20,320 20,320 45,300 70,336 95,290 120,340 145,300 170,320 195,308 220,320 500,320 525,300 550,336 575,290 600,340 625,300 650,320 675,308 700,320 820,320"
        fill="none"
        stroke="hsl(var(--teal))"
        strokeWidth="1.1"
        strokeDasharray="5 7"
      />

      {/* constelación de datos */}
      <g stroke="hsl(var(--sand))" strokeWidth="0.5">
        <line x1="110" y1="70" x2="170" y2="45" />
        <line x1="170" y1="45" x2="225" y2="80" />
        <line x1="225" y1="80" x2="190" y2="125" />
        <line x1="190" y1="125" x2="110" y2="70" />
      </g>
      <g fill="hsl(var(--sand))">
        <circle cx="110" cy="70" r="2.2" />
        <circle cx="170" cy="45" r="2.6" />
        <circle cx="225" cy="80" r="1.8" />
        <circle cx="190" cy="125" r="2.2" />
      </g>
    </svg>
  );
}

const COLLAGE = [
  {
    img: RESONANTES_IMG.sonido,
    alt: 'Investigadora realizando registro de paisaje sonoro en el territorio',
    cap: 'Registro de paisaje sonoro',
    className: 'col-span-2 row-span-2',
  },
  {
    img: RESONANTES_IMG.escultura,
    alt: 'Artista creando una escultura con materiales naturales del territorio',
    cap: 'Escultura con materiales naturales',
    className: 'col-span-1',
  },
  {
    img: RESONANTES_IMG.sensores,
    alt: 'Vegetación del territorio intervenida con sensores tecnológicos',
    cap: 'Vegetación y sensores',
    className: 'col-span-1',
  },
  {
    img: RESONANTES_IMG.instalacion,
    alt: 'Instalación inmersiva contemporánea sobre el territorio',
    cap: 'Instalación inmersiva',
    className: 'col-span-2',
  },
];

export default function TerritoriosResonantes() {
  return (
    <section id="resonantes" className="relative overflow-hidden bg-background py-28 md:py-40">
      {/* ENCABEZADO + fondo ambiental (paisaje del Maule + capas sutiles) */}
      <div className="relative overflow-hidden pb-20 md:pb-28">
        <div className="absolute inset-0">
          <img
            src={RESONANTES_IMG.paisaje}
            alt="Fotografía panorámica del paisaje del Maule"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/55 via-background/80 to-background" />
          <AmbientOverlay />
        </div>

        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <Fade>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[hsl(var(--sand))]">
              Manifiesto
            </span>
            <h2 className="mt-5 font-display text-4xl font-light leading-[1.05] tracking-tight md:text-6xl">
              Territorios Resonantes
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-foreground/80">
              Investigamos las resonancias visibles e invisibles de los territorios.
            </p>
          </Fade>

          <Fade delay={0.15} className="mx-auto mt-8 max-w-2xl">
            <p className="text-[15px] leading-relaxed text-foreground/65 md:text-base">
              &ldquo;Todo territorio posee resonancias que normalmente pasan desapercibidas: sonidos, memorias,
              relaciones ecológicas, procesos naturales, relatos y formas de habitar. En Maule Creativo
              investigamos esas resonancias y las transformamos en experiencias inmersivas mediante arte,
              ciencia y tecnología.&rdquo;
            </p>
          </Fade>
        </div>
      </div>

      {/* COLLAGE EDITORIAL */}
      <Fade delay={0.1} className="relative mx-auto mt-4 max-w-[90rem] px-6 md:px-12">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:grid-rows-2 md:gap-4">
          {COLLAGE.map((item) => (
            <figure
              key={item.cap}
              className={`group relative overflow-hidden rounded-sm border border-border/50 ${item.className}`}
            >
              <img
                src={item.img}
                alt={item.alt}
                className="h-full min-h-[9rem] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:min-h-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
              <figcaption className="absolute bottom-3 left-4 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/90 md:text-[11px]">
                {item.cap}
              </figcaption>
            </figure>
          ))}
        </div>
      </Fade>

      {/* LÍNEA DE TIEMPO HORIZONTAL */}
      <div className="relative mx-auto mt-28 max-w-5xl px-6 md:mt-36 md:px-12">
        <Fade className="mb-14 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-foreground/50">
            Cómo investigamos las resonancias
          </p>
        </Fade>

        <div className="relative grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4 md:gap-8">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-[hsl(var(--sand)/0.4)] to-transparent md:block" />

          {RESONANTES_ETAPAS.map((etapa, i) => {
            const Icon = ICONS[etapa.icon];
            return (
              <Fade key={etapa.verbo} delay={i * 0.08} className="relative flex flex-col items-center text-center">
                <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-[hsl(var(--sand)/0.4)] bg-background text-[hsl(var(--sand))]">
                  <Icon className="h-6 w-6" strokeWidth={1.4} />
                </span>
                <p className="mt-4 font-mono text-[11px] tracking-[0.35em] text-[hsl(var(--sand))]">
                  0{i + 1}
                </p>
                <h3 className="mt-1 font-display text-xl font-light tracking-tight">{etapa.verbo}</h3>
                <p className="mt-2 max-w-[16rem] text-sm leading-relaxed text-foreground/65">{etapa.texto}</p>
              </Fade>
            );
          })}
        </div>
      </div>

      {/* CITA DESTACADA SOBRE FONDO LIMPIO + CTAS */}
      <div className="relative mx-auto mt-28 max-w-2xl px-6 text-center md:mt-36">
        <Fade>
          <blockquote className="font-display text-2xl font-light italic leading-snug tracking-tight md:text-3xl md:leading-[1.35]">
            &ldquo;No creamos obras sobre los territorios.
            <br className="hidden sm:block" /> Creamos experiencias donde los propios territorios revelan
            sus resonancias.&rdquo;
          </blockquote>
        </Fade>

        <Fade delay={0.15} className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/laboratorio"
            className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-foreground px-8 py-4 text-sm font-medium text-background transition-all duration-300 hover:gap-3 active:scale-[0.98]"
          >
            <span className="absolute inset-0 -translate-x-full bg-primary transition-transform duration-500 ease-out group-hover:translate-x-0" />
            <span className="relative">Explorar el Laboratorio</span>
            <ArrowRight className="relative h-4 w-4 transition-transform" />
          </Link>
          <Link
            to="/experiencias"
            className="group flex items-center gap-2 rounded-full border border-foreground/25 px-8 py-4 text-sm font-medium text-foreground/90 backdrop-blur-sm transition-all duration-300 hover:border-foreground/60 hover:gap-3"
          >
            Conoce nuestros proyectos
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Fade>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { AudioLines, Map, Users, PenTool, Sparkles, ArrowDown } from 'lucide-react';
import { METODOLOGIA, ORBITA, PROYECTOS_IC, IC_IMG } from '@/lib/mauleData';

const ICONS = {
  waves: AudioLines,
  map: Map,
  network: Users,
  prototype: PenTool,
  constellation: Sparkles,
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

/* Flujo vertical de la metodología: cada etapa revela una tarjeta al hacer scroll */
function Etapa({ etapa, i }) {
  const Icon = ICONS[etapa.icon];
  const alignRight = i % 2 === 1;
  return (
    <div className="relative">
      {/* Conector superior animado */}
      {i > 0 && (
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mx-auto h-16 w-px origin-top bg-gradient-to-b from-transparent via-[hsl(var(--forest)/0.5)] to-[hsl(var(--forest)/0.5)] md:h-20"
        />
      )}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: EASE }}
        className={`mx-auto flex max-w-2xl items-start gap-5 md:gap-8 ${
          alignRight ? 'md:ml-auto md:mr-0 md:flex-row-reverse md:text-right' : 'md:mr-auto md:ml-0'
        }`}
      >
        <div className="flex shrink-0 flex-col items-center gap-3">
          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-[hsl(var(--forest)/0.4)] bg-[hsl(var(--forest)/0.08)] text-[hsl(var(--forest))]">
            <Icon className="h-6 w-6" strokeWidth={1.4} />
          </span>
        </div>
        <div className={alignRight ? 'md:items-end' : ''}>
          <p className="font-mono text-xs tracking-[0.35em] text-[hsl(var(--forest))]">{etapa.n}</p>
          <h3 className="mt-2 font-display text-3xl font-light tracking-tight md:text-4xl">{etapa.verbo}</h3>
          <p className="mt-3 max-w-md text-[15px] leading-relaxed text-foreground/70">{etapa.texto}</p>
        </div>
      </motion.div>
    </div>
  );
}

/* Visualización circular con palabras orbitando */
function Orbita() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[560px]">
      {/* anillos guía */}
      <div className="absolute inset-[6%] rounded-full border border-border/30" />
      <div className="absolute inset-[24%] rounded-full border border-border/20" />

      {/* núcleo */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-[180px] text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[hsl(var(--forest))]">Núcleo</p>
          <p className="mt-2 font-display text-2xl font-light leading-tight tracking-tight md:text-3xl">
            Ingeniería<br />Creativa
          </p>
        </div>
      </div>

      {/* palabras orbitando */}
      <div className="absolute inset-0 animate-orbit">
        {ORBITA.map((w, i) => {
          const angle = (i / ORBITA.length) * Math.PI * 2 - Math.PI / 2;
          const r = 46; // % del radio
          const left = 50 + r * Math.cos(angle);
          const top = 50 + r * Math.sin(angle);
          return (
            <span
              key={w}
              className="absolute animate-orbit-rev whitespace-nowrap rounded-full border border-border/40 bg-background/60 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-foreground/70 backdrop-blur-sm md:text-[11px]"
              style={{ left: `${left}%`, top: `${top}%`, transform: 'translate(-50%, -50%)' }}
            >
              {w}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default function IngenieriaCreativa() {
  return (
    <section id="ingenieria" className="relative overflow-hidden bg-background py-28 md:py-40">
      {/* ENCABEZADO + MANIFIESTO */}
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Fade>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[hsl(var(--forest))]">
            Metodología
          </span>
          <h2 className="mt-5 font-display text-4xl font-light leading-[1.05] tracking-tight md:text-6xl">
            Ingeniería Creativa
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-foreground/75">
            Una metodología para revelar la identidad de los territorios mediante arte, patrimonio,
            ciencia y tecnologías inmersivas.
          </p>
        </Fade>

        <Fade delay={0.15} className="mx-auto mt-14 max-w-lg space-y-6 text-[15px] leading-relaxed text-foreground/60">
          <p>
            Creemos que cada territorio posee una identidad construida por sus paisajes, sonidos,
            memorias, oficios y comunidades.
          </p>
          <p>
            Nuestra labor consiste en escuchar, investigar y co-crear junto a las personas para
            transformar esa identidad en experiencias que fortalecen el patrimonio, el turismo creativo
            y la innovación cultural.
          </p>
          <p className="font-display text-xl font-light italic leading-snug text-foreground/90">
            No diseñamos proyectos para los territorios.
            <br />
            Diseñamos proyectos <span className="text-[hsl(var(--forest))]">con</span> los territorios.
          </p>
        </Fade>
      </div>

      {/* Imagen de gran formato, respiro visual */}
      <Fade delay={0.1} className="mx-auto mt-24 max-w-[90rem] px-6 md:px-12">
        <div className="relative aspect-[21/9] overflow-hidden rounded-sm">
          <img
            src={IC_IMG.valle}
            alt="Valle del Maule al amanecer"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
      </Fade>

      {/* FLUJO DE LA METODOLOGÍA */}
      <div className="mx-auto mt-28 max-w-[90rem] px-6 md:mt-40 md:px-12">
        <Fade className="mb-16 text-center md:mb-24">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-foreground/50">
            El proceso · cinco movimientos
          </p>
        </Fade>
        <div className="space-y-0">
          {METODOLOGIA.map((etapa, i) => (
            <Etapa key={etapa.n} etapa={etapa} i={i} />
          ))}
        </div>
      </div>

      {/* FRASE DESTACADA */}
      <Fade className="mx-auto mt-32 max-w-3xl px-6 text-center md:mt-44">
        <blockquote className="font-display text-2xl font-light leading-snug tracking-tight md:text-4xl md:leading-[1.2]">
          <span className="block text-foreground/90">La ingeniería diseña soluciones.</span>
          <span className="block text-foreground/70">La creatividad les da sentido.</span>
          <span className="block text-[hsl(var(--forest))]">El territorio les da propósito.</span>
        </blockquote>
      </Fade>

      {/* ÓRBITA CONCEPTUAL */}
      <div className="mx-auto mt-32 max-w-5xl px-6 md:mt-44">
        <Fade className="mb-14 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-foreground/50">
            Un mismo núcleo · muchas disciplinas
          </p>
        </Fade>
        <Fade delay={0.1}>
          <Orbita />
        </Fade>
      </div>

      {/* DERIVACIÓN A PROYECTOS */}
      <div className="mx-auto mt-32 max-w-3xl px-6 text-center md:mt-44">
        <Fade>
          <div className="inline-flex items-center rounded-full border border-[hsl(var(--forest)/0.4)] bg-[hsl(var(--forest)/0.08)] px-6 py-3">
            <span className="font-display text-lg tracking-tight md:text-xl">Ingeniería Creativa</span>
          </div>
          <p className="mx-auto mt-6 max-w-md text-[15px] leading-relaxed text-foreground/60">
            Nuestros proyectos no son servicios independientes: son aplicaciones de una misma metodología.
          </p>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="mt-6 inline-flex text-[hsl(var(--forest))]"
          >
            <ArrowDown className="h-5 w-5" strokeWidth={1.5} />
          </motion.span>
        </Fade>

        {/* Espina animada con proyectos */}
        <div className="relative mx-auto mt-8 max-w-md text-left">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="absolute left-[7px] top-2 bottom-2 w-px origin-top bg-gradient-to-b from-[hsl(var(--forest)/0.6)] via-[hsl(var(--forest)/0.4)] to-transparent"
          />
          <div className="space-y-4">
            {PROYECTOS_IC.map((p, i) => (
              <motion.div
                key={p}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
                className="relative flex items-center gap-4 pl-7"
              >
                <span className="absolute left-0 flex h-4 w-4 items-center justify-center">
                  <span className="h-2 w-2 rounded-full bg-[hsl(var(--forest))]" />
                  <span className="absolute h-4 w-4 animate-ping-slow rounded-full bg-[hsl(var(--forest)/0.4)]" />
                </span>
                <span className="font-display text-lg font-light tracking-tight text-foreground/85">{p}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

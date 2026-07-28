import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight, ArrowDown, MapPin, Radio, Search, Filter,
  Headphones, Camera, Wind, Waves,
} from 'lucide-react';
import SiteChrome from '@/components/SiteChrome';
import PageHead from '@/components/PageHead';
import { REGISTROS, ATLAS_CATEGORIAS, ATLAS_FILTROS, ATLAS_CONSTRUCCION, IMG } from '@/lib/mauleData';

function Reveal({ children, delay = 0, y = 28, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

// ── Full-screen living network map ──────────────────────────────
function NetworkMap() {
  const navigate = useNavigate();
  const [hover, setHover] = useState(null);
  const byId = useMemo(() => Object.fromEntries(REGISTROS.map((r) => [r.id, r])), []);

  // build unique connection edges
  const edges = useMemo(() => {
    const seen = new Set();
    const list = [];
    REGISTROS.forEach((r) => {
      (r.conexiones || []).forEach((cid) => {
        const key = [r.id, cid].sort().join('-');
        if (seen.has(key)) return;
        seen.add(key);
        const b = byId[cid];
        if (b) list.push({ a: r, b, key });
      });
    });
    return list;
  }, [byId]);

  return (
    <div className="relative h-full w-full">
      {/* soft earth-tone base */}
      <div className="absolute inset-0">
        <img src={IMG.hero} alt="" className="h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-secondary/5 to-background/95" />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              'linear-gradient(hsl(var(--teal)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--teal)) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
        {/* subtle radial glow */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(60% 50% at 40% 45%, hsl(var(--secondary)/0.12), transparent 70%)' }} />
      </div>

      {/* dynamic connection lines */}
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
        {edges.map((e) => {
          const on = hover === e.a.id || hover === e.b.id;
          return (
            <line
              key={e.key}
              x1={e.a.x} y1={e.a.y} x2={e.b.x} y2={e.b.y}
              stroke="hsl(var(--secondary))"
              strokeWidth={on ? 0.4 : 0.22}
              strokeDasharray="1.4 1.4"
              className="animate-dash"
              style={{ opacity: on ? 0.85 : 0.35, transition: 'opacity 0.4s' }}
              vectorEffect="non-scaling-stroke"
            />
          );
        })}
      </svg>

      {/* record points */}
      {REGISTROS.map((r) => {
        const published = r.estado === 'Publicado';
        return (
          <button
            key={r.id}
            onClick={() => navigate(`/atlas/registro/${r.slug}`)}
            onMouseEnter={() => setHover(r.id)}
            onMouseLeave={() => setHover(null)}
            className="group absolute -translate-x-1/2 -translate-y-1/2 focus:outline-none"
            style={{ left: `${r.x}%`, top: `${r.y}%` }}
            aria-label={r.titulo}
          >
            <span className="relative flex items-center justify-center">
              {published && <span className="absolute h-10 w-10 animate-ping-slow rounded-full bg-primary/40" />}
              <span
                className={`relative flex h-4 w-4 items-center justify-center rounded-full border-2 transition-all duration-300 group-hover:scale-150 ${
                  published ? 'border-primary bg-primary/30' : 'border-secondary/70 bg-background'
                }`}
              >
                <span className={`h-1.5 w-1.5 rounded-full ${published ? 'bg-primary' : 'bg-secondary/70'}`} />
              </span>
            </span>
            <AnimatePresence>
              {hover === r.id && (
                <motion.span
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 4 }}
                  className="pointer-events-none absolute left-1/2 top-7 z-20 w-52 -translate-x-1/2 overflow-hidden rounded-md border border-border/60 bg-card/95 text-left shadow-2xl backdrop-blur-md"
                >
                  <span className="block aspect-[16/9] overflow-hidden">
                    <img src={r.img} alt={r.titulo} className="h-full w-full object-cover" />
                  </span>
                  <span className="block p-3">
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-primary">{r.codigo}</span>
                    <span className="mt-0.5 block font-display text-base leading-tight">{r.titulo}</span>
                    <span className="mt-1 block text-[11px] text-muted-foreground">{r.comuna} · {r.fecha}</span>
                  </span>
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        );
      })}

      <div className="pointer-events-none absolute bottom-6 left-6 flex flex-col gap-2">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          <span className="mr-2 inline-block h-2 w-2 rounded-full bg-primary align-middle" /> Registro publicado
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          <span className="mr-2 inline-block h-2 w-2 rounded-full border border-secondary/70 align-middle" /> En preparación
        </span>
      </div>
    </div>
  );
}

// ── Index with filters ──────────────────────────────────────────
const FILTER_DIMS = [
  { key: 'categoria', label: 'Categoría', values: ATLAS_CATEGORIAS },
  { key: 'comuna', label: 'Comuna', values: ATLAS_FILTROS.comuna },
  { key: 'paisaje', label: 'Paisaje', values: ATLAS_FILTROS.paisaje },
  { key: 'estacion', label: 'Estación', values: ATLAS_FILTROS.estacion },
  { key: 'sonido', label: 'Sonido', values: ATLAS_FILTROS.sonido },
  { key: 'patrimonio', label: 'Patrimonio', values: ATLAS_FILTROS.patrimonio },
];

function IndexSection() {
  const [q, setQ] = useState('');
  const [dim, setDim] = useState('categoria');
  const [val, setVal] = useState('Todos');

  const activeValues = ['Todos', ...(FILTER_DIMS.find((d) => d.key === dim)?.values || [])];

  const results = useMemo(() => {
    return REGISTROS.filter((r) => {
      if (q && !`${r.titulo} ${r.comuna} ${r.resumen}`.toLowerCase().includes(q.toLowerCase())) return false;
      if (val === 'Todos') return true;
      if (dim === 'categoria') return r.categorias?.includes(val);
      return r[dim] === val;
    });
  }, [q, dim, val]);

  return (
    <section id="indice" className="relative border-t border-border/40 py-24 md:py-32">
      <div className="mx-auto max-w-[90rem] px-6 md:px-12">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Todos los registros</span>
          <h2 className="mt-3 font-display text-3xl font-light tracking-tight md:text-5xl">Índice del Atlas</h2>
          <p className="mt-4 max-w-xl text-foreground/70">
            El archivo sensorial organizado por paisaje, comuna y experiencia. Filtra para descubrir el territorio a tu ritmo.
          </p>
        </Reveal>

        {/* search + dimension */}
        <div className="mt-10 flex flex-col gap-4">
          <div className="flex items-center gap-3 rounded-full border border-border/60 bg-card/50 px-5 py-3 backdrop-blur">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Buscar un territorio, comuna o atmósfera…"
              className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Filter className="h-4 w-4 text-primary" />
            {FILTER_DIMS.map((d) => (
              <button
                key={d.key}
                onClick={() => { setDim(d.key); setVal('Todos'); }}
                className={`rounded-full px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.15em] transition-colors ${
                  dim === d.key ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {d.label}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {activeValues.map((v) => (
              <button
                key={v}
                onClick={() => setVal(v)}
                className={`rounded-full border px-4 py-1.5 text-xs transition-colors ${
                  val === v ? 'border-primary/60 bg-primary/10 text-primary' : 'border-border/60 text-muted-foreground hover:border-primary/40'
                }`}
              >
                {v}
              </button>
            ))}
          </div>
        </div>

        {/* results */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((r, i) => (
            <Reveal key={r.id} delay={(i % 3) * 0.06}>
              <Link
                to={`/atlas/registro/${r.slug}`}
                className="group block h-full overflow-hidden rounded-md border border-border/50 bg-card transition-colors hover:border-primary/50"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={r.img} alt={r.titulo} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
                  <span className={`absolute right-3 top-3 rounded-full px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.15em] ${
                    r.estado === 'Publicado' ? 'bg-primary text-primary-foreground' : 'bg-background/70 text-muted-foreground backdrop-blur'
                  }`}>
                    {r.estado}
                  </span>
                </div>
                <div className="p-5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">{r.codigo}</span>
                  <p className="mt-1 font-display text-xl">{r.titulo}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{r.comuna} · {r.fecha}</p>
                  <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-foreground/70">{r.resumen}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {r.categorias?.slice(0, 3).map((c) => (
                      <span key={c} className="rounded-full bg-secondary/15 px-2 py-0.5 text-[10px] text-secondary">{c}</span>
                    ))}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
          {results.length === 0 && (
            <p className="col-span-full py-16 text-center text-muted-foreground">
              No hay registros para este filtro todavía. El Atlas crece con el tiempo.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

// ── Timeline ────────────────────────────────────────────────────
function Timeline() {
  const ordered = [...REGISTROS].sort((a, b) => a.fechaISO.localeCompare(b.fechaISO));
  return (
    <section className="relative border-t border-border/40 py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Cronología</span>
          <h2 className="mt-3 font-display text-3xl font-light tracking-tight md:text-5xl">El Atlas crece con el tiempo</h2>
          <p className="mt-4 max-w-xl text-foreground/70">
            Cada nuevo registro se incorpora al archivo. Una línea viva que documenta la identidad del Maule, mes a mes.
          </p>
        </Reveal>
        <div className="relative mt-12 pl-8">
          <span className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-secondary/50 to-transparent" />
          {ordered.map((r, i) => (
            <Reveal key={r.id} delay={i * 0.05}>
              <Link to={`/atlas/registro/${r.slug}`} className="group relative mb-8 block">
                <span className={`absolute -left-8 top-1.5 h-4 w-4 rounded-full border-2 ${
                  r.estado === 'Publicado' ? 'border-primary bg-primary' : 'border-secondary/70 bg-background'
                }`} />
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{r.fecha}</span>
                <p className="mt-1 font-display text-xl transition-colors group-hover:text-primary">{r.codigo} · {r.titulo}</p>
                <p className="mt-1 text-sm text-muted-foreground">{r.resumen}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AtlasPage() {
  return (
    <div className="grain relative bg-background">
      <PageHead 
        title="Atlas Sensorial del Maule"
        description="Explora la identidad de los territorios del Maule mediante paisaje sonoro, patrimonio, tecnologías inmersivas y memoria viva. Una plataforma interactiva de registros sensoriales."
      />
      <SiteChrome current="Escuchar · Atlas Sensorial" />

      {/* HERO */}
      <section className="relative flex min-h-[100dvh] flex-col overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMG.mataquito}
            alt="Paisaje sonoro del territorio del Maule"
            className="h-full w-full origin-center animate-slow-pan object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        </div>

        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pt-28 text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-mono text-[11px] uppercase tracking-[0.45em] text-foreground/70"
          >
            Archivo vivo del territorio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-4xl font-display text-4xl font-light leading-[1.03] tracking-tight text-balance sm:text-6xl md:text-[5rem]"
          >
            Atlas Sensorial<br className="hidden sm:block" /> del Maule
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-foreground/75 md:text-lg"
          >
            Una plataforma para explorar la identidad de los territorios mediante paisaje sonoro,
            patrimonio, tecnologías inmersivas y memoria viva.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 1.3, delay: 1.7 }}
            className="mt-10 space-y-1 font-display text-lg font-light italic text-foreground/85 md:text-xl"
          >
            <p>Cada territorio tiene una atmósfera.</p>
            <p>Cada atmósfera cuenta una historia.</p>
          </motion.div>
          <motion.a
            href="#mapa"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.3 }}
            className="group relative mt-12 flex items-center gap-2 overflow-hidden rounded-full bg-foreground px-8 py-4 text-sm font-medium text-background transition-all hover:gap-3 active:scale-[0.98]"
          >
            <span className="absolute inset-0 -translate-x-full bg-primary transition-transform duration-500 group-hover:translate-x-0" />
            <span className="relative">Comenzar la exploración</span>
            <ArrowRight className="relative h-4 w-4" />
          </motion.a>
        </div>

        <motion.a
          href="#mapa"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3 }}
          className="relative z-10 mx-auto mb-8 flex flex-col items-center gap-2 text-foreground/60 hover:text-foreground"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em]">El mapa vivo</span>
          <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <ArrowDown className="h-4 w-4" strokeWidth={1.5} />
          </motion.span>
        </motion.a>
      </section>

      {/* FULLSCREEN LIVING MAP */}
      <section id="mapa" className="relative h-[100dvh] w-full overflow-hidden">
        <NetworkMap />
        <div className="pointer-events-none absolute left-6 top-24 z-10 max-w-xs md:left-12">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">Red viva de territorios</span>
          <h2 className="mt-2 font-display text-2xl font-light md:text-3xl">Cada punto es una atmósfera</h2>
          <p className="mt-3 text-sm text-foreground/70">
            No es un mapa cartográfico. Es una constelación de experiencias inmersivas conectadas por el agua, la memoria y el sonido. Pasa el cursor y descubre.
          </p>
        </div>
      </section>

      {/* CÓMO CONSTRUIMOS EL ATLAS */}
      <section className="relative border-t border-border/40 py-24 md:py-32">
        <div className="mx-auto max-w-[90rem] px-6 md:px-12">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Metodología</span>
            <h2 className="mt-3 font-display text-3xl font-light tracking-tight md:text-5xl">¿Cómo construimos el Atlas?</h2>
          </Reveal>
          <div className="mt-14 grid gap-4 md:grid-cols-5">
            {ATLAS_CONSTRUCCION.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div className="relative h-full">
                  <span className="font-mono text-xs text-primary">{s.n}</span>
                  <p className="mt-2 font-display text-2xl">{s.t}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                  {i < ATLAS_CONSTRUCCION.length - 1 && (
                    <span className="absolute -right-2 top-2 hidden text-border md:block">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <IndexSection />
      <Timeline />

      {/* CLOSING */}
      <section className="relative overflow-hidden py-32 md:py-44">
        <div className="absolute inset-0">
          <img src={IMG.hero} alt="" className="h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
        </div>
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <div className="mb-8 flex items-center justify-center gap-6 text-primary/70">
              <Waves className="h-6 w-6" strokeWidth={1.4} />
              <Radio className="h-6 w-6" strokeWidth={1.4} />
              <Camera className="h-6 w-6" strokeWidth={1.4} />
              <Wind className="h-6 w-6" strokeWidth={1.4} />
            </div>
            <p className="font-display text-3xl font-light italic leading-snug md:text-5xl">
              &ldquo;No documentamos lugares. Conservamos la atmósfera de los territorios.&rdquo;
            </p>
            <Link
              to="/laboratorio"
              className="mt-12 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Conoce nuestro Laboratorio <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-border/40 px-6 py-12 md:px-12">
        <div className="mx-auto flex max-w-[90rem] flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="font-display text-xl">Atlas Sensorial del Maule</p>
            <p className="mt-1 text-sm text-muted-foreground">Un archivo vivo de Maule Creativo · Región del Maule, Chile</p>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <Headphones className="h-4 w-4" /> Registrado con sonido inmersivo
          </div>
        </div>
      </footer>
    </div>
  );
}

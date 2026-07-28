import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight, ArrowLeft, Play, Pause, Headphones, Rotate3d, Glasses,
  MapPin, Clock, CalendarDays, CloudFog, Cpu, Users, Leaf, Bird,
  BookOpen, Compass, CircleDot,
} from 'lucide-react';
import SiteChrome from '@/components/SiteChrome';
import WaveVisualizer from '@/components/WaveVisualizer';
import { REGISTROS } from '@/lib/mauleData';
import { toggleAmbient, isAmbientOn, subscribeAmbient } from '@/lib/ambient';

function Reveal({ children, delay = 0, y = 30, className = '' }) {
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

function InfoRow({ icon: Icon, label, value }) {
  if (!value) return null;
  return (
    <div className="flex items-start gap-4 border-b border-border/40 py-4">
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.6} />
      <div className="flex-1">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
        <p className="mt-1 text-sm text-foreground/90">{Array.isArray(value) ? value.join(' · ') : value}</p>
      </div>
    </div>
  );
}

export default function RegistroPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const registro = REGISTROS.find((r) => r.slug === slug);
  const [playing, setPlaying] = useState(isAmbientOn());

  useEffect(() => subscribeAmbient(setPlaying), []);
  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!registro) {
    return (
      <div className="grain flex min-h-[100dvh] flex-col items-center justify-center bg-background text-center">
        <SiteChrome current="Atlas Sensorial" />
        <p className="font-display text-3xl">Registro no encontrado</p>
        <Link to="/atlas" className="mt-6 inline-flex items-center gap-2 text-primary">
          <ArrowLeft className="h-4 w-4" /> Volver al Atlas
        </Link>
      </div>
    );
  }

  const r = registro;
  const published = r.estado === 'Publicado';
  const idx = REGISTROS.findIndex((x) => x.id === r.id);
  const next = REGISTROS[(idx + 1) % REGISTROS.length];

  const togglePlay = () => setPlaying(toggleAmbient());

  return (
    <div className="grain relative bg-background">
      <SiteChrome current={`Registro ${r.id} · ${r.titulo}`} />

      {/* HERO — video principal (poster cinematográfico) */}
      <section className="relative flex min-h-[100dvh] flex-col overflow-hidden">
        <div className="absolute inset-0">
          <img src={r.hero} alt={r.titulo} className="h-full w-full origin-center animate-slow-pan object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/45 to-background" />
        </div>

        <div className="relative z-10 flex flex-1 flex-col justify-end px-6 pb-16 pt-28 md:px-12">
          <Link to="/atlas" className="mb-auto inline-flex w-fit items-center gap-2 rounded-full border border-foreground/25 bg-background/30 px-4 py-2 text-xs backdrop-blur-sm transition-colors hover:border-foreground/60">
            <ArrowLeft className="h-3.5 w-3.5" /> Atlas Sensorial
          </Link>

          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
              className="font-mono text-[11px] uppercase tracking-[0.4em] text-primary"
            >
              {r.codigo}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}
              className="mt-4 font-display text-5xl font-light leading-[1.02] tracking-tight md:text-7xl"
            >
              {r.titulo}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.7 }}
              className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs uppercase tracking-[0.2em] text-foreground/70"
            >
              <span>{(r.comunas || [r.comuna]).join(' · ')}</span>
              <span className="text-primary">/</span>
              <span>{r.fecha}</span>
            </motion.p>
          </div>

          {/* play button — big cinematic */}
          <motion.button
            onClick={togglePlay}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
            className="group mt-10 flex w-fit items-center gap-4 text-left"
          >
            <span className="relative flex h-16 w-16 items-center justify-center rounded-full border border-foreground/30 bg-background/40 backdrop-blur transition-colors group-hover:border-primary">
              {published && <span className="absolute inset-0 animate-ping-slow rounded-full bg-primary/30" />}
              {playing ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 translate-x-0.5" />}
            </span>
            <span>
              <span className="block font-display text-lg">{playing ? 'Reproduciendo atmósfera' : 'Reproducir la atmósfera'}</span>
              <span className="block text-sm text-foreground/60">Paisaje sonoro inmersivo del lugar</span>
            </span>
          </motion.button>
        </div>
      </section>

      {published ? (
        <>
          {/* ESCUCHAR EL TERRITORIO */}
          <section className="relative border-t border-border/40 py-24 md:py-32">
            <div className="mx-auto max-w-4xl px-6">
              <Reveal>
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Escuchar el territorio</span>
                <h2 className="mt-3 font-display text-3xl font-light tracking-tight md:text-5xl">El sonido guarda la atmósfera</h2>
                <p className="mt-4 max-w-xl text-foreground/70">
                  Este registro fue realizado mediante sonido inmersivo y micrófonos Ambisonics para conservar la
                  atmósfera espacial del lugar: la dirección del agua, la distancia de las aves, el peso del viento.
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="mt-10 overflow-hidden rounded-xl border border-border/50 bg-card/60 p-6 backdrop-blur md:p-8">
                  <div className="flex items-center gap-5">
                    <button
                      onClick={togglePlay}
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105 active:scale-95"
                      aria-label={playing ? 'Pausar' : 'Reproducir'}
                    >
                      {playing ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 translate-x-0.5" />}
                    </button>
                    <div className="h-16 flex-1">
                      <WaveVisualizer playing={playing} />
                    </div>
                  </div>
                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-border/40 pt-5">
                    <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-secondary">
                      <Headphones className="h-4 w-4" /> Audio espacial · Usa audífonos
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{r.sonido}</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          {/* LA ATMÓSFERA DEL LUGAR */}
          <section className="relative overflow-hidden py-24 md:py-36">
            <div className="mx-auto max-w-[95rem] px-6 md:px-12">
              <Reveal className="mx-auto max-w-3xl text-center">
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">La atmósfera del lugar</span>
                <div className="mt-8 space-y-6">
                  {(r.atmosfera || []).map((line, i) => (
                    <p key={i} className="font-display text-2xl font-light leading-snug text-foreground/90 md:text-4xl">
                      {line}
                    </p>
                  ))}
                </div>
              </Reveal>

              <div className="mt-16 grid gap-4 md:grid-cols-3">
                {(r.galeria || []).slice(0, 3).map((src, i) => (
                  <Reveal key={i} delay={i * 0.1}>
                    <div className={`overflow-hidden rounded-md ${i === 1 ? 'md:mt-12' : ''}`}>
                      <img src={src} alt={`${r.titulo} — atmósfera ${i + 1}`} className="aspect-[3/4] w-full object-cover transition-transform duration-[1.2s] hover:scale-105" />
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* EXPLORAR EN 360° */}
          <section className="relative border-t border-border/40 py-24 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
              <Reveal>
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Explorar en 360°</span>
                <h2 className="mt-3 font-display text-3xl font-light tracking-tight md:text-5xl">Habita el lugar</h2>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="group relative mt-10 aspect-video overflow-hidden rounded-xl border border-border/50">
                  <img src={r.galeria?.[0] || r.hero} alt={`Vista 360° de ${r.titulo}`} className="h-full w-full object-cover opacity-70 transition-transform duration-[3s] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-background/30" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 text-center">
                    <span className="flex h-20 w-20 items-center justify-center rounded-full border border-foreground/40 bg-background/40 backdrop-blur">
                      <Rotate3d className="h-8 w-8 text-primary" strokeWidth={1.3} />
                    </span>
                    <p className="max-w-md px-6 text-sm text-foreground/80">
                      Visor inmersivo preparado para experiencias 360° y realidad virtual. Arrastra para mirar alrededor.
                    </p>
                    <button className="flex items-center gap-2 rounded-full border border-foreground/30 bg-background/40 px-6 py-3 text-sm font-medium backdrop-blur transition-colors hover:border-primary" title="Preparado para futuras implementaciones">
                      <Glasses className="h-4 w-4" /> Ver en Oculus Quest
                    </button>
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Preparado para futuras implementaciones</span>
                  </div>
                  {/* subtle equirect grid hint */}
                  <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-foreground/10" />
                </div>
              </Reveal>
            </div>
          </section>

          {/* HISTORIA / PAISAJE / PATRIMONIO / MEMORIA */}
          <section className="relative py-24 md:py-32">
            <div className="mx-auto max-w-4xl px-6">
              <div className="grid gap-10 md:grid-cols-2">
                <Reveal>
                  <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                    <BookOpen className="h-4 w-4" /> Historia y memoria
                  </span>
                  <p className="mt-4 text-[15px] leading-relaxed text-foreground/85">{r.historia}</p>
                  <p className="mt-4 text-[15px] leading-relaxed text-foreground/70">{r.resumen}</p>
                </Reveal>
                <Reveal delay={0.1}>
                  <div className="space-y-6">
                    <div>
                      <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-primary"><Users className="h-4 w-4" /> Personas</span>
                      <p className="mt-2 text-sm text-foreground/75">{r.personas}</p>
                    </div>
                    <div>
                      <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-primary"><Leaf className="h-4 w-4" /> Flora</span>
                      <p className="mt-2 text-sm text-foreground/75">{r.flora}</p>
                    </div>
                    <div>
                      <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-primary"><Bird className="h-4 w-4" /> Fauna</span>
                      <p className="mt-2 text-sm text-foreground/75">{r.fauna}</p>
                    </div>
                  </div>
                </Reveal>
              </div>
              {r.keywords && (
                <Reveal delay={0.15}>
                  <div className="mt-12 flex flex-wrap gap-2">
                    {r.keywords.map((k) => (
                      <span key={k} className="rounded-full border border-border/60 px-4 py-1.5 text-xs text-muted-foreground">{k}</span>
                    ))}
                  </div>
                </Reveal>
              )}
            </div>
          </section>

          {/* INFORMACIÓN DEL REGISTRO */}
          <section className="relative border-t border-border/40 py-24 md:py-32">
            <div className="mx-auto max-w-4xl px-6">
              <Reveal>
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Información del registro</span>
                <h2 className="mt-3 font-display text-3xl font-light tracking-tight md:text-5xl">Ficha técnica</h2>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="mt-10 grid gap-x-12 md:grid-cols-2">
                  <div>
                    <InfoRow icon={MapPin} label="Ubicación" value={r.coordenadas} />
                    <InfoRow icon={Compass} label="Comuna" value={(r.comunas || [r.comuna]).join(', ')} />
                    <InfoRow icon={CalendarDays} label="Fecha" value={r.fecha} />
                    <InfoRow icon={Clock} label="Hora" value={r.hora} />
                    <InfoRow icon={CloudFog} label="Condiciones ambientales" value={r.clima} />
                  </div>
                  <div>
                    <InfoRow icon={Cpu} label="Tecnologías utilizadas" value={r.tecnologias} />
                    <InfoRow icon={Headphones} label="Paisaje sonoro" value={r.sonido} />
                    <InfoRow icon={Rotate3d} label="Registro audiovisual" value="Video, dron, 360° y fotografía" />
                    <InfoRow icon={Users} label="Equipo participante" value={r.equipo} />
                    <InfoRow icon={CircleDot} label="Estado del registro" value={r.estado} />
                  </div>
                </div>
              </Reveal>
            </div>
          </section>
        </>
      ) : (
        <section className="relative border-t border-border/40 py-24 md:py-32">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <Reveal>
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">En preparación</span>
              <h2 className="mt-4 font-display text-3xl font-light md:text-4xl">Este registro aún se está construyendo</h2>
              <p className="mt-4 text-foreground/70">{r.resumen}</p>
              <p className="mt-6 text-sm text-muted-foreground">
                Estamos escuchando, registrando y co-creando junto a la comunidad de {r.comuna}. Pronto formará parte del archivo sensorial.
              </p>
            </Reveal>
          </div>
        </section>
      )}

      {/* SIGUIENTE TERRITORIO */}
      <section className="relative overflow-hidden py-16">
        <button
          onClick={() => navigate(`/atlas/registro/${next.slug}`)}
          className="group relative block w-full"
        >
          <div className="absolute inset-0">
            <img src={next.img} alt={next.titulo} className="h-full w-full object-cover opacity-25 transition-opacity duration-500 group-hover:opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background" />
          </div>
          <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 py-20 text-center">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Continúa la exploración</span>
            <p className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">{next.codigo}</p>
            <p className="mt-2 font-display text-3xl font-light md:text-5xl">{next.titulo}</p>
            <span className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all group-hover:gap-3">
              Descubrir el siguiente territorio <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </button>
      </section>

      <footer className="border-t border-border/40 px-6 py-12 md:px-12">
        <div className="mx-auto flex max-w-[90rem] flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <p className="font-display text-lg">Atlas Sensorial del Maule</p>
          <Link to="/atlas" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
            <ArrowLeft className="h-4 w-4" /> Volver al índice del Atlas
          </Link>
        </div>
      </footer>
    </div>
  );
}

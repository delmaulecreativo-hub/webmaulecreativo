import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import SiteChrome from '@/components/SiteChrome';
import PageHead from '@/components/PageHead';
import { BITACORA, BITACORA_FILTROS, BITACORA_IMG } from '@/lib/mauleData';

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

export default function BitacoraPage() {
  const [filtro, setFiltro] = useState('Todos');

  const entradas = useMemo(() => {
    if (filtro === 'Todos') return BITACORA;
    return BITACORA.filter((e) => e.tags.includes(filtro) || e.categoria === filtro);
  }, [filtro]);

  return (
    <div className="grain relative min-h-[100dvh] bg-background">
      <PageHead 
        title="Bitácora"
        description="Cronología de investigación del laboratorio. Procesos, descubrimientos y proyectos en el territorio del Maule."
      />
      <SiteChrome current="Bitácora · Cronología de investigación" />

      {/* Hero */}
      <section className="relative flex min-h-[80dvh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={BITACORA_IMG.hero} alt="Río Mataquito al amanecer en la Región del Maule" className="h-full w-full animate-slow-pan object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/40" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-[90rem] px-6 pb-20 md:px-12">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-mono text-xs uppercase tracking-[0.35em] text-primary">
            Bitácora
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="mt-5 max-w-4xl font-display text-4xl font-light leading-[1.05] tracking-tight md:text-7xl"
          >
            Un laboratorio se construye investigando.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-7 max-w-2xl space-y-4 text-lg leading-relaxed text-foreground/80 md:text-xl"
          >
            <p>
              Cada territorio recorrido, cada conversación, cada paisaje sonoro y cada prototipo
              forman parte de un proceso permanente de aprendizaje.
            </p>
            <p className="font-display text-2xl italic text-foreground/90">
              No publicamos noticias. Compartimos procesos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filtros */}
      <section className="sticky top-0 z-30 border-y border-border/40 bg-background/80 backdrop-blur-md">
        <div className="mx-auto max-w-[90rem] px-6 py-4 md:px-12">
          <div className="flex flex-wrap gap-2">
            {['Todos', ...BITACORA_FILTROS].map((f) => (
              <button
                key={f}
                onClick={() => setFiltro(f)}
                className={`rounded-full border px-4 py-1.5 text-xs uppercase tracking-wide transition-colors ${
                  filtro === f
                    ? 'border-primary bg-primary/10 text-primary'
                    : 'border-border/60 text-muted-foreground hover:border-foreground/40 hover:text-foreground'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Cronología */}
      <section className="mx-auto max-w-[80rem] px-6 py-24 md:px-12">
        <div className="relative">
          {/* Línea vertical */}
          <div className="absolute left-2 top-0 hidden h-full w-px bg-border/60 md:left-1/2 md:block" />

          <AnimatePresence mode="popLayout">
            {entradas.length === 0 ? (
              <motion.p
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-20 text-center text-muted-foreground"
              >
                Aún no hay procesos registrados en esta categoría. La bitácora sigue creciendo.
              </motion.p>
            ) : (
              <div className="flex flex-col gap-16 md:gap-24">
                {entradas.map((e, i) => (
                  <motion.article
                    key={e.id}
                    layout
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className={`relative grid items-center gap-8 md:grid-cols-2 md:gap-14 ${i % 2 === 1 ? 'md:[direction:rtl]' : ''}`}
                  >
                    {/* Nodo */}
                    <span className="absolute left-2 top-6 hidden h-3 w-3 -translate-x-1/2 rounded-full border border-primary bg-background md:left-1/2 md:block" />

                    <div className="group relative overflow-hidden rounded-sm border border-border/60 bg-card [direction:ltr]">
                      <Link to={e.to} className="block">
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <img src={e.img} alt={`${e.titulo} — ${e.lugar}`} className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-105" />
                          <div className="absolute inset-0 bg-gradient-to-t from-card/70 via-transparent to-transparent" />
                          <span className="absolute left-4 top-4 rounded-full bg-background/70 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-primary backdrop-blur-sm">
                            {e.categoria}
                          </span>
                        </div>
                      </Link>
                    </div>

                    <div className="[direction:ltr]">
                      <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
                        {e.fecha} · {e.lugar}
                      </p>
                      <h2 className="mt-3 font-display text-3xl font-light leading-tight tracking-tight md:text-4xl">
                        {e.titulo}
                      </h2>
                      <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">{e.resumen}</p>
                      <Link
                        to={e.to}
                        className="group mt-6 inline-flex items-center gap-2 rounded-full border border-foreground/25 px-6 py-3 text-sm font-medium transition-colors hover:border-primary/60 hover:text-primary"
                      >
                        Explorar <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Frase destacada */}
      <section className="border-t border-border/40 px-6 py-32 text-center md:px-12">
        <Reveal>
          <p className="mx-auto max-w-4xl font-display text-3xl font-light leading-tight tracking-tight text-foreground md:text-5xl">
            No compartimos resultados finales.
            <br />
            <span className="text-primary">Compartimos el camino.</span>
          </p>
          <Link
            to="/colaboraciones"
            className="mt-12 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Construyamos el próximo territorio juntos <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>
    </div>
  );
}

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, ArrowUpRight, Compass } from 'lucide-react';
import { MENU } from '@/lib/mauleData';
import SoundToggle from '@/components/SoundToggle';

function Brand() {
  return (
    <Link to="/" className="group flex items-center gap-3">
      <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-primary/50">
        <Compass className="h-4 w-4 text-primary transition-transform duration-500 group-hover:rotate-45" strokeWidth={1.6} />
      </span>
      <span className="leading-tight">
        <span className="block font-display text-base font-medium tracking-tight">Maule Creativo</span>
        <span className="block font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          Ingeniería Creativa
        </span>
      </span>
    </Link>
  );
}

export default function SiteChrome({ current }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-5 py-4 md:px-8">
        <div className="rounded-full bg-background/40 px-3 py-1 backdrop-blur-md">
          <Brand />
        </div>
        <div className="flex items-center gap-2">
          <SoundToggle className="hidden sm:flex" />
          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 rounded-full border border-border/60 bg-background/50 px-4 py-2 text-sm font-medium backdrop-blur-md transition-colors hover:border-primary/60"
          >
            <Menu className="h-4 w-4" strokeWidth={1.6} />
            <span className="hidden sm:inline">Menú</span>
          </button>
        </div>
      </header>

      {/* Location breadcrumb — "siempre sabes dónde estás" */}
      {current && (
        <div className="fixed left-5 top-20 z-40 md:left-8">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary/80">
            {current}
          </span>
        </div>
      )}

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[70]"
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <motion.div
              className="absolute inset-0 bg-background/80 backdrop-blur-xl"
              variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
              transition={{ duration: 0.4 }}
              onClick={() => setOpen(false)}
            />
            <motion.nav
              className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col border-l border-border/60 bg-card px-8 py-8"
              variants={{ hidden: { x: '100%' }, show: { x: 0 } }}
              transition={{ type: 'spring', stiffness: 260, damping: 30 }}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                  Metodología
                </span>
                <button onClick={() => setOpen(false)} aria-label="Cerrar menú" className="text-muted-foreground hover:text-foreground">
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-10 flex flex-1 flex-col justify-center gap-1">
                {MENU.map((item, i) => {
                  const active = location.pathname === item.to;
                  return (
                    <motion.div
                      key={item.verbo + i}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 + i * 0.06 }}
                    >
                      <Link
                        to={item.to}
                        onClick={() => setOpen(false)}
                        className="group flex items-baseline justify-between border-b border-border/40 py-4"
                      >
                        <span>
                          <span
                            className={`block font-display text-3xl font-medium tracking-tight transition-colors group-hover:text-primary ${active ? 'text-primary' : ''}`}
                          >
                            {item.verbo}
                          </span>
                          <span className="mt-1 block text-sm text-muted-foreground">{item.desc}</span>
                        </span>
                        <ArrowUpRight className="h-5 w-5 -translate-x-2 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0 group-hover:text-primary group-hover:opacity-100" />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <div className="flex items-center justify-between pt-6">
                <SoundToggle />
                <Link
                  to="/"
                  onClick={() => setOpen(false)}
                  className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground"
                >
                  ← Volver al recorrido
                </Link>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

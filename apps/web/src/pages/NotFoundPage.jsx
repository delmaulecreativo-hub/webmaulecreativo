import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import SiteChrome from '@/components/SiteChrome';
import PageHead from '@/components/PageHead';

export default function NotFoundPage() {
  return (
    <div className="grain relative min-h-[100dvh] bg-background">
      <PageHead 
        title="Página no encontrada"
        description="El territorio que buscas aún no ha sido explorado. Vuelve al inicio o explora el Atlas Sensorial del Maule."
      />
      <SiteChrome />

      <section className="flex min-h-[100dvh] flex-col items-center justify-center px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl text-center"
        >
          <div className="mb-8 flex items-center justify-center">
            <MapPin className="h-16 w-16 text-primary/60" strokeWidth={1.2} />
          </div>

          <h1 className="font-display text-5xl font-light leading-tight tracking-tight md:text-7xl">
            Registro no encontrado
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-foreground/75 md:text-xl">
            Este territorio aún no ha sido explorado. Quizás se encuentra en preparación o la ruta que buscas no existe en nuestro mapa.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/"
              className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-foreground px-8 py-4 text-sm font-medium text-background transition-all duration-300 hover:gap-3 active:scale-[0.98]"
            >
              <span className="absolute inset-0 -translate-x-full bg-primary transition-transform duration-500 ease-out group-hover:translate-x-0" />
              <span className="relative">Volver al inicio</span>
              <ArrowRight className="relative h-4 w-4" />
            </Link>

            <Link
              to="/atlas"
              className="group flex items-center gap-2 rounded-full border border-foreground/25 px-8 py-4 text-sm font-medium text-foreground/90 backdrop-blur-sm transition-all duration-300 hover:border-foreground/60 hover:gap-3"
            >
              Explorar el Atlas Sensorial
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <p className="mt-12 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Error 404 · Territorio no mapeado
          </p>
        </motion.div>
      </section>
    </div>
  );
}

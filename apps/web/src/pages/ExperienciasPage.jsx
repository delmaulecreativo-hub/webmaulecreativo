import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';
import SiteChrome from '@/components/SiteChrome';
import PageHead from '@/components/PageHead';
import { EXPERIENCIAS } from '@/lib/mauleData';

const DETALLE = {
  rokha: 'Un montaje que devuelve al Maule la voz épica de Pablo de Rokha: escena, proyección y sonido convierten la poesía en un espacio para habitar.',
  festival: 'El escaparate público del laboratorio. Durante el Festival Epopeyas del Maule, poesía, música y tecnología narran en voz alta la identidad de la región.',
  turismo: 'Rutas creativas que no se visitan: se habitan. Diseñamos recorridos sensoriales para descubrir el territorio con los cinco sentidos.',
  residencias: 'Programas de creación situada: artistas, científicos y tecnólogos investigan desde y con el territorio, dejando obra y conocimiento en la comunidad.',
  raices: 'Pintura, arte sonoro, escucha de plantas y artesanía: la colaboración entre Karolina Mättig y Carlos González que investiga las raíces sensibles del Maule desde Gualleco, Curepto.',
  'territorios-resonantes': 'Una residencia creativa e instalación inmersiva: pintura, escultura, plantas y tecnología sonora se combinan para revelar las voces invisibles del territorio.',
  'memorias-licanten': 'Diez habitantes adultos mayores de Licantén convirtieron seis meses de taller de escritura creativa en un libro de relatos que firman con su propio nombre.',
};

const RUTA_PROYECTO = {
  rokha: '/verso-de-rokha',
  raices: '/raices-del-maule',
  'territorios-resonantes': '/territorios-resonantes',
  'memorias-licanten': '/memorias-de-licanten',
};

function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, delay }}>
      {children}
    </motion.div>
  );
}

export default function ExperienciasPage() {
  return (
    <div className="grain relative min-h-[100dvh] bg-background">
      <PageHead 
        title="Experiencias"
        description="Verso de Rokha, Festival Epopeyas del Maule, Turismo Creativo y Residencias Artísticas. Aplicaciones vivas del laboratorio de ingeniería creativa."
      />
      <SiteChrome current="Crear · Activar · Experiencias" />

      <section className="mx-auto max-w-[90rem] px-6 pb-8 pt-32 md:px-12 md:pt-40">
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
          Estación 04 · Aplicaciones del laboratorio
        </motion.span>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }} className="mt-4 max-w-3xl font-display text-4xl font-light leading-tight tracking-tight md:text-6xl">
          Experiencias que hacen visible el territorio
        </motion.h1>
      </section>

      <section className="mx-auto max-w-[90rem] px-6 pb-24 md:px-12">
        <div className="flex flex-col divide-y divide-border/40 border-y border-border/40">
          {EXPERIENCIAS.map((ex, i) => (
            <Reveal key={ex.id} delay={(i % 2) * 0.08}>
              <div className={`grid items-center gap-8 py-10 md:grid-cols-2 md:gap-16 ${i % 2 ? 'md:[&>*:first-child]:order-2' : ''}`}>
                <div className="relative aspect-[16/10] overflow-hidden rounded-sm">
                  {ex.img ? (
                    <img src={ex.img} alt={ex.titulo} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-2 border border-dashed border-border/60 bg-card/60 text-center">
                      <BookOpen className="h-7 w-7 text-muted-foreground" strokeWidth={1.4} />
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Imagen pendiente</span>
                    </div>
                  )}
                </div>
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">{ex.kicker}</span>
                  <h2 className="mt-3 font-display text-3xl font-light tracking-tight md:text-4xl">{ex.titulo}</h2>
                  <p className="mt-4 max-w-md text-[15px] leading-relaxed text-foreground/80">{DETALLE[ex.id]}</p>
                  <Link
                    to={RUTA_PROYECTO[ex.id] || '/colabora'}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3"
                  >
                    {RUTA_PROYECTO[ex.id] ? 'Ver el proyecto' : 'Quiero participar'} <ArrowRight className="h-4 w-4 transition-all" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}

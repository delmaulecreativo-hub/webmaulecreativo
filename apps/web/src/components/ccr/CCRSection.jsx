import React from 'react';
import { motion } from 'framer-motion';

function Reveal({ children, delay = 0, y = 24, className = '' }) {
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

// Sección anclada reutilizable para la ficha del CCR. scroll-mt compensa el
// header fijo del sitio (SiteChrome) para que el anchor no quede tapado.
export default function CCRSection({ id, kicker, titulo, children }) {
  return (
    <section id={id} className="scroll-mt-28 relative border-t border-border/40 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">{kicker}</span>
          <h2 className="mt-3 font-display text-3xl font-light tracking-tight md:text-4xl">{titulo}</h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-8">
          {children}
        </Reveal>
      </div>
    </section>
  );
}

export { Reveal };

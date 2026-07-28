import React from 'react';

// Footer del "Ecosistema Maule Creativo" (snippet A.3 de la ficha del CCR).
// NOTA: por ahora se usa solo en las páginas del CCR (/ccr y su reportaje) —
// el resto del sitio arma su propio <footer> inline en cada página. Adoptarlo
// como footer realmente global del sitio implicaría tocar esas páginas
// existentes, fuera del alcance acordado para este trabajo.
const ECOSISTEMA = [
  {
    nombre: 'maulecreativo.cl',
    href: 'https://maulecreativo.cl',
    externo: false,
    desc: 'Portal público: festival, rutas creativas, experiencias, agenda, tienda territorial.',
  },
  {
    nombre: 'maulecreativo.cloud',
    href: 'https://maulecreativo.cloud',
    externo: true,
    desc: 'Laboratorio de Ingeniería Creativa: innovación, consultoría, metodología, Maule OS.',
  },
  {
    nombre: 'maulecreativo.com',
    href: null,
    externo: false,
    desc: 'Presencia internacional (próximamente).',
  },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-border/40 px-6 py-16 md:px-12">
      <div className="mx-auto max-w-[90rem]">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Ecosistema Maule Creativo</span>
        <div className="mt-8 grid gap-8 sm:grid-cols-3">
          {ECOSISTEMA.map((item) => (
            <div key={item.nombre}>
              {item.href ? (
                <a
                  href={item.href}
                  {...(item.externo ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="font-display text-lg font-medium tracking-tight text-foreground hover:text-primary"
                >
                  {item.nombre}
                </a>
              ) : (
                <span className="font-display text-lg font-medium tracking-tight text-muted-foreground">{item.nombre}</span>
              )}
              <p className="mt-2 text-sm text-foreground/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

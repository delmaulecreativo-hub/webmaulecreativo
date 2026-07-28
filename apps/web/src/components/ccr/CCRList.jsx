import React from 'react';

// Lista de {t (título), d (descripción), sublista? (viñetas anidadas)} —
// usada por las secciones de espacios, capacidades, residencia y apertura
// de la ficha del CCR.
export default function CCRList({ items }) {
  return (
    <ul className="space-y-6">
      {items.map((item) => (
        <li key={item.t} className="border-b border-border/30 pb-6 last:border-0 last:pb-0">
          <p className="font-display text-lg text-foreground">{item.t}</p>
          <p className="mt-1.5 text-[15px] leading-relaxed text-foreground/75">{item.d}</p>
          {item.sublista && (
            <ul className="mt-3 space-y-1.5 pl-5">
              {item.sublista.map((sub) => (
                <li key={sub} className="list-disc text-sm leading-relaxed text-foreground/70 marker:text-primary">
                  {sub}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}

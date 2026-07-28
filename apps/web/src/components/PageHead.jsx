import React from 'react';
import { Helmet } from 'react-helmet';

export default function PageHead({ title, description, image }) {
  const fullTitle = title ? `${title} — Maule Creativo` : 'Laboratorio de Ingeniería Creativa Tecnológica — Maule Creativo';
  const fullDescription = description || 'Laboratorio de I+D en tecnología creativa desde la Región del Maule: inteligencia territorial, experiencias inmersivas, IA aplicada a patrimonio y plataformas territoriales. Atlas Sensorial del Maule.';

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      {image && <meta property="og:image" content={image} />}
    </Helmet>
  );
}

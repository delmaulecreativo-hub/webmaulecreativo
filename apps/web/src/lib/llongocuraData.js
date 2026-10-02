// Campo Cultural Llongocura — datos del mapa de escenarios (propuesta inicial).
//
// Las posiciones (x, y) son porcentajes sobre la fotografía aérea
// (/llongocura/vista-aerea.webp, 2000×1331). Son una PROPUESTA inicial hecha
// a ojo: deben validarse en terreno. Para recalibrar, abrir /llongocura?calibrar=1
// y hacer clic sobre la imagen: muestra las coordenadas a pegar aquí.
//
// Los textos son descriptivos y deliberadamente genéricos: no incluyen aforos,
// programación ni usos confirmados. Completar cuando existan datos oficiales.

export const LLONGOCURA_TITULO = 'Campo Cultural Llongocura';
export const LLONGOCURA_SUBTITULO = 'Mapa de escenarios y espacios del campo. Propuesta inicial.';

export const LLONGOCURA_IMG = {
  src: '/llongocura/vista-aerea.webp',
  alt: 'Vista aérea del Campo Cultural Llongocura: caminos de tierra rojiza, bosque de pinos y construcciones de madera.',
  ancho: 2000,
  alto: 1331,
};

export const LLONGOCURA_ESCENARIOS = [
  {
    id: 'anfiteatro',
    nombre: 'Escenario Anfiteatro',
    tipo: 'Escenario',
    x: 44,
    y: 33,
    descripcion: 'Graderío excavado en la ladera con forma de semicírculo y cerco de madera. Es la zona de escenario principal del campo.',
    porConfirmar: ['Aforo', 'Equipamiento técnico', 'Usos y programación'],
  },
  {
    id: 'el-nido',
    nombre: 'El Nido',
    tipo: 'Escenario',
    x: 40.5,
    y: 46,
    descripcion: 'Construcción de madera con techumbre oscura, junto al anfiteatro y rodeada de vegetación.',
    porConfirmar: ['Ubicación exacta en el mapa', 'Aforo', 'Usos y programación'],
  },
  {
    id: 'ruka',
    nombre: 'Ruka',
    tipo: 'Espacio',
    x: 64.5,
    y: 76,
    descripcion: 'Estructura circular de techo cónico en el sector sur-este del campo, conectada por senderos.',
    porConfirmar: ['Aforo', 'Usos y programación'],
  },
  {
    id: 'estacionamiento',
    nombre: 'Estacionamiento',
    tipo: 'Acceso',
    x: 25,
    y: 15,
    descripcion: 'Explanada despejada junto al camino de acceso, en el sector norponiente del campo.',
    porConfirmar: ['Ubicación exacta en el mapa', 'Capacidad de vehículos', 'Accesibilidad'],
  },
];

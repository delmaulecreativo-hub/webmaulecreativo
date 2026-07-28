// Central content + assets for Maule Creativo

export const IMG = {
  hero: 'https://images.hostinger.com/58a18d8e-a479-4611-8694-5b6c4b890a13.png',
  ingenieria: 'https://images.hostinger.com/5d4c62ed-613c-4f3c-a958-0166ebd0ef2d.png',
  laboratorio: 'https://images.hostinger.com/9f012442-7d54-45b5-8d89-3d093067026c.png',
  mataquito: 'https://images.hostinger.com/6977bfff-0d62-4b1b-87fb-b81ba73a18d1.png',
  constitucion: 'https://images.hostinger.com/b4385142-7715-4808-9c5a-ca35ac6ec1fa.png',
  pencahue: 'https://images.hostinger.com/68946beb-93ac-46dd-8cd8-75f139d804d7.png',
  licanten: 'https://images.hostinger.com/8441d1f5-b859-40f5-b60a-e32b035de76d.png',
  festival: 'https://images.hostinger.com/396865e4-edaf-405d-ac00-84c5f08cdef3.png',
  rokha: 'https://images.hostinger.com/b54613cf-872e-422d-9d9b-7c1b9ff4372d.png',
  turismo: 'https://images.hostinger.com/f69cc59c-bb9b-4f30-a825-c1dd0f1c8efe.png',
  residencias: 'https://images.hostinger.com/da5b3e99-76ce-4ce8-a7e0-2adfb6d2c8e3.png',
  colabora: 'https://images.hostinger.com/18ff7ebf-d9d1-452d-b21b-b374eaa8afa7.png',
};

// Secuencia cinematográfica del hero — montaje lento tipo documental
export const HERO_MONTAGE = [
  'https://images.hostinger.com/35e03220-9f50-4331-98e8-5aa23575648d.png',
  'https://images.hostinger.com/31125c6a-a525-4162-a2e1-a3eb3a394100.png',
  'https://images.hostinger.com/97fc9f52-da36-40af-be44-13638a2161e5.png',
  'https://images.hostinger.com/b08851ef-31ed-4ef3-9d03-ecdad2a551f2.png',
  'https://images.hostinger.com/52751bc1-f9d4-4b9e-9eb3-d042d9013461.png',
];

// Estaciones del recorrido narrativo (Home)
export const ESTACIONES = [
  { id: 'inicio', n: '00', titulo: 'Entrada' },
  { id: 'resonantes', n: '—', titulo: 'Territorios Resonantes' },
  { id: 'ingenieria', n: '01', titulo: '¿Qué es la Ingeniería Creativa?' },
  { id: 'laboratorio', n: '02', titulo: 'El Laboratorio' },
  { id: 'atlas', n: '03', titulo: 'Atlas Sensorial' },
  { id: 'experiencias', n: '04', titulo: 'Experiencias' },
  { id: 'colabora', n: '05', titulo: 'Colabora' },
];

// Puntos del Atlas Sensorial — coordenadas relativas (x%, y%) sobre el mapa estilizado
export const ATLAS = [
  {
    id: 'mataquito',
    nombre: 'Puente Mataquito',
    tipo: 'Río / Cruce',
    x: 38, y: 34,
    img: IMG.mataquito,
    historia:
      'El punto donde el territorio se cose a sí mismo. El Mataquito no separa: conecta valle y costa, memoria y futuro. Aquí registramos el paisaje sonoro del agua que nunca deja de moverse.',
    personas: 'Pescadores del estuario, guardavías, cantores populares.',
    comoLlegar: 'Ruta J-60, cruce del río Mataquito, 25 min desde Curicó.',
    experiencias: ['Caminata sonora al amanecer', 'Registro de campo con hidrófonos', 'Cartografía colectiva del río'],
    media: ['Video', 'Audio', '360°'],
  },
  {
    id: 'constitucion',
    nombre: 'Constitución',
    tipo: 'Costa / Roqueríos',
    x: 18, y: 58,
    img: IMG.constitucion,
    historia:
      'Donde el Maule entrega su agua al Pacífico. Roqueríos negros, industria y océano conviven en una identidad de frontera. Un laboratorio abierto de resiliencia territorial.',
    personas: 'Comunidades costeras, artesanos, memoria del terremoto de 2010.',
    comoLlegar: 'Ruta M-30, 90 min desde Talca por el camino del río.',
    experiencias: ['Recorrido geológico Piedra de la Iglesia', 'Taller de memoria costera', 'Captura de campo del oleaje'],
    media: ['Video', 'Audio', '360°'],
  },
  {
    id: 'pencahue',
    nombre: 'Pencahue',
    tipo: 'Valle / Secano',
    x: 30, y: 46,
    img: IMG.pencahue,
    historia:
      'El secano interior: colinas doradas, viñas de rulo y adobe. Un paisaje de paciencia donde el tiempo se mide en cosechas y la identidad se guarda en la tierra seca.',
    personas: 'Viñateros de secano, familias campesinas, tejedoras.',
    comoLlegar: 'Ruta K-60, 30 min al oeste de Talca.',
    experiencias: ['Ruta del vino de secano', 'Mapeo sensorial del paisaje agrícola', 'Residencia rural de artistas'],
    media: ['Video', '360°'],
  },
  {
    id: 'licanten',
    nombre: 'Licantén',
    tipo: 'Humedal / Estuario',
    x: 26, y: 30,
    img: IMG.licanten,
    historia:
      'El humedal donde las aves escriben rutas invisibles. Licantén es el pulso ecológico del Mataquito: un archivo vivo de biodiversidad y saber local.',
    personas: 'Observadores de aves, comunidad de Iloca, escuelas rurales.',
    comoLlegar: 'Ruta J-60 hacia la costa, 40 min desde el Puente Mataquito.',
    experiencias: ['Avistamiento sonoro de aves', 'Cartografía del estuario', 'Laboratorio escolar de territorio'],
    media: ['Audio', '360°'],
  },
  {
    id: 'festival',
    nombre: 'Festival Epopeyas del Maule',
    tipo: 'Evento / Encuentro',
    x: 52, y: 52,
    img: IMG.festival,
    historia:
      'El territorio hecho fiesta. Poesía proyectada, música y tecnología se encuentran para narrar en voz alta la epopeya del Maule. La culminación pública del laboratorio.',
    personas: 'Poetas, músicos, colectivos culturales, comunidad regional.',
    comoLlegar: 'Sedes itinerantes por la Región del Maule (ver programa anual).',
    experiencias: ['Recital escénico Verso de Rokha', 'Mapping territorial', 'Encuentro de creadores'],
    media: ['Video', 'Audio'],
  },
];

// Experiencias (aplicaciones del laboratorio)
export const EXPERIENCIAS = [
  {
    id: 'rokha',
    titulo: 'Verso de Rokha',
    kicker: 'Poesía + territorio',
    img: IMG.rokha,
    desc: 'Un montaje sensorial que devuelve al Maule la voz épica de Pablo de Rokha. Literatura convertida en experiencia espacial.',
  },
  {
    id: 'raices',
    titulo: 'Raíces del Maule',
    kicker: 'Grupo C · Arte + naturaleza',
    img: '/raices/hero.jpg',
    desc: 'Un proyecto interdisciplinario de Karolina Mättig y Carlos González que fusiona pintura, arte sonoro, escucha de plantas y artesanía en Gualleco, Curepto.',
  },
  {
    id: 'territorios-resonantes',
    titulo: 'Territorios Resonantes',
    kicker: 'Residencia Creativa · Arte + paisaje sonoro',
    img: '/territorios-resonantes/hero-instalacion.jpg',
    desc: 'Una instalación inmersiva de Karolina Mättig y Carlos González que combina pintura, escultura, plantas y tecnología sonora para revelar las voces invisibles del territorio.',
  },
  {
    id: 'festival',
    titulo: 'Festival Epopeyas del Maule',
    kicker: 'Encuentro público',
    img: IMG.festival,
    desc: 'El escaparate del laboratorio: poesía, música y tecnología narran en voz alta la identidad del territorio.',
  },
  {
    id: 'turismo',
    titulo: 'Turismo Creativo',
    kicker: 'Rutas vivas',
    img: IMG.turismo,
    desc: 'Recorridos que no se visitan, se habitan. Experiencias diseñadas para descubrir el territorio con los cinco sentidos.',
  },
  {
    id: 'residencias',
    titulo: 'Residencias',
    kicker: 'Creación situada',
    img: IMG.residencias,
    desc: 'Espacios de investigación y creación para artistas, científicos y tecnólogos que trabajan desde y con el territorio.',
  },
  {
    id: 'memorias-licanten',
    titulo: 'Memorias de Licantén',
    kicker: 'Libro de relatos · Patrimonio vivo',
    img: '/memorias-de-licanten/hero-mockup.jpg',
    desc: 'Diez adultos mayores de Licantén escriben, editan y firman sus propios relatos: un libro colectivo nacido de seis meses de taller de escritura creativa.',
  },
];

// Imágenes de la sección Ingeniería Creativa
export const IC_IMG = {
  valle: 'https://images.hostinger.com/915b4545-66e6-4312-904f-8ae58ee63690.png',
  oficio: 'https://images.hostinger.com/6ecfcfab-2a4e-46db-8979-81d0fab2f35f.png',
};

// Etapas de la metodología (flujo vertical animado)
export const METODOLOGIA = [
  {
    n: '01',
    verbo: 'Escuchar',
    icon: 'waves',
    texto:
      'Registramos el paisaje sonoro, observamos el territorio y escuchamos a las comunidades para comprender su identidad.',
  },
  {
    n: '02',
    verbo: 'Investigar',
    icon: 'map',
    texto:
      'Integramos patrimonio, memoria, cartografía, biodiversidad, historia y conocimiento local para comprender el territorio desde múltiples perspectivas.',
  },
  {
    n: '03',
    verbo: 'Co-crear',
    icon: 'network',
    texto:
      'Trabajamos junto a comunidades, artistas, investigadores, instituciones y emprendedores para construir soluciones colaborativas.',
  },
  {
    n: '04',
    verbo: 'Diseñar',
    icon: 'prototype',
    texto:
      'Convertimos la investigación en experiencias inmersivas mediante sonido, imagen, realidad virtual, inteligencia artificial y diseño interactivo.',
  },
  {
    n: '05',
    verbo: 'Activar',
    icon: 'constellation',
    texto:
      'Las experiencias se transforman en turismo creativo, museografía, educación, festivales, innovación territorial y memoria viva.',
  },
];

// Palabras que orbitan alrededor del concepto
export const ORBITA = [
  'Patrimonio', 'Paisaje Sonoro', 'Audio Inmersivo', 'Realidad Virtual',
  'Inteligencia Artificial', 'Cartografía', 'Turismo Creativo', 'Museografía',
  'Innovación Cultural', 'Participación Ciudadana', 'Memoria Viva', 'Territorio',
];

// Proyectos como aplicaciones de la misma metodología
export const PROYECTOS_IC = [
  'Atlas Sensorial',
  'Verso de Rokha',
  'Raíces del Maule',
  'Festival Epopeyas del Maule',
  'Talleres Resonantes',
  'Laboratorio XR',
  'Experiencias Inmersivas',
  'Turismo Creativo',
];

// ── Laboratorio de Ingeniería Creativa ──────────────────────────

// Composición visual de pantalla completa (montaje que se alterna)
export const LAB_MONTAGE = [
  { src: 'https://images.hostinger.com/c6500937-1844-45a2-999c-0fad5046260f.png', cap: 'Registro de paisaje sonoro · bosque nativo' },
  { src: 'https://images.hostinger.com/6a1adaac-fdf2-46b7-b86b-6625e3e8ae3c.png', cap: 'Vuelo de dron · río Mataquito' },
  { src: 'https://images.hostinger.com/b3b9e062-1901-4aee-949d-49743aca33e4.png', cap: 'Realidad virtual en terreno · viñas de secano' },
  { src: 'https://images.hostinger.com/9ebc3b7e-174d-4d81-a2c5-a9ccb4133d8f.png', cap: 'Captura de campo · estuario de Constitución' },
  { src: 'https://images.hostinger.com/340edccf-1237-4795-a7e9-f342e8e8553b.png', cap: 'Co-creación con comunidades y artesanos' },
];

// Línea de investigación — cinco áreas conectadas
export const LINEAS_INVESTIGACION = [
  { t: 'Paisaje Sonoro', d: 'Escuchamos y archivamos la identidad acústica de cada territorio: agua, viento, oficios y voces.' },
  { t: 'Patrimonio', d: 'Investigamos memoria, oralidad y saberes locales para comprender qué hace único a un lugar.' },
  { t: 'Tecnologías Inmersivas', d: 'Realidad virtual, audio 360° y video para habitar el territorio desde nuevas perspectivas.' },
  { t: 'Inteligencia Artificial', d: 'Analizamos, interpretamos y creamos nuevas narrativas a partir de los datos del paisaje.' },
  { t: 'Turismo Creativo', d: 'Transformamos la investigación en experiencias que activan económicamente los territorios.' },
];

// ¿Cómo investigamos? — metodología
export const LAB_METODO = [
  { n: '01', t: 'Escuchar', d: 'Registramos sonidos, relatos, memorias y paisajes para comprender la identidad del territorio.' },
  { n: '02', t: 'Explorar', d: 'Recorremos comunidades, rutas, oficios y patrimonio junto a quienes habitan el lugar.' },
  { n: '03', t: 'Experimentar', d: 'Combinamos audio inmersivo, video, realidad virtual, inteligencia artificial y narrativas digitales.' },
  { n: '04', t: 'Prototipar', d: 'Diseñamos experiencias inmersivas, instalaciones, plataformas y archivos sensoriales.' },
  { n: '05', t: 'Activar', d: 'Transformamos la investigación en proyectos de turismo creativo, educación, museografía e innovación territorial.' },
];

// Laboratorio móvil — equipamiento como herramientas de investigación
export const LAB_EQUIPO = [
  { t: 'Micrófonos Ambisonics', para: 'Registrar la identidad sonora de un territorio en 360°.' },
  { t: 'Grabadoras Zoom', para: 'Capturar voces, oficios y memorias en terreno.' },
  { t: 'Oculus Quest', para: 'Transformar el patrimonio en experiencias inmersivas.' },
  { t: 'GoPro', para: 'Documentar procesos y paisajes desde el punto de vista de quien los habita.' },
  { t: 'Cámaras 360°', para: 'Reconstruir lugares completos para habitarlos a distancia.' },
  { t: 'Drone', para: 'Comprender el paisaje desde nuevas perspectivas aéreas.' },
  { t: 'Producción audiovisual', para: 'Narrar el territorio con lenguaje cinematográfico.' },
  { t: 'Inteligencia Artificial', para: 'Analizar, interpretar y crear nuevas narrativas.' },
  { t: 'Cartografía digital', para: 'Mapear no solo geografía, sino emociones, sonidos e historias.' },
];

// El territorio es nuestro laboratorio — puntos del Maule
export const LAB_TERRITORIOS = [
  { id: 'licanten', nombre: 'Licantén', x: 26, y: 30, d: 'Mapeo del humedal y registro sonoro de aves del estuario.' },
  { id: 'constitucion', nombre: 'Constitución', x: 18, y: 60, d: 'Investigación costera, captura de oleaje y memoria del borde marino.' },
  { id: 'pencahue', nombre: 'Pencahue', x: 34, y: 47, d: 'Cartografía sensorial del secano y residencias rurales de creación.' },
  { id: 'curepto', nombre: 'Curepto', x: 24, y: 44, d: 'Registro de oralidad, oficios y arquitectura de adobe.' },
  { id: 'hualane', nombre: 'Hualañé', x: 40, y: 38, d: 'Prototipado de rutas de turismo creativo junto a la comunidad.' },
];

// ── ATLAS SENSORIAL DEL MAULE ────────────────────────────────────
// Categorías de organización del archivo sensorial
export const ATLAS_CATEGORIAS = [
  'Costa', 'Ríos', 'Bosques', 'Patrimonio', 'Gastronomía',
  'Comunidades', 'Paisajes Sonoros', 'Rutas Creativas', 'Festival',
];

// Registros Sensoriales — archivo vivo del territorio
// El primero (001) está completamente documentado; los siguientes crecen con el tiempo.
export const REGISTROS = [
  {
    id: '001',
    slug: 'puente-mataquito',
    codigo: 'Registro Sensorial 001',
    titulo: 'Puente Mataquito',
    comunas: ['Licantén', 'Curepto', 'Constitución'],
    comuna: 'Licantén',
    fecha: 'Julio 2026',
    fechaISO: '2026-07',
    hora: '06:42 — Amanecer',
    estado: 'Publicado',
    estacion: 'Invierno',
    paisaje: 'Río',
    sonido: 'Agua y aves',
    patrimonio: 'Memoria fluvial',
    categorias: ['Ríos', 'Paisajes Sonoros', 'Comunidades'],
    x: 38, y: 34,
    conexiones: ['002', '003'],
    coordenadas: '35°02′S 72°10′O',
    clima: 'Niebla matinal · 8°C · humedad 92%',
    keywords: ['agua', 'niebla', 'estuario', 'aves', 'cruce', 'memoria', 'amanecer'],
    hero: IMG.mataquito,
    img: IMG.mataquito,
    tecnologias: ['Micrófonos Ambisonics', 'Grabadora Zoom F6', 'Dron', 'Cámara 360°', 'Producción audiovisual'],
    equipo: ['Investigación sonora', 'Comunidad de pescadores del estuario', 'Cartografía sensorial'],
    resumen:
      'El punto donde el territorio se cose a sí mismo. El Mataquito no separa: conecta valle y costa, memoria y futuro.',
    atmosfera: [
      'Antes de ver el río, se le escucha.',
      'Una corriente que no cesa, aves que trazan rutas invisibles, la niebla que borra los límites entre el agua y el aire.',
      'El Mataquito no es un lugar que se visita. Es una atmósfera que se habita.',
    ],
    historia:
      'El Puente Mataquito une comunidades separadas por el agua y unidas por la memoria. Aquí registramos el paisaje sonoro del estuario al amanecer, cuando la niebla y las aves componen una sinfonía que solo existe en ese instante.',
    galeria: [IMG.mataquito, IMG.licanten, IMG.constitucion, IMG.pencahue],
    flora: 'Sauces ribereños, totora, boldo y espino del secano costero.',
    fauna: 'Garzas, cormoranes, martín pescador y truchas del estuario.',
    personas: 'Pescadores del estuario, guardavías y cantores populares que conservan la oralidad del río.',
  },
  {
    id: '002',
    slug: 'roquerios-constitucion',
    codigo: 'Registro Sensorial 002',
    titulo: 'Roqueríos de Constitución',
    comunas: ['Constitución'],
    comuna: 'Constitución',
    fecha: 'Próximamente',
    fechaISO: '2026-09',
    hora: '—',
    estado: 'En preparación',
    estacion: 'Primavera',
    paisaje: 'Costa',
    sonido: 'Oleaje',
    patrimonio: 'Borde marino',
    categorias: ['Costa', 'Paisajes Sonoros'],
    x: 18, y: 58,
    conexiones: ['001'],
    hero: IMG.constitucion,
    img: IMG.constitucion,
    resumen: 'Donde el Maule entrega su agua al Pacífico entre roqueríos negros y memoria de frontera.',
  },
  {
    id: '003',
    slug: 'humedal-licanten',
    codigo: 'Registro Sensorial 003',
    titulo: 'Humedal de Licantén',
    comunas: ['Licantén'],
    comuna: 'Licantén',
    fecha: 'Próximamente',
    fechaISO: '2026-11',
    hora: '—',
    estado: 'En preparación',
    estacion: 'Verano',
    paisaje: 'Bosque',
    sonido: 'Aves',
    patrimonio: 'Biodiversidad',
    categorias: ['Bosques', 'Comunidades'],
    x: 26, y: 30,
    conexiones: ['001'],
    hero: IMG.licanten,
    img: IMG.licanten,
    resumen: 'El humedal donde las aves escriben rutas invisibles: el pulso ecológico del Mataquito.',
  },
  {
    id: '004',
    slug: 'secano-pencahue',
    codigo: 'Registro Sensorial 004',
    titulo: 'Secano de Pencahue',
    comunas: ['Pencahue'],
    comuna: 'Pencahue',
    fecha: 'Próximamente',
    fechaISO: '2027-01',
    hora: '—',
    estado: 'En preparación',
    estacion: 'Otoño',
    paisaje: 'Patrimonio',
    sonido: 'Viento',
    patrimonio: 'Adobe y viñas de rulo',
    categorias: ['Patrimonio', 'Gastronomía', 'Rutas Creativas'],
    x: 30, y: 46,
    conexiones: ['001'],
    hero: IMG.pencahue,
    img: IMG.pencahue,
    resumen: 'Colinas doradas, viñas de rulo y adobe: un paisaje de paciencia medido en cosechas.',
  },
  {
    id: '005',
    slug: 'festival-epopeyas',
    codigo: 'Registro Sensorial 005',
    titulo: 'Epopeyas del Maule',
    comunas: ['Región del Maule'],
    comuna: 'Itinerante',
    fecha: 'Próximamente',
    fechaISO: '2027-03',
    hora: '—',
    estado: 'En preparación',
    estacion: 'Verano',
    paisaje: 'Encuentro',
    sonido: 'Voz y música',
    patrimonio: 'Poesía viva',
    categorias: ['Festival', 'Rutas Creativas', 'Comunidades'],
    x: 52, y: 52,
    conexiones: ['001', '004'],
    hero: IMG.festival,
    img: IMG.festival,
    resumen: 'El territorio hecho fiesta: poesía, música y tecnología narran la epopeya del Maule.',
  },
];

// Filtros disponibles para el índice
export const ATLAS_FILTROS = {
  comuna: ['Licantén', 'Curepto', 'Constitución', 'Pencahue', 'Itinerante'],
  paisaje: ['Río', 'Costa', 'Bosque', 'Patrimonio', 'Encuentro'],
  estacion: ['Verano', 'Otoño', 'Invierno', 'Primavera'],
  sonido: ['Agua y aves', 'Oleaje', 'Aves', 'Viento', 'Voz y música'],
  patrimonio: ['Memoria fluvial', 'Borde marino', 'Biodiversidad', 'Adobe y viñas de rulo', 'Poesía viva'],
};

// Cómo construimos el Atlas
export const ATLAS_CONSTRUCCION = [
  { n: '01', t: 'Escuchamos', d: 'Registramos el paisaje sonoro y las voces de quienes habitan el territorio.' },
  { n: '02', t: 'Registramos', d: 'Documentamos con audio inmersivo, video, dron y cámaras 360°.' },
  { n: '03', t: 'Investigamos', d: 'Cruzamos patrimonio, memoria, flora, fauna y cartografía.' },
  { n: '04', t: 'Co-creamos', d: 'Trabajamos junto a las comunidades para interpretar su identidad.' },
  { n: '05', t: 'Compartimos', d: 'Publicamos cada registro como un archivo sensorial vivo y abierto.' },
];

// Menú discreto basado en la metodología
export const MENU = [
  { verbo: 'Escuchar', desc: 'Atlas Sensorial', to: '/atlas' },
  { verbo: 'Investigar', desc: 'El Laboratorio', to: '/laboratorio' },
  { verbo: 'Crear', desc: 'Verso de Rokha · Festival · Talleres', to: '/experiencias' },
  { verbo: 'Bitácora', desc: 'Cronología de investigación', to: '/bitacora' },
  { verbo: 'Colaborar', desc: 'Construyamos un territorio juntos', to: '/colaboraciones' },
];

// ── BITÁCORA — cronología de investigación ──────────────────────
export const BITACORA_IMG = {
  hero: 'https://images.hostinger.com/584f8751-65a9-48a6-9b05-e5440dc45bb7.png',
};

// Filtros del laboratorio vivo
export const BITACORA_FILTROS = [
  'Investigación', 'Atlas Sensorial', 'Verso de Rokha', 'Festival',
  'Turismo Creativo', 'Laboratorio', 'XR', 'Paisaje Sonoro', 'Residencias', 'Educación',
];

// Entradas de la bitácora — procesos, no noticias
export const BITACORA = [
  {
    id: 'b001',
    titulo: 'Registro Sensorial 001',
    lugar: 'Puente Mataquito',
    fecha: 'Julio 2026',
    categoria: 'Atlas Sensorial',
    tags: ['Atlas Sensorial', 'Paisaje Sonoro', 'Investigación'],
    img: IMG.mataquito,
    resumen: 'Primer registro del archivo sensorial vivo: el paisaje sonoro del estuario al amanecer, entre niebla y aves.',
    to: '/atlas/registro/puente-mataquito',
  },
  {
    id: 'b002',
    titulo: 'Exploración Sonora',
    lugar: 'Constitución',
    fecha: 'Agosto 2026',
    categoria: 'Paisaje Sonoro',
    tags: ['Paisaje Sonoro', 'Investigación'],
    img: IMG.constitucion,
    resumen: 'Paisaje costero: capturamos el oleaje y la memoria del borde marino donde el Maule entrega su agua al Pacífico.',
    to: '/atlas',
  },
  {
    id: 'b003',
    titulo: 'Residencia Creativa',
    lugar: 'Pencahue',
    fecha: 'Septiembre 2026',
    categoria: 'Residencias',
    tags: ['Residencias', 'Investigación', 'Turismo Creativo'],
    img: IMG.pencahue,
    resumen: 'Mapeo participativo del secano junto a viñateros y familias campesinas: cartografía sensorial del paisaje agrícola.',
    to: '/experiencias',
  },
  {
    id: 'b004',
    titulo: 'Prototipo XR',
    lugar: 'Verso de Rokha',
    fecha: 'Octubre 2026',
    categoria: 'XR',
    tags: ['XR', 'Verso de Rokha', 'Laboratorio'],
    img: IMG.rokha,
    resumen: 'Primer prototipo de experiencia inmersiva: la voz épica de Pablo de Rokha convertida en espacio habitable.',
    to: '/verso-de-rokha',
  },
  {
    id: 'b005',
    titulo: 'Festival',
    lugar: 'Epopeyas del Maule',
    fecha: 'Noviembre 2026',
    categoria: 'Festival',
    tags: ['Festival', 'Verso de Rokha'],
    img: IMG.festival,
    resumen: 'El laboratorio se hace público: poesía proyectada, música y tecnología narran en voz alta la epopeya del territorio.',
    to: '/experiencias',
  },
  {
    id: 'b006',
    titulo: 'Investigación',
    lugar: 'Paisajes Sonoros',
    fecha: 'Diciembre 2026',
    categoria: 'Laboratorio',
    tags: ['Laboratorio', 'Paisaje Sonoro', 'Investigación', 'Educación'],
    img: IMG.laboratorio,
    resumen: 'Sistematización del archivo acústico regional y desarrollo de metodologías abiertas para escuchar los territorios.',
    to: '/laboratorio',
  },
];

// ── COLABORACIONES ──────────────────────────────────────────────
export const COLAB_IMG = {
  mundo: 'https://images.hostinger.com/89ff0ecd-9122-4640-8545-ec858ef7aa18.png',
  cierre: 'https://images.hostinger.com/97e8fbc1-4c12-4d66-8870-d13a934c70cd.png',
};

// Cuadrícula de organizaciones — cada bloque abre ejemplos de colaboración
export const COLAB_ORGS = [
  { t: 'Museos', ej: 'Exhibiciones inmersivas, archivos sensoriales y museografía territorial.' },
  { t: 'Festivales', ej: 'Mapping, escenografías sonoras y narrativas audiovisuales del territorio.' },
  { t: 'Universidades', ej: 'Investigación aplicada, publicaciones y residencias académicas.' },
  { t: 'Centros de Investigación', ej: 'Metodologías de registro, datos del paisaje e inteligencia artificial.' },
  { t: 'Municipios', ej: 'Identidad local, turismo creativo y activación patrimonial.' },
  { t: 'Empresas Tecnológicas', ej: 'Prototipos XR, plataformas interactivas y experiencias de marca.' },
  { t: 'Viñas', ej: 'Rutas del vino de secano, relatos de origen y experiencias sensoriales.' },
  { t: 'Organizaciones Culturales', ej: 'Co-creación de programas, archivos vivos y memoria comunitaria.' },
  { t: 'Parques', ej: 'Interpretación del paisaje, senderos sonoros y cartografía sensorial.' },
  { t: 'Comunidades', ej: 'Laboratorios ciudadanos y procesos participativos de identidad.' },
  { t: 'SLEP y establecimientos educacionales', ej: 'Educación patrimonial, aprendizaje situado y talleres de territorio.' },
];

// ¿Qué podemos crear juntos? — tarjetas grandes
export const COLAB_CREAR = [
  { t: 'Archivo Sensorial', d: 'Documentación viva del paisaje sonoro, visual y patrimonial de un territorio.' },
  { t: 'Experiencias XR', d: 'Realidad virtual y aumentada que permite habitar lugares y memorias.' },
  { t: 'Turismo Creativo', d: 'Rutas que no se visitan, se habitan, activando la economía local.' },
  { t: 'Museografía', d: 'Guiones y montajes inmersivos para contar la identidad de un lugar.' },
  { t: 'Instalaciones Inmersivas', d: 'Espacios envolventes que combinan sonido, imagen y tecnología.' },
  { t: 'Paisaje Sonoro', d: 'Registro y composición de la identidad acústica del territorio.' },
  { t: 'Mapas Interactivos', d: 'Cartografías de emociones, sonidos e historias, no solo geografía.' },
  { t: 'Educación Patrimonial', d: 'Programas y materiales para aprender desde y con el territorio.' },
  { t: 'Innovación Territorial', d: 'Estrategias que transforman patrimonio en desarrollo sostenible.' },
  { t: 'Residencias Artísticas', d: 'Espacios de creación situada para artistas, científicos y tecnólogos.' },
  { t: 'Laboratorios Ciudadanos', d: 'Procesos abiertos de co-creación con las comunidades.' },
];

// Nuestro proceso de colaboración
export const COLAB_PROCESO = [
  { n: '01', t: 'Escuchar', d: 'Conocer el territorio y sus actores.' },
  { n: '02', t: 'Investigar', d: 'Comprender el patrimonio y los desafíos.' },
  { n: '03', t: 'Co-crear', d: 'Diseñar soluciones junto a la comunidad.' },
  { n: '04', t: 'Prototipar', d: 'Experimentar con nuevas tecnologías.' },
  { n: '05', t: 'Activar', d: 'Implementar experiencias que permanezcan en el territorio.' },
];

// ── MUSEO DIGITAL VERSO DE ROKHA ─────────────────────────────────
// Homenaje a Pablo de Rokha + archivo del proyecto musical/poético
// y del concierto en el Anfiteatro Pasarela de Licantén.
// NOTA: imágenes son placeholders del banco existente — reemplazar
// por el afiche real y las fotografías del concierto cuando estén
// disponibles como archivos del proyecto.
export const ROKHA_IMG = {
  hero: IMG.rokha,
  poeta: IMG.licanten,
  banda: LAB_MONTAGE[4].src,
  afiche: IMG.festival,
};

export const ROKHA_GALERIA = [
  IMG.rokha,
  LAB_MONTAGE[0].src,
  LAB_MONTAGE[2].src,
  IMG.festival,
  IMG.licanten,
  LAB_MONTAGE[4].src,
];

export const ROKHA_POETA = {
  nombre: 'Pablo de Rokha',
  nacimiento: 'Licantén, 17 de octubre de 1894',
  muerte: 'Santiago, 10 de septiembre de 1968',
  premio: 'Premio Nacional de Literatura, 1965',
  bio:
    'Nacido Carlos Ignacio Díaz Loyola en Licantén, Pablo de Rokha es una de las voces más telúricas y desmesuradas de la poesía chilena. Su obra —vasta, áspera y visceral— canta al pueblo, al vino, al pan y a la tierra del Maule con un lenguaje que rompe las formas establecidas. Frente a la lírica intimista de su época, De Rokha levantó una poesía-epopeya: colectiva, americana, en carne viva.',
  legado:
    'Casi setenta años después de su muerte, su territorio natal le devuelve la voz: "Verso de Rokha" nace para que la epopeya del poeta vuelva a sonar en el mismo paisaje que la vio nacer.',
  // NOTA: reemplazar por un verso real y correctamente citado (con fuente
  // y título de la obra) cuando se defina cuál pasaje se usará en el museo.
  cita: {
    pendiente: true,
    nota: 'Espacio reservado para una cita textual de la obra de Pablo de Rokha — pendiente de selección y atribución verificada (obra, año).',
  },
};

export const ROKHA_BANDA = {
  titulo: 'Verso de Rokha',
  kicker: 'Proyecto musical · Homenaje vivo',
  desc:
    'Un colectivo de músicos del Maule que convierte la palabra de Pablo de Rokha en experiencia sonora en vivo: voz, teclado, guitarra, bajo y batería trenzados con la épica del poeta. No es una lectura ni un tributo solemne: es la poesía vuelta a poner en movimiento, en el mismo territorio que la originó.',
  formato: 'Banda en vivo — voz, teclados, guitarra, bajo y batería',
  origen: 'Región del Maule',
};

export const ROKHA_CONCIERTO = {
  titulo: 'Verso de Rokha en Concierto',
  lugar: 'Anfiteatro Pasarela de Licantén',
  fecha: 'Sábado 10 de octubre',
  fechaISO: '2026-10-10',
  hora: '19:00 hrs',
  resumen:
    'El primer registro en vivo del proyecto: una noche al aire libre en Licantén, tierra natal del poeta, donde música, palabra y comunidad se encontraron sobre el mismo escenario.',
};

// ── TERRITORIOS RESONANTES — sección manifiesto (Home) ───────────
// NOTA: imágenes reutilizadas del banco existente por cercanía temática.
// Reemplazar por fotografía dedicada (registro sonoro, escultura, sensores
// en vegetación, instalación inmersiva) subiéndola en Hostinger Horizons.
export const RESONANTES_IMG = {
  paisaje: IMG.pencahue,
  sonido: LAB_MONTAGE[0].src,
  escultura: IMG.residencias,
  sensores: LAB_MONTAGE[2].src,
  instalacion: IMG.festival,
};

// Línea de tiempo horizontal: cómo investigamos las resonancias del territorio
export const RESONANTES_ETAPAS = [
  {
    verbo: 'Escuchar',
    icon: 'escuchar',
    texto: 'Registramos el paisaje sonoro y las voces que habitan cada territorio.',
  },
  {
    verbo: 'Investigar',
    icon: 'investigar',
    texto: 'Cruzamos memoria, ecología, ciencia y datos para comprender sus capas invisibles.',
  },
  {
    verbo: 'Interpretar',
    icon: 'interpretar',
    texto: 'Traducimos esas resonancias en lenguajes sensibles: sonido, imagen y narrativa.',
  },
  {
    verbo: 'Compartir',
    icon: 'compartir',
    texto: 'Devolvemos al territorio y a sus comunidades experiencias inmersivas y vivas.',
  },
];

// ── RAÍCES DEL MAULE — proyecto de creación (Grupo C) ────────────
// Karolina Mättig (artista visual) + Carlos González (artista sonoro e
// ingeniero). Fotografías y textos extraídos del dossier artístico real
// del proyecto; imágenes servidas localmente desde /public/raices.
export const RAICES_IMG = {
  hero: '/raices/hero.jpg',
  sonido: '/raices/proceso-sonido-carlos.jpg',
  plantasVr: '/raices/instalacion-plantas-vr.jpg',
  plantaSensor: '/raices/planta-sensor.jpg',
  publico: '/raices/publico-escucha.jpg',
  contacto: '/raices/contacto.jpg',
  expo: ['/raices/expo-1.jpg', '/raices/expo-2.jpg', '/raices/expo-3.jpg'],
};

export const RAICES_PROYECTO = {
  grupo: 'Grupo C',
  titulo: 'Raíces del Maule',
  intro:
    'Un proyecto artístico interdisciplinario que fusiona las artes visuales, el arte sonoro, la escucha de plantas y la artesanía decorativa. A través de la colaboración entre la artista visual Karolina Mättig y el artista sonoro e ingeniero Carlos González, se busca crear una experiencia sensorial única que invita a la reflexión sobre la conexión entre el ser humano, la naturaleza y el arte.',
  caracteristicas: [
    {
      t: 'Interdisciplinariedad',
      d: 'La combinación de artes visuales, arte sonoro, escucha de plantas y artesanía decorativa genera una obra rica y compleja que trasciende los límites de cada disciplina.',
    },
    {
      t: 'Experiencia sensorial',
      d: 'Las obras buscan estimular los sentidos del público a través de la utilización de elementos visuales, sonoros y táctiles.',
    },
    {
      t: 'Conexión con la naturaleza',
      d: 'La naturaleza es una fuente de inspiración constante para los artistas, quienes exploran la sostenibilidad, la biodiversidad y la conexión del ser humano con su entorno.',
    },
  ],
};

export const RAICES_ARTISTAS = {
  karolina: {
    nombre: 'Karolina Mättig',
    rol: 'Artista visual',
    statement:
      'A través de mis pinturas, deseo que los espectadores se sientan impresionados por la belleza de la naturaleza y la profundidad de su mensaje. Que cada obra invite a una reflexión sobre lo grandioso del mundo natural.',
  },
  carlos: {
    nombre: 'Carlos González',
    rol: 'Artista sonoro e ingeniero',
  },
};

// Obras visuales de Karolina Mättig — todas acrílico sobre lienzo, 2024.
// `circular: true` marca las piezas pintadas sobre bastidor circular.
export const RAICES_OBRAS = [
  { titulo: 'Ruta de la Memoria', medida: '100 cm diámetro', img: '/raices/obra-ruta-de-la-memoria.jpg', circular: true },
  { titulo: 'Ojo de Gualleco', medida: '70 x 100 cm', img: '/raices/obra-ojo-de-gualleco.jpg' },
  { titulo: 'Las vueltas dejan', medida: '90 x 110 cm', img: '/raices/obra-las-vueltas-dejan.jpg' },
  { titulo: 'Rayitos de luz', medida: '100 cm diámetro', img: '/raices/obra-rayitos-de-luz.jpg', circular: true },
  { titulo: 'Copihues en Tabunco', medida: '90 cm diámetro', img: '/raices/obra-copihues-en-tabunco.jpg', circular: true },
  { titulo: 'Bosque de colores', medida: '150 x 70 cm', img: '/raices/obra-bosque-de-colores.jpg' },
  { titulo: 'Neblina', medida: '120 x 100 cm', img: '/raices/obra-neblina.jpg' },
  { titulo: 'Raíces de Tabunco', medida: '120 x 100 cm', img: '/raices/obra-raices-de-tabunco.jpg' },
  { titulo: 'otra perspectiva', medida: '110 x 90 cm', img: '/raices/obra-otra-perspectiva.jpg' },
];

export const RAICES_SONORO = {
  titulo: 'Raíces Naturales de Curepto',
  desc:
    'Una exploración auditiva del entorno natural del Maule, creada por el diseñador sonoro Carlos González. Utilizando grabaciones de campo de ríos, viento, aves y otros sonidos de la naturaleza, construye un ambiente sonoro envolvente que transporta al espectador a los paisajes que inspiran la obra visual de Karolina Mättig. La instalación cuenta con parlantes estratégicamente ubicados para generar un efecto tridimensional del sonido.',
  pieza: {
    id: 'raices-naturales-de-curepto',
    titulo: 'Raíces Naturales de Curepto',
    audioUrl: '/raices/audio/raices-naturales-de-curepto.mp3',
    canales: 2,
    duracion: 208,
  },
};

export const RAICES_PLANTAS = {
  desc:
    'Un sector especial ofrece la posibilidad de escuchar las vibraciones de las plantas a través de un sistema de audio, reforzando la conexión orgánica entre la naturaleza y el arte. Tecnología que traduce las señales eléctricas de las plantas en melodías: la "música de las plantas" sorprende a los visitantes y subraya la idea de que la naturaleza tiene su propio lenguaje, que a menudo pasamos por alto.',
};

export const RAICES_ARTESANIA = {
  desc:
    'Piezas tejidas con ramas de árbol —algunas flexibles para trenzar, otras rígidas para dar estructura— combinadas con hojas, flores secas y otros elementos naturales. Una artesanía sostenible que promueve el uso responsable de los recursos naturales y fomenta la economía local con productos únicos hechos a mano.',
  galeria: ['/raices/artesania-1.jpg', '/raices/artesania-2.jpg', '/raices/artesania-3.jpg', '/raices/artesania-4.jpg'],
};

export const RAICES_VIDEO = {
  youtubeId: 'npGFpVLgS8A',
  titulo: 'Video de muestra',
  desc: 'Un recorrido audiovisual por la exposición y su proceso creativo.',
};

export const RAICES_CONTACTO = {
  lugar: 'Gualleco, Curepto, Maule',
  email: 'mattigartistavisual@gmail.com',
  web: 'www.maulecreativo.cl',
  telefono: '+56 9 6664 8817',
};

// ── TERRITORIOS RESONANTES — Residencia Creativa (proyecto GAM) ──
// Karolina Mättig (artista visual) + Carlos González (artista sonoro,
// Director de Maule Creativo). Contenido y fotografías extraídos del
// dossier real de postulación a GAM; imágenes servidas localmente
// desde /public/territorios-resonantes.
export const TR_IMG = {
  hero: '/territorios-resonantes/hero-instalacion.jpg',
  cover: '/territorios-resonantes/cover-pintura.jpg',
  emblema: '/territorios-resonantes/emblema-territorios-resonantes.png',
  procesoPintura: '/territorios-resonantes/proceso-pintura.jpg',
  esculturaRaices: '/territorios-resonantes/escultura-raices.jpg',
  paisajeRio: '/territorios-resonantes/paisaje-rio.jpg',
  bosqueLuz: '/territorios-resonantes/bosque-luz.jpg',
  instalacionInterior: '/territorios-resonantes/instalacion-interior.jpg',
  bosqueDorado: '/territorios-resonantes/bosque-dorado.jpg',
  arteOjoCascada: '/territorios-resonantes/arte-ojo-cascada.jpg',
  arteBosqueOndas: '/territorios-resonantes/arte-bosque-ondas.jpg',
  estacionCartografia: '/territorios-resonantes/estacion-cartografia.jpg',
  tagline: '/territorios-resonantes/cada-obra-tiene-una-voz.jpg',
  publicoEscucha1: '/territorios-resonantes/publico-escucha-1.jpg',
  estacionEscuchaParlante: '/territorios-resonantes/estacion-escucha-parlante.jpg',
  plantaDetalle: '/territorios-resonantes/planta-detalle.jpg',
  publicoEncuentro: '/territorios-resonantes/publico-encuentro.jpg',
  publicoEscucha2: '/territorios-resonantes/publico-escucha-2.jpg',
  obras: [
    '/territorios-resonantes/obra-tr-01.jpg',
    '/territorios-resonantes/obra-tr-02.jpg',
    '/territorios-resonantes/obra-tr-03.jpg',
    '/territorios-resonantes/obra-tr-04.jpg',
    '/territorios-resonantes/obra-tr-05.jpg',
  ],
};

export const TR_PROYECTO = {
  kicker: 'Residencia Creativa · Arte, Paisaje Sonoro y Memoria Territorial',
  titulo: 'Territorios Resonantes',
  tagline: 'Pintura · Escultura · Paisaje sonoro · Participación',
  pregunta: '¿Qué permanece cuando observamos y escuchamos un territorio?',
};

export const TR_DEFINICION = {
  pregunta: '¿Qué es Territorios Resonantes?',
  texto: 'Es una instalación inmersiva que combina pintura, escultura, plantas y tecnología sonora para revelar las voces invisibles del territorio.',
  lineas: ['Cada obra es un punto de escucha.', 'Cada sonido, una historia.', 'Cada visitante, parte del territorio.'],
  chips: ['Escucha activa', 'Sonido vivo', 'Plantas que hablan', 'Experiencia colectiva', 'Arte y ciencia'],
};

export const TR_AUDIO = {
  pieza: {
    id: 'territorios-resonantes-echoes-mataquito',
    titulo: 'Ecos del Mataquito · Estación de Escucha',
    audioUrl: '/territorios-resonantes/audio/estacion-de-escucha.mp3',
    canales: 2,
    duracion: 60,
  },
};

export const TR_MANIFIESTO = [
  'No comenzamos explicando el proyecto. Comenzamos invitando a vivirlo.',
  'Un territorio no está compuesto únicamente por aquello que vemos. También está formado por colores, texturas, sonidos, memorias, silencios y las relaciones que construimos con el paisaje que habitamos.',
  'Territorios Resonantes propone una experiencia donde arte visual, paisaje sonoro e instalación contemporánea se encuentran para activar nuevas formas de escuchar, observar y construir colectivamente la memoria del territorio. No se trata de representar el paisaje desde afuera, sino de sumergirse en él, de permitir que el territorio hable a través de los sentidos y de la memoria colectiva de quienes lo habitan.',
  'Este proyecto nace de la convicción de que el arte puede ser un puente entre el ser humano y el lugar que habita. Que la escucha profunda es un acto político y poético a la vez. Que los territorios tienen historia, tienen voz, y merecen ser escuchados con la misma reverencia con que se contempla una obra maestra.',
];

export const TR_JUSTIFICACION = {
  intro:
    'Territorios Resonantes surge de la convergencia entre dos trayectorias artísticas que comparten una pregunta esencial: ¿cómo se construye la memoria de un lugar? Karolina Mättig ha desarrollado durante años una investigación visual centrada en el paisaje como organismo vivo, explorando la relación entre pintura, materia y territorio. Su trabajo no representa la naturaleza: dialoga con ella. Carlos González, por su parte, ha construido una investigación sonora que aborda el paisaje como partitura, registrando y transformando los sonidos del entorno en experiencias inmersivas.',
  columnas: [
    {
      t: 'El origen del proyecto',
      d: 'Nace de la confluencia entre la investigación visual de Karolina sobre el paisaje como superficie viva y la investigación sonora de Carlos sobre los ecosistemas acústicos del Maule. Ambos comparten la convicción de que el territorio es un organismo que respira, que tiene memoria y que se expresa a través de múltiples lenguajes sensoriales.',
    },
    {
      t: 'Naturaleza, memoria y escucha profunda',
      d: 'El patrimonio natural del Maule —sus bosques, ríos, humedales y ecosistemas— no es solo escenario: es protagonista. La escucha profunda, concepto desarrollado por R. Murray Schafer, se convierte en metodología central del proyecto.',
    },
  ],
};

export const TR_OBJETIVOS = {
  general:
    'Crear una instalación inmersiva que integre arte visual, paisaje sonoro y mediación cultural para generar nuevas formas de relación entre las personas y el territorio, activando procesos de escucha, reflexión y memoria colectiva.',
  especificos: [
    { t: 'Integrar lenguajes', d: 'Fusionar pintura, escultura e inmersión sonora en una experiencia artística coherente que invite al visitante a habitar el espacio con todos sus sentidos.' },
    { t: 'Activar la escucha', d: 'Generar experiencias de escucha profunda que revelen las dimensiones invisibles del territorio, desde los sonidos del bosque hasta la bioelectricidad vegetal.' },
    { t: 'Diálogo patrimonial', d: 'Promover el encuentro entre arte contemporáneo y patrimonio natural y cultural, estableciendo puentes entre la creación actual y la memoria histórica del lugar.' },
    { t: 'Encuentro comunitario', d: 'Generar espacios de encuentro entre artistas y públicos diversos, fomentando el diálogo intergeneracional y la construcción de comunidad a través del arte.' },
    { t: 'Memoria colectiva', d: 'Favorecer procesos de participación y construcción de memoria territorial a través del Archivo Vivo, donde cada visitante aporta su propia huella al proyecto.' },
  ],
};

export const TR_EXPERIENCIA = {
  intro:
    'No hablamos de una exposición. Hablamos de una experiencia que se vive con el cuerpo, con los sentidos y con la memoria. El recorrido está diseñado para guiar al visitante desde la contemplación inicial hasta la participación activa.',
  recorrido:
    'El visitante no es un espectador pasivo. Al cruzar el umbral de la instalación, comienza un proceso de transformación perceptiva: primero observa las obras visuales que dialogan con el espacio, luego activa una escucha profunda a través de los paisajes sonoros que emergen desde diferentes puntos del recorrido. A medida que avanza, recorre el territorio construido, reflexiona sobre su propia relación con el lugar, dialoga con otros visitantes y con los artistas presentes, participa aportando su memoria al Archivo Vivo y, finalmente, habita el territorio llevando consigo una nueva forma de percibir el paisaje.',
};

export const TR_PUBLICO = [
  { t: 'Familias y público general', d: 'Una experiencia sensorial accesible que despierta la curiosidad y conecta a visitantes de todas las edades con el territorio a través de los sentidos.' },
  { t: 'Estudiantes y comunidad educativa', d: 'Un espacio de aprendizaje experiencial donde el arte, la ecología y la memoria se encuentran, conectando el currículo educativo con el territorio que habitan.' },
  { t: 'Artistas e investigadores', d: 'Un laboratorio de ideas donde convergen artes visuales, arte sonoro y mediación cultural: un referente metodológico para sus propias prácticas.' },
  { t: 'Personas mayores y turistas culturales', d: 'Un espacio de reconocimiento y memoria donde los relatos personales se encuentran con la historia del territorio.' },
];

export const TR_MEDIACION = [
  { n: '01', t: 'Contemplar', d: 'La obra se experimenta libremente. Sin instrucciones. Sin intervención. El visitante entra en el espacio y se deja llevar por lo que encuentra.' },
  { n: '02', t: 'Escuchar', d: 'El visitante descubre las estaciones de experiencia: sonido inmersivo, bioelectricidad vegetal, paisajes sonoros, códigos QR y archivos audiovisuales.' },
  { n: '03', t: 'Dialogar', d: 'Conversaciones, recorridos guiados y encuentro con los artistas. Un espacio de preguntas y reflexiones compartidas.' },
  { n: '04', t: 'Crear', d: 'Solo al final aparece la participación activa. El visitante aporta su memoria al Archivo Vivo del Territorio, dejando su huella en una obra colectiva.' },
];

export const TR_ESTACIONES = [
  { t: 'Estación de Escucha', d: 'Paisaje sonoro inmersivo del territorio. Bioelectricidad vegetal en tiempo real. Sonidos de bosques, ríos y especies del Maule.' },
  { t: 'Estación Archivo Vivo', d: 'Relatos, dibujos, fotografías y memorias del territorio. Un espacio donde los visitantes depositan sus recuerdos.' },
  { t: 'Estación Cartografía Sensible', d: 'Mapas afectivos y cartografías personales del territorio, revelando la relación subjetiva con el lugar.' },
  { t: 'Estación Materia Viva', d: 'Elementos naturales como materia prima creativa: una exploración táctil y sensorial de los materiales del territorio.' },
  { t: 'Estación Memoria Sonora', d: 'Registro de voces y relatos orales. Los visitantes graban sus memorias sonoras, contribuyendo a un archivo colectivo.' },
];

export const TR_ARCHIVO_VIVO =
  'El Archivo Vivo del Territorio es el gran diferenciador del proyecto. Después de vivir la instalación, quienes lo deseen podrán aportar una memoria personal —palabras, dibujos, relatos, sonidos, fotografías, cartografías afectivas— convirtiéndose en co-autores de una obra colectiva que crece y evoluciona con cada itinerancia.';

export const TR_REDES = [
  'Maule Creativo', 'Festival Creativo Pablo de Rokha', 'Verso de Rokha',
  'Corredor Creativo Maule Costa', 'Municipalidades de la región del Maule',
  'Museos y centros culturales regionales', 'Universidades y redes de patrimonio',
];

export const TR_ARTISTAS = {
  karolina: {
    nombre: 'Karolina Mättig',
    rol: 'Artista Visual',
    bio: 'Artista visual con trayectoria internacional en pintura, instalación y arte de paisaje. Su investigación explora la relación entre materia, memoria y territorio, con exposiciones en Chile y Brasil. Ha recibido distinciones por su trabajo en arte contemporáneo y residencias artísticas en espacios naturales.',
  },
  carlos: {
    nombre: 'Carlos González',
    rol: 'Artista Sonoro',
    bio: 'Ingeniero acústico, artista sonoro y Director de Maule Creativo. Especialista en sonido inmersivo y paisajes sonoros. Fundador de Verso de Rokha y productor cultural con amplia experiencia en proyectos de arte, patrimonio y mediación en la región del Maule.',
  },
  trabajoConjunto:
    'El proyecto surge de años de colaboración entre artes visuales, arte sonoro y mediación cultural. Juntos han desarrollado experiencias que integran comunidad, territorio y creación contemporánea, trabajando directamente con públicos diversos en espacios culturales y naturales.',
};

export const TR_PROYECCION =
  'Territorios Resonantes está diseñado para adaptarse a múltiples contextos: museos, centros culturales, espacios patrimoniales, parques, festivales e itinerancias nacionales e internacionales. Su estructura modular permite reconfigurar la instalación según el espacio y el público, manteniendo siempre su esencia experiencial. El proyecto cuenta con un avance significativo: pinturas y esculturas en proceso de creación, fotografías de campo, renders del montaje, esquema espacial definido, sistema de sonido diseñado y un cronograma de producción establecido.';

export const TR_REFERENTES = {
  artisticos: ['Janet Cardiff', 'Bill Fontana', 'Olafur Eliasson', 'Andy Goldsworthy'],
  pensamiento: ['R. Murray Schafer', 'Tim Ingold', 'Gaston Bachelard'],
  territorio: 'La voz poética de Pablo de Rokha y los bosques y ecosistemas del Maule.',
};

export const TR_CIERRE = 'Territorios Resonantes propone una nueva forma de habitar el paisaje: escuchándolo.';

export const TR_CONTACTO = {
  web: 'maulecreativo.com',
  instagram: '@maulecreativo',
  spotify: 'Paisajes Sonoros',
  portafolio: 'Karolina Mättig',
};

// ── MEMORIAS DE LICANTÉN — libro de relatos (proyecto editorial) ──
// Ficha v2.0. NOTA: sin fotografías todavía — retratos de autores,
// mockup del libro y fotos del taller/lanzamiento pendientes de subir
// y de confirmar el pareo foto↔nombre. La grilla de autores muestra
// solo texto hasta entonces.
export const LICANTEN_PROYECTO = {
  titulo: 'Memorias de Licantén',
  subtitulo: 'Explorando las Raíces, Tejiendo el Futuro',
  bajada: 'Un libro de relatos donde diez adultos mayores de la comuna cuentan, con voz propia, la historia viva del territorio.',
  precio: 10000,
  precioTexto: '$10.000 CLP',
};

export const LICANTEN_IMG = {
  mockup: '/memorias-de-licanten/hero-mockup.jpg',
};

export const LICANTEN_PRESENTACION = [
  '"Memorias de Licantén: Explorando las Raíces, Tejiendo el Futuro" es un libro de relatos escrito por diez habitantes adultos mayores de la comuna de Licantén, quienes durante seis meses de 2023 trabajaron en un taller de escritura creativa hasta convertir sus vivencias personales en un objeto editorial colectivo.',
  'El libro no es una recopilación etnográfica hecha por un tercero: son sus autoras y autores quienes escriben, editan y firman cada texto. Maule Creativo diseñó y condujo el proyecto; el Club Deportivo Licantén postuló al fondo y aportó su sede; el Ministerio de las Culturas, las Artes y el Patrimonio de Chile lo financió a través del Fondo del Libro y la Lectura 2023. El resultado es un volumen con paleta sepia, retratos de las y los autores dispuestos como medallones circulares en la portada, y una tipografía Licantén con ñ estilizada que da carácter propio al objeto. Se lanzó públicamente en marzo de 2024, una tarde en la Plaza de Armas de Licantén.',
];

// Los 10 nombres deben existir como texto real en el HTML (SEO local).
// `retrato: null` hasta confirmar el pareo foto↔nombre con Maule Creativo.
export const LICANTEN_AUTORES = [
  { nombre: 'Eduardo Erasmo González Castillo', retrato: null },
  { nombre: 'Graciela Muñoz Fuenzalida', retrato: null },
  { nombre: 'Sergio Valladares', retrato: null },
  { nombre: 'Mario Antonio Hernández Muñoz', retrato: null },
  { nombre: 'Sara Julia de las Mercedes Flores Flores', retrato: null },
  { nombre: 'Manuel Heurispides Rojas Quitral', retrato: null },
  { nombre: 'Luis Humberto González González', retrato: null },
  { nombre: 'Sara del Carmen Benavides Benavides', retrato: null },
  { nombre: 'Bernardita de la Paz Guerrero', retrato: null },
  { nombre: 'Cristina del Carmen Veliz Correa', retrato: null },
];

export const LICANTEN_TALLER = {
  tallerista: 'Celeste Busso',
  instagram: '@celestebusso_escritora',
  texto:
    'El taller de escritura creativa fue dictado por la escritora Celeste Busso durante el segundo semestre de 2023, con encuentros semanales durante seis meses en la sede del Club Deportivo Licantén. Trabajó con las y los diez participantes en el paso —a veces difícil, siempre revelador— desde la anécdota oral que se cuenta en la sobremesa hasta el texto escrito que otro lector, en otro tiempo, podrá leer solo.',
  metodo:
    'El método no partió de la nostalgia sino del oficio: cómo se construye una escena, cómo se define un personaje, cómo se corta un párrafo. Cada participante llegó al lanzamiento con textos propios, firmados con su nombre.',
};

export const LICANTEN_LANZAMIENTO = {
  fecha: 'Marzo de 2024',
  lugar: 'Plaza de Armas de Licantén',
  texto:
    'En marzo de 2024, una tarde en la Plaza de Armas de Licantén, se hizo el lanzamiento público del libro. Las y los diez autores presentaron su obra a la comuna, en un evento abierto que combinó lectura, celebración y venta directa de ejemplares.',
  cierre:
    'Fue un lanzamiento territorial en sentido literal: no en una biblioteca de Santiago ni en una feria del libro, sino en la plaza pública de la comuna donde el libro fue escrito y donde vive su comunidad de lectores potenciales.',
};

export const LICANTEN_FICHA = [
  { t: 'Título', d: 'Memorias de Licantén: Explorando las Raíces, Tejiendo el Futuro' },
  { t: 'Autores', d: '10 habitantes adultos mayores de Licantén (ver listado completo)' },
  { t: 'Tallerista y editora del proceso', d: 'Celeste Busso' },
  { t: 'Dirección del proyecto', d: 'Carlos González, director de Maule Creativo' },
  { t: 'Coordinación', d: 'Soledad Reyes' },
  { t: 'Fotografía', d: 'Cristian Piérola' },
  { t: 'Diseño gráfico y editorial', d: 'Pendiente de confirmar' },
  { t: 'Institución postulante y sede del taller', d: 'Club Deportivo Licantén (Presidente: Marcelo González)' },
  { t: 'Financiamiento', d: 'Fondo Nacional de Fomento del Libro y la Lectura 2023, Ministerio de las Culturas, las Artes y el Patrimonio de Chile' },
  { t: 'Año del taller', d: 'Segundo semestre de 2023' },
  { t: 'Fecha de publicación y lanzamiento', d: 'Marzo de 2024' },
  { t: 'Lugar del lanzamiento', d: 'Plaza de Armas de Licantén' },
  { t: 'Formato', d: 'Libro impreso' },
  { t: 'ISBN', d: 'El libro no cuenta con ISBN' },
  { t: 'Precio del ejemplar impreso', d: '$10.000 CLP' },
];

export const LICANTEN_ADQUIRIR = {
  stock: 'El libro se encuentra disponible en formato impreso, con 100 ejemplares en stock después del tiraje inicial vendido durante el lanzamiento y la etapa posterior.',
  comoComprar:
    'Para adquirir un ejemplar escribe a contacto@maulecreativo.cl indicando ciudad de retiro o envío. También estará disponible para venta directa durante actividades del Festival Epopeyas del Maule y en encuentros del Centro Creativo Rural.',
  aporte: 'Cada ejemplar vendido contribuye a sostener las líneas de trabajo con comunidad de Maule Creativo en el territorio del Maule.',
  digital:
    'Existe una versión digital del libro en formato PDF que aún no ha sido publicada. Estamos definiendo la estrategia de difusión digital que respete el trabajo autoral y editorial del proyecto. Cuando esté disponible, se anunciará en esta misma página y en las redes de Maule Creativo.',
  mailto: {
    to: 'contacto@maulecreativo.cl',
    subject: 'Memorias de Licantén — ejemplar',
    body: 'Hola, quisiera adquirir un ejemplar de Memorias de Licantén. Mi ciudad de retiro o envío es: [ciudad]. Gracias.',
  },
};

export const LICANTEN_ECOSISTEMA =
  '"Memorias de Licantén" forma parte de un contexto territorial más amplio de iniciativas de recuperación y valorización del patrimonio inmaterial de la comuna. En diciembre de 2025, la administración municipal inauguró en el Centro Cultural Pablo de Rokha la muestra "Recopilación de Historia de Licantén" —una exposición comunitaria con fotografías, objetos antiguos y relatos donados por vecinos, ejecutada a través del Plan Maestro del Ministerio de Vivienda y Urbanismo—. Aunque el proyecto fue independiente de Maule Creativo, ambas iniciativas dialogan con una misma pregunta: cómo se cuida y se cuenta la memoria de un lugar.';

export const LICANTEN_CREDITOS = [
  { t: 'Autoría de los textos', d: 'Las y los diez autores del libro' },
  { t: 'Dirección del proyecto', d: 'Carlos González, director de Maule Creativo' },
  { t: 'Coordinación', d: 'Soledad Reyes' },
  { t: 'Tallerista de escritura creativa', d: 'Celeste Busso' },
  { t: 'Fotografía', d: 'Cristian Piérola' },
  { t: 'Diseño gráfico y editorial', d: 'Pendiente' },
  { t: 'Institución postulante', d: 'Club Deportivo Licantén — Presidente: Marcelo González' },
  { t: 'Financiamiento', d: 'Fondo Nacional de Fomento del Libro y la Lectura 2023, Ministerio de las Culturas, las Artes y el Patrimonio de Chile' },
  { t: 'Producción del lanzamiento (marzo 2024)', d: 'Maule Creativo, Club Deportivo Licantén y colaboración de la Municipalidad de Licantén' },
  { t: 'Impresión', d: 'Pendiente' },
];

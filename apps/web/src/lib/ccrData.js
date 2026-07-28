// Centro Creativo Rural (CCR) — contenido de la ficha institucional y del
// reportaje "Aurorita Ramos". Sigue el mismo patrón de datos centralizados
// que mauleData.js.
//
// NOTA sobre la sección 6/8 de la ficha (modalidades de apertura / trabajos
// previos): el documento fuente v1.0 de la ficha describía la sesión de
// canto como realizada "con el club de canto de adultos mayores del ELEAM".
// El reportaje v2 (fuente más reciente, con correcciones explícitas)
// aclara que es un taller de adulto mayor dirigido por Aurorita Ramos,
// NO el ELEAM (Establecimiento de Larga Estadía para Adultos Mayores). Esta
// ficha usa la versión corregida en ambos lugares.

export const CCR_TITULO = 'Centro Creativo Rural (CCR)';
export const CCR_SUBTITULO = 'Casa-estudio de arte, sonido y territorio en el sector rural de La Leonera, Licantén.';

// Hero de /ccr — reutiliza la foto de la sala multiuso del reportaje
// Aurorita (misma carpeta que las fotos del reportaje, ver más abajo),
// ya que es la fotografía real disponible del espacio.
export const CCR_HERO_IMG = {
  src: '/ccr/reportaje-aurorita/img-01.jpg',
  alt: 'Sala multiuso equipada del Centro Creativo Rural, en La Leonera, Licantén.',
};

export const CCR_FICHA = [
  {
    id: 'presentacion',
    kicker: '01 · Presentación',
    titulo: 'Una casa-estudio habitada',
    parrafos: [
      'El Centro Creativo Rural (CCR) es una casa-estudio habitada, ubicada en la comuna de Licantén, Región del Maule. Es la base física de las operaciones creativas de Maule Creativo y del Laboratorio de Ingeniería Creativa, y desde noviembre de 2026 comienza a operar además como espacio de residencia artística por invitación curada.',
      'El CCR no es una infraestructura vacía: es el lugar donde su director artístico, Carlos González —artista sonoro e ingeniero de audio— vive, produce y recibe a artistas invitados a habitar el territorio junto a él. Este carácter íntimo, protegido y anclado al oficio del anfitrión define su naturaleza y sus reglas de acceso.',
    ],
  },
  {
    id: 'ubicacion',
    kicker: '02 · Ubicación y contexto territorial',
    titulo: 'Sector rural La Leonera, Licantén',
    parrafos: [
      'Sector rural La Leonera, comuna de Licantén, Provincia de Curicó, Región del Maule.',
      'Licantén es una de las comunas más simbólicas del Maule creativo. Está en el corazón del universo poético que rodea la obra de Pablo de Rokha, es sede del Baile de los Negros de Lora —patrimonio inmaterial que cada año culmina el Festival Epopeyas del Maule— y punto neurálgico de la Ruta Pablo de Rokha dentro del ecosistema de Rutas Creativas de Maule Creativo.',
      'El CCR se encuentra a pocos minutos del corazón simbólico del festival, lo que le permite operar en continuidad natural con las actividades territoriales que despliega Maule Creativo a lo largo del año.',
    ],
  },
  {
    id: 'espacios',
    kicker: '03 · Espacios e infraestructura',
    titulo: 'Un único inmueble rural',
    intro: 'El CCR está distribuido en un único inmueble rural con las siguientes áreas:',
    lista: [
      { t: 'Sala multiuso equipada', d: 'Espacio central del CCR, con muros de madera nativa, luz natural y salida al exterior. Alberga la sala de escucha, la galería íntima con el cover art del proyecto Verso de Rokha, y capacidad para presentaciones cerradas de residentes.' },
      { t: 'Sala de edición y producción', d: 'Estación de trabajo con monitor, mesa de mezcla profesional y equipamiento de post-producción audiovisual.' },
      { t: 'Segunda estación creativa', d: 'Espacio de diseño e ideación, con superficie de trabajo, luz natural y conexión al patio.' },
      { t: 'Taller con CNC router', d: 'Construcción anexa dedicada al trabajo en madera y fabricación digital, base del componente de prototipado del método del Laboratorio de Ingeniería Creativa.' },
      { t: 'Dormitorio de residente', d: 'Habitación con luz natural, escritorio y ropa de cama incluida.' },
      { t: 'Baño independiente', d: 'Con ducha, lavamanos y WC en obra terminada.' },
      { t: 'Espacios comunes', d: 'Comedor, cocina compartida y áreas de descanso.' },
    ],
  },
  {
    id: 'capacidades',
    kicker: '04 · Capacidades técnicas',
    titulo: 'Equipamiento de nivel profesional',
    intro: 'El CCR cuenta con equipamiento de nivel profesional para producción sonora, audiovisual y de fabricación digital:',
    lista: [
      { t: 'Sonido', d: 'Consola digital Yamaha, micrófonos condensadores Audio-Technica, monitores de campo, sistema de grabación multipista, software Reaper.' },
      { t: 'Audiovisual', d: 'ATEM Mini para conmutación de video, sistema de iluminación DMX, muro verde para croma, batería de instrumentos disponible.' },
      { t: 'Fabricación digital', d: 'CNC router para trabajo en madera y prototipado.' },
      { t: 'Registro territorial', d: 'GoPro MAX para captura 360°, DJI drone para tomas aéreas, sensores PlantWave para registro bioeléctrico de vegetación.' },
      { t: 'Post-producción', d: 'DaVinci Resolve Studio, Reaper, herramientas de generación programática de documentación.' },
    ],
    cierre: 'Este equipamiento hace del CCR uno de los espacios rurales mejor equipados de Chile en la intersección de arte sonoro, medios digitales y fabricación.',
  },
  {
    id: 'residencia',
    kicker: '05 · Modelo de residencia',
    titulo: 'Residencia de anfitrión',
    parrafos: [
      'El CCR opera como residencia de anfitrión (artist-hosted residency): un formato íntimo y curado que se distingue de las residencias abiertas de gran escala. La convivencia entre anfitrión y residente es parte constitutiva del formato.',
    ],
    subtitulo: 'Principios del programa',
    lista: [
      { t: 'Un residente a la vez', d: 'O una dupla creativa vinculada. El CCR es un espacio habitado y protegido; la residencia comparte techo con su anfitrión.' },
      { t: 'Selección por invitación curada', d: 'No hay convocatoria abierta al público general. Los residentes son propuestos por curatoría interna de Maule Creativo o por redes colaborativas asociadas.' },
      { t: 'Duración típica de 2 a 4 semanas', d: 'Duraciones distintas se acuerdan caso a caso.' },
      {
        t: 'Contrapartida del residente',
        d: 'Cada residencia contempla:',
        sublista: [
          'Una obra o pieza resultante que queda para el archivo del CCR.',
          'Un componente de intercambio con la comunidad local de Licantén (sesión, taller, entrevista o encuentro).',
          'Una entrada en el cuaderno de bitácora del CCR.',
        ],
      },
      { t: 'Temporada principal', d: 'Noviembre a marzo, aprovechando el clima y el ciclo posterior al Festival Epopeyas del Maule.' },
    ],
  },
  {
    id: 'apertura',
    kicker: '06 · Modalidades de apertura controlada',
    titulo: 'Acceso protegido',
    parrafos: [
      'El CCR mantiene una política de acceso protegido, dado el equipamiento sensible y su naturaleza de espacio habitado. No hay visita libre al público general. Sí hay tres modalidades programadas de apertura:',
    ],
    lista: [
      { t: 'Sesión de cierre de residencia', d: 'Presentación privada del residente al terminar su estadía, para un grupo pequeño de invitados (15–25 personas): cultores de Licantén, gremio artístico, prensa cultural, autoridades locales.' },
      { t: 'Taller cerrado por temporada', d: 'Uno o dos talleres al año con inscripción previa, cupo limitado (8–12 personas), dictado por su director o por residentes de la temporada.' },
      { t: 'Encuentros de colaboración con comunidad local', d: 'Sesiones puntuales con grupos comunitarios de Licantén y comunas vecinas —como la sesión ya realizada con el taller de canto de adultos mayores dirigido por la folclorista Aurorita Ramos, en la que se registraron piezas del repertorio tradicional chileno.' },
    ],
  },
  {
    id: 'laboratorio',
    kicker: '07 · Vinculación con el Laboratorio',
    titulo: 'La base física del Laboratorio de Ingeniería Creativa',
    parrafos: [
      'El CCR es la base física operativa del Laboratorio de Ingeniería Creativa. Cada una de las cinco etapas del método del Laboratorio —Escuchar · Interpretar · Diseñar · Prototipar · Activar— tiene sustento físico en el CCR: los equipos de captura sonora, las estaciones de edición y diseño, el taller con CNC y la sala multiuso equipada.',
      'Los proyectos e ideaciones del Laboratorio nacen desde este lugar. La marca del Laboratorio conserva su presencia digital autónoma para audiencias institucionales; el CCR es su casa.',
    ],
    cta: { texto: 'Conocer el Laboratorio de Ingeniería Creativa', href: 'https://maulecreativo.cloud' },
  },
  {
    id: 'trabajos-previos',
    kicker: '08 · Trabajos previos en el CCR',
    titulo: 'Un archivo que crece',
    intro: 'Esta sección crece a medida que se documentan nuevos trabajos en el espacio. Fotografías y relatos disponibles en la web.',
    trabajos: [
      {
        titulo: 'Sesión con Aurorita Ramos y el coro del taller de adulto mayor',
        texto: 'Registro en estudio de dos canciones del cancionero popular chileno —una de ellas El Gorro de Lana de Jorge Yáñez— con la folclorista de Hualañé y un grupo de doce cantantes tras seis meses de trabajo colectivo.',
        to: '/ccr/trabajos-previos/aurorita-ramos-taller-adulto-mayor',
        ctaTexto: 'Leer reportaje completo',
      },
      {
        titulo: 'Grabaciones de Verso de Rokha',
        texto: 'Sesiones de producción del proyecto multidisciplinar en homenaje a Pablo de Rokha, cuyo estreno fue en julio de 2026 en el Teatro Provincial de Curicó.',
        to: '/verso-de-rokha',
        ctaTexto: 'Ver el museo digital',
      },
    ],
  },
  {
    id: 'contacto',
    kicker: '09 · Contacto y postulación',
    titulo: 'Acceso por invitación curada',
    parrafos: [
      'El acceso al CCR como residente es por invitación curada. Si tienes un proyecto que dialoga con el territorio del Maule y quisieras conversar sobre la posibilidad de una residencia, escribe a:',
    ],
    email: 'contacto@maulecreativo.cl',
    asunto: 'Residencia CCR',
  },
];

// Apéndice A.1 — bloque contextual "CCR → Laboratorio" (tarea C)
export const CCR_BLOQUE_LABORATORIO = {
  titulo: 'El CCR es también la base física del Laboratorio de Ingeniería Creativa',
  texto: 'Los proyectos de innovación cultural, consultoría y metodología de Maule Creativo se piensan, prototipan y activan desde este mismo espacio en Licantén.',
  ctaTexto: 'Conocer el Laboratorio',
  href: 'https://maulecreativo.cloud',
};

// ── Reportaje: Aurorita Ramos y el coro del taller de adulto mayor ──────
// Fotografías: apps/web/public/ccr/reportaje-aurorita/img-01.jpg … img-07.jpg
// (archivos a cargar por el equipo — ver mapeo de captions más abajo).

export const CCR_AURORITA_FOTOS = [
  { src: '/ccr/reportaje-aurorita/img-01.jpg', alt: 'Sesión de grabación del taller de adulto mayor en la sala multiuso del CCR. Marzo de 2026.' },
  { src: '/ccr/reportaje-aurorita/img-02.jpg', alt: 'Aurorita Ramos, folclorista y cantautora de Hualañé, dirige el taller y acompaña con guitarra clásica durante la sesión.' },
  { src: '/ccr/reportaje-aurorita/img-03.jpg', alt: 'Cuatro de las doce voces del taller durante una toma.' },
  { src: '/ccr/reportaje-aurorita/img-04.jpg', alt: 'Voces del taller durante una toma coral.' },
  { src: '/ccr/reportaje-aurorita/img-05.jpg', alt: "Lectura del vals chilote 'El Gorro de Lana' de Jorge Yáñez, una de las dos piezas registradas." },
  { src: '/ccr/reportaje-aurorita/img-06.jpg', alt: 'Consola digital utilizada en la grabación multipista.' },
  { src: '/ccr/reportaje-aurorita/img-07.jpg', alt: 'Intimidad de la sala multiuso durante una toma solista.' },
];

export const CCR_AURORITA = {
  titulo: 'Aurorita Ramos y el coro del taller de adulto mayor: una sesión de grabación en el CCR',
  bajada: 'El taller de canto tradicional que la folclorista de Hualañé dicta con un grupo de adultos mayores encontró en el Centro Creativo Rural el espacio para registrar en estudio dos canciones del cancionero popular chileno.',
  secciones: [
    {
      titulo: 'La sala escucha',
      parrafos: [
        'Es marzo de 2026 en La Leonera. La luz cae sobre los muros de madera nativa de la sala multiuso del Centro Creativo Rural. Alrededor de dos micrófonos condensadores, doce integrantes de un taller de adulto mayor reparten hojas fotocopiadas, se acomodan los sombreros de paño, se buscan la mirada. La consola Yamaha está encendida. Va a empezar la primera toma.',
        'Dirige la sesión Aurorita Ramos, folclorista y cantautora de Hualañé. El grupo llegó a Licantén después de seis meses de trabajo colectivo para dar el paso que un taller de canto no siempre alcanza a dar: registrar en estudio, con calidad profesional, dos canciones que llevan meses puliendo juntos.',
      ],
    },
    {
      titulo: 'Quién es Aurorita Ramos',
      parrafos: [
        'Aurorita Ramos —nombre artístico de una cantora nacida y criada en Hualañé, comuna vecina a Licantén dentro de la provincia de Curicó— interpreta tonadas y cuecas desde los diez años en festivales campesinos y escenarios costumbristas de la Región del Maule. Dirige su propio conjunto, Aurorita Ramos y Los de la Peña, y participa cada año en la Fiesta de la Chilenidad de Hualañé y en las fiestas patronales del valle del Mataquito.',
        'Junto a la actividad de intérprete, ha desarrollado un trabajo formativo con grupos de adultos mayores, transmitiendo el repertorio tradicional chileno como quien pasa de mano en mano un objeto que no debe romperse. El taller que hoy graba en el CCR es fruto de ese oficio doble: cantora y maestra.',
      ],
    },
    {
      titulo: 'Seis meses de taller',
      parrafos: [
        'El grupo son doce integrantes que llevan seis meses trabajando el repertorio semana a semana. Voces con décadas de oficio, memorias musicales que se transmiten oralmente antes que por partitura, sombreros de paño y chupallas que llegan puestos desde la vida cotidiana, no como disfraz. Ensayaron valses, tonadas, cuecas —parte del cancionero costumbrista que forma parte del oído común de generaciones enteras en el centro-sur de Chile.',
        'Que ese trabajo culmine en una sesión de grabación —con la calidad técnica de un estudio profesional— es exactamente el tipo de encuentro que el CCR quiere seguir alojando cuando abra oficialmente como residencia, a partir de noviembre de 2026. No es que el CCR "reciba" al taller: es que abre sus puertas al oficio popular con el mismo respeto y con los mismos equipos con los que atiende cualquier producción profesional.',
      ],
    },
    {
      titulo: 'Las dos canciones',
      parrafos: [
        'Se grabaron dos piezas:',
      ],
      canciones: [
        {
          titulo: 'El Gorro de Lana',
          texto: 'Vals chilote compuesto por Jorge Yáñez en 1974 y publicado en su disco Y qué jué (1977). Es una de las canciones más reconocibles del cancionero popular chileno, y ha sido interpretada por decenas de conjuntos folclóricos a lo largo de los años. Grabarla en el CCR con voces del Maule es también un gesto: reconocer que estas canciones viven porque se cantan, en cualquier rincón del país, no solo en el archipiélago que las inspiró.',
        },
        {
          titulo: null, // nombre pendiente de confirmar — ver nota en la ficha técnica
          texto: null,
          pendiente: true,
        },
      ],
    },
    {
      titulo: 'La sesión',
      parrafos: [
        'Los micrófonos condensadores capturaron voces individuales y coros a varias voces. Aurorita acompañó desde su guitarra clásica, sentada junto a la puerta corredera del patio. Entre toma y toma, quienes esperaban su turno leían sus letras junto a la lámpara pintada en dorado y borgoña, o se reían por lo bajo comentando algún error. Se escuchó castellano campesino, del que aún se dice trilla y palera, moscardón y capital: palabras que nombran un mundo que no cabe entero en las ciudades.',
      ],
    },
    {
      titulo: 'Por qué importa',
      parrafos: [
        'Para el Centro Creativo Rural, la sesión con Aurorita Ramos y su taller es más que una prueba técnica del equipamiento. Es una primera afirmación de la vocación del espacio: poner infraestructura de nivel profesional al servicio de la memoria oral, el canto tradicional y el trabajo con comunidades del territorio.',
        'En un país donde el equipamiento profesional de estudio y la investigación patrimonial suelen operar en ciudades distantes, el CCR ofrece otra ecuación: la infraestructura llega al territorio, no al revés. Y en esa ecuación, una cantora de Hualañé, un coro de adultos mayores y un ingeniero de audio en La Leonera pueden encontrarse sin trámites, en una sesión de tarde, para dejar registrado lo que de otra manera se habría cantado y perdido.',
      ],
    },
  ],
  fichaTecnica: [
    { label: 'Dirección musical', valor: 'Aurorita Ramos' },
    { label: 'Coro', valor: '12 integrantes del taller de adulto mayor dirigido por Aurorita Ramos' },
    { label: 'Repertorio grabado', valor: 'El Gorro de Lana (vals chilote, Jorge Yáñez, 1974) y una segunda pieza por confirmar' },
    { label: 'Duración del taller previo a la grabación', valor: '6 meses' },
    { label: 'Fecha de la sesión', valor: 'Marzo de 2026' },
    { label: 'Lugar', valor: 'Centro Creativo Rural (CCR), sector La Leonera, comuna de Licantén, Región del Maule' },
    { label: 'Dirección técnica y registro', valor: 'Carlos González, director artístico del CCR' },
    { label: 'Equipamiento', valor: 'Consola digital Yamaha, micrófonos condensadores Audio-Technica, sistema de grabación multipista, guitarra clásica' },
    { label: 'Consentimiento de imagen', valor: 'Otorgado por las y los participantes' },
    { label: 'Derechos de audio', valor: 'En gestión con SCD — las grabaciones no se publicarán hasta aclarar autorías, dado que El Gorro de Lana es una obra con autor vivo bajo protección vigente' },
  ],
  creditoPendiente: 'Fotografía y fecha de publicación pendientes de confirmar.',
};

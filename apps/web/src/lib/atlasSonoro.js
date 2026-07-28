// Datos del Atlas Sonoro — piezas geolocalizadas del museo digital.
// Se obtienen desde la colección PocketBase `atlas_piezas`; mientras esa
// colección esté vacía (por ejemplo en desarrollo local, sin backend real
// disponible), se usan piezas de demostración claramente marcadas como tales
// para poder construir y probar el mapa/reproductor.

import pocketbaseClient from '@/lib/pocketbaseClient';

export const ACTOS = ['I', 'II', 'III'];

export const ACTO_LABEL = {
  I: 'Acto I',
  II: 'Acto II',
  III: 'Acto III',
};

export const TIPO_LABEL = {
  paisaje: 'Paisaje sonoro',
  recitado: 'Recitado',
  plantwave: 'PlantWave',
  mezcla: 'Mezcla',
};

// Región del Maule — centro aproximado para el mapa.
export const MAULE_CENTER = [-35.4264, -71.6554];
export const MAULE_ZOOM = 9;

// NOTA: coordenadas y textos de demostración — no son grabaciones reales.
// Sirven solo para poder construir y previsualizar el mapa/reproductor
// mientras `atlas_piezas` no tenga contenido real cargado.
const DEMO_PIEZAS = [
  {
    id: 'demo-mataquito',
    titulo: '[Demo] Puente Mataquito — amanecer',
    coordenadas: { lat: -34.9989, lon: -72.0814 },
    acto: 'I',
    tipo: 'paisaje',
    canales: 2,
    duracion: 96,
    transcripcion: '',
    licencia: 'Placeholder — reemplazar por licencia real',
    autor_grabacion: 'Placeholder',
    archivo_audio: null,
    audioUrl: null,
    isDemo: true,
  },
  {
    id: 'demo-rokha-recitado',
    titulo: '[Demo] Recitado — fragmento Verso de Rokha',
    coordenadas: { lat: -34.9895, lon: -72.0021 },
    acto: 'II',
    tipo: 'recitado',
    canales: 2,
    duracion: 64,
    transcripcion: '',
    licencia: 'Placeholder — reemplazar por licencia real',
    autor_grabacion: 'Placeholder',
    archivo_audio: null,
    audioUrl: null,
    isDemo: true,
  },
  {
    id: 'demo-plantwave-gualleco',
    titulo: '[Demo] PlantWave — Gualleco, Curepto',
    coordenadas: { lat: -35.0983, lon: -72.0102 },
    acto: 'III',
    tipo: 'plantwave',
    canales: 2,
    duracion: 120,
    transcripcion: '',
    licencia: 'Placeholder — reemplazar por licencia real',
    autor_grabacion: 'Placeholder',
    archivo_audio: null,
    audioUrl: null,
    isDemo: true,
  },
];

function normalizePieza(record) {
  const audioUrl = record.archivo_audio
    ? pocketbaseClient.files.getURL(record, record.archivo_audio)
    : null;

  return {
    id: record.id,
    titulo: record.titulo,
    coordenadas: record.coordenadas || { lat: 0, lon: 0 },
    acto: record.acto,
    tipo: record.tipo,
    canales: record.canales || 2,
    duracion: record.duracion || 0,
    transcripcion: record.transcripcion || '',
    licencia: record.licencia || '',
    autor_grabacion: record.autor_grabacion || '',
    archivo_audio: record.archivo_audio,
    audioUrl,
    isDemo: false,
  };
}

export async function fetchAtlasPiezas() {
  try {
    const records = await pocketbaseClient.collection('atlas_piezas').getFullList({
      sort: 'acto,titulo',
    });
    if (records.length === 0) return DEMO_PIEZAS;
    return records.map(normalizePieza);
  } catch (err) {
    console.warn('[atlas-sonoro] No se pudo cargar atlas_piezas desde PocketBase, usando datos de demostración.', err);
    return DEMO_PIEZAS;
  }
}

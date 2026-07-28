// Detección heurística de audífonos.
//
// Importante: no existe una API web estándar para saber con certeza si el
// visitante tiene audífonos puestos. Esto es un heurístico de mejor esfuerzo
// basado en navigator.mediaDevices.enumerateDevices(): revisa las
// etiquetas ("labels") de los dispositivos de salida de audio en busca de
// palabras típicas de audífonos/auriculares. Las etiquetas solo están
// disponibles si el navegador ya concedió permiso de micrófono/cámara en el
// sitio — si no, todos los labels vienen vacíos y el resultado es
// "desconocido". Por diseño, tratamos "desconocido" igual que "sin
// audífonos": preferimos sugerir de más antes que asumir de más.

const HEADPHONE_KEYWORDS = [
  'headphone', 'headset', 'earphone', 'earbud', 'earpods', 'airpods',
  'auricular', 'audifono', 'audífono', 'cascos',
  'bluetooth', 'bt', 'buds', 'beats', 'galaxy buds', 'wf-', 'wh-',
];

/**
 * @returns {Promise<'headphones'|'speakers'|'unknown'>}
 */
export async function detectHeadphoneLikelihood() {
  if (typeof navigator === 'undefined' || !navigator.mediaDevices?.enumerateDevices) {
    return 'unknown';
  }
  try {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const outputs = devices.filter((d) => d.kind === 'audiooutput');
    if (outputs.length === 0) return 'unknown';

    const labeled = outputs.filter((d) => d.label && d.label.trim().length > 0);
    if (labeled.length === 0) return 'unknown';

    const hasHeadphoneLabel = labeled.some((d) => {
      const label = d.label.toLowerCase();
      return HEADPHONE_KEYWORDS.some((kw) => label.includes(kw));
    });

    return hasHeadphoneLabel ? 'headphones' : 'speakers';
  } catch (_err) {
    return 'unknown';
  }
}

const SESSION_KEY = 'atlas-sonoro:headphone-hint-dismissed';

export function isHeadphoneHintDismissed() {
  try {
    return sessionStorage.getItem(SESSION_KEY) === '1';
  } catch (_err) {
    return false;
  }
}

export function dismissHeadphoneHint() {
  try {
    sessionStorage.setItem(SESSION_KEY, '1');
  } catch (_err) {
    /* modo privado u otro bloqueo de storage: no persiste, no pasa nada */
  }
}

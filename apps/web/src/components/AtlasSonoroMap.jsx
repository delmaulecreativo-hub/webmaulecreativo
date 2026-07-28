import React, { useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MAULE_CENTER, MAULE_ZOOM, ACTO_LABEL, TIPO_LABEL } from '@/lib/atlasSonoro';

// Colores por acto — tomados de las variables de tema del sitio (primary /
// secondary) más un tercer tono en la misma familia cinematográfica para el
// Acto III.
const ACTO_COLOR = {
  I: 'hsl(32 80% 58%)',
  II: 'hsl(178 45% 50%)',
  III: 'hsl(340 55% 62%)',
};

function pieceIcon(acto, isActive) {
  const color = ACTO_COLOR[acto] || ACTO_COLOR.I;
  const size = isActive ? 34 : 26;
  return L.divIcon({
    className: 'atlas-sonoro-marker',
    html: `
      <div style="
        width:${size}px; height:${size}px; border-radius:9999px;
        background:${color}; color:#12181a;
        display:flex; align-items:center; justify-content:center;
        font-family: ui-monospace, monospace; font-size:11px; font-weight:600;
        box-shadow: 0 0 0 2px rgba(10,14,15,0.85), 0 0 16px ${isActive ? color : 'transparent'};
        transition: box-shadow .3s ease;
        border: 2px solid rgba(255,255,255,0.15);
      ">${acto}</div>
    `,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
    popupAnchor: [0, -size / 2],
  });
}

function FlyToOnSelect({ pieza }) {
  const map = useMap();
  React.useEffect(() => {
    if (!pieza) return;
    map.flyTo([pieza.coordenadas.lat, pieza.coordenadas.lon], Math.max(map.getZoom(), 11), {
      duration: 1.1,
    });
  }, [pieza, map]);
  return null;
}

export default function AtlasSonoroMap({ piezas, activaId, onSelectPieza }) {
  const icons = useMemo(() => {
    const cache = {};
    for (const acto of ['I', 'II', 'III']) {
      cache[`${acto}-normal`] = pieceIcon(acto, false);
      cache[`${acto}-active`] = pieceIcon(acto, true);
    }
    return cache;
  }, []);

  const activaPieza = piezas.find((p) => p.id === activaId) || null;

  return (
    <MapContainer
      center={MAULE_CENTER}
      zoom={MAULE_ZOOM}
      scrollWheelZoom
      className="h-full w-full"
      style={{ background: '#0c1213' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://carto.com/attributions">CARTO</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        subdomains="abcd"
        maxZoom={19}
      />
      <FlyToOnSelect pieza={activaPieza} />
      {piezas.map((pieza) => {
        const isActive = pieza.id === activaId;
        return (
          <Marker
            key={pieza.id}
            position={[pieza.coordenadas.lat, pieza.coordenadas.lon]}
            icon={icons[`${pieza.acto}-${isActive ? 'active' : 'normal'}`]}
            eventHandlers={{ click: () => onSelectPieza(pieza) }}
          >
            <Popup>
              <div className="font-sans text-sm">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {ACTO_LABEL[pieza.acto]} · {TIPO_LABEL[pieza.tipo]}
                </p>
                <p className="mt-1 font-medium">{pieza.titulo}</p>
                {pieza.isDemo && (
                  <p className="mt-1 text-[11px] italic text-muted-foreground">Pieza de demostración</p>
                )}
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}

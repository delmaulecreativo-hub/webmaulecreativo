import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SiteChrome from '@/components/SiteChrome';
import PageHead from '@/components/PageHead';
import AtlasSonoroMap from '@/components/AtlasSonoroMap';
import AtlasSonoroPlayer, { HeadphoneHint } from '@/components/AtlasSonoroPlayer';
import CapaPlantWave from '@/components/CapaPlantWave';
import { fetchAtlasPiezas, ACTO_LABEL } from '@/lib/atlasSonoro';
import { atlasPlayerEngine } from '@/lib/audioEngine';
import { detectHeadphoneLikelihood, isHeadphoneHintDismissed, dismissHeadphoneHint } from '@/lib/headphones';

export default function AtlasSonoroPage() {
  const [piezas, setPiezas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activaId, setActivaId] = useState(null);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetchAtlasPiezas().then((data) => {
      if (!cancelled) {
        setPiezas(data);
        setLoading(false);
      }
    });
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    if (isHeadphoneHintDismissed()) return;
    let cancelled = false;
    detectHeadphoneLikelihood().then((result) => {
      if (!cancelled && result !== 'headphones') setShowHint(true);
    });
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    return () => { atlasPlayerEngine.stopAll({ fadeMs: 300 }); };
  }, []);

  const handleSelectPieza = (pieza) => {
    setActivaId(pieza.id);
    if (!pieza.audioUrl) return; // pieza de demostración sin archivo real: solo se ubica en el mapa
    atlasPlayerEngine.playPieza(pieza);
  };

  const handleDismissHint = () => {
    dismissHeadphoneHint();
    setShowHint(false);
  };

  const plantwavePiezas = piezas.filter((p) => p.tipo === 'plantwave');

  return (
    <div className="relative flex h-[100dvh] flex-col overflow-hidden bg-background">
      <PageHead
        title="Atlas Sonoro — Museo Digital"
        description="Mapa sonoro de la Región del Maule: paisajes, recitados y sonificaciones bioeléctricas de plantas, geolocalizados y en audio espacial."
      />
      <SiteChrome current="Escuchar · Museo Digital · Atlas Sonoro" />

      {/* z-0 explícito: crea su propio stacking context para contener los
          z-index internos de Leaflet (hasta 1000 en sus controles), que de
          lo contrario se filtran por encima del header/overlay de la página. */}
      <div className="absolute inset-0 z-0">
        <AtlasSonoroMap piezas={piezas} activaId={activaId} onSelectPieza={handleSelectPieza} />
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 bg-gradient-to-b from-background/90 via-background/40 to-transparent px-6 pb-10 pt-24 md:px-12">
        <Link to="/experiencias" className="pointer-events-auto inline-flex w-fit items-center gap-2 rounded-full border border-foreground/25 bg-background/40 px-4 py-2 text-xs backdrop-blur-sm transition-colors hover:border-foreground/60">
          <ArrowLeft className="h-3.5 w-3.5" /> Experiencias
        </Link>
        <h1 className="pointer-events-auto mt-4 w-fit font-display text-3xl font-light tracking-tight md:text-4xl">Atlas Sonoro</h1>
        <p className="pointer-events-auto mt-2 w-fit max-w-md text-sm text-foreground/75">
          {loading
            ? 'Cargando piezas…'
            : `${piezas.length} ${piezas.length === 1 ? 'pieza' : 'piezas'} distribuidas en ${Object.keys(ACTO_LABEL).length} actos. Toca un marcador para escuchar.`}
        </p>
        {plantwavePiezas.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-3">
            {plantwavePiezas.map((p) => (
              <div key={p.id} className="pointer-events-auto w-fit">
                <CapaPlantWave pieza={p} />
              </div>
            ))}
          </div>
        )}
      </div>

      <HeadphoneHint visible={showHint} onDismiss={handleDismissHint} />
      <AtlasSonoroPlayer piezas={piezas} />
    </div>
  );
}

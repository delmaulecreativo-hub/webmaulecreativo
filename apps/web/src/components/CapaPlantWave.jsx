import React, { useEffect, useState } from 'react';
import { Sprout } from 'lucide-react';
import { atlasPlayerEngine } from '@/lib/audioEngine';

// Capa de audio "PlantWave": reproduce como capa secundaria modulable en
// volumen la sonificación de datos bioeléctricos de plantas (grabada con el
// dispositivo PlantWave y subida como una pieza más de `atlas_piezas`, con
// tipo: 'plantwave'). No hay una transmisión en vivo del sensor: el
// dispositivo PlantWave no expone un feed público en tiempo real, así que
// esta capa reproduce el registro sonoro ya capturado, igual que las demás
// piezas del atlas, pero pensada para sonar simultánea y sutilmente por
// debajo de la capa principal.
export default function CapaPlantWave({ pieza }) {
  const [active, setActive] = useState(false);
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    return atlasPlayerEngine.subscribe((state) => {
      const isThisSecondary = state.secondary?.pieza?.id === pieza?.id;
      setActive(isThisSecondary);
      if (isThisSecondary) setVolume(state.secondary.volume);
    });
  }, [pieza?.id]);

  if (!pieza) return null;

  const toggle = async () => {
    if (active) {
      await atlasPlayerEngine.stopSecondary();
      return;
    }
    if (!pieza.audioUrl) return; // pieza de demostración sin archivo real: no hay nada que reproducir
    await atlasPlayerEngine.playSecondary(pieza);
    atlasPlayerEngine.setSecondaryVolume(volume);
  };

  const handleVolume = (e) => {
    const v = Number(e.target.value);
    setVolume(v);
    if (active) atlasPlayerEngine.setSecondaryVolume(v);
  };

  return (
    <div className="flex items-center gap-3 rounded-full border border-border/50 bg-card/60 px-4 py-2 backdrop-blur">
      <button
        onClick={toggle}
        disabled={!pieza.audioUrl && !active}
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors disabled:cursor-not-allowed disabled:opacity-40 ${
          active ? 'bg-primary text-primary-foreground' : 'border border-border/60 text-muted-foreground hover:text-foreground'
        }`}
        aria-pressed={active}
        aria-label={active ? 'Quitar capa PlantWave' : 'Añadir capa PlantWave'}
        title={pieza.audioUrl ? pieza.titulo : `${pieza.titulo} (sin archivo de audio todavía)`}
      >
        <Sprout className="h-4 w-4" strokeWidth={1.6} />
      </button>
      <div className="flex flex-col">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">PlantWave</span>
        <span className="text-xs text-foreground/80">{pieza.titulo}</span>
      </div>
      <input
        type="range"
        min={0}
        max={1}
        step={0.01}
        value={volume}
        onChange={handleVolume}
        disabled={!active}
        className="h-1 w-24 cursor-pointer accent-primary disabled:opacity-40"
        aria-label="Volumen de la capa PlantWave"
      />
    </div>
  );
}

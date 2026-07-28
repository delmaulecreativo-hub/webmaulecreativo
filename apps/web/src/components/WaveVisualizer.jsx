import React, { useEffect, useRef, useState } from 'react';

// Elegant animated waveform — bars respond while "playing".
// Purely visual; no real audio file needed.
export default function WaveVisualizer({ playing, bars = 72, className = '' }) {
  const [seeds] = useState(() =>
    Array.from({ length: bars }, (_, i) => ({
      base: 0.18 + Math.abs(Math.sin(i * 0.6)) * 0.5,
      speed: 0.6 + (i % 7) * 0.14,
      phase: (i % 11) * 0.5,
    }))
  );
  const [t, setT] = useState(0);
  const raf = useRef(null);

  useEffect(() => {
    if (!playing) return undefined;
    let start;
    const loop = (ts) => {
      if (!start) start = ts;
      setT((ts - start) / 1000);
      raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf.current);
  }, [playing]);

  return (
    <div className={`flex h-full w-full items-center justify-center gap-[3px] ${className}`}>
      {seeds.map((s, i) => {
        const h = playing
          ? s.base * (0.55 + 0.45 * Math.abs(Math.sin(t * s.speed + s.phase)))
          : s.base * 0.35;
        return (
          <span
            key={i}
            className="w-full max-w-[5px] flex-1 rounded-full bg-gradient-to-t from-secondary to-primary transition-[height] duration-150 ease-out"
            style={{ height: `${Math.max(6, h * 100)}%`, opacity: playing ? 0.9 : 0.4 }}
          />
        );
      })}
    </div>
  );
}

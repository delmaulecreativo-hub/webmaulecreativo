import React, { useEffect, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { toggleAmbient, isAmbientOn, subscribeAmbient } from '@/lib/ambient';

export default function SoundToggle({ className = '' }) {
  const [on, setOn] = useState(isAmbientOn());

  useEffect(() => subscribeAmbient(setOn), []);

  return (
    <button
      onClick={() => setOn(toggleAmbient())}
      aria-label={on ? 'Silenciar paisaje sonoro' : 'Activar paisaje sonoro'}
      className={`group flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-3 py-2 backdrop-blur transition-colors hover:border-primary/60 ${className}`}
    >
      <span className="relative flex h-4 items-end gap-[2px]">
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className={`w-[2px] rounded-full transition-all duration-500 ${on ? 'bg-primary' : 'bg-muted-foreground'}`}
            style={{
              height: on ? `${[6, 12, 8, 14][i]}px` : '4px',
              animation: on ? `pulse 1.${i + 2}s ease-in-out ${i * 0.1}s infinite alternate` : 'none',
            }}
          />
        ))}
      </span>
      {on ? (
        <Volume2 className="h-4 w-4 text-primary" strokeWidth={1.6} />
      ) : (
        <VolumeX className="h-4 w-4 text-muted-foreground group-hover:text-foreground" strokeWidth={1.6} />
      )}
      <style>{`@keyframes pulse { from { transform: scaleY(0.4); } to { transform: scaleY(1); } }`}</style>
    </button>
  );
}

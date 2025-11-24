import React, { useRef, useState } from 'react';

const CursorSpotlight = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className="relative h-48 w-full overflow-hidden rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center group"
    >
      {/* Background Pattern (Hidden in dark) */}
      <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(#334155 1px, transparent 1px)', 
          backgroundSize: '20px 20px',
          opacity: 0.1
      }}></div>

      <div className="relative z-10 text-center pointer-events-none">
          <div className="text-5xl font-black text-slate-900 transition-colors duration-200 group-hover:text-white">
              FOCUS
          </div>
          <div className="text-xs text-slate-800 mt-2 uppercase tracking-[0.3em] font-bold transition-colors duration-200 group-hover:text-indigo-400">
              Illumination
          </div>
      </div>

      {/* The Spotlight Overlay */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 mix-blend-screen"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(99, 102, 241, 0.35), transparent 40%)`,
        }}
      />
    </div>
  );
};

export default CursorSpotlight;
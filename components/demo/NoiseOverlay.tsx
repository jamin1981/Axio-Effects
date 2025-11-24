import React from 'react';

const NoiseOverlay = () => {
  return (
    <div className="relative w-64 h-40 bg-slate-900 rounded-lg overflow-hidden flex items-center justify-center shadow-xl border border-slate-700">
        {/* SVG Noise Filter - Reduced Opacity */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none z-20">
            <filter id="noiseFilter">
                <feTurbulence 
                    type="fractalNoise" 
                    baseFrequency="0.8" 
                    numOctaves="3" 
                    stitchTiles="stitch" 
                />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
        
        <div className="z-10 text-slate-300 font-medium tracking-wider">Subtle Grain</div>
    </div>
  );
};

export default NoiseOverlay;
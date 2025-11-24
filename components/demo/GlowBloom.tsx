import React from 'react';

const GlowBloom = () => {
  return (
    <div className="group relative w-48 h-32 bg-slate-900 rounded-xl border border-slate-700 flex items-center justify-center transition-all duration-300 hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]">
       <div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
       <span className="font-medium text-slate-400 group-hover:text-indigo-300 transition-colors z-10">Hover Me</span>
    </div>
  );
};

export default GlowBloom;
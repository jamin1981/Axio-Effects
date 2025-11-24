import React from 'react';

const StickyStacking = () => {
  return (
    <div className="w-56 h-48 overflow-y-scroll bg-slate-900 rounded-xl border border-slate-700 relative p-4 space-y-4 no-scrollbar">
        <div className="sticky top-0 bg-indigo-500 h-32 rounded-lg shadow-lg flex items-center justify-center text-white font-bold border border-white/10 z-10 transform scale-95 origin-top">
            Card 1
        </div>
        <div className="sticky top-4 bg-purple-500 h-32 rounded-lg shadow-lg flex items-center justify-center text-white font-bold border border-white/10 z-20 transform scale-100 origin-top">
            Card 2
        </div>
        <div className="sticky top-8 bg-pink-500 h-32 rounded-lg shadow-lg flex items-center justify-center text-white font-bold border border-white/10 z-30">
            Card 3
        </div>
        <div className="h-20"></div> 
        <div className="absolute bottom-2 right-2 text-[10px] text-slate-400 bg-black/50 px-2 rounded z-40">Scroll</div>
    </div>
  );
};

export default StickyStacking;
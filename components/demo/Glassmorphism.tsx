import React from 'react';

const Glassmorphism = () => {
  return (
    <div className="relative w-64 h-40 bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=400&auto=format&fit=crop')] bg-cover bg-center rounded-xl overflow-hidden flex items-center justify-center">
       <div className="w-48 p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-xl text-center">
           <h4 className="text-white font-bold text-lg">Glass UI</h4>
           <p className="text-indigo-100 text-xs mt-1 opacity-80">Backdrop filter blur</p>
           <button className="mt-3 px-3 py-1 bg-white/20 hover:bg-white/30 text-white text-xs rounded transition-colors">
               Action
           </button>
       </div>
    </div>
  );
};

export default Glassmorphism;
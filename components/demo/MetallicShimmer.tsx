import React from 'react';

const MetallicShimmer = () => {
  return (
    <div className="bg-slate-900 p-8 rounded-xl border border-slate-800">
       <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-500 via-white to-slate-500 animate-shimmer bg-[length:200%_100%]">
          PREMIUM
       </h2>
       <style>{`
         @keyframes shimmer {
            0% { background-position: 100% 0; }
            100% { background-position: -100% 0; }
         }
         .animate-shimmer {
            animation: shimmer 3s linear infinite;
         }
       `}</style>
    </div>
  );
};

export default MetallicShimmer;
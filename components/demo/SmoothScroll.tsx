import React from 'react';
import { motion } from 'framer-motion';

const SmoothScroll = () => {
  return (
    <div className="relative w-56 h-48 overflow-hidden bg-slate-900 rounded-xl border border-slate-700">
       <motion.div 
         animate={{ y: [0, -200] }}
         transition={{ 
            duration: 4, 
            ease: [0.22, 1, 0.36, 1], // Custom bezier for momentum feel
            repeat: Infinity,
            repeatDelay: 1
         }}
         className="p-4 space-y-4"
       >
          {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-slate-800 p-3 rounded-lg shadow-sm border border-slate-700">
                  <div className="h-3 bg-slate-600 w-1/2 rounded mb-2" />
                  <div className="h-2 bg-slate-700 w-3/4 rounded" />
              </div>
          ))}
       </motion.div>
       <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none" />
       <div className="absolute top-2 right-2 text-[10px] text-indigo-400 bg-indigo-900/30 px-2 py-1 rounded border border-indigo-500/20">
           Auto-scroll
       </div>
    </div>
  );
};

export default SmoothScroll;
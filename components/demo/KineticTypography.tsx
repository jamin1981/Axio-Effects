import React from 'react';
import { motion } from 'framer-motion';

const KineticTypography = () => {
  return (
    <div className="w-full h-40 bg-slate-950 rounded-xl overflow-hidden flex flex-col justify-center border border-slate-800">
       <motion.div 
         className="whitespace-nowrap text-5xl font-black text-slate-800"
         animate={{ x: [0, -100] }}
         transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
       >
         MOVE FAST BREAK THINGS MOVE FAST BREAK THINGS
       </motion.div>
       <motion.div 
         className="whitespace-nowrap text-5xl font-black text-indigo-500 mix-blend-overlay"
         animate={{ x: [-100, 0] }}
         transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
       >
         CREATE SHIP ITERATE CREATE SHIP ITERATE
       </motion.div>
       <motion.div 
         className="whitespace-nowrap text-5xl font-black text-slate-800"
         animate={{ x: [0, -100] }}
         transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
       >
         DESIGN BUILD LAUNCH DESIGN BUILD LAUNCH
       </motion.div>
    </div>
  );
};

export default KineticTypography;
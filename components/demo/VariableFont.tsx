import React from 'react';
import { motion } from 'framer-motion';

const VariableFont = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center bg-white p-6 rounded-xl w-full h-full text-black">
       <motion.div 
         animate={{ fontWeight: [100, 900, 100] }}
         transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
         className="text-4xl"
         style={{ fontFamily: "'Inter', sans-serif" }}
       >
         Variable
       </motion.div>
       <motion.div 
         animate={{ letterSpacing: ["0px", "5px", "0px"], opacity: [0.5, 1, 0.5] }}
         transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
         className="text-xs uppercase"
       >
         Animation
       </motion.div>
    </div>
  );
};

export default VariableFont;
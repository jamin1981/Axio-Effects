import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ClipPathReveal = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div 
        className="relative w-64 h-40 bg-slate-800 rounded-xl overflow-hidden cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
    >
        <div className="absolute inset-0 flex items-center justify-center text-slate-500">
            Hover to Reveal
        </div>
        <motion.div 
            className="absolute inset-0 bg-indigo-600 flex items-center justify-center text-white font-bold text-xl"
            initial={{ clipPath: "circle(0% at 50% 50%)" }}
            animate={{ clipPath: hovered ? "circle(150% at 50% 50%)" : "circle(0% at 50% 50%)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            Hello!
        </motion.div>
    </div>
  );
};

export default ClipPathReveal;
import React from 'react';
import { motion } from 'framer-motion';

const InertiaDrag = () => {
  return (
    <div className="w-64 h-40 bg-slate-900 rounded-xl overflow-hidden border border-slate-700 relative flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center text-slate-600 text-xs pointer-events-none">
            Drag & Throw
        </div>
        <motion.div 
            className="w-16 h-16 bg-rose-500 rounded-xl shadow-lg cursor-grab active:cursor-grabbing z-10"
            drag
            dragConstraints={{ left: -80, right: 80, top: -40, bottom: 40 }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            whileTap={{ scale: 0.9 }}
        />
    </div>
  );
};

export default InertiaDrag;
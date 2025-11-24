import React from 'react';
import { motion } from 'framer-motion';

const BentoGrid = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-4 w-full max-w-md h-64">
        <motion.div 
            whileHover={{ scale: 0.98 }}
            className="col-span-2 row-span-2 bg-rose-500 rounded-2xl p-4 text-white flex flex-col justify-end shadow-lg cursor-pointer relative overflow-hidden group"
        >
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10" />
            <h3 className="font-bold text-lg z-20 relative">Main Feature</h3>
            <p className="text-sm opacity-80 z-20 relative">Dominant visual</p>
        </motion.div>
        <motion.div 
            whileHover={{ scale: 0.95 }}
            className="bg-emerald-500 rounded-2xl p-4 text-white flex flex-col justify-end shadow-lg cursor-pointer"
        >
            <div className="w-8 h-8 bg-white/20 rounded-full mb-2" />
        </motion.div>
        <motion.div 
            whileHover={{ scale: 0.95 }}
            className="bg-amber-500 rounded-2xl p-4 text-white flex flex-col justify-end shadow-lg cursor-pointer"
        >
             <div className="h-2 w-12 bg-white/30 rounded-full" />
        </motion.div>
    </div>
  );
};

export default BentoGrid;
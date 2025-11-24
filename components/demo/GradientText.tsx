import React from 'react';
import { motion } from 'framer-motion';

const GradientText = () => {
  return (
    <div className="text-center p-8 bg-slate-900 rounded-xl">
      <motion.h1 
        className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, backgroundPosition: ['0%', '200%'] }}
        transition={{ 
          y: { duration: 0.8, ease: "easeOut" },
          backgroundPosition: { duration: 3, repeat: Infinity, ease: "linear" }
        }}
        style={{ backgroundSize: '200%' }}
      >
        Unstoppable
      </motion.h1>
      <p className="mt-4 text-slate-400">Standard static text below for contrast.</p>
    </div>
  );
};

export default GradientText;
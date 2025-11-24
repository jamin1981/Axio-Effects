import React from 'react';
import { motion } from 'framer-motion';

const SplitScreen = () => {
  return (
    <div className="flex w-64 h-40 rounded-xl overflow-hidden border border-slate-700">
        <motion.div 
            className="flex-1 bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-indigo-600 hover:text-white hover:flex-[2] transition-all duration-500 cursor-pointer whitespace-nowrap"
        >
            Left
        </motion.div>
        <motion.div 
            className="flex-1 bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-purple-600 hover:text-white hover:flex-[2] transition-all duration-500 cursor-pointer whitespace-nowrap border-l border-slate-700"
        >
            Right
        </motion.div>
    </div>
  );
};

export default SplitScreen;
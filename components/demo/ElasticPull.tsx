import React from 'react';
import { motion } from 'framer-motion';

const ElasticPull = () => {
  return (
    <div className="w-56 h-64 bg-slate-900 rounded-xl overflow-hidden border border-slate-700 relative cursor-grab active:cursor-grabbing">
        <div className="absolute top-4 left-0 right-0 text-center text-xs text-slate-500 z-0">
            Release to snap
        </div>
        <motion.div 
            className="w-full h-full bg-slate-800 flex flex-col p-4 space-y-3 relative z-10"
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.2}
        >
            <div className="h-8 bg-slate-700 rounded w-full"/>
            <div className="h-8 bg-slate-700 rounded w-3/4"/>
            <div className="h-8 bg-slate-700 rounded w-5/6"/>
            <div className="h-8 bg-slate-700 rounded w-full"/>
        </motion.div>
    </div>
  );
};

export default ElasticPull;
import React from 'react';
import { motion } from 'framer-motion';

const items = ["React", "Tailwind", "Gemini", "TypeScript", "Framer", "NextJS", "Vite", "Node"];

const InfiniteMarquee = () => {
  return (
    <div className="w-full max-w-lg overflow-hidden bg-slate-800 py-6 border-y border-slate-700 relative">
       <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-slate-800 to-transparent z-10"></div>
       <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-800 to-transparent z-10"></div>
       
      <motion.div 
        className="flex space-x-12 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
      >
        {/* Duplicate list for seamless loop */}
        {[...items, ...items, ...items].map((item, idx) => (
          <span key={idx} className="text-2xl font-bold text-slate-400 uppercase tracking-widest">
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteMarquee;
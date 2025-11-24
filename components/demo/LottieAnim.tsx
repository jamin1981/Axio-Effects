import React from 'react';
import { motion } from 'framer-motion';

const LottieAnim = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-slate-900 rounded-xl border border-slate-700">
       <svg width="80" height="80" viewBox="0 0 100 100">
           <motion.path 
             d="M30 50 L45 65 L70 35"
             fill="transparent"
             stroke="#10b981"
             strokeWidth="8"
             strokeLinecap="round"
             initial={{ pathLength: 0, opacity: 0 }}
             animate={{ pathLength: 1, opacity: 1 }}
             transition={{ duration: 1, repeat: Infinity, repeatDelay: 1, ease: "easeInOut" }}
           />
           <motion.circle
             cx="50" cy="50" r="45"
             fill="transparent"
             stroke="#10b981"
             strokeWidth="4"
             initial={{ pathLength: 0, rotate: -90 }}
             animate={{ pathLength: 1, rotate: 270 }}
             transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5, ease: "easeInOut" }}
           />
       </svg>
    </div>
  );
};

export default LottieAnim;
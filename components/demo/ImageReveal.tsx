import React from 'react';
import { motion } from 'framer-motion';

const ImageReveal = () => {
  return (
    <div className="relative w-64 h-40 rounded-xl overflow-hidden bg-slate-800 shadow-lg group cursor-pointer">
       {/* Actual Content */}
       <img 
         src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop" 
         alt="Abstract" 
         className="w-full h-full object-cover"
       />
       <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
           <p className="text-white text-sm font-bold">Reveal Content</p>
       </div>

       {/* Curtain */}
       <motion.div 
         className="absolute inset-0 bg-slate-950 z-10 flex items-center justify-center"
         initial={{ y: "0%" }}
         whileHover={{ y: "-100%" }}
         transition={{ duration: 0.5, ease: "circInOut" }}
       >
           <span className="text-indigo-400 text-xs tracking-widest uppercase font-bold">Hover Me</span>
       </motion.div>
    </div>
  );
};

export default ImageReveal;
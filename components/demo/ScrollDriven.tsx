import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollDriven = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ container: ref });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.5, 1]);

  return (
    <div ref={ref} className="w-56 h-48 overflow-y-scroll bg-slate-900 rounded-xl border border-slate-700 relative no-scrollbar">
      <div className="h-[300%] flex flex-col items-center justify-center relative">
         <div className="sticky top-16">
             <motion.div 
                style={{ rotate, scale }}
                className="w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-lg shadow-lg"
             />
         </div>
      </div>
      <div className="absolute bottom-2 w-full text-center text-[10px] text-slate-500 pointer-events-none">Scroll Me</div>
    </div>
  );
};

export default ScrollDriven;
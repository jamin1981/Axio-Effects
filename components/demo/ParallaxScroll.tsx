import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const ParallaxScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  // Track scroll progress of the INNER scrollable element
  const { scrollYProgress } = useScroll({
    container: scrollRef,
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, mass: 1 });

  // Layer transforms - Distinct speeds for obvious depth
  const yBack = useTransform(smoothProgress, [0, 1], ["0%", "20%"]);
  const yMid = useTransform(smoothProgress, [0, 1], ["0%", "-15%"]);
  const yFore = useTransform(smoothProgress, [0, 1], ["0%", "-60%"]);
  const rotate = useTransform(smoothProgress, [0, 1], [0, 20]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div 
      className="relative w-full h-[400px] overflow-hidden rounded-xl bg-slate-950 border border-slate-800 group select-none"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
    >
      {/* Spotlight Effect */}
      <div 
        className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-500 mix-blend-screen"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.15), transparent 40%)`,
        }}
      />

      {/* Layer 0: Background - Deep Space (Moves slowly down) */}
      <motion.div 
        style={{ y: yBack }}
        className="absolute inset-0 h-[120%] -top-[10%] z-0"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black" />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </motion.div>

      {/* Layer 1: Midground - Shapes (Moves slightly up) */}
      <motion.div style={{ y: yMid }} className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center">
         <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-purple-600/10 rounded-full blur-3xl" />
         <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-indigo-600/10 rounded-full blur-3xl" />
         <motion.div 
            style={{ rotate }} 
            className="w-64 h-64 border border-white/5 rounded-full flex items-center justify-center"
         >
            <div className="w-48 h-48 border border-white/5 rounded-full" />
         </motion.div>
      </motion.div>

      {/* Layer 2: Static Content (The reference point) */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
         <div className="text-center transform translate-y-[-20px]">
             <h2 className="text-7xl font-black text-white tracking-tighter opacity-90 drop-shadow-2xl">DEPTH</h2>
             <div className="h-1 w-20 bg-indigo-500 mx-auto mt-4 rounded-full" />
         </div>
      </div>

      {/* Layer 3: Foreground - Floating Elements (Moves fast up) */}
      <motion.div style={{ y: yFore }} className="absolute inset-0 h-[150%] z-20 pointer-events-none">
          {/* Card 1 */}
          <div className="absolute top-[45%] left-[12%] w-20 h-20 bg-slate-800/90 backdrop-blur-md border border-slate-600 rounded-2xl shadow-2xl -rotate-12 flex items-center justify-center text-3xl">
              🚀
          </div>
          {/* Card 2 */}
          <div className="absolute top-[55%] right-[12%] w-32 h-40 bg-slate-800/90 backdrop-blur-md border border-slate-600 rounded-2xl shadow-2xl rotate-6 p-4 flex flex-col gap-2">
              <div className="w-full h-20 bg-indigo-500/20 rounded-lg mb-1 border border-indigo-500/30" />
              <div className="w-3/4 h-2 bg-slate-600 rounded-full" />
              <div className="w-1/2 h-2 bg-slate-700 rounded-full" />
          </div>
          {/* Blur Orb */}
          <div className="absolute top-[90%] left-[40%] w-16 h-16 bg-indigo-500 rounded-full shadow-lg blur-sm" />
      </motion.div>

      {/* Scrollable Controller (Invisible) */}
      <div 
        ref={scrollRef} 
        className="absolute inset-0 overflow-y-auto z-40 no-scrollbar scroll-smooth"
      >
        <div className="h-[200%] w-full"></div>
      </div>

      <div className="absolute bottom-4 left-0 right-0 text-center text-[10px] text-slate-500 z-50 pointer-events-none uppercase tracking-widest">
        Scroll to Move • Hover to Light
      </div>
    </div>
  );
};

export default ParallaxScroll;
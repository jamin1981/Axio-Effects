import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const Model3D = () => {
  const ref = useRef<HTMLDivElement>(null);

  // Mouse position state
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring animation for realistic weight
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  // Map mouse range (-0.5 to 0.5) to rotation degrees (-180 to 180)
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-180deg", "180deg"]);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["180deg", "-180deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Calculate percentage from center (-0.5 to 0.5)
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    // Reset to front facing when mouse leaves
    x.set(0);
    y.set(0);
  };

  return (
    <div 
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="perspective-1000 w-full h-full flex flex-col items-center justify-center min-h-[200px]"
      style={{ perspective: '1000px' }}
    >
       <motion.div 
         className="w-32 h-32 relative"
         style={{ 
           transformStyle: 'preserve-3d',
           rotateX,
           rotateY
         }}
       >
          {/* Face styles */}
          {/* Front */}
          <div className="absolute inset-0 border-2 border-indigo-500 bg-indigo-500/20 flex items-center justify-center backdrop-blur-sm" style={{ transform: 'translateZ(64px)' }}>
            <div className="text-white font-bold text-xs tracking-widest">FRONT</div>
          </div>
          
          {/* Back */}
          <div className="absolute inset-0 border-2 border-indigo-500 bg-indigo-500/20 flex items-center justify-center backdrop-blur-sm" style={{ transform: 'rotateY(180deg) translateZ(64px)' }}>
             <div className="text-white font-bold text-xs tracking-widest">BACK</div>
          </div>
          
          {/* Right */}
          <div className="absolute inset-0 border-2 border-indigo-500 bg-indigo-500/20 flex items-center justify-center backdrop-blur-sm" style={{ transform: 'rotateY(90deg) translateZ(64px)' }}>
             <div className="w-12 h-1 bg-indigo-400 rounded-full"></div>
          </div>
          
          {/* Left */}
          <div className="absolute inset-0 border-2 border-indigo-500 bg-indigo-500/20 flex items-center justify-center backdrop-blur-sm" style={{ transform: 'rotateY(-90deg) translateZ(64px)' }}>
             <div className="w-12 h-1 bg-indigo-400 rounded-full"></div>
          </div>
          
          {/* Top */}
          <div className="absolute inset-0 border-2 border-indigo-500 bg-indigo-500/20 flex items-center justify-center backdrop-blur-sm" style={{ transform: 'rotateX(90deg) translateZ(64px)' }}>
             <div className="w-8 h-8 border border-indigo-400 rounded-full"></div>
          </div>
          
          {/* Bottom */}
          <div className="absolute inset-0 border-2 border-indigo-500 bg-indigo-500/20 flex items-center justify-center backdrop-blur-sm" style={{ transform: 'rotateX(-90deg) translateZ(64px)' }}>
             <div className="text-indigo-300 text-[10px]">BOTTOM</div>
          </div>
       </motion.div>

       <div className="absolute bottom-2 text-center text-[10px] text-slate-500 select-none pointer-events-none">
            Interactive • Hover to Rotate
       </div>
    </div>
  );
};

export default Model3D;
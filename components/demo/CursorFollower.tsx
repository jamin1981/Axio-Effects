import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const CursorFollower = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div 
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative w-64 h-40 bg-slate-900 rounded-xl border border-slate-700 overflow-hidden cursor-none flex items-center justify-center"
    >
      <div className="text-slate-500 font-mono text-sm">Hover inside</div>
      
      {hovered && (
          <>
            <motion.div 
                className="absolute w-8 h-8 border border-indigo-400 rounded-full pointer-events-none z-20"
                animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
                transition={{ type: "spring", stiffness: 150, damping: 15 }}
            />
            <motion.div 
                className="absolute w-2 h-2 bg-indigo-400 rounded-full pointer-events-none z-20"
                animate={{ x: mousePosition.x - 4, y: mousePosition.y - 4 }}
                transition={{ type: "spring", stiffness: 500, damping: 28 }}
            />
          </>
      )}
    </div>
  );
};

export default CursorFollower;
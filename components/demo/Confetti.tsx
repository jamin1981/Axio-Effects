import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Confetti = () => {
  const [particles, setParticles] = useState<{id: number, x: number, y: number, c: string}[]>([]);

  const handleClick = () => {
    const colors = ['#6366f1', '#ec4899', '#10b981', '#f59e0b'];
    const newParticles = Array.from({ length: 20 }).map((_, i) => ({
        id: Date.now() + i,
        x: (Math.random() - 0.5) * 150,
        y: (Math.random() - 1) * 150,
        c: colors[Math.floor(Math.random() * colors.length)]
    }));
    setParticles(newParticles);
    setTimeout(() => setParticles([]), 1000);
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
        <button 
            onClick={handleClick}
            className="relative z-10 bg-white text-indigo-600 font-bold py-2 px-6 rounded-full shadow-lg active:scale-95 transition-transform"
        >
            Celebrate!
        </button>
        {particles.map(p => (
            <motion.div 
                key={p.id}
                className="absolute w-2 h-2 rounded-full"
                style={{ backgroundColor: p.c }}
                initial={{ x: 0, y: 0, opacity: 1 }}
                animate={{ x: p.x, y: p.y, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            />
        ))}
    </div>
  );
};

export default Confetti;
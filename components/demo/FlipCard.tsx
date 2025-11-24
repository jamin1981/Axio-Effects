import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="w-40 h-56 perspective-1000" onMouseEnter={() => setIsFlipped(true)} onMouseLeave={() => setIsFlipped(false)}>
        <motion.div 
            className="w-full h-full relative preserve-3d transition-all duration-500"
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            style={{ transformStyle: 'preserve-3d' }}
        >
            {/* Front */}
            <div className="absolute inset-0 bg-slate-800 rounded-xl border border-slate-600 flex flex-col items-center justify-center backface-hidden shadow-xl">
                <div className="text-4xl mb-2">🃏</div>
                <span className="text-sm text-slate-400 font-bold">Hover Me</span>
            </div>

            {/* Back */}
            <div 
                className="absolute inset-0 bg-indigo-600 rounded-xl flex flex-col items-center justify-center text-white backface-hidden shadow-xl"
                style={{ transform: 'rotateY(180deg)' }}
            >
                <h3 className="font-bold text-lg">Details</h3>
                <p className="text-xs opacity-80 px-2 text-center">Additional info revealed.</p>
            </div>
        </motion.div>
        <style>{`
            .perspective-1000 { perspective: 1000px; }
            .preserve-3d { transform-style: preserve-3d; }
            .backface-hidden { backface-visibility: hidden; }
        `}</style>
    </div>
  );
};

export default FlipCard;
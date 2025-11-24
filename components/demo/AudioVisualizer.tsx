import React from 'react';
import { motion } from 'framer-motion';

const AudioVisualizer = () => {
  return (
    <div className="flex items-center justify-center gap-1 h-32 w-full">
        {[...Array(10)].map((_, i) => (
            <motion.div 
                key={i}
                className="w-3 bg-indigo-500 rounded-full"
                animate={{ 
                    height: [20, Math.random() * 80 + 20, 20] 
                }}
                transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: i * 0.1
                }}
            />
        ))}
    </div>
  );
};

export default AudioVisualizer;
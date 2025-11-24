import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCount(prev => {
        if (prev >= 100) {
            setTimeout(() => setCount(0), 2000);
            return 100;
        }
        return prev + 1;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-40 w-full">
        <div className="text-6xl font-bold text-white font-mono">
            {count}%
        </div>
        <motion.div 
            className="w-48 h-1 bg-slate-800 mt-4 rounded-full overflow-hidden"
        >
            <motion.div 
                className="h-full bg-indigo-500"
                style={{ width: `${count}%` }}
            />
        </motion.div>
    </div>
  );
};

export default Preloader;
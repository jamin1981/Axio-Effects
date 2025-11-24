import React from 'react';
import { motion } from 'framer-motion';

const PathDrawing = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <svg width="100" height="100" viewBox="0 0 100 100">
        <motion.path
          d="M 20 50 L 40 70 L 80 30"
          fill="transparent"
          strokeWidth="8"
          stroke="#6366f1"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
        />
      </svg>
    </div>
  );
};

export default PathDrawing;
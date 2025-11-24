import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CYBERPUNK_CHARS = "01010101010101010101001";
const TARGET_TEXT = "SYSTEM ACCESS GRANTED";

const ScrambleText = () => {
  const [text, setText] = useState(TARGET_TEXT);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      setText(TARGET_TEXT);
      return;
    }

    let iteration = 0;
    const interval = window.setInterval(() => {
      setText(prev => 
        prev.split("").map((letter, index) => {
          if(index < iteration) {
            return TARGET_TEXT[index];
          }
          return CYBERPUNK_CHARS[Math.floor(Math.random() * 2)];
        }).join("")
      );
      
      if(iteration >= TARGET_TEXT.length){ 
        clearInterval(interval);
      }
      iteration += 1/2; 
    }, 30);
    
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <motion.div 
      className="p-4 border border-green-500/50 bg-black text-green-500 font-mono rounded cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ boxShadow: "0 0 15px rgba(34, 197, 94, 0.5)" }}
    >
      {text}
    </motion.div>
  );
};

export default ScrambleText;
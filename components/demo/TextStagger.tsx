import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const TextStagger = () => {
  const [key, setKey] = useState(0);
  
  useEffect(() => {
     const i = window.setInterval(() => setKey(k => k + 1), 3000);
     return () => clearInterval(i);
  }, []);

  const words = ["Build", "Better", "Digital", "Products"];

  return (
    <div className="bg-slate-900 p-6 rounded-xl w-64 flex flex-col justify-center items-start border border-slate-700">
       <motion.div key={key} initial="hidden" animate="visible" variants={{
           visible: { transition: { staggerChildren: 0.1 } }
       }}>
          {words.map((word, i) => (
              <div key={i} className="overflow-hidden h-8 mb-1">
                  <motion.div 
                    variants={{
                        hidden: { y: "100%" },
                        visible: { y: 0, transition: { ease: [0.22, 1, 0.36, 1], duration: 0.8 } }
                    }}
                    className="text-2xl font-bold text-white"
                  >
                      {word}
                  </motion.div>
              </div>
          ))}
       </motion.div>
    </div>
  );
};

export default TextStagger;
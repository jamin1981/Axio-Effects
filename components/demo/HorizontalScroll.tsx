import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HorizontalScroll = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ container: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <div ref={ref} className="w-64 h-40 overflow-y-scroll bg-slate-900 rounded-xl border border-slate-700 no-scrollbar relative">
       <div className="h-[300%] relative">
            <div className="sticky top-0 h-40 flex items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-4 px-4">
                    {[1,2,3,4,5].map(i => (
                        <div key={i} className="min-w-[100px] h-24 bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 rounded-lg flex items-center justify-center text-2xl font-bold text-slate-500">
                            {i}
                        </div>
                    ))}
                </motion.div>
            </div>
       </div>
       <div className="absolute bottom-2 right-2 text-[10px] text-slate-500 bg-black/50 px-2 rounded">Scroll Vertically</div>
    </div>
  );
};

export default HorizontalScroll;
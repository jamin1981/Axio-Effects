import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, MousePointerClick } from 'lucide-react';

const ViewTransition = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const items = [1, 2, 3];

  return (
    <div className="w-64 h-40 bg-slate-900 rounded-xl p-4 border border-slate-700 relative overflow-hidden">
      <div className="grid grid-cols-3 gap-3 h-full">
        {items.map(item => (
           <motion.div 
             key={item}
             layoutId={`item-${item}`}
             onClick={() => setSelectedId(item.toString())}
             className="group h-full bg-slate-800 rounded-lg cursor-pointer hover:bg-slate-700 border border-slate-700 hover:border-indigo-500 relative overflow-hidden transition-all flex flex-col items-center justify-center gap-2 shadow-sm hover:shadow-indigo-500/30"
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
           >
             <motion.div 
                className="bg-indigo-500/20 p-2 rounded-full"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
             >
                 <MousePointerClick size={16} className="text-indigo-400" />
             </motion.div>
             <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider group-hover:text-white transition-colors text-center leading-tight">
                 Tap Me
             </div>
           </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && (
           <motion.div 
             layoutId={`item-${selectedId}`}
             className="absolute inset-0 bg-indigo-600 z-20 flex flex-col items-center justify-center cursor-default p-6 text-center"
           >
              <button 
                onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                className="absolute top-2 right-2 p-1.5 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-white"
              >
                  <X size={14} />
              </button>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-2"
              >
                  <Maximize2 size={24} className="text-white/70 mx-auto" />
              </motion.div>

              <motion.h2 className="text-white font-bold text-xl mb-1">Expanded {selectedId}</motion.h2>
              <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 0.8 }} 
                className="text-indigo-100 text-xs leading-relaxed max-w-[160px]"
              >
                The context is preserved through the morphing transition.
              </motion.p>
              
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                className="mt-3 px-3 py-1 bg-white/20 text-white text-xs rounded-full hover:bg-white/30 transition-colors"
              >
                Close View
              </motion.button>
           </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ViewTransition;
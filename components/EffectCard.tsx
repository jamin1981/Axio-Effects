import React from 'react';
import { motion } from 'framer-motion';
import { Code, Maximize2, ThumbsUp } from 'lucide-react';
import { EffectItem } from '../types';
import DemoPreview from './DemoPreview';

interface Props {
  effect: EffectItem;
  onClick: (effect: EffectItem) => void;
  index: number;
  votes: number;
  onVote: (id: string) => void;
}

const EffectCard: React.FC<Props> = ({ effect, onClick, index, votes, onVote }) => {
  return (
    <motion.div
      layoutId={`card-${effect.id}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="group relative flex flex-col bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10"
    >
      {/* Preview Area */}
      <div className="relative h-64 w-full bg-slate-900/50 overflow-hidden border-b border-slate-800 flex items-center justify-center">
        {effect.implemented ? (
           <div className="absolute inset-0 p-4 flex items-center justify-center z-10">
              <DemoPreview id={effect.id} />
           </div>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900" />
            <div className="absolute inset-0 opacity-[0.03]" 
              style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} 
            />
             <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-slate-600 border border-slate-700 relative z-10">
               <span className="text-xs font-bold">WIP</span>
            </div>
          </>
        )}
        
        {/* Overlay Action for implemented cards */}
        {effect.implemented && (
            <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                 <button 
                    onClick={(e) => {
                        e.stopPropagation();
                        onClick(effect);
                    }}
                    className="p-2 bg-slate-900/80 backdrop-blur text-white rounded-full hover:bg-indigo-600 transition-colors border border-slate-700 hover:border-indigo-500"
                    title="Expand View"
                 >
                    <Maximize2 size={14} />
                 </button>
            </div>
        )}
      </div>

      {/* Content Footer */}
      <div 
        className="p-5 flex flex-col justify-between flex-1 cursor-pointer hover:bg-slate-800 transition-colors"
        onClick={() => onClick(effect)}
      >
        <div className="flex justify-between items-start mb-3">
          <div className="flex flex-col">
            <h3 className="text-lg font-bold text-slate-100 group-hover:text-indigo-300 transition-colors">
                {effect.title}
            </h3>
            <span className="text-xs text-indigo-400/80 font-mono mt-1">{effect.category}</span>
          </div>
          <span className="text-xs font-mono text-slate-600">0{index + 1}</span>
        </div>

        <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
            {effect.description}
        </p>
        
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-slate-700/50">
             <div className="flex gap-2">
                 {effect.tags.slice(0, 2).map(tag => (
                     <span key={tag} className="text-[10px] px-2 py-1 bg-slate-900 rounded-md text-slate-500 border border-slate-800">
                         #{tag}
                     </span>
                 ))}
             </div>
             
             <div className="flex items-center gap-3">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onVote(effect.id);
                  }}
                  className="flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-rose-400 transition-colors group/vote"
                >
                  <ThumbsUp size={14} className={votes > 0 ? "fill-rose-400 text-rose-400" : ""} />
                  <span className={votes > 0 ? "text-rose-400" : ""}>{votes}</span>
                </button>

                <div className="flex items-center gap-1 text-xs font-medium text-indigo-400 group-hover:text-indigo-300">
                  <Code size={12} />
                  <span>Code</span>
                </div>
             </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EffectCard;
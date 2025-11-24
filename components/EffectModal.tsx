import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Code, ExternalLink, Sparkles } from 'lucide-react';
import { EffectItem } from '../types';

import DemoPreview from './DemoPreview';

interface Props {
  effect: EffectItem;
  onClose: () => void;
}

const EffectModal: React.FC<Props> = ({ effect, onClose }) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');

  return createPortal(
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-5xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[85vh]"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-950 z-10">
            <div>
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                {effect.title}
                <span className="px-2 py-1 text-xs bg-indigo-500/20 text-indigo-300 rounded-full border border-indigo-500/20">
                  {effect.category}
                </span>
              </h2>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-slate-800 rounded-full text-slate-400 hover:text-white transition-colors">
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
            {/* Sidebar / Controls */}
            <div className="w-full md:w-72 bg-slate-950 p-6 border-r border-slate-800 flex flex-col gap-4 shrink-0 overflow-y-auto">
              <p className="text-slate-400 text-sm leading-relaxed">{effect.description}</p>

              <div className="flex flex-wrap gap-2 mt-2">
                {effect.tags.map(tag => (
                  <span key={tag} className="text-xs text-slate-500 bg-slate-900 px-2 py-1 rounded border border-slate-800">#{tag}</span>
                ))}
              </div>

              <hr className="border-slate-800 my-2" />

              <button
                onClick={() => setActiveTab('preview')}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-all ${activeTab === 'preview' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/20' : 'bg-slate-900 text-slate-400 hover:bg-slate-800'}`}
              >
                <ExternalLink size={16} />
                Live Preview
              </button>


            </div>

            {/* Main Content Area */}
            <div className="flex-1 bg-slate-900/50 p-6 md:p-10 flex items-center justify-center overflow-y-auto relative min-h-[400px]">
              {activeTab === 'preview' && (
                <div className="w-full h-full flex flex-col items-center justify-center">
                  <div className="flex-1 w-full flex items-center justify-center">
                    {effect.implemented ? (
                      <DemoPreview id={effect.id} />
                    ) : (
                      <div className="flex flex-col items-center text-center p-8 text-slate-500">
                        <div className="w-full h-48 bg-slate-800/50 rounded-xl flex items-center justify-center mb-4 animate-pulse">
                          <span className="text-4xl">🚧</span>
                        </div>
                        <p>Live preview not available for this specific effect in this demo.</p>
                        <p className="text-sm mt-2">Use the <strong>"Get Code"</strong> tab to generate the implementation via AI.</p>
                      </div>
                    )}
                  </div>
                </div>
              )}


            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  );
};

export default EffectModal;
import React, { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { EFFECTS_DATA } from './constants';
import { EffectCategory, EffectItem } from './types';
import EffectCard from './components/EffectCard';
import EffectModal from './components/EffectModal';

const App = () => {
  const [selectedEffect, setSelectedEffect] = useState<EffectItem | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<EffectCategory>(EffectCategory.ALL);
  
  // Voting State
  const [votes, setVotes] = useState<Record<string, number>>({});

  useEffect(() => {
    const savedVotes = localStorage.getItem('animatix_votes');
    if (savedVotes) {
        try {
            setVotes(JSON.parse(savedVotes));
        } catch (e) {
            console.error("Failed to parse votes", e);
        }
    }
  }, []);

  const handleVote = (id: string) => {
    setVotes(prev => {
        const newVotes = { ...prev, [id]: (prev[id] || 0) + 1 };
        localStorage.setItem('animatix_votes', JSON.stringify(newVotes));
        return newVotes;
    });
  };

  const filteredEffects = useMemo(() => {
    return EFFECTS_DATA.filter(effect => {
      const matchesCategory = categoryFilter === EffectCategory.ALL || effect.category === categoryFilter;
      return matchesCategory;
    });
  }, [categoryFilter]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500/30">
      
      {/* Navigation */}
      <nav className="sticky top-0 z-40 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
           {/* Logo removed as requested */}
           <div />
        </div>
      </nav>

      <main className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Hero Section */}
        <div className="text-center mb-20 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />
            
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                Axiologik Web <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Effects</span>
                </h1>
            </motion.div>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12 sticky top-20 z-30 py-4 bg-slate-950/50 backdrop-blur-xl rounded-2xl border border-slate-800/50 px-6">
            <div className="flex overflow-x-auto pb-2 md:pb-0 gap-2 w-full md:w-auto no-scrollbar justify-center">
                {Object.values(EffectCategory)
                .filter(cat => cat !== EffectCategory.ALL)
                .map((cat) => (
                <button
                    key={cat}
                    onClick={() => setCategoryFilter(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    categoryFilter === cat 
                        ? 'bg-white text-slate-900 shadow-lg' 
                        : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
                    }`}
                >
                    {cat}
                </button>
                ))}
            </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-24">
            {filteredEffects.map((effect, idx) => (
                <EffectCard 
                key={effect.id} 
                effect={effect} 
                index={idx}
                onClick={setSelectedEffect} 
                votes={votes[effect.id] || 0}
                onVote={handleVote}
                />
            ))}
        </div>

        {filteredEffects.length === 0 && (
            <div className="text-center py-20">
                <p className="text-slate-500 text-lg">No effects found matching your criteria.</p>
                <button 
                onClick={() => {setCategoryFilter(EffectCategory.ALL);}}
                className="mt-4 text-indigo-400 hover:text-indigo-300 underline"
                >
                Clear filters
                </button>
            </div>
        )}

        {/* Footer */}
        <footer className="mt-32 border-t border-slate-800 pt-8 pb-12 text-center text-slate-500 text-sm">
          <p>© 2025 Axiologik. Powered by React, Tailwind & Gemini.</p>
        </footer>

      </main>

      {/* Modal */}
      {selectedEffect && (
        <EffectModal 
          effect={selectedEffect} 
          onClose={() => setSelectedEffect(null)} 
        />
      )}
    </div>
  );
};

export default App;
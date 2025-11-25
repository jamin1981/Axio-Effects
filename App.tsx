import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { EFFECTS_DATA } from './constants';
import { EffectCategory, EffectItem } from './types';
import EffectCard from './components/EffectCard';
import EffectModal from './components/EffectModal';

const App = () => {
  const [selectedEffect, setSelectedEffect] = useState<EffectItem | null>(null);
  const [activeSection, setActiveSection] = useState<string>('');
  
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

  // Scroll Spy to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const categories = Object.values(EffectCategory).filter(c => c !== EffectCategory.ALL);
      let current = '';
      
      for (const cat of categories) {
        const section = document.getElementById(cat);
        if (section) {
          const rect = section.getBoundingClientRect();
          // If top of section is within the top half of the viewport
          if (rect.top <= 300 && rect.bottom >= 300) {
            current = cat;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleVote = (id: string) => {
    setVotes(prev => {
        const newVotes = { ...prev, [id]: (prev[id] || 0) + 1 };
        localStorage.setItem('animatix_votes', JSON.stringify(newVotes));
        return newVotes;
    });
  };

  const scrollToSection = (category: string) => {
    const element = document.getElementById(category);
    if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY - 140; // Offset for sticky header
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const categories = Object.values(EffectCategory).filter(cat => cat !== EffectCategory.ALL);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500/30">
      
      {/* Navigation */}
      <nav className="sticky top-0 z-40 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
           {/* Logo placeholder */}
           <div className="font-bold text-xl tracking-tighter text-indigo-400">AXIOLOGIK</div>
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

        {/* Sticky Navigation / TOC */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-16 sticky top-20 z-30 py-4 bg-slate-950/80 backdrop-blur-xl rounded-2xl border border-slate-800/50 px-6 shadow-2xl shadow-black/50">
            <div className="flex overflow-x-auto pb-2 md:pb-0 gap-2 w-full md:w-auto no-scrollbar justify-center">
                {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => scrollToSection(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                    activeSection === cat 
                        ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25 scale-105' 
                        : 'bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-white border border-slate-800'
                    }`}
                >
                    {cat}
                </button>
                ))}
            </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-32 mb-24">
            {categories.map((cat) => {
                const categoryEffects = EFFECTS_DATA.filter(e => e.category === cat);
                if (categoryEffects.length === 0) return null;

                return (
                    <section key={cat} id={cat} className="scroll-mt-40">
                         <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="flex items-center gap-4 mb-12"
                         >
                            <h2 className="text-3xl md:text-4xl font-bold text-white whitespace-nowrap">
                                {cat}
                            </h2>
                            <div className="h-px w-full bg-gradient-to-r from-indigo-500/50 to-transparent mt-2"></div>
                         </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                            {categoryEffects.map((effect, idx) => (
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
                    </section>
                );
            })}
        </div>

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
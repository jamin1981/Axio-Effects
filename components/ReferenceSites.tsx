import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Monitor, Smartphone, AlertTriangle, ArrowRight, Menu, Search, ChevronRight } from 'lucide-react';

const SITES = [
  { name: 'Accenture', url: 'https://www.accenture.com', desc: 'Modern corporate consulting aesthetics.' },
  { name: 'Apple', url: 'https://www.apple.com', desc: 'The gold standard for scroll animations.' },
  { name: 'Stripe', url: 'https://stripe.com', desc: 'Complex gradients and micro-interactions.' },
  { name: 'Awwwards', url: 'https://www.awwwards.com', desc: 'Award-winning experimental designs.' },
  { name: 'Linear', url: 'https://linear.app', desc: 'Dark mode, glow effects, and performance.' }
];

// A visual recreation of the Accenture Homepage aesthetic
const AccentureClone = () => {
  return (
    <div className="w-full h-full bg-black text-white font-sans overflow-y-auto selection:bg-[#a100ff] selection:text-white relative">
      {/* Mock Navigation */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 bg-black/90 backdrop-blur-sm border-b border-white/10">
        <div className="flex items-center gap-8">
            <div className="text-2xl font-bold tracking-tighter flex items-center">
                accenture 
                <span className="text-[#a100ff] ml-1 text-3xl leading-none mb-1">{' >'}</span>
            </div>
            <div className="hidden lg:flex items-center gap-6 text-sm font-bold">
                <span className="cursor-pointer hover:text-[#a100ff] transition-colors">Insights</span>
                <span className="cursor-pointer hover:text-[#a100ff] transition-colors">Services</span>
                <span className="cursor-pointer hover:text-[#a100ff] transition-colors">Industries</span>
                <span className="cursor-pointer hover:text-[#a100ff] transition-colors">Careers</span>
                <span className="cursor-pointer hover:text-[#a100ff] transition-colors">About</span>
            </div>
        </div>
        <div className="flex items-center gap-6">
            <Search size={20} className="cursor-pointer" />
            <Menu size={24} className="cursor-pointer lg:hidden" />
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative min-h-[600px] flex flex-col justify-center px-6 md:px-12 overflow-hidden">
        {/* Abstract Background Gradient */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-[#460073] via-[#1a002b] to-black transform skew-x-12 translate-x-20 z-0 opacity-80"></div>
        
        <div className="relative z-10 max-w-4xl mt-12">
            <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight mb-8"
            >
                Reinventing business with <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#a100ff] to-purple-400">generative AI.</span>
            </motion.h1>
            
            <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl text-slate-300 max-w-2xl mb-10"
            >
                Move from interest to value. We help you create a roadmap for total enterprise reinvention.
            </motion.p>

            <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="group flex items-center gap-3 px-8 py-4 bg-[#a100ff] hover:bg-[#8500d1] text-white font-bold text-lg transition-all"
            >
                Read the Report 
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
        </div>
      </div>

      {/* 3-Column Grid Section */}
      <div className="bg-white text-black py-20 px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-8">
            {[
                { title: "Total Enterprise Reinvention", desc: "Setting a new performance frontier for your industry." },
                { title: "Talent & Organization", desc: "Accessing the talent you need to unlock value." },
                { title: "Sustainable Value", desc: "Embed sustainability into everything you do." }
            ].map((item, i) => (
                <div key={i} className="group cursor-pointer">
                    <div className="h-64 bg-slate-100 mb-6 overflow-hidden relative">
                         {/* Placeholder Image Effect */}
                         <div className="absolute inset-0 bg-slate-200 group-hover:scale-105 transition-transform duration-700" />
                         <div className="absolute bottom-0 left-0 p-6">
                             <div className="w-12 h-12 bg-[#a100ff] flex items-center justify-center text-white">
                                 <ChevronRight size={24} />
                             </div>
                         </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-[#a100ff] transition-colors flex items-center gap-2">
                        {item.title}
                    </h3>
                    <p className="text-slate-600 text-lg leading-relaxed">{item.desc}</p>
                </div>
            ))}
        </div>
      </div>

      {/* Dark Section */}
      <div className="bg-[#121212] py-24 px-6 md:px-12 flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
                <h2 className="text-4xl md:text-6xl font-bold mb-6">Let there be change.</h2>
                <p className="text-slate-400 text-lg max-w-md mb-8">
                    360° Value is about delivering the financial business case and beyond.
                </p>
                <div className="flex flex-wrap gap-3">
                    {['Cloud', 'Security', 'Data & AI', 'Metaverse'].map(tag => (
                        <span key={tag} className="px-4 py-2 border border-white/30 rounded-full text-sm hover:bg-white hover:text-black transition-colors cursor-pointer">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            <div className="flex-1 w-full h-[400px] bg-gradient-to-br from-[#300052] to-black relative overflow-hidden">
                {/* Abstract 3D Shape Simulation */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-[20px] border-[#a100ff] rounded-full opacity-50 blur-xl"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-[20px] border-white rounded-full opacity-20"></div>
            </div>
      </div>

       {/* Footer */}
       <div className="bg-black border-t border-white/10 py-12 px-6 md:px-12 text-xs text-slate-500">
           <div className="flex flex-wrap gap-8 mb-8 font-bold text-white">
               <span>Privacy Statement</span>
               <span>Terms & Conditions</span>
               <span>Cookie Policy</span>
               <span>Accessibility Statement</span>
           </div>
           <p>© 2025 Accenture. All rights reserved.</p>
       </div>
    </div>
  );
};

const ReferenceSites = () => {
  const [currentSite, setCurrentSite] = useState(SITES[0]);
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile'>('desktop');

  return (
    <div className="flex flex-col h-[800px] bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
      {/* Browser Chrome */}
      <div className="bg-slate-950 p-4 border-b border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4 w-full sm:w-auto overflow-x-auto no-scrollbar">
          {SITES.map((site) => (
            <button
              key={site.name}
              onClick={() => setCurrentSite(site)}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                currentSite.name === site.name 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {site.name}
            </button>
          ))}
        </div>
        
        <div className="flex items-center gap-2 bg-slate-900 p-1 rounded-lg border border-slate-800">
           <button 
             onClick={() => setDeviceMode('desktop')}
             className={`p-2 rounded ${deviceMode === 'desktop' ? 'bg-slate-800 text-indigo-400' : 'text-slate-500'}`}
           >
             <Monitor size={16} />
           </button>
           <button 
             onClick={() => setDeviceMode('mobile')}
             className={`p-2 rounded ${deviceMode === 'mobile' ? 'bg-slate-800 text-indigo-400' : 'text-slate-500'}`}
           >
             <Smartphone size={16} />
           </button>
        </div>
      </div>

      {/* URL Bar */}
      <div className="bg-slate-900 px-4 py-2 border-b border-slate-800 flex items-center gap-2 text-xs text-slate-500">
        <div className="w-full bg-slate-950 rounded px-3 py-2 flex items-center justify-between">
            <span className="truncate">{currentSite.url}</span>
            {currentSite.name !== 'Accenture' && (
                <a href={currentSite.url} target="_blank" rel="noreferrer" className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1">
                    Open <ExternalLink size={10} />
                </a>
            )}
        </div>
      </div>

      {/* Viewport */}
      <div className="flex-1 bg-slate-200 relative overflow-hidden flex justify-center">
        <motion.div 
            layout
            className={`bg-white shadow-2xl transition-all duration-500 h-full ${deviceMode === 'desktop' ? 'w-full' : 'w-[375px] my-4 rounded-[30px] border-8 border-slate-800 overflow-hidden'}`}
        >
            {currentSite.name === 'Accenture' ? (
                <AccentureClone />
            ) : (
                <div className="relative w-full h-full flex flex-col items-center justify-center p-8 text-center bg-slate-50 text-slate-800">
                    <div className="w-20 h-20 bg-slate-200 rounded-full flex items-center justify-center mb-6">
                        <ExternalLink size={32} className="text-slate-400" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-slate-900">External Content Security</h3>
                    <p className="max-w-md text-slate-600 mb-8">
                        <strong>{currentSite.name}</strong> blocks being embedded. 
                        <br/>
                        For Accenture, click the tab to see a recreation. For others, please open externally.
                    </p>
                    
                    <a 
                        href={currentSite.url} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-full font-bold shadow-lg hover:bg-indigo-700 hover:scale-105 transition-all"
                    >
                        Launch {currentSite.name} <ArrowRight size={18} />
                    </a>
                </div>
            )}
        </motion.div>
      </div>
    </div>
  );
};

export default ReferenceSites;
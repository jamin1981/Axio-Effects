import React from 'react';

const MorphingBlobs = () => {
  return (
    <div className="w-48 h-48 relative flex items-center justify-center bg-slate-900 rounded-xl overflow-hidden">
       <div className="absolute inset-0 blur-2xl opacity-50">
            <div className="absolute top-4 left-4 w-24 h-24 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
            <div className="absolute top-4 right-4 w-24 h-24 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-12 w-24 h-24 bg-pink-600 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
       </div>
       <span className="relative z-10 font-bold text-white text-xl">Morph</span>
       <style>{`
        @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(20px, -30px) scale(1.1); }
            66% { transform: translate(-10px, 10px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
            animation: blob 7s infinite;
        }
        .animation-delay-2000 {
            animation-delay: 2s;
        }
        .animation-delay-4000 {
            animation-delay: 4s;
        }
       `}</style>
    </div>
  );
};

export default MorphingBlobs;
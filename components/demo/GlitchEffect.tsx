import React from 'react';

const GlitchEffect = () => {
  return (
    <div className="bg-black p-8 rounded-xl">
      <h1 className="glitch text-4xl font-bold text-white uppercase tracking-widest relative" data-text="GLITCH">
        GLITCH
      </h1>
      <style>{`
        .glitch {
          position: relative;
        }
        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .glitch::before {
          left: 2px;
          text-shadow: -1px 0 #ff00c1;
          clip: rect(44px, 450px, 56px, 0);
          animation: glitch-anim 5s infinite linear alternate-reverse;
        }
        .glitch::after {
          left: -2px;
          text-shadow: -1px 0 #00fff9;
          clip: rect(44px, 450px, 56px, 0);
          animation: glitch-anim2 5s infinite linear alternate-reverse;
        }
        @keyframes glitch-anim {
          0% { clip: rect(34px, 9999px, 11px, 0); }
          20% { clip: rect(78px, 9999px, 87px, 0); }
          40% { clip: rect(12px, 9999px, 54px, 0); }
          60% { clip: rect(65px, 9999px, 3px, 0); }
          80% { clip: rect(90px, 9999px, 23px, 0); }
          100% { clip: rect(4px, 9999px, 67px, 0); }
        }
        @keyframes glitch-anim2 {
          0% { clip: rect(12px, 9999px, 93px, 0); }
          20% { clip: rect(54px, 9999px, 2px, 0); }
          40% { clip: rect(87px, 9999px, 34px, 0); }
          60% { clip: rect(3px, 9999px, 76px, 0); }
          80% { clip: rect(5px, 9999px, 21px, 0); }
          100% { clip: rect(99px, 9999px, 43px, 0); }
        }
      `}</style>
    </div>
  );
};

export default GlitchEffect;
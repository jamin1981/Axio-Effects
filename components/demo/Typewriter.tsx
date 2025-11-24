import React, { useState, useEffect } from 'react';

const Typewriter = () => {
  const text = "Constantly shipping...";
  const [display, setDisplay] = useState("");
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const typing = window.setInterval(() => {
      setDisplay(text.substring(0, i + 1));
      i++;
      if (i === text.length) {
        clearInterval(typing);
        setTimeout(() => {
            setDisplay("");
            i = 0;
        }, 2000); // Loop delay
      }
    }, 100);

    const blinking = window.setInterval(() => setCursor(c => !c), 500);

    return () => {
      clearInterval(typing);
      clearInterval(blinking);
    };
  }, []);

  return (
    <div className="font-mono text-lg text-slate-200 bg-slate-900 px-6 py-4 rounded-lg border border-slate-700">
      {display}
      <span className={`${cursor ? 'opacity-100' : 'opacity-0'} text-indigo-400 font-bold`}>|</span>
    </div>
  );
};

export default Typewriter;
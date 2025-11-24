import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

// Reduced rotation for subtle effect
const ROTATION_RANGE = 10; 
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const TiltCard = () => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-64 w-56 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 shadow-2xl"
    >
      <div
        style={{
          transform: "translateZ(40px)", // Reduced depth
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-slate-950/50 backdrop-blur-sm shadow-inner"
      >
        <div className="text-center">
            <span className="text-4xl opacity-80">✨</span>
            <p className="mt-4 font-medium text-slate-300 text-sm tracking-widest uppercase">Subtle</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TiltCard;
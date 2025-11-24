import React from 'react';

const RippleButton = () => {
  const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    const rect = button.getBoundingClientRect();
    
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - rect.left - radius}px`;
    circle.style.top = `${event.clientY - rect.top - radius}px`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];
    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  };

  return (
    <div className="flex items-center justify-center h-full">
        <button 
            className="relative overflow-hidden bg-emerald-500 text-white px-8 py-3 rounded-lg font-medium shadow-lg transition-transform active:scale-95"
            onClick={createRipple}
        >
            Click Me
        </button>
        <style>{`
            span.ripple {
                position: absolute;
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 600ms linear;
                background-color: rgba(255, 255, 255, 0.5);
                pointer-events: none;
            }
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `}</style>
    </div>
  );
};

export default RippleButton;
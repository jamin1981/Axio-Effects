import React from 'react';

const VideoMask = () => {
  return (
    <div className="relative w-full h-full bg-black rounded-xl overflow-hidden flex items-center justify-center group select-none">
      {/* 
         Robust Video Masking using Mix-Blend-Mode:
         1. Bottom layer: White Text on Black Background.
         2. Top layer: The Video with `mix-blend-mode: multiply`.
         
         Logic:
         - Video (Color) x White (1) = Video Color.
         - Video (Color) x Black (0) = Black.
         This effectively "crops" the video to the white text area.
      */}
      
      {/* 1. Base Text Layer (The "Mask") */}
      <div className="absolute inset-0 flex items-center justify-center z-0 bg-black">
        <h1 
            className="text-[clamp(3rem,15vw,8rem)] font-black text-white tracking-tighter leading-none"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
            HERO
        </h1>
      </div>

      {/* 2. Video Layer (The Fill) */}
      <div className="absolute inset-0 z-10 mix-blend-multiply pointer-events-none">
         <video 
            className="w-full h-full object-cover"
            autoPlay 
            muted 
            loop 
            playsInline
            poster="https://cdn.coverr.co/poster/coverr-neon-lines-loop-4496.jpg"
        >
            <source src="https://cdn.coverr.co/videos/coverr-neon-lines-loop-4496/1080p.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="absolute bottom-3 text-white/40 text-[10px] uppercase tracking-widest font-medium z-20 pointer-events-none">
        Cinematic Blend
      </div>
    </div>
  );
};

export default VideoMask;
import React, { useState, useRef, useEffect } from 'react';
import { 
  Layout, 
  Upload, 
  Image as ImageIcon, 
  ArrowRight, 
  Video, 
  SlidersHorizontal, 
  Zap, 
  Search, 
  Sparkles, 
  ScanLine, 
  Lightbulb, 
  RefreshCw,
  X 
} from 'lucide-react';

// -----------------------------------------------------------------------------
// TYPES
// -----------------------------------------------------------------------------

export enum TransitionMode {
  SLIDER = 'Slider',
  FADE = 'Fade',
  MAGNIFIER = 'Magnifier',
  REVEAL = 'Reveal',
  SPOTLIGHT = 'Spotlight',
  SCANNER = 'Scanner'
}

export interface ImageState {
  before: string | null;
  after: string | null;
}

// -----------------------------------------------------------------------------
// UTILS / STYLES
// -----------------------------------------------------------------------------

const checkerboardStyle: React.CSSProperties = {
  backgroundColor: '#18181b',
  backgroundImage: `
    linear-gradient(45deg, #27272a 25%, transparent 25%),
    linear-gradient(-45deg, #27272a 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #27272a 75%),
    linear-gradient(-45deg, transparent 75%, #27272a 75%)
  `,
  backgroundSize: '20px 20px',
  backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
};

// -----------------------------------------------------------------------------
// COMPONENT: Button
// -----------------------------------------------------------------------------

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'icon';
  active?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  active = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/20 px-4 py-2",
    secondary: "bg-zinc-800 hover:bg-zinc-700 text-zinc-100 border border-zinc-700 px-4 py-2",
    ghost: "hover:bg-zinc-800 text-zinc-400 hover:text-white px-3 py-1.5",
    icon: "p-2 hover:bg-zinc-800 text-zinc-400 hover:text-white rounded-md"
  };

  const activeStyles = active ? "bg-indigo-600/20 text-indigo-400 border-indigo-500/50" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${activeStyles} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

// -----------------------------------------------------------------------------
// COMPONENT: ImageUploader
// -----------------------------------------------------------------------------

interface ImageUploaderProps {
  onUpload: (file: File, type: 'before' | 'after') => void;
  images: { before: string | null; after: string | null };
  index?: number;
  defaultBefore?: string;
  defaultAfter?: string;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ 
  onUpload, 
  images, 
  index = 0,
  defaultBefore,
  defaultAfter
}) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'before' | 'after') => {
    if (e.target.files && e.target.files[0]) {
      onUpload(e.target.files[0], type);
    }
  };

  const getMimeType = (filename: string) => {
    if (filename.endsWith('.mp4')) return 'video/mp4';
    if (filename.endsWith('.webm')) return 'video/webm';
    if (filename.endsWith('.png')) return 'image/png';
    if (filename.endsWith('.jpg') || filename.endsWith('.jpeg')) return 'image/jpeg';
    return '';
  };

  const loadDemoImages = async () => {
    try {
        if (defaultBefore) {
            const res1 = await fetch(defaultBefore);
            const blob1 = await res1.blob();
            const type1 = getMimeType(defaultBefore) || blob1.type;
            onUpload(new File([blob1], "demo1", { type: type1 }), 'before');
        } else {
            // Fallback
            const idOffset = index * 10;
            const res1 = await fetch(`https://picsum.photos/id/${237 + idOffset}/800/600`);
            const blob1 = await res1.blob();
            onUpload(new File([blob1], "demo1.jpg", { type: "image/jpeg" }), 'before');
        }

        if (defaultAfter) {
            const res2 = await fetch(defaultAfter);
            const blob2 = await res2.blob();
            const type2 = getMimeType(defaultAfter) || blob2.type;
            onUpload(new File([blob2], "demo2", { type: type2 }), 'after');
        } else {
            // Fallback
            const idOffset = index * 10;
            const res2 = await fetch(`https://picsum.photos/id/${238 + idOffset}/800/600`);
            const blob2 = await res2.blob();
            onUpload(new File([blob2], "demo2.jpg", { type: "image/jpeg" }), 'after');
        }
    } catch (e) {
        console.error("Failed to load demo images", e);
    }
  };

  const isVideo = (src: string | null) => {
    if (!src) return false;
    return src.startsWith('data:video') || src.endsWith('.mp4') || src.endsWith('.webm');
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 text-center space-y-6 animate-fade-in bg-zinc-950/20 rounded-xl border border-dashed border-zinc-800">
      <div className="space-y-2">
        <p className="text-zinc-400 font-medium">
          Select assets for comparison
        </p>
        <p className="text-xs text-zinc-500">
            Image 1: Images only. Image 2: Images or MP4 Video (Muted).
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-center">
        {/* Before Upload */}
        <div className="relative group w-full">
            <div className={`aspect-video rounded-xl border-2 border-dashed flex flex-col items-center justify-center transition-all overflow-hidden ${images.before ? 'border-indigo-500 bg-zinc-900/50' : 'border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800/30'}`}>
                {images.before ? (
                    <img src={images.before} alt="Before" className="w-full h-full object-cover" crossOrigin="anonymous" />
                ) : (
                    <div className="space-y-2">
                        <ImageIcon className="w-8 h-8 mx-auto text-zinc-500" />
                        <span className="text-sm text-zinc-400">Image 1</span>
                    </div>
                )}
                 <input 
                    type="file" 
                    accept="image/*"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    onChange={(e) => handleFileChange(e, 'before')}
                />
            </div>
        </div>

        {/* Arrow / Action */}
        <div className="flex flex-col items-center justify-center space-y-2">
            <div className="hidden md:block p-2 rounded-full bg-zinc-800 text-zinc-400">
                <ArrowRight className="w-4 h-4" />
            </div>
            <Button onClick={loadDemoImages} variant="ghost" className="text-xs whitespace-nowrap">
                Load Demo
            </Button>
        </div>

        {/* After Upload (Supports Video) */}
        <div className="relative group w-full">
            <div className={`aspect-video rounded-xl border-2 border-dashed flex flex-col items-center justify-center transition-all overflow-hidden ${images.after ? 'border-indigo-500 bg-zinc-900/50' : 'border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800/30'}`}>
                {images.after ? (
                    isVideo(images.after) ? (
                        <video 
                            src={images.after} 
                            className="w-full h-full object-cover" 
                            autoPlay 
                            muted 
                            loop 
                            playsInline 
                            crossOrigin="anonymous"
                        />
                    ) : (
                        <img src={images.after} alt="After" className="w-full h-full object-cover" crossOrigin="anonymous" />
                    )
                ) : (
                    <div className="space-y-2">
                        <div className="flex justify-center gap-2">
                            <Upload className="w-8 h-8 text-zinc-500" />
                            <Video className="w-8 h-8 text-zinc-500" />
                        </div>
                        <span className="text-sm text-zinc-400">Image 2 or Video</span>
                    </div>
                )}
                 <input 
                    type="file" 
                    accept="image/*,video/mp4,video/webm,video/quicktime"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    onChange={(e) => handleFileChange(e, 'after')}
                />
            </div>
        </div>
      </div>
    </div>
  );
};

// -----------------------------------------------------------------------------
// COMPONENT: TransitionStage
// -----------------------------------------------------------------------------

interface TransitionStageProps {
  beforeSrc: string;
  afterSrc: string;
  mode: TransitionMode;
  progress: number; // 0 to 100
  containerRef: React.RefObject<HTMLDivElement | null>;
}

const TransitionStage: React.FC<TransitionStageProps> = ({
  beforeSrc,
  afterSrc,
  mode,
  progress,
  containerRef
}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Normalize progress 0-1
  const p = progress / 100;

  // Determine if afterSrc is video
  const isVideo = afterSrc.startsWith('data:video') || afterSrc.endsWith('.mp4') || afterSrc.endsWith('.webm');

  // Helper to draw image with object-cover behavior
  const drawImageCover = (ctx: CanvasRenderingContext2D, img: HTMLImageElement, w: number, h: number) => {
    const hRatio = w / img.width;
    const vRatio = h / img.height;
    const ratio = Math.max(hRatio, vRatio);
    const centerShift_x = (w - img.width * ratio) / 2;
    const centerShift_y = (h - img.height * ratio) / 2;
    ctx.clearRect(0,0, w, h);
    ctx.drawImage(img, 0, 0, img.width, img.height, centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
  };

  // Initialize Canvas for Reveal Mode
  useEffect(() => {
    if (mode === TransitionMode.REVEAL && canvasRef.current && containerRef.current) {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const rect = containerRef.current.getBoundingClientRect();
        
        // Match canvas resolution to display size
        canvas.width = rect.width;
        canvas.height = rect.height;

        if (ctx) {
            const img = new Image();
            img.crossOrigin = "Anonymous"; // Allow CORS for GitHub raw images
            img.src = beforeSrc;
            img.onload = () => {
                drawImageCover(ctx, img, canvas.width, canvas.height);
            };
        }
    }
  }, [mode, beforeSrc, containerRef]); 

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePos({ x, y });

    // Handle Paint Reveal Logic
    if (mode === TransitionMode.REVEAL && canvasRef.current) {
        const ctx = canvasRef.current.getContext('2d');
        if (ctx) {
            ctx.globalCompositeOperation = 'destination-out';
            const radius = 120; // Brush size
            
            // Create a soft brush effect
            const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
            gradient.addColorStop(0, 'rgba(0,0,0,1)');
            gradient.addColorStop(0.5, 'rgba(0,0,0,1)');
            gradient.addColorStop(1, 'rgba(0,0,0,0)');
            
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, Math.PI * 2);
            ctx.fill();
            
            // Reset composite operation
            ctx.globalCompositeOperation = 'source-over';
        }
    }
  };

  // Helper to render styles based on mode
  const getRevealStyle = () => {
    switch (mode) {
      case TransitionMode.SLIDER:
        return {
          clipPath: `inset(0 ${100 - progress}% 0 0)`,
        };
      
      case TransitionMode.FADE:
        return {
          opacity: p,
        };

      case TransitionMode.MAGNIFIER:
        const mx = isHovering ? mousePos.x : '50%';
        const my = isHovering ? mousePos.y : '50%';
        const xVal = typeof mx === 'number' ? `${mx}px` : mx;
        const yVal = typeof my === 'number' ? `${my}px` : my;
        
        return {
          clipPath: `circle(100px at ${xVal} ${yVal})`,
          transform: 'scale(1.2)',
          transformOrigin: `${xVal} ${yVal}`,
        };

      case TransitionMode.SPOTLIGHT:
         const sx = isHovering ? mousePos.x : '50%';
         const sy = isHovering ? mousePos.y : '50%';
         const sxVal = typeof sx === 'number' ? `${sx}px` : sx;
         const syVal = typeof sy === 'number' ? `${sy}px` : sy;
         return {
            maskImage: `radial-gradient(circle 250px at ${sxVal} ${syVal}, black 20%, transparent 70%)`,
            WebkitMaskImage: `radial-gradient(circle 250px at ${sxVal} ${syVal}, black 20%, transparent 70%)`,
         };

      case TransitionMode.SCANNER:
        return {
             clipPath: `inset(0 0 ${100 - progress}% 0)`
        };

      default:
        return {};
    }
  };

  const renderAfterAsset = (className: string) => {
      if (isVideo) {
          return (
            <video 
                src={afterSrc} 
                className={className} 
                autoPlay 
                muted 
                loop 
                playsInline
                crossOrigin="anonymous"
            />
          );
      }
      return (
        <img 
            src={afterSrc} 
            alt="After" 
            className={className} 
            crossOrigin="anonymous"
        />
      );
  };

  return (
    <div 
        className="relative w-full h-full overflow-hidden select-none group shadow-2xl rounded-lg"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
    >
      {/* 
         BASE LAYER LOGIC:
         - Standard modes: Before Image is base. After Image/Video is revealed on top.
         - REVEAL mode: After Image/Video is base. Canvas (with Before Image) is on top and erased.
      */}

      {mode === TransitionMode.REVEAL ? (
          <>
            {/* Base: After Image (The one being revealed) */}
            {renderAfterAsset("absolute inset-0 w-full h-full object-cover select-none pointer-events-none")}
            
            {/* Top: Canvas (The scratch layer with Before Image) */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full z-20 cursor-crosshair"
            />
          </>
      ) : (
          <>
            {/* Base: Before Image */}
            <img 
                src={beforeSrc} 
                alt="Before" 
                className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none" 
                crossOrigin="anonymous"
            />

            {/* Top: After Image (Revealed by CSS styles) */}
            <div 
                className="absolute inset-0 w-full h-full overflow-hidden transition-all duration-75 ease-out will-change-[clip-path,opacity,transform]"
                style={getRevealStyle()}
            >
                {renderAfterAsset("w-full h-full object-cover select-none pointer-events-none")}
            </div>
          </>
      )}

      {/* Overlay UI elements */}
      {mode === TransitionMode.SLIDER && (
        <div 
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 hover:scale-x-150 transition-transform"
            style={{ left: `${progress}%` }}
        >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-zinc-900">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </div>
        </div>
      )}

      {mode === TransitionMode.MAGNIFIER && isHovering && (
          <div 
            className="absolute w-[200px] h-[200px] rounded-full border-4 border-white/80 shadow-[0_0_20px_rgba(0,0,0,0.5)] pointer-events-none z-30"
            style={{ 
                left: mousePos.x, 
                top: mousePos.y, 
                transform: 'translate(-50%, -50%)'
            }}
          />
      )}

    {mode === TransitionMode.SCANNER && (
        <div 
            className="absolute left-0 right-0 h-1 bg-red-500 shadow-[0_0_15px_rgba(255,0,0,0.8)] z-20"
            style={{ top: `${progress}%` }}
        />
    )}

    </div>
  );
};

// -----------------------------------------------------------------------------
// COMPONENT: Controls
// -----------------------------------------------------------------------------

interface ControlsProps {
  mode: TransitionMode;
  setMode: (mode: TransitionMode) => void;
  progress: number;
  setProgress: (val: number) => void;
  onSwap: () => void;
}

const Controls: React.FC<ControlsProps> = ({
  mode,
  setMode,
  progress,
  setProgress,
  onSwap,
}) => {
  
  const tools = [
    { id: TransitionMode.SLIDER, icon: SlidersHorizontal, label: 'Slider' },
    { id: TransitionMode.SCANNER, icon: ScanLine, label: 'Scan' },
    { id: TransitionMode.FADE, icon: Zap, label: 'Fade' },
    { id: TransitionMode.MAGNIFIER, icon: Search, label: 'Magnify' },
    { id: TransitionMode.SPOTLIGHT, icon: Lightbulb, label: 'Spotlight' },
    { id: TransitionMode.REVEAL, icon: Sparkles, label: 'Reveal' },
  ];

  // Disable slider for mouse-driven modes
  const isInteractive = [
    TransitionMode.MAGNIFIER, 
    TransitionMode.REVEAL,
    TransitionMode.SPOTLIGHT
  ].includes(mode);

  return (
    <div className="flex flex-col gap-6 w-full mx-auto p-4 bg-zinc-900/80 backdrop-blur-md rounded-2xl border border-zinc-800 shadow-2xl">
      
      {/* Top Row: Mode Selection */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {tools.map((tool) => {
            const Icon = tool.icon;
            return (
                <Button
                    key={tool.id}
                    variant={mode === tool.id ? 'primary' : 'ghost'}
                    onClick={() => {
                        setMode(tool.id);
                        setProgress(0); // Reset slider to left so drag starts from 0
                    }}
                    className="flex flex-col items-center gap-1 min-w-[60px] py-3 h-auto grow md:grow-0"
                    title={tool.label}
                >
                    <Icon className="w-5 h-5" />
                    <span className="text-[9px] md:text-[10px] uppercase tracking-wider">{tool.label}</span>
                </Button>
            )
        })}
      </div>

      {/* Middle Row: Progress Slider */}
      {!isInteractive && (
        <div className="flex items-center gap-4 bg-zinc-950/50 p-4 rounded-xl border border-zinc-800/50">
            <div className="flex-1 relative group">
                <div className="hidden md:block absolute -top-6 left-0 text-xs text-zinc-500 uppercase tracking-widest font-semibold">Transition Progress</div>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={progress}
                    onChange={(e) => setProgress(Number(e.target.value))}
                    className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-500 hover:accent-indigo-400 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                />
                <div className="flex justify-between text-[10px] md:text-xs text-zinc-600 mt-2 font-mono">
                    <span>IMAGE A</span>
                    <span>IMAGE B (VIDEO)</span>
                </div>
            </div>

            <Button variant="secondary" onClick={onSwap} title="Swap Images">
                <RefreshCw className="w-4 h-4 md:w-5 md:h-5" />
            </Button>
        </div>
      )}

      {isInteractive && (
        <div className="flex items-center justify-center p-4 text-zinc-400 text-sm bg-zinc-950/50 rounded-xl border border-zinc-800 border-dashed">
            <p className="flex items-center gap-2 text-xs md:text-sm">
                <span className="animate-pulse bg-indigo-500 w-2 h-2 rounded-full shrink-0"></span>
                {mode === TransitionMode.REVEAL 
                    ? "Paint over the image to permanently reveal the layer below" 
                    : "Move your mouse over the image to interact"}
            </p>
        </div>
      )}
    </div>
  );
};

// -----------------------------------------------------------------------------
// COMPONENT: TransitionSet
// -----------------------------------------------------------------------------

interface TransitionSetProps {
  id: number;
  title: string;
  defaultBefore?: string;
  defaultAfter?: string;
}

const TransitionSet: React.FC<TransitionSetProps> = ({ id, title, defaultBefore, defaultAfter }) => {
  const [images, setImages] = useState<ImageState>({ 
    before: defaultBefore || null, 
    after: defaultAfter || null 
  });
  
  // Sync state with props to ensure defaults load correctly (especially on hot reload or prop update)
  useEffect(() => {
    if (defaultBefore || defaultAfter) {
      setImages(prev => ({
        before: defaultBefore || prev.before,
        after: defaultAfter || prev.after
      }));
    }
  }, [defaultBefore, defaultAfter]);

  const [mode, setMode] = useState<TransitionMode>(TransitionMode.SLIDER);
  const [progress, setProgress] = useState(0); // Default to all the way to left
  
  const containerRef = useRef<HTMLDivElement>(null);

  const handleUpload = (file: File, type: 'before' | 'after') => {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        setImages(prev => ({ ...prev, [type]: e.target?.result as string }));
      }
    };
    reader.readAsDataURL(file);
  };

  const swapImages = () => {
    setImages(prev => ({ before: prev.after, after: prev.before }));
  };

  const clearImages = () => {
      setImages({ before: null, after: null });
      setProgress(0);
  };

  const hasImages = images.before && images.after;

  return (
    <div className="flex flex-col gap-4 bg-zinc-900/30 p-6 rounded-2xl border border-zinc-800/50 shadow-xl">
      <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-2">
        <h2 className="text-xl font-semibold text-zinc-200">{title}</h2>
        {hasImages && (
            <Button variant="ghost" onClick={clearImages} className="text-xs h-8">
            <X className="w-4 h-4 mr-2" />
            Clear
            </Button>
        )}
      </div>

      {!hasImages ? (
        <ImageUploader 
          onUpload={handleUpload} 
          images={images} 
          index={id} 
          defaultBefore={defaultBefore}
          defaultAfter={defaultAfter}
        />
      ) : (
        <div className="flex flex-col gap-6 animate-in fade-in zoom-in-95 duration-500">
          {/* Stage Container */}
          <div 
              ref={containerRef}
              style={checkerboardStyle}
              className="relative w-full aspect-video bg-zinc-900 rounded-xl border border-zinc-800 shadow-2xl overflow-hidden"
          >
              <TransitionStage 
                  beforeSrc={images.before!}
                  afterSrc={images.after!}
                  mode={mode}
                  progress={progress}
                  containerRef={containerRef}
              />
          </div>

          {/* Controls */}
          <Controls 
              mode={mode}
              setMode={(m) => {
                  setMode(m);
              }}
              progress={progress}
              setProgress={setProgress}
              onSwap={swapImages}
          />
        </div>
      )}
    </div>
  );
};

// -----------------------------------------------------------------------------
// COMPONENT: TransitionEffects (Main Container)
// -----------------------------------------------------------------------------

const TransitionEffects: React.FC = () => {
  return (
    <div className="w-[65%] mx-auto space-y-16">
        <div className="flex flex-col gap-16">
            <TransitionSet 
              id={0} 
              title="Comparison Set 1" 
              defaultBefore="https://raw.githubusercontent.com/jamin1981/Axio-Effects/refs/heads/main/3.png"
              defaultAfter="https://raw.githubusercontent.com/jamin1981/Axio-Effects/refs/heads/main/4.png"
            />
            <TransitionSet 
              id={1} 
              title="Comparison Set 2" 
              defaultBefore="https://raw.githubusercontent.com/jamin1981/Axio-Effects/refs/heads/main/5.png"
              defaultAfter="https://raw.githubusercontent.com/jamin1981/Axio-Effects/refs/heads/main/6.mp4"
            />
        </div>
    </div>
  );
};

export default TransitionEffects;
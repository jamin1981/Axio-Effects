import React, { useState, useRef, useEffect } from 'react';
import { 
  Upload, 
  Image as ImageIcon, 
  ArrowRight, 
  Video as VideoIcon, 
  SlidersHorizontal, 
  Zap, 
  Search, 
  Sparkles, 
  Maximize2, 
  Lightbulb, 
  RefreshCw,
  X,
  AlertCircle
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

const isVideoFile = (src: string | null): boolean => {
    if (!src || typeof src !== 'string') return false;
    return src.startsWith('data:video') || /\.(mp4|webm|mov|m4v|avi)(\?.*)?$/i.test(src);
};

const drawImageCover = (ctx: CanvasRenderingContext2D, img: HTMLImageElement, w: number, h: number) => {
  if (!img.width || !img.height) return;
  const hRatio = w / img.width;
  const vRatio = h / img.height;
  const ratio = Math.max(hRatio, vRatio);
  const centerShift_x = (w - img.width * ratio) / 2;
  const centerShift_y = (h - img.height * ratio) / 2;
  ctx.clearRect(0,0, w, h);
  ctx.drawImage(img, 0, 0, img.width, img.height, centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
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
// COMPONENT: AssetRenderer
// -----------------------------------------------------------------------------

interface AssetRendererProps {
    src: string | null;
    className?: string;
}

const AssetRenderer: React.FC<AssetRendererProps> = ({ src, className = "" }) => {
    const [error, setError] = useState(false);

    // Reset error state if src changes
    useEffect(() => {
        setError(false);
    }, [src]);

    if (!src) return null;

    if (error) {
        return (
            <div className={`${className} bg-zinc-900 flex items-center justify-center border border-zinc-800`}>
                <div className="text-center text-zinc-500 p-4">
                    <AlertCircle className="w-6 h-6 mx-auto mb-2 opacity-50" />
                    <p className="text-[10px] uppercase tracking-wider">Failed to load</p>
                </div>
            </div>
        );
    }

    if (isVideoFile(src)) {
        return (
            <video 
                src={src} 
                className={className} 
                autoPlay 
                muted 
                loop 
                playsInline
                crossOrigin="anonymous"
                onError={() => setError(true)}
            />
        );
    }

    return (
        <img 
            src={src} 
            alt="Asset" 
            className={className} 
            crossOrigin="anonymous"
            loading="lazy"
            onError={() => setError(true)}
        />
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
        }

        if (defaultAfter) {
            const res2 = await fetch(defaultAfter);
            const blob2 = await res2.blob();
            const type2 = getMimeType(defaultAfter) || blob2.type;
            onUpload(new File([blob2], "demo2", { type: type2 }), 'after');
        }
    } catch (e) {
        console.error("Failed to load demo images", e);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 text-center space-y-6 bg-zinc-950/20 rounded-xl border border-dashed border-zinc-800">
      <div className="space-y-2">
        <p className="text-zinc-400 font-medium">
          Select assets for comparison
        </p>
        <p className="text-xs text-zinc-500">
            Supports Images (JPG, PNG) and Video (MP4, WebM)
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-center">
        {/* Before Upload */}
        <div className="relative group w-full">
            <div className={`aspect-video rounded-xl border-2 border-dashed flex flex-col items-center justify-center transition-all overflow-hidden ${images.before ? 'border-indigo-500 bg-zinc-900/50' : 'border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800/30'}`}>
                {images.before ? (
                    <AssetRenderer src={images.before} className="w-full h-full object-cover" />
                ) : (
                    <div className="space-y-2">
                        <ImageIcon className="w-8 h-8 mx-auto text-zinc-500" />
                        <span className="text-sm text-zinc-400">Asset 1</span>
                    </div>
                )}
                 <input 
                    type="file" 
                    accept="image/*,video/mp4,video/webm,video/quicktime"
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
                Reload Defaults
            </Button>
        </div>

        {/* After Upload */}
        <div className="relative group w-full">
            <div className={`aspect-video rounded-xl border-2 border-dashed flex flex-col items-center justify-center transition-all overflow-hidden ${images.after ? 'border-indigo-500 bg-zinc-900/50' : 'border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800/30'}`}>
                {images.after ? (
                    <AssetRenderer src={images.after} className="w-full h-full object-cover" />
                ) : (
                    <div className="space-y-2">
                        <div className="flex justify-center gap-2">
                            <Upload className="w-8 h-8 text-zinc-500" />
                            <VideoIcon className="w-8 h-8 text-zinc-500" />
                        </div>
                        <span className="text-sm text-zinc-400">Asset 2</span>
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
  containerRef: React.RefObject<HTMLDivElement>;
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

  // Disable CSS transitions for interactive mouse modes to prevent lag/stuck feeling
  const isInteractiveMouseMode = [TransitionMode.MAGNIFIER, TransitionMode.SPOTLIGHT].includes(mode);

  // Initialize Canvas for Reveal Mode
  useEffect(() => {
    if (mode === TransitionMode.REVEAL && canvasRef.current && containerRef.current) {
        const canvas = canvasRef.current;
        
import React, { Suspense } from 'react';

// Lazy load demos
const MagneticButton = React.lazy(() => import('./demo/MagneticButton'));
const GradientText = React.lazy(() => import('./demo/GradientText'));
const TiltCard = React.lazy(() => import('./demo/TiltCard'));
const BentoGrid = React.lazy(() => import('./demo/BentoGrid'));
const CursorSpotlight = React.lazy(() => import('./demo/CursorSpotlight'));
const DockMenu = React.lazy(() => import('./demo/DockMenu'));
const ScrambleText = React.lazy(() => import('./demo/ScrambleText'));
const ParallaxScroll = React.lazy(() => import('./demo/ParallaxScroll'));
const NoiseOverlay = React.lazy(() => import('./demo/NoiseOverlay'));
const Typewriter = React.lazy(() => import('./demo/Typewriter'));
const ImageReveal = React.lazy(() => import('./demo/ImageReveal'));
const HorizontalScroll = React.lazy(() => import('./demo/HorizontalScroll'));
const StickyStacking = React.lazy(() => import('./demo/StickyStacking'));
const SplitScreen = React.lazy(() => import('./demo/SplitScreen'));
const ScrollDriven = React.lazy(() => import('./demo/ScrollDriven'));
const ViewTransition = React.lazy(() => import('./demo/ViewTransition'));
const TextStagger = React.lazy(() => import('./demo/TextStagger'));
const MetallicShimmer = React.lazy(() => import('./demo/MetallicShimmer'));
const GlowBloom = React.lazy(() => import('./demo/GlowBloom'));
const ClipPathReveal = React.lazy(() => import('./demo/ClipPathReveal'));
const VariableFont = React.lazy(() => import('./demo/VariableFont'));
const Model3D = React.lazy(() => import('./demo/Model3D'));
const Preloader = React.lazy(() => import('./demo/Preloader'));
const PathDrawing = React.lazy(() => import('./demo/PathDrawing'));
const LottieAnim = React.lazy(() => import('./demo/LottieAnim'));
const Glassmorphism = React.lazy(() => import('./demo/Glassmorphism'));
const KineticTypography = React.lazy(() => import('./demo/KineticTypography'));
const GlitchEffect = React.lazy(() => import('./demo/GlitchEffect'));
const FlipCard = React.lazy(() => import('./demo/FlipCard'));
const MorphingBlobs = React.lazy(() => import('./demo/MorphingBlobs'));

// Loading component
const LoadingState = () => (
  <div className="w-full h-full flex items-center justify-center bg-slate-900/50">
    <div className="w-6 h-6 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
  </div>
);

interface DemoPreviewProps {
  id: string;
}

const DemoPreview: React.FC<DemoPreviewProps> = ({ id }) => {
  let Component;

  switch (id) {
    case 'magnetic-button': Component = MagneticButton; break;
    case 'gradient-text-reveal': Component = GradientText; break;
    case 'tilt-card': Component = TiltCard; break;
    case 'bento-grid-hover': Component = BentoGrid; break;
    case 'cursor-spotlight': Component = CursorSpotlight; break;
    case 'dock-navigation': Component = DockMenu; break;
    case 'text-scramble': Component = ScrambleText; break;
    case 'parallax-scroll': Component = ParallaxScroll; break;
    case 'noise-overlay': Component = NoiseOverlay; break;
    case 'typewriter-code': Component = Typewriter; break;
    case 'image-reveal-curtain': Component = ImageReveal; break;
    case 'horizontal-scroll-trigger': Component = HorizontalScroll; break;
    case 'sticky-stacking-cards': Component = StickyStacking; break;
    case 'split-screen-reveal': Component = SplitScreen; break;
    case 'scroll-driven-animation': Component = ScrollDriven; break;
    case 'view-transition-morph': Component = ViewTransition; break;
    case 'text-stagger-reveal': Component = TextStagger; break;
    case 'metallic-shimmer': Component = MetallicShimmer; break;
    case 'glow-bloom-card': Component = GlowBloom; break;
    case 'clip-path-reveal': Component = ClipPathReveal; break;
    case 'variable-font-anim': Component = VariableFont; break;
    case '3d-model-interaction': Component = Model3D; break;
    case 'preloader-counter': Component = Preloader; break;
    case 'svg-path-drawing': Component = PathDrawing; break;
    case 'lottie-micro-anim': Component = LottieAnim; break;
    case 'glass-panel': Component = Glassmorphism; break;
    case 'kinetic-typo': Component = KineticTypography; break;
    case 'glitch-text': Component = GlitchEffect; break;
    case 'flip-reveal': Component = FlipCard; break;
    case 'fluid-blobs': Component = MorphingBlobs; break;
    default: return <div className="text-slate-500 text-xs flex items-center justify-center h-full">Preview unavailable for {id}</div>;
  }

  return (
    <Suspense fallback={<LoadingState />}>
      <Component />
    </Suspense>
  );
};

export default DemoPreview;
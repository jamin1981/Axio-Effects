import { EffectCategory, EffectItem } from './types';

export const EFFECTS_DATA: EffectItem[] = [
  {
    id: 'cursor-spotlight',
    title: 'Feature Spotlight',
    description: 'A subtle radial gradient that follows the cursor, used in dark-mode SaaS interfaces to guide user attention to key features or pricing tiers.',
    category: EffectCategory.MICRO,
    tags: ['Guidance', 'Dark Mode', 'Premium'],
    popularity: 96,
    implemented: true
  },
  {
    id: 'magnetic-button',
    title: 'Magnetic CTA',
    description: 'Primary action buttons that physically gravitate towards the cursor. Increases click-through confidence and adds a tactile, polished feel.',
    category: EffectCategory.MICRO,
    tags: ['Conversion', 'Interaction', 'Tactile'],
    popularity: 95,
    implemented: true
  },
  {
    id: 'dock-navigation',
    title: 'Dynamic Navigation',
    description: 'A MacOS-style dock menu that scales icons on hover. Excellent for condensing complex toolbars in web applications.',
    category: EffectCategory.LAYOUT,
    tags: ['Navigation', 'App-like', 'Scale'],
    popularity: 89,
    implemented: true
  },
  {
    id: 'gradient-text-reveal',
    title: 'Gradient Value Prop',
    description: 'High-impact text animation using moving gradients. Standard for consultancy hero sections to highlight "Digital Transformation" or "AI" keywords.',
    category: EffectCategory.TEXT,
    tags: ['Hero', 'Branding', 'Impact'],
    popularity: 92,
    implemented: true
  },
  {
    id: 'text-scramble',
    title: 'Data Encryption Reveal',
    description: 'Text decoding effect. Perfect for Cybersecurity firms or Data & AI consultancies to visualize "processing" or "security".',
    category: EffectCategory.TEXT,
    tags: ['Security', 'Data', 'Tech'],
    popularity: 80,
    implemented: true
  },
  {
    id: 'tilt-card',
    title: '3D Service Cards',
    description: 'Cards that respond to mouse movement with subtle 3D rotation. Adds depth to service offerings or case study previews without overwhelming the user.',
    category: EffectCategory.LAYOUT,
    tags: ['Services', 'Depth', 'Modern'],
    popularity: 88,
    implemented: true
  },
  {
    id: 'parallax-scroll',
    title: 'Parallax Storytelling',
    description: 'Multi-layered scrolling used to tell a company history or explain complex infrastructure depth. Creates an immersive narrative.',
    category: EffectCategory.SCROLL,
    tags: ['Narrative', 'Corporate', 'Depth'],
    popularity: 90,
    implemented: true
  },
  {
    id: 'bento-grid-hover',
    title: 'Service Grid Expansion',
    description: 'A bento-style layout where service cells expand on hover. Ideal for showcasing a wide breadth of capabilities in a compact space.',
    category: EffectCategory.LAYOUT,
    tags: ['Architecture', 'Navigation', 'Clean'],
    popularity: 98,
    implemented: true
  },
  {
    id: 'noise-overlay',
    title: 'Digital Texture',
    description: 'A barely-visible film grain that prevents "flatness" in digital designs. Adds a subconscious layer of quality and organic warmth.',
    category: EffectCategory.LAYOUT,
    tags: ['Texture', 'Brand', 'Quality'],
    popularity: 65,
    implemented: true
  },
  {
    id: 'typewriter-code',
    title: 'Algorithmic Transparency',
    description: 'Simulates code or data being typed in real-time. Builds trust by showing the "technical" side of a consultancy.',
    category: EffectCategory.TEXT,
    tags: ['Tech', 'Transparency', 'Data'],
    popularity: 85,
    implemented: true
  },
  {
    id: 'image-reveal-curtain',
    title: 'Case Study Reveal',
    description: 'An elegant curtain slide effect used to unveil high-resolution case study imagery or architectural renders.',
    category: EffectCategory.LAYOUT,
    tags: ['Portfolio', 'Imagery', 'Elegant'],
    popularity: 70,
    implemented: true
  },
  {
    id: 'horizontal-scroll-trigger',
    title: 'Process Timeline',
    description: 'Switches to horizontal scrolling to walk users through a linear process (e.g., "Our Approach" or "The 5D Methodology").',
    category: EffectCategory.SCROLL,
    tags: ['Methodology', 'Process', 'Guide'],
    popularity: 78,
    implemented: true
  },
  {
    id: 'sticky-stacking-cards',
    title: 'Sticky Value Stack',
    description: 'Sections that stack atop one another. Perfect for explaining "Why Choose Us" points one by one while keeping context.',
    category: EffectCategory.SCROLL,
    tags: ['Pitch', 'Retention', 'Focus'],
    popularity: 84,
    implemented: true
  },
  {
    id: 'split-screen-reveal',
    title: 'Dual Value Proposition',
    description: 'A split layout allowing users to choose between two paths (e.g., "For Enterprise" vs "For Startups").',
    category: EffectCategory.LAYOUT,
    tags: ['Segmentation', 'Navigation', 'Choice'],
    popularity: 55,
    implemented: true
  },
  {
    id: 'scroll-driven-animation',
    title: 'Scroll-Driven Story',
    description: 'Elements that animate strictly based on scroll position. High performance, often used to assemble a product or diagram as the user reads.',
    category: EffectCategory.SCROLL,
    tags: ['Explanation', 'Diagram', 'Tech'],
    popularity: 95,
    implemented: true
  },
  {
    id: 'view-transition-morph',
    title: 'Seamless Context Shift',
    description: 'Morphing an element (like a card) into a full page. Maintains user context and reduces cognitive load during navigation.',
    category: EffectCategory.LAYOUT,
    tags: ['UX', 'Flow', 'Continuity'],
    popularity: 90,
    implemented: true
  },
  {
    id: 'text-stagger-reveal',
    title: 'Executive Statement',
    description: 'Words appearing one-by-one or line-by-line. Forces the user to read the manifesto or mission statement at a controlled pace.',
    category: EffectCategory.TEXT,
    tags: ['Mission', 'Pacing', 'Editorial'],
    popularity: 93,
    implemented: true
  },
  {
    id: 'metallic-shimmer',
    title: 'Premium Sheen',
    description: 'A light reflection effect passing over text or buttons. Subtly indicates "Pro" features or high-value items.',
    category: EffectCategory.MICRO,
    tags: ['Tiering', 'Value', 'Cosmetic'],
    popularity: 88,
    implemented: true
  },
  {
    id: 'glow-bloom-card',
    title: 'Focus State Glow',
    description: 'Subtle lighting bloom on active elements. Creates a "ready to interact" feel common in developer tools and futuristic interfaces.',
    category: EffectCategory.MICRO,
    tags: ['DevTools', 'Interaction', 'Future'],
    popularity: 92,
    implemented: true
  },
  {
    id: 'clip-path-reveal',
    title: 'Geometric Brand Reveal',
    description: 'Using brand shapes (circles, squares, custom logos) to mask and reveal content. Reinforces brand identity.',
    category: EffectCategory.LAYOUT,
    tags: ['Branding', 'Identity', 'Unique'],
    popularity: 75,
    implemented: true
  },
  {
    id: 'variable-font-anim',
    title: 'Expressive Typography',
    description: 'Animating font weight/width to emphasize key statistics or words. "Big Type" is a major trend in 2025 consultancy design.',
    category: EffectCategory.TEXT,
    tags: ['Editorial', 'Emphasis', 'Design'],
    popularity: 80,
    implemented: true
  },
  {
    id: '3d-model-interaction',
    title: 'Product Digital Twin',
    description: 'Interactive 3D models allowing users to inspect hardware or infrastructure. High trust builder for engineering firms.',
    category: EffectCategory.LAYOUT,
    tags: ['Engineering', 'Product', 'Trust'],
    popularity: 85,
    implemented: true
  },
  {
    id: 'preloader-counter',
    title: 'Brand Loading Experience',
    description: 'A typographic percentage counter. Turns the wait time into a branding moment, building anticipation for the reveal.',
    category: EffectCategory.MICRO,
    tags: ['Anticipation', 'Intro', 'Polish'],
    popularity: 60,
    implemented: true
  },
  {
    id: 'svg-path-drawing',
    title: 'Process Illustration',
    description: 'Lines drawing themselves to illustrate a workflow or architecture diagram dynamically.',
    category: EffectCategory.MICRO,
    tags: ['Diagram', 'Workflow', 'Education'],
    popularity: 80,
    implemented: true
  },
  {
    id: 'lottie-micro-anim',
    title: 'Vector Micro-Narratives',
    description: 'Small, sharp animations for empty states or success confirmations. Adds personality to enterprise software.',
    category: EffectCategory.MICRO,
    tags: ['Personality', 'Feedback', 'Joy'],
    popularity: 82,
    implemented: true
  },
  {
    id: 'glass-panel',
    title: 'Frosted Glass Layering',
    description: 'Using backdrop blurs to create depth hierarchies. Essential for modern, airy interfaces that need to show context behind overlays.',
    category: EffectCategory.LAYOUT,
    tags: ['Depth', 'Modern', 'Clean'],
    popularity: 91,
    implemented: true
  },
  {
    id: 'kinetic-typo',
    title: 'Kinetic Typography',
    description: 'Text that moves constantly to create energy. Useful for ticker tapes or bold statements that refuse to be ignored.',
    category: EffectCategory.TEXT,
    tags: ['Energy', 'Modern', 'Bold'],
    popularity: 76,
    implemented: true
  },
  {
    id: 'glitch-text',
    title: 'Digital Disruption',
    description: 'Intentional glitch artifacts to signal "innovation" or "breaking the norm". Common in crypto and AI sectors.',
    category: EffectCategory.TEXT,
    tags: ['Edgy', 'Crypto', 'AI'],
    popularity: 72,
    implemented: true
  },
  {
    id: 'flip-reveal',
    title: 'Interactive Discovery',
    description: 'Cards that flip to reveal more data. An efficient way to pack dense information (like team bios) without cluttering the UI.',
    category: EffectCategory.LAYOUT,
    tags: ['Information', 'Clean', 'Interactive'],
    popularity: 83,
    implemented: true
  },
  {
    id: 'fluid-blobs',
    title: 'Organic Intelligence',
    description: 'Morphing, organic shapes used as backgrounds. Suggests adaptability and human-centric technology.',
    category: EffectCategory.LAYOUT,
    tags: ['Organic', 'Background', 'Soft'],
    popularity: 79,
    implemented: true
  }
];
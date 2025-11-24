export enum EffectCategory {
  ALL = 'All',
  MICRO = 'Micro-interactions',
  SCROLL = 'Scroll Effects',
  TEXT = 'Typography',
  LAYOUT = 'Layout & 3D',
}

export interface EffectItem {
  id: string;
  title: string;
  description: string;
  category: EffectCategory;
  tags: string[];
  popularity: number; // 1-100
  implemented: boolean; // If we have a live demo component
}

export interface GeminiResponse {
  content: string;
  type: 'explanation' | 'code';
}
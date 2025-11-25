import { GoogleGenAI } from "@google/genai";
import { EffectItem } from '../types';

// Initialize the Gemini API client
// process.env.API_KEY is guaranteed to be present by the runtime
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getGeminiAnalysis = async (effect: EffectItem, mode: 'explain' | 'code'): Promise<string> => {
  try {
    // Use gemini-3-pro-preview for coding tasks (Complex Text Tasks) and gemini-2.5-flash for explanations (Basic Text Tasks)
    const modelId = mode === 'code' ? 'gemini-3-pro-preview' : 'gemini-2.5-flash';
    
    let prompt = '';
    if (mode === 'explain') {
      prompt = `Explain why the "${effect.title}" (${effect.category}) effect is trending in modern web design. 
      Discuss its UX benefits, best use cases, and one potential downside. 
      Keep it concise (under 150 words) and professional.`;
    } else {
      prompt = `Generate a single, self-contained React functional component using Tailwind CSS and Framer Motion (if needed) that implements the "${effect.title}" effect. 
      The description of the effect is: "${effect.description}".
      Do not include any imports outside of react and framer-motion. 
      Return ONLY the code block, no markdown wrapper, no explanation.`;
    }

    const response = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
    });

    return response.text || "No response generated.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Failed to fetch insight from Gemini. Please try again.";
  }
};
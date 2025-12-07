import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const askOracle = async (question: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: question,
      config: {
        systemInstruction: `You are 'The Oracle', a cryptic but helpful AI assistant for the 'Hidden Layers' deep learning course. 
        Your style is neobrutalist: direct, slightly robotic, all-lowercase or occasional ALL CAPS for emphasis. 
        You love metaphors involving neural weights, gradients, and backpropagation.
        Keep answers under 50 words. Be cool.`,
        temperature: 0.8,
      }
    });

    return response.text || "NULL_RESPONSE_RECEIVED";
  } catch (error) {
    console.error("Oracle Error:", error);
    return "RUNTIME_EXCEPTION: Connection severed. The weights are unreachable.";
  }
};
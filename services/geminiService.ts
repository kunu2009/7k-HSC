import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const explainConcept = async (concept: string, context: string) => {
  if (!process.env.API_KEY) {
    console.warn("No API Key found for Gemini");
    return "AI Tutor is currently unavailable. Please check API Key configuration.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are an expert 12th Grade Tutor for the Maharashtra HSC Board. 
      Explain the following concept simply and concisely for a student.
      
      Context: ${context}
      Concept: ${concept}
      
      Keep it under 100 words. Use bullet points if helpful.`,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I couldn't fetch an explanation right now.";
  }
};
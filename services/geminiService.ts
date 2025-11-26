import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateTravelAdvice = async (question: string, context: string): Promise<string> => {
  if (!apiKey) {
    return "請先設定 API Key 才能呼叫吉伊卡哇大神喔！";
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `
        Context: The user is going on a family trip to Kyushu, Japan from Jan 1, 2026 to Jan 6, 2026.
        Itinerary Summary: ${context}
        
        Role: You are a cute, helpful travel assistant character named "Chiikawa Helper". 
        Your tone should be very cheerful, encouraging, and use simple language. 
        Use Japanese emoticons like (｡•̀ᴗ-)✧ or (* >ω<).
        Keep answers concise (under 100 words).
        
        User Question: ${question}
      `,
    });
    return response.text || "嗚嗚... 吉伊卡哇現在有點累，聽不清楚...";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "發生錯誤了，吉伊卡哇正在修理中...";
  }
};

export const generateSouvenirImage = async (prompt: string): Promise<string | null> => {
   if (!apiKey) return null;

   try {
     // Using gemini-2.5-flash-image for standard image generation/understanding, 
     // but here specifically prompting for an illustration.
     const response = await ai.models.generateContent({
       model: 'gemini-2.5-flash-image',
       contents: {
         parts: [
           { text: `Draw a very cute, simple, hand-drawn style illustration of ${prompt}. The style MUST be like "Chiikawa" anime style: round, kawaii, soft pastel colors, thick soft outlines, minimalist. No realistic photos.` }
         ]
       },
       config: {
         imageConfig: {
           aspectRatio: "1:1"
         }
       }
     });

     // Check parts for inline data (the generated image)
     const parts = response.candidates?.[0]?.content?.parts;
     if (parts) {
       for (const part of parts) {
         if (part.inlineData && part.inlineData.data) {
           return `data:${part.inlineData.mimeType || 'image/png'};base64,${part.inlineData.data}`;
         }
       }
     }
     
     return null;

   } catch (error) {
     console.error("Image Gen Error", error);
     return null;
   }
}
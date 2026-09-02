import { GoogleGenAI } from "@google/genai";
import fs from 'fs';

async function testGemini() {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    
    // create a fake 1mb base64 pdf string
    const base64 = Buffer.alloc(1024 * 1024, "A").toString("base64");
    
    try {
        console.log("Calling gemini...");
        const response = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: {
                role: "user",
                parts: [
                    { text: "Extract content from this file" },
                    { inlineData: { mimeType: "application/pdf", data: base64 } }
                ]
            }
        });
        console.log("Success:", response.text ? response.text.substring(0, 50) : "No text");
    } catch (e: any) {
        console.error("Error:", e.message);
    }
}

testGemini();

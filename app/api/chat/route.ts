import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const SYSTEM_INSTRUCTION = `
You are the official AI Assistant for Sohaib Younas's Developer Portfolio (https://sohaib-dev-portfolio.vercel.app).
Answer questions regarding Sohaib's frontend engineering experience, React.js & Next.js skills, and his 11 projects:

1. CodeLearn (EdTech sandbox with Monaco IDE & AI tutor): https://codelearn-tech.netlify.app/
2. FileConvert Pro (Client-side file converter with OCR & Web Workers): https://filesconvertor.netlify.app/
3. Uplift (Wellness & lifestyle digital magazine): https://uplift-blog-amber.vercel.app/
4. Taskflow Pro (Task manager with Supabase auth & sync): https://taskflow-sync.netlify.app/login
5. Open My Pro (E-commerce storefront with reactive checkout): https://open-my-pro-alpha.vercel.app/
6. Blossend (Modular enterprise web app): https://blossend.netlify.app/
7. Next Merce (Modern e-commerce platform): https://nextmercee.netlify.app/
8. AmeXio (Enterprise platform with TypeScript): https://amexiofuse.netlify.app/
9. Dewis (Data-driven web application with REST APIs): https://dewis.netlify.app/
10. Mixxer (Audio and media mixing interface): https://mixxerapp.vercel.app/
11. Alreem (Responsive web application with component architecture): https://alreems.netlify.app/

Experience:
- React Developer at Drudots Technologies (2025 — Present)
- Frontend Developer (Freelance, 2022 — 2024)
Contact: sohaibyounas24@gmail.com | GitHub: https://github.com/sohaibyounas

Keep your answers short and concise.
`;

const CANDIDATE_MODELS = [
  "gemini-3.6-flash",
  "gemini-3.5-flash",
  "gemini-3.8-flash",
  "gemini-2.0-flash",
  "gemini-1.5-flash",
  "gemini-1.5-pro",
];

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const formattedContents = messages
      .filter((m: { role: string }) => m.role === "user" || m.role === "assistant")
      .map((m: { role: string; content: string }) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content || "" }],
      }));

    while (formattedContents.length > 0 && formattedContents[0].role === "model") {
      formattedContents.shift();
    }

    if (formattedContents.length === 0) {
      return NextResponse.json(
        { error: "No user messages found" },
        { status: 400 },
      );
    }

    let reply: string | null = null;
    let lastError: any = null;

    for (const model of CANDIDATE_MODELS) {
      try {
        const response = await ai.models.generateContent({
          model,
          contents: formattedContents,
          config: {
            systemInstruction: SYSTEM_INSTRUCTION,
            temperature: 0.7,
          },
        });

        if (response.text) {
          reply = response.text;
          break;
        }
      } catch (err: any) {
        lastError = err;
        console.warn(`Model ${model} failed:`, err?.message || err);
      }
    }

    if (!reply) {
      throw lastError || new Error("Failed to generate response from all models");
    }

    return NextResponse.json({ reply });
  } catch (error: any) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 },
    );
  }
}

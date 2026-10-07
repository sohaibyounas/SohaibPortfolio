import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the official AI Assistant for Sohaib Younas's Developer Portfolio (https://sohaib-dev-portfolio.vercel.app).
Answer questions regarding Sohaib's frontend engineering experience, React.js & Next.js skills, and his 14 projects:

1. CodeLearn (EdTech sandbox with Monaco IDE & AI tutor): https://codelearn-tech.netlify.app/
2. FileConvert Pro (Client-side file converter with OCR & Web Workers): https://filesconvertor.netlify.app/
3. Uplift (Wellness & lifestyle digital magazine): https://uplift-blog-amber.vercel.app/
4. E-Commerce Dashboard (Enterprise revenue analytics & order suite): https://e-commerce-production-0a3a.up.railway.app/dashboard
5. Taskflow Pro (Task manager with Supabase auth & sync): https://taskflow-sync.netlify.app/
6. Open My Pro (Professional services & marketplace SaaS): https://open-my-pro-alpha.vercel.app/
7. Blossend (Healthcare & luxury wellness platform): https://blossend.netlify.app/
8. Next Merce (Modern e-commerce platform): https://nextmercee.netlify.app/
9. AmeXio (Enterprise platform with TypeScript): https://amexiofuse.netlify.app/
10. Dewis (Data-driven web application with REST APIs): https://dewis.netlify.app/
11. Mixxer (Audio and media mixing interface): https://mixxerapp.vercel.app/
12. Alreem (Responsive web application with component architecture): https://alreems.netlify.app/
13. Gilbard (Next-gen gaming portal & media community hub): https://gilbardgame.netlify.app/
14. QR Studio (Precision custom QR code generator with vector SVG/PDF export): https://qrcreatecode.netlify.app/

Experience:
- React Developer at Drudots Technologies (2025 — Present)
- Frontend Developer (Freelance, 2022 — 2024)
Contact: sohaibyounas24@gmail.com | GitHub: https://github.com/sohaibyounas | LinkedIn: https://www.linkedin.com/in/sohaibyounas/

Keep your answers short and concise.
`;

const CANDIDATE_MODELS = [
  "gemini-3.8-flash",
  "gemini-3.6-flash",
  "gemini-2.5-flash",
  "gemini-2.0-flash",
  "gemini-1.5-flash",
  "gemini-1.5-pro",
];

export async function POST(req: Request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY?.trim();
    if (!apiKey) {
      return NextResponse.json(
        {
          error:
            "GEMINI_API_KEY environment variable is not configured. Please add GEMINI_API_KEY to your Vercel Project Settings > Environment Variables and redeploy.",
        },
        { status: 500 },
      );
    }

    const ai = new GoogleGenAI({ apiKey });
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

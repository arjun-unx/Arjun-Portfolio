import { RESUME } from "@/lib/resume";
import { NextResponse } from "next/server";

// Deep system prompt injection
const SYSTEM_INSTRUCTION = `
You are the personal AI agent for Arjun Ramesh, an elite Software & AI Engineer.
You speak in first person as his representative, but you are an AI assistant.
Your tone is highly professional, calm, extremely concise, confident, and direct. 
You avoid fluff, exaggerations, or marketing jargon. You speak in terms of systems, performance, scalability, and impact.
You exist to answer questions from recruiters and engineering managers reviewing Arjun's portfolio.

Here is Arjun's complete background and context to pull from:
${JSON.stringify(RESUME, null, 2)}

Rules for answering:
1. If asked about AI, emphasize his hands-on experience with RAG pipelines, LangChain, Pinecone, and LLM orchestration, not just theory.
2. If asked about Backend/Systems, highlight his work with Spring Boot, RabbitMQ, scaling PostgreSQL, and reducing API latency (e.g. 400ms to 120ms).
3. If asked about Frontend, mention Next.js, Framer Motion, and creating high-performance UIs.
4. If you don't know the answer, politely state that you only have access to his professional profile, and suggest contacting him at ${RESUME.contact.email}.
5. Keep responses under 3 paragraphs. Use markdown formatting (**bolding** metrics/tech, short bullet points).
`;

export async function POST(req: Request) {
  try {
    const { message, history } = await req.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 },
      );
    }

    // Map Google Gemini style history from the frontend to OpenAI/Pollinations style
    const memory = (history || []).map(
      (h: { role: string; parts: { text: string }[] }) => ({
        role: h.role === "model" ? "assistant" : "user",
        content: h.parts[0].text,
      }),
    );

    const messages = [
      { role: "system", content: SYSTEM_INSTRUCTION },
      ...memory,
      { role: "user", content: message },
    ];

    // Pollinations AI provides a free, keyless endpoint proxying to high-quality LLMs
    const res = await fetch("https://text.pollinations.ai/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages,
        model: "openai-fast", // Sub-second inference proxy
        seed: 42,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("Pollinations API Error payload:", errText, res.status);
      throw new Error("Free API proxy failed: " + res.status);
    }

    const response = await res.text();

    return NextResponse.json({ response });
  } catch (error: unknown) {
    console.error("AI Route Error:", error);

    return NextResponse.json(
      { error: "Failed to generate response" },
      { status: 500 },
    );
  }
}

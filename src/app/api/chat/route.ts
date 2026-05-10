import { NextResponse } from "next/server";
import { RESUME } from "@/lib/resume";

export const runtime = "edge";
export const dynamic = "force-dynamic";

interface HistoryEntry {
  role: "user" | "model";
  parts: Array<{ text: string }>;
}

interface ChatRequest {
  message: string;
  history?: HistoryEntry[];
}

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
    const body = (await req.json()) as ChatRequest;
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 },
      );
    }

    // Map Gemini-style history (role + parts) to OpenAI-style (role + content).
    const memory = (body.history ?? [])
      .filter(
        (h): h is HistoryEntry =>
          !!h && Array.isArray(h.parts) && h.parts.length > 0,
      )
      .map((h) => ({
        role: h.role === "model" ? "assistant" : "user",
        content: h.parts[0]?.text ?? "",
      }))
      .filter((h) => h.content);

    const messages = [
      { role: "system", content: SYSTEM_INSTRUCTION },
      ...memory,
      { role: "user", content: message },
    ];

    const upstream = await fetch("https://text.pollinations.ai/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
      body: JSON.stringify({ messages, model: "openai-fast", seed: 42 }),
    });

    if (!upstream.ok) {
      const errText = await upstream.text().catch(() => "");
      console.error("Upstream chat error", upstream.status, errText);
      return NextResponse.json(
        { error: "Upstream model unavailable" },
        { status: 502 },
      );
    }

    const response = await upstream.text();
    return NextResponse.json({ response });
  } catch (error: unknown) {
    console.error("Chat route error:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Failed to generate response",
      },
      { status: 500 },
    );
  }
}

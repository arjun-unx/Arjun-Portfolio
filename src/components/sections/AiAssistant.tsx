"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Bot, RefreshCw, Send, Sparkles, User } from "lucide-react";
import { parseMarkdown } from "@/lib/utils/parseMarkdown";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils/cn";

interface Message {
  id: string;
  role: "user" | "bot";
  text: string;
}

const INITIAL_GREETING =
  "Hi! I'm Arjun's AI Agent. I have deep context on his experience building RAG pipelines, scalable backends, and full-stack SaaS products. Ask me anything about his architecture decisions or impact.";

const SUGGESTIONS = [
  "What is Arjun's experience with AI Agents and RAG?",
  "How did he reduce API latency from 400ms to 120ms?",
  "Tell me about the Agentic Legal Analyst project.",
  "What cloud and infrastructure tools does he use?",
] as const;

const initialMessages: Message[] = [
  { id: "init", role: "bot", text: INITIAL_GREETING },
];

export function AiAssistant() {
  const reduce = useReducedMotion();
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll the message log to the latest entry without yanking the page.
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({
      top: el.scrollHeight,
      behavior: reduce ? "auto" : "smooth",
    });
  }, [messages, isLoading, reduce]);

  const handleQuery = async (query: string) => {
    const trimmed = query.trim();
    if (!trimmed || isLoading) return;

    setIsLoading(true);
    setInputValue("");

    const userMsg: Message = {
      id: `u-${Date.now()}`,
      role: "user",
      text: trimmed,
    };
    setMessages((prev) => [...prev, userMsg]);

    try {
      const history = messages
        .filter((m) => m.id !== "init")
        .map((m) => ({
          role: m.role === "bot" ? "model" : "user",
          parts: [{ text: m.text }],
        }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed, history }),
      });
      if (!res.ok) throw new Error(`API error ${res.status}`);

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { id: `b-${Date.now()}`, role: "bot", text: data.response },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: `err-${Date.now()}`,
          role: "bot",
          text: "I'm having trouble connecting right now. Please try again, or reach out to Arjun directly via email.",
        },
      ]);
    } finally {
      setIsLoading(false);
      // Return focus to the input for fast follow-up questions.
      inputRef.current?.focus();
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleQuery(inputValue);
    }
  };

  const reset = () => {
    if (isLoading) return;
    setMessages(initialMessages);
  };

  return (
    <section
      id="ai-assistant"
      aria-labelledby="ai-heading"
      className="relative py-24 md:py-32 lg:py-40"
    >
      <div className="container-page max-w-5xl">
        <SectionHeader
          eyebrow="Assistant"
          id="ai-heading"
          align="center"
          title={
            <>
              Skip the resume —{" "}
              <span className="text-gradient">ask the agent</span>.
            </>
          }
          description="A retrieval-grounded assistant trained on Arjun's experience, architecture decisions, and measurable impact. Real production AI integration, not a sample."
        />

        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="surface surface-shine flex h-[640px] flex-col overflow-hidden"
        >
          {/* Top bar */}
          <header className="flex shrink-0 items-center justify-between border-b border-hairline px-5 py-4">
            <div className="flex items-center gap-3">
              <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-accent text-background">
                <Sparkles size={16} className="text-white" />
              </span>
              <div>
                <p className="text-sm font-medium text-foreground">
                  Arjun&apos;s AI agent
                </p>
                <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-muted">
                  <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 align-middle" />
                  online · context ready
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={reset}
              disabled={isLoading || messages.length <= 1}
              className="inline-flex items-center gap-1.5 rounded-full border border-hairline bg-surface px-3 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-muted transition-colors hover:text-foreground disabled:cursor-not-allowed disabled:opacity-40"
            >
              <RefreshCw size={11} />
              Reset
            </button>
          </header>

          {/* Conversation */}
          <div
            ref={scrollRef}
            className="flex-1 space-y-5 overflow-y-auto px-5 py-6 md:px-7"
            role="log"
            aria-live="polite"
            aria-relevant="additions"
          >
            <AnimatePresence initial={false}>
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: reduce ? 0 : 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className={cn(
                    "flex gap-3",
                    msg.role === "user" ? "flex-row-reverse" : "flex-row",
                  )}
                >
                  <span
                    className={cn(
                      "mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full",
                      msg.role === "user"
                        ? "bg-foreground text-background"
                        : "border border-hairline bg-surface text-foreground",
                    )}
                  >
                    {msg.role === "user" ? (
                      <User size={13} />
                    ) : (
                      <Bot size={13} />
                    )}
                  </span>

                  <div
                    className={cn(
                      "max-w-[78%] rounded-2xl px-4 py-3 text-[14px] leading-[1.6]",
                      msg.role === "user"
                        ? "bg-foreground text-background rounded-tr-sm"
                        : "border border-hairline bg-surface text-foreground/90 rounded-tl-sm",
                    )}
                  >
                    {msg.role === "bot" ? (
                      <div
                        className="assistant-prose"
                        dangerouslySetInnerHTML={{
                          __html: parseMarkdown(msg.text),
                        }}
                      />
                    ) : (
                      msg.text
                    )}
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <motion.div
                  key="typing"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-3"
                >
                  <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full border border-hairline bg-surface text-foreground">
                    <Bot size={13} />
                  </span>
                  <div className="flex items-center gap-1.5 rounded-2xl rounded-tl-sm border border-hairline bg-surface px-4 py-3.5">
                    {[0, 0.18, 0.36].map((d) => (
                      <motion.span
                        key={d}
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{
                          duration: 1.2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: d,
                        }}
                        className="h-1.5 w-1.5 rounded-full bg-foreground/60"
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Suggestion chips */}
          {messages.length <= 1 && !isLoading && (
            <div className="border-t border-hairline px-5 py-4 md:px-7">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-faint">
                Try asking
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {SUGGESTIONS.map((s) => (
                  <li key={s}>
                    <button
                      type="button"
                      onClick={() => handleQuery(s)}
                      className="rounded-full border border-hairline bg-surface px-3 py-1.5 text-left text-[12.5px] text-muted transition-colors hover:border-hairline-strong hover:text-foreground"
                    >
                      {s}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleQuery(inputValue);
            }}
            className="shrink-0 border-t border-hairline bg-background/40 px-4 py-4 md:px-6"
          >
            <div className="relative flex items-center">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="Ask about my systems experience..."
                disabled={isLoading}
                aria-label="Message to AI"
                className="w-full rounded-full border border-hairline bg-surface px-5 py-3 pr-12 text-[14px] text-foreground placeholder:text-faint focus:outline-none focus:ring-2 focus:ring-accent/50 disabled:cursor-not-allowed disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                aria-label="Send message"
                className="absolute right-1.5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-foreground text-background transition-all duration-300 ease-out-expo hover:scale-105 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100"
              >
                <Send size={14} />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

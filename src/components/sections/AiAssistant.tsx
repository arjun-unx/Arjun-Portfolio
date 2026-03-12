"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { parseMarkdown } from "@/lib/utils/parseMarkdown";
import { Send, Bot, User, Sparkles } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "bot";
  text: string;
}

const SUGGESTIONS = [
  "What is Arjun's experience with AI Agents and RAG?",
  "How did he reduce API latency from 400ms to 120ms?",
  "Tell me about the Agentic Legal Analyst project.",
  "What cloud and infrastructure tools does he use?",
];

export function AiAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "init",
      role: "bot",
      text: "Hi! I'm Arjun's AI Agent. I have deep context on his experience building RAG pipelines, scalable backends, and full-stack SaaS products. Ask me anything about his architecture decisions or impact.",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleQuery = async (query: string) => {
    const trimmed = query.trim();
    if (!trimmed || isLoading) return;

    setIsLoading(true);
    setInputValue("");

    const userMsg: Message = { id: `u-${Date.now()}`, role: "user", text: trimmed };
    setMessages((prev) => [...prev, userMsg]);

    try {
      // Prepare history for context
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

      if (!res.ok) throw new Error("API error");

      const data = await res.json();
      const botMsg: Message = { id: `b-${Date.now()}`, role: "bot", text: data.response };
      setMessages((prev) => [...prev, botMsg]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: `err-${Date.now()}`,
          role: "bot",
          text: "I'm having trouble connecting right now. Please try again or reach out to Arjun directly via email.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleQuery(inputValue);
    }
  };

  return (
    <section id="ai-assistant" className="py-16 lg:py-20 relative" aria-labelledby="ai-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-2/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          
          <div className="w-full md:w-1/3 pt-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-accent-2/30 bg-accent-2/10 text-accent-2 text-sm font-medium mb-6">
              <Sparkles size={14} />
              <span>Real AI Integration</span>
            </div>
            <h2 id="ai-heading" className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Ask my <br/> <span className="text-gradient">AI Agent</span>
            </h2>
            <p className="text-fg-secondary text-lg font-light leading-relaxed mb-8">
              Don&apos;t want to read a long resume? I built this AI agent using OpenAI APIs to answer questions instantly, providing deep context about my engineering decisions, projects, and measurable impact.
            </p>
            <div className="flex flex-col gap-2">
              <span className="text-sm font-medium text-foreground/70 uppercase tracking-wider mb-2">Suggested</span>
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => handleQuery(s)}
                  disabled={isLoading}
                  className="text-left py-2 px-4 rounded-lg bg-card border border-border text-sm text-foreground/80 hover:bg-accent-1 hover:text-white hover:border-accent-1 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "400px" }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-2/3 glass-card flex flex-col h-[600px] overflow-hidden border border-accent-1/20 shadow-2xl relative"
          >
            {/* Top Bar */}
            <div className="h-14 border-b border-border bg-card/80 backdrop-blur-md flex items-center px-4 justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-accent-2 to-accent-1 flex items-center justify-center">
                  <Bot size={18} className="text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-medium leading-none">Arjun&apos;s AI</h3>
                  <span className="text-[10px] text-green-500 font-mono">● Online & Context Ready</span>
                </div>
              </div>
            </div>

            {/* Chat Area */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 bg-background/30" role="log" aria-live="polite">
              <AnimatePresence initial={false}>
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === "user" ? "bg-foreground text-background" : "bg-accent-1/20 text-accent-hover"}`}>
                      {msg.role === "user" ? <User size={16} /> : <Bot size={16} />}
                    </div>
                    
                    <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      msg.role === "user" 
                        ? "bg-foreground text-background rounded-tr-sm" 
                        : "bg-card border border-border shadow-sm rounded-tl-sm text-foreground/90"
                    }`}>
                      {msg.role === "bot" ? (
                        <div className="prose prose-sm dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: parseMarkdown(msg.text) }} />
                      ) : (
                        msg.text
                      )}
                    </div>
                  </motion.div>
                ))}
                
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex gap-3 flex-row"
                  >
                    <div className="w-8 h-8 rounded-full bg-accent-1/20 text-accent-hover flex items-center justify-center shrink-0">
                      <Bot size={16} />
                    </div>
                    <div className="bg-card border border-border shadow-sm rounded-2xl rounded-tl-sm px-4 py-4 flex items-center gap-1">
                      <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0 }} className="w-2 h-2 rounded-full bg-accent-hover" />
                      <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }} className="w-2 h-2 rounded-full bg-accent-hover" />
                      <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.4 }} className="w-2 h-2 rounded-full bg-accent-hover" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="h-4" />
            </div>

            {/* Input Row */}
            <div className="p-4 bg-card/80 backdrop-blur-md border-t border-border shrink-0">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about my systems experience..."
                  disabled={isLoading}
                  className="w-full bg-background border border-border rounded-xl pl-4 pr-12 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent-1/50 transition-all disabled:opacity-50"
                  aria-label="Message to AI"
                />
                <button
                  onClick={() => handleQuery(inputValue)}
                  disabled={isLoading || !inputValue.trim()}
                  className="absolute right-2 p-2 rounded-lg bg-accent-1 text-white hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
                  aria-label="Send message"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

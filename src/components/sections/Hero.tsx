"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import { RESUME } from "@/lib/resume";
import { ArrowUpRight, Github, Send } from "lucide-react";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  // Force scroll to top on initial page load and clear any lingering memory hashes
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Remove hash from URL synchronously without triggering a routing event
      if (window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname);
      }
      // Force scroll to top immediately, avoiding race conditions with automation
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    }
  }, []);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-20"
      aria-label="Introduction"
    >
      <div className="container relative z-10 px-6 mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-12 lg:gap-24 items-center">
          
          {/* Content Column */}
          <motion.div
            style={{ scale, opacity }}
            className="flex flex-col space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-accent-1/30 bg-accent-1/10 text-accent-hover text-sm font-medium w-fit"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-1 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-1"></span>
              </span>
              <span>Available for new opportunities</span>
            </motion.div>

            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-[1.1]"
              >
                Hi, I&apos;m <span className="text-gradient">Arjun</span>.
                <br />
                I write scalable code.
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-lg md:text-xl text-fg-secondary max-w-2xl font-light leading-relaxed"
              >
                I&apos;m a Software Engineer with 1.5+ years of experience building reliable web applications. I specialize in integrating AI features, optimizing backend services, and delivering polished user interfaces.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <a 
                href="#contact"
                className="group relative inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white transition-all bg-accent-1 rounded-xl overflow-hidden hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)]"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full transition-transform group-hover:translate-y-0" />
                <span className="relative flex items-center gap-2">
                  Connect with me <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </a>
              
              <a 
                href={RESUME.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-6 py-3 text-base font-medium text-foreground transition-all bg-card/50 backdrop-blur-md rounded-xl border border-border hover:bg-card hover:scale-105 active:scale-95"
              >
                <Github size={20} className="mr-2" />
                GitHub <ArrowUpRight size={16} className="ml-1 opacity-50 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          {/* Code/Architecture Parallax Card */}
          <motion.div 
            style={{ y: y2, opacity }}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block perspective-[1200px]"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-2/20 to-accent-1/20 blur-2xl rounded-3xl" />
            <div className="glass-card relative p-6 border-accent-1/20 shadow-2xl overflow-hidden group rotate-y-[-5deg] rotate-x-[5deg] transition-transform duration-700 hover:rotate-y-0 hover:rotate-x-0">
              {/* Scanline effect */}
              <div className="absolute inset-0 w-full h-full bg-[linear-gradient(transparent_0%,rgba(59,130,246,0.1)_50%,transparent_100%)] top-[-100%] animate-[scan_6s_linear_infinite]" />
              
              <div className="flex items-center justify-between border-b border-border/50 pb-4 mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="text-xs font-mono text-fg-secondary">ai_agent_pipeline.ts</div>
              </div>

              <pre className="text-sm font-mono text-fg-secondary leading-relaxed overflow-x-auto whitespace-pre-wrap">
                <code className="block text-accent-hover mb-2">import {'{'} Pinecone, OpenAI, LangChain {'}'} from &quot;ai-orchestration&quot;;</code>
                <br/>
                <code className="block">class <span className="text-blue-400">AutonomousAgent</span> {'{'}</code>
                <code className="block pl-4">async execute(task: <span className="text-purple-400">Intent</span>) {'{'}</code>
                <code className="block pl-8">const context = await <span className="text-blue-300">this.vectorDb</span>.query(task);</code>
                <code className="block pl-8">const strategy = await <span className="text-blue-300">this.llm</span>.reason(context);</code>
                <code className="block pl-8 text-green-400/80">{'// Reduced latency 400ms -> 120ms via Redis'}</code>
                <code className="block pl-8">return <span className="text-blue-300">this.workerPool</span>.dispatch(strategy);</code>
                <code className="block pl-4">{'}'}</code>
                <code className="block">{'}'}</code>
                <br/>
                <code className="block text-accent-2">system.scale({'{'} nodes: <span className="text-orange-400">100</span>, faultTolerance: <span className="text-orange-400">true</span> {'}'});</code>
              </pre>

              {/* Metrics overlays */}
              <div className="mt-6 flex items-center justify-between pt-4 border-t border-border/50">
                <div className="flex flex-col">
                  <span className="text-xs text-fg-secondary">Peak Throughput</span>
                  <span className="font-mono text-foreground font-medium">50+ ord/min</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-fg-secondary">Latency</span>
                  <span className="font-mono text-green-400 font-medium">{RESUME.metrics.apiResponseAfter}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-fg-secondary">DB Load</span>
                  <span className="font-mono text-accent-hover font-medium">-{RESUME.metrics.dbCpuReduction}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

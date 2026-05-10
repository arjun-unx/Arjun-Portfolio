"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Send } from "lucide-react";
import { RESUME } from "@/lib/resume";
import { cn } from "@/lib/utils/cn";

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

const HERO_METRICS = [
  { label: "API latency", value: "400ms → 120ms" },
  { label: "DB CPU", value: "−25%" },
  { label: "Order throughput", value: "50+/min" },
  { label: "Tier-1 tickets", value: "−40%" },
  { label: "Backend coverage", value: "85%" },
] as const;

export function Hero() {
  const reduce = useReducedMotion();

  // Container & item variants — orchestrated stagger keeps motion coherent.
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: reduce ? 0 : 0.07, delayChildren: 0.05 },
    },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: EASE_OUT_EXPO },
    },
  };

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative isolate min-h-[92svh] flex items-center pt-28 pb-16 md:pt-32"
    >
      <div className="container-page relative z-10 w-full">
        <motion.div
          initial="hidden"
          animate="show"
          variants={container}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end"
        >
          {/* Headline column */}
          <div className="lg:col-span-8 flex flex-col gap-7">
            <motion.span
              variants={item}
              className="pill border-hairline-strong bg-surface text-foreground/90"
            >
              <span className="relative inline-flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-emerald-400/70 animate-pulse-soft" />
                <span className="relative inline-block h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-[11px] tabular text-muted">
                Open to senior software roles · Chennai / Remote
              </span>
            </motion.span>

            <motion.h1
              variants={item}
              className="font-display text-display-xl font-medium text-foreground"
            >
              Software engineer
              <br className="hidden sm:block" />
              <span className="text-muted">building </span>
              <span className="text-gradient">scalable systems</span>
              <span className="text-muted">.</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="max-w-[58ch] text-base md:text-lg leading-relaxed text-muted"
            >
              I&apos;m <span className="text-foreground font-medium">Arjun Ramesh</span> —
              an SDE focused on event-driven backends, RAG pipelines, and refined
              product UI. I care about latency budgets, useful abstractions, and
              shipping interfaces that feel deliberate.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap items-center gap-3 pt-2">
              <a href="#contact" className="btn btn-primary group">
                <span>Get in touch</span>
                <Send
                  size={14}
                  className="transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
              <a
                href={RESUME.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost group"
              >
                <Github size={16} />
                <span>GitHub</span>
                <ArrowUpRight
                  size={14}
                  className="opacity-60 transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
              <a
                href="#projects"
                className="text-sm font-medium text-muted hover:text-foreground transition-colors px-2 py-3"
              >
                See selected work →
              </a>
            </motion.div>
          </div>

          {/* Console artifact column — replaces the previous broken 3D card */}
          <motion.div variants={item} className="lg:col-span-4">
            <ConsoleArtifact />
          </motion.div>
        </motion.div>

        {/* Metric ribbon */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20 md:mt-24"
        >
          <div className="hairline mb-6" />
          <div
            className={cn(
              "relative overflow-hidden",
              "[mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]",
            )}
          >
            <div className={cn("flex w-max gap-12 md:gap-20 px-4", !reduce && "marquee-track")}>
              {[...HERO_METRICS, ...HERO_METRICS].map((m, i) => (
                <div
                  key={`${m.label}-${i}`}
                  className="flex items-baseline gap-3 whitespace-nowrap"
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
                    {m.label}
                  </span>
                  <span className="font-display text-base md:text-lg font-medium tabular text-foreground">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Quiet scroll indicator — hidden when reduced motion */}
        {!reduce && (
          <motion.a
            href="#experience"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            aria-label="Scroll to experience"
            className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-muted hover:text-foreground transition-colors"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.22em]">scroll</span>
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown size={14} />
            </motion.span>
          </motion.a>
        )}
      </div>
    </section>
  );
}

/**
 * ConsoleArtifact — refined "now-serving" mock without 3D transforms.
 * Decorative; aria-hidden. Communicates engineering aesthetic.
 */
function ConsoleArtifact() {
  return (
    <div
      aria-hidden="true"
      className="surface surface-shine relative overflow-hidden p-5 lg:p-6"
    >
      {/* Header: window chrome + filename */}
      <div className="flex items-center justify-between border-b border-hairline pb-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
        </div>
        <span className="font-mono text-[10px] tracking-tight text-faint">
          ~/services/router.ts
        </span>
      </div>

      {/* Body — readable monospace */}
      <pre className="mt-4 whitespace-pre-wrap break-words font-mono text-[11.5px] leading-[1.85] text-muted">
        <code>
          <span className="text-foreground">async function</span>{" "}
          <span className="text-gradient">routeOrder</span>(o: <span className="text-foreground">Order</span>) {"{"}
          {"\n  "}<span className="text-foreground">const</span> ctx = <span className="text-foreground">await</span> ctx.fetch(o.id);
          {"\n  "}<span className="text-foreground">const</span> route = <span className="text-foreground">await</span> planner.choose(ctx);
          {"\n  "}<span className="text-faint">{"// 400ms → 120ms via Redis hot-path"}</span>
          {"\n  "}<span className="text-foreground">return</span> queue.publish(route);
          {"\n"}{"}"}
        </code>
      </pre>

      {/* Footer status row */}
      <div className="mt-5 flex items-center justify-between border-t border-hairline pt-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
          Status
        </span>
        <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-soft" />
          shipping · stable
        </span>
      </div>
    </div>
  );
}

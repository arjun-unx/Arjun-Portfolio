"use client";

import { motion, useReducedMotion } from "framer-motion";
import { RESUME } from "@/lib/resume";
import { SectionHeader } from "@/components/ui/SectionHeader";

/**
 * renderHighlight — splits **bold** segments without dangerouslySetInnerHTML.
 * Returns a React fragment with <strong> nodes interleaved with text.
 */
function renderHighlight(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="text-foreground font-medium">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export function Experience() {
  const reduce = useReducedMotion();

  return (
    <section
      id="experience"
      aria-labelledby="exp-heading"
      className="relative py-24 md:py-32 lg:py-40"
    >
      <div className="container-page">
        <SectionHeader
          eyebrow="Career"
          id="exp-heading"
          title={
            <>
              A short, deliberate <span className="text-gradient">trajectory</span>.
            </>
          }
          description="Production work building order routing, RAG agents, and full-stack product surfaces. I optimize for measurable outcomes and reliable systems."
        />

        <div className="relative">
          {/* Timeline rail */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[7px] top-2 bottom-4 w-px bg-gradient-to-b from-transparent via-hairline-strong to-transparent md:left-[calc(33.333%-1px)]"
          />

          <ol className="space-y-16 md:space-y-24">
            {RESUME.experience.map((job, i) => (
              <motion.li
                key={`${job.company}-${job.period}`}
                initial={{ opacity: 0, y: reduce ? 0 : 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                  delay: reduce ? 0 : i * 0.05,
                }}
                className="relative grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12"
              >
                {/* Timeline node */}
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-2 h-3.5 w-3.5 rounded-full border border-hairline-strong bg-background md:left-[calc(33.333%-7px)]"
                >
                  <span className="absolute inset-1 rounded-full bg-gradient-accent" />
                </span>

                {/* Left rail — period & meta */}
                <div className="md:col-span-1 pl-7 md:pl-0 md:pr-12 md:text-right">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
                    {job.type === "internship" ? "Internship" : "Full-time"}
                  </p>
                  <p className="mt-2 font-mono text-sm tabular text-muted">
                    {job.period}
                  </p>
                  <p className="mt-1 text-sm text-muted">{job.location}</p>
                  <div className="mt-4 flex flex-wrap gap-2 md:justify-end">
                    {job.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right rail — body */}
                <div className="md:col-span-2 pl-7 md:pl-0">
                  <h3 className="font-display text-2xl md:text-3xl font-medium tracking-tight text-foreground">
                    {job.company}
                  </h3>
                  <p className="mt-1 text-base text-foreground/80">
                    {job.title}
                  </p>

                  <ul className="mt-7 space-y-5">
                    {job.highlights.map((h, idx) => (
                      <li key={idx} className="flex gap-4">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/30 group-hover:bg-foreground/60"
                        />
                        <p className="text-[15px] leading-[1.7] text-muted">
                          {renderHighlight(h.text)}
                        </p>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-wrap gap-1.5">
                    {job.technologies.map((tech) => (
                      <span key={tech} className="tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

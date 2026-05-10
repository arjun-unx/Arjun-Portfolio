"use client";

import {
  ArrowUpRight,
  Boxes,
  Cloud,
  Cpu,
  Github,
  Layers,
  Server,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { RESUME } from "@/lib/resume";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils/cn";

const ICON_MAP: Record<string, LucideIcon> = {
  brain: Cpu,
  layout: Layers,
  server: Server,
  cloud: Cloud,
  boxes: Boxes,
};

function getProjectIcon(key?: string): LucideIcon {
  if (!key) return Sparkles;
  return ICON_MAP[key] ?? Sparkles;
}

export function Projects() {
  const reduce = useReducedMotion();

  return (
    <section
      id="projects"
      aria-labelledby="proj-heading"
      className="relative py-24 md:py-32 lg:py-40"
    >
      <div className="container-page">
        <SectionHeader
          eyebrow="Selected work"
          id="proj-heading"
          title={
            <>
              Real systems, <span className="text-gradient">end-to-end</span>.
            </>
          }
          description="Production-leaning projects: RAG retrieval, multi-agent orchestration, distributed events, and serverless workflows. No tutorial work."
        />

        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-6">
          {RESUME.projects.map((project, i) => {
            const Icon = getProjectIcon(project.icon);
            // First project takes the full row; remaining alternate as 3+3 on desktop.
            const span = i === 0 ? "lg:col-span-6" : "lg:col-span-3";
            return (
              <motion.li
                key={project.name}
                initial={{ opacity: 0, y: reduce ? 0 : 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                  delay: reduce ? 0 : Math.min(i * 0.06, 0.3),
                }}
                className={cn("group", span)}
              >
                <ProjectCard project={project} icon={Icon} featured={i === 0} />
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: (typeof RESUME)["projects"][number];
  icon: LucideIcon;
  featured: boolean;
}

function ProjectCard({ project, icon: Icon, featured }: ProjectCardProps) {
  return (
    <article
      className={cn(
        "surface surface-shine lift relative flex h-full flex-col overflow-hidden p-7 md:p-8",
        featured && "md:p-10 lg:flex-row lg:gap-12",
      )}
    >
      {/* Hover-only ambient gradient — never paints unless hovered */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(60% 80% at 30% 0%, var(--accent-soft), transparent 60%)",
        }}
      />

      <div className="relative z-10 flex flex-1 flex-col">
        <header className="flex items-start justify-between gap-4">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-hairline bg-surface text-foreground">
            <Icon size={18} strokeWidth={1.6} />
          </span>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} on GitHub`}
              className="inline-flex items-center gap-1.5 text-[12px] font-medium text-muted transition-colors hover:text-foreground"
            >
              <Github size={13} />
              <span>Source</span>
              <ArrowUpRight
                size={12}
                className="transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          )}
        </header>

        <h3 className="mt-7 font-display text-xl md:text-2xl font-medium tracking-tight text-foreground">
          {project.name}
        </h3>
        <p className="mt-3 max-w-prose text-[14.5px] leading-[1.7] text-muted">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span key={tech} className="tag">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {featured && (
        <div className="relative mt-8 hidden flex-1 items-center justify-center lg:mt-0 lg:flex">
          <FeaturedDecoration />
        </div>
      )}
    </article>
  );
}

/**
 * FeaturedDecoration — subtle decorative artwork for the lead project tile.
 * Pure CSS; no images, no rotating rings (avoids battery drain of forever-spinning SVG).
 */
function FeaturedDecoration() {
  return (
    <div
      aria-hidden="true"
      className="relative h-48 w-full max-w-md select-none"
    >
      {/* Concentric hairlines */}
      <div className="absolute inset-0 grid place-items-center">
        {[0.4, 0.6, 0.85, 1].map((scale, i) => (
          <div
            key={i}
            className="absolute aspect-square w-[80%] rounded-full border border-hairline"
            style={{
              transform: `scale(${scale})`,
              opacity: 1 - i * 0.18,
            }}
          />
        ))}
      </div>

      {/* Center node */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative h-12 w-12 rounded-2xl border border-hairline-strong bg-surface backdrop-blur-md">
          <span className="absolute inset-0 grid place-items-center">
            <span className="h-2 w-2 rounded-full bg-gradient-accent" />
          </span>
        </div>
      </div>

      {/* Orbiting nodes (CSS only; pause on hover) */}
      <ul className="absolute inset-0">
        {[
          { top: "10%", left: "70%" },
          { top: "60%", left: "82%" },
          { top: "78%", left: "20%" },
          { top: "30%", left: "12%" },
        ].map((pos, i) => (
          <li
            key={i}
            className="absolute h-2 w-2 rounded-full bg-foreground/40"
            style={pos}
          />
        ))}
      </ul>
    </div>
  );
}

"use client";

import { motion, useReducedMotion } from "framer-motion";
import { RESUME } from "@/lib/resume";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils/cn";

/**
 * Map a 0-100 proficiency to a qualitative label.
 * Communicates depth without the cliche progress-bar vocabulary.
 */
function proficiencyLabel(level: number): string {
  if (level >= 90) return "Core";
  if (level >= 80) return "Strong";
  if (level >= 70) return "Working";
  return "Familiar";
}

export function Skills() {
  const reduce = useReducedMotion();

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative py-24 md:py-32 lg:py-40"
    >
      <div className="container-page">
        <SectionHeader
          eyebrow="Capabilities"
          id="skills-heading"
          title={
            <>
              Tools chosen <span className="text-gradient">contextually</span>,
              not collected.
            </>
          }
          description="A pragmatic surface across systems, frontend, cloud, and data — depth where it counts, exposure where it helps."
        />

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-hairline bg-hairline md:grid-cols-2">
          {RESUME.skillCategories.map((category, idx) => (
            <motion.article
              key={category.label}
              initial={{ opacity: 0, y: reduce ? 0 : 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: reduce ? 0 : idx * 0.06,
              }}
              className="group relative bg-background p-7 md:p-9 transition-colors duration-500 hover:bg-surface"
            >
              {/* Header row */}
              <header className="flex items-baseline justify-between gap-4">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
                    {String(idx + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 font-display text-xl md:text-2xl font-medium tracking-tight text-foreground">
                    {category.label}
                  </h3>
                </div>
                <span
                  aria-hidden="true"
                  className="text-2xl opacity-60 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
                >
                  {category.icon}
                </span>
              </header>

              <ul className="mt-8 divide-y divide-hairline">
                {category.items.map((skill, i) => (
                  <li
                    key={skill.name}
                    className="flex items-center justify-between gap-4 py-3.5"
                  >
                    <span className="text-[15px] text-foreground/90">
                      {skill.name}
                    </span>
                    <span className="flex items-center gap-3">
                      <ProficiencyMeter level={skill.level} index={i} />
                      <span
                        className={cn(
                          "w-16 text-right font-mono text-[10.5px] uppercase tracking-[0.16em] tabular",
                          skill.level >= 80 ? "text-foreground" : "text-muted",
                        )}
                      >
                        {proficiencyLabel(skill.level)}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProficiencyMeterProps {
  level: number;
  index: number;
}

/**
 * ProficiencyMeter — minimal 5-dot capability indicator.
 * Replaces the noisy gradient bar + scanning blip from the previous design.
 */
function ProficiencyMeter({ level, index }: ProficiencyMeterProps) {
  const reduce = useReducedMotion();
  // Map 0-100 to a 0-5 dot count; we keep 5 dots so the row feels uniform.
  const filled = Math.round((level / 100) * 5);

  return (
    <div className="flex items-center gap-1" role="img" aria-label={`Proficiency ${level}%`}>
      {Array.from({ length: 5 }, (_, i) => {
        const isFilled = i < filled;
        return (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0.4 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.4,
              delay: reduce ? 0 : 0.05 * i + 0.04 * index,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={cn(
              "h-1.5 w-1.5 rounded-full transition-colors duration-500",
              isFilled
                ? "bg-foreground group-hover:bg-gradient-accent"
                : "bg-foreground/15",
            )}
          />
        );
      })}
    </div>
  );
}

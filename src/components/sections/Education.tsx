"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Award, GraduationCap, MapPin } from "lucide-react";
import { RESUME } from "@/lib/resume";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Education() {
  const reduce = useReducedMotion();
  const e = RESUME.education;

  return (
    <section
      id="education"
      aria-labelledby="edu-heading"
      className="relative py-24 md:py-32 lg:py-40"
    >
      <div className="container-page">
        <SectionHeader
          eyebrow="Education"
          id="edu-heading"
          title={
            <>
              Foundations in <span className="text-gradient">CS &amp; AI</span>.
            </>
          }
        />

        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="surface surface-shine lift overflow-hidden p-7 md:p-12"
        >
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[auto_1fr_auto] md:items-start">
            {/* Icon */}
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-hairline bg-surface text-foreground">
              <GraduationCap size={22} strokeWidth={1.6} />
            </div>

            {/* Body */}
            <div className="min-w-0">
              <h3 className="font-display text-2xl md:text-3xl font-medium tracking-tight text-foreground">
                {e.degree}
              </h3>
              <p className="mt-2 text-base text-foreground/80">
                {e.specialization}
              </p>
              <p className="mt-3 text-sm text-muted">
                {e.institution}
              </p>

              <ul className="mt-7 space-y-3">
                {e.achievements.map((a) => (
                  <li
                    key={a}
                    className="flex items-center gap-3 text-[14.5px] text-foreground/85"
                  >
                    <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-hairline bg-surface text-foreground">
                      <Award size={13} strokeWidth={1.8} />
                    </span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Meta column */}
            <div className="flex flex-col items-start gap-5 md:items-end md:text-right">
              <div>
                <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-faint">
                  Period
                </p>
                <p className="mt-1 font-mono text-sm tabular text-foreground">
                  {e.period}
                </p>
              </div>
              <div>
                <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-faint">
                  CGPA
                </p>
                <p className="mt-1 font-display text-3xl font-medium tabular text-foreground">
                  {e.cgpa}
                </p>
              </div>
              <div className="inline-flex items-center gap-1.5 text-sm text-muted">
                <MapPin size={13} />
                <span>{e.location}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

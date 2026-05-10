"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils/cn";

interface SectionHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "start" | "center";
  id?: string;
  className?: string;
}

/**
 * SectionHeader — editorial heading block reused across sections.
 *
 * Why centralized: kills 6+ near-duplicate header markup blocks across
 * sections (Experience, Skills, Projects, etc.) and guarantees identical
 * rhythm — eyebrow → title → description, with consistent motion.
 */
export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "start",
  id,
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "flex flex-col gap-5 mb-14 md:mb-20",
        align === "center" ? "items-center text-center" : "items-start",
        className,
      )}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 id={id} className="display-h2 max-w-3xl">
        {title}
      </h2>
      {description && (
        <p className="text-muted text-base md:text-lg max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}

"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Copy, Github, Linkedin, Mail } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { RESUME } from "@/lib/resume";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils/cn";

const SECONDARY_LINKS = [
  {
    key: "linkedin",
    label: "LinkedIn",
    handle: "arjunramesh163",
    href: RESUME.contact.linkedin,
    icon: Linkedin,
  },
  {
    key: "github",
    label: "GitHub",
    handle: "arjun-unx",
    href: RESUME.contact.github,
    icon: Github,
  },
  {
    key: "leetcode",
    label: "LeetCode",
    handle: "arjun_unx",
    href: RESUME.contact.leetcode,
    icon: LeetcodeMark,
  },
] as const;

export function Contact() {
  const reduce = useReducedMotion();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(RESUME.contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // ignore — not all environments allow clipboard writes
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative py-24 md:py-32 lg:py-40"
    >
      <div className="container-page">
        <SectionHeader
          eyebrow="Contact"
          id="contact-heading"
          align="center"
          title={
            <>
              Let&apos;s build something{" "}
              <span className="text-gradient">deliberate</span>.
            </>
          }
          description="Currently open to senior software roles — backend, full-stack product, or platform. The fastest path is email; I usually reply within a day."
        />

        {/* Primary email card */}
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="surface surface-shine relative mx-auto max-w-3xl overflow-hidden p-7 md:p-10"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -inset-px rounded-[inherit]"
            style={{
              background:
                "radial-gradient(50% 80% at 50% 0%, var(--accent-soft), transparent 60%)",
              opacity: 0.7,
            }}
          />

          <div className="relative z-10 flex flex-col items-center text-center md:flex-row md:items-center md:justify-between md:text-left">
            <div className="flex items-center gap-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-hairline bg-surface text-foreground">
                <Mail size={20} strokeWidth={1.6} />
              </span>
              <div>
                <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-faint">
                  Reach out
                </p>
                <a
                  href={`mailto:${RESUME.contact.email}`}
                  className="mt-1 block font-display text-xl md:text-2xl font-medium tracking-tight text-foreground hover:text-gradient transition-all"
                >
                  {RESUME.contact.email}
                </a>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 md:mt-0">
              <button
                type="button"
                onClick={copyEmail}
                className={cn(
                  "btn btn-ghost group",
                  copied && "border-hairline-strong",
                )}
                aria-live="polite"
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                <span>{copied ? "Copied" : "Copy"}</span>
              </button>
              <a
                href={`mailto:${RESUME.contact.email}`}
                className="btn btn-primary group"
              >
                <span>Send email</span>
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Secondary links */}
        <ul className="mx-auto mt-6 grid max-w-3xl grid-cols-1 gap-3 md:grid-cols-3">
          {SECONDARY_LINKS.map((link, i) => {
            const Icon = link.icon;
            return (
              <motion.li
                key={link.key}
                initial={{ opacity: 0, y: reduce ? 0 : 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.55,
                  ease: [0.16, 1, 0.3, 1],
                  delay: reduce ? 0 : i * 0.05,
                }}
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="surface lift surface-shine group flex items-center justify-between gap-4 px-5 py-4"
                >
                  <span className="flex items-center gap-3">
                    <Icon className="text-muted transition-colors group-hover:text-foreground" />
                    <span className="flex flex-col">
                      <span className="text-sm font-medium text-foreground">
                        {link.label}
                      </span>
                      <span className="font-mono text-[11px] tabular text-muted">
                        @{link.handle}
                      </span>
                    </span>
                  </span>
                  <ArrowUpRight
                    size={14}
                    className="text-faint transition-all duration-300 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
                  />
                </a>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/** Lightweight LeetCode mark — no external image dependency. */
function LeetcodeMark({ className }: { className?: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M14.5 4 8 10.5l6.5 6.5" />
      <path d="M8 10.5h11" />
      <path d="M19.5 4 13 10.5" opacity="0" />
    </svg>
  );
}

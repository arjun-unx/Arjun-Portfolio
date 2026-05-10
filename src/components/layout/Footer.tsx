import { ArrowUpRight } from "lucide-react";
import { RESUME } from "@/lib/resume";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-hairline bg-background/60 backdrop-blur-md">
      <div className="container-page py-14 md:py-16">
        <div className="flex flex-col items-start gap-10 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-3">
            <span className="font-display text-3xl md:text-4xl font-medium tracking-tightest text-foreground">
              {RESUME.name}
            </span>
            <p className="max-w-sm text-sm text-muted">
              Software engineer building reliable backends and refined product UI.
              Currently in Chennai · open to remote.
            </p>
            <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
              available for new roles
            </span>
          </div>

          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm md:flex md:items-end md:gap-10"
          >
            <a
              href={`mailto:${RESUME.contact.email}`}
              className="group inline-flex items-center gap-1 text-muted transition-colors hover:text-foreground"
            >
              Email
              <ArrowUpRight
                size={12}
                className="transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href={RESUME.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 text-muted transition-colors hover:text-foreground"
            >
              GitHub
              <ArrowUpRight
                size={12}
                className="transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href={RESUME.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 text-muted transition-colors hover:text-foreground"
            >
              LinkedIn
              <ArrowUpRight
                size={12}
                className="transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href={RESUME.contact.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 text-muted transition-colors hover:text-foreground"
            >
              LeetCode
              <ArrowUpRight
                size={12}
                className="transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </nav>
        </div>

        <div className="hairline mt-12" />

        <div className="mt-6 flex flex-col items-start justify-between gap-3 text-xs text-faint md:flex-row md:items-center">
          <span>© {currentYear} {RESUME.name}. Designed and built with care.</span>
          <span className="font-mono">Next.js · Tailwind · Framer Motion</span>
        </div>
      </div>
    </footer>
  );
}

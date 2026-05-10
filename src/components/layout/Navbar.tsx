"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "../ui/ThemeToggle";
import { useScrollSpy } from "@/lib/hooks/useScrollSpy";
import { cn } from "@/lib/utils/cn";

const NAV_LINKS = [
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useScrollSpy(
    NAV_LINKS.map((l) => l.href.substring(1)),
    100,
  );

  // Hairline scroll progress bar across the top of the nav.
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.4,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = mobileOpen ? "hidden" : prev || "";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  // Esc closes mobile drawer
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  const close = () => setMobileOpen(false);

  return (
    <header
      id="navbar"
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[padding,backdrop-filter,background] duration-500 ease-out-expo",
        scrolled ? "glass-nav py-3" : "py-5 bg-transparent",
      )}
    >
      <div className="container-page flex items-center justify-between">
        <a
          href="#hero"
          className="group inline-flex items-center gap-2 font-semibold tracking-tightest text-foreground"
          aria-label="Arjun Ramesh — Home"
        >
          <span className="relative inline-flex h-7 w-7 items-center justify-center overflow-hidden rounded-md bg-foreground text-background text-[12px] font-bold transition-transform duration-500 ease-out-expo group-hover:scale-105">
            AR
          </span>
          <span className="hidden text-sm md:inline tabular text-muted">
            arjunramesh
            <span className="text-foreground">.dev</span>
          </span>
        </a>

        {/* Desktop nav — pill rail with sliding active indicator */}
        <nav
          aria-label="Main"
          className="hidden items-center gap-1 rounded-full border border-hairline bg-surface px-1.5 py-1.5 backdrop-blur-md md:inline-flex"
        >
          {NAV_LINKS.map((link) => {
            const id = link.href.substring(1);
            const isActive = activeSection === id;
            return (
              <a
                key={link.href}
                href={link.href}
                className="relative inline-flex items-center px-3.5 py-1.5 text-[13px] font-medium text-muted transition-colors duration-300 hover:text-foreground"
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-full bg-foreground"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span
                  className={cn(
                    "relative z-10 transition-colors",
                    isActive && "text-background",
                  )}
                >
                  {link.label}
                </span>
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-hairline bg-surface text-foreground"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label="Open menu"
          >
            <Menu size={16} />
          </button>
        </div>
      </div>

      {/* Hairline progress bar */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX: progress }}
        className="absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-accent"
      />

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 bg-background/70 backdrop-blur-md md:hidden"
              onClick={close}
              aria-hidden="true"
            />
            <motion.aside
              key="drawer"
              id="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="fixed bottom-0 right-0 top-0 z-50 flex w-[82vw] max-w-[340px] flex-col border-l border-hairline bg-background p-6 md:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Site navigation"
            >
              <div className="flex items-center justify-between">
                <span className="eyebrow">Navigate</span>
                <button
                  type="button"
                  onClick={close}
                  aria-label="Close menu"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-hairline bg-surface text-muted"
                >
                  <X size={16} />
                </button>
              </div>

              <nav className="mt-8 flex flex-1 flex-col gap-1">
                {NAV_LINKS.map((link) => {
                  const id = link.href.substring(1);
                  const isActive = activeSection === id;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={close}
                      className={cn(
                        "group flex items-center justify-between rounded-2xl border px-4 py-4 transition-all duration-300",
                        isActive
                          ? "border-hairline-strong bg-surface text-foreground"
                          : "border-transparent text-muted hover:bg-surface hover:text-foreground",
                      )}
                    >
                      <span className="text-lg font-medium">{link.label}</span>
                      <span className="font-mono text-[11px] tabular text-faint">
                        {String(NAV_LINKS.indexOf(link) + 1).padStart(2, "0")}
                      </span>
                    </a>
                  );
                })}
              </nav>

              <div className="mt-8 hairline" />
              <p className="mt-6 text-xs text-muted">
                Currently open to senior software roles.
              </p>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

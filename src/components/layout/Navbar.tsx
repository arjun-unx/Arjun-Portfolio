"use client";

import { useState, useEffect } from "react";
import { ThemeToggle } from "../ui/ThemeToggle";
import { useScrollSpy } from "@/lib/hooks/useScrollSpy";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils/cn";

const NAV_LINKS = [
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
] as const;

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const activeSection = useScrollSpy(
    NAV_LINKS.map((link) => link.href.substring(1)),
    100
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileOpen]);

  const closeMobile = () => setIsMobileOpen(false);

  return (
    <header
      id="navbar"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass-nav py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <a
          href="#hero"
          className="text-xl font-bold tracking-tighter text-foreground hover:opacity-80 transition-opacity"
          aria-label="Arjun Ramesh - Home"
        >
          <span className="text-gradient">AR</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2 bg-card/50 backdrop-blur-md px-4 py-2 rounded-full border border-border">
          <nav aria-label="Main Navigation" className="flex items-center gap-1 mr-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-full transition-all duration-300",
                  activeSection === link.href.substring(1)
                    ? "bg-foreground text-background shadow-sm"
                    : "text-fg-secondary hover:text-foreground hover:bg-foreground/5"
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="w-px h-4 bg-border mx-2" />
          <ThemeToggle />
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileOpen(true)}
            className="p-2 text-foreground -mr-2"
            aria-expanded={isMobileOpen}
            aria-controls="mobile-menu"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileOpen && (
        <>
          <div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden animate-fade-in"
            onClick={closeMobile}
            aria-hidden="true"
          />
          <div
            id="mobile-menu"
            className="fixed top-0 right-0 bottom-0 w-[280px] bg-card border-l border-border z-50 p-6 shadow-2xl md:hidden animate-slide-up"
          >
            <div className="flex justify-end mb-8">
              <button
                onClick={closeMobile}
                className="p-2 text-fg-secondary hover:text-foreground bg-background rounded-full border border-border"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>
            <nav className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMobile}
                  className={cn(
                    "text-lg font-medium py-3 px-4 rounded-xl transition-colors",
                    activeSection === link.href.substring(1)
                      ? "bg-accent-1/10 text-accent-1"
                      : "text-foreground hover:bg-foreground/5"
                  )}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </>
      )}
    </header>
  );
}

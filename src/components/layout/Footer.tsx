import { ArrowUpRight } from "lucide-react";
import { RESUME } from "@/lib/resume";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border bg-background mt-24">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col md:items-start items-center">
          <span className="text-foreground font-semibold text-lg flex items-center gap-2">
            Arjun Ramesh
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          </span>
          <p className="text-sm text-fg-secondary mt-1 max-w-xs text-center md:text-left">
            Building rigorous, autonomous, and scalable intelligence.
          </p>
        </div>

        <div className="flex items-center gap-6 mt-4 md:mt-0 text-sm text-fg-secondary">
          <a href={RESUME.contact.github} className="hover:text-foreground transition-colors flex items-center gap-1 group">
            Source Code <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <span>&copy; {currentYear}</span>
        </div>
      </div>
    </footer>
  );
}

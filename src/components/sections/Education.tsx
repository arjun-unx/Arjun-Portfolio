"use client";

import { motion } from "framer-motion";
import { RESUME } from "@/lib/resume";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-16 lg:py-20 relative" aria-labelledby="edu-heading">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <div className="flex flex-col space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-accent-1/30 bg-accent-1/10 text-accent-hover text-sm font-medium w-fit">
            <span>Academic Background</span>
          </div>
          <h2 id="edu-heading" className="text-4xl md:text-5xl font-bold tracking-tight">
            Foundations & <span className="text-gradient">Theory</span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "400px" }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-12 relative overflow-hidden group hover:border-accent-1/30 transition-colors max-w-4xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-1/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent-1/10 transition-colors duration-700" />
          
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 relative z-10">
            <div className="flex gap-6">
              <div className="w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                <GraduationCap size={32} className="text-accent-1" />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-2 tracking-tight">{RESUME.education.degree}</h3>
                <h4 className="text-lg text-accent-hover font-medium mb-1">{RESUME.education.specialization}</h4>
                <p className="text-fg-secondary text-base">{RESUME.education.institution}</p>
                
                <div className="mt-8 space-y-1">
                  {RESUME.education.achievements.map((ach, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-1/50" />
                      <span className="text-foreground/80 font-medium">{ach}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start md:items-end gap-2 shrink-0 border-t md:border-t-0 border-border/50 pt-6 md:pt-0">
              <span className="text-sm font-mono text-fg-secondary bg-background border border-border px-3 py-1 rounded-full">
                {RESUME.education.period}
              </span>
              <span className="text-sm font-mono text-fg-secondary px-3 py-1">
                {RESUME.education.location}
              </span>
              <div className="mt-4 inline-flex flex-col items-center md:items-end">
                <span className="text-xs uppercase tracking-widest text-fg-secondary font-semibold mb-1">CGPA</span>
                <span className="text-3xl font-bold tracking-tighter text-foreground">{RESUME.education.cgpa}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

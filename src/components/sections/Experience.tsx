"use client";

import { motion } from "framer-motion";
import { RESUME } from "@/lib/resume";

export function Experience() {
  return (
    <section id="experience" className="py-16 lg:py-20 relative" aria-labelledby="exp-heading">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <div className="flex flex-col space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-accent-1/30 bg-accent-1/10 text-accent-hover text-sm font-medium w-fit">
            <span>Career Progression</span>
          </div>
          <h2 id="exp-heading" className="text-4xl md:text-5xl font-bold tracking-tight">
            Where I&apos;ve <span className="text-gradient">Worked</span>
          </h2>
          <p className="text-fg-secondary max-w-2xl text-lg font-light">
            Here is a look at my professional journey, focusing on building reliable systems, integrating modern features, and optimizing performance.
          </p>
        </div>

        <div className="space-y-12">
          {RESUME.experience.map((job, i) => (
            <motion.div
              key={job.company + job.period}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "400px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card relative overflow-hidden group grid grid-cols-1 md:grid-cols-3 gap-8 p-8 md:p-12 hover:border-accent-1/50 transition-colors"
            >
              {/* Left Column: Context */}
              <div className="md:col-span-1 flex flex-col">
                <h3 className="text-3xl font-bold mb-2 tracking-tight">{job.company}</h3>
                <h4 className="text-lg text-accent-hover font-medium mb-4">{job.title}</h4>
                <div className="flex flex-col gap-1 text-sm text-fg-secondary font-mono mb-8">
                  <span>{job.period}</span>
                  <span>{job.location}</span>
                </div>
                
                <h5 className="text-xs font-semibold uppercase tracking-widest text-fg-secondary mb-3">Core Focus</h5>
                <div className="flex flex-wrap gap-2 mb-8">
                  {job.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded bg-accent-1/10 text-accent-1 border border-accent-1/20">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto hidden md:block">
                  <div className="w-16 h-1 bg-gradient-to-r from-accent-1 to-transparent rounded-full opacity-50 group-hover:w-full transition-all duration-700" />
                </div>
              </div>

              {/* Right Column: Details */}
              <div className="md:col-span-2 flex flex-col">
                <div className="space-y-8">
                  
                  {/* Highlights */}
                  <div>
                    <h5 className="text-xs font-semibold uppercase tracking-widest text-fg-secondary mb-6">Architecture & Impact</h5>
                    <ul className="space-y-5">
                      {job.highlights.map((h, idx) => (
                        <li key={idx} className="flex gap-4 items-start">
                          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-1/10 flex items-center justify-center text-lg shadow-inner group-hover:scale-110 transition-transform mt-0.5 border border-accent-1/20">
                            {h.icon}
                          </span>
                          <span className="text-foreground/90 leading-relaxed text-[15px] pt-1" dangerouslySetInnerHTML={{ __html: h.text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>') }} />
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="pt-6 border-t border-border/50">
                    <h5 className="text-xs font-semibold uppercase tracking-widest text-fg-secondary mb-4">Tech Sub-Systems</h5>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1.5 rounded-lg bg-card border border-border text-xs font-medium text-fg-secondary group-hover:text-foreground transition-colors hover:bg-background shadow-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

              {/* Ambient Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-1/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

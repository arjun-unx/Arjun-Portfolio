"use client";

import { motion } from "framer-motion";
import { RESUME } from "@/lib/resume";
import { Github, Play, ArrowUpRight, Cpu, Layers, Server } from "lucide-react";

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "brain": return <Cpu size={24} className="text-purple-400" />;
    case "layout": return <Layers size={24} className="text-blue-400" />;
    case "server": return <Server size={24} className="text-emerald-400" />;
    default: return <Play size={24} />;
  }
};

export function Projects() {
  return (
    <section id="projects" className="py-16 lg:py-20 relative" aria-labelledby="proj-heading">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <div className="flex flex-col space-y-4 mb-12 items-center text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-accent-1/30 bg-accent-1/10 text-accent-hover text-sm font-medium w-fit">
            <span>Engineering Showcase</span>
          </div>
          <h2 id="proj-heading" className="text-4xl md:text-5xl font-bold tracking-tight">
            Built from <span className="text-gradient">Scratch</span>
          </h2>
          <p className="text-fg-secondary max-w-2xl text-lg font-light mx-auto">
            Real systems addressing RAG pipelines, distributed events, and SaaS architecture. No tutorial apps, just applied engineering.
          </p>
        </div>

        {/* High-end Bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {RESUME.projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "400px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`glass-card group overflow-hidden relative flex flex-col ${
                index === 0 ? "min-h-[300px] lg:col-span-2 lg:flex-row" : "min-h-[auto]"
              }`}
            >
              {/* Dynamic Gradients specific to project index */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none ${
                index === 0 ? "bg-gradient-to-tr from-purple-500 to-blue-500" :
                index === 1 ? "bg-gradient-to-tr from-blue-500 to-emerald-500" :
                "bg-gradient-to-tr from-emerald-500 to-amber-500"
              }`} />

              <div className={`px-6 lg:p-8 flex flex-col justify-center flex-1 relative z-10 ${index === 0 ? "lg:w-1/2" : ""}`}>
                <div className="w-12 h-12 rounded-xl bg-background border border-border shadow-inner flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {getIcon(project.icon || "")}
                </div>
                
                <h3 className="text-2xl font-bold mb-3 tracking-tight group-hover:text-accent-hover transition-colors">
                  {project.name}
                </h3>
                
                <p className="text-sm text-fg-secondary leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech: string) => (
                    <span key={tech} className="px-2 py-1 text-[11px] font-mono border border-border rounded-lg bg-background/50 text-foreground/70">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-semibold hover:text-accent-hover transition-colors"
                    >
                      <Github size={18} className="mr-2" /> View Source <ArrowUpRight size={14} className="ml-1 opacity-50" />
                    </a>
                  )}
                </div>
              </div>

              <div className={`relative overflow-hidden bg-background/30 border-t lg:border-t-0 lg:border-l border-border/50 flex items-center justify-center ${index === 0 ? "p-8 lg:w-1/2" : "h-32"}`}>
                 <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.05] mix-blend-overlay" />
                 <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    className={`w-[150%] h-[150%] absolute rounded-full border border-border/20 ${
                      index === 0 ? "border-dashed" : "border-dotted"
                    }`}
                 />
                 <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
                    className="w-[100%] h-[100%] absolute rounded-full border border-accent-1/10 border-solid"
                 />
                 {index === 0 && (
                   <div className="relative glass-card w-64 h-48 flex items-center justify-center shadow-xl group-hover:rotate-y-12 transition-transform duration-500 perspective-[1000px]">
                      <div className="w-full max-w-[80%] space-y-2">
                        <div className="h-2 bg-purple-500/50 rounded w-1/3" />
                        <div className="h-2 bg-blue-500/50 rounded w-full" />
                        <div className="h-2 bg-blue-500/50 rounded w-4/5" />
                        <div className="h-2 border-dashed border-b border-border w-full my-4" />
                        <div className="h-2 text-xs font-mono text-fg-secondary">query(intent)</div>
                      </div>
                   </div>
                 )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

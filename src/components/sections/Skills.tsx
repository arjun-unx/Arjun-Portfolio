"use client";

import { motion } from "framer-motion";
import { RESUME } from "@/lib/resume";

export function Skills() {
  return (
    <section id="skills" className="py-16 lg:py-20 relative" aria-labelledby="skills-heading">
      <div className="absolute inset-0 bg-gradient-radial from-accent-1/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="flex flex-col space-y-4 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-accent-2/30 bg-accent-2/10 text-accent-2 text-sm font-medium w-fit">
              <span>System Capabilities</span>
            </div>
            <h2 id="skills-heading" className="text-4xl md:text-5xl font-bold tracking-tight">
              Tools I use to <span className="text-gradient">Scale</span>
            </h2>
            <p className="text-fg-secondary text-lg font-light leading-relaxed">
              I don&apos;t just collect syntax. I architect systems by combining these tools contextually—orchestrating LLMs, decoupling services, and pushing pixels efficiently to the GPU.
            </p>
          </div>
        </div>

        {/* Dynamic Capability Clusters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {RESUME.skillCategories.map((category, index) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "400px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-8 group hover:border-accent-2/30 transition-colors"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-accent-1/10 flex items-center justify-center text-2xl border border-accent-1/20 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-foreground">{category.label}</h3>
              </div>
              
              <div className="space-y-6">
                {category.items.map((skill, i) => (
                  <div key={skill.name} className="relative group/skill">
                    <div className="flex justify-between items-end mb-2">
                      <span className="font-medium text-foreground tracking-wide">{skill.name}</span>
                      <span className="text-xs font-mono text-fg-secondary border border-border px-2 py-0.5 rounded-full bg-background transition-colors group-hover/skill:border-accent-1 group-hover/skill:text-accent-1">
                        {skill.level}% depth
                      </span>
                    </div>
                    {/* Animated capability line (not a generic progress bar, stylized capability wire) */}
                    <div className="h-0.5 w-full bg-border rounded-full overflow-hidden relative">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, margin: "400px" }}
                        transition={{ duration: 1, delay: 0.2 + (i * 0.1), ease: "easeOut" }}
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-accent-1 to-accent-2"
                      />
                      {/* Scanning blip */}
                      <motion.div
                        animate={{ left: ["0%", "100%", "0%"], opacity: [0, 1, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
                        className="absolute top-[-2px] w-4 h-1.5 bg-white blur-[2px] rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

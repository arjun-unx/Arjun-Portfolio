"use client";

import { motion } from "framer-motion";
import { RESUME } from "@/lib/resume";
import { Mail, Phone, ExternalLink, Copy, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="contact" className="py-16 lg:py-20 relative" aria-labelledby="contact-heading">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <div className="flex flex-col space-y-4 mb-12 items-center text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-accent-1/30 bg-accent-1/10 text-accent-hover text-sm font-medium w-fit">
            <span>Get in Touch</span>
          </div>
          <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold tracking-tight">
            Let&apos;s build <span className="text-gradient">Systems</span>
          </h2>
          <p className="text-fg-secondary max-w-2xl text-lg font-light mx-auto">
            Currently open to opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <motion.a
            href={`mailto:${RESUME.contact.email}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "400px" }}
            transition={{ duration: 0.5 }}
            className="glass-card p-6 group hover:border-accent-1/50 transition-colors flex flex-col items-center justify-center text-center gap-4 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-accent-1/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-12 h-12 rounded-full border border-accent-1/20 bg-accent-1/10 flex items-center justify-center text-accent-hover group-hover:scale-110 transition-transform">
              <Mail size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Email</h3>
              <p className="text-sm text-fg-secondary">Drop a line</p>
            </div>
          </motion.a>

          <motion.a
            href={RESUME.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "400px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-6 group hover:border-blue-500/50 transition-colors flex flex-col items-center justify-center text-center gap-4 relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 text-fg-secondary opacity-0 group-hover:opacity-100 transition-opacity">
               <ExternalLink size={16} />
            </div>
            <div className="w-12 h-12 rounded-full border border-blue-500/20 bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">LinkedIn</h3>
              <p className="text-sm text-fg-secondary">Network</p>
            </div>
          </motion.a>

          <motion.a
            href={RESUME.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "400px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-card p-6 group hover:border-foreground/50 transition-colors flex flex-col items-center justify-center text-center gap-4 relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 text-fg-secondary opacity-0 group-hover:opacity-100 transition-opacity">
               <ExternalLink size={16} />
            </div>
            <div className="w-12 h-12 rounded-full border border-border bg-background flex items-center justify-center text-foreground group-hover:scale-110 transition-transform">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">GitHub</h3>
              <p className="text-sm text-fg-secondary">Code</p>
            </div>
          </motion.a>

          <motion.a
            href={RESUME.contact.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "400px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-card p-6 group hover:border-foreground/50 transition-colors flex flex-col items-center justify-center text-center gap-4 relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 text-fg-secondary opacity-0 group-hover:opacity-100 transition-opacity">
               <ExternalLink size={16} />
            </div>
            <div className="w-12 h-12 rounded-full border border-border bg-background flex items-center justify-center text-foreground group-hover:scale-110 transition-transform">
              <svg width="20" height="20" viewBox="0 0 50 50" fill="currentColor">
                <path d="M30.5 4.5L12 23l18.5 18.5 4.5-4.5L21 23l14-14z"/>
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">LeetCode</h3>
              <p className="text-sm text-fg-secondary">Problems</p>
            </div>
          </motion.a>

        </div>
      </div>
    </section>
  );
}

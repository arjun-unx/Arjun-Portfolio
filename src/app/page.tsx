import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Education } from "@/components/sections/Education";
import { AiAssistant } from "@/components/sections/AiAssistant";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      {/* 
        GPU-Accelerated Persistent Background Layer 
        Moved out of Hero to ensure ZERO repaints during scroll.
        The compositor simply scrolls the foreground over this constant layer.
      */}
      <div className="fixed inset-0 pointer-events-none z-[-1]" style={{ willChange: 'transform' }}>
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent-2/20 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute top-[30%] right-[-10%] w-[40%] h-[60%] bg-accent-1/20 blur-[140px] rounded-full mix-blend-screen" />
        <div className="absolute top-[60%] left-[20%] w-[30%] h-[40%] bg-accent-2/10 blur-[100px] rounded-full mix-blend-screen" />
      </div>

      <div className="fixed inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none z-[-1]" />
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] opacity-20 pointer-events-none z-[-1]" />

      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <AiAssistant />
      <Contact />
    </>
  );
}

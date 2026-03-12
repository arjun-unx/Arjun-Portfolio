// ──────────────────────────────────────────────────
// Shared TypeScript types for the resume data model
// ──────────────────────────────────────────────────

export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
  leetcode: string;
}

export interface SkillCategory {
  label: string;
  icon: string;
  items: SkillItem[];
}

export interface SkillItem {
  name: string;
  level: number;
}

export interface ExperienceItem {
  company: string;
  title: string;
  type: "full-time" | "internship";
  period: string;
  location: string;
  tags: string[];
  highlights: Highlight[];
  technologies: string[];
}

export interface Highlight {
  icon: string;
  text: string;
}

export interface Project {
  name: string;
  description: string;
  technologies?: string[];
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
  icon?: string;
}

export interface Education {
  degree: string;
  specialization: string;
  institution: string;
  period: string;
  location: string;
  cgpa: string;
  achievements: string[];
}

export interface ImpactMetrics {
  orderProcessingImprovement: string;
  apiResponseBefore: string;
  apiResponseAfter: string;
  dbCpuReduction: string;
  timeSaved: string;
}

export interface ResumeData {
  name: string;
  title: string;
  contact: ContactInfo;
  skillCategories: SkillCategory[];
  experience: ExperienceItem[];
  projects: Project[];
  education: Education;
  metrics: ImpactMetrics;
  dsaProblems: string;
}

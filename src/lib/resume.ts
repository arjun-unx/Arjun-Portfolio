import type { ResumeData } from "@/types/resume";

export const RESUME: ResumeData = {
  name: "Arjun Ramesh",
  title: "Software Engineer",
  contact: {
    email: "arjunramesh1002@gmail.com",
    linkedin: "https://linkedin.com/in/arjunramesh163/",
    github: "https://github.com/arjun-unx",
    leetcode: "https://leetcode.com/u/arjun_unx/",
  },
  metrics: {
    orderProcessingImprovement: "30%",
    apiResponseBefore: "400ms",
    apiResponseAfter: "120ms",
    dbCpuReduction: "25%",
    timeSaved: "5 hrs/wk",
  },
  dsaProblems: "100+",
  skillCategories: [
    {
      label: "AI & Distributed Systems",
      icon: "🧠",
      items: [
        { name: "LLM Orchestration (LangChain/LlamaIndex)", level: 85 },
        { name: "RAG Pipelines & Vector DBs (Pinecone)", level: 90 },
        { name: "Autonomous Agents & Tool Calling", level: 75 },
        { name: "Microservices (Spring Boot/Node.js)", level: 80 },
        { name: "Event-Driven Arhitecture (RabbitMQ/Kafka)", level: 75 },
      ],
    },
    {
      label: "Frontend Experience",
      icon: "⚡",
      items: [
        { name: "Angular 16+ & Redux", level: 85 },
        { name: "React / Next.js (App Router)", level: 85 },
        { name: "Tailwind CSS & Framer Motion", level: 85 },
        { name: "WebSockets & Real-time UIs", level: 75 },
      ],
    },
    {
      label: "Cloud & Infrastructure",
      icon: "☁️",
      items: [
        { name: "AWS (Lambda, EC2, S3, RDS)", level: 80 },
        { name: "PostgreSQL & Redis Caching", level: 85 },
        { name: "Docker & CI/CD Pipelines", level: 80 },
        { name: "System Tracing & Observability", level: 75 },
      ],
    },
    {
      label: "Core Languages",
      icon: "⌨️",
      items: [
        { name: "TypeScript", level: 95 },
        { name: "Java", level: 90 },
        { name: "Python", level: 85 },
        { name: "SQL", level: 88 },
      ],
    },
  ],
  experience: [
    {
      company: "Techtinium",
      title: "Software Development Engineer — I",
      type: "full-time",
      period: "Dec 2024 — Present",
      location: "Chennai, India",
      tags: ["Full Stack", "Distributed Systems", "AI"],
      highlights: [
        {
          icon: "⚡",
          text: "Developed and maintained an **Order Routing & Shipping Engine** processing 50+ concurrent orders/min using Spring Boot and RabbitMQ, ensuring reliable async processing and reducing decoupling latency.",
        },
        {
          icon: "🧠",
          text: "Collaborated on developing an internal **AI Support Agent** integrating LLM APIs with a **Pinecone-based RAG pipeline** to resolve Tier-1 logistics and fulfillment queries. Connected the system with **Shopify order, product, and fulfillment data** to enable context-aware responses for merchant and operations teams. Reduced manual Tier-1 support tickets by **~40%** through faster, automated query resolution.",
        },
        {
          icon: "🗄",
          text: "Optimized database performance by refining **PostgreSQL** queries and implementing **Redis** caching for hot product data, which reduced API response times from 400ms to 120ms.",
        },
        {
          icon: "🔧",
          text: "Designed, Developed and launched a custom **B2B Shopify embedded app – Myxtur Hub Sync** to automate product, order, and catalog synchronization between Shopify and Myxtur’s on-demand manufacturing platform, implementing secure webhook listeners and bulk data workflows to maintain real-time data consistency across external fulfillment and production systems.",
        },
        {
          icon: "🧪",
          text: "Implemented automated CI/CD pipeline checks and extensive unit testing using JUnit and Mockito, increasing backend code coverage to 85% and significantly reducing integration regressions.",
        },
      ],
      technologies: [
        "Java",
        "Angular",
        "Spring Boot",
        "PostgreSQL",
        "RabbitMQ",
        "Redis",
        "RAG",
        "LLM APIs",
        "Pinecone",
        "AWS (S3, EC2, Lambda, RDS, CloudWatch)",
        "Remix",
        ".Net Core",
      ],
    },
    {
      company: "Klenty",
      title: "Software Development Engineer — Intern",
      type: "internship",
      period: "Jul 2024 — Dec 2024",
      location: "Chennai, India",
      tags: ["Full Stack", "Data Pipelines"],
      highlights: [
        {
          icon: "🔍",
          text: "Developed the backend for a **Prospect View Platform**, unifying data across 4 REST endpoints to simplify frontend consumption and reduce data load times by **15%**.",
        },
        {
          icon: "📊",
          text: "Implemented reliable background processing logic using **AWS Lambda** and MongoDB to handle API retries, mitigating external service rate-limit failures.",
        },
        {
          icon: "🔌",
          text: "Improved the **CallIQ Chrome Extension** by optimizing DOM traversal scripts, resulting in a **25% faster** extraction of CRM data for users directly in their browser.",
        },
        {
          icon: "🤝",
          text: "Participated in daily stand-ups and code reviews, actively incorporating feedback from senior developers to improve agile delivery and code maintainability.",
        },
      ],
      technologies: [
        "TypeScript",
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "AWS Lambda",
        "Chrome V3 Extensions",
        "ELK Stack",
      ],
    },
  ],
  projects: [
    {
      name: "GenAI Markdown Editor",
      description:
        "A notion-style block editor integrated with advanced LLM APIs to provide inline text completions, summarization, and tone adjustments directly in the browser.",
      stack: ["Next.js", "React", "Tailwind CSS", "LLM APIs"],
      githubUrl: "https://github.com/arjun-unx",
      icon: "layout",
    },
    {
      name: "Multi-Agent Research Tool",
      description:
        "A specialized script mapping LangGraph orchestration where a 'Researcher' agent gathers data via SERP APIs and a 'Writer' agent compiles it into structured Markdown reports.",
      stack: ["Python", "LangGraph", "OpenAI APIs", "Tavily Search"],
      githubUrl: "https://github.com/arjun-unx",
      icon: "brain",
    },
    {
      name: "Agentic Legal Analyst",
      description:
        "A pipeline that ingests long PDF contracts, chunks them via LangChain, stores embeddings in Pinecone, and answers queries with exact source citations.",
      stack: ["Python FastApi", "LangChain", "Pinecone", "GPT-4"],
      githubUrl: "https://github.com/arjun-unx",
      icon: "server",
    },
    {
      name: "Distributed Event Store",
      description:
        "A high-fault-tolerance system mimicking Apache Kafka semantics. Consumers subscribe to topics, process data, and acknowledge offset commitments across containerized microservices.",
      stack: ["Java", "Spring Boot", "RabbitMQ", "Docker", "Redis"],
      githubUrl: "https://github.com/arjun-unx",
      icon: "server",
    },
    {
      name: "Serverless Order Workflow",
      description:
        "An experimental distributed checkout flow utilizing AWS Step Functions to orchestrate payment authorization, inventory deduction, and customer notification sequentially.",
      stack: ["AWS Lambda", "AWS Step Functions", "Node.js", "DynamoDB"],
      githubUrl: "https://github.com/arjun-unx",
      icon: "cloud",
    },
  ],
  education: {
    degree: "B.Tech in Computer Science",
    specialization: "Artificial Intelligence & Machine Learning",
    institution: "Sri Ramachandra Institute of Higher Education and Research",
    period: "2020 – 2024",
    location: "Chennai, India",
    cgpa: "9.2 / 10.0",
    achievements: [
      "1st Place — National Level Hackathon (KCE '23)",
      "Special Mention — Google Cloud GenAI Hackathon",
    ],
  },
};

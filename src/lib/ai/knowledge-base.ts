// ──────────────────────────────────────────────────
// AI Knowledge Base — module-level constant.
// Never re-created at query time (Bug #7 fix).
// ──────────────────────────────────────────────────

export interface KnowledgeEntry {
  /** Lowercase keyword fragments to match against user input */
  keywords: string[];
  answer: string;
}

export const KNOWLEDGE_BASE: readonly KnowledgeEntry[] = Object.freeze([
  {
    keywords: [
      "strongest",
      "best",
      "primary",
      "main",
      "top",
      "expert",
      "proficient",
    ],
    answer:
      "Arjun's strongest technical areas are **Java/Spring Boot** (backend systems), **Angular** (frontend), and **PostgreSQL** (data layer). He's proven in **Redis caching**, **RabbitMQ event-driven design**, and **AWS Lambda** integrations. His production experience spans full-stack ownership at startup scale — he thinks holistically about systems, not just feature-level.",
  },
  {
    keywords: [
      "performance",
      "optimization",
      "fast",
      "speed",
      "latency",
      "improve",
    ],
    answer:
      "Arjun has a strong track record of measurable performance wins:\n\n• **API latency:** 400ms → 120ms (-70%) via Redis caching at Techtinium\n• **DB CPU load:** reduced 25% through query optimization and Redis migration\n• **Order throughput:** +30% via NgRx state caching (eliminated redundant API calls)\n• **Chrome Extension:** 25% better performance at Klenty via DOM optimization\n• **Query latency:** -15% at Klenty through efficient endpoint design",
  },
  {
    keywords: [
      "architecture",
      "system",
      "design",
      "event-driven",
      "microservice",
      "distributed",
      "scale",
    ],
    answer:
      "Arjun has hands-on experience with **event-driven microservice architecture** — specifically using **RabbitMQ** to decouple inventory updates from email notifications, handling **50+ concurrent orders/minute** at peak with zero latency. He also has exposure to **Kafka**, **GraphQL**, **Elasticsearch**, and **Kubernetes**. His PostgreSQL work includes schema normalization, partitioning, CTE-based queries, and strategic indexing.",
  },
  {
    keywords: [
      "cloud",
      "aws",
      "lambda",
      "ec2",
      "s3",
      "cloudwatch",
      "docker",
      "kubernetes",
      "devops",
      "infrastructure",
    ],
    answer:
      "Arjun's cloud experience is primarily **AWS-based**: Lambda (serverless + API logging), EC2, S3, CloudWatch (production tracing), and WebSockets. He uses **Docker** and **Kubernetes** for containerization, and maintains CI/CD pipelines with **GitHub Actions**. He's also built Shiprocket webhook integrations for live shipment tracking.",
  },
  {
    keywords: [
      "frontend",
      "angular",
      "react",
      "ui",
      "interface",
      "ngrx",
      "rxjs",
      "typescript",
    ],
    answer:
      "On the frontend, Arjun primarily works in **Angular 16+** with **NgRx** for state management — he leveraged NgRx caching to eliminate redundant API calls and improve order processing by 30%. He also built a **Shopify App** using Remix, a React WYSIWYG editor with TypeScript + WebSockets, and is comfortable with RxJS and Material UI.",
  },
  {
    keywords: [
      "backend",
      "spring boot",
      "java",
      "api",
      "rest",
      "node",
      "server",
      "hibernate",
    ],
    answer:
      "Arjun's backend is primarily **Java + Spring Boot**, where he's built complete order/shipping modules, implemented Spring Security with JWT, and designed production-grade Hibernate/JPA data layers. He also builds **Node.js** services — the Shopify App (Remix + Node.js) and API logging at Klenty. He writes REST APIs and has worked with GraphQL.",
  },
  {
    keywords: [
      "database",
      "postgresql",
      "mongodb",
      "redis",
      "sql",
      "schema",
      "query",
      "cache",
      "data",
    ],
    answer:
      "Arjun has deep experience across relational and NoSQL systems:\n\n• **PostgreSQL:** schema design, normalization, partitioning, CTE-based queries, indexing, vacuuming across 10+ core tables\n• **Redis:** migrated hot product lookups from DB to cache, achieving 70% API latency reduction\n• **MongoDB:** API log storage at Klenty, document modeling\n• **SQL:** 100+ DSA problems including complex query optimization",
  },
  {
    keywords: [
      "automation",
      "cron",
      "job",
      "script",
      "python",
      "reconciliation",
      "zoho",
      "sheets",
    ],
    answer:
      "Arjun built a **Python CRON job** that automated daily reconciliation of 100+ transactions between Zoho Books and Google Sheets — saving 5 hours/week. He also automated monthly expense tallies at Klenty and built Shopify bulk sync to eliminate manual CSV/Excel workflows.",
  },
  {
    keywords: ["shopify", "remix", "ecommerce", "b2b", "app"],
    answer:
      "Arjun built a **custom Shopify App** using Remix (React) and Node.js that enables two-way sync between a Shopify Store and a B2B portal. It automated bulk order and product processing, completely eliminating manual CSV/Excel exports. This was a full-stack product — API integration, webhook handling, and UI.",
  },
  {
    keywords: [
      "education",
      "degree",
      "college",
      "university",
      "gpa",
      "cgpa",
      "ai",
      "ml",
      "machine learning",
      "academic",
    ],
    answer:
      "Arjun holds a **B.Tech in Computer Science** with a specialization in AI & Machine Learning from Sri Ramachandra Institute of Higher Education and Research (2020–2024), with a CGPA of **9.2/10.0**. He won **first place at the KCE '23 National Level Hackathon** and received a Special Mention.",
  },
  {
    keywords: [
      "hackathon",
      "achievement",
      "award",
      "competition",
      "recognition",
    ],
    answer:
      "Arjun secured **first place at the KCE '23 National Level Hackathon** and received a **Special Mention**. His academic CGPA of 9.2/10.0 reflects strong CS + AI/ML fundamentals.",
  },
  {
    keywords: [
      "hire",
      "available",
      "open",
      "role",
      "job",
      "opportunity",
      "work",
      "contact",
    ],
    answer:
      "Arjun is open to full-time SDE roles — particularly backend systems, full-stack product development, or platform/infrastructure engineering. Reach him at **arjunramesh1002@gmail.com** or on LinkedIn at **arjunramesh163**. Based in Chennai, India.",
  },
  {
    keywords: ["testing", "test", "mocha", "sinon", "coverage", "unit"],
    answer:
      "At Klenty, Arjun wrote unit tests using **Mocha and Sinon**, achieving 15% backend test coverage. He treats testing as an engineering discipline alongside feature delivery — not an afterthought.",
  },
  {
    keywords: [
      "leetcode",
      "dsa",
      "data structures",
      "algorithms",
      "coding",
      "gfg",
      "problem solving",
    ],
    answer:
      "Arjun has solved **100+ problems** on LeetCode and GeeksforGeeks, covering Data Structures, Algorithms, and Object-Oriented Programming — a consistent investment in CS fundamentals alongside production work.",
  },
  {
    keywords: ["kafka", "rabbitmq", "messaging", "queue", "stream", "event"],
    answer:
      "Arjun has hands-on experience with **RabbitMQ** — he architected a fault-tolerant event-driven system decoupling inventory from notifications, sustaining **50+ concurrent orders/minute** at peak. He also has familiarity with **Apache Kafka**.",
  },
  {
    keywords: [
      "chrome extension",
      "browser extension",
      "calliq",
      "dom",
      "scraping",
    ],
    answer:
      "At Klenty, Arjun enhanced the **CallIQ Chrome Extension** using low-level DOM manipulation and web scraping pipelines. He resolved 2 major bottlenecks, achieving a **25% performance improvement** for 100+ daily users.",
  },
  {
    keywords: ["websocket", "real-time", "realtime", "live", "stream", "push"],
    answer:
      "Arjun has built real-time systems using **WebSockets** in two contexts: a real-time order analytics and payment alert dashboard (AWS Lambda + WebSockets at Techtinium), and a React-based WYSIWYG editor with collaborative features (TypeScript + WebSockets at Klenty).",
  },
  {
    keywords: [
      "what",
      "who",
      "tell me",
      "about",
      "arjun",
      "introduce",
      "summary",
      "overview",
    ],
    answer:
      "**Arjun Ramesh** is a Software Development Engineer with production experience at **Techtinium** (SDE-1, Dec 2024–present) and **Klenty** (intern, Jul–Dec 2024). He builds efficient backend systems and full-stack applications in **Java + Spring Boot**, **Angular**, and **Node.js**. Delivered results: 30% faster order processing, 70% lower API latency, 25% DB CPU reduction, 5 hrs/week saved via automation. B.Tech CS (AI/ML) with 9.2 CGPA and a National Level Hackathon win.",
  },
] as const);

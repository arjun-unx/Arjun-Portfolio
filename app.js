/**
 * Arjun Ramesh — Portfolio
 * app.js — Optimized, dependency-free JS
 */

'use strict';

/* ═══════════════════════════════════════════════════
   RESUME KNOWLEDGE BASE — AI Assistant
═══════════════════════════════════════════════════ */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const RESUME = {
  name: 'Arjun Ramesh',
  contact: {
    email: 'arjunramesh1002@gmail.com',
    phone: '+91 8838308061',
    linkedin: 'linkedin.com/in/arjunramesh163/',
    github: 'github.com/arjun-unx',
  },
  skills: {
    languages: ['Java', 'JavaScript', 'TypeScript', 'Python', 'SQL'],
    frontend: ['Angular 16+', 'React.js', 'Redux', 'NgRx', 'RxJS', 'Material UI', 'HTML', 'CSS'],
    backend: ['Spring Boot', 'Hibernate/JPA', 'Node.js', 'REST APIs', 'Microservices', 'GraphQL'],
    databases: ['PostgreSQL', 'MongoDB', 'Redis'],
    messaging: ['RabbitMQ', 'Apache Kafka'],
    search: ['Elasticsearch'],
    cloud: ['AWS EC2', 'AWS S3', 'AWS Lambda', 'AWS CloudWatch', 'WebSockets'],
    tools: ['Git', 'Docker', 'Kubernetes', 'Postman', 'Linux', 'GitHub Actions'],
  },
  experience: [
    {
      company: 'Techtinium',
      title: 'Software Development Engineer - 1',
      period: 'Dec 2024 – Present',
      location: 'Chennai, India',
      highlights: [
        'Developed end-to-end Order and Shipping modules using Spring Boot and Angular 16+ with JWT authentication',
        'Reduced order processing time by 30% using NgRx state management to cache data and minimize redundant API calls',
        'Designed and optimized PostgreSQL schemas for logistics and payment systems across 10+ core tables using normalization, partitioning, CTE-based optimizations, and indexing',
        'Built fault-tolerant event-driven architecture using RabbitMQ handling 50+ concurrent orders per minute at peak traffic',
        'Migrated product lookups to Redis cache, cutting database CPU load by 25% and reducing API response time from 400ms to 120ms',
        'Built a custom Shopify App using Remix and Node.js for automated bulk order and product sync with B2B portal',
        'Automated reconciliation of 100+ daily transactions between Zoho Books and Google Sheets using Python CRON, saving 5 hours per week',
        'Built real-time order analytics dashboard using AWS Lambda, WebSockets, and Shiprocket webhooks',
        'Resolved 20+ critical logic bugs using AWS CloudWatch and maintained CI/CD pipelines with GitHub Actions',
      ],
      technologies: ['Spring Boot', 'Angular 16+', 'JWT', 'NgRx', 'PostgreSQL', 'RabbitMQ', 'Redis', 'Remix', 'Node.js', 'Python', 'AWS Lambda', 'WebSockets', 'GitHub Actions'],
    },
    {
      company: 'Klenty',
      title: 'Software Development Engineer - Intern',
      period: 'Jul 2024 – Dec 2024',
      location: 'Chennai, India',
      highlights: [
        'Developed a prospect view for the Sales Engagement Platform, integrating 4 endpoints and reducing query latency by 15%',
        'Designed API logging workflows in AWS Lambda capturing success/failure states in MongoDB',
        'Built API throttling and cookie-based session authentication to reduce re-login cycles',
        'Enhanced the CallIQ Chrome Extension using DOM manipulation and web scraping, achieving 25% better performance for 100+ users',
        '7 new features delivered, including a React WYSIWYG editor using TypeScript and WebSockets',
        'Fixed 15+ production bugs and achieved 15% backend test coverage using Mocha and Sinon',
        'Automated monthly expense tallies via CRON jobs',
      ],
      technologies: ['Node.js', 'React', 'TypeScript', 'MongoDB', 'AWS Lambda', 'WebSockets', 'Chrome Extension', 'Mocha', 'Sinon'],
    },
  ],
  projects: [
    {
      name: 'Task Manager',
      stack: ['Angular', 'Spring Boot', 'MongoDB', 'JWT'],
      description: 'Secure web application for task management with login, task creation, reminders, note editing, pinning, and search.',
    },
    {
      name: 'Attendance Tracker',
      stack: ['React', 'Spring Boot', 'PostgreSQL', 'JWT', 'Google Calendar API'],
      description: 'Application for daily attendance recording, holiday and overtime management, and Google Calendar sync.',
    },
  ],
  education: {
    degree: 'B.Tech in Computer Science (Artificial Intelligence and Machine Learning)',
    institution: 'Sri Ramachandra Institute of Higher Education and Research',
    period: '2020–2024',
    cgpa: '9.2 / 10.0',
    achievements: ['First place at National Level Hackathon (KCE \'23)', 'Special Mention'],
  },
  metrics: {
    orderProcessingImprovement: '30%',
    apiResponseBefore: '400ms',
    apiResponseAfter: '120ms',
    dbCpuReduction: '25%',
    concurrentOrders: '50+ orders/minute',
    timeSaved: '5 hours/week',
    bugsResolved: '20+ critical bugs',
    featuresDelivered: '7 new features at Klenty',
    testCoverage: '15% backend coverage',
    chromeExtensionImprovement: '25%',
    queryLatencyImprovement: '15%',
    dsaProblems: '100+',
  },
};

/* ── AI Knowledge Engine ── */
function buildKnowledgeBase() {
  return [
    {
      keywords: ['strongest', 'best', 'primary', 'main', 'top', 'expert', 'proficient'],
      answer: `Arjun's strongest technical areas are **Java/Spring Boot** (backend systems), **Angular** (frontend), and **PostgreSQL** (data layer). He's also proven in **Redis caching**, **RabbitMQ event-driven design**, and **AWS Lambda** integrations. His production experience spans full-stack ownership at startup scale, which means he thinks holistically about systems — not just feature-level.`,
    },
    {
      keywords: ['performance', 'optimization', 'fast', 'speed', 'latency', 'improve'],
      answer: `Arjun has a strong track record of measurable performance wins:\n\n• **API latency:** 400ms → 120ms (-70%) via Redis caching at Techtinium\n• **DB CPU load:** reduced 25% through query optimization and Redis migration\n• **Order throughput:** +30% via NgRx state caching (eliminated redundant API calls)\n• **Chrome Extension:** 25% better performance at Klenty via DOM optimization\n• **Query latency:** -15% at Klenty through efficient endpoint design`,
    },
    {
      keywords: ['architecture', 'system', 'design', 'event-driven', 'microservice', 'distributed', 'scale'],
      answer: `Arjun has hands-on experience with **event-driven microservice architecture** — specifically using **RabbitMQ** to decouple inventory updates from email notifications, handling **50+ concurrent orders/minute** during peak traffic with zero latency or timeouts. He also has exposure to **Kafka**, **GraphQL**, **Elasticsearch**, and **Kubernetes** in his stack. His PostgreSQL work includes schema normalization, partitioning, CTE-based queries, and strategic indexing at the data layer.`,
    },
    {
      keywords: ['cloud', 'aws', 'lambda', 'ec2', 's3', 'cloudwatch', 'docker', 'kubernetes', 'devops', 'infrastructure'],
      answer: `Arjun's cloud experience is primarily **AWS-based**: Lambda (serverless functions + API logging), EC2, S3, CloudWatch (for production debugging and tracing), and WebSockets. He's used **Docker** and **Kubernetes** for containerization, and maintains CI/CD pipelines using **GitHub Actions**. He's also built Shiprocket webhook integrations for live shipment tracking.`,
    },
    {
      keywords: ['frontend', 'angular', 'react', 'ui', 'interface', 'ngrx', 'rxjs', 'typescript'],
      answer: `On the frontend, Arjun primarily works in **Angular 16+** with **NgRx** for state management — he leveraged NgRx caching specifically to eliminate redundant API calls and improve order processing by 30%. He's also built production React apps including a WYSIWYG editor with TypeScript and WebSockets, and a **Shopify App** using the Remix framework. He's comfortable with RxJS, Material UI, and component-level performance optimization.`,
    },
    {
      keywords: ['backend', 'spring boot', 'java', 'api', 'rest', 'node', 'server', 'hibernate'],
      answer: `Arjun's backend is primarily **Java + Spring Boot**, where he's built complete order/shipping modules, implemented Spring Security with JWT, and designed production-grade Hibernate/JPA data layers. He's also built **Node.js** services — notably the Shopify App (Remix + Node.js) and API logging services at Klenty. He writes REST APIs and has worked with GraphQL as well.`,
    },
    {
      keywords: ['database', 'postgresql', 'mongodb', 'redis', 'sql', 'schema', 'query', 'cache', 'data'],
      answer: `Arjun has deep experience across relational and NoSQL systems:\n\n• **PostgreSQL:** schema design, normalization, partitioning, CTE-based queries, strategic indexing, and vacuuming across 10+ core tables\n• **Redis:** migrated hot product lookups from DB to cache, achieving 70% API latency reduction\n• **MongoDB:** API log storage at Klenty, document modeling\n• **SQL:** 100+ DSA problems including complex query optimization`,
    },
    {
      keywords: ['automation', 'cron', 'job', 'script', 'python', 'reconciliation', 'zoho', 'sheets'],
      answer: `Arjun built a **Python CRON job** that automated daily reconciliation of 100+ transactions between Zoho Books and Google Sheets — saving 5 hours/week of manual work. He also automated monthly expense tallies at Klenty using scheduled jobs, and built Shopify bulk order/product sync to eliminate manual CSV/Excel workflows.`,
    },
    {
      keywords: ['shopify', 'remix', 'ecommerce', 'b2b', 'app'],
      answer: `Arjun built a **custom Shopify App** using Remix (React) and Node.js that enables two-way sync between a Shopify Store and a B2B portal. It automated bulk order and product processing, completely eliminating manual CSV/Excel exports. This was a full-stack product — API integration, webhook handling, and UI.`,
    },
    {
      keywords: ['education', 'degree', 'college', 'university', 'gpa', 'cgpa', 'ai', 'ml', 'machine learning', 'academic'],
      answer: `Arjun holds a **B.Tech in Computer Science** with a specialization in AI & Machine Learning from Sri Ramachandra Institute of Higher Education and Research (2020–2024), with a CGPA of **9.2/10.0**. He won **first place at the KCE '23 National Level Hackathon** and received a Special Mention.`,
    },
    {
      keywords: ['hackathon', 'achievement', 'award', 'competition', 'recognition'],
      answer: `Arjun secured **first place at the KCE '23 National Level Hackathon** and received a **Special Mention** alongside his engineering degree. His academic CGPA of 9.2/10.0 reflects strong fundamentals in CS + AI/ML.`,
    },
    {
      keywords: ['hire', 'available', 'open', 'role', 'job', 'opportunity', 'work', 'contact'],
      answer: `Arjun is open to full-time Software Development Engineer roles, particularly in backend systems, full-stack product development, or platform/infrastructure engineering. You can reach him at **arjunramesh1002@gmail.com** or connect on LinkedIn at **arjunramesh163**. He's based in Chennai, India.`,
    },
    {
      keywords: ['testing', 'test', 'mocha', 'sinon', 'coverage', 'unit'],
      answer: `At Klenty, Arjun wrote unit tests using **Mocha and Sinon**, achieving 15% backend test coverage. He took ownership of testing quality alongside feature delivery, treating it as an engineering discipline rather than an afterthought.`,
    },
    {
      keywords: ['leetcode', 'dsa', 'data structures', 'algorithms', 'coding', 'gfg', 'problem solving'],
      answer: `Arjun has solved **100+ problems** on LeetCode and GeeksforGeeks, covering Data Structures, Algorithms, and Object-Oriented Programming. This shows consistent investment in CS fundamentals alongside his production work.`,
    },
    {
      keywords: ['kafka', 'rabbitmq', 'messaging', 'queue', 'stream', 'event'],
      answer: `Arjun has hands-on experience with **RabbitMQ** — he architected a fault-tolerant event-driven system that decoupled inventory updates from email notifications, sustaining **50+ concurrent orders/minute** at peak. He also has familiarity with **Apache Kafka** as part of his full technical stack.`,
    },
    {
      keywords: ['chrome extension', 'browser', 'extension', 'calliq', 'dom', 'scraping'],
      answer: `At Klenty, Arjun enhanced the **CallIQ Chrome Extension** using low-level DOM manipulation and web scraping pipelines. He resolved 2 major bottlenecks, achieving a **25% performance improvement** and enhancing interactions for 100+ daily users. This required deep browser internals knowledge.`,
    },
    {
      keywords: ['websocket', 'real-time', 'realtime', 'live', 'stream', 'push'],
      answer: `Arjun has built real-time systems using **WebSockets** in two contexts: a real-time order analytics and payment alert dashboard (AWS Lambda + WebSockets at Techtinium), and a React-based WYSIWYG editor with collaborative features (TypeScript + WebSockets at Klenty).`,
    },
    {
      keywords: ['what', 'who', 'tell me', 'about', 'arjun', 'introduce', 'summary', 'overview'],
      answer: `**Arjun Ramesh** is a Software Development Engineer with production experience at **Techtinium** (SDE-1, Dec 2024–present) and **Klenty** (intern, Jul–Dec 2024). He builds efficient backend systems and full-stack applications in **Java + Spring Boot**, **Angular**, and **Node.js**. He's delivered measurable results: 30% faster order processing, 70% lower API latency, 25% database CPU reduction, and 5 hrs/week saved via automation. He has a B.Tech in CS (AI/ML) with a 9.2 CGPA and won a National Level Hackathon.`,
    },
  ];
}

function queryAI(userInput) {
  const kb = buildKnowledgeBase();
  const inputLower = userInput.toLowerCase().trim();

  if (!inputLower) return null;

  let bestMatch = null;
  let bestScore = 0;

  for (const entry of kb) {
    let score = 0;
    for (const keyword of entry.keywords) {
      if (inputLower.includes(keyword.toLowerCase())) {
        // Longer keyword matches score higher
        score += keyword.length > 5 ? 3 : 1;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = entry;
    }
  }

  if (bestMatch && bestScore > 0) return bestMatch.answer;

  // Fallback
  return `I have detailed knowledge of Arjun's experience, tech stack, impact metrics, projects, and education. Try asking: "What are his strongest skills?", "What performance improvements has he made?", "Tell me about his cloud experience", or "How can I contact him?"`;
}

/* Simple markdown to HTML conversion */
function parseMarkdown(text) {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n•/g, '<br>•')
    .replace(/^•/, '•');
}

/* ═══════════════════════════════════════════════════
   AI CHAT UI
═══════════════════════════════════════════════════ */

function initAI() {
  const chatWindow = document.getElementById('ai-chat-window');
  const input = document.getElementById('ai-input');
  const sendBtn = document.getElementById('ai-send');
  const suggestions = document.querySelectorAll('.ai-suggestion');

  if (!chatWindow || !input || !sendBtn) return;

  function addMessage(text, isUser = false) {
    const msg = document.createElement('div');
    msg.className = `ai-message ${isUser ? 'ai-user' : 'ai-bot'}`;

    const avatar = document.createElement('span');
    avatar.className = 'ai-avatar';
    avatar.textContent = isUser ? 'You' : 'AR';
    avatar.setAttribute('aria-hidden', 'true');

    const bubble = document.createElement('div');
    bubble.className = 'ai-bubble';

    if (isUser) {
      bubble.textContent = text;
    } else {
      bubble.innerHTML = `<p>${parseMarkdown(text)}</p>`;
    }

    msg.appendChild(avatar);
    msg.appendChild(bubble);
    chatWindow.appendChild(msg);
    chatWindow.scrollTop = chatWindow.scrollHeight;
    return msg;
  }

  function showTyping() {
    const msg = document.createElement('div');
    msg.className = 'ai-message ai-bot';
    msg.id = 'typing-indicator';

    const avatar = document.createElement('span');
    avatar.className = 'ai-avatar';
    avatar.textContent = 'AR';
    avatar.setAttribute('aria-hidden', 'true');

    const bubble = document.createElement('div');
    bubble.className = 'ai-bubble ai-typing';

    for (let i = 0; i < 3; i++) {
      const dot = document.createElement('span');
      bubble.appendChild(dot);
    }

    msg.appendChild(avatar);
    msg.appendChild(bubble);
    chatWindow.appendChild(msg);
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }

  function removeTyping() {
    const indicator = document.getElementById('typing-indicator');
    if (indicator) indicator.remove();
  }

  async function handleQuery(query) {
    if (!query.trim()) return;

    addMessage(query, true);
    input.value = '';
    sendBtn.disabled = true;

    showTyping();

    // Simulate realistic thinking delay
    await new Promise(resolve => setTimeout(resolve, 600 + Math.random() * 600));

    removeTyping();
    const answer = queryAI(query);
    addMessage(answer || 'I couldn\'t find a specific answer. Try asking about skills, experience, or projects.');

    sendBtn.disabled = false;
    input.focus();
  }

  sendBtn.addEventListener('click', () => handleQuery(input.value));

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleQuery(input.value);
    }
  });

  suggestions.forEach(btn => {
    btn.addEventListener('click', () => {
      const query = btn.dataset.query;
      if (query) handleQuery(query);
    });
  });
}

/* ═══════════════════════════════════════════════════
   THEME TOGGLE
═══════════════════════════════════════════════════ */

function initTheme() {
  const html = document.documentElement;
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;

  // Respect OS preference, then localStorage
  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initial = stored || (prefersDark ? 'dark' : 'light');
  html.setAttribute('data-theme', initial);

  btn.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });

  // Follow OS if no preference stored
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      html.setAttribute('data-theme', e.matches ? 'dark' : 'light');
    }
  });
}

/* ═══════════════════════════════════════════════════
   CUSTOM CURSOR — desktop only
═══════════════════════════════════════════════════ */

function initCursor() {
  if (window.matchMedia('(hover: none)').matches) return;

  const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  }, { passive: true });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.14;
    ringY += (mouseY - ringY) * 0.14;
    ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
    requestAnimationFrame(animateRing);
  }

  requestAnimationFrame(animateRing);

  // Hide when leaving window
  document.addEventListener('mouseleave', () => {
    dot.style.opacity = '0';
    ring.style.opacity = '0';
  });

  document.addEventListener('mouseenter', () => {
    dot.style.opacity = '1';
    ring.style.opacity = '0.4';
  });
}

/* ═══════════════════════════════════════════════════
   NAVBAR — scroll behavior + mobile menu
═══════════════════════════════════════════════════ */

function initNavbar() {
  const navbar = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];

  if (!navbar) return;

  // Scroll shadow
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu toggle
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      mobileToggle.classList.toggle('open', isOpen);
      mobileToggle.setAttribute('aria-expanded', isOpen.toString());
      mobileMenu.setAttribute('aria-hidden', (!isOpen).toString());
    });

    // Close on link click
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        mobileToggle.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
      });
    });
  }
}

/* ═══════════════════════════════════════════════════
   SCROLL SPY — active nav link
═══════════════════════════════════════════════════ */

function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[data-section]');
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      navLinks.forEach(link => {
        link.classList.toggle('active', link.dataset.section === id);
      });
    });
  }, {
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0,
  });

  sections.forEach(section => observer.observe(section));
}

/* ═══════════════════════════════════════════════════
   SCROLL REVEAL
═══════════════════════════════════════════════════ */

function initReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  if (!('IntersectionObserver' in window)) {
    // Fallback: show everything
    elements.forEach(el => el.classList.add('in-view'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        // Skill bars inside this element
        const fills = entry.target.querySelectorAll('.skill-fill');
        if (fills.length) {
          entry.target.classList.add('in-view');
        }
        observer.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.1,
  });

  elements.forEach(el => observer.observe(el));

  // Skill categories observe separately for bar animation
  const skillCats = document.querySelectorAll('.skill-category');
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        skillObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
  });

  skillCats.forEach(el => skillObserver.observe(el));
}

/* ═══════════════════════════════════════════════════
   3D CARD PARALLAX — hero card
═══════════════════════════════════════════════════ */

function initCardParallax() {
  const card = document.getElementById('hero-card');
  if (!card || window.matchMedia('(hover: none)').matches) return;

  const hero = document.getElementById('hero');
  if (!hero) return;

  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `rotateY(${x * 10}deg) rotateX(${-y * 6}deg)`;
  }, { passive: true });

  hero.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateY(0deg) rotateX(0deg)';
  });
}

/* ═══════════════════════════════════════════════════
   SMOOTH ANCHOR OFFSET — accounts for fixed navbar
═══════════════════════════════════════════════════ */

function initSmoothAnchor() {
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;

    const targetId = link.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

/* ═══════════════════════════════════════════════════
   BOOT
═══════════════════════════════════════════════════ */

function init() {
  initTheme();
  initNavbar();
  initCursor();
  initScrollSpy();
  initReveal();
  initCardParallax();
  initSmoothAnchor();
  initAI();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

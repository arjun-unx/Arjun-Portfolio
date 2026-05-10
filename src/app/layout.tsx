import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CursorDot } from "@/components/ui/CursorDot";
import { AmbientBackground } from "@/components/ui/AmbientBackground";
import { RESUME } from "@/lib/resume";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const SITE_URL = "https://arjunramesh.dev";
const TITLE = "Arjun Ramesh — Software Engineer";
const DESCRIPTION =
  "Software engineer building scalable backends, AI systems, and refined product UI. Available for full-stack and platform roles.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: "%s — Arjun Ramesh" },
  description: DESCRIPTION,
  keywords: [
    "Arjun Ramesh",
    "Software Engineer",
    "Full Stack",
    "Spring Boot",
    "Angular",
    "React",
    "Next.js",
    "Java",
    "TypeScript",
    "RAG",
    "AI",
  ],
  authors: [{ name: "Arjun Ramesh", url: SITE_URL }],
  creator: "Arjun Ramesh",
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Arjun Ramesh",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: SITE_URL },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
    { media: "(prefers-color-scheme: dark)", color: "#08080b" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// Inline pre-paint script — prevents FOUC by setting data-theme before React hydrates.
const THEME_BOOTSTRAP = `(function(){try{var s=localStorage.getItem('theme');var p=window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.setAttribute('data-theme', s || (p?'dark':'light'));}catch(_){document.documentElement.setAttribute('data-theme','dark');}})();`;

const PERSON_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: RESUME.name,
  jobTitle: RESUME.title,
  email: `mailto:${RESUME.contact.email}`,
  url: SITE_URL,
  sameAs: [RESUME.contact.github, RESUME.contact.linkedin, RESUME.contact.leetcode],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: RESUME.education.institution,
  },
  knowsAbout: [
    "Software Engineering",
    "Distributed Systems",
    "Retrieval-Augmented Generation",
    "Backend Development",
    "Frontend Engineering",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOTSTRAP }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_JSONLD) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <AmbientBackground />
        <CursorDot />
        <Navbar />

        <main id="main-content" tabIndex={-1}>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}

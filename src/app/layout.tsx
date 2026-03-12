import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CursorDot } from '@/components/ui/CursorDot';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Arjun Ramesh — Software Engineer',
  description:
    'Software Development Engineer specializing in full-stack systems, event-driven architecture, and high-performance web applications.',
  keywords: ['Arjun Ramesh', 'Software Engineer', 'Full Stack', 'Spring Boot', 'Angular', 'React', 'Java', 'TypeScript'],
  openGraph: {
    title: 'Arjun Ramesh — Software Engineer',
    description: 'Full-stack SDE specializing in scalable systems, event-driven architecture, and performance-critical applications.',
    type: 'website',
  },
};

// FOUC Prevention Script — runs BEFORE React hydration.
// Reads localStorage and sets data-theme on <html> synchronously.
// Bug #1 fix: eliminates flash of wrong theme on load.
const THEME_SCRIPT = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  } catch(e) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        {/* Inline FOUC prevention — must run before paint */}
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body>
        {/* Bug #10 fix: skip-to-content link for keyboard/screen reader users */}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-background focus:text-foreground">
          Skip to main content
        </a>

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

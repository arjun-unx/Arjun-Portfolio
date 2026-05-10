import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        background: "var(--bg)",
        surface: "var(--surface)",
        elevated: "var(--surface-elevated)",
        foreground: "var(--fg)",
        muted: "var(--fg-muted)",
        faint: "var(--fg-faint)",
        hairline: "var(--hairline)",
        // Backwards-compat aliases for older class names still appearing in builds
        card: "var(--surface)",
        border: "var(--hairline)",
        accent: {
          DEFAULT: "var(--accent)",
          soft: "var(--accent-soft)",
          contrast: "var(--accent-contrast)",
          1: "var(--accent)",
          2: "var(--accent-2)",
          hover: "var(--accent-hover)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 6vw + 1rem, 6rem)", { lineHeight: "0.96", letterSpacing: "-0.04em" }],
        "display-lg": ["clamp(2.25rem, 4vw + 1rem, 4rem)", { lineHeight: "1", letterSpacing: "-0.035em" }],
        display: ["clamp(1.875rem, 2vw + 1rem, 2.75rem)", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        eyebrow: ["0.6875rem", { lineHeight: "1", letterSpacing: "0.18em" }],
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        "soft-1": "0 1px 1px rgba(0,0,0,0.04), 0 2px 6px rgba(0,0,0,0.04)",
        "soft-2": "0 1px 2px rgba(0,0,0,0.05), 0 8px 24px rgba(0,0,0,0.06)",
        glow: "0 0 60px -16px var(--accent-glow)",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "out-quart": "cubic-bezier(0.25, 1, 0.5, 1)",
        "in-out-quart": "cubic-bezier(0.76, 0, 0.24, 1)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s cubic-bezier(0.16,1,0.3,1) forwards",
        rise: "rise 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        shimmer: "shimmer 2.4s linear infinite",
        "pulse-soft": "pulseSoft 2.4s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
        drift: "drift 18s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        rise: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        drift: {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(2%, -2%, 0) scale(1.05)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        shine:
          "linear-gradient(110deg,transparent 25%,rgba(255,255,255,0.18) 50%,transparent 75%)",
      },
    },
  },
  plugins: [],
};
export default config;

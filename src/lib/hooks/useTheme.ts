"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

/**
 * useTheme — manages dark/light mode.
 * The FOUC fix happens in the layout <script> tag, not here.
 * This hook syncs React state with the already-set data-theme attribute.
 */
export function useTheme(): { theme: Theme; toggleTheme: () => void } {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    // Read what the inline script already set
    const current = document.documentElement.getAttribute(
      "data-theme",
    ) as Theme;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(current === "light" ? "light" : "dark");

    // Follow OS changes only when no user preference is stored
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onSystemChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        const next: Theme = e.matches ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", next);
        setTheme(next);
      }
    };

    mq.addEventListener("change", onSystemChange);
    return () => mq.removeEventListener("change", onSystemChange);
  }, []);

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    setTheme(next);
  };

  return { theme, toggleTheme };
}

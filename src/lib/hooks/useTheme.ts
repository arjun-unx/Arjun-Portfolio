"use client";

import { useCallback, useEffect, useSyncExternalStore } from "react";

type Theme = "dark" | "light";

const ATTR = "data-theme";
const STORAGE_KEY = "theme";
const listeners = new Set<() => void>();

function emit() {
  for (const l of listeners) l();
}

/** Read the current theme from the DOM — populated pre-paint by the inline script. */
function getSnapshot(): Theme {
  if (typeof document === "undefined") return "dark";
  return (document.documentElement.getAttribute(ATTR) as Theme) ?? "dark";
}

function getServerSnapshot(): Theme {
  return "dark";
}

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  return () => {
    listeners.delete(onChange);
  };
}

/**
 * useTheme — manages dark/light mode.
 * The pre-paint inline script in layout.tsx sets `data-theme` BEFORE hydration,
 * so we use useSyncExternalStore to read the DOM as the source of truth without
 * triggering cascading renders (a setState-in-effect pattern Next 16 lints against).
 */
export function useTheme(): { theme: Theme; toggleTheme: () => void } {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    // Follow OS preference *only* when no explicit user choice is stored.
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onSystemChange = (e: MediaQueryListEvent) => {
      if (localStorage.getItem(STORAGE_KEY)) return;
      const next: Theme = e.matches ? "dark" : "light";
      document.documentElement.setAttribute(ATTR, next);
      emit();
    };
    mq.addEventListener("change", onSystemChange);
    return () => mq.removeEventListener("change", onSystemChange);
  }, []);

  const toggleTheme = useCallback(() => {
    const current =
      (document.documentElement.getAttribute(ATTR) as Theme) ?? "dark";
    const next: Theme = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute(ATTR, next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore — private mode / disabled storage
    }
    emit();
  }, []);

  return { theme, toggleTheme };
}

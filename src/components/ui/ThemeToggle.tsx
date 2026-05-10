"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/hooks/useTheme";

/**
 * ThemeToggle — accessible button toggling dark/light mode.
 * Icon swap is driven by CSS [data-theme] selectors so it can animate
 * without remounting between states.
 */
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const next = theme === "dark" ? "light" : "dark";

  return (
    <button
      id="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${next} mode`}
      title={`Switch to ${next} mode`}
      data-testid="theme-toggle"
    >
      <Sun size={16} className="icon-sun" aria-hidden="true" />
      <Moon size={16} className="icon-moon" aria-hidden="true" />
    </button>
  );
}

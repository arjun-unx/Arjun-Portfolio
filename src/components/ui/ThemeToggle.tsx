'use client';

import { useTheme } from '@/lib/hooks/useTheme';

/**
 * ThemeToggle — accessible button for dark/light mode.
 * Icon visibility controlled by CSS [data-theme] attribute on <html>.
 */
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      id="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      data-testid="theme-toggle"
    >
      <span className="icon-sun" aria-hidden="true">☀</span>
      <span className="icon-moon" aria-hidden="true">☽</span>
    </button>
  );
}

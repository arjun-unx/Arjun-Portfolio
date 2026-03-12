'use client';

import { useReveal } from '@/lib/hooks/useReveal';
import { cn } from '@/lib/utils/cn';

interface RevealWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

/**
 * RevealWrapper — scroll-triggered fade-in wrapper (always renders a div).
 * Applies 'reveal' + 'in-view' classes via IntersectionObserver.
 * For semantic element usage, apply the `reveal` class directly + useReveal hook.
 */
export function RevealWrapper({ children, className, delay = 0 }: RevealWrapperProps) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn('reveal', className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

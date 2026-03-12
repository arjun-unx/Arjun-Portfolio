'use client';

import { useRef } from 'react';
import { useCursor } from '@/lib/hooks/useCursor';

/**
 * CursorDot — custom cursor overlay, desktop only.
 * Rendered at root level so it covers the full viewport.
 */
export function CursorDot() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useCursor(dotRef, ringRef);

  return (
    <>
      <div ref={dotRef} id="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} id="cursor-ring" aria-hidden="true" />
    </>
  );
}

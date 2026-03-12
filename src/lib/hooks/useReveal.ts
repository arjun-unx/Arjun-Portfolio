"use client";

import { useEffect, useRef } from "react";

/**
 * useReveal — attaches IntersectionObserver to a target element
 * and adds 'in-view' class when it enters the viewport.
 * Returns a ref to attach to the element.
 * Bug #6 fix: hero-3d-card reveal now isolated; no double-observer.
 */
export function useReveal<T extends HTMLElement>(
  options: IntersectionObserverInit = {},
): React.RefObject<T | null> {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      el.classList.add("in-view");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -60px 0px", threshold: 0.1, ...options },
    );

    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
}

"use client";
import { useEffect } from "react";
/**
 * useCursor — custom cursor dot + lagged ring on desktop.
 * Bug fix: RAF loop is cancelled on unmount; paused on tab blur.
 * Only activates on pointer-capable devices.
 */
export function useCursor(
  dotRef: React.RefObject<HTMLDivElement | null>,
  ringRef: React.RefObject<HTMLDivElement | null>,
): void {
  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Skip on touch-only devices
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      dot.style.display = "none";
      ring.style.display = "none";
      return;
    }

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let rafId = 0;
    let isPaused = false;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    };

    const onMouseLeave = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    const onMouseEnter = () => {
      dot.style.opacity = "1";
      ring.style.opacity = "0.4";
    };

    // Bug fix: pause RAF when tab is hidden
    const onVisibility = () => {
      isPaused = document.hidden;
    };

    function animateRing() {
      if (!isPaused) {
        ringX += (mouseX - ringX) * 0.14;
        ringY += (mouseY - ringY) * 0.14;
        // Null-safe: ring is captured from outer scope, guaranteed non-null by guard above
        const el = ringRef.current;
        if (el) el.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }
      rafId = requestAnimationFrame(animateRing);
    }

    rafId = requestAnimationFrame(animateRing);

    document.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      // Bug fix: always cancel the RAF on unmount
      cancelAnimationFrame(rafId);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [dotRef, ringRef]);
}

"use client";
import { useEffect } from "react";

/**
 * useCursor — custom cursor dot + lagged ring on desktop.
 * - Skips touch / coarse-pointer / reduced-motion environments
 * - Cancels RAF on unmount; pauses while the tab is hidden
 * - Expands the ring near interactive targets (buttons, links, inputs)
 */
export function useCursor(
  dotRef: React.RefObject<HTMLDivElement | null>,
  ringRef: React.RefObject<HTMLDivElement | null>,
): void {
  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Skip on touch-only / reduced-motion
    const fineHover = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fineHover.matches || reduced.matches) {
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
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    const onMouseLeave = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    const onMouseEnter = () => {
      dot.style.opacity = "1";
      ring.style.opacity = "0.4";
    };

    const setHoverState = (active: boolean) => {
      ring.classList.toggle("is-hover", active);
      if (active) {
        ring.style.width = "56px";
        ring.style.height = "56px";
        ring.style.margin = "-28px 0 0 -28px";
      } else {
        ring.style.width = "";
        ring.style.height = "";
        ring.style.margin = "";
      }
    };

    const onPointerOver = (e: PointerEvent) => {
      const t = e.target as Element | null;
      const interactive = !!t?.closest?.(
        'a, button, [role="button"], input, textarea, select, label[for]',
      );
      setHoverState(interactive);
    };

    const onVisibility = () => {
      isPaused = document.hidden;
    };

    function animateRing() {
      if (!isPaused) {
        ringX += (mouseX - ringX) * 0.16;
        ringY += (mouseY - ringY) * 0.16;
        const el = ringRef.current;
        if (el) el.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }
      rafId = requestAnimationFrame(animateRing);
    }

    rafId = requestAnimationFrame(animateRing);

    document.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("pointerover", onPointerOver, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("pointerover", onPointerOver);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [dotRef, ringRef]);
}

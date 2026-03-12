"use client";

import { useEffect, useState } from "react";

export function useScrollSpy(sectionIds: string[], offset: number = 0): string {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const ratioMap = new Map<string, number>(sectionIds.map((id) => [id, 0]));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratioMap.set(entry.target.id, entry.intersectionRatio);
        }

        let bestId = "";
        let bestRatio = 0;
        for (const [id, ratio] of ratioMap) {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        }

        if (bestId) setActiveId(bestId);
      },
      {
        rootMargin: `-${offset}px 0px -60% 0px`,
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1.0],
      },
    );

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds, offset]);

  return activeId;
}

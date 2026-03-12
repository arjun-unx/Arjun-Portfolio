'use client';

import { useEffect, useRef } from 'react';
import styles from './SkillBar.module.css';

interface SkillBarProps {
  /** 0–100 proficiency */
  level: number;
  /** Stagger delay index for sequential animation */
  delayIndex?: number;
}

/**
 * SkillBar — animated width bar triggered by IntersectionObserver.
 * Bug fix: uses CSS `width` animation (not scaleX) with correct transform-origin.
 * Each bar gets a stagger delay via CSS custom property.
 */
export function SkillBar({ level, delayIndex = 0 }: SkillBarProps) {
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fill = fillRef.current;
    if (!fill) return;

    if (!('IntersectionObserver' in window)) {
      fill.style.width = `${level}%`;
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          fill.style.width = `${level}%`;
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(fill);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div
      className={styles.track}
      role="progressbar"
      aria-valuenow={level}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={`Proficiency: ${level}%`}
    >
      <div
        ref={fillRef}
        className={styles.fill}
        style={
          {
            '--delay': `${delayIndex * 120}ms`,
            width: '0%',
          } as React.CSSProperties
        }
        data-testid="skill-fill"
      />
    </div>
  );
}

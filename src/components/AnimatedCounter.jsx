import { useRef, useEffect, useState, useCallback } from 'react';
import { useInView } from 'framer-motion';

/**
 * Format a number with commas for thousands and fixed decimal places.
 * e.g. formatNumber(12345.6, 1) => "12,345.6"
 */
function formatNumber(value, decimals = 0) {
  const fixed = value.toFixed(decimals);
  const [intPart, decPart] = fixed.split('.');
  const withCommas = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return decPart !== undefined ? `${withCommas}.${decPart}` : withCommas;
}

/**
 * Ease-out cubic: decelerates towards the end.
 */
function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

/**
 * AnimatedCounter
 *
 * Props:
 *  - end: target number
 *  - duration: animation duration in ms (default 1500)
 *  - prefix: string prepended (e.g. "$")
 *  - suffix: string appended (e.g. "%")
 *  - decimals: decimal places to show (default 0)
 *  - className: optional extra classes
 */
export default function AnimatedCounter({
  end,
  target,
  duration = 1500,
  prefix = '',
  suffix = '',
  decimals = 0,
  className = '',
}) {
  const finalEnd = end !== undefined ? end : (target !== undefined ? target : 0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [displayValue, setDisplayValue] = useState(0);
  const rafRef = useRef(null);
  const hasAnimated = useRef(false);

  const animate = useCallback(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = performance.now();

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);
      const currentValue = easedProgress * finalEnd;

      setDisplayValue(currentValue);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setDisplayValue(finalEnd);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
  }, [finalEnd, duration]);

  useEffect(() => {
    if (isInView) {
      animate();
    }
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isInView, animate]);

  return (
    <span ref={ref} className={`counter-value inline-block ${className}`}>
      {prefix}
      {formatNumber(displayValue, decimals)}
      {suffix}
    </span>
  );
}

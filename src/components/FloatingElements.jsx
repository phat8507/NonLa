import { useMemo } from 'react';
import { motion } from 'framer-motion';

/**
 * Generate a seeded pseudo-random number from an index.
 * Keeps values deterministic between renders.
 */
function seededRandom(seed) {
  const x = Math.sin(seed * 9301 + 49297) * 49297;
  return x - Math.floor(x);
}

/**
 * NónLáTriangle — a small CSS isosceles triangle with float animation.
 */
function Triangle({ style, size, opacity, animDuration, animDelay }) {
  return (
    <div
      className="absolute pointer-events-none"
      style={{
        ...style,
        width: `${size}px`,
        height: `${size}px`,
        opacity,
        animation: `float ${animDuration}s ease-in-out ${animDelay}s infinite`,
      }}
    >
      <div
        className="non-la w-full h-full"
        style={{
          background: `rgba(244, 180, 0, ${opacity})`,
        }}
      />
    </div>
  );
}

/**
 * CoffeeBean — a small CSS oval with rotation and float-slow animation.
 */
function CoffeeBean({ style, size, opacity, animDuration, animDelay, dark }) {
  const beanColor = dark
    ? `rgba(244, 180, 0, ${opacity})`
    : `rgba(10, 22, 40, ${opacity})`;

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        ...style,
        width: `${size * 0.65}px`,
        height: `${size}px`,
        borderRadius: '50%',
        background: beanColor,
        transform: `rotate(${35 + (animDelay * 20)}deg)`,
        animation: `float-slow ${animDuration}s ease-in-out ${animDelay}s infinite`,
      }}
    >
      {/* Center crease */}
      <div
        className="absolute"
        style={{
          top: '50%',
          left: '25%',
          width: '50%',
          height: '1px',
          background: dark
            ? `rgba(244, 180, 0, ${opacity * 2})`
            : `rgba(10, 22, 40, ${opacity * 2})`,
          transform: 'translateY(-50%)',
        }}
      />
    </div>
  );
}

/**
 * FloatingElements
 *
 * Props:
 *  - count: total number of floating elements (split ~60/40 triangles/beans)
 *  - dark: boolean — true for dark backgrounds, false for light
 */
export default function FloatingElements({ count = 12, dark = true }) {
  const elements = useMemo(() => {
    const items = [];
    for (let i = 0; i < count; i++) {
      const r = (offset) => seededRandom(i * 7 + offset);

      const isTriangle = r(0) > 0.4; // ~60% triangles
      const size = 10 + r(1) * 50; // 10–60px
      const opacity = 0.03 + r(2) * 0.05; // 0.03–0.08
      const left = r(3) * 100; // 0–100%
      const top = r(4) * 100; // 0–100%
      const animDuration = 6 + r(5) * 10; // 6–16s
      const animDelay = r(6) * 8; // 0–8s delay

      items.push({
        id: i,
        isTriangle,
        size,
        opacity,
        animDuration,
        animDelay,
        style: {
          left: `${left}%`,
          top: `${top}%`,
        },
      });
    }
    return items;
  }, [count]);

  return (
    <motion.div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      {elements.map((el) =>
        el.isTriangle ? (
          <Triangle
            key={el.id}
            style={el.style}
            size={el.size}
            opacity={el.opacity}
            animDuration={el.animDuration}
            animDelay={el.animDelay}
          />
        ) : (
          <CoffeeBean
            key={el.id}
            style={el.style}
            size={el.size}
            opacity={el.opacity}
            animDuration={el.animDuration}
            animDelay={el.animDelay}
            dark={dark}
          />
        )
      )}
    </motion.div>
  );
}

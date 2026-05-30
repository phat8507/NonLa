import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * SectionWrapper
 *
 * Reusable wrapper for each major section of the case study page.
 *
 * Props:
 *  - id: section id for nav targeting (string)
 *  - bgColor: Tailwind bg class or inline color (string, default "bg-[#0A1628]")
 *  - bgText: oversized background text content (string)
 *  - bgTextDark: if true, uses dark stroke style for light backgrounds (boolean)
 *  - children: section content
 *  - className: extra Tailwind classes for the outer container
 *  - diagonal: "top" | "bottom" | "both" — apply diagonal clip-path
 */

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      staggerChildren: 0.1,
    },
  },
};

export default function SectionWrapper({
  id,
  bgColor = 'bg-[#0A1628]',
  bgText = '',
  bgTextDark = false,
  children,
  className = '',
  diagonal,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Build diagonal class
  let diagonalClass = '';
  if (diagonal === 'top') diagonalClass = 'diagonal-top';
  else if (diagonal === 'bottom') diagonalClass = 'diagonal-bottom';
  else if (diagonal === 'both') diagonalClass = 'diagonal-top diagonal-bottom';

  // Determine if bgColor is a Tailwind class or an inline color
  const isTailwindClass = bgColor.startsWith('bg-');

  return (
    <section
      id={id}
      ref={ref}
      className={`
        relative overflow-hidden
        py-16 px-5 sm:px-6 md:py-20 md:px-8 lg:py-24 lg:px-16
        ${isTailwindClass ? bgColor : ''}
        ${diagonalClass}
        ${className}
      `}
      style={!isTailwindClass ? { backgroundColor: bgColor } : undefined}
    >
      {/* Oversized background text */}
      {bgText && (
        <div
          className={`section-bg-text ${bgTextDark ? 'section-bg-text-dark' : ''}`}
          aria-hidden="true"
        >
          {bgText}
        </div>
      )}

      {/* Content wrapper — sits above bg text */}
      <motion.div
        className="relative z-10"
        variants={sectionVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {children}
      </motion.div>
    </section>
  );
}

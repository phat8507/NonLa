import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BrandGradientBackground, SectionDecor } from './BrandDecor';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.55,
      ease: 'easeOut',
      staggerChildren: 0.08,
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
  decor = 'none',
  variant = 'standard',
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  let diagonalClass = '';
  if (diagonal === 'top') diagonalClass = 'diagonal-top';
  else if (diagonal === 'bottom') diagonalClass = 'diagonal-bottom';
  else if (diagonal === 'both') diagonalClass = 'diagonal-top diagonal-bottom';

  const isLightSection = ['#FFFFFF', '#F5F7FA', 'bg-white', 'bg-[#F5F7FA]'].includes(bgColor);
  const showDecor = decor !== 'none';
  const showGradient = variant !== 'hero' && variant !== 'standard';

  return (
    <section
      id={id}
      ref={ref}
      className={`
        nonla-section nonla-section-blend nonla-section--${variant}
        ${isLightSection ? 'brand-section--darken' : ''}
        relative overflow-hidden px-5 sm:px-6 md:px-8 lg:px-16
        ${diagonalClass}
        ${className}
      `}
    >
      {showGradient && <BrandGradientBackground />}
      {showGradient && (
        <>
          <div className="section-transition-soft section-transition-soft--top" aria-hidden="true" />
          <div className="section-transition-soft section-transition-soft--bottom" aria-hidden="true" />
        </>
      )}
      {showDecor && <SectionDecor density={decor === 'medium' ? 'standard' : 'low'} />}

      {bgText && (
        <div
          className={`section-bg-text ${bgTextDark ? 'section-bg-text-dark' : ''}`}
          aria-hidden="true"
        >
          {bgText}
        </div>
      )}

      <motion.div
        className="nonla-section-inner relative z-10"
        variants={sectionVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {children}
      </motion.div>
    </section>
  );
}

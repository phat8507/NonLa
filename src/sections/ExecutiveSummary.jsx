import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CoffeeBean, CoffeeLeaf } from '../components/BrandDecor';

const cards = [
  {
    title: 'INSIGHT',
    body: 'Fear that convenience = cheap gift',
    icon: (
      // Lightbulb / star shape
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="13" r="8" stroke="#0033CC" strokeWidth="2" fill="none" />
        <line x1="16" y1="5" x2="16" y2="2" stroke="#F4B400" strokeWidth="2" strokeLinecap="round" />
        <line x1="22.5" y1="6.5" x2="24.5" y2="4" stroke="#F4B400" strokeWidth="2" strokeLinecap="round" />
        <line x1="9.5" y1="6.5" x2="7.5" y2="4" stroke="#F4B400" strokeWidth="2" strokeLinecap="round" />
        <line x1="25" y1="13" x2="28" y2="13" stroke="#F4B400" strokeWidth="2" strokeLinecap="round" />
        <line x1="4" y1="13" x2="7" y2="13" stroke="#F4B400" strokeWidth="2" strokeLinecap="round" />
        <rect x="12" y="21" width="8" height="4" rx="1" stroke="#0033CC" strokeWidth="2" fill="none" />
        <line x1="13" y1="25" x2="13" y2="28" stroke="#0033CC" strokeWidth="2" strokeLinecap="round" />
        <line x1="19" y1="25" x2="19" y2="28" stroke="#0033CC" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'BIG IDEA',
    body: 'Trọn tinh túy Việt dưới bóng nón lá',
    icon: (
      // Target / idea shape — nón lá triangle with sparkle
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <polygon points="16,2 4,28 28,28" stroke="#0033CC" strokeWidth="2" fill="none" />
        <polygon points="16,10 10,28 22,28" stroke="#0033CC" strokeWidth="1.5" fill="rgba(0,51,204,0.08)" />
        <circle cx="16" cy="20" r="2" fill="#F4B400" />
        <line x1="26" y1="6" x2="28" y2="4" stroke="#F4B400" strokeWidth="2" strokeLinecap="round" />
        <line x1="28" y1="6" x2="26" y2="4" stroke="#F4B400" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'TARGET',
    body: 'Corporate Tet Gift Buyers (Primary)',
    icon: (
      // Crosshair / people shape
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="12" stroke="#0033CC" strokeWidth="2" fill="none" />
        <circle cx="16" cy="16" r="6" stroke="#0033CC" strokeWidth="1.5" fill="none" />
        <circle cx="16" cy="16" r="2" fill="#F4B400" />
        <line x1="16" y1="0" x2="16" y2="6" stroke="#0033CC" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="16" y1="26" x2="16" y2="32" stroke="#0033CC" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="0" y1="16" x2="6" y2="16" stroke="#0033CC" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="26" y1="16" x2="32" y2="16" stroke="#0033CC" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'STRATEGY',
    body: 'REFRAME: not coffee, a Vietnamese gifting ritual',
    icon: (
      // Chess / strategy shape — castle tower
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="8" y="12" width="16" height="16" rx="2" stroke="#0033CC" strokeWidth="2" fill="none" />
        <rect x="6" y="26" width="20" height="3" rx="1" stroke="#0033CC" strokeWidth="1.5" fill="none" />
        <rect x="8" y="6" width="4" height="6" stroke="#0033CC" strokeWidth="1.5" fill="rgba(0,51,204,0.08)" />
        <rect x="14" y="6" width="4" height="6" stroke="#0033CC" strokeWidth="1.5" fill="rgba(0,51,204,0.08)" />
        <rect x="20" y="6" width="4" height="6" stroke="#0033CC" strokeWidth="1.5" fill="rgba(0,51,204,0.08)" />
        <circle cx="16" cy="20" r="3" fill="none" stroke="#F4B400" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: 'BUDGET',
    body: '4B VND → 12B VND target (ROAS 3.0×)',
    icon: (
      // Money / chart shape — bar chart with upward arrow
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="20" width="5" height="10" rx="1" fill="rgba(0,51,204,0.15)" stroke="#0033CC" strokeWidth="1.5" />
        <rect x="13" y="14" width="5" height="16" rx="1" fill="rgba(0,51,204,0.15)" stroke="#0033CC" strokeWidth="1.5" />
        <rect x="22" y="6" width="5" height="24" rx="1" fill="rgba(0,51,204,0.15)" stroke="#0033CC" strokeWidth="1.5" />
        <polyline points="4,18 13,12 22,4" stroke="#F4B400" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <polygon points="22,4 18,6 20,9" fill="#F4B400" />
      </svg>
    ),
  },
  {
    title: 'TIMELINE',
    body: 'September → December 2025',
    icon: (
      // Calendar shape
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="6" width="24" height="22" rx="3" stroke="#0033CC" strokeWidth="2" fill="none" />
        <line x1="4" y1="13" x2="28" y2="13" stroke="#0033CC" strokeWidth="1.5" />
        <line x1="10" y1="4" x2="10" y2="8" stroke="#0033CC" strokeWidth="2" strokeLinecap="round" />
        <line x1="22" y1="4" x2="22" y2="8" stroke="#0033CC" strokeWidth="2" strokeLinecap="round" />
        <circle cx="10" cy="19" r="2" fill="#F4B400" />
        <circle cx="16" cy="19" r="2" fill="rgba(0,51,204,0.2)" />
        <circle cx="22" cy="19" r="2" fill="rgba(0,51,204,0.2)" />
        <circle cx="10" cy="24" r="2" fill="rgba(0,51,204,0.2)" />
        <circle cx="16" cy="24" r="2" fill="rgba(0,51,204,0.2)" />
        <circle cx="22" cy="24" r="2" fill="#F4B400" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function ExecutiveSummary() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="overview"
      ref={sectionRef}
      className="brand-section relative py-24 md:py-32 overflow-hidden"
    >
      <div className="brand-gradient-background" aria-hidden="true" />
      <div className="section-decor" aria-hidden="true">
        <CoffeeLeaf className="section-decor__leaf section-decor__leaf--one" />
        <CoffeeBean className="section-decor__bean section-decor__bean--1" />
        <CoffeeBean className="section-decor__bean section-decor__bean--2" />
      </div>
      {/* Oversized background text */}
      <div className="section-bg-text" aria-hidden="true">
        OVERVIEW
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs uppercase tracking-widest text-[#FFD84D] font-semibold mb-4"
        >
          Overview
        </motion.p>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-white mb-3"
        >
          Executive Summary
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white/72 text-lg md:text-xl max-w-2xl mb-14"
        >
          A strategic overview of the NONLA Coffee Tet 2025 integrated marketing campaign — from insight to execution.
        </motion.p>

        {/* 6-card grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="glass-card p-6 md:p-8 border-l-4 border-l-[#F4B400] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-default group"
            >
              {/* Icon */}
              <div className="mb-4 w-10 h-10 flex items-center justify-center rounded-lg bg-[#0033CC]/[0.06] transition-colors duration-300 group-hover:bg-[#0033CC]/[0.12]">
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="text-sm uppercase tracking-wider font-bold text-[#FFD84D] mb-2">
                {card.title}
              </h3>

              {/* Body */}
              <p className="text-lg text-white/82 leading-relaxed">
                {card.body}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Data source footnote */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="text-xs text-white/48 mt-8"
        >
          Source: NONLA Coffee Marketing Brief — Tet 2025 Campaign Planning Document
        </motion.p>
      </div>
    </section>
  );
}

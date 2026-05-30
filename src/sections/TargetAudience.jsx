import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { CoffeeBean, CoffeeLeaf, MiniNonlaPack } from '../components/BrandDecor';

/* ─── tier data ─── */
const tiers = [
  {
    id: 'tertiary',
    order: 3,
    title: 'Vietnam Souvenir & Overseas Gifters',
    label: 'TERTIARY',
    bg: '#8A9BB5',
    textColor: '#FFFFFF',
    widthPercent: 54,
    details: {
      demographics: 'Tourists + Việt Kiều | Needs: compact, no equipment, cultural signal',
      role: 'Long-term expansion after domestic brand proof',
    },
  },
  {
    id: 'secondary',
    order: 2,
    title: 'Urban Cultural Gifters',
    label: 'SECONDARY',
    bg: '#1A4DFF',
    textColor: '#FFFFFF',
    widthPercent: 70,
    details: {
      demographics: 'Age 25-40 | Online-savvy | Values aesthetics + brand story',
      purchase: 'Individual sets 200k-500k',
      role: 'Brand equity builder + UGC + social proof for corporate',
      data: 'Shopee gift set 33.4B VND | personalized gifts CAGR 12.1% (2026-2034)',
    },
  },
  {
    id: 'primary',
    order: 1,
    title: 'Corporate Premium Tet Gift Buyers',
    label: 'PRIMARY',
    bg: '#F4B400',
    textColor: '#0A1628',
    widthPercent: 100,
    details: {
      demographics: 'HR / Admin / SME Owners | Age 28-45 | HCMC + Hanoi',
      purchase: '50-200 sets per order | AOV: ~30M VND/order',
      role: 'Growth engine — 75% of 12B target',
      whyPrimary: 'Occasion clear + budget concentrated + high volume + repeat annually',
      data: '13T VND Tet FMCG | gift sets 300k-2M VND | 1-5M per adult (Statista)',
    },
  },
];

/* ─── accordion data ─── */
const rationaleItems = [
  {
    question: 'Why Corporate first?',
    answer:
      'Corporate buyers bring concentrated volume during a clear seasonal occasion (Tet). Large budgets, high AOV, built-in repeat cycle every year, and corporate logos on premium gift sets create instant brand credibility across multiple offices and partner networks.',
  },
  {
    question: 'Why Urban second?',
    answer:
      'Urban cultural gifters create the brand meaning that corporate buyers cite when justifying premium prices. Their social media UGC, unboxing stories, and word-of-mouth generate the aspirational social proof that reinforces corporate demand year after year.',
  },
  {
    question: 'Why Overseas third?',
    answer:
      'International distribution is operationally complex — logistics, customs, shelf-life constraints, and compliance. We seed brand awareness with Việt Kiều and tourist buyers now through e-commerce and airport retail, then harvest the fully scaled export channel once domestic brand proof is established.',
  },
];

/* ─── animation variants ─── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const tierVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/* ─── detail row helper ─── */
function DetailRow({ label, value }) {
  return (
    <div className="flex flex-col sm:flex-row sm:gap-3 py-1.5">
      <span className="text-xs uppercase tracking-wider font-bold opacity-70 min-w-[100px] shrink-0">
        {label}
      </span>
      <span className="text-sm leading-relaxed">{value}</span>
    </div>
  );
}

/* ─── pyramid tier component ─── */
function PyramidTier({ tier, isActive, onToggle, index }) {
  const isDark = tier.id === 'primary'; // yellow bg → dark text

  return (
    <motion.div
      variants={tierVariants}
      className="flex flex-col items-center w-full"
    >
      {/* Clickable tier shape */}
      <motion.button
        onClick={onToggle}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="relative w-full cursor-pointer border-none outline-none focus:outline-none"
        style={{ maxWidth: `${tier.widthPercent}%` }}
      >
        {/* Trapezoid / Triangle shape */}
        <div
          className="relative py-5 md:py-6 px-6 md:px-10 text-center transition-shadow duration-300"
          style={{
            backgroundColor: tier.bg,
            clipPath:
              index === 0
                ? 'polygon(20% 0%, 80% 0%, 90% 100%, 10% 100%)'   // top tier — narrower top
                : index === 1
                ? 'polygon(8% 0%, 92% 0%, 97% 100%, 3% 100%)'     // middle
                : 'polygon(3% 0%, 97% 0%, 100% 100%, 0% 100%)',   // bottom — almost full
            color: tier.textColor,
            boxShadow: isActive
              ? `0 0 30px ${tier.bg}44, 0 8px 24px rgba(0,0,0,0.15)`
              : '0 2px 8px rgba(0,0,0,0.08)',
          }}
        >
          <p
            className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold mb-1"
            style={{ opacity: 0.7 }}
          >
            {tier.label}
          </p>
          <h4 className="text-sm md:text-lg font-bold leading-tight">
            {tier.title}
          </h4>

          {/* expand indicator */}
          <div
            className="absolute right-[12%] top-1/2 -translate-y-1/2 w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center text-xs font-bold transition-transform duration-300"
            style={{
              background: isDark ? 'rgba(10,22,40,0.15)' : 'rgba(255,255,255,0.2)',
              transform: isActive
                ? 'translateY(-50%) rotate(45deg)'
                : 'translateY(-50%) rotate(0deg)',
            }}
          >
            +
          </div>
        </div>
      </motion.button>

      {/* Expandable detail panel */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden w-full"
            style={{ maxWidth: `${Math.min(tier.widthPercent + 10, 100)}%` }}
          >
            <motion.div
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              exit={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="target-detail-panel p-5 md:p-6 mt-2 mb-2"
              style={{
                borderLeft: `4px solid ${tier.bg}`,
              }}
            >
              {tier.details.demographics && (
                <DetailRow label="Demographics" value={tier.details.demographics} />
              )}
              {tier.details.purchase && (
                <DetailRow label="Purchase" value={tier.details.purchase} />
              )}
              {tier.details.role && (
                <DetailRow label="Role" value={tier.details.role} />
              )}
              {tier.details.whyPrimary && (
                <DetailRow label="Why Primary" value={tier.details.whyPrimary} />
              )}
              {tier.details.data && (
                <DetailRow label="Data" value={tier.details.data} />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ─── accordion item component ─── */
function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-white/10 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 md:py-5 px-5 md:px-6 text-left cursor-pointer bg-transparent border-none outline-none group"
      >
        <span className="text-base md:text-lg font-bold text-white group-hover:text-[#FFD84D] transition-colors duration-200">
          {item.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-center w-8 h-8 rounded-full bg-[#F4B400]/15 text-[#F4B400] text-xl font-bold shrink-0 ml-4"
        >
          +
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <div className="px-5 md:px-6 pb-5 md:pb-6">
              <p className="text-sm md:text-base text-white/72 leading-relaxed">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ═══════════════════════════════════════════════ */
export default function TargetAudience() {
  const [activeTier, setActiveTier] = useState(null);
  const [openAccordion, setOpenAccordion] = useState(null);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const pyramidRef = useRef(null);
  const pyramidInView = useInView(pyramidRef, { once: true, margin: '-80px' });

  const rationaleRef = useRef(null);
  const rationaleInView = useInView(rationaleRef, { once: true, margin: '-80px' });

  const handleTierToggle = (tierId) => {
    setActiveTier((prev) => (prev === tierId ? null : tierId));
  };

  const handleAccordionToggle = (index) => {
    setOpenAccordion((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="target"
      ref={sectionRef}
      className="brand-section relative py-24 md:py-32 overflow-hidden"
    >
      {/* ── oversized background text ── */}
      <div className="brand-gradient-background" aria-hidden="true" />
      <div className="section-decor" aria-hidden="true">
        <CoffeeLeaf className="section-decor__leaf section-decor__leaf--one" />
        <CoffeeLeaf className="section-decor__leaf section-decor__leaf--two" />
        <CoffeeBean className="section-decor__bean section-decor__bean--1" />
        <CoffeeBean className="section-decor__bean section-decor__bean--2" />
      </div>
      <div className="section-bg-text" aria-hidden="true">
        TARGET
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">
        {/* ── section label ── */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs uppercase tracking-widest text-[#FFD84D] font-semibold mb-4"
        >
          Target
        </motion.p>

        {/* ── section title ── */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold text-white mb-3"
        >
          Target Audience
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white/72 text-lg md:text-xl max-w-2xl mb-14"
        >
          A tiered approach: concentrate on the highest-value segment first,
          then let brand momentum cascade.
        </motion.p>

        {/* ═══════════════ INTERACTIVE PYRAMID ═══════════════ */}
        <div ref={pyramidRef} className="mb-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={pyramidInView ? 'visible' : 'hidden'}
            className="flex flex-col items-center gap-1 md:gap-2"
          >
            {tiers.map((tier, i) => (
              <PyramidTier
                key={tier.id}
                tier={tier}
                index={i}
                isActive={activeTier === tier.id}
                onToggle={() => handleTierToggle(tier.id)}
              />
            ))}
          </motion.div>

          {/* Click hint */}
          <div className="pointer-events-none absolute right-6 top-8 hidden md:block" aria-hidden="true">
            <MiniNonlaPack label="Gift" />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={pyramidInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-center text-xs text-white/54 mt-6"
          >
            ↑ Click any tier to explore details
          </motion.p>
        </div>

        {/* ═══════════════ TARGETING RATIONALE ═══════════════ */}
        <div ref={rationaleRef}>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={rationaleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold text-white mb-6"
          >
            Targeting Rationale
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={rationaleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="glass-card rounded-2xl overflow-hidden"
          >
            {rationaleItems.map((item, i) => (
              <AccordionItem
                key={i}
                item={item}
                isOpen={openAccordion === i}
                onToggle={() => handleAccordionToggle(i)}
              />
            ))}
          </motion.div>
        </div>

        {/* ── footnote ── */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="text-xs text-white/48 mt-10"
        >
          Data sources: Statista, Shopee Analytics, Grand View Research (Personalized Gifts Market 2026-2034)
        </motion.p>
      </div>
    </section>
  );
}

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

/* ─── stage data ─── */
const stages = [
  {
    id: 1,
    num: '01',
    name: 'AWARENESS',
    question: 'Có quà cà phê Việt nào đủ mới và đủ sang không?',
    gap: 'NONLA not found on Meta or Shopee searches',
    data: [
      { text: 'Meta dominated Tet discovery', source: 'Decision Lab × Meta 2025' },
      { text: 'E-commerce Tet: 48% → 63%', source: 'Insight Asia 2026' },
      { text: '90% consider supermarket', source: 'Decision Lab' },
    ],
  },
  {
    id: 2,
    num: '02',
    name: 'CONSIDERATION',
    question: 'Brand này có đáng tin để tặng không?',
    gap: 'No social proof, no B2B content',
    data: [
      {
        text: 'Top brands gain share — "not the time for new brands"',
        source: 'NIQ 2025',
      },
      {
        text: '55% prioritize "looks gorgeous" (N=330)',
        source: 'Intage 2021',
      },
    ],
  },
  {
    id: 3,
    num: '03',
    name: 'EVALUATION',
    question: 'Có đủ đẹp, đủ sang, đủ hợp Tết không?',
    gap: 'Packaging must prove premium visually',
    data: [
      { text: '45% require luxury packaging', source: 'NIQ 2025' },
      {
        text: '+45% perceived value from premium packaging',
        source: 'Pregis × Prof. Moreau',
      },
    ],
  },
  {
    id: 4,
    num: '04',
    name: 'DECISION',
    question: 'Đặt số lượng lớn có an toàn không?',
    gap: 'No catalog, no bulk pricing, no lead time guarantee',
    data: [
      {
        text: '"Values and trust sealed the deal"',
        source: 'Decision Lab 2025',
      },
      {
        text: '18M users bought from Shopee Mall Tet 2026',
        source: 'Insight Asia',
      },
      { text: '60% cut non-essential spend', source: 'Worldpanel 2026' },
    ],
  },
  {
    id: 5,
    num: '05',
    name: 'POST-PURCHASE',
    question: 'Người nhận có thích không, năm sau có đặt lại không?',
    gap: 'No CRM, no referral system',
    data: [{ text: 'DATA GAP — needs primary research', source: '' }],
  },
];

/* ─── animation variants ─── */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const panelVariants = {
  initial: { opacity: 0, height: 0 },
  animate: {
    opacity: 1,
    height: 'auto',
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.3, ease: 'easeIn' },
  },
};

/* ─── leakage data ─── */
const leakageStages = [
  { name: 'AWARENESS', critical: true },
  { name: 'CONSIDERATION', critical: false },
  { name: 'EVALUATION', critical: false },
  { name: 'DECISION', critical: true },
  { name: 'POST-PURCHASE', critical: false },
];

/* ═══════════════════════════════════════════════ */
export default function CustomerJourney() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const journeyRef = useRef(null);
  const journeyInView = useInView(journeyRef, { once: true, margin: '-80px' });

  const leakageRef = useRef(null);
  const leakageInView = useInView(leakageRef, { once: true, margin: '-80px' });

  const timingRef = useRef(null);
  const timingInView = useInView(timingRef, { once: true, margin: '-80px' });

  const [activeStage, setActiveStage] = useState(null);

  const handleStageClick = (id) => {
    setActiveStage((prev) => (prev === id ? null : id));
  };

  const activeData = stages.find((s) => s.id === activeStage);

  return (
    <section
      id="journey"
      ref={sectionRef}
      className="relative bg-[#0A1628] py-24 md:py-32 overflow-hidden"
    >
      {/* ── oversized background text ── */}
      <div className="section-bg-text" aria-hidden="true">
        JOURNEY
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">
        {/* ── section label ── */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs uppercase tracking-widest text-[#F4B400] font-semibold mb-4"
        >
          Journey
        </motion.p>

        {/* ── section title ── */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold text-white mb-3"
        >
          Customer Journey
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[#8A9BB5] text-lg md:text-xl max-w-2xl mb-14"
        >
          5 stages from discovery to repeat purchase — and where NONLA loses
          buyers today.
        </motion.p>

        {/* ═══════════════════ JOURNEY STAGES ═══════════════════ */}
        <div ref={journeyRef}>
          {/* Horizontal scrollable stage cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={journeyInView ? 'visible' : 'hidden'}
            className="flex gap-0 items-stretch overflow-x-auto pb-4 mb-2 scrollbar-thin"
          >
            {stages.map((stage, i) => (
              <motion.div
                key={stage.id}
                variants={cardVariants}
                className="flex items-stretch shrink-0"
              >
                {/* Stage card */}
                <button
                  onClick={() => handleStageClick(stage.id)}
                  className={`
                    glass-card p-5 md:p-6 min-w-[160px] md:min-w-[180px]
                    flex flex-col items-center justify-center text-center
                    cursor-pointer transition-all duration-300 relative
                    ${
                      activeStage === stage.id
                        ? 'border-[#F4B400] scale-105 shadow-lg shadow-[#F4B400]/10'
                        : 'hover:border-[#F4B400]/40 hover:-translate-y-1'
                    }
                  `}
                  style={
                    activeStage === stage.id
                      ? { borderColor: '#F4B400' }
                      : undefined
                  }
                >
                  {/* Number */}
                  <span
                    className={`text-sm font-bold mb-2 ${
                      activeStage === stage.id
                        ? 'text-[#F4B400]'
                        : 'text-[#8A9BB5]'
                    }`}
                  >
                    {stage.num}
                  </span>

                  {/* Stage name */}
                  <span
                    className={`text-xs md:text-sm font-bold uppercase tracking-wider leading-tight ${
                      activeStage === stage.id
                        ? 'text-[#F4B400]'
                        : 'text-white'
                    }`}
                  >
                    {stage.name}
                  </span>

                  {/* Active indicator dot */}
                  {activeStage === stage.id && (
                    <motion.div
                      layoutId="activeDot"
                      className="w-2 h-2 rounded-full bg-[#F4B400] mt-3"
                    />
                  )}
                </button>

                {/* Connecting arrow (not after last) */}
                {i < stages.length - 1 && (
                  <div className="flex items-center px-1 md:px-2 shrink-0">
                    <div className="flex items-center">
                      <div className="w-6 md:w-10 h-[2px] bg-gradient-to-r from-[#8A9BB5]/40 to-[#8A9BB5]/20" />
                      <div
                        className="w-0 h-0 shrink-0"
                        style={{
                          borderTop: '5px solid transparent',
                          borderBottom: '5px solid transparent',
                          borderLeft: '6px solid rgba(138,155,181,0.4)',
                        }}
                      />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* ─── Detail panel ─── */}
          <AnimatePresence mode="wait">
            {activeData && (
              <motion.div
                key={activeData.id}
                variants={panelVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="overflow-hidden"
              >
                <div className="glass-card p-6 md:p-8 mt-4 border-l-4 border-l-[#F4B400]">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Customer question */}
                    <div>
                      <p className="text-xs uppercase tracking-widest text-[#F4B400] font-semibold mb-3">
                        Customer Question
                      </p>
                      <p className="text-white text-base md:text-lg font-semibold italic leading-relaxed">
                        "{activeData.question}"
                      </p>
                    </div>

                    {/* Gap */}
                    <div>
                      <p className="text-xs uppercase tracking-widest text-[#F4B400] font-semibold mb-3">
                        NONLA's Gap
                      </p>
                      <div className="flex items-start gap-3">
                        {/* Warning triangle icon */}
                        <div
                          className="shrink-0 mt-1 w-5 h-5 bg-[#FF6B6B]/20"
                          style={{
                            clipPath:
                              'polygon(50% 0%, 0% 100%, 100% 100%)',
                          }}
                          aria-hidden="true"
                        />
                        <p className="text-[#FF6B6B] text-sm md:text-base font-medium">
                          {activeData.gap}
                        </p>
                      </div>
                    </div>

                    {/* Data */}
                    <div>
                      <p className="text-xs uppercase tracking-widest text-[#F4B400] font-semibold mb-3">
                        Supporting Data
                      </p>
                      <ul className="space-y-3">
                        {activeData.data.map((d, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            {/* Coffee bean */}
                            <div
                              className="shrink-0 mt-1.5 w-2 h-3 rounded-full bg-[#F4B400]/60 rotate-[30deg]"
                              aria-hidden="true"
                            />
                            <div>
                              <p className="text-white text-sm leading-relaxed">
                                {d.text}
                              </p>
                              {d.source && (
                                <p className="text-xs text-[#8A9BB5]/60 mt-0.5">
                                  {d.source}
                                </p>
                              )}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Click hint */}
          {!activeStage && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={journeyInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-xs text-[#8A9BB5]/60 text-center mt-4"
            >
              ↑ Click a stage to explore details
            </motion.p>
          )}
        </div>

        {/* ═══════════════════ LEAKAGE DIAGRAM ═══════════════════ */}
        <div ref={leakageRef} className="mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={leakageInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold text-white mb-8"
          >
            Funnel Leakage
          </motion.h3>

          {/* Leakage funnel bar */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={leakageInView ? 'visible' : 'hidden'}
            className="flex flex-wrap gap-3 items-stretch mb-6"
          >
            {leakageStages.map((ls, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                className={`
                  flex-1 min-w-[120px] p-4 md:p-5 rounded-lg text-center
                  border transition-all duration-300
                  ${
                    ls.critical
                      ? 'bg-[#FF6B6B]/10 border-[#FF6B6B]/50 shadow-lg shadow-[#FF6B6B]/5'
                      : 'bg-white/[0.03] border-white/10'
                  }
                `}
              >
                {/* Drop-off indicator */}
                {ls.critical && (
                  <div className="flex justify-center mb-2">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="text-[#FF6B6B]"
                    >
                      <path
                        d="M10 2L18 16H2L10 2Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="currentColor"
                        fillOpacity="0.2"
                      />
                      <text
                        x="10"
                        y="14"
                        textAnchor="middle"
                        fill="currentColor"
                        fontSize="9"
                        fontWeight="bold"
                      >
                        !
                      </text>
                    </svg>
                  </div>
                )}

                <p
                  className={`text-xs md:text-sm font-bold uppercase tracking-wider ${
                    ls.critical ? 'text-[#FF6B6B]' : 'text-[#8A9BB5]'
                  }`}
                >
                  {ls.name}
                </p>

                {ls.critical && (
                  <p className="text-[10px] text-[#FF6B6B]/70 mt-1 font-medium">
                    BIGGEST DROP-OFF
                  </p>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Leakage connecting flow line */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={
              leakageInView ? { opacity: 1, scaleX: 1 } : {}
            }
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            style={{ transformOrigin: 'left' }}
            className="h-[3px] w-full bg-gradient-to-r from-[#FF6B6B] via-[#8A9BB5]/30 to-[#FF6B6B] rounded-full mb-6"
          />

          {/* Leakage callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={leakageInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="glass-card p-6 md:p-8 border-l-4 border-l-[#FF6B6B]"
          >
            <div className="flex items-start gap-4">
              {/* Warning nón lá shape */}
              <div
                className="shrink-0 w-8 h-8 bg-[#FF6B6B]/20"
                style={{
                  clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                }}
                aria-hidden="true"
              />
              <div>
                <p className="text-white text-base md:text-lg font-semibold leading-relaxed">
                  <span className="text-[#FF6B6B] font-bold">AWARENESS</span>{' '}
                  and{' '}
                  <span className="text-[#FF6B6B] font-bold">DECISION</span>{' '}
                  are where NONLA loses buyers before the sale happens.
                </p>
                <p className="text-[#8A9BB5] text-sm mt-2">
                  These two stages require immediate strategic investment to
                  capture existing demand.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ═══════════════════ TIMING INSIGHT ═══════════════════ */}
        <div ref={timingRef} className="mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={timingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold text-white mb-8"
          >
            Timing Insight
          </motion.h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={timingInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {/* Card 1 */}
            <motion.div
              variants={cardVariants}
              className="glass-card p-6 md:p-8 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Calendar icon (CSS) */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#F4B400]/10 flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="text-[#F4B400]"
                  >
                    <rect
                      x="2"
                      y="4"
                      width="16"
                      height="14"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <line
                      x1="2"
                      y1="8"
                      x2="18"
                      y2="8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <line
                      x1="6"
                      y1="2"
                      x2="6"
                      y2="6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <line
                      x1="14"
                      y1="2"
                      x2="14"
                      y2="6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <p className="text-xs uppercase tracking-widest text-[#F4B400] font-semibold">
                  Lead Time
                </p>
              </div>
              <p className="text-white text-lg md:text-xl font-bold leading-relaxed mb-2">
                <span className="text-[#F4B400] text-2xl md:text-3xl">
                  &gt;50%
                </span>{' '}
                of Tet online gift buyers start{' '}
                <span className="text-[#F4B400]">≥1 month</span> before Tet
              </p>
              <p className="text-xs text-[#8A9BB5]/60">Source: Grab ~2025</p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              variants={cardVariants}
              className="glass-card p-6 md:p-8 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Peak icon (CSS triangle) */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#F4B400]/10 flex items-center justify-center">
                  <div
                    className="w-5 h-5 bg-[#F4B400]"
                    style={{
                      clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                    }}
                    aria-hidden="true"
                  />
                </div>
                <p className="text-xs uppercase tracking-widest text-[#F4B400] font-semibold">
                  Peak Window
                </p>
              </div>
              <p className="text-white text-lg md:text-xl font-bold leading-relaxed mb-2">
                Gifting peak:{' '}
                <span className="text-[#F4B400] text-2xl md:text-3xl">
                  20 days
                </span>{' '}
                before Tết Day 1
              </p>
              <p className="text-xs text-[#8A9BB5]/60">
                Source: Decision Lab 2025
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* ── global footnote ── */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="text-xs text-[#8A9BB5] mt-14"
        >
          Data sources: Decision Lab, Insight Asia, NIQ, Intage, Pregis, Worldpanel, Grab
        </motion.p>
      </div>
    </section>
  );
}

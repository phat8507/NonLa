import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/* ───────────────────────── Icons (inline SVG) ───────────────────────── */

const SnowflakeDropletIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    {/* Hexagonal snowflake */}
    <line x1="24" y1="4" x2="24" y2="28" stroke="#0033CC" strokeWidth="2" strokeLinecap="round" />
    <line x1="11" y1="10" x2="37" y2="22" stroke="#0033CC" strokeWidth="2" strokeLinecap="round" />
    <line x1="37" y1="10" x2="11" y2="22" stroke="#0033CC" strokeWidth="2" strokeLinecap="round" />
    {/* Snowflake branches */}
    <line x1="24" y1="8" x2="20" y2="6" stroke="#0033CC" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="24" y1="8" x2="28" y2="6" stroke="#0033CC" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="24" y1="24" x2="20" y2="26" stroke="#0033CC" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="24" y1="24" x2="28" y2="26" stroke="#0033CC" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="14" y1="12" x2="12" y2="9" stroke="#0033CC" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="34" y1="12" x2="36" y2="9" stroke="#0033CC" strokeWidth="1.5" strokeLinecap="round" />
    {/* Water droplet */}
    <path d="M24 34 C24 34 19 39 19 42 C19 44.76 21.24 47 24 47 C26.76 47 29 44.76 29 42 C29 39 24 34 24 34Z" fill="rgba(26,77,255,0.15)" stroke="#1A4DFF" strokeWidth="1.5" />
  </svg>
);

const MountainCoffeeIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    {/* Mountain */}
    <polygon points="24,6 4,40 44,40" fill="rgba(0,51,204,0.06)" stroke="#0033CC" strokeWidth="2" strokeLinejoin="round" />
    <polygon points="24,6 18,18 30,18" fill="rgba(0,51,204,0.1)" stroke="none" />
    {/* Snow cap line */}
    <polyline points="18,18 24,6 30,18" stroke="#0033CC" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
    {/* Coffee cherries */}
    <circle cx="34" cy="28" r="3" fill="#F4B400" opacity="0.8" />
    <circle cx="38" cy="34" r="2.5" fill="#F4B400" opacity="0.6" />
    <circle cx="30" cy="33" r="2" fill="#F4B400" opacity="0.7" />
    {/* Small branch lines */}
    <line x1="34" y1="28" x2="38" y2="34" stroke="#0033CC" strokeWidth="1" strokeLinecap="round" />
    <line x1="34" y1="28" x2="30" y2="33" stroke="#0033CC" strokeWidth="1" strokeLinecap="round" />
  </svg>
);

const NonLaIcon = () => (
  <div className="w-16 h-16 flex items-center justify-center">
    <div
      className="w-14 h-14"
      style={{
        clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
        background: 'linear-gradient(180deg, #F4B400 0%, #FFD84D 100%)',
      }}
    />
  </div>
);

/* ───────────────────────── Data ───────────────────────── */

const brandAssets = [
  {
    icon: <SnowflakeDropletIcon />,
    title: 'Freeze-Dried Technology',
    body: 'Preserves flavor at molecular level. Not spray-dried. Dissolves in 5 seconds. No equipment needed.',
    risk: 'May be confused with standard instant',
    strategy: 'Educate = unlock premium perception',
  },
  {
    icon: <MountainCoffeeIcon />,
    title: 'Robusta Buôn Ma Thuột',
    body: 'Specific, verifiable Vietnamese origin. Not generic \'Vietnamese coffee\'.',
    risk: 'Robusta = \'strong/bitter\' misconception',
    strategy: 'Origin story is the cultural proof',
  },
  {
    icon: <NonLaIcon />,
    title: 'Nón Lá Pod Design',
    body: 'Physical cultural artifact. People keep it after use. Ownable design.',
    risk: 'Can feel too \'souvenir-like\' if visual is weak',
    strategy: 'Pod IS the brand — no competitor can copy the meaning',
  },
];

const swotData = [
  {
    label: 'Strengths',
    items: ['Freeze-dried + origin + nón lá design', 'Multi-tier pricing strategy', 'Cultural storytelling moat', 'Unique unboxing experience'],
    accent: '#16A34A',
    accentBg: 'rgba(22,163,74,0.06)',
    accentBorder: 'rgba(22,163,74,0.25)',
    direction: { x: -40, y: -40 },
  },
  {
    label: 'Weaknesses',
    items: ['Low brand awareness', 'No B2B proof / case studies', 'Packaging unproven at scale', 'Limited distribution network'],
    accent: '#DC2626',
    accentBg: 'rgba(220,38,38,0.06)',
    accentBorder: 'rgba(220,38,38,0.25)',
    direction: { x: 40, y: -40 },
  },
  {
    label: 'Opportunities',
    items: ['Tết gifting occasion (peak demand)', 'Corporate gift demand growing', 'E-commerce growth in VN', 'Freeze-dried category education'],
    accent: '#0033CC',
    accentBg: 'rgba(0,51,204,0.06)',
    accentBorder: 'rgba(0,51,204,0.25)',
    direction: { x: -40, y: 40 },
  },
  {
    label: 'Threats',
    items: ['Known competitors (Trung Nguyên, G7)', 'Alternative gift categories', 'Corporate risk aversion to new brands', 'Price sensitivity in B2B'],
    accent: '#EA580C',
    accentBg: 'rgba(234,88,12,0.06)',
    accentBorder: 'rgba(234,88,12,0.25)',
    direction: { x: 40, y: 40 },
  },
];

const categoryGap = [
  {
    category: 'Instant đại trà',
    players: 'G7, Vinacafé, Nescafé',
    gap: 'Low perceived value → cannot be a gift',
    nonla: 'Premium freeze-dried ≠ instant',
  },
  {
    category: 'Specialty beans',
    players: 'The Coffee House, 43 Factory',
    gap: 'Requires equipment & skill',
    nonla: 'No equipment, 5-second prep',
  },
  {
    category: 'Drip bag',
    players: 'Shin, Là Việt, Rise',
    gap: 'Weak gift presentation',
    nonla: 'Nón lá pod = gift-ready',
  },
  {
    category: 'Generic Tết basket',
    players: 'Retailers, hamper brands',
    gap: 'No brand story or identity',
    nonla: 'Cultural artifact with origin story',
  },
  {
    category: 'Souvenir coffee',
    players: 'Weasel coffee, market brands',
    gap: 'Gimmicky, low repeat purchase',
    nonla: 'Premium + repeatable ritual',
  },
];

/* ───────────────────────── Animation Variants ───────────────────────── */

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

/* ───────────────────────── Component ───────────────────────── */

export default function BrandUnderstanding() {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);
  const swotRef = useRef(null);
  const tableRef = useRef(null);

  const sectionInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const cardsInView = useInView(cardsRef, { once: true, margin: '-80px' });
  const swotInView = useInView(swotRef, { once: true, margin: '-80px' });
  const tableInView = useInView(tableRef, { once: true, margin: '-80px' });

  return (
    <section
      id="brand"
      ref={sectionRef}
      className="relative bg-[#FFFFFF] py-24 md:py-32 overflow-hidden"
    >
      {/* Oversized background text */}
      <div className="section-bg-text section-bg-text-dark" aria-hidden="true">
        BRAND
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs uppercase tracking-widest text-[#0033CC] font-semibold mb-4"
        >
          Brand
        </motion.p>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-[#0A1628] mb-3"
        >
          Brand Understanding
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[#8A9BB5] text-lg md:text-xl max-w-2xl mb-14"
        >
          Defining the brand position, assets, and strategic landscape for NONLA Coffee.
        </motion.p>

        {/* ── Brand Position Statement ── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={sectionInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="border-l-4 border-l-[#0033CC] bg-[#F5F7FA] rounded-r-2xl p-6 md:p-8 mb-16"
        >
          <p className="text-[#0A1628] text-lg md:text-xl italic leading-relaxed font-medium">
            "NONLA does not compete in the instant coffee market{' '}
            <span className="text-[#8A9BB5] not-italic text-base">(CAGR 3.7%)</span>. It creates and owns a new category:{' '}
            <span className="text-[#0033CC] font-bold">premium freeze-dried Vietnamese coffee gifts</span>."
          </p>
        </motion.div>

        {/* ── Brand Asset Cards ── */}
        <motion.div
          ref={cardsRef}
          variants={staggerContainer}
          initial="hidden"
          animate={cardsInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          {brandAssets.map((asset, i) => (
            <motion.div
              key={i}
              variants={cardUp}
              className="glass-card-light p-8 min-h-[400px] flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group"
            >
              {/* Icon */}
              <div className="mb-5 w-16 h-16 flex items-center justify-center rounded-xl bg-[#0033CC]/[0.06] transition-colors duration-300 group-hover:bg-[#0033CC]/[0.12]">
                {asset.icon}
              </div>

              {/* Title */}
              <h3 className="text-sm uppercase tracking-wider font-bold text-[#0A1628] mb-3">
                {asset.title}
              </h3>

              {/* Body */}
              <p className="text-[#0A1628] text-[15px] leading-relaxed mb-auto">
                {asset.body}
              </p>

              {/* Badges */}
              <div className="mt-6 space-y-3">
                {/* Risk badge */}
                <div className="flex items-start gap-2">
                  <span className="shrink-0 mt-0.5 inline-block w-2 h-2 rounded-full bg-[#DC2626]" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider font-bold text-[#DC2626]">Risk</span>
                    <p className="text-xs text-[#0A1628]/70 leading-snug">{asset.risk}</p>
                  </div>
                </div>
                {/* Strategic meaning badge */}
                <div className="flex items-start gap-2">
                  <span className="shrink-0 mt-0.5 inline-block w-2 h-2 rounded-full bg-[#F4B400]" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider font-bold text-[#F4B400]">Strategic Meaning</span>
                    <p className="text-xs text-[#0A1628]/70 leading-snug">{asset.strategy}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── SWOT Grid ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={swotInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#0A1628] mb-2">SWOT Analysis</h3>
          <p className="text-[#8A9BB5] text-sm mb-8">Strategic positioning assessment for NONLA Coffee brand</p>
        </motion.div>

        <div ref={swotRef} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-20">
          {swotData.map((quadrant, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: quadrant.direction.x, y: quadrant.direction.y }}
              animate={swotInView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="rounded-2xl p-6 md:p-7"
              style={{
                background: quadrant.accentBg,
                border: `1px solid ${quadrant.accentBorder}`,
              }}
            >
              <h4
                className="text-sm uppercase tracking-wider font-bold mb-4"
                style={{ color: quadrant.accent }}
              >
                {quadrant.label}
              </h4>
              <ul className="space-y-2.5">
                {quadrant.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-[#0A1628] text-sm leading-relaxed">
                    <span
                      className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full"
                      style={{ background: quadrant.accent }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* ── Category Gap Table ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={tableInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#0A1628] mb-2">Category Gap Analysis</h3>
          <p className="text-[#8A9BB5] text-sm mb-8">Where NONLA sits — and the gap it fills in every adjacent category</p>
        </motion.div>

        <motion.div
          ref={tableRef}
          initial={{ opacity: 0, y: 30 }}
          animate={tableInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0"
        >
          <table className="w-full min-w-[700px] border-collapse">
            <thead>
              <tr>
                <th className="text-left text-xs uppercase tracking-wider font-bold text-[#8A9BB5] pb-4 pr-4 w-[160px]">
                  Category
                </th>
                <th className="text-left text-xs uppercase tracking-wider font-bold text-[#8A9BB5] pb-4 pr-4">
                  Key Players
                </th>
                <th className="text-left text-xs uppercase tracking-wider font-bold text-[#8A9BB5] pb-4 pr-4">
                  Gap / Limitation
                </th>
                <th className="text-left text-xs uppercase tracking-wider font-bold pb-4" style={{ color: '#0033CC' }}>
                  <span className="flex items-center gap-2">
                    <span
                      className="inline-block w-5 h-5"
                      style={{
                        clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                        background: '#F4B400',
                      }}
                    />
                    NONLA Fills
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {categoryGap.map((row, i) => (
                <motion.tr
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={tableInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                  className="border-t border-[#0A1628]/[0.06] group"
                >
                  <td className="py-4 pr-4 text-sm font-bold text-[#0A1628] align-top">
                    {row.category}
                  </td>
                  <td className="py-4 pr-4 text-sm text-[#8A9BB5] align-top">
                    {row.players}
                  </td>
                  <td className="py-4 pr-4 text-sm text-[#0A1628]/70 align-top">
                    {row.gap}
                  </td>
                  <td className="py-4 align-top">
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#0033CC] bg-[#0033CC]/[0.06] rounded-lg px-3 py-1.5">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2 7.5L5.5 11L12 3" stroke="#0033CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {row.nonla}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Data source footnote */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={tableInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-xs text-[#8A9BB5] mt-8"
        >
          Source: NONLA Coffee Brand Strategy Brief — Market Analysis & Competitive Positioning 2025
        </motion.p>
      </div>
    </section>
  );
}

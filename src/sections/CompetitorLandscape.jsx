import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CoffeeBean, CoffeeLeaf, MiniNonlaPack } from '../components/BrandDecor';

const red = '#C83A30';
const redFill = '#F9E0DC';
const green = '#4F852A';
const greenFill = '#E6F1D7';
const gold = '#BF8A00';
const goldFill = '#FFF0B8';
const brown = '#7A2E14';

const mapBubbles = [
  { x: 320, y: 168, r: 56, type: 'nonla', lines: ['NONLA', '8 vị bản địa'], sub: ['sầu riêng, sữa dừa,', 'kem trứng...'] },
  { x: 448, y: 205, r: 34, type: 'green', lines: ['BANA', 'CAFE'] },
  { x: 506, y: 135, r: 35, type: 'green', lines: ['MISS EDE'], sub: ['phin VN'] },
  { x: 728, y: 142, r: 52, type: 'green', lines: ['TRUNG', 'NGUYÊN'], sub: ['cà phê chồn'] },
  { x: 838, y: 178, r: 38, type: 'green', lines: ['LAMANT', 'APEC'], sub: ['hộp gỗ'] },
  { x: 290, y: 338, r: 45, type: 'red', lines: ['ĐẠT PHÚ', 'NEON'], sub: ['7 cấp độ'] },
  { x: 250, y: 405, r: 31, type: 'red', lines: ['WACA'] },
  { x: 340, y: 425, r: 35, type: 'red', lines: ['SIMEA'], sub: ['4 mùa'] },
  { x: 150, y: 448, r: 37, type: 'red', lines: ['MIRABI'], sub: ['espresso'] },
  { x: 650, y: 370, r: 36, type: 'red', lines: ['AEROCO'], sub: ['specialty'] },
];

const priceBars = [
  { label: 'SIMEA', x1: 112, x2: 372, y: 662, color: red },
  { label: 'Đạt Phú Neon', x1: 128, x2: 300, y: 682, color: red },
  { label: 'Waca', x1: 190, x2: 190, y: 702, color: red, dot: true },
  { label: 'NONLA', x1: 190, x2: 420, y: 718, color: gold },
  { label: 'Mirabi', x1: 82, x2: 190, y: 738, color: red },
  { label: 'Aeroco', x1: 398, x2: 520, y: 702, color: red },
  { label: 'Trung Nguyên', x1: 620, x2: 860, y: 718, color: '#6F9E47' },
  { label: 'Lamant 1M+', x1: 720, x2: 860, y: 738, color: '#96B779' },
];

const competitors = [
  { brand: 'Mirabi', segment: 'Mainstream', price: '150-200k', format: 'Stick', cultural: 'Low', gift: 'Low' },
  { brand: 'SIMEA', segment: 'Mainstream', price: '200-300k', format: 'Stick/Box', cultural: 'Low-Med', gift: 'Medium' },
  { brand: 'Đạt Phú Neon', segment: 'Mainstream', price: '180-250k', format: 'Stick', cultural: 'Low', gift: 'Low' },
  { brand: 'Aeroco', segment: 'Mainstream', price: '350-500k', format: 'Drip bag', cultural: 'Low', gift: 'Medium' },
  { brand: 'Waca', segment: 'Mainstream', price: '150-250k', format: 'Stick', cultural: 'Low', gift: 'Low' },
  { brand: 'Trung Nguyên', segment: 'Premium', price: '600k-1.2M', format: 'Bean/Ground', cultural: 'High', gift: 'High' },
  { brand: 'Lamant APEC', segment: 'Premium', price: '1-1.6M', format: 'Ground/Drip', cultural: 'High', gift: 'Very High' },
  { brand: 'Miss Ede', segment: 'Mid-Premium', price: '250-450k', format: 'Drip bag', cultural: 'Medium-High', gift: 'Medium' },
  { brand: 'NONLA', segment: 'Premium Gift', price: '200-500k', format: 'Freeze-dried Pod', cultural: 'Very High', gift: 'Very High', highlight: true },
];

const tableHeaders = ['Brand', 'Segment', 'Price Range', 'Format', 'Cultural Depth', 'Gift-worthiness'];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 },
  },
};

const rowVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

function bubbleStyle(type) {
  if (type === 'nonla') return { fill: goldFill, stroke: gold, text: '#5B4215' };
  if (type === 'green') return { fill: greenFill, stroke: green, text: '#2F5E1D', dash: '5 4' };
  return { fill: redFill, stroke: red, text: '#8B211B' };
}

function BrandBubble({ bubble }) {
  const colors = bubbleStyle(bubble.type);
  const titleSize = bubble.type === 'nonla' ? 19 : bubble.r > 40 ? 16 : 12;
  const lineHeight = bubble.type === 'nonla' ? 19 : 14;
  const firstY = bubble.y - (bubble.lines.length + (bubble.sub?.length || 0)) * 5;

  return (
    <g>
      <circle
        cx={bubble.x}
        cy={bubble.y}
        r={bubble.r}
        fill={colors.fill}
        stroke={colors.stroke}
        strokeWidth={bubble.type === 'nonla' ? 4 : 2}
        strokeDasharray={colors.dash}
      />
      <text
        x={bubble.x}
        y={firstY}
        textAnchor="middle"
        fill={colors.text}
        fontFamily="Plus Jakarta Sans, Arial, sans-serif"
        fontWeight={bubble.type === 'nonla' ? 600 : 700}
        fontSize={titleSize}
      >
        {bubble.lines.map((line, index) => (
          <tspan key={line} x={bubble.x} dy={index === 0 ? 0 : lineHeight}>
            {line}
          </tspan>
        ))}
      </text>
      {bubble.sub && (
        <text
          x={bubble.x}
          y={firstY + bubble.lines.length * lineHeight + 5}
          textAnchor="middle"
          fill={colors.text}
          fontFamily="Plus Jakarta Sans, Arial, sans-serif"
          fontStyle="italic"
          fontSize={bubble.type === 'nonla' ? 11 : 10}
        >
          {bubble.sub.map((line, index) => (
            <tspan key={line} x={bubble.x} dy={index === 0 ? 0 : 14}>
              {line}
            </tspan>
          ))}
        </text>
      )}
    </g>
  );
}

function PriceBar({ bar }) {
  if (bar.dot) {
    return (
      <g>
        <circle cx={bar.x1} cy={bar.y} r="6" fill={bar.color} />
        <text x={bar.x1 + 15} y={bar.y + 4} fill={bar.color} fontSize="13" fontWeight="700">
          {bar.label}
        </text>
      </g>
    );
  }

  const labelBefore = ['SIMEA', 'Đạt Phú Neon', 'NONLA'].includes(bar.label);
  const labelAfter = ['Mirabi', 'Trung Nguyên', 'Lamant 1M+'].includes(bar.label);

  return (
    <g>
      {labelBefore && (
        <text x={bar.x1 - 8} y={bar.y + 4} fill={bar.color} fontSize="13" fontWeight="700" textAnchor="end">
          {bar.label}
        </text>
      )}
      <line x1={bar.x1} y1={bar.y} x2={bar.x2} y2={bar.y} stroke={bar.color} strokeWidth="7" strokeLinecap="round" />
      {bar.label === 'Aeroco' && (
        <text x={bar.x1 - 12} y={bar.y + 4} fill={bar.color} fontSize="13" fontWeight="700" textAnchor="end">
          {bar.label}
        </text>
      )}
      {labelAfter && (
        <text x={bar.x2 + 12} y={bar.y + 4} fill={bar.color} fontSize="13" fontWeight="700">
          {bar.label}
        </text>
      )}
    </g>
  );
}

function PerceptualMap() {
  return (
    <div className="perceptual-map-card overflow-x-auto rounded-xl p-3 md:p-5">
      <svg
        viewBox="0 0 1000 770"
        role="img"
        aria-label="Perceptual Map Category Quà tặng Cà phê"
        className="min-w-[760px] md:min-w-0 w-full h-auto"
      >
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="8" refX="9" refY="4" orient="auto">
            <path d="M0,0 L10,4 L0,8 Z" fill={brown} />
          </marker>
        </defs>

        <text x="500" y="34" textAnchor="middle" fill="#202020" fontSize="22" fontWeight="600">
          Perceptual Map: Category Quà tặng Cà phê
        </text>

        <text x="493" y="82" textAnchor="middle" fill="#202020" fontSize="18" fontWeight="700">
          VỊ BẢN ĐỊA, ĐA DẠNG
        </text>

        <line x1="80" y1="300" x2="890" y2="300" stroke="#111" strokeWidth="3" />
        <line x1="500" y1="90" x2="500" y2="565" stroke="#111" strokeWidth="3" />

        <text x="20" y="306" fill="#202020" fontSize="18" fontWeight="600">
          GIÁ THẤP
        </text>
        <text x="895" y="306" fill="#202020" fontSize="18" fontWeight="600">
          GIÁ CAO
        </text>
        <text x="500" y="588" textAnchor="middle" fill="#202020" fontSize="18" fontWeight="600">
          HƯƠNG VỊ PHỔ THÔNG
        </text>

        <text x="245" y="107" fill={gold} fontSize="16" fontWeight="700">
          ★ WHITE SPACE
        </text>

        <path
          d="M376 168 C472 168 560 162 590 126 C602 102 690 96 750 98"
          fill="none"
          stroke={brown}
          strokeWidth="4"
          markerEnd="url(#arrowhead)"
        />
        <path
          d="M610 168 C535 168 474 180 376 168"
          fill="none"
          stroke={brown}
          strokeWidth="4"
          markerEnd="url(#arrowhead)"
        />

        <rect x="765" y="22" width="205" height="96" rx="8" fill="#FFF4DE" stroke={green} strokeDasharray="3 3" />
        <text x="782" y="68" fill="#444" fontSize="17">
          <tspan x="782" dy="0">Mid-premium giftable</tspan>
          <tspan x="782" dy="24">200-350k, có chiều sâu</tspan>
        </text>

        {mapBubbles.map((bubble) => (
          <BrandBubble key={`${bubble.type}-${bubble.x}-${bubble.y}`} bubble={bubble} />
        ))}

        <line x1="90" y1="644" x2="900" y2="644" stroke="#333" strokeWidth="2" strokeDasharray="6 8" />
        {[
          [120, '100k'],
          [240, '200k'],
          [360, '300k'],
          [480, '400k'],
          [600, '500k'],
          [720, '1M'],
          [860, '1.6M+'],
        ].map(([x, label]) => (
          <g key={label}>
            <line x1={x} y1="630" x2={x} y2="660" stroke="#333" strokeWidth="2" />
            <text x={x} y="624" textAnchor="middle" fill="#333" fontSize="16">
              {label}
            </text>
          </g>
        ))}

        {priceBars.map((bar) => (
          <PriceBar key={`${bar.label}-${bar.y}`} bar={bar} />
        ))}
      </svg>
    </div>
  );
}

function PerceptualMapV2() {
  const bubbles = [
    {
      x: 305,
      y: 190,
      r: 58,
      type: 'nonla',
      lines: ['NONLA', '8 vị bản địa'],
      sub: ['sầu riêng, sữa dừa,', 'kem trứng...'],
    },
    { x: 430, y: 235, r: 34, type: 'green', lines: ['BANA', 'CAFE'] },
    { x: 520, y: 168, r: 35, type: 'green', lines: ['MISS EDE'], sub: ['phin VN'] },
    { x: 742, y: 174, r: 52, type: 'green', lines: ['TRUNG', 'NGUYÊN'], sub: ['cà phê chồn'] },
    { x: 856, y: 218, r: 38, type: 'green', lines: ['LAMANT', 'APEC'], sub: ['hộp gỗ'] },
    { x: 286, y: 358, r: 45, type: 'red', lines: ['ĐẠT PHÚ', 'NEON'], sub: ['7 cấp độ'] },
    { x: 246, y: 432, r: 31, type: 'red', lines: ['WACA'] },
    { x: 340, y: 448, r: 35, type: 'red', lines: ['SIMEA'], sub: ['4 mùa'] },
    { x: 150, y: 468, r: 37, type: 'red', lines: ['MIRABI'], sub: ['espresso'] },
    { x: 652, y: 392, r: 36, type: 'red', lines: ['AEROCO'], sub: ['specialty'] },
  ];

  const ticks = [
    [120, '100k'],
    [245, '200k'],
    [370, '300k'],
    [495, '400k'],
    [620, '500k'],
    [745, '1M'],
    [895, '1.6M+'],
  ];

  const ranges = [
    { label: 'SIMEA', x1: 120, x2: 390, y: 660, color: red, anchor: 'before' },
    { label: 'Đạt Phú Neon', x1: 142, x2: 318, y: 682, color: red, anchor: 'before' },
    { label: 'Waca', x1: 198, y: 704, color: red, dot: true },
    { label: 'NONLA', x1: 196, x2: 468, y: 726, color: gold, anchor: 'before' },
    { label: 'Mirabi', x1: 92, x2: 198, y: 750, color: red, anchor: 'after' },
    { label: 'Aeroco', x1: 412, x2: 540, y: 704, color: red, anchor: 'before' },
    { label: 'Trung Nguyên', x1: 660, x2: 895, y: 726, color: '#6F9E47', anchor: 'after' },
    { label: 'Lamant 1M+', x1: 760, x2: 895, y: 750, color: '#96B779', anchor: 'after' },
  ];

  const renderBubble = (bubble) => {
    const colors = bubbleStyle(bubble.type);
    const isNonla = bubble.type === 'nonla';
    const titleSize = isNonla ? 20 : bubble.r > 42 ? 16 : 12;
    const lineHeight = isNonla ? 20 : 14;
    const totalLines = bubble.lines.length + (bubble.sub?.length || 0);
    const firstY = bubble.y - totalLines * 5;

    return (
      <g key={`${bubble.lines.join('-')}-${bubble.x}`}>
        <circle
          cx={bubble.x}
          cy={bubble.y}
          r={bubble.r}
          fill={colors.fill}
          stroke={colors.stroke}
          strokeWidth={isNonla ? 4 : 2}
          strokeDasharray={colors.dash}
        />
        <text
          x={bubble.x}
          y={firstY}
          textAnchor="middle"
          fill={colors.text}
          fontFamily="Plus Jakarta Sans, Arial, sans-serif"
          fontWeight={isNonla ? 700 : 800}
          fontSize={titleSize}
        >
          {bubble.lines.map((line, index) => (
            <tspan key={line} x={bubble.x} dy={index === 0 ? 0 : lineHeight}>
              {line}
            </tspan>
          ))}
        </text>
        {bubble.sub && (
          <text
            x={bubble.x}
            y={firstY + bubble.lines.length * lineHeight + 6}
            textAnchor="middle"
            fill={colors.text}
            fontFamily="Plus Jakarta Sans, Arial, sans-serif"
            fontStyle="italic"
            fontSize={isNonla ? 10.5 : 10}
          >
            {bubble.sub.map((line, index) => (
              <tspan key={line} x={bubble.x} dy={index === 0 ? 0 : 13}>
                {line}
              </tspan>
            ))}
          </text>
        )}
      </g>
    );
  };

  const renderRange = (range) => {
    if (range.dot) {
      return (
        <g key={range.label}>
          <circle cx={range.x1} cy={range.y} r="6" fill={range.color} />
          <text x={range.x1 + 16} y={range.y + 4} fill={range.color} fontSize="13" fontWeight="800">
            {range.label}
          </text>
        </g>
      );
    }

    return (
      <g key={range.label}>
        {range.anchor === 'before' && (
          <text x={range.x1 - 10} y={range.y + 4} fill={range.color} fontSize="13" fontWeight="800" textAnchor="end">
            {range.label}
          </text>
        )}
        <line
          x1={range.x1}
          y1={range.y}
          x2={range.x2}
          y2={range.y}
          stroke={range.color}
          strokeWidth="7"
          strokeLinecap="round"
        />
        {range.anchor === 'after' && (
          <text x={range.x2 + 12} y={range.y + 4} fill={range.color} fontSize="13" fontWeight="800">
            {range.label}
          </text>
        )}
      </g>
    );
  };

  return (
    <div className="perceptual-map-card overflow-x-auto rounded-xl p-3 md:p-5 hide-scrollbar">
      <svg
        viewBox="0 0 1000 790"
        role="img"
        aria-label="Perceptual Map Category Quà tặng Cà phê"
        className="min-w-[820px] lg:min-w-0 w-full h-auto"
      >
        <defs>
          <marker id="arrowhead-v2" markerWidth="12" markerHeight="10" refX="10" refY="5" orient="auto">
            <path d="M0,0 L12,5 L0,10 Z" fill={brown} />
          </marker>
        </defs>

        <rect x="80" y="76" width="840" height="452" rx="18" fill="#FFFFFF" />
        <text x="500" y="34" textAnchor="middle" fill="#151515" fontSize="23" fontWeight="700">
          Perceptual Map: Category Quà tặng Cà phê
        </text>
        <text x="500" y="82" textAnchor="middle" fill="#151515" fontSize="18" fontWeight="800">
          VỊ BẢN ĐỊA, ĐA DẠNG
        </text>

        <line x1="135" y1="312" x2="875" y2="312" stroke="#111" strokeWidth="3" />
        <line x1="500" y1="96" x2="500" y2="528" stroke="#111" strokeWidth="3" />

        <text x="34" y="319" fill="#151515" fontSize="18" fontWeight="700">
          GIÁ THẤP
        </text>
        <text x="882" y="319" fill="#151515" fontSize="18" fontWeight="700">
          GIÁ CAO
        </text>
        <text x="500" y="560" textAnchor="middle" fill="#151515" fontSize="18" fontWeight="700">
          HƯƠNG VỊ PHỔ THÔNG
        </text>

        <text x="245" y="112" fill={gold} fontSize="16" fontWeight="800">
          ★ WHITE SPACE
        </text>

        <path
          d="M372 168 C450 165 545 142 595 112 C640 86 714 96 770 112"
          fill="none"
          stroke={brown}
          strokeWidth="4"
          markerEnd="url(#arrowhead-v2)"
        />
        <path
          d="M610 212 C535 212 468 206 374 196"
          fill="none"
          stroke={brown}
          strokeWidth="4"
          markerEnd="url(#arrowhead-v2)"
        />

        <rect x="748" y="48" width="220" height="94" rx="9" fill="#FFF4DE" stroke={green} strokeDasharray="3 3" />
        <text x="768" y="89" fill="#444" fontSize="16.5" fontWeight="500">
          <tspan x="768" dy="0">Mid-premium giftable</tspan>
          <tspan x="768" dy="25">200-350k, có chiều sâu</tspan>
        </text>

        {bubbles.map(renderBubble)}

        <line x1="92" y1="632" x2="905" y2="632" stroke="#333" strokeWidth="2" strokeDasharray="6 8" />
        {ticks.map(([x, label]) => (
          <g key={label}>
            <line x1={x} y1="616" x2={x} y2="646" stroke="#333" strokeWidth="2" />
            <text x={x} y="609" textAnchor="middle" fill="#333" fontSize="16" fontWeight="500">
              {label}
            </text>
          </g>
        ))}

        {ranges.map(renderRange)}
      </svg>
    </div>
  );
}

/* Competitor table data */
export default function CompetitorLandscape() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="competitors"
      ref={sectionRef}
      className="relative bg-[#0A1628] py-16 md:py-24 overflow-hidden"
    >
      <div className="brand-gradient-background" aria-hidden="true" />
      <div className="section-decor" aria-hidden="true">
        <CoffeeLeaf className="section-decor__leaf section-decor__leaf--one" />
        <CoffeeBean className="section-decor__bean section-decor__bean--1" />
        <CoffeeBean className="section-decor__bean section-decor__bean--2" />
        <span className="section-decor__hat section-decor__hat--two" />
      </div>
      <div className="section-bg-text" aria-hidden="true">
        RIVALS
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs uppercase tracking-widest text-[#F4B400] font-semibold mb-4"
        >
          Competitors
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold text-white mb-3"
        >
          Competitor Landscape
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[#8A9BB5] text-base md:text-xl max-w-2xl mb-12"
        >
          Mapping the Vietnamese instant coffee gift market - where every
          brand sits and where NONLA discovered its white space.
        </motion.p>

        <motion.div
          custom={0.3}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mb-6"
        >
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
            Perceptual Map:{' '}
            <span className="text-[#F4B400]">Category Quà tặng Cà phê</span>
          </h3>
          <p className="text-[#8A9BB5] text-sm">
            Trục ngang là giá, trục dọc là mức độ vị bản địa và đa dạng hương vị.
          </p>
        </motion.div>

        <motion.div
          custom={0.4}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="glass-card polished-map-shell p-2 md:p-4 mb-6"
        >
          <div className="mb-3 flex items-center justify-between gap-4 px-2 pt-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#FFD84D]">
                NONLA white space
              </p>
              <p className="mt-1 text-sm text-white/62">
                Premium giftability, Vietnamese identity, and accessible price.
              </p>
            </div>
            <div className="hidden sm:block">
              <MiniNonlaPack label="NONLA" />
            </div>
          </div>
          <PerceptualMap />
        </motion.div>

        <motion.div
          custom={0.5}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-col gap-3 sm:flex-row sm:items-center mb-16"
        >
          <div className="flex w-fit items-center gap-2 px-4 py-2 rounded-full bg-[#F4B400]/10 border border-[#F4B400]/30">
            <span className="text-[#F4B400] text-lg">★</span>
            <span className="text-[#F4B400] text-sm font-bold uppercase tracking-wider">
              White Space
            </span>
          </div>
          <p className="text-[#8A9BB5] text-sm">
            NONLA owns the mid-premium giftable space: 200-350k, high Vietnamese identity, and richer flavor depth.
          </p>
        </motion.div>

        <motion.div
          custom={0.3}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mb-8"
        >
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
            Competitor Comparison
          </h3>
          <p className="text-[#8A9BB5] text-sm">
            Scroll horizontally on mobile to view all columns.
          </p>
        </motion.div>

        <motion.div
          custom={0.4}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="glass-card overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px]">
              <thead>
                <tr className="border-b border-white/10">
                  {tableHeaders.map((header) => (
                    <th
                      key={header}
                      className="px-5 py-4 text-left text-xs uppercase tracking-wider font-bold text-[#8A9BB5]"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>

              <motion.tbody
                variants={staggerContainer}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
              >
                {competitors.map((row, idx) => (
                  <motion.tr
                    key={row.brand}
                    variants={rowVariant}
                    className={`
                      border-b border-white/5 transition-colors duration-200
                      ${row.highlight
                        ? 'bg-[#F4B400]/10 border-l-4 border-l-[#F4B400]'
                        : idx % 2 === 0
                          ? 'bg-white/[0.02]'
                          : 'bg-transparent'
                      }
                      hover:bg-white/[0.05]
                    `}
                  >
                    <td className="px-5 py-4 text-sm font-bold text-white whitespace-nowrap">
                      {row.brand}
                      {row.highlight && (
                        <span className="ml-2 inline-block px-2 py-0.5 text-[10px] uppercase tracking-widest font-bold bg-[#F4B400] text-[#0A1628] rounded">
                          ★ Us
                        </span>
                      )}
                    </td>
                    <td className="px-5 py-4 text-sm text-[#8A9BB5] whitespace-nowrap">
                      <span
                        className={`inline-block px-2 py-0.5 rounded text-xs font-semibold ${
                          row.segment === 'Premium Gift'
                            ? 'bg-[#F4B400]/20 text-[#F4B400]'
                            : row.segment === 'Premium'
                              ? 'bg-[#22C55E]/15 text-[#22C55E]'
                              : row.segment === 'Mid-Premium'
                                ? 'bg-[#22C55E]/10 text-[#22C55E]/80'
                                : 'bg-[#1A4DFF]/15 text-[#1A4DFF]'
                        }`}
                      >
                        {row.segment}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-sm text-white/80 whitespace-nowrap">
                      {row.price}
                    </td>
                    <td className="px-5 py-4 text-sm text-white/80 whitespace-nowrap">
                      {row.format}
                    </td>
                    <td className="px-5 py-4 text-sm whitespace-nowrap">
                      <CulturalBar level={row.cultural} />
                    </td>
                    <td className="px-5 py-4 text-sm whitespace-nowrap">
                      <GiftBar level={row.gift} />
                    </td>
                  </motion.tr>
                ))}
              </motion.tbody>
            </table>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="text-xs text-[#8A9BB5] mt-8"
        >
          Source: NONLA Coffee competitive analysis - market research Q3 2025.
          Positioning is indicative.
        </motion.p>
      </div>
    </section>
  );
}

function CulturalBar({ level }) {
  const levels = {
    Low: { width: '20%', color: '#1A4DFF' },
    'Low-Med': { width: '35%', color: '#1A4DFF' },
    Medium: { width: '50%', color: '#22C55E' },
    'Medium-High': { width: '65%', color: '#22C55E' },
    High: { width: '80%', color: '#22C55E' },
    'Very High': { width: '100%', color: '#F4B400' },
  };
  const config = levels[level] || levels.Low;

  return (
    <div className="flex items-center gap-2">
      <div className="w-16 h-1.5 rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{ width: config.width, backgroundColor: config.color }}
        />
      </div>
      <span className="text-white/60 text-xs">{level}</span>
    </div>
  );
}

function GiftBar({ level }) {
  const levels = {
    Low: { width: '20%', color: '#1A4DFF' },
    Medium: { width: '50%', color: '#22C55E' },
    High: { width: '75%', color: '#22C55E' },
    'Very High': { width: '100%', color: '#F4B400' },
  };
  const config = levels[level] || levels.Low;

  return (
    <div className="flex items-center gap-2">
      <div className="w-16 h-1.5 rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{ width: config.width, backgroundColor: config.color }}
        />
      </div>
      <span className="text-white/60 text-xs">{level}</span>
    </div>
  );
}

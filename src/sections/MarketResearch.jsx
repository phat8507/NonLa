import { motion } from 'framer-motion';
import AnimatedCounter from '../components/AnimatedCounter';
import SectionWrapper from '../components/SectionWrapper';
import { CoffeeBean, CoffeeLeaf, MiniNonlaPack } from '../components/BrandDecor';

const stats = [
  {
    prefix: 'USD ',
    target: 8.9,
    suffix: 'B',
    decimals: 1,
    label: 'Vietnam coffee market 2025',
  },
  {
    prefix: '+',
    target: 18.3,
    suffix: '%',
    decimals: 1,
    label: 'YoY growth in 2025',
  },
  {
    prefix: 'CAGR ',
    target: 6.6,
    suffix: '%',
    decimals: 1,
    label: 'Projected coffee growth',
  },
  {
    prefix: '',
    target: 33.4,
    suffix: 'B VND',
    decimals: 1,
    label: 'Shopee Tet gift set revenue',
  },
];

function MarketGrowthChart() {
  return (
    <div className="nonla-card-strong p-6 md:p-8 overflow-hidden relative">
      <CoffeeLeaf className="absolute -left-8 top-8 opacity-25 animate-float-slow" />
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-8">
        <div>
          <p className="text-xs uppercase tracking-widest text-[#FFD84D] font-bold mb-3">
            Market Growth & Premiumization Chart
          </p>
          <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
            Shifting from volume expansion to high-value gifting
          </h3>
        </div>
        <MiniNonlaPack label="Growth" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left: SVG Bar/Line Combo Chart */}
        <div className="relative flex flex-col justify-center items-center py-2 select-none w-full">
          <p className="text-[11px] font-black text-[#FFD84D] mb-4 uppercase tracking-wider">Volume Growth vs. Premium Value Acceleration</p>
          
          <div className="relative w-full max-w-[400px] aspect-[4/3] border-l-2 border-b-2 border-white/20 flex flex-col justify-between p-2">
            {/* SVG Elements */}
            <svg className="absolute inset-0 w-full h-full p-2" viewBox="0 0 100 100" preserveAspectRatio="none">
              {/* Grid Lines */}
              <line x1="0" y1="25" x2="100" y2="25" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
              <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
              <line x1="0" y1="75" x2="100" y2="75" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
              
              {/* Blue Bars: Volume Growth Base (Million Bags) */}
              <rect x="8" y="45" width="8" height="55" fill="#1A4DFF" opacity="0.85" rx="1" />
              <rect x="28" y="43" width="8" height="57" fill="#1A4DFF" opacity="0.85" rx="1" />
              <rect x="48" y="42" width="8" height="58" fill="#1A4DFF" opacity="0.85" rx="1" />
              <rect x="68" y="41" width="8" height="59" fill="#1A4DFF" opacity="0.85" rx="1" />
              <rect x="88" y="40" width="8" height="60" fill="#1A4DFF" opacity="0.85" rx="1" />

              {/* Gold/Yellow Line & Area: Value / Premium Opportunity (Billion USD) */}
              <path d="M 12 74 L 32 69 L 52 62 L 72 50 L 92 38" fill="none" stroke="#FFD84D" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M 12 74 L 32 69 L 52 62 L 72 50 L 92 38 L 92 100 L 12 100 Z" fill="url(#goldGradient)" opacity="0.12" />
              
              {/* Decorative data node points */}
              <circle cx="12" cy="74" r="2.5" fill="#FFD84D" stroke="#0A1628" strokeWidth="0.8" />
              <circle cx="32" cy="69" r="2.5" fill="#FFD84D" stroke="#0A1628" strokeWidth="0.8" />
              <circle cx="52" cy="62" r="2.5" fill="#FFD84D" stroke="#0A1628" strokeWidth="0.8" />
              <circle cx="72" cy="50" r="2.5" fill="#FFD84D" stroke="#0A1628" strokeWidth="0.8" />
              <circle cx="92" cy="38" r="2.5" fill="#FFD84D" stroke="#0A1628" strokeWidth="0.8" />

              <defs>
                <linearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FFD84D" />
                  <stop offset="100%" stopColor="#FFD84D" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Axis Titles */}
            <div className="absolute left-2 top-2 text-[8px] font-bold text-white/40 uppercase tracking-widest">Premium Value (Gold line)</div>
            <div className="absolute right-2 bottom-2 text-[8px] font-bold text-white/40 uppercase tracking-widest">Volume Base (Blue bars)</div>
          </div>
          
          <div className="w-full max-w-[400px] flex justify-between text-[10px] font-bold text-white/60 mt-2 px-3">
            <span>2022</span>
            <span>2023</span>
            <span>2024</span>
            <span>2025</span>
            <span>2026 (P)</span>
          </div>
        </div>

        {/* Right: Giftset Price Acceptance breakdown */}
        <div className="space-y-5">
          <h4 className="text-xs font-black text-[#FFD84D] uppercase tracking-wider">Giftset Price Acceptance</h4>
          <p className="text-sm text-white/80 leading-relaxed italic">
            “The opportunity is not more instant coffee. It is a premium, culturally coded coffee gift that feels valuable before the first sip.”
          </p>
          
          <div className="space-y-3.5 border-t border-white/10 pt-4">
            {/* Segment 1 */}
            <div>
              <div className="flex justify-between items-center text-xs font-bold text-white mb-1.5">
                <span>Mid-Premium Sweet Spot (200k - 500k)</span>
                <span className="text-[#FFD84D]">60% Acceptance</span>
              </div>
              <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-[#FFD84D]" style={{ width: '60%' }} />
              </div>
              <p className="text-[10px] text-[#8A9BB5] mt-1">Core target for individual cultural gifters and SME B2B buyers</p>
            </div>

            {/* Segment 2 */}
            <div>
              <div className="flex justify-between items-center text-xs font-bold text-white mb-1.5">
                <span>Entry Gift Segment (&lt;200k)</span>
                <span className="text-white/60">25% Acceptance</span>
              </div>
              <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-[#1A4DFF]" style={{ width: '25%' }} />
              </div>
              <p className="text-[10px] text-[#8A9BB5] mt-1">Saturated mass retail, lower prestige value</p>
            </div>

            {/* Segment 3 */}
            <div>
              <div className="flex justify-between items-center text-xs font-bold text-white mb-1.5">
                <span>High-End Luxury (&gt;500k)</span>
                <span className="text-white/60">15% Acceptance</span>
              </div>
              <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-[#1A4DFF]/60" style={{ width: '15%' }} />
              </div>
              <p className="text-[10px] text-[#8A9BB5] mt-1">Premium corporate baskets, low volume ceiling</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MarketResearch() {
  return (
    <SectionWrapper id="market" bgText="MARKET">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-[#FFD84D] font-bold mb-4">
            Market
          </p>
          <h2 className="nonla-section-title text-4xl md:text-5xl">
            Market Research
          </h2>
          <p className="text-white/74 text-lg md:text-xl mt-5 leading-relaxed">
            The opportunity is not more instant coffee. It is a premium,
            culturally coded coffee gift that feels valuable before the first
            sip.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {stats.map((stat, index) => (
            <motion.article
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="nonla-card p-6 overflow-hidden"
            >
              <CoffeeBean className="absolute right-5 top-5 opacity-25 scale-75" />
              <div className="text-3xl md:text-4xl font-black text-[#FFD84D] leading-tight">
                <AnimatedCounter
                  target={stat.target}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                />
              </div>
              <p className="text-white/76 text-sm leading-relaxed mt-3">{stat.label}</p>
            </motion.article>
          ))}
        </div>

        <MarketGrowthChart />

        <p className="text-xs text-white/52 mt-8">
          Data sources: Statista, Vietnam Coffee Association, Mordor
          Intelligence, Shopee Analytics, Vietnam Customs.
        </p>
      </div>
    </SectionWrapper>
  );
}

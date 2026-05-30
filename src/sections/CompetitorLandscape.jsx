import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  CoffeeBean,
  CoffeeBeanField,
  CoffeeLeaf,
  MiniNonlaPack,
  NonlaMascotFallback,
} from '../components/BrandDecor';

const brands = [
  {
    name: 'NONLA',
    x: 34,
    y: 28,
    size: 82,
    group: 'local',
    price: '200-500k',
    note: 'Vietnamese flavor identity, gift-ready format',
    meaning: 'Mid-premium white space: accessible, cultural, presentable',
    highlight: true,
  },
  {
    name: 'Trung Nguyên',
    x: 76,
    y: 30,
    size: 62,
    group: 'premium',
    price: '600k-1.2M',
    note: 'Established Vietnamese coffee equity',
    meaning: 'Strong trust, higher price, more conventional coffee cues',
  },
  {
    name: 'Lamant',
    x: 88,
    y: 38,
    size: 54,
    group: 'premium',
    price: '1M+',
    note: 'Premium box and formal gifting cues',
    meaning: 'Luxury-led gift territory',
  },
  {
    name: 'Miss Ede',
    x: 54,
    y: 25,
    size: 50,
    group: 'local',
    price: '250-450k',
    note: 'Local origin and phin associations',
    meaning: 'Cultural depth, less distinct gift ritual',
  },
  {
    name: 'Bana Cafe',
    x: 46,
    y: 41,
    size: 48,
    group: 'local',
    price: '250-400k',
    note: 'Local coffee identity',
    meaning: 'Closer to origin story than premium gift world',
  },
  {
    name: 'Aeroco',
    x: 67,
    y: 67,
    size: 48,
    group: 'premium',
    price: '350-500k',
    note: 'Specialty/drip bag cues',
    meaning: 'Coffee quality signal, weaker cultural gift icon',
  },
  {
    name: 'Dat Phu Neon',
    x: 31,
    y: 62,
    size: 54,
    group: 'mass',
    price: '180-250k',
    note: 'Accessible price, mainstream flavor system',
    meaning: 'Value and variety, lower premium gift perception',
  },
  {
    name: 'Waca',
    x: 25,
    y: 76,
    size: 42,
    group: 'mass',
    price: '150-250k',
    note: 'Mass instant convenience',
    meaning: 'Practical but less giftable',
  },
  {
    name: 'Simea',
    x: 37,
    y: 78,
    size: 46,
    group: 'mass',
    price: '200-300k',
    note: 'Seasonal mainstream pack',
    meaning: 'Moderate gifting, less cultural ownership',
  },
  {
    name: 'Mirabi',
    x: 15,
    y: 82,
    size: 46,
    group: 'mass',
    price: '150-200k',
    note: 'Espresso/mainstream instant territory',
    meaning: 'Low price, low premium signal',
  },
];

const filters = [
  { id: 'all', label: 'All' },
  { id: 'premium', label: 'Premium gift brands' },
  { id: 'local', label: 'Local flavor brands' },
  { id: 'mass', label: 'Mass instant brands' },
];

const competitors = brands.map((brand) => ({
  brand: brand.name,
  segment: brand.highlight
    ? 'Premium Gift'
    : brand.group === 'premium'
      ? 'Premium'
      : brand.group === 'local'
        ? 'Local Flavor'
        : 'Mass Instant',
  price: brand.price,
  format: brand.highlight ? 'Freeze-dried pack' : brand.group === 'premium' ? 'Gift box / drip' : 'Instant / box',
  cultural: brand.highlight ? 'Very High' : brand.group === 'local' ? 'High' : brand.group === 'premium' ? 'Medium-High' : 'Low-Med',
  gift: brand.highlight ? 'Very High' : brand.group === 'premium' ? 'High' : brand.group === 'local' ? 'Medium' : 'Low',
  highlight: brand.highlight,
}));

const tableHeaders = ['Brand', 'Segment', 'Price Range', 'Format', 'Cultural Depth', 'Gift-worthiness'];

function PerceptualMap() {
  const [activeFilter, setActiveFilter] = useState('all');
  const visibleBrands = useMemo(
    () => brands.filter((brand) => activeFilter === 'all' || brand.group === activeFilter || brand.highlight),
    [activeFilter],
  );

  return (
    <div className="nonla-card-strong p-4 md:p-6 overflow-hidden">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between mb-6">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-[#FFD84D] font-black mb-3">
            NONLA White Space
          </p>
          <p className="text-white/84 text-base md:text-lg leading-relaxed">
            NONLA’s opportunity is not to be the most expensive coffee gift, but
            to own the mid-premium space where Vietnamese identity, flavor
            diversity, and giftability meet.
          </p>
          <p className="mt-2 text-xs text-white/60">
            Positioning approximation based on competitive role and observed
            price ranges.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              onClick={() => setActiveFilter(filter.id)}
              className={`nonla-chip ${activeFilter === filter.id ? 'border-[#FFD84D] bg-[#FFD84D]/18 text-white' : ''}`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto pb-2">
        <div className="relative min-w-[760px] rounded-[28px] border border-[#FFD84D]/35 bg-[#FFF6DC] p-6 shadow-2xl">
          <div className="absolute inset-6 rounded-[20px] border border-[#0A1628]/10 bg-[linear-gradient(90deg,rgba(10,22,40,0.08)_1px,transparent_1px),linear-gradient(0deg,rgba(10,22,40,0.08)_1px,transparent_1px)] bg-[size:80px_80px]" />
          <svg className="absolute inset-6 h-[calc(100%-3rem)] w-[calc(100%-3rem)]" aria-hidden="true">
            <defs>
              <marker id="cleanArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="rgba(10,22,40,0.34)" />
              </marker>
            </defs>
            <line x1="8%" y1="50%" x2="95%" y2="50%" stroke="rgba(10,22,40,0.48)" strokeWidth="1.6" />
            <line x1="50%" y1="94%" x2="50%" y2="6%" stroke="rgba(10,22,40,0.48)" strokeWidth="1.6" />
            <path
              d="M260 215 C330 160 410 125 520 100"
              fill="none"
              stroke="rgba(10,22,40,0.32)"
              strokeWidth="2"
              strokeDasharray="5 7"
              markerEnd="url(#cleanArrow)"
            />
          </svg>

          <div className="relative h-[520px]">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 text-xs font-black uppercase tracking-widest text-[#0A1628]/68">
              Giá thấp
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 text-xs font-black uppercase tracking-widest text-[#0A1628]/68">
              Giá cao
            </div>
            <div className="absolute left-1/2 top-0 -translate-x-1/2 text-center text-xs font-black uppercase tracking-widest text-[#0A1628]/68">
              Vị bản địa, đa dạng
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center text-xs font-black uppercase tracking-widest text-[#0A1628]/68">
              Hương vị phổ thông
            </div>

            <div className="absolute left-[28%] top-[12%] rounded-full border border-[#F4B400]/50 bg-[#F4B400]/15 px-4 py-2 text-xs font-black uppercase tracking-widest text-[#7A4E00]">
              NONLA White Space
            </div>

            {visibleBrands.map((brand) => (
              <button
                key={brand.name}
                type="button"
                className={`group absolute rounded-full border-2 text-center font-black leading-tight shadow-lg transition duration-200 hover:z-30 hover:scale-105 focus:z-30 focus:scale-105 focus:outline-none focus:ring-4 focus:ring-[#1238F5]/35 ${
                  brand.highlight
                    ? 'border-[#B27A00] bg-[#FFD84D] text-[#0A1628]'
                    : brand.group === 'premium'
                      ? 'border-[#2F7A28] bg-[#DDEFCB] text-[#234C20]'
                      : brand.group === 'local'
                        ? 'border-[#1238F5] bg-[#DAE4FF] text-[#0A2EA8]'
                        : 'border-[#C83A30] bg-[#F8D8D2] text-[#7A1E18]'
                }`}
                style={{
                  left: `${brand.x}%`,
                  top: `${brand.y}%`,
                  width: brand.size,
                  height: brand.size,
                  transform: 'translate(-50%, -50%)',
                  fontSize: brand.highlight ? 13 : 11,
                }}
                aria-label={`${brand.name}: ${brand.price}. ${brand.note}. ${brand.meaning}`}
              >
                {brand.name}
                <span className="pointer-events-none absolute left-1/2 top-full z-40 mt-3 hidden w-64 -translate-x-1/2 rounded-2xl border border-[#FFD84D]/35 bg-[#08163A] p-4 text-left text-white shadow-2xl group-hover:block group-focus:block">
                  <span className="block text-sm font-black text-[#FFD84D]">{brand.name}</span>
                  <span className="mt-2 block text-xs font-bold text-white/78">Price: {brand.price}</span>
                  <span className="mt-2 block text-xs font-medium leading-relaxed text-white/74">{brand.note}</span>
                  <span className="mt-2 block text-xs font-medium leading-relaxed text-white/60">{brand.meaning}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-3">
        {[
          'Yellow bubble marks NONLA as the intended white-space position.',
          'Cream plotting surface improves scientific readability without leaving the NONLA brand world.',
          'Hover or focus each bubble to read price range, role, and strategic meaning.',
        ].map((note) => (
          <div key={note} className="rounded-2xl border border-white/10 bg-white/[0.07] p-4 text-sm text-white/72">
            {note}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CompetitorLandscape() {
  return (
    <section
      id="competitors"
      className="nonla-section nonla-section-blend relative overflow-hidden py-20 md:py-28"
    >
      <div className="brand-gradient-background" aria-hidden="true" />
      <div className="section-transition-soft section-transition-soft--top" aria-hidden="true" />
      <div className="section-transition-soft section-transition-soft--bottom" aria-hidden="true" />
      <CoffeeBeanField count={6} />
      <CoffeeLeaf className="absolute left-6 top-24 opacity-35" />
      <CoffeeLeaf className="absolute right-6 bottom-32 opacity-25 rotate-180" />
      <div className="section-bg-text" aria-hidden="true">
        RIVALS
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="mb-12"
        >
          <p className="text-xs uppercase tracking-widest text-[#FFD84D] font-bold mb-4">
            Competitors
          </p>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="nonla-section-title text-4xl md:text-5xl">
                Competitor Landscape
              </h2>
              <p className="mt-5 max-w-3xl text-white/76 text-lg leading-relaxed">
                The map frames the competitive question around price, flavor
                identity, and giftability, so the opportunity reads as a
                strategic space rather than a decorative chart.
              </p>
            </div>
            <div className="hidden lg:flex items-end gap-4">
              <MiniNonlaPack label="Map" />
              <NonlaMascotFallback />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          <PerceptualMap />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="mt-10 nonla-card overflow-hidden"
        >
          <div className="flex items-center justify-between gap-4 border-b border-white/10 bg-white/[0.05] p-5">
            <div>
              <h3 className="text-xl font-black text-white">Competitor Comparison</h3>
              <p className="mt-1 text-sm text-white/60">Scroll horizontally on mobile.</p>
            </div>
            <CoffeeBean className="relative opacity-65" />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px]">
              <thead>
                <tr className="border-b border-white/10">
                  {tableHeaders.map((header) => (
                    <th key={header} className="px-5 py-4 text-left text-xs uppercase tracking-wider font-bold text-white/62">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {competitors.map((row, idx) => (
                  <tr
                    key={row.brand}
                    className={`${row.highlight ? 'bg-[#F4B400]/12' : idx % 2 === 0 ? 'bg-white/[0.045]' : 'bg-white/[0.02]'} border-b border-white/5`}
                  >
                    <td className="px-5 py-4 text-sm font-black text-white whitespace-nowrap">
                      {row.brand}
                      {row.highlight && (
                        <span className="ml-2 rounded bg-[#FFD84D] px-2 py-0.5 text-[10px] font-black uppercase tracking-widest text-[#0A1628]">
                          Us
                        </span>
                      )}
                    </td>
                    <td className="px-5 py-4 text-sm text-white/78 whitespace-nowrap">{row.segment}</td>
                    <td className="px-5 py-4 text-sm text-[#FFD84D] font-bold whitespace-nowrap">{row.price}</td>
                    <td className="px-5 py-4 text-sm text-white/78 whitespace-nowrap">{row.format}</td>
                    <td className="px-5 py-4 text-sm text-white/78 whitespace-nowrap">{row.cultural}</td>
                    <td className="px-5 py-4 text-sm text-white/78 whitespace-nowrap">{row.gift}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

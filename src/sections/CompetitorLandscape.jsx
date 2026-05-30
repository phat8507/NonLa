import { motion } from 'framer-motion';
import {
  CoffeeBean,
  CoffeeBeanField,
  CoffeeLeaf,
  MiniNonlaPack,
  NonlaMascotFallback,
} from '../components/BrandDecor';
import InteractivePerceptualMap from '../components/InteractivePerceptualMap';

const competitors = [
  { brand: 'NONLA', segment: 'Premium Gift', price: '200-500k', format: 'Freeze-dried pack', cultural: 'Very High', gift: 'Very High', highlight: true },
  { brand: 'Trung Nguyên', segment: 'Premium', price: '600k-1.2M', format: 'Gift box / drip', cultural: 'Medium-High', gift: 'High' },
  { brand: 'Lamant', segment: 'Premium', price: '1M+', format: 'Gift box / drip', cultural: 'Medium-High', gift: 'High' },
  { brand: 'Miss Ede', segment: 'Local Flavor', price: '250-450k', format: 'Drip / phin', cultural: 'High', gift: 'Medium' },
  { brand: 'Bana Cafe', segment: 'Local Flavor', price: '250-400k', format: 'Coffee pack', cultural: 'High', gift: 'Medium' },
  { brand: 'Aeroco', segment: 'Premium', price: '350-500k', format: 'Specialty / drip', cultural: 'Medium-High', gift: 'Medium' },
  { brand: 'Dat Phu Neon', segment: 'Mass Instant', price: '180-250k', format: 'Instant / box', cultural: 'Low-Med', gift: 'Low' },
  { brand: 'Waca', segment: 'Mass Instant', price: '150-250k', format: 'Instant / box', cultural: 'Low-Med', gift: 'Low' },
  { brand: 'Simea', segment: 'Mass Instant', price: '200-300k', format: 'Instant / box', cultural: 'Low-Med', gift: 'Low' },
  { brand: 'Mirabi', segment: 'Mass Instant', price: '150-200k', format: 'Instant / box', cultural: 'Low-Med', gift: 'Low' },
];

const tableHeaders = ['Brand', 'Segment', 'Price Range', 'Format', 'Cultural Depth', 'Gift-worthiness'];

export default function CompetitorLandscape() {
  return (
    <section
      id="competitors"
      className="nonla-section nonla-section-blend relative overflow-hidden py-20 md:py-28"
    >
      <div className="brand-gradient-background" aria-hidden="true" />
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
          <InteractivePerceptualMap />
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
              <p className="mt-1 text-sm text-white/62">Scroll horizontally on mobile.</p>
            </div>
            <CoffeeBean className="relative opacity-65" />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px]">
              <thead>
                <tr className="border-b border-white/10">
                  {tableHeaders.map((header) => (
                    <th key={header} className="px-5 py-4 text-left text-xs uppercase tracking-wider font-bold text-white/64">
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

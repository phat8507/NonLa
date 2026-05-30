import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { CoffeeBean, CoffeeLeaf, MiniNonlaPack } from '../components/BrandDecor';

const summaryItems = [
  {
    title: 'Insight',
    body: 'Fear that convenience = cheap gift',
    icon: '!',
  },
  {
    title: 'Big Idea',
    body: 'Trọn tinh túy Việt dưới bóng nón',
    icon: '△',
    feature: true,
  },
  {
    title: 'Target',
    body: 'Corporate Tet Gift Buyers (Primary)',
    icon: '◎',
  },
  {
    title: 'Strategy',
    body: 'REFRAME: not coffee, a Vietnamese gifting ritual',
    icon: '↗',
  },
  {
    title: 'Budget',
    body: '4B VND → 12B VND target (ROAS 3.0×)',
    icon: '₫',
  },
  {
    title: 'Timeline',
    body: 'September → December 2025',
    icon: '▦',
  },
];

export default function ExecutiveSummary() {
  return (
    <SectionWrapper id="overview" bgText="OVERVIEW" decor="light">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#FFD84D] font-bold mb-4">
              Overview
            </p>
            <h2 className="nonla-section-title text-4xl md:text-5xl">
              Executive Summary
            </h2>
            <p className="mt-5 text-white/76 text-lg leading-relaxed">
              A compact campaign dashboard linking insight, audience, message,
              budget, and rollout into one NONLA story.
            </p>
            <div className="mt-8 hidden lg:flex items-end gap-4">
              <MiniNonlaPack label="Tet" />
              <CoffeeLeaf className="relative opacity-45 scale-75" />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55 }}
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4"
          >
            {summaryItems.map((item, index) => (
              <article
                key={item.title}
                className={`${item.feature ? 'nonla-card-strong sm:col-span-2 xl:col-span-1' : 'nonla-card'} group overflow-hidden p-5`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FFD84D] text-lg font-black text-[#0A1628] shadow-lg shadow-[#F4B400]/20">
                    {item.icon}
                  </span>
                  <span className="text-xs font-black text-white/42">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mt-6 text-xs uppercase tracking-widest text-[#FFD84D] font-black">
                  {item.title}
                </h3>
                <p className="mt-3 text-lg font-bold leading-snug text-white/88">
                  {item.body}
                </p>
                <CoffeeBean className="absolute right-5 bottom-4 opacity-20" />
              </article>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}

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

const flow = [
  {
    title: 'Market growth',
    body: 'Vietnamese coffee is expanding in value, not only in volume.',
  },
  {
    title: 'Gifting season',
    body: 'Tet concentrates demand into a short, high-intent purchase window.',
  },
  {
    title: 'Category gap',
    body: 'Instant coffee feels practical, while gift sets often lack a coffee ritual.',
  },
  {
    title: 'NONLA opportunity',
    body: 'Own the premium Vietnamese coffee gift space with culture and convenience.',
  },
];

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

        <div className="nonla-card-strong p-6 md:p-8 overflow-hidden">
          <CoffeeLeaf className="absolute -left-8 top-8 opacity-25" />
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#FFD84D] font-bold mb-3">
                Market opportunity flow
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                From growing coffee demand to a clear gifting white space
              </h3>
            </div>
            <MiniNonlaPack label="Gift" />
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="hidden md:block absolute left-[10%] right-[10%] top-8 h-1 rounded-full bg-gradient-to-r from-[#FFD84D] via-white/25 to-[#FFD84D]" />
            {flow.map((step, index) => (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="relative rounded-2xl border border-white/12 bg-white/[0.07] p-5"
              >
                <div className="relative z-10 w-12 h-12 rounded-full bg-[#FFD84D] text-[#0A1628] font-black flex items-center justify-center mb-5 shadow-lg shadow-[#F4B400]/20">
                  {index + 1}
                </div>
                <h4 className="text-white font-bold text-lg">{step.title}</h4>
                <p className="text-white/72 text-sm leading-relaxed mt-2">{step.body}</p>
              </motion.article>
            ))}
          </div>
        </div>

        <p className="text-xs text-white/52 mt-8">
          Data sources: Statista, Vietnam Coffee Association, Mordor
          Intelligence, Shopee Analytics, Vietnam Customs.
        </p>
      </div>
    </SectionWrapper>
  );
}

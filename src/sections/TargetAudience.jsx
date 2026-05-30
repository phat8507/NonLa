import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { CoffeeBean, CoffeeLeaf, MiniNonlaPack } from '../components/BrandDecor';

const tiers = [
  {
    id: 'primary',
    label: 'PRIMARY',
    title: 'Corporate Premium Tet Gift Buyers',
    role: 'Growth engine — 75% of 12B target',
    details: [
      ['Demographics', 'HR / Admin / SME Owners | Age 28-45 | HCMC + Hanoi'],
      ['Purchase', '50-200 sets per order | AOV: ~30M VND/order'],
      ['Why Primary', 'Occasion clear + budget concentrated + high volume + repeat annually'],
      ['Data', '13T VND Tet FMCG | gift sets 300k-2M VND | 1-5M per adult'],
    ],
  },
  {
    id: 'secondary',
    label: 'SECONDARY',
    title: 'Urban Cultural Gifters',
    role: 'Brand equity builder + UGC + social proof for corporate',
    details: [
      ['Demographics', 'Age 25-40 | Online-savvy | Values aesthetics + brand story'],
      ['Purchase', 'Individual sets 200k-500k'],
      ['Data', 'Shopee gift set 33.4B VND | personalized gifts CAGR 12.1%'],
    ],
  },
  {
    id: 'tertiary',
    label: 'TERTIARY',
    title: 'Vietnam Souvenir & Overseas Gifters',
    role: 'Long-term expansion after domestic brand proof',
    details: [
      ['Demographics', 'Tourists + Việt Kiều | Needs: compact, no equipment, cultural signal'],
      ['Role', 'Seed awareness now, scale export after domestic proof'],
    ],
  },
];

const rationaleItems = [
  {
    question: 'Why Corporate first?',
    answer:
      'Corporate buyers bring concentrated volume during a clear seasonal occasion. Large budgets, high AOV, built-in repeat cycles, and corporate logos on gift sets create credibility across offices and partner networks.',
  },
  {
    question: 'Why Urban second?',
    answer:
      'Urban cultural gifters create social proof through unboxing stories and word-of-mouth, making the brand easier for corporate buyers to justify at premium prices.',
  },
  {
    question: 'Why Overseas third?',
    answer:
      'International distribution is operationally complex. NONLA should seed awareness with Việt Kiều and tourist buyers now, then scale once domestic brand proof is stronger.',
  },
];

export default function TargetAudience() {
  const [activeTier, setActiveTier] = useState('primary');
  const [openRationale, setOpenRationale] = useState(0);

  return (
    <SectionWrapper id="target" bgText="TARGET" decor="light">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-[#FFD84D] font-bold mb-4">
            Target
          </p>
          <h2 className="nonla-section-title text-4xl md:text-5xl">
            Target Audience
          </h2>
          <p className="mt-5 text-white/76 text-lg leading-relaxed">
            A priority stack concentrates growth on the highest-value buyer
            first, then lets brand momentum cascade into cultural and overseas
            gifting.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="nonla-card-strong p-5 md:p-6 overflow-hidden">
            <CoffeeLeaf className="absolute right-4 top-5 opacity-25 scale-75" />
            <div className="relative space-y-4">
              {tiers.map((tier, index) => (
                <button
                  key={tier.id}
                  type="button"
                  onClick={() => setActiveTier(tier.id)}
                  className={`w-full rounded-3xl border p-5 text-left transition duration-200 ${
                    activeTier === tier.id
                      ? 'border-[#FFD84D] bg-[#FFD84D] text-[#0A1628] shadow-xl shadow-[#F4B400]/20'
                      : 'border-white/12 bg-white/[0.07] text-white hover:border-[#FFD84D]/45'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className={`text-xs font-black uppercase tracking-widest ${activeTier === tier.id ? 'text-[#0A1628]/62' : 'text-[#FFD84D]'}`}>
                        {tier.label}
                      </p>
                      <h3 className="mt-2 text-xl font-black leading-tight">{tier.title}</h3>
                    </div>
                    <span className="text-2xl font-black">{index + 1}</span>
                  </div>
                  <p className={`mt-3 text-sm leading-relaxed ${activeTier === tier.id ? 'text-[#0A1628]/72' : 'text-white/70'}`}>
                    {tier.role}
                  </p>
                </button>
              ))}
            </div>
          </div>

          <div className="nonla-panel p-6 md:p-8">
            <AnimatePresence mode="wait">
              {tiers
                .filter((tier) => tier.id === activeTier)
                .map((tier) => (
                  <motion.div
                    key={tier.id}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <p className="text-xs uppercase tracking-widest text-[#FFD84D] font-black">
                          Active priority
                        </p>
                        <h3 className="mt-3 text-2xl md:text-3xl font-black text-white">
                          {tier.title}
                        </h3>
                      </div>
                      <MiniNonlaPack label="Gift" />
                    </div>

                    <div className="mt-7 grid grid-cols-1 gap-3">
                      {tier.details.map(([label, value]) => (
                        <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                          <p className="text-[10px] uppercase tracking-widest text-[#FFD84D] font-black">
                            {label}
                          </p>
                          <p className="mt-2 text-sm leading-relaxed text-white/80">{value}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {rationaleItems.map((item, index) => (
            <article key={item.question} className="nonla-card p-5">
              <button
                type="button"
                onClick={() => setOpenRationale(openRationale === index ? -1 : index)}
                className="flex w-full items-center justify-between gap-4 text-left"
              >
                <span className="text-lg font-black text-white">{item.question}</span>
                <span className="text-[#FFD84D] text-2xl font-black">{openRationale === index ? '−' : '+'}</span>
              </button>
              <AnimatePresence initial={false}>
                {openRationale === index && (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="mt-4 overflow-hidden text-sm leading-relaxed text-white/72"
                  >
                    {item.answer}
                  </motion.p>
                )}
              </AnimatePresence>
              <CoffeeBean className="absolute right-4 bottom-4 opacity-20" />
            </article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

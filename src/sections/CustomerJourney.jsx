import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { CoffeeBean, MiniNonlaPack } from '../components/BrandDecor';

const stages = [
  {
    title: 'Trigger',
    thought: 'Need a Tet gift that feels presentable',
    barrier: 'Too many safe but generic options.',
    opportunity: 'Make NONLA feel ready for business and family gifting.',
  },
  {
    title: 'Search',
    thought: 'Looks for Vietnamese coffee / premium gift options',
    barrier: 'Search results split between instant coffee and hampers.',
    opportunity: 'Own the “Vietnamese coffee gift” language.',
  },
  {
    title: 'Compare',
    thought: 'Checks packaging, brand trust, price, delivery',
    barrier: 'Unknown brands need stronger visual proof.',
    opportunity: 'Use pack, flavor, and origin cues as trust builders.',
  },
  {
    title: 'Hesitate',
    thought: 'Worries unknown brand may look cheap',
    barrier: 'Convenience can reduce perceived gift value.',
    opportunity: 'Present convenience as a refined coffee ritual.',
  },
  {
    title: 'Decide',
    thought: 'Chooses gift that balances culture, taste, and face-saving',
    barrier: 'Needs assurance before bulk or important purchase.',
    opportunity: 'Show sample kits, reviews, and premium pack tiers.',
  },
  {
    title: 'Share / Repeat',
    thought: 'Recipient response becomes proof for future gifting',
    barrier: 'No follow-up means proof disappears after Tet.',
    opportunity: 'Turn reactions into CRM, referral, and next-year demand.',
  },
];

export default function CustomerJourney() {
  const [activeStage, setActiveStage] = useState(0);
  const active = stages[activeStage];

  return (
    <SectionWrapper id="journey" bgText="JOURNEY" decor="light">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-[#FFD84D] font-bold mb-4">
            Journey
          </p>
          <h2 className="nonla-section-title text-4xl md:text-5xl">
            Customer Journey
          </h2>
          <p className="mt-5 text-white/76 text-lg leading-relaxed">
            The buyer journey is a confidence timeline: every touchpoint must
            prove NONLA is practical enough to buy and premium enough to give.
          </p>
        </div>

        <div className="nonla-card-strong p-5 md:p-8 overflow-hidden">
          <div className="hidden lg:block absolute left-10 right-10 top-[6.9rem] h-1 rounded-full bg-[#FFD84D]/34" />
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-6">
            {stages.map((stage, index) => (
              <button
                key={stage.title}
                type="button"
                onClick={() => setActiveStage(index)}
                className={`relative rounded-3xl border p-4 text-left transition duration-200 ${
                  activeStage === index
                    ? 'border-[#FFD84D] bg-[#FFD84D] text-[#0A1628] shadow-xl shadow-[#F4B400]/20'
                    : 'border-white/12 bg-white/[0.07] text-white hover:border-[#FFD84D]/42'
                }`}
              >
                <span className={`inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-black ${
                  activeStage === index ? 'bg-[#0A1628] text-[#FFD84D]' : 'bg-[#FFD84D] text-[#0A1628]'
                }`}>
                  {index + 1}
                </span>
                <h3 className="mt-4 text-lg font-black">{stage.title}</h3>
                <p className={`mt-2 text-sm leading-relaxed ${activeStage === index ? 'text-[#0A1628]/72' : 'text-white/68'}`}>
                  {stage.thought}
                </p>
              </button>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-[1fr_0.34fr]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.title}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.25 }}
                className="nonla-panel p-5 md:p-6"
              >
                <p className="text-xs uppercase tracking-widest text-[#FFD84D] font-black">
                  Active stage
                </p>
                <h3 className="mt-3 text-2xl font-black text-white">{active.title}</h3>
                <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
                  {[
                    ['Shopper thought', active.thought],
                    ['Barrier', active.barrier],
                    ['NONLA opportunity', active.opportunity],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                      <p className="text-[10px] uppercase tracking-widest text-[#FFD84D] font-black">{label}</p>
                      <p className="mt-2 text-sm leading-relaxed text-white/78">{value}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="nonla-panel flex items-center justify-between gap-5 p-5 lg:flex-col lg:items-start">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#FFD84D] font-black">
                  Journey implication
                </p>
                <p className="mt-3 text-lg font-bold leading-relaxed text-white">
                  Trust must be visible before trial.
                </p>
              </div>
              <MiniNonlaPack label="Trust" />
            </div>
          </div>

          <CoffeeBean className="absolute right-8 bottom-8 opacity-25" />
        </div>
      </div>
    </SectionWrapper>
  );
}

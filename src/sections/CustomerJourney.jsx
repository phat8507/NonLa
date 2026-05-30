import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { CoffeeBean, MiniNonlaPack } from '../components/BrandDecor';

const stages = [
  {
    title: 'Trigger',
    icon: '△',
    thought: 'Need a Tet gift that feels presentable',
    barrier: 'Too many safe but generic options.',
    opportunity: 'Make NONLA feel ready for business and family gifting.',
  },
  {
    title: 'Search',
    icon: '⌕',
    thought: 'Looks for Vietnamese coffee / premium gift options',
    barrier: 'Search results split between instant coffee and hampers.',
    opportunity: 'Own the “Vietnamese coffee gift” language.',
  },
  {
    title: 'Compare',
    icon: '▦',
    thought: 'Checks packaging, brand trust, price, delivery',
    barrier: 'Unknown brands need stronger visual proof.',
    opportunity: 'Use pack, flavor, and origin cues as trust builders.',
  },
  {
    title: 'Hesitate',
    icon: '!',
    thought: 'Worries unknown brand may look cheap',
    barrier: 'Convenience can reduce perceived gift value.',
    opportunity: 'Present convenience as a refined coffee ritual.',
  },
  {
    title: 'Decide',
    icon: '✓',
    thought: 'Chooses gift that balances culture, taste, and face-saving',
    barrier: 'Needs assurance before bulk or important purchase.',
    opportunity: 'Show sample kits, reviews, and premium pack tiers.',
  },
  {
    title: 'Share / Repeat',
    icon: '↻',
    thought: 'Recipient response becomes proof for future gifting',
    barrier: 'No follow-up means proof disappears after Tet.',
    opportunity: 'Turn reactions into CRM, referral, and next-year demand.',
  },
];

export default function CustomerJourney() {
  return (
    <SectionWrapper id="journey" bgText="JOURNEY">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-[#FFD84D] font-bold mb-4">
            Journey
          </p>
          <h2 className="nonla-section-title text-4xl md:text-5xl">
            Customer Journey
          </h2>
          <p className="text-white/74 text-lg md:text-xl mt-5 leading-relaxed">
            The buyer journey is a confidence journey: every touchpoint must
            prove that NONLA is practical enough to buy and premium enough to
            give.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-[7%] right-[7%] top-[4.1rem] h-1 rounded-full bg-gradient-to-r from-[#FFD84D] via-white/18 to-[#FFD84D]" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5">
            {stages.map((stage, index) => (
              <motion.article
                key={stage.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="nonla-card p-5 md:p-6 overflow-hidden"
              >
                <div className="relative z-10 w-14 h-14 rounded-full bg-[#FFD84D] text-[#0A1628] font-black flex items-center justify-center text-xl mb-5 shadow-lg shadow-[#F4B400]/20">
                  {stage.icon}
                </div>
                <p className="text-xs text-[#FFD84D] font-black mb-2">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="text-white font-black text-xl mb-4">{stage.title}</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/46 font-bold mb-1">
                      Shopper thought
                    </p>
                    <p className="text-white/86 text-sm leading-relaxed">{stage.thought}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/46 font-bold mb-1">
                      Barrier
                    </p>
                    <p className="text-white/68 text-sm leading-relaxed">{stage.barrier}</p>
                  </div>
                  <div className="rounded-xl border border-[#FFD84D]/20 bg-[#FFD84D]/10 p-3">
                    <p className="text-[10px] uppercase tracking-widest text-[#FFD84D] font-bold mb-1">
                      NONLA opportunity
                    </p>
                    <p className="text-white/86 text-sm leading-relaxed">{stage.opportunity}</p>
                  </div>
                </div>
                {index % 2 === 0 ? (
                  <CoffeeBean className="absolute right-4 bottom-4 opacity-20" />
                ) : (
                  <span className="absolute right-4 bottom-4 mini-pack-fallback opacity-20" aria-hidden="true">
                    gift
                  </span>
                )}
              </motion.article>
            ))}
          </div>
        </div>

        <div className="nonla-card-strong p-6 md:p-8 mt-8 flex flex-col md:flex-row md:items-center gap-6 justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#FFD84D] font-bold mb-3">
              Journey implication
            </p>
            <p className="text-white text-xl md:text-2xl font-bold leading-relaxed">
              NONLA must make trust visible before trial, because gifting buyers
              are buying social confidence as much as coffee.
            </p>
          </div>
          <MiniNonlaPack label="Trust" />
        </div>
      </div>
    </SectionWrapper>
  );
}

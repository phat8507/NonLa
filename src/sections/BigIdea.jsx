import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { MiniNonlaPack, NonLaDivider } from '../components/BrandDecor';

const territories = [
  {
    id: 1,
    title: 'Mở hộp, mở vị',
    subtitle: 'Product unboxing',
    funnel: 'TOFU',
    detail: 'Focus on product discovery, first taste experience, and shareable unboxing content.',
  },
  {
    id: 2,
    title: 'Mở lòng Tết này',
    subtitle: 'Emotional gifting',
    funnel: 'MOFU',
    detail: 'Connect Tet generosity with a gift that feels Vietnamese, polished, and easy to give.',
  },
  {
    id: 3,
    title: 'Dấu ấn doanh nghiệp',
    subtitle: 'B2B corporate',
    funnel: 'BOFU',
    detail: 'Make corporate gifting feel thoughtful through customization, cultural story, and premium ritual.',
  },
  {
    id: 4,
    title: 'Việt Nam trong tay bạn',
    subtitle: 'Overseas gifting',
    funnel: 'Long-term',
    detail: 'Extend NONLA as a compact Vietnamese coffee souvenir for diaspora and travel gifting.',
  },
];

const pillars = [
  ['Công nghệ', 'Freeze-drying protects flavor.'],
  ['Thiết kế', 'The pod and pack protect the coffee ritual.'],
  ['Thể diện', 'The gift protects the giver’s image.'],
];

export default function BigIdea() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <SectionWrapper id="big-idea" bgColor="#0A1628" bgText="BIG IDEA" className="p-0">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative flex flex-col justify-center overflow-hidden px-6 py-20 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="relative z-10"
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#FFD84D]">
              Big Idea
            </p>
            <h2 className="max-w-xl text-4xl font-black leading-[0.98] text-white md:text-6xl lg:text-7xl">
              Trọn tinh túy Việt
              <span className="block text-[#F4B400]">dưới bóng nón</span>
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/74">
              NONLA turns instant coffee from a convenience format into a premium Vietnamese
              gifting ritual: protected by technology, design, and cultural meaning.
            </p>
            <div className="mt-8">
              <NonLaDivider />
            </div>
          </motion.div>

          <motion.div
            aria-hidden="true"
            animate={{ y: [0, -14, 0], rotate: [-2, 2, -2] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="relative z-10 mx-auto mt-12 h-56 w-56"
          >
            <div className="absolute inset-0 non-la bg-gradient-to-b from-[#FFD84D] to-[#F4B400] shadow-[0_0_80px_rgba(244,180,0,0.32)]" />
            <MiniNonlaPack label="Gift" className="absolute left-1/2 top-1/2 w-20 -translate-x-1/2 -translate-y-1/3" />
          </motion.div>
        </div>

        <div className="relative flex flex-col justify-center bg-gradient-to-br from-[#0033CC]/92 to-[#1238F5]/78 px-6 py-16 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="relative z-10"
          >
            <div className="glass-card p-6 md:p-8">
              <h3 className="mb-6 border-b border-white/15 pb-4 text-center text-2xl font-bold text-white">
                “Che chở” as a Brand Metaphor
              </h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {pillars.map(([title, copy]) => (
                  <div key={title} className="rounded-lg border border-white/10 bg-white/7 p-4 text-center">
                    <div className="mx-auto mb-3 h-9 w-9 non-la bg-[#F4B400]" aria-hidden="true" />
                    <h4 className="font-bold text-[#FFD84D]">{title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-white/76">{copy}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-lg border border-[#F4B400]/30 bg-[#F4B400]/10 p-5">
              <p className="text-sm leading-relaxed text-white/84">
                Competitors often use the nón lá as decoration. NONLA uses it as meaning:
                a shelter for flavor, identity, and the giver’s face.
              </p>
            </div>

            <div className="mt-10">
              <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-white/62">
                Campaign Territories
              </h4>
              <div className="grid grid-cols-1 gap-3">
                {territories.map((territory) => (
                  <button
                    key={territory.id}
                    type="button"
                    className={`glass-card w-full cursor-pointer p-4 text-left transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10 ${
                      activeCard === territory.id ? 'border-t-4 border-t-[#F4B400] bg-white/10' : ''
                    }`}
                    onClick={() => setActiveCard(activeCard === territory.id ? null : territory.id)}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <span className="mr-2 text-xs font-bold text-[#F4B400]">0{territory.id}</span>
                        <span className="font-bold text-white">{territory.title}</span>
                      </div>
                      <span className="rounded-full bg-white/10 px-2 py-1 text-xs text-white/72">
                        {territory.funnel}
                      </span>
                    </div>
                    <AnimatePresence>
                      {activeCard === territory.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="mt-3 border-t border-white/10 pt-3 text-sm leading-relaxed text-white/78">
                            {territory.detail}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}

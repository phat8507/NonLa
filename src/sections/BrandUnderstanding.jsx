import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { CoffeeBean, CoffeeLeaf, MiniNonlaPack, NonLaDivider } from '../components/BrandDecor';

const truths = [
  {
    title: 'Freeze-dried coffee',
    body: 'Fast preparation with a stronger premium cue than standard instant coffee.',
    pack: 'Americano',
  },
  {
    title: 'Convenient ritual',
    body: 'A compact format that still feels intentional when brewed or gifted.',
    pack: 'Da Lat',
  },
  {
    title: 'Premium giftable pack',
    body: 'Packaging carries the social signal before the product is tasted.',
    pack: 'Giftbox',
  },
];

const assets = ['Nón lá', 'Vietnamese flavors', 'Compact gift pack', 'Cultural identity'];

function BrandReframeDiagram() {
  return (
    <div className="nonla-card-strong p-6 md:p-8 overflow-hidden relative">
      <div className="absolute right-5 bottom-4 opacity-30">
        <MiniNonlaPack label="NONLA" />
      </div>
      <p className="text-xs uppercase tracking-widest text-[#FFD84D] font-bold mb-6">
        Brand Reframe Diagram
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr_1fr] gap-6 items-center relative z-10 select-none">
        
        {/* From Side */}
        <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-5">
          <p className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-2">From Segment</p>
          <h4 className="text-2xl font-black text-white/90">Instant coffee</h4>
          <p className="text-white/60 text-xs mt-3 leading-relaxed">
            Perceived as purely practical, quick, transactional, and easy to dismiss as a cheap gift.
          </p>
        </div>

        {/* Central Proof Bridge */}
        <div className="flex flex-col gap-3 relative py-4 lg:py-0">
          {/* SVG Connector Lines */}
          <div className="absolute inset-0 pointer-events-none hidden lg:block">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M 0 50 Q 25 20 50 20" fill="none" stroke="rgba(255, 216, 77, 0.2)" strokeWidth="1" />
              <path d="M 0 50 Q 25 50 50 50" fill="none" stroke="rgba(255, 216, 77, 0.2)" strokeWidth="1" />
              <path d="M 0 50 Q 25 80 50 80" fill="none" stroke="rgba(255, 216, 77, 0.2)" strokeWidth="1" />
              <path d="M 50 20 Q 75 20 100 50" fill="none" stroke="#FFD84D" strokeWidth="1.5" />
              <path d="M 50 50 Q 75 50 100 50" fill="none" stroke="#FFD84D" strokeWidth="1.5" />
              <path d="M 50 80 Q 75 80 100 50" fill="none" stroke="#FFD84D" strokeWidth="1.5" />
            </svg>
          </div>

          <div className="text-center text-[10px] font-black uppercase text-[#FFD84D] tracking-widest mb-1 relative z-10">
            Transformation Proof Points
          </div>
          
          <div className="rounded-xl bg-white/[0.06] border border-white/10 p-3 flex items-center gap-3 relative z-10 hover:border-[#FFD84D]/30 transition-colors">
            <span className="w-5 h-5 rounded-full bg-[#1A4DFF] text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0">1</span>
            <div className="text-left">
              <span className="text-white text-xs font-bold block">Premium Freeze-Dried Format</span>
              <span className="text-white/60 text-[10px]">High fidelity taste, locking in pure coffee aroma.</span>
            </div>
          </div>

          <div className="rounded-xl bg-[#1A4DFF]/15 border border-[#1A4DFF]/30 p-3 flex items-center gap-3 relative z-10 hover:border-[#FFD84D]/30 transition-colors">
            <span className="w-5 h-5 rounded-full bg-[#1A4DFF] text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0">2</span>
            <div className="text-left">
              <span className="text-white text-xs font-bold block">Robusta Buôn Ma Thuột</span>
              <span className="text-white/60 text-[10px]">Pure Vietnamese origin story, rich and authentic.</span>
            </div>
          </div>

          <div className="rounded-xl bg-white/[0.06] border border-white/10 p-3 flex items-center gap-3 relative z-10 hover:border-[#FFD84D]/30 transition-colors">
            <span className="w-5 h-5 rounded-full bg-[#1A4DFF] text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0">3</span>
            <div className="text-left">
              <span className="text-white text-xs font-bold block">Nón Lá Gifting Design</span>
              <span className="text-white/60 text-[10px]">Iconic design language conveying respect and status.</span>
            </div>
          </div>
        </div>

        {/* To Side */}
        <div className="rounded-2xl bg-[#FFD84D] text-[#0A1628] p-5 shadow-xl shadow-[#F4B400]/20 hover:scale-[1.02] transition-transform">
          <p className="text-[#0A1628]/60 text-[10px] font-black uppercase tracking-widest mb-2">To Strategic Reframe</p>
          <h4 className="text-2xl font-black">Vietnamese coffee gift ritual</h4>
          <p className="text-[#0A1628]/80 text-xs mt-3 leading-relaxed">
            Owns high cultural relevance, acts as a presentable social signal, and serves as a highly gift-ready Tet item.
          </p>
        </div>

      </div>
    </div>
  );
}

export default function BrandUnderstanding() {
  return (
    <SectionWrapper id="brand" bgText="BRAND">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-[#FFD84D] font-bold mb-4">
            Brand
          </p>
          <h2 className="nonla-section-title text-4xl md:text-5xl">
            Brand Understanding
          </h2>
          <p className="text-white/74 text-lg md:text-xl mt-5 leading-relaxed">
            NONLA wins when the product is framed as a Vietnamese gift ritual,
            not another instant coffee option.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-6 md:gap-8">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="nonla-card-strong p-7 md:p-9 overflow-hidden"
          >
            <CoffeeLeaf className="absolute right-4 top-4 opacity-25" />
            <p className="text-xs uppercase tracking-widest text-[#FFD84D] font-bold mb-5">
              Brand role
            </p>
            <h3 className="text-3xl md:text-4xl text-white font-black leading-tight">
              Not just coffee — a Vietnamese gifting ritual.
            </h3>
            <p className="text-white/74 leading-relaxed mt-5">
              The nón lá is not decoration. It turns coffee into a culturally
              recognizable object that can carry respect, taste, and origin.
            </p>
            <NonLaDivider className="mt-8" />
          </motion.article>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {truths.map((truth, index) => (
              <motion.article
                key={truth.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="nonla-card p-6"
              >
                <div className="mb-5 w-20">
                  <MiniNonlaPack label={truth.pack} />
                </div>
                <h4 className="text-white text-lg font-bold">{truth.title}</h4>
                <p className="text-white/72 text-sm leading-relaxed mt-3">{truth.body}</p>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-6 md:gap-8 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="nonla-panel p-6 md:p-8"
          >
            <p className="text-xs uppercase tracking-widest text-[#FFD84D] font-bold mb-5">
              Brand assets
            </p>
            <div className="grid grid-cols-2 gap-3">
              {assets.map((asset) => (
                <div key={asset} className="rounded-2xl border border-white/12 bg-white/[0.07] p-4">
                  <CoffeeBean className="relative inline-block opacity-70 scale-75 mr-3" />
                  <span className="text-white font-bold text-sm">{asset}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="w-full"
          >
            <BrandReframeDiagram />
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}

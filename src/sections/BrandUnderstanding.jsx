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
      <p className="text-xs uppercase tracking-widest text-[#FFD84D] font-bold mb-6 text-center lg:text-left">
        Brand Reframe Diagram
      </p>

      {/* Grid container with 5 columns on desktop, 1 column on mobile/tablet */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1.4fr_auto_1fr] gap-4 lg:gap-5 items-center relative z-10 select-none">
        
        {/* LEFT: From Segment */}
        <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-5 h-full flex flex-col justify-center">
          <p className="text-[#8A9BB5] text-[10px] font-black uppercase tracking-widest mb-2">From Segment</p>
          <h4 className="text-xl md:text-2xl font-black text-white leading-tight">Instant coffee</h4>
          <p className="text-white/70 text-xs mt-3 leading-relaxed">
            Perceived as practical, quick, transactional, and easy to dismiss as a cheap gift.
          </p>
        </div>

        {/* CONNECTOR 1: Left -> Center */}
        <div className="flex items-center justify-center lg:px-2">
          {/* Desktop Arrow */}
          <div className="hidden lg:flex items-center justify-center">
            <svg className="w-6 h-6 text-[#FFD84D]/60 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
          {/* Mobile Arrow */}
          <div className="flex lg:hidden items-center justify-center my-1">
            <svg className="w-5 h-5 text-[#FFD84D]/60 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>

        {/* CENTER: Transformation Proof Points */}
        <div className="flex flex-col gap-3.5 h-full justify-between">
          <div className="text-center text-[10px] font-black uppercase text-[#FFD84D] tracking-widest mb-1">
            Transformation Proof Points
          </div>
          
          {/* Proof 1 */}
          <div className="rounded-xl bg-white/[0.04] border border-white/10 p-3.5 flex items-start gap-3 hover:border-[#FFD84D]/30 transition-colors">
            <span className="w-5 h-5 rounded-full bg-[#1A4DFF] text-white text-[10px] font-black flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
            <div className="text-left">
              <span className="text-white text-xs font-bold block leading-tight">Premium freeze-dried format</span>
              <span className="text-white/60 text-[10px] mt-1 block leading-normal">High-fidelity taste, locking in pure coffee aroma.</span>
            </div>
          </div>

          {/* Proof 2 */}
          <div className="rounded-xl bg-white/[0.04] border border-white/10 p-3.5 flex items-start gap-3 hover:border-[#FFD84D]/30 transition-colors">
            <span className="w-5 h-5 rounded-full bg-[#1A4DFF] text-white text-[10px] font-black flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
            <div className="text-left">
              <span className="text-white text-xs font-bold block leading-tight">Robusta Buôn Ma Thuột</span>
              <span className="text-white/60 text-[10px] mt-1 block leading-normal">Pure Vietnamese origin story, rich and authentic.</span>
            </div>
          </div>

          {/* Proof 3 */}
          <div className="rounded-xl bg-white/[0.04] border border-white/10 p-3.5 flex items-start gap-3 hover:border-[#FFD84D]/30 transition-colors">
            <span className="w-5 h-5 rounded-full bg-[#1A4DFF] text-white text-[10px] font-black flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
            <div className="text-left">
              <span className="text-white text-xs font-bold block leading-tight">Nón lá gifting design</span>
              <span className="text-white/60 text-[10px] mt-1 block leading-normal">Iconic design language conveying respect and status.</span>
            </div>
          </div>
        </div>

        {/* CONNECTOR 2: Center -> Right */}
        <div className="flex items-center justify-center lg:px-2">
          {/* Desktop Arrow */}
          <div className="hidden lg:flex items-center justify-center">
            <svg className="w-6 h-6 text-[#FFD84D]/60 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
          {/* Mobile Arrow */}
          <div className="flex lg:hidden items-center justify-center my-1">
            <svg className="w-5 h-5 text-[#FFD84D]/60 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>

        {/* RIGHT: Strategic Reframe */}
        <div className="rounded-2xl bg-[#FFD84D]/10 border border-[#FFD84D]/35 p-5 h-full flex flex-col justify-center shadow-lg shadow-[#F4B400]/5 hover:scale-[1.02] transition-transform">
          <p className="text-[#FFD84D] text-[10px] font-black uppercase tracking-widest mb-2">Strategic Reframe</p>
          <h4 className="text-xl md:text-2xl font-black text-[#FFD84D] leading-tight">Vietnamese coffee gift ritual</h4>
          <p className="text-white/80 text-xs mt-3 leading-relaxed">
            Owns high cultural relevance, acts as a presentable social signal, and serves as a gift-ready Tết item.
          </p>
        </div>

      </div>

      {/* Centered strategically aligned caption */}
      <div className="relative z-10 mt-6 pt-4 border-t border-white/10">
        <p className="text-[11px] text-white/50 text-center italic leading-relaxed">
          “The strategic shift is not from low to high price; it is from functional convenience to gift-worthy cultural meaning.”
        </p>
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

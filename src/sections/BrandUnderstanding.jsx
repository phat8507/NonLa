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
            className="nonla-card-strong p-6 md:p-8 overflow-hidden"
          >
            <div className="absolute right-5 bottom-4 opacity-80">
              <MiniNonlaPack label="NONLA" />
            </div>
            <p className="text-xs uppercase tracking-widest text-[#FFD84D] font-bold mb-6">
              Strategic reframe
            </p>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-5 md:items-center">
              <div className="rounded-2xl bg-white/[0.07] border border-white/12 p-5">
                <p className="text-white/54 text-sm font-bold uppercase tracking-widest mb-3">
                  From
                </p>
                <h4 className="text-2xl font-black text-white">Instant coffee</h4>
                <p className="text-white/64 text-sm mt-3">Practical, quick, easy to dismiss.</p>
              </div>
              <div className="text-[#FFD84D] text-3xl font-black text-center">→</div>
              <div className="rounded-2xl bg-[#FFD84D] text-[#0A1628] p-5 shadow-xl shadow-[#F4B400]/20">
                <p className="text-[#0A1628]/60 text-sm font-black uppercase tracking-widest mb-3">
                  To
                </p>
                <h4 className="text-2xl font-black">Vietnamese coffee gift ritual</h4>
                <p className="text-[#0A1628]/72 text-sm mt-3">
                  Cultural, presentable, and gift-ready.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}

import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import {
  CoffeeBean,
  CoffeeLeaf,
  MiniNonlaPack,
  NonLaDivider,
  NonlaMascotFallback,
} from '../components/BrandDecor';

const insightLayers = [
  {
    title: 'Vietnamese Identity',
    body: 'Desire for a convenient coffee gift with a strong Vietnamese cultural identity.',
    accent: '01',
  },
  {
    title: 'Convenience Format',
    body: 'Choosing instant/freeze-dried coffee solely for its modern convenience.',
    accent: '02',
  },
  {
    title: 'Premium Stigma Fear',
    body: 'Fear that standard convenient coffee formats may look insufficiently premium.',
    accent: '03',
  },
  {
    title: 'Image Protection',
    body: 'The critical need to protect and elevate the giver’s image in the recipient’s eyes.',
    accent: '04',
  },
];

const bridges = [
  {
    left: 'Convenient format',
    right: 'Premium signal',
    resolution: 'Freeze-dried, but framed as premium',
  },
  {
    left: 'Useful product',
    right: 'Gift-worthy packaging',
    resolution: 'Compact, but gift-ready',
  },
  {
    left: 'New discovery',
    right: 'Proven enough to trust',
    resolution: 'New, but backed by proof',
  },
];

export default function Insight() {
  return (
    <SectionWrapper id="insight" bgText="INSIGHT">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest text-[#FFD84D] font-bold mb-4">
            Insight
          </p>
          <h2 className="nonla-section-title text-4xl md:text-5xl">
            Customer Insight
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-6 md:gap-8 items-stretch">
          <motion.blockquote
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55 }}
            className="nonla-card-strong p-7 md:p-10 overflow-hidden"
          >
            <CoffeeLeaf className="absolute right-5 top-5 opacity-30 scale-75" />
            <p className="text-xs uppercase tracking-widest text-[#FFD84D] font-bold mb-5">
              Human tension
            </p>
            <p className="text-xl md:text-2xl leading-relaxed text-white font-semibold">
              “I want to give a convenient coffee gift with a strong Vietnamese identity, but I worry that convenience may make it look insufficiently premium to protect my image in the recipient’s eyes.”
            </p>
            <p className="mt-4 text-xs md:text-sm text-white/50 italic leading-relaxed border-t border-white/10 pt-4">
              Vietnamese: “Tôi không sợ tặng cà phê tiện lợi vì nó rẻ — tôi sợ tặng một thương hiệu mà người nhận chưa nghe tên, với bao bì không đủ nói lên sự trân trọng của tôi.”
            </p>
            <NonLaDivider className="mt-8" />
          </motion.blockquote>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="nonla-panel p-6 md:p-8 min-h-[360px] flex flex-col justify-between overflow-hidden relative"
          >
            <div className="absolute -right-3 -bottom-6 opacity-40 pointer-events-none select-none">
              <NonlaMascotFallback />
            </div>
            <div className="relative z-10">
              <h3 className="text-sm uppercase tracking-widest text-[#FFD84D] font-black mb-1">
                THE GIFT MUST BALANCE TWO JOBS
              </h3>
              <p className="text-xs text-white/76 mb-6 font-semibold">
                Practical enough to use. Premium enough to give.
              </p>
              <div className="space-y-6">
                {bridges.map((bridge, idx) => (
                  <div key={idx} className="relative">
                    <div className="flex justify-between items-center text-xs md:text-sm font-bold text-white px-1">
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FFD84D]" />
                        {bridge.left}
                      </span>
                      <span className="flex items-center gap-1.5 text-right">
                        {bridge.right}
                        <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
                      </span>
                    </div>

                    <div className="relative mt-3 mb-2 flex items-center justify-center">
                      <div className="absolute left-0 right-0 h-[1px] border-t border-dashed border-white/20 z-0"></div>
                      <div className="relative z-10 px-3.5 py-1 bg-[#FFD84D] text-[#0A192F] text-[10px] md:text-xs font-black rounded-full shadow-md text-center">
                        {bridge.resolution}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 mt-6 pt-4 border-t border-white/10">
              <p className="text-xs text-white/78 leading-relaxed italic mb-4">
                “The buyer is not rejecting convenience. They need convenience to be protected by presentation, proof, and cultural meaning.”
              </p>
              <div className="flex items-end gap-3 origin-bottom-left scale-[0.70] sm:scale-[0.80] md:scale-100 transition-all">
                <MiniNonlaPack label="Gift" />
                <MiniNonlaPack label="Egg Cream" src={['pack-egg-cream.png', 'pack-giftbox.png']} />
                <CoffeeBean className="relative opacity-70" />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
          {insightLayers.map((layer, index) => (
            <motion.article
              key={layer.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="nonla-card p-6 overflow-hidden"
            >
              <span className="text-[#FFD84D] text-sm font-black">{layer.accent}</span>
              <h3 className="mt-4 text-xl font-bold text-white">{layer.title}</h3>
              <p className="mt-3 text-white/78 text-sm leading-relaxed">{layer.body}</p>
              <span className="absolute right-4 bottom-4 mini-pack-fallback opacity-25" aria-hidden="true">
                nonla
              </span>
            </motion.article>
          ))}
        </div>

        <p className="text-xs text-white/52 mt-8">
          Insight reframes NONLA from convenient coffee into a presentable
          Vietnamese gifting ritual.
        </p>
      </div>
    </SectionWrapper>
  );
}

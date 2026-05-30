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
    title: 'Fear of looking cheap',
    body: 'Convenience is useful, but a gift must still protect the giver’s image.',
    accent: '01',
  },
  {
    title: 'Need for safe, presentable gifting',
    body: 'Packaging, brand cues, and ritual must make the choice feel socially safe.',
    accent: '02',
  },
  {
    title: 'Desire to show Vietnamese taste and thoughtfulness',
    body: 'The giver wants something local, refined, and clearly chosen with care.',
    accent: '03',
  },
];

const tensions = [
  ['Convenience', 'Prestige'],
  ['Practicality', 'Presentation'],
  ['Newness', 'Brand Trust'],
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
            <p className="text-2xl md:text-3xl leading-relaxed text-white font-semibold">
              “Tôi không sợ tặng cà phê tiện lợi vì nó rẻ — tôi sợ tặng một
              thương hiệu mà người nhận chưa nghe tên, với bao bì không đủ nói
              lên sự trân trọng của tôi.”
            </p>
            <NonLaDivider className="mt-8" />
          </motion.blockquote>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="nonla-panel p-6 md:p-8 min-h-[360px] flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute -right-3 -bottom-6 opacity-80">
              <NonlaMascotFallback />
            </div>
            <div className="relative z-10">
              <p className="text-xs uppercase tracking-widest text-[#FFD84D] font-bold mb-4">
                The gift has to do two jobs
              </p>
              <div className="space-y-4">
                {tensions.map(([left, right]) => (
                  <div key={left} className="rounded-2xl bg-white/[0.07] border border-white/10 p-4">
                    <div className="flex items-center justify-between gap-3 text-sm font-bold text-white">
                      <span>{left}</span>
                      <span className="text-[#FFD84D]">vs</span>
                      <span className="text-right">{right}</span>
                    </div>
                    <div className="mt-3 h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-[#FFD84D] to-[#F4B400]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative z-10 mt-8 flex items-end gap-3">
              <MiniNonlaPack label="Gift" />
              <MiniNonlaPack label="Tet" src={['nonla-pack-egg-cream.png', 'nonla-pack-egg-cream.webp']} />
              <CoffeeBean className="relative opacity-70" />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
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

import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { MiniNonlaPack, NonLaDivider, NonlaMascotFallback, CoffeeBean } from '../components/BrandDecor';
import BrandAsset from '../components/BrandAsset';

function NonlaWordmark() {
  return (
    <span className="inline-flex select-none items-end text-2xl font-black uppercase leading-none tracking-widest text-white">
      <span>NO</span>
      <span className="relative inline-flex flex-col items-center">
        <span
          className="block"
          style={{
            width: 0,
            height: 0,
            borderLeft: '7px solid transparent',
            borderRight: '7px solid transparent',
            borderBottom: '8px solid #F4B400',
            marginBottom: '2px',
          }}
          aria-hidden="true"
        />
        <span>N</span>
      </span>
      <span>LA</span>
    </span>
  );
}

const closingPoints = [
  'The category has no clear Tet coffee gift leader.',
  'NONLA has the product, the insight, and a distinctive campaign world.',
  'The perception shift: from convenient coffee to a Vietnamese gift ritual.',
];

const sources = [
  'Statista',
  'NIQ 2025',
  'Decision Lab',
  'Q&Me',
  'Kantar',
  'Meta',
  'YouNet Media',
  'Worldpanel',
];

export default function Closing() {
  return (
    <SectionWrapper id="closing" bgColor="#0A1628" className="min-h-screen pb-10 pt-24">
      <div className="relative z-10 mx-auto grid min-h-[calc(100svh-8rem)] max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_0.82fr]">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
        >
          <BrandAsset
            src={['nonla-logo.svg', 'nonla-logo.png', 'nonla-logo.webp']}
            alt="NONLA logo"
            className="mb-8 h-10 w-auto"
            fallback={<NonlaWordmark />}
          />
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#FFD84D]">
            Final Thought
          </p>
          <h2 className="max-w-3xl text-4xl font-black leading-[0.98] text-white md:text-6xl lg:text-7xl">
            Trọn tinh túy Việt
            <span className="block text-[#F4B400]">dưới bóng nón.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/74">
            A premium coffee gift can carry more than taste: it can carry face, memory,
            and a small ritual of Vietnam.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            {closingPoints.map((point, index) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="glass-card flex items-start gap-4 border-l-4 border-l-[#F4B400] p-5"
              >
                <span className="mt-1 text-[#F4B400]" aria-hidden="true">●</span>
                <p className="text-base font-semibold leading-relaxed text-white/88">{point}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10">
            <NonLaDivider />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 24 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className="relative mx-auto h-[520px] w-full max-w-md"
        >
          <div className="absolute inset-x-8 bottom-8 h-28 rounded-[50%] bg-[#F4B400]/20 blur-2xl" aria-hidden="true" />
          <div className="absolute left-2 top-10 w-32 rotate-[-8deg]">
            <MiniNonlaPack label="Durian" />
          </div>
          <div className="absolute right-0 top-28 w-28 rotate-[7deg]">
            <MiniNonlaPack label="Salt" src={['nonla-pack-salt.svg', 'nonla-pack-salt.png', 'nonla-pack-salt.webp']} />
          </div>
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2">
            <NonlaMascotFallback />
          </div>
          {Array.from({ length: 9 }, (_, index) => (
            <CoffeeBean
              key={index}
              className="closing-bean"
              style={{
                left: `${6 + index * 11}%`,
                bottom: `${index % 2 ? 18 : 0}px`,
                transform: `rotate(${index * 23}deg) scale(${0.58 + (index % 3) * 0.08})`,
              }}
            />
          ))}
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto mt-12 max-w-4xl text-center">
        <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white/46">
          Research Sources
        </h3>
        <div className="flex flex-wrap justify-center gap-2">
          {sources.map((source) => (
            <span key={source} className="rounded border border-white/10 bg-white/6 px-3 py-1 text-xs text-white/54">
              {source}
            </span>
          ))}
        </div>
        <p className="mt-8 text-xs text-white/38">
          © 2026 Team SHIFT — YFC Future Leaders Program
        </p>
      </div>
    </SectionWrapper>
  );
}

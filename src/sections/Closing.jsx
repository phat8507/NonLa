import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import {
  CoffeeBean,
  MiniNonlaPack,
  NonLaDivider,
  NonlaMascotFallback,
} from '../components/BrandDecor';
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

export default function Closing() {
  return (
    <SectionWrapper id="closing" className="min-h-screen" decor="medium">
      <div className="mx-auto grid min-h-[calc(100svh-7rem)] max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_0.82fr]">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
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
            <span className="block text-[#F4B400]">dưới bóng nón lá.</span>
          </h2>
          <p className="mt-2 text-xs md:text-sm font-bold text-[#FFD84D] tracking-wide mb-6">
            “The full essence of Vietnam, sheltered under the nón lá.”
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/76">
            NONLA turns Vietnamese coffee into a giftable cultural ritual — compact, premium, and protected under the nón lá.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4">
            {closingPoints.map((point, index) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="nonla-card flex items-start gap-4 border-l-4 border-l-[#F4B400] p-5"
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
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
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
    </SectionWrapper>
  );
}

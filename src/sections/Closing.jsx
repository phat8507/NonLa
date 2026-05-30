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
            src={[]}
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
            "The full essence of Vietnam, sheltered under the nón lá."
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/76">
            NONLA turns Vietnamese coffee into a giftable cultural ritual - compact, premium, and protected under the nón lá.
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
          className="relative mx-auto flex items-center justify-center w-full max-w-sm h-[480px] select-none"
        >
          {/* Soft Radial Glow */}
          <div className="absolute w-[280px] h-[280px] rounded-full bg-gradient-to-tr from-[#F4B400]/22 to-[#1A4DFF]/15 blur-3xl pointer-events-none z-0" aria-hidden="true" />
          
          {/* Beans Base Layer */}
          <BrandAsset
            src="coffee-beans-pile.png"
            decorative
            className="absolute bottom-4 w-72 h-auto z-10 opacity-55 pointer-events-none"
            fallback={null}
          />
          <div className="absolute bottom-6 w-80 h-10 bg-[#0A1628]/80 blur-md rounded-full z-0" aria-hidden="true" />

          {/* Leaves Framing */}
          <BrandAsset
            src="coffee-leaves.png"
            decorative
            className="absolute inset-0 w-full h-full z-10 opacity-20 pointer-events-none hidden md:block"
            fallback={null}
          />

          {/* Main Visual Anchor: Giftbox (Enlarged) */}
          <div className="relative z-20 w-80 max-w-[85vw] flex items-center justify-center">
            <BrandAsset
              src={['pack-giftbox.png', 'pack-giftbox.webp', 'pack-giftbox.svg']}
              alt="NONLA premium Tet coffee giftbox"
              className="w-full h-auto object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.45)] hover:scale-[1.03] transition-transform duration-300"
              fallback={
                <div className="product-pack-fallback flex flex-col justify-between p-6 text-center rounded-2xl border border-white/20 bg-gradient-to-b from-[#fff3ca] to-[#dfa94c] shadow-2xl relative" style={{ width: '220px', minHeight: '310px' }}>
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-14 h-4 bg-gradient-to-r from-[#f4b400] to-[#ff8a22] rounded-full opacity-80" />
                  <div className="mt-8 font-serif text-3xl font-black tracking-widest text-[#0A1628]">NONLA</div>
                  <div className="my-2 border-t border-[#6a3314]/30" />
                  <div className="text-xl font-black text-[#6a3314] uppercase tracking-wide">Premium Giftbox</div>
                  <div className="mt-auto h-24 rounded-b-xl bg-white/40 flex items-center justify-center text-[10px] font-bold text-[#6a3314]/70 leading-normal">
                    Che chở bản sắc,<br />thăng hoa ân tình
                  </div>
                </div>
              }
            />
          </div>

          {/* Mascot Sitting beside the Giftbox (Optional) */}
          <div className="absolute right-[-10px] md:right-[-20px] bottom-6 z-30 w-32 max-w-[32vw] pointer-events-none">
            <BrandAsset
              src={['mascot.png', 'mascot.webp']}
              alt="NONLA campaign mascot"
              className="w-full h-auto object-contain drop-shadow-md animate-float-slow"
              fallback={null}
            />
          </div>

          {/* Subtle Floating Coffee Beans */}
          {Array.from({ length: 5 }, (_, index) => (
            <CoffeeBean
              key={index}
              className="closing-bean opacity-60 hidden md:block"
              style={{
                left: `${10 + index * 20}%`,
                bottom: `${index % 2 ? 24 : 0}px`,
                transform: `rotate(${index * 35}deg) scale(${0.65 + (index % 3) * 0.08})`,
              }}
            />
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

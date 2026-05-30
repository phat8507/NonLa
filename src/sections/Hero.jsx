import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import BrandAsset from '../components/BrandAsset';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: 'easeOut' },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92, y: 18 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.75, ease: 'easeOut' },
  },
};

const heroSignals = [
  { label: '4B VND', detail: 'campaign budget' },
  { label: '12B VND', detail: 'revenue target' },
  { label: 'ROAS 3.0×', detail: 'performance goal' },
];

const miniPacks = [
  { src: 'nonla-pack-salt.png', label: 'Salt' },
  { src: 'nonla-pack-da-lat.png', label: 'Da Lat' },
];

function ProductFallback({ label = 'NONLA' }) {
  return (
    <div className="product-pack-fallback" aria-label={`NONLA ${label} coffee pack`}>
      <div className="product-pack-fallback__bow" aria-hidden="true" />
      <div className="product-pack-fallback__brand">nonla</div>
      <div className="product-pack-fallback__line" />
      <div className="product-pack-fallback__flavor">{label}</div>
      <div className="product-pack-fallback__window" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

function MascotFallback() {
  return (
    <div className="mascot-fallback" aria-label="NONLA mascot placeholder">
      <div className="mascot-fallback__hat" aria-hidden="true" />
      <div className="mascot-fallback__face">
        <span className="mascot-fallback__eye" />
        <span className="mascot-fallback__eye" />
        <span className="mascot-fallback__smile" />
      </div>
      <div className="mascot-fallback__body" aria-hidden="true" />
    </div>
  );
}

function CoffeeBean({ className = '', style }) {
  return <span className={`coffee-bean-rich ${className}`} style={style} aria-hidden="true" />;
}

function HeroVisual() {
  return (
    <div className="hero-visual-shell" aria-label="NONLA product visual system">
      <div className="coffee-leaf-layer coffee-leaf-layer--one" aria-hidden="true" />
      <div className="coffee-leaf-layer coffee-leaf-layer--two" aria-hidden="true" />

      <motion.div
        className="hero-mascot-card mascot-shadow"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity }}
      >
        <BrandAsset
          src="nonla-mascot.png"
          alt="NONLA mascot holding Vietnamese coffee"
          className="brand-asset hero-mascot-img"
          fallback={<MascotFallback />}
        />
      </motion.div>

      <motion.div
        className="hero-main-pack"
        initial={{ opacity: 0, x: 30, rotate: 4 }}
        animate={{ opacity: 1, x: 0, rotate: -2 }}
        transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
      >
        <BrandAsset
          src="nonla-pack-durian.png"
          alt="NONLA Durian Coffee gift pack"
          className="brand-asset hero-pack-img"
          fallback={<ProductFallback label="Durian Coffee" />}
        />
      </motion.div>

      {miniPacks.map((pack, index) => (
        <motion.div
          key={pack.label}
          className={`floating-brand-item floating-brand-item--${index + 1}`}
          animate={{ y: [0, -10, 0], rotate: index === 0 ? [-5, 2, -5] : [4, -3, 4] }}
          transition={{ duration: 5 + index, ease: 'easeInOut', repeat: Infinity }}
        >
          <BrandAsset
            src={pack.src}
            alt={`NONLA ${pack.label} coffee pack`}
            className="brand-asset mini-pack-img"
            fallback={<ProductFallback label={pack.label} />}
          />
        </motion.div>
      ))}

      <CoffeeBean className="hero-bean hero-bean--one" />
      <CoffeeBean className="hero-bean hero-bean--two" />
      <CoffeeBean className="hero-bean hero-bean--three" />
    </div>
  );
}

export default function Hero() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const scrollToOverview = () => {
    const el = document.getElementById('overview');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToBigIdea = () => {
    const el = document.getElementById('big-idea');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-[100svh] overflow-hidden bg-blue-primary pt-16"
    >
      <div className="hero-gradient" aria-hidden="true" />
      <div className="section-bg-text select-none" aria-hidden="true">
        NONLA
      </div>
      <div className="hero-bean-wave" aria-hidden="true">
        {Array.from({ length: 18 }, (_, index) => (
          <CoffeeBean
            key={index}
            style={{
              left: `${index * 6 - 4}%`,
              bottom: `${(index % 4) * 8}px`,
              transform: `rotate(${index * 17}deg) scale(${0.75 + (index % 5) * 0.08})`,
              animationDelay: `${index * 0.12}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-4rem)] w-full max-w-7xl items-center px-5 py-10 sm:px-6 md:px-10 lg:px-16">
        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.92fr)] lg:gap-14">
          <motion.div
            className="flex min-w-0 flex-col gap-5"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.p
              className="w-fit rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-white/72 backdrop-blur-md sm:text-xs"
              variants={fadeUp}
            >
              YFC Future Leaders · NONLA Campaign
            </motion.p>

            <motion.div variants={fadeUp}>
              <h1 className="max-w-[10ch] text-[3.25rem] font-black uppercase leading-[0.92] tracking-[-0.06em] text-white sm:text-7xl md:text-8xl xl:text-9xl">
                Mở ra
                <span className="block text-yellow">một Việt Nam</span>
              </h1>
            </motion.div>

            <motion.p
              className="max-w-2xl text-base leading-relaxed text-white/76 sm:text-lg md:text-xl"
              variants={fadeUp}
            >
              A premium Vietnamese freeze-dried coffee gift, opening culture through taste,
              design, and ritual.
            </motion.p>

            <motion.div
              className="flex flex-col gap-3 sm:flex-row sm:items-center"
              variants={fadeUp}
            >
              <button
                onClick={scrollToOverview}
                className="inline-flex items-center justify-center rounded-full bg-yellow px-7 py-3.5 text-sm font-black uppercase tracking-wide text-blue-dark shadow-xl shadow-yellow/20 transition duration-200 hover:-translate-y-0.5 hover:shadow-yellow/30 active:translate-y-0 sm:text-base"
              >
                Explore NONLA
              </button>
              <button
                onClick={scrollToBigIdea}
                className="inline-flex items-center justify-center rounded-full border border-white/18 bg-white/8 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white backdrop-blur-md transition duration-200 hover:bg-white/14 active:scale-[0.98] sm:text-base"
              >
                View the Case
              </button>
            </motion.div>

            <motion.div
              className="grid max-w-2xl grid-cols-1 gap-3 pt-2 sm:grid-cols-3"
              variants={fadeUp}
              aria-label="Campaign headline metrics"
            >
              {heroSignals.map((signal) => (
                <div key={signal.label} className="hero-signal-card">
                  <span>{signal.label}</span>
                  <small>{signal.detail}</small>
                </div>
              ))}
            </motion.div>

            <motion.p className="text-xs text-white/45" variants={fadeUp}>
              Asset-ready layout: add real mascot, pack, coffee bean, and logo images later in
              public/assets without changing the UI logic.
            </motion.p>
          </motion.div>

          <motion.div
            className="relative flex min-w-0 items-center justify-center"
            variants={scaleIn}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

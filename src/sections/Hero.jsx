import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import BrandAsset from '../components/BrandAsset';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.94, y: 18 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const heroSignals = [
  { label: '4B VND', detail: 'campaign budget' },
  { label: '12B VND', detail: 'revenue target' },
  { label: 'ROAS 3.0x', detail: 'performance goal' },
];

const assetCandidates = {
  mascot: ['mascot.png'],
  giftbox: ['pack-giftbox.png', 'pack-durian.png'],
  americano: ['pack-americano.png', 'pack-giftbox.png'],
  durian: ['pack-durian.png', 'pack-giftbox.png'],
  salt: ['pack-salt.png', 'pack-giftbox.png'],
  daLat: ['pack-da-lat.png', 'pack-giftbox.png'],
  eggCream: ['pack-egg-cream.png', 'pack-giftbox.png'],
  podYellow: ['pod-yellow.png'],
  podRed: ['pod-red.png'],
  podBlue: ['pod-blue.png'],
  beansCluster: ['coffee-beans-cluster.png'],
  beansPile: ['coffee-beans-pile.png', 'coffee-beans-cluster.png'],
  leaves: ['coffee-leaves.png'],
};

const miniPacks = [
  { src: assetCandidates.podYellow, label: 'Yellow pod' },
  { src: assetCandidates.podRed, label: 'Red pod' },
];

const flavorCollection = [
  {
    src: assetCandidates.durian,
    name: 'Durian Coffee',
    packLabel: 'Durian',
    copy: 'A bold tropical signature for curious gifting.',
  },
  {
    src: assetCandidates.salt,
    name: 'Salt Coffee',
    packLabel: 'Salt',
    copy: 'A creamy Vietnamese twist with a modern finish.',
  },
  {
    src: assetCandidates.daLat,
    name: 'Da Lat Coffee',
    packLabel: 'Da Lat',
    copy: 'Highland-inspired, smooth, and gift-ready.',
  },
  {
    src: assetCandidates.eggCream,
    name: 'Egg Cream Coffee',
    packLabel: 'Egg Cream',
    copy: 'A dessert-like coffee ritual in a compact pack.',
  },
];

function ProductFallback({ label = 'NONLA' }) {
  return (
    <div className="product-pack-fallback" role="img" aria-label={`NONLA ${label} coffee pack`}>
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
    <div className="mascot-fallback" role="img" aria-label="NONLA campaign mascot">
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
    <div className="hero-visual-shell" aria-label="NONLA product and mascot visual">
      <div className="hero-product-glow" aria-hidden="true" />
      <BrandAsset
        src={assetCandidates.beansPile}
        decorative
        className="brand-asset hero-real-beans hero-real-beans--base"
        fallback={
          <div className="hero-beans-fallback" aria-hidden="true">
            <CoffeeBean />
            <CoffeeBean />
            <CoffeeBean />
          </div>
        }
      />
      <BrandAsset
        src={assetCandidates.leaves}
        decorative
        className="brand-asset hero-real-leaves hero-real-leaves--one"
        fallback={<div className="coffee-leaf-layer coffee-leaf-layer--one" aria-hidden="true" />}
      />
      <BrandAsset
        src={assetCandidates.leaves}
        decorative
        className="brand-asset hero-real-leaves hero-real-leaves--two"
        fallback={<div className="coffee-leaf-layer coffee-leaf-layer--two" aria-hidden="true" />}
      />

      <motion.div
        className="hero-mascot-card mascot-shadow"
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 7.5, ease: 'easeInOut', repeat: Infinity }}
      >
        <BrandAsset
          src={assetCandidates.mascot}
          alt="NONLA mascot holding Vietnamese coffee"
          className="brand-asset hero-mascot-img"
          loading="eager"
          fallback={<MascotFallback />}
        />
      </motion.div>

      <motion.div
        className="hero-main-pack"
        initial={{ opacity: 0, x: 28, rotate: 3 }}
        animate={{ opacity: 1, x: 0, rotate: -2 }}
        whileHover={{ rotate: 1.5, y: -6 }}
        transition={{ duration: 0.65, delay: 0.2, ease: 'easeOut' }}
      >
        <BrandAsset
          src={assetCandidates.giftbox}
          alt="NONLA Vietnamese coffee gift box"
          className="brand-asset hero-pack-img"
          loading="eager"
          fallback={<ProductFallback label="Gift Box" />}
        />
      </motion.div>

      <motion.div
        className="hero-secondary-pack"
        initial={{ opacity: 0, x: -18, rotate: -5 }}
        animate={{ opacity: 1, x: 0, rotate: -6 }}
        whileHover={{ rotate: -3, y: -4 }}
        transition={{ duration: 0.65, delay: 0.28, ease: 'easeOut' }}
      >
        <BrandAsset
          src={assetCandidates.durian}
          alt="NONLA Durian Coffee pack"
          className="brand-asset hero-secondary-pack-img"
          fallback={<ProductFallback label="Durian Coffee" />}
        />
      </motion.div>

      {miniPacks.map((pack, index) => (
        <motion.div
          key={pack.label}
          className={`floating-brand-item floating-brand-item--${index + 1}`}
          animate={{ y: [0, -8, 0], rotate: index === 0 ? [-4, 1, -4] : [3, -2, 3] }}
          transition={{ duration: 5.4 + index, ease: 'easeInOut', repeat: Infinity }}
        >
          <BrandAsset
            src={pack.src}
            alt={`NONLA ${pack.label}`}
            className="brand-asset mini-pack-img hero-pod-img"
            fallback={<ProductFallback label={pack.label} />}
          />
        </motion.div>
      ))}

      <CoffeeBean className="hero-bean hero-bean--one" />
    </div>
  );
}

function FlavorCollection() {
  return (
    <motion.div className="flavor-collection" variants={fadeUp} aria-label="NONLA flavor collection">
      {flavorCollection.map((flavor) => (
        <article key={flavor.name} className="flavor-card">
          <div className="flavor-card__pack">
            <BrandAsset
              src={flavor.src}
              alt={`NONLA ${flavor.name} pack`}
              className="brand-asset flavor-card__image"
              loading="eager"
              fallback={<ProductFallback label={flavor.packLabel} />}
            />
          </div>
          <div className="flavor-card__copy">
            <h2>{flavor.name}</h2>
            <p>{flavor.copy}</p>
          </div>
        </article>
      ))}
    </motion.div>
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
      <div className="section-transition-soft section-transition-soft--bottom" aria-hidden="true" />
      <div className="section-bg-text select-none" aria-hidden="true">
        NONLA
      </div>
      <div className="hero-bean-wave" aria-hidden="true">
        {Array.from({ length: 14 }, (_, index) => (
          <CoffeeBean
            key={index}
            style={{
              left: `${index * 8 - 5}%`,
              bottom: `${(index % 3) * 7}px`,
              transform: `rotate(${index * 17}deg) scale(${0.68 + (index % 4) * 0.08})`,
              animationDelay: `${index * 0.14}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-4rem)] w-full max-w-7xl items-center px-5 py-12 sm:px-6 md:px-10 lg:px-16">
        <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,1.04fr)_minmax(340px,0.9fr)] lg:gap-12">
          <motion.div
            className="hero-copy flex min-w-0 flex-col gap-5"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.p
              className="w-fit rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white/72 backdrop-blur-md sm:text-xs"
              variants={fadeUp}
            >
              Unbox Vietnam · NONLA Campaign
            </motion.p>

            <motion.div variants={fadeUp}>
              <h1 className="hero-headline max-w-[760px] text-[3.1rem] font-black leading-[0.98] text-white sm:text-6xl md:text-7xl xl:text-7xl">
                Trọn tinh túy Việt
                <span className="block text-yellow">dưới bóng nón lá</span>
              </h1>
              <p className="mt-2 text-xs md:text-sm font-bold text-[#FFD84D] tracking-wide">
                "The full essence of Vietnam, sheltered under the nón lá."
              </p>
            </motion.div>

            <motion.p
              className="max-w-2xl text-base leading-relaxed text-white/76 sm:text-lg md:text-xl"
              variants={fadeUp}
            >
              A premium Vietnamese freeze-dried coffee gift that turns convenience into a refined gifting ritual.
            </motion.p>

            <motion.div
              className="flex flex-col gap-3 sm:flex-row sm:items-center"
              variants={fadeUp}
            >
              <button
                type="button"
                onClick={scrollToOverview}
                className="hero-cta hero-cta--primary"
              >
                Explore NONLA
              </button>
              <button
                type="button"
                onClick={scrollToBigIdea}
                className="hero-cta hero-cta--secondary"
              >
                View the Case
              </button>
            </motion.div>

            <motion.div
              className="grid max-w-2xl grid-cols-1 gap-3 pt-1 sm:grid-cols-3"
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

            <FlavorCollection />
          </motion.div>

          <motion.div
            className="hero-visual-column relative flex min-w-0 items-center justify-center"
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

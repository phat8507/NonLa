import { useState, useEffect, useMemo, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import AnimatedCounter from '../components/AnimatedCounter';

/* ─── Particle field helpers ─── */
function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function generateParticles() {
  const triangles = Array.from({ length: 20 }, (_, i) => ({
    id: `tri-${i}`,
    type: 'triangle',
    top: `${randomBetween(2, 95)}%`,
    left: `${randomBetween(2, 98)}%`,
    size: randomBetween(10, 28),
    opacity: randomBetween(0.03, 0.1),
    duration: randomBetween(12, 25),
    delay: randomBetween(0, 10),
    rotate: randomBetween(-30, 30),
  }));

  const beans = Array.from({ length: 15 }, (_, i) => ({
    id: `bean-${i}`,
    type: 'bean',
    top: `${randomBetween(2, 95)}%`,
    left: `${randomBetween(2, 98)}%`,
    width: randomBetween(10, 20),
    height: randomBetween(16, 30),
    opacity: randomBetween(0.04, 0.12),
    duration: randomBetween(14, 28),
    delay: randomBetween(0, 12),
    rotate: randomBetween(10, 60),
  }));

  return { triangles, beans };
}

/* ─── Pentagon pods around the nón lá ─── */
function generatePentagons() {
  const positions = [
    { top: '12%', left: '25%' },
    { top: '8%', left: '65%' },
    { top: '45%', left: '5%' },
    { top: '50%', left: '80%' },
    { top: '72%', left: '18%' },
    { top: '70%', left: '72%' },
  ];

  return positions.map((pos, i) => ({
    id: `pent-${i}`,
    ...pos,
    size: randomBetween(30, 50),
    opacity: randomBetween(0.08, 0.2),
    duration: randomBetween(6, 12),
    delay: randomBetween(0, 5),
  }));
}

/* ─── Framer Motion variants ─── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const slideUpYellow = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

/* ─── Typewriter hook ─── */
function useTypewriter(text, speed = 80, startTyping = false) {
  const [displayed, setDisplayed] = useState('');
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (!startTyping) return;
    setDisplayed('');
    setIsDone(false);
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(timer);
        setIsDone(true);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed, startTyping]);

  return { displayed, isDone };
}

/* ─── Stats data ─── */
const stats = [
  { value: 4, suffix: 'B VND', label: 'Budget' },
  { value: 12, suffix: 'B VND', label: 'Revenue Target' },
  { value: 3.0, suffix: '×', label: 'Return on Ad Spend', prefix: 'ROAS ', decimals: 1 },
];

/* ═══════════════════════════════════════════
   HERO SECTION
   ═══════════════════════════════════════════ */
export default function Hero() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  /* Memoize random particles so they don't regenerate on re-render */
  const { triangles, beans } = useMemo(() => generateParticles(), []);
  const pentagons = useMemo(() => generatePentagons(), []);

  /* Typewriter */
  const line1Text = 'Trọn tinh túy Việt';
  const { displayed: line1, isDone: line1Done } = useTypewriter(
    line1Text,
    80,
    isInView,
  );

  const handleCTA = () => {
    const el = document.getElementById('overview');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-[100svh] flex items-center overflow-hidden bg-blue-dark pt-14"
    >
      {/* ── Background oversized text ── */}
      <div className="section-bg-text select-none" aria-hidden="true">
        NONLA
      </div>

      {/* ── Particle field ── */}
      <div className="absolute inset-0 pointer-events-none z-[1]" aria-hidden="true">
        {triangles.map((p) => (
          <div
            key={p.id}
            className="absolute non-la"
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size * 1.15,
              background: `rgba(244, 180, 0, ${p.opacity})`,
              transform: `rotate(${p.rotate}deg)`,
              animation: `float-slow ${p.duration}s ease-in-out ${p.delay}s infinite`,
            }}
          />
        ))}
        {beans.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-[50%]"
            style={{
              top: p.top,
              left: p.left,
              width: p.width,
              height: p.height,
              background: `rgba(244, 180, 0, ${p.opacity})`,
              transform: `rotate(${p.rotate}deg)`,
              animation: `float ${p.duration}s ease-in-out ${p.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 md:px-10 lg:px-16 py-12 sm:py-14 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.15fr)_minmax(240px,0.85fr)] items-center gap-10 md:gap-10 lg:gap-12">
          {/* ═══ LEFT COLUMN ═══ */}
          <motion.div
            className="min-w-0 w-full flex flex-col gap-4 md:gap-5"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {/* Label */}
            <motion.p
              className="text-xs sm:text-sm tracking-wide text-muted"
              variants={fadeIn}
            >
              YFC Future Leaders Program 2026 · Round 2 · Team SHIFT
            </motion.p>

            {/* H1 line 1 — typewriter */}
            <div>
              <h1 className="max-w-[12ch] md:max-w-none text-[2.7rem] sm:text-5xl md:text-6xl xl:text-7xl font-black leading-[1.05] text-white [text-wrap:balance]">
                {line1}
                {!line1Done && (
                  <span
                    className="inline-block w-[3px] h-[0.85em] bg-yellow ml-1 align-middle"
                    style={{ animation: 'typewriter-cursor 0.7s step-end infinite' }}
                  />
                )}
              </h1>

              {/* H1 line 2 — slides up after line 1 completes */}
              <motion.h1
                className="max-w-[12ch] md:max-w-none text-[2.7rem] sm:text-5xl md:text-6xl xl:text-7xl font-black leading-[1.05] text-yellow mt-2 [text-wrap:balance]"
                initial={{ opacity: 0, y: 40 }}
                animate={
                  line1Done
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 40 }
                }
                transition={{ duration: 0.7, ease: 'easeOut' }}
              >
                dưới bóng nón lá.
              </motion.h1>
            </div>

            {/* Body paragraph */}
            <motion.p
              className="text-base sm:text-lg md:text-xl text-white/70 max-w-xl leading-relaxed"
              variants={fadeUp}
            >
              A premium Vietnamese freeze-dried coffee brand repositioning from
              &lsquo;instant coffee&rsquo; to Vietnam&rsquo;s definitive Tet gift.
            </motion.p>

            {/* Stats row */}
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mt-2 max-w-3xl"
              variants={fadeUp}
            >
              {stats.map((s, i) => (
                <div
                  key={i}
                  className={`glass-card min-w-0 px-4 sm:px-5 py-3 md:py-4 flex flex-col gap-1 ${i === 2 ? 'col-span-2 lg:col-span-1' : ''}`}
                >
                  <span className="text-2xl md:text-3xl font-bold text-yellow leading-tight whitespace-nowrap">
                    <AnimatedCounter
                      target={s.value}
                      prefix={s.prefix || ''}
                      suffix={s.suffix}
                      decimals={s.decimals || 0}
                      duration={1500}
                    />
                  </span>
                  <span className="text-xs text-muted tracking-wide uppercase">
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTA button */}
            <motion.div variants={fadeUp}>
              <button
                onClick={handleCTA}
                className="mt-3 sm:mt-4 inline-flex items-center justify-center gap-2 bg-yellow text-blue-dark font-bold
                           px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm sm:text-base
                           hover:scale-105 hover:shadow-lg hover:shadow-yellow/25
                           active:scale-95 transition-transform duration-200 cursor-pointer"
              >
                Explore the Case ↓
              </button>
            </motion.div>

            {/* Data source footnote */}
            <motion.p
              className="text-xs text-muted/60 mt-1"
              variants={fadeIn}
            >
              Data: NONLA Coffee internal brief, YFC 2026 Round 2
            </motion.p>
          </motion.div>

          {/* ═══ RIGHT COLUMN ═══ */}
          <motion.div
            className="w-full min-w-0 flex items-center justify-center relative mt-4 md:mt-0"
            variants={scaleIn}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {/* Nón lá large shape */}
            <div
              className="relative"
              style={{
                width: 'min(72vw, 310px)',
                height: 'min(84vw, 365px)',
                animation: 'float 6s ease-in-out infinite',
              }}
            >
              {/* Glow behind */}
              <div
                className="absolute inset-0 non-la blur-2xl"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(244,180,0,0.25) 0%, rgba(255,216,77,0.12) 100%)',
                }}
              />
              {/* Main triangle */}
              <div
                className="absolute inset-0 non-la"
                style={{
                  background:
                    'linear-gradient(180deg, #F4B400 0%, #FFD84D 60%, #F4B400 100%)',
                  boxShadow: '0 0 60px rgba(244,180,0,0.3)',
                }}
              />

              {/* NONLA wordmark */}
              <div className="absolute inset-0 flex items-center justify-center pt-16">
                <span className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-widest drop-shadow-lg select-none">
                  NONLA
                </span>
              </div>

              {/* Pentagon pods */}
              {pentagons.map((p) => (
                <div
                  key={p.id}
                  className="absolute"
                  style={{
                    top: p.top,
                    left: p.left,
                    width: p.size,
                    height: p.size,
                    clipPath:
                      'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
                    background: `rgba(255, 216, 77, ${p.opacity})`,
                    animation: `float-slow ${p.duration}s ease-in-out ${p.delay}s infinite`,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

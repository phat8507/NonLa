import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import AnimatedCounter from '../components/AnimatedCounter';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

/* ─── animation variants ─── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/* ─── counter cards data ─── */
const counterCards = [
  {
    prefix: 'USD ',
    target: 8.9,
    suffix: 'B',
    decimals: 1,
    label: 'Vietnam Coffee Market 2025',
  },
  {
    prefix: '+',
    target: 18.3,
    suffix: '%',
    decimals: 1,
    label: 'YoY Growth 2025',
  },
  {
    prefix: 'CAGR ',
    target: 6.6,
    suffix: '%/yr',
    decimals: 1,
    label: 'Projected 2025-2030',
  },
  {
    prefix: 'CAGR ',
    target: 3.7,
    suffix: '%/yr',
    decimals: 1,
    label: 'Projected 2025-2033',
  },
  {
    /* static display — compound text, not a single number */
    static: true,
    display: 'USD 325M → 731M',
    sublabel: 'CAGR 12.26% (2021→2028)',
    label: 'Instant Segment Growth',
  },
];

/* ─── Tet cards data ─── */
const tetCards = [
  {
    target: 13,
    suffix: 'T VND',
    decimals: 0,
    body: 'Tet FMCG in 4 cities = 19% of annual FMCG',
    source: 'Source: Statista',
  },
  {
    target: 33.4,
    suffix: 'B VND',
    decimals: 1,
    body: 'Gift set revenue Shopee Tet 2024',
    source: 'Source: Statista',
  },
  {
    target: 5,
    prefix: '1-',
    suffix: 'M VND',
    decimals: 0,
    body: 'Average Tet gift spend per adult 2025',
    source: 'Source: Statista',
  },
];

/* ─── chart config ─── */
const chartData = {
  labels: ['2022', '2023', '2024', '2025'],
  datasets: [
    {
      label: 'Market Size',
      data: [3.31, 5.0, 7.5, 8.9],
      backgroundColor: (ctx) => {
        const chart = ctx.chart;
        const { ctx: canvasCtx, chartArea } = chart;
        if (!chartArea) return '#F4B400';
        const gradient = canvasCtx.createLinearGradient(
          0,
          chartArea.bottom,
          0,
          chartArea.top,
        );
        gradient.addColorStop(0, '#F4B400');
        gradient.addColorStop(1, '#FFD84D');
        return gradient;
      },
      borderRadius: 8,
      borderSkipped: false,
      barPercentage: 0.6,
      categoryPercentage: 0.7,
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    title: {
      display: true,
      text: 'Coffee Market Size 2022–2025',
      color: '#FFFFFF',
      font: { family: 'Plus Jakarta Sans', size: 16, weight: '700' },
      padding: { bottom: 20 },
    },
    tooltip: {
      backgroundColor: 'rgba(10,22,40,0.9)',
      titleFont: { family: 'Plus Jakarta Sans' },
      bodyFont: { family: 'Plus Jakarta Sans' },
      callbacks: {
        label: (ctx) => `USD ${ctx.parsed.y}B`,
      },
    },
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: {
        color: '#8A9BB5',
        font: { family: 'Plus Jakarta Sans', size: 13 },
      },
      border: { color: 'rgba(255,255,255,0.1)' },
    },
    y: {
      grid: { color: 'rgba(255,255,255,0.06)' },
      ticks: {
        color: '#8A9BB5',
        font: { family: 'Plus Jakarta Sans', size: 12 },
        callback: (v) => `$${v}B`,
      },
      border: { display: false },
      title: {
        display: true,
        text: 'USD Billion',
        color: '#8A9BB5',
        font: { family: 'Plus Jakarta Sans', size: 12 },
      },
      beginAtZero: true,
    },
  },
  animation: {
    duration: 1200,
    easing: 'easeOutQuart',
  },
};

/* ═══════════════════════════════════════════════ */
export default function MarketResearch() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const row2Ref = useRef(null);
  const row2InView = useInView(row2Ref, { once: true, margin: '-80px' });

  const row3Ref = useRef(null);
  const row3InView = useInView(row3Ref, { once: true, margin: '-80px' });

  return (
    <section
      id="market"
      ref={sectionRef}
      className="relative bg-[#0A1628] py-24 md:py-32 overflow-hidden"
    >
      {/* ── oversized background text ── */}
      <div className="section-bg-text" aria-hidden="true">
        MARKET
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">
        {/* ── section label ── */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs uppercase tracking-widest text-[#F4B400] font-semibold mb-4"
        >
          Market
        </motion.p>

        {/* ── section title ── */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold text-white mb-3"
        >
          Market Research
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[#8A9BB5] text-lg md:text-xl max-w-2xl mb-14"
        >
          Vietnam's coffee market is booming — and the premium segment is where the real opportunity lives.
        </motion.p>

        {/* ═══════════════════ ROW 1 — Counter cards ═══════════════════ */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-wrap gap-4 mb-16"
        >
          {counterCards.map((card, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="glass-card p-6 flex-1 min-w-[180px] md:min-w-[190px] transition-all duration-300 hover:-translate-y-1"
            >
              {card.static ? (
                <>
                  <p className="text-2xl md:text-3xl font-bold text-[#F4B400] mb-1 leading-tight">
                    {card.display}
                  </p>
                  <p className="text-xs font-semibold text-[#F4B400]/70 mb-2">
                    {card.sublabel}
                  </p>
                </>
              ) : (
                <div className="text-2xl md:text-3xl font-bold text-[#F4B400] mb-2 leading-tight">
                  <AnimatedCounter
                    target={card.target}
                    prefix={card.prefix}
                    suffix={card.suffix}
                    decimals={card.decimals}
                    className="text-[#F4B400]"
                  />
                </div>
              )}
              <p className="text-sm text-[#8A9BB5]">{card.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* ═══════════════════ ROW 2 — Chart + Callout ═══════════════════ */}
        <div
          ref={row2Ref}
          className="flex flex-col lg:flex-row gap-6 mb-16"
        >
          {/* LEFT — Bar Chart (60%) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={row2InView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="glass-card p-6 md:p-8 lg:w-[60%] w-full"
          >
            <div className="h-[320px] md:h-[380px]">
              {row2InView && (
                <Bar data={chartData} options={chartOptions} />
              )}
            </div>
            <p className="text-xs text-[#8A9BB5] mt-4">
              Source: Statista, Vietnam Coffee Association, Mordor Intelligence
            </p>
          </motion.div>

          {/* RIGHT — Premiumization callout (40%) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={row2InView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="glass-card p-6 md:p-8 lg:w-[40%] w-full flex flex-col justify-center"
          >
            {/* Nón lá motif */}
            <div className="mb-5">
              <div
                className="non-la w-8 h-8 bg-[#F4B400]/20 mx-0"
                aria-hidden="true"
              />
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-white leading-snug mb-4">
              <span className="text-[#F4B400]">+55.5%</span> export value
              <br />
              vs <span className="text-[#F4B400]">+1.8%</span> export volume
              <br />
              <span className="text-white/60">= </span>
              <span className="text-[#F4B400]">30×</span> gap
            </h3>

            <p className="text-[#8A9BB5] text-sm md:text-base leading-relaxed mb-5">
              Consumers pay more, not buy more. Advanced processing +
              transparent origin + premium packaging = where the market
              rewards.{' '}
              <span className="text-white font-semibold">
                NONLA is built for this.
              </span>
            </p>

            <p className="text-xs text-[#8A9BB5]/60">
              Source: Vietnam Customs, General Statistics Office 2024
            </p>
          </motion.div>
        </div>

        {/* ═══════════════════ ROW 3 — Tet Gifting ═══════════════════ */}
        <div ref={row3Ref}>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={row3InView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold text-white mb-8"
          >
            Tet Gifting Opportunity
          </motion.h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={row3InView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8"
          >
            {tetCards.map((card, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                className="glass-card p-6 md:p-8 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-3xl md:text-4xl font-bold text-[#F4B400] mb-2 leading-tight">
                  <AnimatedCounter
                    target={card.target}
                    prefix={card.prefix || ''}
                    suffix={card.suffix}
                    decimals={card.decimals}
                    className="text-[#F4B400]"
                  />
                </div>

                <p className="text-white text-sm md:text-base leading-relaxed mb-3">
                  {card.body}
                </p>

                <p className="text-xs text-[#8A9BB5]/60">{card.source}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* callout */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={row3InView ? 'visible' : 'hidden'}
            transition={{ delay: 0.5 }}
            className="glass-card p-6 md:p-8 text-center"
          >
            <p className="text-lg md:text-xl text-white leading-relaxed">
              Category{' '}
              <span className="font-semibold">
                'premium Vietnamese coffee gift'
              </span>{' '}
              has no clear leader. This is the{' '}
              <span className="text-[#F4B400] font-bold">white space</span>.
            </p>
          </motion.div>
        </div>

        {/* ── global footnote ── */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="text-xs text-[#8A9BB5] mt-10"
        >
          Data sources: Statista, Mordor Intelligence, Vietnam Customs, General Statistics Office, Shopee Analytics
        </motion.p>
      </div>
    </section>
  );
}

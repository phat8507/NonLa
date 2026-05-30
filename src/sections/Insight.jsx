import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/* ─── animation variants ─── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotateX: 8 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/* ─── flip cards data ─── */
const flipCards = [
  {
    layer: 1,
    front: {
      title: 'Muốn bản sắc Việt',
      icon: 'flag',
    },
    back: {
      items: [
        { text: '75% recommend local gifts', source: 'CHUS 2025' },
        {
          text: 'Corporate buyers prefer "high-quality local"',
          source: 'Vietnam News Jan 2026',
        },
        {
          text: 'National identity consumption trend',
          source: 'YouNet Media 2025',
        },
      ],
    },
  },
  {
    layer: 2,
    front: {
      title: 'Tiện lợi là lý do chọn',
      icon: 'speed',
    },
    back: {
      items: [
        {
          text: '43% choose instant for "quickness and easiness"',
          source: 'Q&Me',
        },
        {
          text: '>50% buy online starting 1 month before',
          source: 'Grab Tet Report',
        },
      ],
    },
  },
  {
    layer: 3,
    front: {
      title: 'Sợ chưa đủ sang',
      icon: 'gift',
    },
    back: {
      items: [
        { text: '45% require luxury packaging', source: 'NIQ/Novaon 2025' },
        {
          text: '55% corporate buyers → "gift looks gorgeous"',
          source: 'Intage 2021',
        },
        {
          text: '"sợ giỏ nhìn không sang, mua vội cho xong"',
          source: 'FB group verbatim',
        },
      ],
    },
  },
  {
    layer: 4,
    front: {
      title: 'Thể diện là động lực thật',
      icon: 'crown',
    },
    back: {
      items: [
        {
          text: 'Gifting = "thể diện và tâm ý"',
          source: 'NIQ/Novaon 2025',
        },
        {
          text: 'Premium packaging → +45% perceived value',
          source: 'Pregis × Prof. Moreau',
        },
        {
          text: '88% households gift at Tet',
          source: 'Kantar',
        },
      ],
    },
  },
];

/* ─── small CSS icons for card fronts ─── */
function CardIcon({ type }) {
  if (type === 'flag') {
    return (
      <div className="flex gap-0.5 mb-4" aria-hidden="true">
        {/* Vietnamese flag-like CSS shape: red background, yellow star */}
        <div className="relative w-12 h-8 bg-red-600 rounded-sm flex items-center justify-center">
          <div
            className="text-[#F4B400] text-lg leading-none"
            style={{ fontFamily: 'serif' }}
          >
            ★
          </div>
        </div>
      </div>
    );
  }
  if (type === 'speed') {
    return (
      <div className="mb-4" aria-hidden="true">
        <div className="w-10 h-10 rounded-full border-2 border-[#F4B400]/40 flex items-center justify-center">
          <div className="w-0 h-0 border-l-[6px] border-l-[#F4B400] border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent ml-0.5" />
        </div>
      </div>
    );
  }
  if (type === 'gift') {
    return (
      <div className="mb-4" aria-hidden="true">
        <div className="relative w-10 h-10">
          <div className="absolute bottom-0 w-10 h-7 border-2 border-[#F4B400]/40 rounded-sm" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-3 border-2 border-[#F4B400]/40 rounded-sm" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-10 bg-[#F4B400]/40" />
          <div className="absolute top-3 left-0 right-0 h-0.5 bg-[#F4B400]/40" />
        </div>
      </div>
    );
  }
  if (type === 'crown') {
    return (
      <div className="mb-4" aria-hidden="true">
        <div
          className="w-10 h-8 flex items-end justify-center"
          style={{
            background:
              'linear-gradient(135deg, rgba(244,180,0,0.3), rgba(255,216,77,0.15))',
            clipPath:
              'polygon(0% 100%, 0% 40%, 25% 65%, 50% 20%, 75% 65%, 100% 40%, 100% 100%)',
          }}
        />
      </div>
    );
  }
  return null;
}

/* ─── highlighted quote helper ─── */
function HighlightedQuote() {
  const parts = [
    { text: '"Tôi muốn tặng cà phê ', highlight: false },
    { text: 'tiện lợi', highlight: true },
    { text: ' và mang đậm bản sắc Việt Nam, nhưng sợ sự tiện lợi ấy khiến món quà trông ', highlight: false },
    { text: 'chưa đủ sang', highlight: true },
    { text: ' để giữ ', highlight: false },
    { text: 'thể diện', highlight: true },
    { text: ' trong mắt người nhận."', highlight: false },
  ];

  return (
    <>
      {parts.map((part, i) =>
        part.highlight ? (
          <span key={i} className="text-[#F4B400] font-bold not-italic">
            {part.text}
          </span>
        ) : (
          <span key={i}>{part.text}</span>
        )
      )}
    </>
  );
}

/* ═══════════════════════════════════════════════ */
export default function Insight() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const quoteRef = useRef(null);
  const quoteInView = useInView(quoteRef, { once: true, margin: '-80px' });

  const cardsRef = useRef(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: '-80px' });

  return (
    <section
      id="insight"
      ref={sectionRef}
      className="relative bg-[#0A1628] py-24 md:py-32 overflow-hidden"
    >
      {/* ── oversized background text ── */}
      <div className="section-bg-text" aria-hidden="true">
        INSIGHT
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">
        {/* ── section label ── */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs uppercase tracking-widest text-[#F4B400] font-semibold mb-4"
        >
          Insight
        </motion.p>

        {/* ═══════════════════ PULL QUOTE ═══════════════════ */}
        <div ref={quoteRef} className="mb-20">
          <motion.blockquote
            initial={{ opacity: 0, scale: 0.95 }}
            animate={
              quoteInView ? { opacity: 1, scale: 1 } : {}
            }
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* decorative open quote */}
            <span
              className="block text-[#F4B400] text-7xl md:text-8xl leading-none font-bold select-none mb-2"
              aria-hidden="true"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              "
            </span>

            {/* Vietnamese quote */}
            <p className="text-2xl md:text-3xl italic leading-relaxed text-white/90 mb-6 px-2">
              <HighlightedQuote />
            </p>

            {/* decorative close quote */}
            <span
              className="block text-[#F4B400] text-7xl md:text-8xl leading-none font-bold select-none mb-6"
              aria-hidden="true"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              "
            </span>

            {/* English translation */}
            <p className="text-sm md:text-base text-[#8A9BB5] leading-relaxed max-w-2xl mx-auto italic">
              "I want to give convenient, Vietnamese coffee — but fear
              convenience makes it look cheap and hurts my image."
            </p>
          </motion.blockquote>
        </div>

        {/* ═══════════════════ FLIP CARDS ═══════════════════ */}
        <motion.div
          ref={cardsRef}
          variants={containerVariants}
          initial="hidden"
          animate={cardsInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {flipCards.map((card, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="flip-card"
              style={{ height: '300px' }}
            >
              <div className="flip-card-inner">
                {/* ── FRONT ── */}
                <div className="flip-card-front glass-card p-6 flex flex-col justify-between">
                  <div>
                    <CardIcon type={card.front.icon} />
                    <h4 className="text-lg md:text-xl font-bold text-white leading-snug">
                      {card.front.title}
                    </h4>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-green-400 bg-green-400/10 px-3 py-1.5 rounded-full">
                      <span>✅</span> DATA
                    </span>
                    <span className="text-xs text-[#8A9BB5]">
                      Layer {card.layer}
                    </span>
                  </div>
                </div>

                {/* ── BACK ── */}
                <div
                  className="flip-card-back glass-card p-5 flex flex-col justify-center"
                  style={{ borderTop: '3px solid #F4B400' }}
                >
                  <p className="text-[10px] uppercase tracking-widest text-[#F4B400] font-semibold mb-3">
                    Layer {card.layer} — Evidence
                  </p>
                  <ul className="space-y-3">
                    {card.back.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#F4B400] shrink-0" />
                        <div>
                          <p className="text-white text-sm leading-snug">
                            {item.text}
                          </p>
                          <p className="text-[#8A9BB5] text-[10px] mt-0.5">
                            {item.source}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Hover hint ── */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={cardsInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="text-xs text-[#8A9BB5] text-center mt-6"
        >
          ↻ Hover each card to reveal data evidence
        </motion.p>

        {/* ── global footnote ── */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="text-xs text-[#8A9BB5] mt-10"
        >
          Data sources: CHUS 2025, Vietnam News, YouNet Media, Q&Me, Grab Tet
          Report, NIQ/Novaon 2025, Intage 2021, Pregis Research, Kantar
        </motion.p>
      </div>
    </section>
  );
}

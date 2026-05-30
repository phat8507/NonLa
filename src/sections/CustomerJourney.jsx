import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { CoffeeBean, MiniNonlaPack } from '../components/BrandDecor';

const stages = [
  {
    title: 'Awareness',
    thought: 'Is there a Vietnamese coffee gift that feels both new and premium?',
    barrier: 'NONLA does not appear when shoppers search or scroll.',
    opportunity: 'Build salience.',
    implication: 'Meta/TikTok, PR, gift-search content.',
    highlight: true,
  },
  {
    title: 'Consideration',
    thought: 'Is this brand trustworthy enough to give?',
    barrier: 'Lack of social proof and B2B-specific content.',
    opportunity: 'Build trust.',
    implication: 'Corporate testimonials, reviews, KOC unboxing.',
  },
  {
    title: 'Evaluation',
    thought: 'Does it look beautiful, premium, and Tet-appropriate?',
    barrier: 'Packaging must prove premium value.',
    opportunity: 'Show gift-worthiness.',
    implication: 'Packaging hero content, unboxing, comparison.',
  },
  {
    title: 'Decision',
    thought: 'Is it safe to order in bulk?',
    barrier: 'Lack of catalogue, bulk price, and lead-time guarantee.',
    opportunity: 'Reduce risk.',
    implication: 'B2B toolkit, quote form, delivery promise.',
    highlight: true,
  },
  {
    title: 'Post-purchase',
    thought: 'Did recipients like it, and should we reorder next year?',
    barrier: 'No referral or reorder system.',
    opportunity: 'Create repeat loop.',
    implication: 'Thank-you card, feedback form, reorder offer.',
  },
];

const BarrierIntensityTimeline = () => {
  const intensityData = [
    { stage: "Awareness", score: 5, desc: "Not visible during search/scroll", highlight: true },
    { stage: "Consideration", score: 3, desc: "Lack of trust and social proof" },
    { stage: "Evaluation", score: 3, desc: "Packaging has not proven premium" },
    { stage: "Decision", score: 5, desc: "Missing B2B toolkit and logistics assurance", highlight: true },
    { stage: "Post-purchase", score: 2, desc: "No referral/reorder loop" }
  ];

  return (
    <div className="glass-card p-6 border border-[#FFD84D]/20 mt-12 relative overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h3 className="text-xl font-bold text-white">Leakage & Friction Timeline</h3>
          <p className="text-xs text-[#8A9BB5] mt-1">Measuring customer drop-off friction at each stage of the funnel.</p>
        </div>
        <div className="px-3 py-1 bg-red-500/10 rounded border border-red-500/30 text-xs font-bold text-red-400 whitespace-nowrap">
          Peak Leakage: Awareness & Decision
        </div>
      </div>
      
      {/* Visual Timeline Area */}
      <div className="space-y-6 select-none">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {intensityData.map((data, index) => (
            <div key={index} className={`p-4 rounded-xl border flex flex-col justify-between h-full transition-all duration-300 ${
              data.highlight 
                ? 'bg-red-500/10 border-red-500/30 ring-1 ring-red-500/20 shadow-lg shadow-red-500/5' 
                : 'bg-white/[0.03] border-white/10'
            }`}>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className={`text-[10px] font-black uppercase tracking-wider ${
                    data.highlight ? 'text-red-400' : 'text-[#FFD84D]'
                  }`}>
                    {data.stage}
                  </span>
                  <span className={`text-xs font-black px-1.5 py-0.5 rounded ${
                    data.highlight ? 'bg-red-500 text-white' : 'bg-white/10 text-white'
                  }`}>
                    {data.score}/5
                  </span>
                </div>
                <p className="text-xs font-bold text-white mb-1">{data.desc}</p>
              </div>
              
              {/* Dot Intensity Bar */}
              <div className="mt-4 pt-3 border-t border-white/5 flex gap-1">
                {[1, 2, 3, 4, 5].map((dot) => (
                  <span 
                    key={dot} 
                    className={`h-2 flex-1 rounded-full ${
                      dot <= data.score 
                        ? (data.highlight ? 'bg-red-500 shadow-sm shadow-red-500/50' : 'bg-[#FFD84D] shadow-sm shadow-[#FFD84D]/50') 
                        : 'bg-white/10'
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom Caption and Message */}
        <div className="border-t border-white/10 pt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs">
          <p className="italic text-[#8A9BB5] max-w-xl">
            “The journey bottleneck is not awareness alone; it is confidence before purchase.”
          </p>
          <div className="flex items-center text-red-400 font-bold">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 mr-2 animate-pulse"></span>
            Critical Funnel Leakage Points Highlighted
          </div>
        </div>
      </div>
    </div>
  );
};

export default function CustomerJourney() {
  const [activeStage, setActiveStage] = useState(0);
  const active = stages[activeStage];

  return (
    <SectionWrapper id="journey" bgText="JOURNEY" decor="light">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-[#FFD84D] font-bold mb-4">
            Journey
          </p>
          <h2 className="nonla-section-title text-4xl md:text-5xl">
            Customer Journey
          </h2>
          <p className="mt-5 text-white/76 text-lg leading-relaxed">
            The buyer journey is a confidence timeline: every touchpoint must
            prove NONLA is practical enough to buy and premium enough to give.
          </p>
        </div>

        <div className="nonla-card-strong p-5 md:p-8 overflow-hidden relative">
          
          {/* Mobile/Tablet Tab Switcher (below lg) */}
          <div className="lg:hidden flex justify-between items-center bg-white/[0.04] p-2 rounded-2xl border border-white/10 mb-6 gap-1.5 overflow-x-auto min-w-0">
            {stages.map((stage, index) => (
              <button
                key={stage.title}
                type="button"
                onClick={() => setActiveStage(index)}
                className={`flex-1 flex flex-col items-center py-2 px-1 rounded-xl text-center transition-all min-w-[55px] ${
                  activeStage === index
                    ? 'bg-[#FFD84D] text-[#0A1628] font-bold shadow-md shadow-[#F4B400]/10'
                    : 'text-white/60 hover:text-white/90 hover:bg-white/5'
                }`}
              >
                <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black mb-1 ${
                  activeStage === index ? 'bg-[#0A1628] text-[#FFD84D]' : 'bg-[#FFD84D] text-[#0A1628]'
                }`}>
                  {index + 1}
                </span>
                <span className="text-[10px] font-black tracking-tight whitespace-nowrap">{stage.title}</span>
              </button>
            ))}
          </div>

          {/* Desktop Timeline (lg and above only) */}
          <div className="hidden lg:block relative mb-8">
            <div className="absolute left-10 right-10 top-[2.25rem] h-0.5 bg-[#FFD84D]/30 z-0" />
            <div className="grid grid-cols-5 gap-4 relative z-10">
              {stages.map((stage, index) => (
                <button
                  key={stage.title}
                  type="button"
                  onClick={() => setActiveStage(index)}
                  className={`rounded-2xl border p-4 text-left transition duration-200 flex flex-col justify-between h-full ${
                    activeStage === index
                      ? 'border-[#FFD84D] bg-[#FFD84D] text-[#0A1628] shadow-xl shadow-[#F4B400]/20'
                      : 'border-white/12 bg-white/[0.07] text-white hover:border-[#FFD84D]/42'
                  }`}
                >
                  <span className={`inline-flex h-8 w-8 items-center justify-center rounded-full text-xs font-black ${
                    activeStage === index ? 'bg-[#0A1628] text-[#FFD84D]' : 'bg-[#FFD84D] text-[#0A1628]'
                  }`}>
                    {index + 1}
                  </span>
                  <div className="mt-3">
                    <h3 className="text-sm font-black uppercase tracking-wider">{stage.title}</h3>
                    <p className={`mt-1 text-[11px] leading-normal ${activeStage === index ? 'text-[#0A1628]/70' : 'text-white/60'}`}>
                      {stage.thought}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-[1fr_0.34fr]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.title}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.25 }}
                className="nonla-panel p-5 md:p-6"
              >
                <p className="text-xs uppercase tracking-widest text-[#FFD84D] font-black">
                  Active stage
                </p>
                <h3 className="mt-3 text-2xl font-black text-white">{active.title}</h3>
                <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    ['Shopper Question', active.thought],
                    ['Current Barrier', active.barrier],
                    ['NONLA Task', active.opportunity],
                    ['IMC Implication', active.implication],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                      <p className="text-[10px] uppercase tracking-widest text-[#FFD84D] font-black">{label}</p>
                      <p className="mt-2 text-sm leading-relaxed text-white/78">{value}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="nonla-panel flex items-center justify-between gap-5 p-5 lg:flex-col lg:items-start">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#FFD84D] font-black">
                  Journey implication
                </p>
                <p className="mt-3 text-lg font-bold leading-relaxed text-white">
                  Trust must be visible before trial.
                </p>
              </div>
              <MiniNonlaPack label="Trust" />
            </div>
          </div>

          <CoffeeBean className="absolute right-8 bottom-8 opacity-25" />
        </div>

        {/* Barrier Intensity Timeline */}
        <BarrierIntensityTimeline />
      </div>
    </SectionWrapper>
  );
}

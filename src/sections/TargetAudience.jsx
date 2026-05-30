import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { CoffeeBean, CoffeeLeaf, MiniNonlaPack } from '../components/BrandDecor';

const tiers = [
  {
    id: 'primary',
    label: 'PRIMARY',
    title: 'Corporate Premium Tet Gift Buyers',
    role: 'Growth engine — 75% of 12B target',
    details: [
      ['Demographics', 'HR / Admin / SME Owners | Age 28-45 | HCMC + Hanoi'],
      ['Purchase', '50-200 sets per order | AOV: ~30M VND/order'],
      ['Why Primary', 'Occasion clear + budget concentrated + high volume + repeat annually'],
      ['Data', '13T VND Tet FMCG | gift sets 300k-2M VND | 1-5M per adult'],
    ],
  },
  {
    id: 'secondary',
    label: 'SECONDARY',
    title: 'Urban Cultural Gifters',
    role: 'Brand equity builder + UGC + social proof for corporate',
    details: [
      ['Demographics', 'Age 25-40 | Online-savvy | Values aesthetics + brand story'],
      ['Purchase', 'Individual sets 200k-500k'],
      ['Data', 'Shopee gift set 33.4B VND | personalized gifts CAGR 12.1%'],
    ],
  },
  {
    id: 'tertiary',
    label: 'TERTIARY',
    title: 'Vietnam Souvenir & Overseas Gifters',
    role: 'Long-term expansion after domestic brand proof',
    details: [
      ['Demographics', 'Tourists + Việt Kiều | Needs: compact, no equipment, cultural signal'],
      ['Role', 'Seed awareness now, scale export after domestic proof'],
    ],
  },
];

const rationaleItems = [
  {
    question: 'Why Corporate first?',
    answer:
      'Corporate buyers bring concentrated volume during a clear seasonal occasion. Large budgets, high AOV, built-in repeat cycles, and corporate logos on gift sets create credibility across offices and partner networks.',
  },
  {
    question: 'Why Urban second?',
    answer:
      'Urban cultural gifters create social proof through unboxing stories and word-of-mouth, making the brand easier for corporate buyers to justify at premium prices.',
  },
  {
    question: 'Why Overseas third?',
    answer:
      'International distribution is operationally complex. NONLA should seed awareness with Việt Kiều and tourist buyers now, then scale once domestic brand proof is stronger.',
  },
];

const TargetPrioritizationMatrix = () => {
  return (
    <div className="glass-card p-6 border border-[#FFD84D]/20 mt-12 relative overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 relative z-10">
        <div>
          <h3 className="text-xl font-bold text-white">Target Prioritization Matrix</h3>
          <p className="text-xs text-[#8A9BB5] mt-1">Visualizing opportunity vs. strategic alignment for each audience tier.</p>
        </div>
        <div className="px-3 py-1 bg-[#FFD84D]/10 rounded border border-[#FFD84D]/30 text-xs font-bold text-[#FFD84D] whitespace-nowrap">
          Strategic Focus: B2B First
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center relative z-10">
        {/* Matrix Plot Area */}
        <div className="lg:col-span-2 relative flex flex-col justify-center items-center py-4 select-none">
          <div className="relative w-full max-w-[400px] aspect-[4/3] border-l-2 border-b-2 border-white/20 flex flex-col justify-between">
            {/* Grid cells */}
            <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-1 p-1">
              <div className="bg-blue-950/20 rounded border border-white/5"></div>
              <div className="bg-[#1A4DFF]/5 rounded border border-white/5"></div>
              <div className="bg-[#FFD84D]/5 rounded border border-[#FFD84D]/10"></div>
              
              <div className="bg-blue-950/40 rounded border border-white/5"></div>
              <div className="bg-blue-950/20 rounded border border-white/5"></div>
              <div className="bg-[#1A4DFF]/5 rounded border border-white/5"></div>
              
              <div className="bg-blue-950/60 rounded border border-white/5"></div>
              <div className="bg-blue-950/40 rounded border border-white/5"></div>
              <div className="bg-blue-950/20 rounded border border-white/5"></div>
            </div>

            {/* Nodes */}
            {/* 1. Corporate Premium Tet Gift Buyers: Fit: High, Potential: High -> Right-Top */}
            <div className="absolute left-[83.3%] top-[16.6%] -translate-x-1/2 -translate-y-1/2 group z-30">
              <div className="relative w-7 h-7 rounded-full bg-[#FFD84D] border-2 border-white shadow-xl flex items-center justify-center cursor-pointer hover:scale-125 transition-transform">
                <span className="text-xs font-black text-[#0A1628]">1</span>
                <span className="absolute -inset-2 rounded-full border-2 border-[#FFD84D] animate-ping opacity-60"></span>
              </div>
              <div className="absolute right-9 top-1/2 -translate-y-1/2 bg-[#0A1628] text-white border border-[#FFD84D]/40 px-2 py-1 rounded text-xs font-bold whitespace-nowrap shadow-2xl z-40 pointer-events-none opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                🎯 Corporate Premium Tet Gift Buyers (Primary Focus)
              </div>
            </div>

            {/* 2. Urban Cultural Gifters: Fit: Med-High, Potential: Med-High -> Middle-Topish */}
            <div className="absolute left-[60%] top-[45%] -translate-x-1/2 -translate-y-1/2 group z-20">
              <div className="w-6 h-6 rounded-full bg-[#1A4DFF] border-2 border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-125 transition-transform">
                <span className="text-xs font-black text-white">2</span>
              </div>
              <div className="absolute left-8 top-1/2 -translate-y-1/2 bg-[#0A1628] text-white border border-[#1A4DFF]/40 px-2 py-1 rounded text-xs font-bold whitespace-nowrap shadow-2xl z-40 pointer-events-none opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                Urban Cultural Gifters (Secondary Engine)
              </div>
            </div>

            {/* 3. Vietnam Souvenir & Overseas Gifters: Fit: Low-Med, Potential: Low-Med -> Left-Bottom */}
            <div className="absolute left-[30%] top-[75%] -translate-x-1/2 -translate-y-1/2 group z-20">
              <div className="w-5 h-5 rounded-full bg-[#8A9BB5] border-2 border-white/60 shadow-lg flex items-center justify-center cursor-pointer hover:scale-125 transition-transform">
                <span className="text-[10px] font-black text-white">3</span>
              </div>
              <div className="absolute left-7 top-1/2 -translate-y-1/2 bg-[#0A1628] text-white border border-white/20 px-2 py-1 rounded text-xs font-bold whitespace-nowrap shadow-2xl z-40 pointer-events-none opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                Vietnam Souvenir & Overseas Gifters (Long-term Option)
              </div>
            </div>

            {/* Axis labels */}
            <div className="absolute left-2 top-2 text-[9px] font-bold text-white/40 uppercase tracking-widest">High Potential</div>
            <div className="absolute left-2 bottom-2 text-[9px] font-bold text-white/40 uppercase tracking-widest">Low Potential</div>
            <div className="absolute right-2 bottom-2 text-[9px] font-bold text-white/40 uppercase tracking-widest">High Fit</div>
          </div>
          
          <div className="w-full max-w-[400px] flex justify-between text-[10px] font-bold text-white/60 mt-2 px-1">
            <span>Low Strategic Fit</span>
            <span>Medium</span>
            <span>High Strategic Fit</span>
          </div>
        </div>
        
        {/* Caption and Legend */}
        <div className="flex flex-col justify-center h-full">
          <div className="space-y-4 text-sm text-white/80">
            <p className="italic text-[#8A9BB5]">
              “Strategic scoring — directional, not survey data.”
            </p>
            <div className="space-y-3 border-t border-white/10 pt-4">
              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#FFD84D] text-[#0A1628] font-bold text-xs flex items-center justify-center flex-shrink-0">1</span>
                <div>
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider">Corporate Premium Tet Gift Buyers</h4>
                  <p className="text-xs text-[#8A9BB5] mt-0.5">Primary volume driver (75% revenue). Clean timing, high order size.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#1A4DFF] text-white font-bold text-xs flex items-center justify-center flex-shrink-0">2</span>
                <div>
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider">Urban Cultural Gifters</h4>
                  <p className="text-xs text-[#8A9BB5] mt-0.5">Secondary brand advocacy builder and UGC generator.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#8A9BB5] text-white font-bold text-xs flex items-center justify-center flex-shrink-0">3</span>
                <div>
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider">Vietnam Souvenir & Overseas Gifters</h4>
                  <p className="text-xs text-[#8A9BB5] mt-0.5">Tertiary seed market. Focus on export scalability later.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function TargetAudience() {
  const [activeTier, setActiveTier] = useState('primary');
  const [openRationale, setOpenRationale] = useState(0);

  return (
    <SectionWrapper id="target" bgText="TARGET" decor="light">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-[#FFD84D] font-bold mb-4">
            Target
          </p>
          <h2 className="nonla-section-title text-4xl md:text-5xl">
            Target Audience
          </h2>
          <p className="mt-5 text-white/76 text-lg leading-relaxed">
            A priority stack concentrates growth on the highest-value buyer
            first, then lets brand momentum cascade into cultural and overseas
            gifting.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="nonla-card-strong p-5 md:p-6 overflow-hidden">
            <CoffeeLeaf className="absolute right-4 top-5 opacity-25 scale-75" />
            <div className="relative space-y-4">
              {tiers.map((tier, index) => (
                <button
                   key={tier.id}
                   type="button"
                   onClick={() => setActiveTier(tier.id)}
                   className={`w-full rounded-3xl border p-5 text-left transition duration-200 ${
                     activeTier === tier.id
                       ? 'border-[#FFD84D] bg-[#FFD84D] text-[#0A1628] shadow-xl shadow-[#F4B400]/20'
                       : 'border-white/12 bg-white/[0.07] text-white hover:border-[#FFD84D]/45'
                   }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className={`text-xs font-black uppercase tracking-widest ${activeTier === tier.id ? 'text-[#0A1628]/62' : 'text-[#FFD84D]'}`}>
                        {tier.label}
                      </p>
                      <h3 className="mt-2 text-xl font-black leading-tight">{tier.title}</h3>
                    </div>
                    <span className="text-2xl font-black">{index + 1}</span>
                  </div>
                  <p className={`mt-3 text-sm leading-relaxed ${activeTier === tier.id ? 'text-[#0A1628]/72' : 'text-white/70'}`}>
                    {tier.role}
                  </p>
                </button>
              ))}
            </div>
          </div>

          <div className="nonla-panel p-6 md:p-8">
            <AnimatePresence mode="wait">
              {tiers
                .filter((tier) => tier.id === activeTier)
                .map((tier) => (
                  <motion.div
                    key={tier.id}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <p className="text-xs uppercase tracking-widest text-[#FFD84D] font-black">
                          Active priority
                        </p>
                        <h3 className="mt-3 text-2xl md:text-3xl font-black text-white">
                          {tier.title}
                        </h3>
                      </div>
                      <MiniNonlaPack label="Gift" />
                    </div>

                    <div className="mt-7 grid grid-cols-1 gap-3">
                      {tier.details.map(([label, value]) => (
                        <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                          <p className="text-[10px] uppercase tracking-widest text-[#FFD84D] font-black">
                            {label}
                          </p>
                          <p className="mt-2 text-sm leading-relaxed text-white/80">{value}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {rationaleItems.map((item, index) => (
            <article key={item.question} className="nonla-card p-5">
              <button
                type="button"
                onClick={() => setOpenRationale(openRationale === index ? -1 : index)}
                className="flex w-full items-center justify-between gap-4 text-left"
              >
                <span className="text-lg font-black text-white">{item.question}</span>
                <span className="text-[#FFD84D] text-2xl font-black">{openRationale === index ? '−' : '+'}</span>
              </button>
              <AnimatePresence initial={false}>
                {openRationale === index && (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="mt-4 overflow-hidden text-sm leading-relaxed text-white/72"
                  >
                    {item.answer}
                  </motion.p>
                )}
              </AnimatePresence>
              <CoffeeBean className="absolute right-4 bottom-4 opacity-20" />
            </article>
          ))}
        </div>

        {/* Prioritization Matrix */}
        <TargetPrioritizationMatrix />
      </div>
    </SectionWrapper>
  );
}

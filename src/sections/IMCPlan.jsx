import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
import { Doughnut, Bar } from 'react-chartjs-2';
import SectionWrapper from '../components/SectionWrapper';
import { CoffeeBeanField, CoffeeLeaf, MiniNonlaPack } from '../components/BrandDecor';
import { useInView } from 'react-intersection-observer';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

function ChannelIcon({ name }) {
  const baseClass = "h-4 w-4";
  if (name === 'TikTok' || name === 'TikTok Shop') {
    return (
      <svg viewBox="0 0 24 24" className={baseClass} aria-hidden="true">
        <path d="M14.3 3.2v10.4a4.5 4.5 0 1 1-3.7-4.4v2.9a1.8 1.8 0 1 0 1.2 1.7V3.2h2.5Z" fill="#0A1628" />
        <path d="M14.4 3.2c.6 2.5 2.3 4.1 4.9 4.5v2.8c-1.8-.1-3.4-.7-4.9-1.9V3.2Z" fill="#0A1628" />
      </svg>
    );
  }
  if (name === 'Facebook' || name === 'Meta retargeting') {
    return (
      <svg viewBox="0 0 24 24" className={baseClass} aria-hidden="true">
        <path d="M14 8.1V6.7c0-.7.3-1 1.1-1h1.7V2.9c-.8-.1-1.7-.2-2.5-.2-2.6 0-4.3 1.6-4.3 4.5v.9H7.2v3.1H10v8h3.4v-8h2.8l.5-3.1H14Z" fill="#0A1628" />
      </svg>
    );
  }
  if (name === 'YouTube' || name === 'Youtube') {
    return (
      <svg viewBox="0 0 24 24" className={baseClass} aria-hidden="true">
        <rect x="2.5" y="6.2" width="19" height="11.6" rx="3" fill="#0A1628" />
        <path d="M10.2 9.2v5.6l5-2.8-5-2.8Z" fill="#FFD84D" />
      </svg>
    );
  }
  if (name === 'PR') {
    return (
      <svg viewBox="0 0 24 24" className={baseClass} aria-hidden="true">
        <path d="M4 10.2h3.1l8.7-4.2v12l-8.7-4.2H4a2 2 0 0 1-2-2v-1.6a2 2 0 0 1 2-2Z" fill="#0A1628" />
        <path d="M7.2 13.8 8.5 20h2.8L10 14.2Z" fill="#0A1628" />
        <path d="M18.2 9.2a4.5 4.5 0 0 1 0 5.6" fill="none" stroke="#0A1628" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }
  if (name === 'Google') {
    return (
      <svg viewBox="0 0 24 24" className={baseClass} aria-hidden="true">
        <path d="M20.6 12.2c0-.7-.1-1.3-.2-1.9H12v3.5h4.8a4.1 4.1 0 0 1-1.8 2.7v2.2h2.9c1.7-1.6 2.7-3.8 2.7-6.5Z" fill="#0A1628" />
        <path d="M12 21c2.4 0 4.5-.8 6-2.2l-2.9-2.2c-.8.5-1.8.9-3.1.9-2.4 0-4.4-1.6-5.1-3.8h-3v2.3A9 9 0 0 0 12 21Z" fill="#0A1628" />
        <path d="M6.9 13.7a5.4 5.4 0 0 1 0-3.4V8H4a9 9 0 0 0 0 8Z" fill="#0A1628" />
        <path d="M12 6.5c1.3 0 2.5.5 3.4 1.3L18 5.2A9 9 0 0 0 4 8l2.9 2.3c.7-2.2 2.7-3.8 5.1-3.8Z" fill="#0A1628" />
      </svg>
    );
  }
  if (name === 'Instagram') {
    return (
      <svg viewBox="0 0 24 24" className={baseClass} aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="5" fill="none" stroke="#0A1628" strokeWidth="2.3" />
        <circle cx="12" cy="12" r="3.5" fill="none" stroke="#0A1628" strokeWidth="2" />
        <circle cx="16.8" cy="7.3" r="1.2" fill="#0A1628" />
      </svg>
    );
  }
  if (name === 'Zalo') {
    return (
      <svg viewBox="0 0 24 24" className={baseClass} aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="4" fill="#0A1628" />
        <path d="M8 9h5l-5 6h6M16 9v6" stroke="#FFD84D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (name === 'ShopeeFood' || name === 'Shopee') {
    return (
      <svg viewBox="0 0 24 24" className={baseClass} aria-hidden="true">
        <path d="M7 8h10l1 12H6L7 8Z" fill="#0A1628" />
        <path d="M9 8a3 3 0 0 1 6 0" fill="none" stroke="#0A1628" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 12h4.2a1.8 1.8 0 0 1 0 3.6H10" fill="none" stroke="#FFD84D" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  if (name === 'GrabFood') {
    return (
      <svg viewBox="0 0 24 24" className={baseClass} aria-hidden="true">
        <path d="M18 9.5a6.2 6.2 0 1 0 .1 5.1h-5.5v-3h8.2c.2 1.1.1 2.2-.2 3.2A8.4 8.4 0 1 1 18 6.1Z" fill="#0A1628" />
      </svg>
    );
  }
  if (name === 'LinkedIn') {
    return (
      <svg viewBox="0 0 24 24" className={baseClass} aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="2.5" fill="#0A1628" />
        <path d="M7.5 10h2.2v6.8H7.5V10Zm1.1-3.2a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM11 10h2.1v.9c.4-.6 1.1-1.1 2.2-1.1 1.8 0 2.9 1.2 2.9 3.4v3.6H16v-3.4c0-1-.5-1.6-1.3-1.6s-1.5.6-1.5 1.6v3.4H11V10Z" fill="#FFD84D" />
      </svg>
    );
  }
  if (name === 'Email') {
    return (
      <svg viewBox="0 0 24 24" className={baseClass} aria-hidden="true">
        <rect x="3" y="6" width="18" height="12" rx="2" fill="#0A1628" />
        <path d="m5 8 7 5 7-5" fill="none" stroke="#FFD84D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (name === 'Landing page') {
    return (
      <svg viewBox="0 0 24 24" className={baseClass} aria-hidden="true">
        <rect x="4" y="5" width="16" height="14" rx="2" fill="#0A1628" />
        <path d="M8 9h8M8 12h5M8 15h7" stroke="#FFD84D" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }
  if (name === 'KOC') {
    return (
      <svg viewBox="0 0 24 24" className={baseClass} aria-hidden="true">
        <circle cx="9" cy="9" r="3" fill="#0A1628" />
        <path d="M4.5 18c.7-2.5 2.2-4 4.5-4s3.8 1.5 4.5 4" fill="#0A1628" />
        <path d="m16 7 1.1 2.2 2.4.4-1.7 1.7.4 2.4-2.2-1.1-2.2 1.1.4-2.4-1.7-1.7 2.4-.4L16 7Z" fill="#0A1628" />
      </svg>
    );
  }
  if (name === 'Direct B2B') {
    return (
      <svg viewBox="0 0 24 24" className={baseClass} aria-hidden="true">
        <rect x="3" y="8" width="18" height="11" rx="2" fill="#0A1628" />
        <path d="M8 8V6h8v2" fill="none" stroke="#0A1628" strokeWidth="2" />
        <path d="M7 13h10M9 16h6" stroke="#FFD84D" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }
  if (name === 'Offline popup') {
    return (
      <svg viewBox="0 0 24 24" className={baseClass} aria-hidden="true">
        <path d="M5 9h14l-1 10H6L5 9Z" fill="#0A1628" />
        <path d="M4 9 6.5 5h11L20 9" fill="none" stroke="#0A1628" strokeWidth="2" strokeLinejoin="round" />
        <path d="M9 13h6" stroke="#FFD84D" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={baseClass} aria-hidden="true">
      <circle cx="12" cy="12" r="8" fill="#0A1628" />
      <path d="M8 12h8M12 8v8" stroke="#FFD84D" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ChannelChip({ name }) {
  return (
    <span className="nonla-chip">
      <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-[#FFD84D] px-1 text-[10px] font-black text-[#0A1628]">
        <ChannelIcon name={name} />
      </span>
      {name}
    </span>
  );
}

const IMCPlan = () => {
  const [activePhase, setActivePhase] = useState(1);
  const { ref: chartRef, inView: chartInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const phases = [
    {
      id: 1,
      name: "SEP",
      title: "Đánh Thức Nhu Cầu",
      budget: "800M (20%)",
      message: "Định chuẩn quà tặng — vẹn toàn thể diện",
      tactics: [
        "Hero film 30–45s: HR dilemma → NONLA solution",
        "Social memes/comics in HR communities",
        "PR soft launch: CafeF, Vietcetera"
      ],
      channels: ["TikTok", "Facebook", "YouTube", "PR"]
    },
    {
      id: 2,
      name: "OCT",
      title: "Cho Dùng Thử, Đập Tan Định Kiến",
      budget: "1B (25%)",
      message: "Trọn tinh túy Việt dưới bóng nón",
      tactics: [
        "Lunchtime sampling via ShopeeFood/GrabFood (11:30–13:00, office buildings Grade A/B, 3+ person orders)",
        "30 KOC unboxing videos",
        "QR → early-bird order + data capture"
      ],
      channels: ["ShopeeFood", "GrabFood", "TikTok", "Instagram"]
    },
    {
      id: 3,
      name: "NOV",
      title: "Chốt Danh Sách Quà (Cao Điểm B2B)",
      budget: "1.4B (35%)",
      isPeak: true,
      message: "Che chở bản sắc, thăng hoa ân tình",
      tactics: [
        "Premium Tet Giftbox launch: 3 tiers (300k / 500k / 1M+), rigid box + foil + logo engraving option",
        "Direct B2B sample kit → HR contacts from Oct",
        "Shopee/TikTok Shop ads: 12:00–13:00 + 20:00–22:00"
      ],
      channels: ["LinkedIn", "Email", "Shopee", "TikTok Shop"]
    },
    {
      id: 4,
      name: "DEC",
      title: "Mùa Trao Tặng",
      budget: "800M (20%)",
      message: "Nón lá trao tay — gửi lời chúc đượm vị tinh hoa",
      tactics: [
        "Pop-up: Annam Gourmet / Aeon / Lotte / Mega Market",
        "Year-End Party B2B bulk deals",
        "Remarketing (>50% video view audience)",
        "Delivery deadline urgency communication"
      ],
      channels: ["Offline popup", "Meta retargeting", "Google", "Email"]
    }
  ];

  const donutData = {
    labels: ['Awareness (32%)', 'Consideration (23%)', 'Conversion (30%)', 'Advocacy (8%)', 'Contingency (7%)'],
    datasets: [
      {
        data: [1.28, 0.92, 1.2, 0.32, 0.28],
        backgroundColor: [
          '#F4B400', // Yellow
          '#1A4DFF', // Blue-mid
          '#0033CC', // Blue-primary
          '#8A9BB5', // Muted
          '#F5F7FA', // Gray
        ],
        borderWidth: 0,
      },
    ],
  };

  const donutOptions = {
    cutout: '70%',
    plugins: {
      legend: {
        position: 'right',
        labels: { color: '#FFFFFF', font: { family: "'Plus Jakarta Sans', sans-serif" } }
      },
      tooltip: {
        callbacks: {
          label: (context) => ` ${context.label}: ${context.raw}B VND`
        }
      }
    }
  };

  const barData = {
    labels: ['Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Budget (Million VND)',
        data: [800, 1000, 1400, 800],
        backgroundColor: (context) => {
          const chart = context.chart;
          if (!chart || !chart.ctx) return '#F4B400';
          const ctx = chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, '#FFD84D');
          gradient.addColorStop(1, '#F4B400');
          return gradient;
        },
        borderRadius: 6,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: 'rgba(255,255,255,0.1)' },
        ticks: { color: '#FFFFFF' }
      },
      x: {
        grid: { display: false },
        ticks: { color: '#FFFFFF' }
      }
    },
    plugins: {
      legend: { display: false },
    }
  };

  return (
    <SectionWrapper id="imc" bgColor="#0A1628" bgText="IMC">
      <CoffeeBeanField count={6} />
      <CoffeeLeaf className="absolute right-8 top-32 opacity-25" />
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-[#F4B400] text-sm font-bold tracking-widest uppercase">
            IMC PLAN
          </span>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <div className="flex overflow-x-auto pb-6 hide-scrollbar snap-x relative">
            <div className="absolute top-1/2 left-0 w-full h-1 rounded-full bg-gradient-to-r from-transparent via-[#FFD84D]/45 to-transparent -translate-y-1/2 hidden md:block z-0"></div>
            
            {phases.map((phase, index) => (
              <div 
                key={phase.id} 
                className="min-w-[280px] md:min-w-0 flex-1 px-2 snap-center relative z-10"
              >
                <div 
                  className={`glass-card p-4 cursor-pointer transition-all duration-300 ${activePhase === phase.id ? 'border-t-4 border-t-[#F4B400] -translate-y-2 shadow-xl bg-white/10' : 'hover:bg-white/5'}`}
                  onClick={() => setActivePhase(phase.id)}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className={`text-sm font-black ${activePhase === phase.id ? 'text-[#F4B400]' : 'text-white/60'}`}>{phase.name}</span>
                    {phase.isPeak && <span className="text-[10px] bg-[#F4B400] text-[#0A1628] font-bold px-2 py-0.5 rounded-sm">PEAK</span>}
                  </div>
                  <h4 className="text-white font-bold text-sm mb-1 h-10">{phase.title}</h4>
                  <p className="text-xs text-[#8A9BB5]">{phase.budget}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="glass-card p-6 md:p-8 relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePhase}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {phases.map((phase) => activePhase === phase.id && (
                  <div key={`detail-${phase.id}`}>
                    <h3 className="text-xl md:text-2xl font-bold text-[#F4B400] mb-2">"{phase.message}"</h3>
                    <div className="w-full h-px bg-white/10 my-4"></div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_0.42fr] gap-8">
                      <div>
                        <h4 className="text-sm uppercase text-[#8A9BB5] font-bold mb-3">Key Tactics</h4>
                        <ul className="space-y-3">
                          {phase.tactics.map((tactic, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-[#F4B400] mr-2 mt-1 text-xs">●</span>
                              <span className="text-white/90 text-sm leading-relaxed">{tactic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="space-y-5">
                        <h4 className="text-sm uppercase text-[#8A9BB5] font-bold mb-3">Channels</h4>
                        <div className="flex flex-wrap gap-2">
                          {phase.channels.map((channel, idx) => (
                            <ChannelChip key={idx} name={channel} />
                          ))}
                        </div>
                        <div className="hidden sm:flex justify-end border-t border-white/10 pt-4">
                          <MiniNonlaPack label={phase.name} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Channels Table */}
        <div className="mb-16 glass-card overflow-hidden">
          <div className="p-6 border-b border-white/10 bg-white/5">
            <h3 className="text-lg font-bold text-white">Channel System</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="p-4 text-[#8A9BB5] font-bold">Channel</th>
                  <th className="p-4 text-[#8A9BB5] font-bold">Role</th>
                  <th className="p-4 text-[#8A9BB5] font-bold">Why</th>
                </tr>
              </thead>
              <tbody className="text-white/80">
                <tr className="border-b border-white/5 hover:bg-white/5">
                  <td className="p-4 font-bold text-white"><ChannelChip name="TikTok" /></td>
                  <td className="p-4"><span className="text-[#F4B400]">Awareness + Trial</span></td>
                  <td className="p-4">Gen Z/Millennial reach, unboxing virality</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5">
                  <td className="p-4 font-bold text-white"><ChannelChip name="Facebook" /></td>
                  <td className="p-4"><span className="text-[#F4B400]">Awareness + Community</span></td>
                  <td className="p-4">HR community targeting, broad Tet reach</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5">
                  <td className="p-4 font-bold text-white"><ChannelChip name="Google" /></td>
                  <td className="p-4"><span className="text-[#1A4DFF]">Conversion</span></td>
                  <td className="p-4">Search intent capture, remarketing</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5">
                  <td className="p-4 font-bold text-white"><ChannelChip name="Landing page" /></td>
                  <td className="p-4"><span className="text-[#1A4DFF]">Conversion</span></td>
                  <td className="p-4">B2B lead capture, product showcase</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5">
                  <td className="p-4 font-bold text-white"><ChannelChip name="Zalo" /></td>
                  <td className="p-4"><span className="text-white">CRM + Nurture</span></td>
                  <td className="p-4">Vietnamese messaging dominance, direct follow-up</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5">
                  <td className="p-4 font-bold text-white"><ChannelChip name="KOC" /></td>
                  <td className="p-4"><span className="text-[#8A9BB5]">Consideration</span></td>
                  <td className="p-4">Authentic product proof, UGC generation</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5">
                  <td className="p-4 font-bold text-white"><ChannelChip name="PR" /></td>
                  <td className="p-4"><span className="text-[#F4B400]">Authority</span></td>
                  <td className="p-4">Brand credibility, premium positioning</td>
                </tr>
                <tr className="hover:bg-white/5">
                  <td className="p-4 font-bold text-white"><ChannelChip name="Direct B2B" /></td>
                  <td className="p-4"><span className="text-[#1A4DFF]">Conversion</span></td>
                  <td className="p-4">Personal relationship, sample delivery</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Charts & Budget Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8" ref={chartRef}>
          <div className="glass-card p-6 flex flex-col items-center">
            <h3 className="text-lg font-bold text-white w-full mb-4">Budget by Funnel</h3>
            <div className="w-full max-w-md aspect-square relative">
              {chartInView && <Doughnut data={donutData} options={donutOptions} />}
              {chartInView && (
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <span className="text-3xl font-black text-white">4B</span>
                  <span className="text-xs text-[#8A9BB5] font-bold uppercase">Total Budget</span>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-white mb-4">Monthly Allocation</h3>
              <div className="h-48 w-full">
                {chartInView && <Bar data={barData} options={barOptions} />}
              </div>
              <p className="text-xs text-[#8A9BB5] mt-4 text-center">
                <span className="text-[#F4B400] font-bold">Note:</span> Nov highest — B2B decides in November, not December
              </p>
            </div>

            <div className="glass-card overflow-hidden">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="py-3 px-4 text-[#8A9BB5] font-bold">Category</th>
                    <th className="py-3 px-4 text-[#8A9BB5] font-bold text-right">Allocation</th>
                    <th className="py-3 px-4 text-[#8A9BB5] font-bold text-right">Amount</th>
                  </tr>
                </thead>
                <tbody className="text-white/80">
                  <tr className="border-b border-white/5">
                    <td className="py-2 px-4">Paid Media</td>
                    <td className="py-2 px-4 text-right">45%</td>
                    <td className="py-2 px-4 text-right font-mono">1.8B VND</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 px-4">Content Production</td>
                    <td className="py-2 px-4 text-right">15%</td>
                    <td className="py-2 px-4 text-right font-mono">600M VND</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 px-4">KOC/PR</td>
                    <td className="py-2 px-4 text-right">15%</td>
                    <td className="py-2 px-4 text-right font-mono">600M VND</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 px-4">B2B Sales Support</td>
                    <td className="py-2 px-4 text-right">15%</td>
                    <td className="py-2 px-4 text-right font-mono">600M VND</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 px-4">CRM & Tech</td>
                    <td className="py-2 px-4 text-right">5%</td>
                    <td className="py-2 px-4 text-right font-mono">200M VND</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 px-4">Contingency</td>
                    <td className="py-2 px-4 text-right">5%</td>
                    <td className="py-2 px-4 text-right font-mono">200M VND</td>
                  </tr>
                  <tr className="bg-[#F4B400]/10 border-t border-[#F4B400]/30">
                    <td className="py-3 px-4 font-bold text-[#F4B400]">Total</td>
                    <td className="py-3 px-4 text-right font-bold text-[#F4B400]">100%</td>
                    <td className="py-3 px-4 text-right font-bold font-mono text-[#F4B400]">4B VND</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default IMCPlan;

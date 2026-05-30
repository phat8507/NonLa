import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
import { Doughnut, Bar } from 'react-chartjs-2';
import SectionWrapper from '../components/SectionWrapper';
import { useInView } from 'react-intersection-observer';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const channelMarks = {
  TikTok: '♪',
  Facebook: 'f',
  YouTube: '▶',
  Youtube: '▶',
  PR: '▣',
  Instagram: '◎',
  ShopeeFood: 'S',
  GrabFood: 'G',
  LinkedIn: 'in',
  Email: '@',
  Shopee: 'S',
  'TikTok Shop': '♪',
  'Offline popup': '□',
  'Meta retargeting': 'f',
  Google: 'G',
  'Landing page': '↗',
  Zalo: 'Z',
  KOC: '★',
  'Direct B2B': 'B2B',
};

function ChannelChip({ name }) {
  return (
    <span className="nonla-chip">
      <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[#FFD84D] px-1 text-[10px] font-black text-[#0A1628]">
        {channelMarks[name] || '•'}
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
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-[#F4B400] text-sm font-bold tracking-widest uppercase">
            IMC PLAN
          </span>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <div className="flex overflow-x-auto pb-6 hide-scrollbar snap-x relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 hidden md:block z-0"></div>
            
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
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="col-span-2">
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
                      
                      <div>
                        <h4 className="text-sm uppercase text-[#8A9BB5] font-bold mb-3">Channels</h4>
                        <div className="flex flex-wrap gap-2">
                          {phase.channels.map((channel, idx) => (
                            <ChannelChip key={idx} name={channel} />
                          ))}
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

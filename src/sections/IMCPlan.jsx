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
  const lowerName = name.toLowerCase();
  if (lowerName.includes('tiktok')) {
    return (
      <svg viewBox="0 0 24 24" className={baseClass} aria-hidden="true">
        <path d="M14.3 3.2v10.4a4.5 4.5 0 1 1-3.7-4.4v2.9a1.8 1.8 0 1 0 1.2 1.7V3.2h2.5Z" fill="#0A1628" />
        <path d="M14.4 3.2c.6 2.5 2.3 4.1 4.9 4.5v2.8c-1.8-.1-3.4-.7-4.9-1.9V3.2Z" fill="#0A1628" />
      </svg>
    );
  }
  if (lowerName.includes('facebook') || lowerName.includes('meta') || lowerName.includes('instagram')) {
    if (lowerName.includes('instagram')) {
      return (
        <svg viewBox="0 0 24 24" className={baseClass} aria-hidden="true">
          <rect x="4" y="4" width="16" height="16" rx="5" fill="none" stroke="#0A1628" strokeWidth="2.3" />
          <circle cx="12" cy="12" r="3.5" fill="none" stroke="#0A1628" strokeWidth="2" />
          <circle cx="16.8" cy="7.3" r="1.2" fill="#0A1628" />
        </svg>
      );
    }
    return (
      <svg viewBox="0 0 24 24" className={baseClass} aria-hidden="true">
        <path d="M14 8.1V6.7c0-.7.3-1 1.1-1h1.7V2.9c-.8-.1-1.7-.2-2.5-.2-2.6 0-4.3 1.6-4.3 4.5v.9H7.2v3.1H10v8h3.4v-8h2.8l.5-3.1H14Z" fill="#0A1628" />
      </svg>
    );
  }
  if (lowerName.includes('youtube')) {
    return (
      <svg viewBox="0 0 24 24" className={baseClass} aria-hidden="true">
        <rect x="2.5" y="6.2" width="19" height="11.6" rx="3" fill="#0A1628" />
        <path d="M10.2 9.2v5.6l5-2.8-5-2.8Z" fill="#FFD84D" />
      </svg>
    );
  }
  if (lowerName.includes('pr')) {
    return (
      <svg viewBox="0 0 24 24" className={baseClass} aria-hidden="true">
        <path d="M4 10.2h3.1l8.7-4.2v12l-8.7-4.2H4a2 2 0 0 1-2-2v-1.6a2 2 0 0 1 2-2Z" fill="#0A1628" />
        <path d="M7.2 13.8 8.5 20h2.8L10 14.2Z" fill="#0A1628" />
        <path d="M18.2 9.2a4.5 4.5 0 0 1 0 5.6" fill="none" stroke="#0A1628" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }
  if (lowerName.includes('google') || lowerName.includes('search')) {
    return (
      <svg viewBox="0 0 24 24" className={baseClass} aria-hidden="true">
        <path d="M20.6 12.2c0-.7-.1-1.3-.2-1.9H12v3.5h4.8a4.1 4.1 0 0 1-1.8 2.7v2.2h2.9c1.7-1.6 2.7-3.8 2.7-6.5Z" fill="#0A1628" />
        <path d="M12 21c2.4 0 4.5-.8 6-2.2l-2.9-2.2c-.8.5-1.8.9-3.1.9-2.4 0-4.4-1.6-5.1-3.8h-3v2.3A9 9 0 0 0 12 21Z" fill="#0A1628" />
        <path d="M6.9 13.7a5.4 5.4 0 0 1 0-3.4V8H4a9 9 0 0 0 0 8Z" fill="#0A1628" />
        <path d="M12 6.5c1.3 0 2.5.5 3.4 1.3L18 5.2A9 9 0 0 0 4 8l2.9 2.3c.7-2.2 2.7-3.8 5.1-3.8Z" fill="#0A1628" />
      </svg>
    );
  }
  if (lowerName.includes('zalo') || lowerName.includes('email')) {
    if (lowerName.includes('email')) {
      return (
        <svg viewBox="0 0 24 24" className={baseClass} aria-hidden="true">
          <rect x="3" y="6" width="18" height="12" rx="2" fill="#0A1628" />
          <path d="m5 8 7 5 7-5" fill="none" stroke="#FFD84D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    }
    return (
      <svg viewBox="0 0 24 24" className={baseClass} aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="4" fill="#0A1628" />
        <path d="M8 9h5l-5 6h6M16 9v6" stroke="#FFD84D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (lowerName.includes('shopee') || lowerName.includes('grab') || lowerName.includes('popup') || lowerName.includes('annam') || lowerName.includes('lotte') || lowerName.includes('aeon') || lowerName.includes('market') || lowerName.includes('booth') || lowerName.includes('co-working') || lowerName.includes('office')) {
    return (
      <svg viewBox="0 0 24 24" className={baseClass} aria-hidden="true">
        <path d="M5 9h14l-1 10H6L5 9Z" fill="#0A1628" />
        <path d="M4 9 6.5 5h11L20 9" fill="none" stroke="#0A1628" strokeWidth="2" strokeLinejoin="round" />
        <path d="M9 13h6" stroke="#FFD84D" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  if (lowerName.includes('landing') || lowerName.includes('catalog') || lowerName.includes('deck') || lowerName.includes('template') || lowerName.includes('proposal')) {
    return (
      <svg viewBox="0 0 24 24" className={baseClass} aria-hidden="true">
        <rect x="4" y="5" width="16" height="14" rx="2" fill="#0A1628" />
        <path d="M8 9h8M8 12h5M8 15h7" stroke="#FFD84D" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }
  if (lowerName.includes('koc') || lowerName.includes('ugc')) {
    return (
      <svg viewBox="0 0 24 24" className={baseClass} aria-hidden="true">
        <circle cx="9" cy="9" r="3" fill="#0A1628" />
        <path d="M4.5 18c.7-2.5 2.2-4 4.5-4s3.8 1.5 4.5 4" fill="#0A1628" />
        <path d="m16 7 1.1 2.2 2.4.4-1.7 1.7.4 2.4-2.2-1.1-2.2 1.1.4-2.4-1.7-1.7 2.4-.4L16 7Z" fill="#0A1628" />
      </svg>
    );
  }
  if (lowerName.includes('b2b') || lowerName.includes('sales') || lowerName.includes('telesales')) {
    return (
      <svg viewBox="0 0 24 24" className={baseClass} aria-hidden="true">
        <rect x="3" y="8" width="18" height="11" rx="2" fill="#0A1628" />
        <path d="M8 8V6h8v2" fill="none" stroke="#0A1628" strokeWidth="2" />
        <path d="M7 13h10M9 16h6" stroke="#FFD84D" strokeWidth="1.7" strokeLinecap="round" />
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
    <span className="nonla-chip whitespace-nowrap inline-flex items-center flex-shrink-0">
      <span className="inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#FFD84D] px-1 text-[10px] font-black text-[#0A1628]">
        <ChannelIcon name={name} />
      </span>
      <span className="ml-1">{name}</span>
    </span>
  );
}

const PhaseObjectiveFlow = () => {
  const flowPhases = [
    {
      month: "Sep",
      phase: "Phase 1",
      name: "B2B Seeding",
      obj: "Seed Tet intent & build target account list",
      channel: "Search / Meta / LinkedIn",
      kpi: "Target Accounts & Catalog Leads"
    },
    {
      month: "Oct",
      phase: "Phase 2",
      name: "Sampling & Qualification",
      obj: "Send Preview Kits & qualify B2B leads",
      channel: "Office / QR / KOC",
      kpi: "Sample MQL & Scoring"
    },
    {
      month: "Nov",
      phase: "Phase 3",
      name: "Proposal & Deposit",
      obj: "Launch box, proposals, negotiations, deposits",
      channel: "Direct Sales / Zalo / Search",
      kpi: "Quote Requests & Contracts"
    },
    {
      month: "Dec",
      phase: "Phase 4",
      name: "Fulfillment & Last-call",
      obj: "Fulfill bulk orders & capture late retail",
      channel: "Direct B2B / Retail Pop-up",
      kpi: "On-time Delivery & Reorder"
    }
  ];

  return (
    <div className="glass-card p-6 border border-[#FFD84D]/20 mb-12 relative overflow-hidden">
      <h3 className="text-xl font-bold text-white mb-2">IMC Phase Objective Flow</h3>
      <p className="text-xs text-[#8A9BB5] mb-6">Strategic alignment from initial category branding down to last-mile fulfillment.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
        {flowPhases.map((phase, idx) => (
          <div key={idx} className="relative bg-white/[0.03] border border-white/10 rounded-xl p-4 flex flex-col justify-between hover:border-[#FFD84D]/30 transition-colors">
            {/* Index step */}
            <div className="flex justify-between items-center mb-3">
              <span className="text-[10px] font-black uppercase text-[#FFD84D] tracking-widest">{phase.phase}</span>
              <span className="bg-[#FFD84D] text-[#0A1628] text-[10px] font-black px-1.5 py-0.5 rounded">{phase.month}</span>
            </div>
            
            <div>
              <h4 className="text-sm font-bold text-white mb-1.5">{phase.name}</h4>
              <p className="text-xs text-[#8A9BB5] leading-relaxed mb-3"><span className="text-white/60 font-bold block">Objective:</span> {phase.obj}</p>
            </div>
            
            <div className="border-t border-white/5 pt-3 space-y-1.5 mt-auto">
              <div className="flex justify-between text-[10px]">
                <span className="text-white/40 font-bold">Main Channel:</span>
                <span className="text-white font-bold text-right">{phase.channel}</span>
              </div>
              <div className="flex justify-between text-[10px]">
                <span className="text-white/40 font-bold">KPI Role:</span>
                <span className="text-xs text-[#FFD84D] font-bold text-right">{phase.kpi}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ChannelRoleMap = () => {
  const channels = [
    // Reach
    { name: "TikTok/Reels", x: 45, y: 85, type: "reach", label: "TikTok/Reels" },
    { name: "Facebook/Instagram", x: 55, y: 78, type: "reach", label: "Facebook/Instagram" },
    // Trust
    { name: "PR", x: 35, y: 55, type: "trust", label: "PR" },
    { name: "KOC / UGC", x: 62, y: 62, type: "trust", label: "KOC / UGC" },
    // Conversion
    { name: "Google Search", x: 78, y: 35, type: "conversion", label: "Google Search" },
    { name: "B2B Landing Page", x: 84, y: 28, type: "conversion", label: "B2B Landing Page" },
    { name: "Direct B2B", x: 92, y: 20, type: "conversion", label: "Direct B2B" },
    { name: "Zalo OA / Email", x: 72, y: 45, type: "conversion", label: "Zalo OA / Email" }
  ];

  return (
    <div className="glass-card p-6 border border-[#FFD84D]/20 mb-12 relative overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 relative z-10">
        <div>
          <h3 className="text-xl font-bold text-white">Channel Role Map</h3>
          <p className="text-xs text-[#8A9BB5] mt-1">Qualitative positioning of marketing channels by Reach vs. Conversion impact.</p>
        </div>
        <div className="flex gap-2">
          <span className="px-2 py-0.5 rounded bg-red-500/20 border border-red-500/40 text-[9px] font-bold text-red-400">Reach</span>
          <span className="px-2 py-0.5 rounded bg-[#FFD84D]/20 border border-[#FFD84D]/40 text-[9px] font-bold text-[#FFD84D]">Trust Proof</span>
          <span className="px-2 py-0.5 rounded bg-[#1A4DFF]/20 border border-[#1A4DFF]/40 text-[9px] font-bold text-[#1A4DFF]">Conversion</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center relative z-10">
        {/* SVG Scatter Plot */}
        <div className="lg:col-span-2 relative flex flex-col justify-center items-center py-4 select-none">
          <div className="relative w-full max-w-[400px] aspect-[4/3] border-l-2 border-b-2 border-white/20 flex flex-col justify-between">
            {/* Grid background overlay */}
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-1 p-1">
              <div className="bg-red-500/[0.02] rounded border border-white/5"></div>
              <div className="bg-red-500/[0.04] rounded border border-white/5"></div>
              <div className="bg-blue-950/20 rounded border border-white/5"></div>
              <div className="bg-[#1A4DFF]/5 rounded border border-[#1A4DFF]/10"></div>
            </div>

            {/* Render Nodes */}
            {channels.map((chan, idx) => {
              let nodeColor = "bg-white";
              let labelClass = "text-white/80";
              if (chan.type === "reach") {
                nodeColor = "bg-red-500 shadow-red-500/50 shadow";
                labelClass = "text-red-400 font-bold";
              } else if (chan.type === "conversion") {
                nodeColor = "bg-[#1A4DFF] shadow-[#1A4DFF]/50 shadow";
                labelClass = "text-blue-400 font-bold";
              } else if (chan.type === "trust") {
                nodeColor = "bg-[#FFD84D] shadow-[#FFD84D]/50 shadow";
                labelClass = "text-[#FFD84D] font-bold";
              }

              return (
                <div 
                  key={idx} 
                  className="absolute group z-20"
                  style={{ left: `${chan.x}%`, bottom: `${chan.y}%` }}
                >
                  <div className={`w-3.5 h-3.5 rounded-full ${nodeColor} border-2 border-[#0A1628] cursor-pointer hover:scale-125 transition-transform`} />
                  <div className={`absolute left-4 top-1/2 -translate-y-1/2 bg-[#0A1628]/95 px-1.5 py-0.5 rounded text-[10px] whitespace-nowrap shadow-md pointer-events-none border border-white/5`}>
                    <span className={labelClass}>{chan.label}</span>
                  </div>
                </div>
              );
            })}

            {/* Labels */}
            <div className="absolute left-2 top-2 text-[9px] font-bold text-white/40 uppercase tracking-widest">High Reach Power</div>
            <div className="absolute right-2 bottom-2 text-[9px] font-bold text-white/40 uppercase tracking-widest">High Conversion Power</div>
          </div>
          
          <div className="w-full max-w-[400px] flex justify-between text-[10px] font-bold text-white/60 mt-2 px-1">
            <span>Low Conversion Power</span>
            <span>Medium</span>
            <span>High Conversion Power</span>
          </div>
        </div>

        {/* Legend/Grouping summary */}
        <div className="space-y-4 text-xs text-white/80">
          <div className="bg-white/[0.02] border border-white/10 rounded-xl p-4 space-y-4">
            <h4 className="font-bold text-white text-sm">Strategic Channel Roles</h4>
            
            <div className="space-y-3">
              <div className="flex gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-bold text-red-400 block text-xs">Reach & Awakening (TikTok / FB)</span>
                  <span className="text-[#8A9BB5] block text-[11px] mt-0.5">Focus: High-reach engagement, HR social groups, and viral unboxing.</span>
                </div>
              </div>
              
              <div className="flex gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFD84D] mt-1 flex-shrink-0" />
                <div>
                  <span className="font-bold text-[#FFD84D] block text-xs">Trust Proof (PR / KOC)</span>
                  <span className="text-[#8A9BB5] block text-[11px] mt-0.5">Focus: Press credibility (CafeF, Vietcetera) & authentic unboxing reviews.</span>
                </div>
              </div>
              
              <div className="flex gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#1A4DFF] mt-1 flex-shrink-0" />
                <div>
                  <span className="font-bold text-blue-400 block text-xs">Conversion Engine (Google / LP / B2B)</span>
                  <span className="text-[#8A9BB5] block text-[11px] mt-0.5">Focus: Lead forms capture, custom engraving offers, direct B2B CRM.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const IMCPlan = () => {
  const [activePhase, setActivePhase] = useState(1);
  const { ref: chartRef, inView: chartInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const phases = [
    {
      id: 1,
      name: "SEP",
      title: "B2B Demand Seeding & Account Targeting",
      budget: "640M VND — 16%",
      message: "Setting the standard for gifting — protecting corporate face.",
      tactics: [
        "B2B pain-point video 30–45s",
        "Pain-point content in HR/SME communities",
        "Account list building",
        "B2B credibility PR",
        "Search seeding + catalog lead capture"
      ],
      channels: ["Google Search", "Meta Lead Form", "Meta Retargeting", "LinkedIn test", "TikTok/Reels targeted", "Zalo/Email remarketing"]
    },
    {
      id: 2,
      name: "OCT",
      title: "Sampling, Preview Kit & Lead Qualification",
      budget: "1.2B VND — 30%",
      message: "Consider a better gift — deliver the essence now.",
      tactics: [
        "Selective office sampling",
        "Preview Kit with sample, Tet mockup/sleeve, story card, QR catalog",
        "Office/HR/business KOC review",
        "B2B lead scoring + QR lead capture"
      ],
      channels: ["Office", "co-working spaces", "QR", "Zalo", "TikTok/Reels targeted", "Instagram", "selected booth", "email"]
    },
    {
      id: 3,
      name: "NOV",
      title: "Proposal, Negotiation & Deposit",
      budget: "1.56B VND — 39%",
      isPeak: true,
      message: "Complete sincerity under the nón lá.",
      tactics: [
        "Final Premium Tet Gift Box launch",
        "B2B proposal + pre-order/deposit",
        "Intent-based retargeting + quote lead form",
        "Final giftbox sample delivery",
        "Discount negotiation",
        "Google Search scale-up"
      ],
      channels: ["Catalog", "landing page", "sales deck", "direct sales", "Zalo OA / Email", "telesales", "Facebook/Instagram", "Google Search"]
    },
    {
      id: 4,
      name: "DEC",
      title: "Fulfillment, Last-call Orders & Reorder",
      budget: "600M VND — 15%",
      message: "Nón lá in hand — sending wishes rich with Vietnamese essence.",
      tactics: [
        "Selected premium retail pop-up",
        "Year-End Party corporate deals",
        "Remarketing + customer care",
        "Delivery timeline communication",
        "Referral/reorder offers"
      ],
      channels: ["Annam Gourmet", "Aeon", "Lotte", "Mega Market", "Direct B2B", "Facebook/Instagram", "Google Search", "Zalo OA / Email"]
    }
  ];

  const channelsData = [
    { name: "TikTok/Reels", role: "Selective awareness, storytelling, unboxing, and gift pain-point content.", roleColor: "text-[#F4B400]", why: "Useful for nón lá story, office gifting pain point, and product reveal; not the main closing channel." },
    { name: "Facebook/Instagram", role: "Retargeting, HR/SME community, catalog lead generation.", roleColor: "text-[#F4B400]", why: "Fits HR/Admin, SME owners, and office communities." },
    { name: "Google Search", role: "Capture high-intent demand.", roleColor: "text-white/85", why: "Searches like “corporate Tet gift”, “premium coffee gift”, and “Vietnamese premium gift” indicate active buying intent." },
    { name: "B2B Landing Page", role: "Convert interest into quote requests.", roleColor: "text-white/85", why: "Hosts catalog, combo tiers, quote form, budget selection, and sales follow-up." },
    { name: "Zalo OA / Email", role: "Nurture and close leads.", roleColor: "text-white", why: "Effective for B2B follow-up in Vietnam: pricing, quantity confirmation, delivery schedule, and deposit reminders." },
    { name: "KOC / UGC", role: "Build contextual trust.", roleColor: "text-white/75", why: "Office/HR/business KOC reviews reduce unknown-brand risk better than mass celebrities." },
    { name: "PR", role: "Credibility and premium positioning.", roleColor: "text-[#F4B400]", why: "Moves NONLA from “convenient coffee” into “premium Vietnamese gift” narrative." },
    { name: "Direct B2B", role: "Main closing engine for bulk orders and deposits.", roleColor: "text-white/85", why: "Needed to reach 9B B2B revenue because corporate orders require samples, proposal, quotes, discount negotiation, and 1:1 follow-up." }
  ];

  const legendItems = [
    { label: 'Paid Media', percentage: '28%', value: '1.12B', color: '#F4B400' },
    { label: 'Content Production', percentage: '11%', value: '0.44B', color: '#1A4DFF' },
    { label: 'KOC/UGC/PR', percentage: '10%', value: '0.40B', color: '#0033CC' },
    { label: 'B2B Sales Activation', percentage: '37%', value: '1.48B', color: '#8A9BB5' },
    { label: 'CRM / Landing / Tools', percentage: '6%', value: '0.24B', color: '#22C55E' },
    { label: 'Contingency', percentage: '8%', value: '0.32B', color: '#F5F7FA' }
  ];

  const donutData = {
    labels: [
      'Paid Media (28%)',
      'Content Production (11%)',
      'KOC/UGC/PR (10%)',
      'B2B Sales Activation (37%)',
      'CRM / Landing / Tools (6%)',
      'Contingency (8%)'
    ],
    datasets: [
      {
        data: [1.12, 0.44, 0.40, 1.48, 0.24, 0.32],
        backgroundColor: [
          '#F4B400', // Yellow
          '#1A4DFF', // Blue-mid
          '#0033CC', // Blue-primary
          '#8A9BB5', // Muted
          '#22C55E', // Green
          '#F5F7FA', // Gray
        ],
        borderWidth: 0,
      },
    ],
  };

  const donutOptions = {
    cutout: '75%',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        backgroundColor: 'rgba(10, 22, 40, 0.95)',
        titleColor: '#FFFFFF',
        bodyColor: '#FFFFFF',
        borderColor: 'rgba(255, 216, 77, 0.4)',
        borderWidth: 1,
        padding: 6,
        cornerRadius: 6,
        displayColors: false,
        bodyFont: { size: 10, weight: 'bold' },
        callbacks: {
          label: (context) => ` ${context.label.split(' ')[0]}: ${context.raw}B VND`
        }
      }
    }
  };

  const barData = {
    labels: ['Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Budget (Million VND)',
        data: [640, 1200, 1560, 600],
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

        {/* Phase Objective Flow */}
        <PhaseObjectiveFlow />

        {/* Channels Table (Desktop) / Card List (Mobile & Tablet) */}
        <div className="mb-16 glass-card overflow-hidden">
          <div className="p-6 border-b border-white/10 bg-white/5">
            <h3 className="text-lg font-bold text-white">Channel System</h3>
          </div>
          
          {/* Desktop view (lg and above) */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="p-4 text-[#8A9BB5] font-bold">Channel</th>
                  <th className="p-4 text-[#8A9BB5] font-bold">Role</th>
                  <th className="p-4 text-[#8A9BB5] font-bold">Why</th>
                </tr>
              </thead>
              <tbody className="text-white/80">
                {channelsData.map((chan, idx) => (
                  <tr key={idx} className="border-b border-white/5 hover:bg-white/5 last:border-b-0">
                    <td className="p-4 font-bold text-white"><ChannelChip name={chan.name} /></td>
                    <td className="p-4"><span className={chan.roleColor}>{chan.role}</span></td>
                    <td className="p-4">{chan.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile/Tablet view (below lg) */}
          <div className="lg:hidden p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {channelsData.map((chan, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-white/10 bg-white/[0.02] flex flex-col gap-3 hover:border-[#FFD84D]/30 transition-colors">
                <div className="flex justify-between items-center gap-2 border-b border-white/5 pb-2">
                  <ChannelChip name={chan.name} />
                  <span className={`text-xs font-bold ${chan.roleColor} whitespace-nowrap`}>{chan.role}</span>
                </div>
                <div className="text-xs text-white/70 mt-1 flex-1 flex flex-col justify-between">
                  <span className="font-bold text-white/40 uppercase block text-[9px] tracking-wider mb-1">Why:</span>
                  <p className="leading-relaxed text-white/90">{chan.why}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Channel Role Map */}
        <ChannelRoleMap />

        {/* Charts & Budget Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-8 mb-8" ref={chartRef}>
          <div className="glass-card p-4 lg:p-5 flex flex-col justify-between border border-[#FFD84D]/10 overflow-hidden">
            <h3 className="text-lg font-bold text-white mb-2">Budget Allocation by Sales-Led IMC Engine</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(180px,240px)_1fr] gap-6 xl:gap-8 items-center flex-1 py-2 pr-2 lg:pr-4">
              {/* Donut Chart Container */}
              <div className="relative w-full max-w-[210px] sm:max-w-[230px] lg:max-w-[240px] xl:max-w-[260px] aspect-square flex items-center justify-center mx-auto lg:mx-0">
                {chartInView && <Doughnut data={donutData} options={donutOptions} />}
                {chartInView && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10">
                    <span className="text-xl lg:text-2xl font-black text-white leading-none">4B</span>
                    <span className="text-[7.5px] lg:text-[8px] text-[#8A9BB5] font-black uppercase tracking-wider mt-0.5">TOTAL BUDGET</span>
                  </div>
                )}
              </div>

              {/* Custom Legend */}
              <div className="w-full flex flex-col gap-2 min-w-0">
                {legendItems.map((item, idx) => (
                  <div key={idx} className="grid grid-cols-[1.3fr_45px_60px] gap-2 items-center text-xs text-white/90 bg-white/[0.02] border border-white/5 px-2.5 py-1.5 rounded-lg hover:bg-white/5 transition-colors w-full">
                    {/* Column 1: Dot + Label */}
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }} />
                      <span className="font-bold truncate text-[11px] lg:text-xs">{item.label}</span>
                    </div>
                    {/* Column 2: Percentage */}
                    <div className="text-left font-black text-[#FFD84D] text-[11px] lg:text-xs">
                      {item.percentage}
                    </div>
                    {/* Column 3: Value */}
                    <div className="text-right font-mono text-white/60 text-[11px] lg:text-xs">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-xs text-[#8A9BB5] mt-4 text-center leading-relaxed">
              Budget shifts from mass awareness to B2B sales activation because B2B contributes 75% of the revenue target.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-white mb-4">Monthly Allocation</h3>
              <div className="h-48 w-full">
                {chartInView && <Bar data={barData} options={barOptions} />}
              </div>
              <p className="text-xs text-[#8A9BB5] mt-4 text-center max-w-2xl mx-auto leading-relaxed">
                <span className="text-[#F4B400] font-bold">Note:</span> November receives the highest budget because corporate buyers must shortlist vendors, approve budget, negotiate discounts, and place deposits before Tết. December focuses mainly on fulfillment, last-call orders, and reorder/referral.
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
                    <td className="py-2 px-4 text-right">28%</td>
                    <td className="py-2 px-4 text-right font-mono">1.12B VND</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 px-4">Content Production</td>
                    <td className="py-2 px-4 text-right">11%</td>
                    <td className="py-2 px-4 text-right font-mono">440M VND</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 px-4">KOC/UGC/PR</td>
                    <td className="py-2 px-4 text-right">10%</td>
                    <td className="py-2 px-4 text-right font-mono">400M VND</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 px-4">B2B Sales Activation</td>
                    <td className="py-2 px-4 text-right">37%</td>
                    <td className="py-2 px-4 text-right font-mono">1.48B VND</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 px-4">CRM / Landing / Tools</td>
                    <td className="py-2 px-4 text-right">6%</td>
                    <td className="py-2 px-4 text-right font-mono">240M VND</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 px-4">Contingency</td>
                    <td className="py-2 px-4 text-right">8%</td>
                    <td className="py-2 px-4 text-right font-mono">320M VND</td>
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

        {/* B2B Sales Activation Breakdown (Full Width Card) */}
        <div className="glass-card overflow-hidden mt-8 border border-[#FFD84D]/15">
          <div className="p-6 border-b border-white/10 bg-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <div>
              <h3 className="text-lg font-bold text-white">B2B Sales Activation Breakdown</h3>
              <p className="text-xs text-[#8A9BB5] mt-0.5">Budget shifts to active B2B conversion support to protect the 9B B2B revenue engine.</p>
            </div>
            <div className="px-4 py-1.5 bg-[#FFD84D]/10 rounded border border-[#FFD84D]/30 text-xs font-black text-[#FFD84D] font-mono">
              Total Support: 1.48B VND
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-white/15 bg-white/[0.02]">
                  <th className="py-3.5 px-4 font-bold text-[#8A9BB5] w-[220px]">Activation Item</th>
                  <th className="py-3.5 px-4 font-bold text-[#8A9BB5] text-right w-[110px]">Budget</th>
                  <th className="py-3.5 px-4 font-bold text-[#8A9BB5]">Role / Specific Description</th>
                </tr>
              </thead>
              <tbody className="text-white/80">
                <tr className="border-b border-white/5 hover:bg-white/[0.01]">
                  <td className="py-3 px-4 font-bold text-white">Preview Kit / Sample Kit</td>
                  <td className="py-3 px-4 text-right font-mono font-bold text-[#FFD84D]">620M</td>
                  <td className="py-3 px-4">2,000 small sample kits with coffee sample, Tet mockup/sleeve, story card, QR catalog.</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/[0.01]">
                  <td className="py-3 px-4 font-bold text-white">Final giftbox samples for hot leads</td>
                  <td className="py-3 px-4 text-right font-mono font-bold text-[#FFD84D]">300M</td>
                  <td className="py-3 px-4">600–700 complete Tet giftboxes for qualified hot leads.</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/[0.01]">
                  <td className="py-3 px-4 font-bold text-white">Direct mail & logistics</td>
                  <td className="py-3 px-4 text-right font-mono font-bold text-[#FFD84D]">160M</td>
                  <td className="py-3 px-4">Packaging, delivery, tracking sample receipt, issue handling.</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/[0.01]">
                  <td className="py-3 px-4 font-bold text-white">Office tasting / selected booth</td>
                  <td className="py-3 px-4 text-right font-mono font-bold text-[#FFD84D]">180M</td>
                  <td className="py-3 px-4">Office and HR/SME tasting activation.</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/[0.01]">
                  <td className="py-3 px-4 font-bold text-white">B2B Sales Collateral</td>
                  <td className="py-3 px-4 text-right font-mono font-bold text-[#FFD84D]">80M</td>
                  <td className="py-3 px-4">Sales deck, quotation template, B2B catalog to help HR/Admin present options to management.</td>
                </tr>
                <tr className="hover:bg-white/[0.01]">
                  <td className="py-3 px-4 font-bold text-white">Telesales & Zalo CRM</td>
                  <td className="py-3 px-4 text-right font-mono font-bold text-[#FFD84D]">140M</td>
                  <td className="py-3 px-4">Call, qualify, follow up, negotiate discount, close deposit/contract.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Phase-gate scaling checks */}
        <div className="glass-card p-6 mt-8 border border-[#FFD84D]/15 bg-[#0C1E36]/40">
          <h3 className="text-base uppercase tracking-widest text-[#FFD84D] font-black mb-4 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Phase-Gate Quality Standards (Scaling Controls)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-4 rounded-lg bg-white/[0.02] border border-white/5">
              <span className="font-bold text-[#FFD84D] block mb-1">September Gate</span>
              <p className="text-white/70 leading-relaxed">Scale only if account list, search traffic, catalog clicks, and lead form setup meet quality standards.</p>
            </div>
            <div className="p-4 rounded-lg bg-white/[0.02] border border-white/5">
              <span className="font-bold text-[#FFD84D] block mb-1">October Gate</span>
              <p className="text-white/70 leading-relaxed">Scale only if sample accepted, QR scan, MQL, and review/unboxing signals increase.</p>
            </div>
            <div className="p-4 rounded-lg bg-white/[0.02] border border-white/5">
              <span className="font-bold text-[#FFD84D] block mb-1">November Gate</span>
              <p className="text-white/70 leading-relaxed">Scale only if quote requests, quote-to-negotiation, negotiation-to-deposit, and net B2B revenue are clear.</p>
            </div>
            <div className="p-4 rounded-lg bg-white/[0.02] border border-white/5">
              <span className="font-bold text-[#FFD84D] block mb-1">December Gate</span>
              <p className="text-white/70 leading-relaxed">Focus on on-time delivery, last-call orders, B2C retail, reorder/referral, and protecting giver experience.</p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default IMCPlan;

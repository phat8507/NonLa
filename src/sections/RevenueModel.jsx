import React from 'react';
import { motion } from 'framer-motion';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import SectionWrapper from '../components/SectionWrapper';
import AnimatedCounter from '../components/AnimatedCounter';
import { CoffeeBeanField, CoffeeLeaf, MiniNonlaPack } from '../components/BrandDecor';
import { useInView } from 'react-intersection-observer';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const RevenueWaterfall = () => {
  const steps = [
    { label: "Marketing Budget", value: "4.0B", change: "start", height: 33.3, bottom: 0, color: "bg-[#1A4DFF]", desc: "Initial Investment" },
    { label: "B2B Revenue", value: "+9.0B", change: "plus", height: 75.0, bottom: 0, color: "bg-[#FFD84D]", desc: "300 orders × 30M" },
    { label: "B2C Revenue", value: "+3.0B", change: "plus", height: 25.0, bottom: 75.0, color: "bg-[#F4B400]", desc: "10,000 orders × 300k" },
    { label: "Revenue Target", value: "12.0B", change: "total", height: 100.0, bottom: 0, color: "bg-[#22C55E]", desc: "Target 3.0× ROAS" }
  ];

  return (
    <div className="glass-card p-6 border border-[#FFD84D]/20 mt-12 relative overflow-hidden">
      <h3 className="text-xl font-bold text-white mb-2">Revenue Waterfall & ROAS Bridge</h3>
      <p className="text-xs text-[#8A9BB5] mb-6">Visualizing how B2B corporate contracts and B2C retail orders scale our 4B budget to 12B revenue.</p>
      
      {/* Waterfall Display Area */}
      <div className="relative h-64 w-full border-b border-white/20 pb-2 select-none flex justify-between items-end gap-2 md:gap-4 px-2">
        {steps.map((step, idx) => {
          return (
            <div key={idx} className="flex-1 flex flex-col items-center h-full justify-end relative">
              {/* Value label on top of bar */}
              <div 
                className="absolute text-center z-10 w-full"
                style={{ bottom: `calc(${step.bottom + step.height}% + 8px)` }}
              >
                <span className="text-xs md:text-sm font-black text-white">{step.value}</span>
              </div>

              {/* Bar */}
              <div 
                className={`w-full max-w-[60px] rounded-t-md transition-all duration-500 hover:brightness-110 ${step.color} shadow-lg`}
                style={{ 
                  height: `${step.height}%`, 
                  marginBottom: `${step.bottom}%` 
                }}
              />
              
              {/* Connector line (Desktop only) */}
              {idx < steps.length - 1 && (
                <div 
                  className="absolute border-t border-dashed border-white/30 hidden md:block"
                  style={{
                    bottom: `${step.bottom + step.height}%`,
                    left: "50%",
                    width: "100%",
                    zIndex: 0
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
      
      {/* X Axis Labels */}
      <div className="flex justify-between mt-3 text-center px-2">
        {steps.map((step, idx) => (
          <div key={idx} className="flex-1 px-1">
            <span className="text-[10px] md:text-xs font-bold text-white block uppercase tracking-wider">{step.label}</span>
            <span className="text-[9px] text-[#8A9BB5] block mt-0.5 leading-tight">{step.desc}</span>
          </div>
        ))}
      </div>

      {/* Equations and details */}
      <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        <div>
          <span className="text-[9px] uppercase font-bold text-[#8A9BB5] tracking-wider block">Visible Formula</span>
          <p className="text-xs text-white/90 font-medium mt-1 font-mono">
            Revenue Target (12B) = B2B (300 × 30M = <span className="text-[#FFD84D] font-bold">9B</span>) + B2C (10,000 × 300k = <span className="text-[#FFD84D] font-bold">3B</span>)
          </p>
        </div>
        <div className="text-left md:text-right">
          <span className="text-[9px] uppercase font-bold text-[#8A9BB5] tracking-wider block">ROAS Bridge Target</span>
          <p className="text-xs text-white/90 font-medium mt-1">
            ROAS Target: <span className="text-[#FFD84D] font-bold">3.0×</span> on <span className="text-[#FFD84D] font-bold">4B Budget</span> (Conservative floor: 2.4× at -20% volume).
          </p>
        </div>
      </div>
    </div>
  );
};

const RevenueModel = () => {
  const { ref: chartRef, inView: chartInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: funnelRef, inView: funnelInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const stackedBarData = {
    labels: ['Revenue Breakdown'],
    datasets: [
      {
        label: 'B2B',
        data: [9],
        backgroundColor: '#F4B400',
        borderRadius: { topLeft: 8, bottomLeft: 8 },
        barPercentage: 0.5,
      },
      {
        label: 'B2C',
        data: [3],
        backgroundColor: '#1A4DFF',
        borderRadius: { topRight: 8, bottomRight: 8 },
        barPercentage: 0.5,
      },
    ],
  };

  const stackedBarOptions = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
        display: false,
        max: 12
      },
      y: {
        stacked: true,
        display: false
      }
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context) => ` ${context.dataset.label}: ${context.raw}B VND`
        }
      }
    }
  };

  const funnelSteps = [
    { value: "12B VND", label: "revenue target", isTop: true },
    { value: "300", label: "B2B orders needed", cvr: "35%", cvrLabel: "close rate" },
    { value: "860", label: "formal quotes", cvr: "55%", cvrLabel: "MQL→quote" },
    { value: "1,560", label: "MQL", cvr: "55%", cvrLabel: "raw→MQL" },
    { value: "2,840", label: "raw leads", cvr: "15%", cvrLabel: "traffic→lead" },
    { value: "19,000", label: "B2B landing page visits", isBottom: true }
  ];

  return (
    <SectionWrapper id="revenue" bgColor="#0A1628" bgText="REVENUE">
      <CoffeeBeanField count={6} />
      <CoffeeLeaf className="absolute left-8 top-28 opacity-25" />
      <CoffeeLeaf className="absolute right-6 bottom-28 opacity-20 rotate-180" />
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <span className="text-[#F4B400] text-sm font-bold tracking-widest uppercase">
            REVENUE MODEL
          </span>
          <div className="mt-4 hidden sm:block">
            <MiniNonlaPack label="ROAS" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 mb-12 lg:mb-16">
          {/* Left Column - Equations */}
          <div className="flex flex-col justify-center">
            <div className="glass-card p-6 md:p-8 relative overflow-hidden mb-6 border border-white/25">
              <div className="absolute top-0 right-0 w-32 h-32 non-la bg-white/5 -translate-y-10 translate-x-10"></div>
              
              <div className="space-y-6 font-mono relative z-10">
                <div className="flex justify-between items-center text-sm md:text-base border-b border-white/10 pb-4">
                  <span className="text-[#8A9BB5] font-bold">B2B:</span>
                  <div className="text-right text-white">
                    <span>300 orders</span>
                    <span className="text-[#8A9BB5] mx-2">×</span>
                    <span>30,000,000</span>
                    <span className="text-[#8A9BB5] mx-2">=</span>
                    <span className="text-[#FFD84D] font-bold">9,000,000,000</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center text-sm md:text-base border-b border-white/20 pb-4">
                  <span className="text-[#8A9BB5] font-bold">B2C:</span>
                  <div className="text-right text-white">
                    <span>10,000 orders</span>
                    <span className="text-[#8A9BB5] mx-2">×</span>
                    <span>300,000</span>
                    <span className="text-[#8A9BB5] mx-2">=</span>
                    <span className="text-[#FFD84D] font-bold">3,000,000,000</span>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-2 gap-4">
                  <div className="text-[#8A9BB5] font-bold text-lg">TOTAL:</div>
                  <div className="text-3xl md:text-4xl font-black text-[#F4B400]">
                    12,000,000,000 <span className="text-xl">VND</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-white/10 pt-6">
                <p className="text-xs text-[#8A9BB5] italic">
                  *Corporate AOV 30M = ~100 boxes × 300k (assumed group bulk purchase)
                </p>
                <div className="px-4 py-2 bg-[#F4B400] text-[#0A1628] font-black rounded-full text-sm inline-flex items-center shadow-[0_0_15px_rgba(244,180,0,0.4)]">
                  ROAS: 3.0×
                </div>
              </div>
            </div>

            <div className="glass-card p-6 border-l-4 border border-white/18 border-l-[#22C55E]" ref={chartRef}>
              <h4 className="text-white font-bold mb-4">Conservative Scenario</h4>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[#8A9BB5] text-sm mb-1">-20% volume scenario:</p>
                  <p className="text-2xl font-bold text-white">9.6B VND</p>
                </div>
                <div className="h-12 w-px bg-white/20 mx-4"></div>
                <div>
                  <p className="text-[#8A9BB5] text-sm mb-1">Adjusted ROAS:</p>
                  <p className="text-2xl font-bold text-white">2.4×</p>
                </div>
              </div>
              <div className="mt-4 flex items-center text-[#22C55E] text-sm font-bold bg-[#22C55E]/10 p-2 rounded w-fit">
                <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Still profitable
              </div>
            </div>
            
            <div className="mt-8 w-full h-12 relative">
              {chartInView && <Bar data={stackedBarData} options={stackedBarOptions} />}
              <div className="absolute inset-0 flex justify-between items-center px-4 pointer-events-none">
                <span className="text-xs font-bold text-[#0A1628]">B2B 9B</span>
                <span className="text-xs font-bold text-white mr-2">B2C 3B</span>
              </div>
            </div>
          </div>

          {/* Right Column - Funnel */}
          <div className="flex flex-col h-full" ref={funnelRef}>
            <h3 className="text-xl font-bold text-white mb-6 text-center">Reverse KPI Funnel (B2B)</h3>

            {/* 1. DESKTOP LAYOUT (lg and above) */}
            <div className="hidden lg:flex flex-col justify-between h-full space-y-4">
              <div className="grid grid-cols-2 gap-4 items-stretch">
                {/* Left Sub-column: Targets & Outcomes */}
                <div className="flex flex-col justify-between space-y-4">
                  <div className="text-center font-bold text-[10px] uppercase tracking-wider text-[#8A9BB5] border-b border-white/10 pb-1">
                    Target & Outcomes
                  </div>

                  {/* Revenue Target Card */}
                  <motion.div
                    className="glass-card p-4 flex flex-col justify-center items-center text-center border-l-4 border-l-[#F4B400] relative bg-white/5 hover:bg-white/10 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={funnelInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="block font-black text-2xl text-[#F4B400]">12B VND</span>
                    <span className="text-[10px] uppercase font-bold text-white/70 tracking-wider">Revenue Target</span>
                    <span className="text-[9px] text-[#8A9BB5] mt-1 italic">Start of Reverse Logic</span>
                  </motion.div>

                  {/* Connection AOV / share */}
                  <div className="flex flex-col items-center">
                    <div className="w-px h-4 bg-[#F4B400]/40"></div>
                    <div className="bg-[#0A1628] text-white/90 text-[9px] font-bold px-2.5 py-0.5 rounded-full border border-[#F4B400]/30 -my-2.5 z-10 whitespace-nowrap">
                      9B B2B Share (AOV 30M)
                    </div>
                    <div className="w-px h-4 bg-[#F4B400]/40"></div>
                  </div>

                  {/* Orders Card */}
                  <motion.div
                    className="glass-card p-4 flex flex-col justify-center items-center text-center border-l-4 border-l-[#1A4DFF] relative bg-white/5 hover:bg-white/10 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={funnelInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.15 }}
                  >
                    <span className="block font-black text-2xl text-white">300</span>
                    <span className="text-[10px] uppercase font-bold text-white/70 tracking-wider">B2B Orders Needed</span>
                    <span className="text-[9px] text-[#8A9BB5] mt-1">9B Revenue ÷ 30M AOV</span>
                  </motion.div>
                </div>

                {/* Right Sub-column: Lead Generation */}
                <div className="flex flex-col justify-between space-y-3">
                  <div className="text-center font-bold text-[10px] uppercase tracking-wider text-[#8A9BB5] border-b border-white/10 pb-1">
                    Lead-Gen Funnel Steps
                  </div>

                  {/* Card 3: Quotes */}
                  <motion.div
                    className="glass-card p-3 flex flex-col justify-center items-center text-center border border-white/10 relative bg-[#1A4DFF]/10 hover:bg-[#1A4DFF]/20 transition-colors"
                    initial={{ opacity: 0, x: 20 }}
                    animate={funnelInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <span className="block font-black text-lg text-white">860</span>
                    <span className="text-[10px] uppercase font-bold text-white/85 tracking-wider">Formal Quotes</span>
                    <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 bg-[#0A1628] text-[#F4B400] text-[9px] font-bold px-2 py-0.5 rounded-full border border-white/20 z-10 whitespace-nowrap">
                      ÷ 35% close rate
                    </div>
                  </motion.div>

                  {/* Card 4: MQL */}
                  <motion.div
                    className="glass-card p-3 flex flex-col justify-center items-center text-center border border-white/10 relative bg-[#1A4DFF]/10 hover:bg-[#1A4DFF]/20 transition-colors"
                    initial={{ opacity: 0, x: 20 }}
                    animate={funnelInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <span className="block font-black text-lg text-white">1,560</span>
                    <span className="text-[10px] uppercase font-bold text-white/85 tracking-wider">MQL</span>
                    <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 bg-[#0A1628] text-[#F4B400] text-[9px] font-bold px-2 py-0.5 rounded-full border border-white/20 z-10 whitespace-nowrap">
                      ÷ 55% MQL→quote
                    </div>
                  </motion.div>

                  {/* Card 5: Raw Leads */}
                  <motion.div
                    className="glass-card p-3 flex flex-col justify-center items-center text-center border border-white/10 relative bg-[#1A4DFF]/10 hover:bg-[#1A4DFF]/20 transition-colors"
                    initial={{ opacity: 0, x: 20 }}
                    animate={funnelInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <span className="block font-black text-lg text-white">2,840</span>
                    <span className="text-[10px] uppercase font-bold text-white/85 tracking-wider">Raw Leads</span>
                    <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 bg-[#0A1628] text-[#F4B400] text-[9px] font-bold px-2 py-0.5 rounded-full border border-white/20 z-10 whitespace-nowrap">
                      ÷ 55% raw→MQL
                    </div>
                  </motion.div>

                  {/* Card 6: Visits */}
                  <motion.div
                    className="glass-card p-3 flex flex-col justify-center items-center text-center border border-white/20 bg-white/5 hover:bg-white/10 transition-colors"
                    initial={{ opacity: 0, x: 20 }}
                    animate={funnelInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <span className="block font-black text-lg text-white">19,000</span>
                    <span className="text-[10px] uppercase font-bold text-white/85 tracking-wider">Landing Page Visits</span>
                    <span className="text-[9px] text-[#8A9BB5] mt-0.5">÷ 15% traffic→lead</span>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* 2. TABLET LAYOUT (md to lg) */}
            <div className="hidden md:max-lg:grid grid-cols-2 gap-4">
              {/* Card 1 */}
              <motion.div
                className="glass-card p-4 flex flex-col justify-center items-center text-center border-l-4 border-l-[#F4B400] bg-white/10"
                initial={{ opacity: 0, y: 10 }}
                animate={funnelInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4 }}
              >
                <span className="block font-black text-xl text-[#F4B400]">12B VND</span>
                <span className="text-[10px] uppercase font-bold text-white/85 tracking-wider">Revenue Target</span>
                <span className="text-[9px] text-white/70 mt-1">Total Target (B2B + B2C)</span>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                className="glass-card p-4 flex flex-col justify-center items-center text-center border-l-4 border-l-[#1A4DFF] bg-white/10 relative"
                initial={{ opacity: 0, y: 10 }}
                animate={funnelInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <span className="block font-black text-xl text-white">300</span>
                <span className="text-[10px] uppercase font-bold text-white/85 tracking-wider">B2B Orders Needed</span>
                <span className="text-[9px] text-white/70 mt-0.5">AOV 30M | B2B share 9B</span>
                <div className="absolute top-2 right-2 bg-[#0A1628]/95 text-[#F4B400] text-[8px] font-bold px-1.5 py-0.5 rounded border border-[#F4B400]/30">
                  35% Close Rate
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                className="glass-card p-4 flex flex-col justify-center items-center text-center border border-white/15 bg-[#1A4DFF]/20 relative"
                initial={{ opacity: 0, y: 10 }}
                animate={funnelInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <span className="block font-black text-xl text-white">860</span>
                <span className="text-[10px] uppercase font-bold text-white/85 tracking-wider">Formal Quotes</span>
                <div className="absolute top-2 right-2 bg-[#0A1628]/95 text-[#F4B400] text-[8px] font-bold px-1.5 py-0.5 rounded border border-[#F4B400]/30">
                  55% MQL→Quote
                </div>
              </motion.div>

              {/* Card 4 */}
              <motion.div
                className="glass-card p-4 flex flex-col justify-center items-center text-center border border-white/15 bg-[#1A4DFF]/20 relative"
                initial={{ opacity: 0, y: 10 }}
                animate={funnelInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <span className="block font-black text-xl text-white">1,560</span>
                <span className="text-[10px] uppercase font-bold text-white/85 tracking-wider">MQL</span>
                <div className="absolute top-2 right-2 bg-[#0A1628]/95 text-[#F4B400] text-[8px] font-bold px-1.5 py-0.5 rounded border border-[#F4B400]/30">
                  55% Raw→MQL
                </div>
              </motion.div>

              {/* Card 5 */}
              <motion.div
                className="glass-card p-4 flex flex-col justify-center items-center text-center border border-white/15 bg-[#1A4DFF]/20 relative"
                initial={{ opacity: 0, y: 10 }}
                animate={funnelInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <span className="block font-black text-xl text-white">2,840</span>
                <span className="text-[10px] uppercase font-bold text-white/85 tracking-wider">Raw Leads</span>
                <div className="absolute top-2 right-2 bg-[#0A1628]/95 text-[#F4B400] text-[8px] font-bold px-1.5 py-0.5 rounded border border-[#F4B400]/30">
                  15% Traffic→Lead
                </div>
              </motion.div>

              {/* Card 6 */}
              <motion.div
                className="glass-card p-4 flex flex-col justify-center items-center text-center border border-white/20 bg-white/10"
                initial={{ opacity: 0, y: 10 }}
                animate={funnelInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <span className="block font-black text-xl text-white">19,000</span>
                <span className="text-[10px] uppercase font-bold text-white/85 tracking-wider">Landing Page Visits</span>
                <span className="text-[9px] text-white/70 mt-1">Reverse Base Traffic</span>
              </motion.div>
            </div>

            {/* 3. MOBILE LAYOUT (below md) - Vertical but highly compacted */}
            <div className="block md:hidden space-y-1">
              {funnelSteps.map((step, idx) => {
                return (
                  <React.Fragment key={idx}>
                    <motion.div
                      className={`relative flex flex-col items-center justify-center py-1.5 px-3 text-center shadow-md border mx-auto w-[90%]
                        ${step.isTop ? 'bg-[#F4B400] text-[#0A1628] rounded-t-lg border-[#FFD84D]/30' : 
                          step.isBottom ? 'bg-white/10 border-white/20 text-white rounded-b-lg backdrop-blur-md' : 
                          'bg-[#1A4DFF]/30 border-white/20 text-white rounded'}
                      `}
                      initial={{ opacity: 0, y: 10 }}
                      animate={funnelInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                    >
                      <span className="block font-black text-sm leading-tight">{step.value}</span>
                      <span className={`text-[8.5px] uppercase font-bold leading-tight ${step.isTop ? 'text-[#0A1628]/80' : 'text-white/80'}`}>
                        {step.label}
                      </span>
                    </motion.div>

                    {step.cvr && (
                      <motion.div
                        className="flex flex-col items-center -my-1"
                        initial={{ opacity: 0 }}
                        animate={funnelInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                      >
                        <div className="flex items-center text-[8.5px] text-white/90 bg-[#0A1628] px-2 py-0.5 rounded-full border border-white/20 z-10">
                          <span className="text-[#FFD84D] font-extrabold mr-1">÷ {step.cvr}</span> 
                          <span>{step.cvrLabel}</span>
                        </div>
                      </motion.div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>

            {/* Shared Caption (Visible on all sizes) */}
            <div className="mt-4 p-3 bg-white/5 border border-white/10 rounded-lg text-center mx-auto w-[95%] lg:w-full">
              <p className="text-[10px] md:text-[11px] text-[#8A9BB5] leading-relaxed">
                <span className="font-bold text-[#F4B400]">Reverse KPI logic:</span> start from revenue target, then calculate required orders, quotes, MQL, raw leads, and visits.
              </p>
            </div>

            <p className="text-[10px] text-[#8A9BB5] text-center mt-3 italic">
              Conversion rates = B2B F&B benchmark — needs real-time validation
            </p>
          </div>
        </div>

        {/* Revenue Waterfall Chart */}
        <RevenueWaterfall />
      </div>
    </SectionWrapper>
  );
};

export default RevenueModel;

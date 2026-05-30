import React from 'react';
import { motion } from 'framer-motion';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import SectionWrapper from '../components/SectionWrapper';
import AnimatedCounter from '../components/AnimatedCounter';
import { CoffeeBeanField, CoffeeLeaf, MiniNonlaPack } from '../components/BrandDecor';
import { useInView } from 'react-intersection-observer';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Equations */}
          <div className="flex flex-col justify-center">
            <div className="glass-card p-8 relative overflow-hidden mb-8">
              <div className="absolute top-0 right-0 w-32 h-32 non-la bg-white/5 -translate-y-10 translate-x-10"></div>
              
              <div className="space-y-6 font-mono relative z-10">
                <div className="flex justify-between items-center text-sm md:text-base border-b border-white/10 pb-4">
                  <span className="text-[#8A9BB5] font-bold">B2B:</span>
                  <div className="text-right">
                    <span className="text-white"><AnimatedCounter end={300} /> orders</span>
                    <span className="text-[#8A9BB5] mx-2">×</span>
                    <span className="text-white"><AnimatedCounter end={30} suffix=",000,000" /></span>
                    <span className="text-[#8A9BB5] mx-2">=</span>
                    <span className="text-[#F4B400] font-bold"><AnimatedCounter end={9} suffix=",000,000,000" /></span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center text-sm md:text-base border-b border-white/20 pb-4">
                  <span className="text-[#8A9BB5] font-bold">B2C:</span>
                  <div className="text-right">
                    <span className="text-white"><AnimatedCounter end={10} suffix=",000" /> orders</span>
                    <span className="text-[#8A9BB5] mx-2">×</span>
                    <span className="text-white"><AnimatedCounter end={300} suffix=",000" /></span>
                    <span className="text-[#8A9BB5] mx-2">=</span>
                    <span className="text-[#F4B400] font-bold"><AnimatedCounter end={3} suffix=",000,000,000" /></span>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-2 gap-4">
                  <div className="text-[#8A9BB5] font-bold text-lg">TOTAL:</div>
                  <div className="text-3xl md:text-4xl font-black text-[#F4B400]">
                    <AnimatedCounter end={12} suffix=",000,000,000" /> <span className="text-xl">VND</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-white/10 pt-6">
                <p className="text-xs text-[#8A9BB5] italic">
                  *AOV corporate 30M = ~100 hộp × 300k (giả định nhóm)
                </p>
                <div className="px-4 py-2 bg-[#F4B400] text-[#0A1628] font-black rounded-full text-sm inline-flex items-center shadow-[0_0_15px_rgba(244,180,0,0.4)]">
                  ROAS: 3.0×
                </div>
              </div>
            </div>

            <div className="glass-card p-6 border-l-4 border-l-[#22C55E]" ref={chartRef}>
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
            
            <div className="flex-1 flex flex-col justify-between items-center py-4 relative">
              {funnelSteps.map((step, idx) => {
                const widthPercent = 100 - (idx * 12);
                
                return (
                  <React.Fragment key={idx}>
                    <motion.div 
                      className={`relative flex items-center justify-center py-3 px-6 text-center shadow-lg
                        ${step.isTop ? 'bg-[#F4B400] text-[#0A1628] rounded-t-lg' : 
                          step.isBottom ? 'bg-white/5 border border-white/20 text-white rounded-b-lg backdrop-blur-md' : 
                          'bg-[#1A4DFF] text-white rounded'}
                      `}
                      initial={{ width: 0, opacity: 0 }}
                      animate={funnelInView ? { width: `${widthPercent}%`, opacity: 1 } : {}}
                      transition={{ duration: 0.5, delay: idx * 0.3 }}
                      style={{ minWidth: '200px' }}
                    >
                      <div>
                        <span className="block font-black text-lg sm:text-xl">{step.value}</span>
                        <span className={`text-xs uppercase font-bold ${step.isTop ? 'text-[#0A1628]/70' : 'text-white/70'}`}>
                          {step.label}
                        </span>
                      </div>
                    </motion.div>

                    {step.cvr && (
                      <motion.div 
                        className="flex flex-col items-center my-2"
                        initial={{ opacity: 0, height: 0 }}
                        animate={funnelInView ? { opacity: 1, height: 'auto' } : {}}
                        transition={{ duration: 0.3, delay: (idx * 0.3) + 0.2 }}
                      >
                        <div className="w-px h-6 bg-white/20"></div>
                        <div className="flex items-center text-xs text-[#8A9BB5] bg-[#0A1628] px-2 py-0.5 rounded-full border border-white/10 z-10 -my-3">
                          <span className="text-[#F4B400] font-bold mr-1">÷ {step.cvr}</span> 
                          <span className="hidden sm:inline">{step.cvrLabel}</span>
                        </div>
                        <div className="w-px h-6 bg-white/20"></div>
                        <div className="w-2 h-2 rounded-full border border-white/20 bg-[#0A1628] -mt-1"></div>
                      </motion.div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
            
            <p className="text-xs text-[#8A9BB5] text-center mt-6 italic">
              Conversion rates = B2B F&B benchmark — needs real-time validation
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default RevenueModel;

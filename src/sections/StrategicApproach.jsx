import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';

const PillarToKPIMap = () => {
  const pillars = [
    {
      title: "ELEVATE",
      focus: "Perception & Pack",
      desc: "Educate on freeze-dried quality under the iconic Nón Lá design to reframe instant coffee cheapness.",
      kpis: [
        { label: "UGC Posts", target: "500+" },
        { label: "Engagement Rate", target: ">6%" }
      ],
      color: "border-[#F4B400]/30 text-[#F4B400] bg-[#F4B400]/5",
      badgeColor: "bg-[#F4B400] text-[#0A1628]",
      tag: "Perception"
    },
    {
      title: "EDUCATE",
      focus: "Salience & Presence",
      desc: "Deploy Facebook/TikTok unboxings, Meta targeting, and authority PR to build strong gift top-of-mind.",
      kpis: [
        { label: "Brand Awareness", target: "+25 pts" },
        { label: "Video Views", target: "3M" }
      ],
      color: "border-[#1A4DFF]/30 text-[#1A4DFF] bg-[#1A4DFF]/5",
      badgeColor: "bg-[#1A4DFF] text-white",
      tag: "Salience"
    },
    {
      title: "ENABLE",
      focus: "Conversion & Leads",
      desc: "Provide custom engraving, bulk quote engines, B2B CRM, and corporate sample kits to remove B2B friction.",
      kpis: [
        { label: "B2B Lead Volume", target: "200 Leads" },
        { label: "CVR / Ad ROAS Goal", target: ">3% / >3x" }
      ],
      color: "border-[#22C55E]/30 text-[#22C55E] bg-[#22C55E]/5",
      badgeColor: "bg-[#22C55E] text-white",
      tag: "Conversion"
    }
  ];

  return (
    <div className="glass-card p-6 md:p-8 border border-[#FFD84D]/25 mt-12 relative overflow-hidden select-none">
      <div className="absolute right-0 top-0 w-48 h-48 opacity-[0.03] pointer-events-none">
         <div className="w-full h-full bg-white rounded-full"></div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h3 className="text-2xl font-black text-white">Pillar-to-KPI Map</h3>
          <p className="text-xs text-[#8A9BB5] mt-1">Driving campaign outcomes from brand perception down to sales conversion.</p>
        </div>
        <div className="px-3 py-1 bg-[#F4B400]/10 rounded border border-[#F4B400]/30 text-xs font-bold text-[#FFD84D]">
          Strategic Framework
        </div>
      </div>

      {/* Horizontal Chevron/Funnel Path on Desktop */}
      <div className="hidden lg:flex justify-between items-center mb-10 relative px-16">
        <div className="absolute left-20 right-20 top-1/2 h-1 bg-gradient-to-r from-[#F4B400] via-[#1A4DFF] to-[#22C55E] -translate-y-1/2 z-0" />
        
        {pillars.map((p, idx) => (
          <div key={idx} className="relative z-10 flex flex-col items-center">
            <div className={`px-5 py-2 rounded-full font-black text-xs uppercase shadow-md ${p.badgeColor}`}>
              {p.tag}
            </div>
            {idx < 2 && (
              <div className="absolute left-[calc(100%+32px)] top-1/2 -translate-y-1/2 text-white/40 font-black text-lg">
                ➔
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        {pillars.map((p, idx) => (
          <div 
            key={idx} 
            className={`border rounded-2xl p-6 flex flex-col justify-between hover:scale-[1.02] transition-all duration-300 ${p.color}`}
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className={`px-2.5 py-0.5 rounded text-[10px] font-black uppercase tracking-wider ${p.badgeColor}`}>
                  {p.title}
                </span>
                <span className="text-white/40 text-xs font-black">Pillar 0{idx + 1}</span>
              </div>
              <h4 className="text-white text-lg font-bold mb-1">{p.focus}</h4>
              <p className="text-white/70 text-xs leading-relaxed mb-6">{p.desc}</p>
            </div>

            <div className="border-t border-white/10 pt-4 space-y-3.5">
              <span className="text-[10px] uppercase font-bold text-white/50 block tracking-wider">KPI Targets</span>
              {p.kpis.map((kpi, kIdx) => (
                <div key={kIdx} className="flex justify-between items-center text-xs bg-white/[0.03] border border-white/5 px-3 py-2 rounded-lg">
                  <span className="text-white/80">{kpi.label}</span>
                  <span className="font-mono font-black text-[#FFD84D]">{kpi.target}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

function StrategicApproach() {
  const [activeRow, setActiveRow] = useState(null);

  const sogs = [
    {
      id: 1,
      badge: "PRIMARY",
      badgeColor: "bg-[#F4B400]",
      borderColor: "border-[#F4B400]",
      title: "Own Corporate Tet Gifting",
      target: "Corporate buyers",
      logic: "High volume + repeat",
      barrier: "Brand trust",
      revenue: "9B VND (75%)"
    },
    {
      id: 2,
      badge: "SECONDARY",
      badgeColor: "bg-[#1A4DFF]",
      borderColor: "border-[#1A4DFF]",
      title: "Upgrade Urban Gift Buyers",
      target: "Urban gifters",
      logic: "Switch from chocolate/tea/baskets",
      barrier: "Price sensitivity",
      revenue: "3B VND (25%)"
    },
    {
      id: 3,
      badge: "LONG-TERM",
      badgeColor: "bg-[#8A9BB5]",
      borderColor: "border-[#8A9BB5]",
      title: "Vietnamese Coffee Souvenir",
      target: "Tourists + Overseas",
      logic: "freeze-dried = no equipment = travel-ready",
      barrier: "Distribution",
      revenue: "Seed market"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <SectionWrapper 
      id="strategy" 
      bgColor="#FFFFFF" 
      bgText="STRATEGY" 
      bgTextDark={true}
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-4">
          <span className="text-[#0033CC] text-sm font-bold tracking-widest uppercase">
            STRATEGY
          </span>
        </div>

        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A1628] leading-tight mb-4">
              <span className="text-[#F4B400]">REFRAME</span> — NONLA does not sell convenient coffee.<br/>
              NONLA sells <span className="italic font-normal">“a sheltered and shared Vietnam.”</span>
            </h2>
            <p className="text-xs text-[#8A9BB5] mt-1 font-bold">
              Vietnamese: “Một Việt Nam được che chở và trao đi”
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center justify-center gap-4 text-lg">
            <div className="px-6 py-3 bg-[#F5F7FA] text-[#8A9BB5] rounded-lg font-medium strike-through relative">
              <span className="line-through">Tasty / Convenient (Ngon / Tiện)</span>
            </div>
            <motion.div 
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 50, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-1 bg-[#F4B400] relative"
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 border-solid border-l-[#F4B400] border-l-[8px] border-y-transparent border-y-[6px] border-r-0"></div>
            </motion.div>
            <div className="px-6 py-3 bg-[#0A1628] text-white rounded-lg font-bold shadow-lg">
              Taste + Identity + Prestige (Gu + Bản sắc + Thể diện)
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <h3 className="text-2xl font-bold text-[#0A1628] mb-6">Strategic Opportunity Groups (SOG)</h3>
          
          <div className="flex flex-col gap-4">
            {sogs.map((sog) => (
              <motion.div 
                key={sog.id}
                variants={itemVariants}
                className={`glass-card-light cursor-pointer overflow-hidden transition-all duration-300 ${activeRow === sog.id ? `border-l-4 ${sog.borderColor}` : 'hover:border-l-4 border-[#0A1628]/10'}`}
                onClick={() => setActiveRow(activeRow === sog.id ? null : sog.id)}
              >
                <div className="p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="flex items-center gap-4">
                    <span className={`px-3 py-1 text-xs font-bold text-white rounded-full ${sog.badgeColor}`}>
                      {sog.badge}
                    </span>
                    <h4 className="text-xl font-bold text-[#0A1628]">{sog.title}</h4>
                  </div>
                  <div className="text-right w-full md:w-auto">
                    <span className="font-bold text-[#0A1628]">{sog.revenue}</span>
                    <span className="text-sm text-[#0033CC] ml-4 font-bold">
                      {activeRow === sog.id ? '−' : '+'}
                    </span>
                  </div>
                </div>
                
                <AnimatePresence>
                  {activeRow === sog.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="bg-white"
                    >
                      <div className="p-6 pt-0 border-t border-gray-100 mt-2 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <p className="text-xs text-[#8A9BB5] uppercase font-bold mb-1">Target</p>
                          <p className="text-[#0A1628]">{sog.target}</p>
                        </div>
                        <div>
                          <p className="text-xs text-[#8A9BB5] uppercase font-bold mb-1">Logic</p>
                          <p className="text-[#0A1628]">{sog.logic}</p>
                        </div>
                        <div>
                          <p className="text-xs text-[#8A9BB5] uppercase font-bold mb-1">Barrier</p>
                          <p className="text-[#0A1628]">{sog.barrier}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <div className="mt-8">
            <p className="text-sm text-[#8A9BB5] font-bold uppercase mb-2">Resource Allocation</p>
            <div className="h-6 w-full bg-[#F5F7FA] rounded-full overflow-hidden flex">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '70%' }}
                transition={{ duration: 1, delay: 0.2 }}
                className="h-full bg-[#F4B400] flex items-center justify-center text-[10px] font-bold text-white"
              >
                70%
              </motion.div>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '25%' }}
                transition={{ duration: 1, delay: 0.4 }}
                className="h-full bg-[#1A4DFF] flex items-center justify-center text-[10px] font-bold text-white"
              >
                25%
              </motion.div>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '5%' }}
                transition={{ duration: 1, delay: 0.6 }}
                className="h-full bg-[#8A9BB5] flex items-center justify-center text-[10px] font-bold text-white"
              >
                5%
              </motion.div>
            </div>
            <div className="flex justify-between text-xs text-[#8A9BB5] mt-2 px-2">
              <span>SOG1 (Primary)</span>
              <span>SOG2 (Secondary)</span>
              <span>SOG3 (Long-term)</span>
            </div>
          </div>
        </motion.div>

        <PillarToKPIMap />

        <motion.div 
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="bg-[#0A1628] rounded-xl p-8 text-white relative overflow-hidden">
            <div className="absolute right-0 top-0 w-64 h-64 opacity-5 pointer-events-none">
               <div className="w-full h-full non-la bg-white"></div>
            </div>
            
            <h3 className="text-xl font-bold text-[#F4B400] mb-6">KPI Dashboard</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="py-3 px-4 font-bold text-sm text-[#8A9BB5]">Pillar</th>
                    <th className="py-3 px-4 font-bold text-sm text-[#8A9BB5]">KPI</th>
                    <th className="py-3 px-4 font-bold text-sm text-[#8A9BB5]">Target</th>
                    <th className="py-3 px-4 font-bold text-sm text-[#8A9BB5]">How Measured</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4 font-bold text-[#F4B400]">ELEVATE</td>
                    <td className="py-3 px-4">UGC posts</td>
                    <td className="py-3 px-4 font-bold">500+</td>
                    <td className="py-3 px-4 text-white/70">TikTok + Instagram tracking</td>
                  </tr>
                  <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4 font-bold text-[#F4B400]">ELEVATE</td>
                    <td className="py-3 px-4">Engagement rate</td>
                    <td className="py-3 px-4 font-bold">&gt;6%</td>
                    <td className="py-3 px-4 text-white/70">Meta Business Suite</td>
                  </tr>
                  <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4 font-bold text-[#F4B400]">EDUCATE</td>
                    <td className="py-3 px-4">Brand awareness</td>
                    <td className="py-3 px-4 font-bold">+25 pts</td>
                    <td className="py-3 px-4 text-white/70">Brand lift study</td>
                  </tr>
                  <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4 font-bold text-[#F4B400]">EDUCATE</td>
                    <td className="py-3 px-4">Website traffic</td>
                    <td className="py-3 px-4 font-bold">50k visits</td>
                    <td className="py-3 px-4 text-white/70">Google Analytics</td>
                  </tr>
                  <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4 font-bold text-[#F4B400]">ENABLE</td>
                    <td className="py-3 px-4">B2B leads</td>
                    <td className="py-3 px-4 font-bold">200</td>
                    <td className="py-3 px-4 text-white/70">Landing page form</td>
                  </tr>
                  <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4 font-bold text-[#F4B400]">ENABLE</td>
                    <td className="py-3 px-4">Conversion rate</td>
                    <td className="py-3 px-4 font-bold">&gt;3%</td>
                    <td className="py-3 px-4 text-white/70">CRM tracking</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4 font-bold text-[#F4B400]">ENABLE</td>
                    <td className="py-3 px-4">Ad ROAS</td>
                    <td className="py-3 px-4 font-bold">&gt;3×</td>
                    <td className="py-3 px-4 text-white/70">Ad platform + sales data</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default StrategicApproach;

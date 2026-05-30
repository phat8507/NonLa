import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';

const StrategicApproach = () => {
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
              NONLA sells <span className="italic font-normal">"một Việt Nam được che chở và trao đi."</span>
            </h2>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center justify-center gap-4 text-lg">
            <div className="px-6 py-3 bg-[#F5F7FA] text-[#8A9BB5] rounded-lg font-medium strike-through relative">
              <span className="line-through">Ngon / Tiện</span>
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
              Có gu + Bản sắc + An toàn thể diện
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

        <motion.div 
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <h3 className="text-2xl font-bold text-[#0A1628] mb-6">3 Strategic Pillars</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pillar 1 */}
            <motion.div variants={itemVariants} className="glass-card-light p-6">
              <h4 className="text-xl font-black text-[#0033CC] uppercase mb-2 tracking-wide">Elevate</h4>
              <p className="font-bold text-[#0A1628] mb-4">Nón lá + freeze-dried education</p>
              <div className="mb-4">
                <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded font-bold">Barrier</span>
                <p className="text-sm mt-2 text-[#0A1628]/70">Format skepticism + packaging credibility</p>
              </div>
              <div className="space-y-3 mt-6">
                <div>
                  <div className="flex justify-between text-xs mb-1 font-bold text-[#0A1628]">
                    <span>UGC Posts</span>
                    <span>500+</span>
                  </div>
                  <div className="h-2 bg-[#F5F7FA] rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} transition={{ duration: 1, delay: 0.5 }} className="h-full bg-[#F4B400]"></motion.div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1 font-bold text-[#0A1628]">
                    <span>Engagement Rate</span>
                    <span>&gt;6%</span>
                  </div>
                  <div className="h-2 bg-[#F5F7FA] rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} transition={{ duration: 1, delay: 0.7 }} className="h-full bg-[#F4B400]"></motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Pillar 2 */}
            <motion.div variants={itemVariants} className="glass-card-light p-6">
              <h4 className="text-xl font-black text-[#0033CC] uppercase mb-2 tracking-wide">Educate</h4>
              <p className="font-bold text-[#0A1628] mb-4">Meta presence + TikTok + PR</p>
              <div className="mb-4">
                <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded font-bold">Barrier</span>
                <p className="text-sm mt-2 text-[#0A1628]/70">Brand awareness gap</p>
              </div>
              <div className="space-y-3 mt-6">
                <div>
                  <div className="flex justify-between text-xs mb-1 font-bold text-[#0A1628]">
                    <span>Brand Awareness</span>
                    <span>+25 pts</span>
                  </div>
                  <div className="h-2 bg-[#F5F7FA] rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} transition={{ duration: 1, delay: 0.6 }} className="h-full bg-[#F4B400]"></motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Pillar 3 */}
            <motion.div variants={itemVariants} className="glass-card-light p-6">
              <h4 className="text-xl font-black text-[#0033CC] uppercase mb-2 tracking-wide">Enable</h4>
              <p className="font-bold text-[#0A1628] mb-4">B2B landing page + CRM</p>
              <div className="mb-4">
                <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded font-bold">Barrier</span>
                <p className="text-sm mt-2 text-[#0A1628]/70">B2B conversion friction</p>
              </div>
              <div className="space-y-3 mt-6">
                <div>
                  <div className="flex justify-between text-xs mb-1 font-bold text-[#0A1628]">
                    <span>B2B Leads</span>
                    <span>200</span>
                  </div>
                  <div className="h-2 bg-[#F5F7FA] rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} transition={{ duration: 1, delay: 0.7 }} className="h-full bg-[#F4B400]"></motion.div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1 font-bold text-[#0A1628]">
                    <span>CVR / ROAS</span>
                    <span>&gt;3% / &gt;3×</span>
                  </div>
                  <div className="h-2 bg-[#F5F7FA] rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} transition={{ duration: 1, delay: 0.9 }} className="h-full bg-[#F4B400]"></motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

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
                    <td className="py-3 px-4">ROAS</td>
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

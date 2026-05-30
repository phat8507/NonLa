import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';

const RiskMitigation = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <SectionWrapper 
      id="risk" 
      bgColor="#F5F7FA" 
      bgText="RISK" 
      bgTextDark={true}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-12">
          <span className="text-[#0033CC] text-sm font-bold tracking-widest uppercase">
            RISK & MITIGATION
          </span>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Card 1 */}
          <motion.div variants={cardVariants} className="glass-card-light relative overflow-hidden flex flex-col h-full">
            <div className="h-1 w-full bg-gradient-to-r from-red-500 to-orange-400"></div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <span className="text-4xl font-black text-[#0A1628]/10">01</span>
              </div>
              
              <h3 className="text-2xl font-bold text-[#0A1628] mb-4">Brand Trust Gap</h3>
              
              <div className="mb-6 flex-1">
                <h4 className="text-xs uppercase font-bold text-red-500 mb-2 tracking-wider">Why Dangerous</h4>
                <p className="text-[#0A1628]/80 text-sm leading-relaxed">
                  Corporate buyers avoid unknown brands at Tet.
                </p>
              </div>
              
              <div className="bg-[#22C55E]/10 p-4 rounded-lg border border-[#22C55E]/20">
                <h4 className="text-xs uppercase font-bold text-[#22C55E] mb-2 tracking-wider flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Mitigation
                </h4>
                <p className="text-[#0A1628]/90 text-sm font-medium">
                  Sample kit program + B2B proof system + PR authority
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={cardVariants} className="glass-card-light relative overflow-hidden flex flex-col h-full">
            <div className="h-1 w-full bg-gradient-to-r from-orange-400 to-amber-400"></div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <span className="text-4xl font-black text-[#0A1628]/10">02</span>
              </div>
              
              <h3 className="text-2xl font-bold text-[#0A1628] mb-4">Format Stigma</h3>
              
              <div className="mb-6 flex-1">
                <h4 className="text-xs uppercase font-bold text-orange-500 mb-2 tracking-wider">Why Dangerous</h4>
                <p className="text-[#0A1628]/80 text-sm leading-relaxed">
                  Perception undermines premium positioning ("instant = cheap").
                </p>
              </div>
              
              <div className="bg-[#22C55E]/10 p-4 rounded-lg border border-[#22C55E]/20">
                <h4 className="text-xs uppercase font-bold text-[#22C55E] mb-2 tracking-wider flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Mitigation
                </h4>
                <p className="text-[#0A1628]/90 text-sm font-medium mb-2">
                  Packaging + storytelling (K Coffee, Hạt A precedent)
                </p>
                <p className="text-xs italic text-[#0A1628]/60 border-l-2 border-[#22C55E] pl-2">
                  "This is a packaging problem, not a product problem"
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={cardVariants} className="glass-card-light relative overflow-hidden flex flex-col h-full">
            <div className="h-1 w-full bg-gradient-to-r from-amber-400 to-yellow-400"></div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-4xl font-black text-[#0A1628]/10">03</span>
              </div>
              
              <h3 className="text-2xl font-bold text-[#0A1628] mb-4">Tet Delivery Failure</h3>
              
              <div className="mb-6 flex-1">
                <h4 className="text-xs uppercase font-bold text-yellow-600 mb-2 tracking-wider">Why Dangerous</h4>
                <p className="text-[#0A1628]/80 text-sm leading-relaxed">
                  Gifter loses face if gift arrives late.
                </p>
              </div>
              
              <div className="bg-[#22C55E]/10 p-4 rounded-lg border border-[#22C55E]/20">
                <h4 className="text-xs uppercase font-bold text-[#22C55E] mb-2 tracking-wider flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Mitigation
                </h4>
                <p className="text-[#0A1628]/90 text-sm font-medium">
                  Close B2B orders by Nov 30 + 10% inventory buffer + proactive delivery timeline communication
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default RiskMitigation;

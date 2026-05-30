import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';

const RiskMatrix = () => {
  return (
    <div className="glass-card p-6 flex flex-col h-full border border-[#FFD84D]/20">
      <h3 className="text-xl font-bold text-white mb-2">Risk Matrix</h3>
      <p className="text-xs text-[#8A9BB5] mb-6">Qualitative strategic scoring based on B2B Tet market entry friction.</p>
      
      <div className="relative flex-1 flex flex-col justify-center items-center select-none py-4">
        {/* Matrix Plot Area */}
        <div className="relative w-full max-w-[280px] aspect-square border-l-2 border-b-2 border-white/20 flex flex-col justify-between">
          
          {/* Background Grid Cells / Zones */}
          <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-1 p-1">
            {/* Row 1 (High Impact) */}
            <div className="bg-[#1A4DFF]/5 rounded border border-white/5"></div>
            <div className="bg-[#FFD84D]/5 rounded border border-[#FFD84D]/10"></div>
            <div className="bg-red-500/10 rounded border border-red-500/20"></div>
            
            {/* Row 2 (Medium Impact) */}
            <div className="bg-blue-950/20 rounded border border-white/5"></div>
            <div className="bg-[#FFD84D]/5 rounded border border-[#FFD84D]/10"></div>
            <div className="bg-[#FFD84D]/10 rounded border border-[#FFD84D]/20"></div>
            
            {/* Row 3 (Low Impact) */}
            <div className="bg-blue-950/40 rounded border border-white/5"></div>
            <div className="bg-blue-950/20 rounded border border-white/5"></div>
            <div className="bg-[#1A4DFF]/5 rounded border border-white/5"></div>
          </div>

          {/* Plotted Risk Nodes */}
          {/* Tet Delivery Failure: Likelihood Low (1), Impact High (3) -> Left-Top */}
          <div className="absolute left-[16.6%] top-[16.6%] -translate-x-1/2 -translate-y-1/2 group z-20">
            <div className="w-5 h-5 rounded-full bg-[#FFD84D] border-2 border-[#0A1628] shadow-lg flex items-center justify-center cursor-pointer hover:scale-125 transition-transform">
              <span className="text-[10px] font-black text-[#0A1628]">03</span>
            </div>
            <div className="absolute left-6 top-1/2 -translate-y-1/2 bg-[#0A1628] text-white border border-[#FFD84D]/30 px-2 py-1 rounded text-[10px] font-bold whitespace-nowrap hidden md:block opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
              Tet Delivery Failure (Impact: High, Likelihood: Low)
            </div>
          </div>

          {/* Format Stigma: Likelihood Medium (2), Impact Medium (2) -> Center */}
          <div className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 group z-20">
            <div className="w-5 h-5 rounded-full bg-[#1A4DFF] border-2 border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-125 transition-transform">
              <span className="text-[10px] font-black text-white">02</span>
            </div>
            <div className="absolute left-6 top-1/2 -translate-y-1/2 bg-[#0A1628] text-white border border-[#1A4DFF]/30 px-2 py-1 rounded text-[10px] font-bold whitespace-nowrap hidden md:block opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
              Format Stigma (Impact: Med, Likelihood: Med)
            </div>
          </div>

          {/* Brand Trust Gap: Likelihood High (3), Impact High (3) -> Right-Top */}
          <div className="absolute left-[83.3%] top-[16.6%] -translate-x-1/2 -translate-y-1/2 group z-30">
            <div className="relative w-6 h-6 rounded-full bg-red-500 border-2 border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-125 transition-transform">
              <span className="text-[10px] font-black text-white">01</span>
              {/* Pulsating glow */}
              <span className="absolute -inset-1.5 rounded-full border-2 border-red-500 animate-ping opacity-60"></span>
            </div>
            <div className="absolute right-7 top-1/2 -translate-y-1/2 bg-[#0A1628] text-white border border-red-500/30 px-2 py-1 rounded text-[10px] font-bold whitespace-nowrap hidden md:block opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
              🔥 Brand Trust Gap (Impact: High, Likelihood: High) - CRITICAL
            </div>
          </div>

          {/* Grid labels inside */}
          <div className="absolute left-1.5 top-2 text-[8px] font-bold text-white/72 uppercase tracking-wider">High Impact</div>
          <div className="absolute left-1.5 bottom-2 text-[8px] font-bold text-white/72 uppercase tracking-wider">Low Impact</div>
          <div className="absolute right-2 bottom-2 text-[8px] font-bold text-white/72 uppercase tracking-wider">High Likelihood</div>

        </div>

        {/* X and Y Axis Titles */}
        <div className="w-full max-w-[280px] flex justify-between text-[9px] font-bold text-white/84 mt-2 px-1">
          <span>Low Likelihood</span>
          <span>Medium</span>
          <span>High Likelihood</span>
        </div>
      </div>
      
      <div className="mt-4 border-t border-white/10 pt-4 space-y-2">
        <div className="flex items-center text-xs text-white/80">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500 mr-2 inline-block"></span>
          <span className="font-bold text-white mr-1">01. Brand Trust Gap</span> (Critical Highlight)
        </div>
        <div className="flex items-center text-xs text-white/80">
          <span className="w-2.5 h-2.5 rounded-full bg-[#1A4DFF] mr-2 inline-block"></span>
          <span className="font-bold text-white mr-1">02. Format Stigma</span>
        </div>
        <div className="flex items-center text-xs text-white/80">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFD84D] mr-2 inline-block"></span>
          <span className="font-bold text-white mr-1">03. Tet Delivery Failure</span>
        </div>
      </div>
    </div>
  );
};

const MitigationTimeline = () => {
  const steps = [
    {
      month: "Sep",
      title: "Sample Kit + B2B Proof",
      mitigates: "Brand Trust Gap",
      desc: "Deploy physical sample kits and early B2B proof directly to HR leads.",
      status: "Prep Phase"
    },
    {
      month: "Oct",
      title: "Packaging + Storytelling",
      mitigates: "Format Stigma",
      desc: "Introduce high-end premium rigid box styling. Dispel cheap perception.",
      status: "Launch Phase"
    },
    {
      month: "Nov",
      title: "B2B Conversion Peak",
      mitigates: "Conversion Peak",
      desc: "Lock in corporate volume. Close custom engraving orders by Nov 30.",
      status: "Peak Phase"
    },
    {
      month: "Dec",
      title: "Inventory & Logistics",
      mitigates: "Tet Delivery Failure",
      desc: "Maintain 10% inventory buffer. Execute last-mile delivery timeline communication.",
      status: "Fulfillment"
    }
  ];

  return (
    <div className="glass-card p-6 md:p-8 col-span-1 md:col-span-2 border border-[#FFD84D]/20">
      <h3 className="text-xl font-bold text-white mb-2">Mitigation Timeline</h3>
      <p className="text-xs text-[#8A9BB5] mb-8">Strategic phasing of mitigations to address risks before they impact key milestones.</p>
      
      {/* Horizontal on Desktop, Vertical on Mobile */}
      <div className="flex flex-col md:flex-row justify-between items-stretch gap-6 relative">
        {/* Connector Line (Desktop Only) */}
        <div className="absolute top-8 left-4 right-4 h-0.5 bg-gradient-to-r from-[#FFD84D]/40 via-[#1A4DFF]/40 to-[#FFD84D]/40 hidden md:block z-0"></div>
        
        {steps.map((step, index) => (
          <div key={index} className="flex-1 flex flex-col items-start relative z-10 bg-white/[0.03] md:bg-transparent p-4 md:p-0 rounded-xl border border-white/5 md:border-none">
            {/* Step Marker */}
            <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-2 mb-3">
              <span className="w-8 h-8 rounded-full bg-[#FFD84D] text-[#0A1628] font-black text-sm flex items-center justify-center shadow-lg shadow-[#FFD84D]/20">
                {step.month}
              </span>
              <span className="text-[10px] font-black uppercase text-[#FFD84D] tracking-widest">{step.status}</span>
            </div>
            
            <h4 className="text-sm font-bold text-white mb-1.5">{step.title}</h4>
            <p className="text-xs text-[#8A9BB5] leading-relaxed mb-3">{step.desc}</p>
            
            <div className="mt-auto pt-2 border-t border-white/10 w-full">
              <span className="text-[9px] uppercase font-bold text-white/50 block">Mitigates:</span>
              <span className="text-[10px] font-bold text-[#FFD84D]">{step.mitigates}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const RiskPrioritySummary = () => {
  return (
    <div className="glass-card p-6 border border-[#FFD84D]/20 border-l-4 border-l-[#FFD84D] flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
      <div className="flex-1">
        <h3 className="text-lg font-bold text-white mb-3">Risk Priority Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <span className="text-[9px] uppercase font-bold text-[#8A9BB5] tracking-wider block">Highest Impact Risk</span>
            <p className="text-sm text-white/90 mt-1 font-medium">
              <span className="text-[#FFD84D] font-bold">Brand Trust Gap</span> (B2B Tet buyers avoid unknown brands).
            </p>
          </div>
          <div>
            <span className="text-[9px] uppercase font-bold text-[#8A9BB5] tracking-wider block">Fastest Mitigation</span>
            <p className="text-sm text-white/90 mt-1 font-medium">
              <span className="text-[#FFD84D] font-bold">Sample kit + B2B proof system</span> (delivers direct trust proof).
            </p>
          </div>
          <div>
            <span className="text-[9px] uppercase font-bold text-[#8A9BB5] tracking-wider block">Residual Risk Level</span>
            <p className="text-sm text-white/90 mt-1 font-medium">
              Managed to <span className="text-[#FFD84D] font-bold">Low</span> after active storytelling & delivery timeline controls.
            </p>
          </div>
        </div>
      </div>
      
      <div className="text-right border-t border-white/10 md:border-none pt-4 md:pt-0 w-full md:w-auto">
        <span className="text-[9px] uppercase font-bold text-[#8A9BB5] tracking-wider block">Reference Strategy</span>
        <span className="text-xs font-bold text-[#FFD84D] mt-1 block">B2B Tet Gifting Standard</span>
      </div>
    </div>
  );
};

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
      bgColor="#0A1628" 
      bgText="RISK" 
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-12">
          <span className="text-[#FFD84D] text-sm font-bold tracking-widest uppercase">
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
          <motion.div variants={cardVariants} className="glass-card relative overflow-hidden flex flex-col h-full border border-[#FFD84D]/15 bg-navy-card">
            <div className="h-1 w-full bg-gradient-to-r from-red-500 to-orange-400"></div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-full bg-red-500/15 border border-red-500/40 flex items-center justify-center !text-red-400">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <span className="text-4xl font-black !text-white/45">01</span>
              </div>
              
              <h3 className="text-2xl font-bold !text-white mb-4">Brand Trust Gap</h3>
              
              <div className="mb-6 flex-1">
                <h4 className="text-xs uppercase font-bold !text-red-400 mb-2 tracking-wider">Why Dangerous</h4>
                <p className="!text-white/85 text-sm leading-relaxed">
                  Corporate buyers avoid unknown brands at Tet.
                </p>
              </div>
              
              <div className="bg-[#22C55E]/15 p-4 rounded-lg border border-[#22C55E]/30">
                <h4 className="text-xs uppercase font-bold !text-[#22C55E] mb-2 tracking-wider flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Mitigation
                </h4>
                <p className="!text-white/95 text-sm font-medium">
                  Sample kit program + B2B proof system + PR authority
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={cardVariants} className="glass-card relative overflow-hidden flex flex-col h-full border border-[#FFD84D]/15 bg-navy-card">
            <div className="h-1 w-full bg-gradient-to-r from-orange-400 to-amber-400"></div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-full bg-orange-500/15 border border-orange-500/40 flex items-center justify-center !text-orange-400">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <span className="text-4xl font-black !text-white/45">02</span>
              </div>
              
              <h3 className="text-2xl font-bold !text-white mb-4">Format Stigma</h3>
              
              <div className="mb-6 flex-1">
                <h4 className="text-xs uppercase font-bold !text-orange-400 mb-2 tracking-wider">Why Dangerous</h4>
                <p className="!text-white/85 text-sm leading-relaxed">
                  Perception undermines premium positioning ("instant = cheap").
                </p>
              </div>
              
              <div className="bg-[#22C55E]/15 p-4 rounded-lg border border-[#22C55E]/30">
                <h4 className="text-xs uppercase font-bold !text-[#22C55E] mb-2 tracking-wider flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Mitigation
                </h4>
                <p className="!text-white/95 text-sm font-medium mb-2">
                  Packaging + storytelling (K Coffee, Hạt A precedent)
                </p>
                <p className="text-xs italic !text-white/85 border-l-2 border-[#22C55E] pl-2 bg-white/5 py-1 pr-1">
                  "This is a packaging problem, not a product problem"
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={cardVariants} className="glass-card relative overflow-hidden flex flex-col h-full border border-[#FFD84D]/15 bg-navy-card">
            <div className="h-1 w-full bg-gradient-to-r from-amber-400 to-yellow-400"></div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-full bg-yellow-500/15 border border-yellow-500/40 flex items-center justify-center !text-yellow-400">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-4xl font-black !text-white/45">03</span>
              </div>
              
              <h3 className="text-2xl font-bold !text-white mb-4">Tet Delivery Failure</h3>
              
              <div className="mb-6 flex-1">
                <h4 className="text-xs uppercase font-bold !text-yellow-400 mb-2 tracking-wider">Why Dangerous</h4>
                <p className="!text-white/85 text-sm leading-relaxed">
                  Gifter loses face if gift arrives late.
                </p>
              </div>
              
              <div className="bg-[#22C55E]/15 p-4 rounded-lg border border-[#22C55E]/30">
                <h4 className="text-xs uppercase font-bold !text-[#22C55E] mb-2 tracking-wider flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Mitigation
                </h4>
                <p className="!text-white/95 text-sm font-medium">
                  Close B2B orders by Nov 30 + 10% inventory buffer + proactive delivery timeline communication
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Analytical Section */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <RiskMatrix />
          <MitigationTimeline />
        </div>
        
        <div className="mt-8">
          <RiskPrioritySummary />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default RiskMitigation;

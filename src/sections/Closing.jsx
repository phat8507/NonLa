import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';

const Closing = () => {
  const sources = [
    "Statista", "NIQ 2025", "Decision Lab", "Q&Me", "Intage 2021", 
    "CHUS 2025", "Vietnam News", "YouNet Media", "Kantar", "Pregis", 
    "Worldpanel", "Insight Asia", "Grab Tet Report", "Meta", "Novaon"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <SectionWrapper id="closing" bgColor="#0A1628" className="min-h-screen flex flex-col justify-between pt-24 pb-8">
      <div className="max-w-4xl mx-auto w-full text-center relative z-10 flex-1 flex flex-col justify-center">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-2 tracking-tight">
            Dưới bóng nón lá
          </motion.h2>
          <motion.h2 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-black text-[#F4B400] tracking-tight">
            trọn tinh túy Việt.
          </motion.h2>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="flex flex-col gap-4 mb-16 text-left max-w-3xl mx-auto"
        >
          <motion.div variants={itemVariants} className="glass-card p-6 border-l-4 border-l-[#F4B400] flex items-start">
            <span className="text-[#F4B400] mr-4 mt-1">●</span>
            <p className="text-lg text-white">The category has no leader — the Tet window is open</p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="glass-card p-6 border-l-4 border-l-[#F4B400] flex items-start">
            <span className="text-[#F4B400] mr-4 mt-1">●</span>
            <p className="text-lg text-white">NONLA has the product, the insight, and the campaign</p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="glass-card p-6 border-l-4 border-l-[#F4B400] flex items-start">
            <span className="text-[#F4B400] mr-4 mt-1">●</span>
            <p className="text-lg text-white">One perception shift: from 'convenient' to 'the gift that protects both Vietnamese identity and the gifter's image'</p>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <div className="inline-block px-6 py-3 bg-white/5 border border-white/10 rounded-full">
            <p className="text-[#8A9BB5] font-medium">Team SHIFT | YFC Future Leaders Program 2026 | Round 2</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="mb-16"
        >
          <h4 className="text-xs uppercase tracking-widest text-[#8A9BB5] mb-4 font-bold">Research Sources</h4>
          <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
            {sources.map((source, idx) => (
              <span key={idx} className="px-3 py-1 bg-white/5 border border-white/5 rounded text-xs text-[#8A9BB5]">
                {source}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Central Non La Art */}
        <div className="relative flex justify-center items-center mt-12 h-64">
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-[300px] h-[350px] absolute -bottom-20 z-0"
          >
            <div 
              className="w-full h-full non-la bg-gradient-to-b from-[#F4B400] to-[#FFD84D]"
              style={{ boxShadow: '0 0 100px rgba(244,180,0,0.4)' }}
            ></div>
          </motion.div>
        </div>
      </div>

      <div className="w-full text-center mt-auto relative z-20">
        <p className="text-xs text-[#8A9BB5]/50">© 2026 Team SHIFT — YFC Future Leaders Program</p>
      </div>
    </SectionWrapper>
  );
};

export default Closing;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';

const BigIdea = () => {
  const [activeCard, setActiveCard] = useState(null);

  const territories = [
    {
      id: 1,
      title: "Mở Hộp, Mở Vị",
      subtitle: "Product unboxing",
      funnel: "TOFU",
      detail: "Focus on product discovery, first taste experience, unboxing content"
    },
    {
      id: 2,
      title: "Mở Lòng Tết Này",
      subtitle: "Emotional gifting",
      funnel: "MOFU",
      detail: "Emotional connection, Tet traditions, gifting meaning"
    },
    {
      id: 3,
      title: "Dấu Ấn Doanh Nghiệp",
      subtitle: "B2B corporate",
      funnel: "BOFU",
      detail: "Corporate gifting solutions, bulk ordering, brand customization"
    },
    {
      id: 4,
      title: "Việt Nam Trong Tay Bạn",
      subtitle: "Overseas gifting",
      funnel: "Long-term",
      detail: "International gifting, Vietnamese diaspora, souvenir market"
    }
  ];

  return (
    <SectionWrapper id="big-idea" bgColor="#0A1628" bgText="BIG IDEA" className="p-0">
      <div className="flex flex-col lg:flex-row w-full min-h-screen">
        {/* Left Half */}
        <div className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white mb-2">
              TRỌN TINH TÚY VIỆT
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#F4B400] mb-12">
              DƯỚI BÓNG NÓN LÁ
            </h3>

            <div className="relative flex justify-center items-center my-16">
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-[250px] h-[250px] relative"
              >
                <div 
                  className="absolute inset-0 non-la bg-gradient-to-b from-[#F4B400] to-[#FFD84D]"
                  style={{ boxShadow: '0 0 80px rgba(244,180,0,0.3)' }}
                ></div>
              </motion.div>
            </div>

            <div className="flex justify-center mt-8">
              <div className="border border-[#F4B400] rounded-full px-6 py-3 bg-[#F4B400]/10 backdrop-blur-sm">
                <p className="text-[#F4B400] font-bold text-lg md:text-xl text-center">
                  Che chở bản sắc, thăng hoa ân tình
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Half */}
        <div className="w-full lg:w-1/2 p-8 lg:p-16 bg-gradient-to-br from-[#0033CC] to-[#1A4DFF] flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-card p-6 md:p-8 mb-8">
              <h4 className="text-2xl font-bold mb-6 text-white text-center border-b border-white/20 pb-4">
                "Che chở" — The Protective Umbrella
              </h4>
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex-1 text-center">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h5 className="font-bold text-[#F4B400] mb-1">Công nghệ</h5>
                  <p className="text-sm text-white/80">Freeze-drying shelters flavor</p>
                </div>
                
                <div className="hidden md:block w-px h-16 bg-white/20"></div>
                
                <div className="flex-1 text-center">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3">
                    <div className="w-6 h-6 non-la bg-white"></div>
                  </div>
                  <h5 className="font-bold text-[#F4B400] mb-1">Thiết kế</h5>
                  <p className="text-sm text-white/80">Pod shelters coffee</p>
                </div>
                
                <div className="hidden md:block w-px h-16 bg-white/20"></div>
                
                <div className="flex-1 text-center">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h5 className="font-bold text-[#F4B400] mb-1">Thể diện</h5>
                  <p className="text-sm text-white/80">Shelters gifter's face</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 mb-8 flex items-start gap-4">
              <div className="text-2xl mt-1">↑</div>
              <div>
                <h5 className="font-bold text-[#F4B400] mb-2">"Thăng hoa" = Sublimation</h5>
                <p className="text-white/90 text-sm">
                  In Vietnamese, 'thăng hoa' = sublimation = freeze-drying.<br />
                  The key message is written into the product technology itself.
                </p>
              </div>
            </div>

            <div className="border border-white/20 rounded-xl p-5 bg-white/5 mb-12">
              <p className="text-sm text-white/80 leading-relaxed">
                No competitor uses nón lá as a <strong className="text-[#F4B400]">metaphor</strong>. Everyone uses it as decoration. NONLA owns the meaning — not just the image.
              </p>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-widest text-white/60 mb-4">Campaign Territories</h4>
              <div className="flex flex-col gap-3">
                {territories.map((t) => (
                  <div 
                    key={t.id}
                    className={`glass-card p-4 cursor-pointer transition-all ${activeCard === t.id ? 'border-t-4 border-t-[#F4B400] bg-white/10' : 'hover:bg-white/5'}`}
                    onClick={() => setActiveCard(activeCard === t.id ? null : t.id)}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-xs text-[#F4B400] font-bold mr-2">0{t.id}</span>
                        <span className="font-bold text-white">{t.title}</span>
                      </div>
                      <span className="text-xs px-2 py-1 bg-white/10 rounded-full text-white/70">{t.funnel}</span>
                    </div>
                    <AnimatePresence>
                      {activeCard === t.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-3 mt-3 border-t border-white/10">
                            <p className="text-sm text-white/80">{t.detail}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default BigIdea;

"use client";
// Force re-compile to fix Turbopack cache issue

import React from 'react';
import { Users, ShieldCheck, Target, Megaphone, Star, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const SponsorFeatures = [
  { icon: Users, title: 'Showcase your brand to', highlight: '10,000+ targeted visitors' },
  { icon: Megaphone, title: 'Multi-channel promotion', highlight: '(digital + on-ground)' },
  { icon: ShieldCheck, title: 'Build authority in the', highlight: 'organic & natural ecosystem' },
  { icon: Star, title: 'Premium branding across', highlight: 'expo touchpoints' },
  { icon: Target, title: 'Direct access to', highlight: 'decision-makers & buyers' },
  { icon: Globe, title: 'Global exposure &', highlight: 'networking opportunities' }
];

const BecomeSponsor = () => {
  return (
    <section className="w-full bg-white relative px-2 lg:px-11 py-2 lg:py-6 overflow-hidden border-y border-gray-100 shadow-sm">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#F2B40E]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#3b8c2a]/5 rounded-full blur-3xl pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

      <div className="w-full  relative z-10">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-1 lg:gap-2">

          {/* LEFT: CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="flex-1 w-full text-center xl:text-left flex flex-col items-center xl:items-start"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#f4fbf6] border border-[#3b8c2a]/20 rounded-full mb-4 shadow-sm transition-all duration-300 hover:shadow-md hover:bg-[#ebf8ee]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F2B40E] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#F2B40E]"></span>
              </span>
              <span className="text-[12px] md:text-[13px] font-bold text-[#3b8c2a] tracking-widest uppercase">Sponsorship Opportunities Open</span>
            </div>

            <h2 className="text-[18px] md:text-[28px] lg:text-[32px] font-semibold text-[#0b2912] leading-[1.1] mb-4 tracking-tight uppercase font-poppins">
              BECOME A {" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b8c2a] to-[#256618]">SPONSOR</span>
            </h2>

            <div className="inline-block bg-[#F2B40E]/10 border-l-4 border-[#F2B40E] px-5 py-3 mb-5 rounded-r-lg shadow-[0_4px_15px_rgba(242,180,14,0.05)]">
              <p className="text-[14px] md:text-[15px] font-bold text-[#0b2912] uppercase tracking-wider leading-[1.4]">
                Position your brand at the forefront of the organic industry
              </p>
            </div>

            <p className="text-[15px] md:text-[16px] text-gray-600 font-medium leading-[1.7] max-w-[500px]">
              Partner with <strong className="text-[#3b8c2a]">Bharat Organic Expo 2027</strong> and unlock premium visibility, strategic connections, and unmatched business opportunities with global industry leaders, key decision-makers, and prominent eco-conscious buyers. Elevate your brand presence in Asia's most rapidly expanding organic and natural products market.
            </p>
          </motion.div>

          {/* CENTER: IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full xl:w-[380px] shrink-0 relative flex justify-center py-2"
          >

            <div className="relative w-full max-w-[300px] xl:max-w-[320px] aspect-square rounded-[1.5rem] overflow-hidden shadow-2xl border-[4px] border-white z-20 group">
              <img
                src="https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800&auto=format&fit=crop&q=80"
                alt="Exhibition Stall"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b2912]/90 via-[#0b2912]/20 to-transparent"></div>

              {/* Overlay Text */}
              <div className="absolute bottom-5 left-5 right-5 text-left transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="inline-block px-2 py-0.5 bg-[#F2B40E] text-[#0b2912] text-[12px] font-black uppercase tracking-wider rounded-sm mb-1.5">
                  Premium Booths
                </div>
                <p className="text-white font-black text-[18px] md:text-[20px] leading-tight drop-shadow-md">
                  STRONGER TOGETHER FOR A HEALTHIER TOMORROW
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: FEATURES LIST */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex-1 w-full  bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#0b2912] via-[#154726] to-[#0b2912] text-white p-2.5 md:px-4 md:py-2 text-center relative overflow-hidden shrink-0 border-b-2 border-[#F2B40E]">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:10px_10px]"></div>
              <h3 className="text-[15px] md:text-[17px] font-semibold uppercase tracking-widest relative z-10 text-white drop-shadow-md">
                WHY SPONSOR <span className="text-[#F2B40E]">BHARAT ORGANIC EXPO?</span>
              </h3>
            </div>

            {/* Grid */}
            <div className="p-2 md:px-3 md:py-2 grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 bg-[#f8fcf9] flex-grow">
              {SponsorFeatures.map((feature, idx) => (
                <div key={idx} className="bg-white border border-[#e6f2e8] rounded-2xl p-2 md:px-2 md:py-3 flex flex-row items-center gap-3 hover:shadow-[0_8px_25px_rgba(0,100,59,0.08)] hover:border-[#3b8c2a]/40 transition-all duration-300 group cursor-default">
                  <div className="w-5 h-5 md:w-8 md:h-8 rounded-xl bg-[#f4fbf6] border border-[#e6f2e8] flex items-center justify-center shrink-0 group-hover:bg-[#F2B40E] group-hover:border-[#F2B40E] transition-colors duration-300 shadow-sm">
                    <feature.icon className="w-3 h-3 text-[#3b8c2a] group-hover:text-[#0b2912] transition-colors duration-300" strokeWidth={2} />
                  </div>
                  <div className="flex flex-col flex-1">
                    <span className="text-[11.5px] md:text-[12px] text-gray-500 font-medium leading-[1.3] mb-0.5">{feature.title}</span>
                    <span className="text-[13px] md:text-[14px] text-[#0b2912] font-semibold leading-[1.2]">{feature.highlight}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default BecomeSponsor;

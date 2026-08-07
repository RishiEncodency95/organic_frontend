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
    <section className="w-full bg-white relative px-2 lg:px-11 py-1 lg:py-2 overflow-hidden border-y border-gray-100 shadow-sm">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#F2B40E]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#3b8c2a]/5 rounded-full blur-3xl pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

      <div className="max-w-[1500px] mx-auto  relative z-10">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-6 xl:gap-8">
          
          {/* LEFT: CONTENT */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="flex-1 w-full text-center xl:text-left flex flex-col items-center xl:items-start"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#3b8c2a]/30 rounded-full mb-3 shadow-sm">
              <Star className="w-3 h-3 text-[#F2B40E]" fill="#F2B40E" />
              <span className="text-[9.5px] md:text-[10px] font-black text-[#0b2912] tracking-wider uppercase">Sponsorship Opportunities Open</span>
            </div>
            
            <h2 className="text-[32px] md:text-[42px] font-black text-[#0b2912] leading-[1.05] mb-2.5 tracking-tight uppercase">
              BECOME A <br className="hidden xl:block" />
              <span className="text-[#3b8c2a]">SPONSOR</span>
            </h2>
            
            <div className="inline-block bg-[#F2B40E] px-2.5 py-1 mb-3 rounded-sm shadow-sm transform -rotate-1">
              <p className="text-[10.5px] md:text-[11.5px] font-black text-[#0b2912] uppercase tracking-wide">
                POSITION YOUR BRAND AT THE FOREFRONT OF THE ORGANIC INDUSTRY
              </p>
            </div>
            
            <p className="text-[11.5px] md:text-[12.5px] text-gray-600 font-medium leading-relaxed max-w-[450px]">
              Partner with <strong className="text-[#3b8c2a]">Bharat Organic Expo 2027</strong> and unlock premium visibility, strategic connections and unmatched business opportunities with industry leaders and decision-makers.
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
             {/* Left side green accent shape to mimic the reference curve */}
             <div className="absolute -left-3 top-2 bottom-2 w-12 bg-[#3b8c2a] rounded-l-full z-10 hidden xl:block shadow-lg"></div>
             
             <div className="relative w-full max-w-[340px] aspect-[16/9] xl:aspect-[16/10] rounded-[1.5rem] overflow-hidden shadow-2xl border-[4px] border-white z-20 group">
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
                 <div className="inline-block px-2 py-0.5 bg-[#F2B40E] text-[#0b2912] text-[9px] font-black uppercase tracking-wider rounded-sm mb-1.5">
                   Premium Booths
                 </div>
                 <p className="text-white font-black text-[15px] leading-tight drop-shadow-md">
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
            className="flex-1 w-full max-w-[550px] mx-auto xl:max-w-none bg-white rounded-[1.25rem] shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-100 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#3b8c2a] text-white p-2.5 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:10px_10px]"></div>
              <h3 className="text-[13px] md:text-[14px] font-black uppercase tracking-widest relative z-10 text-[#F2B40E]">
                WHY SPONSOR <span className="text-white">BHARAT ORGANIC EXPO?</span>
              </h3>
            </div>
            
            {/* Grid */}
            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4">
              {SponsorFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5 group">
                  <div className="w-8 h-8 rounded-full bg-[#f4fbf6] border border-[#3b8c2a]/20 flex items-center justify-center shrink-0 group-hover:bg-[#3b8c2a] group-hover:border-[#3b8c2a] transition-colors duration-300 shadow-sm mt-0.5">
                    <feature.icon className="w-3.5 h-3.5 text-[#3b8c2a] group-hover:text-white transition-colors duration-300" strokeWidth={2.5} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] md:text-[11px] text-gray-600 font-medium leading-tight mb-0.5">{feature.title}</span>
                    <span className="text-[10.5px] md:text-[11.5px] text-[#0b2912] font-black leading-tight">{feature.highlight}</span>
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

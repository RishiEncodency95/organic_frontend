"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  Trophy, Zap, Users, Mic, UserCheck,
  Contact, Leaf, MonitorPlay, Calendar,
  Star, Download, MessageCircle, PhoneCall,
  ChevronDown, Target, Globe, ShieldCheck
} from 'lucide-react';

const SponsorTypes = [
  {
    title: 'TITLE SPONSOR',
    desc: 'Maximum visibility & brand exclusivity',
    icon: Trophy,
    color: 'text-yellow-500',
    bg: 'bg-yellow-50',
    borderColor: 'border-yellow-400',
    exclusive: true
  },
  {
    title: 'POWERED BY SPONSOR',
    desc: 'Align your brand as the power behind BOE',
    icon: Zap,
    color: 'text-[#3b8c2a]',
    bg: 'bg-[#f4fbf6]',
    borderColor: 'border-gray-200'
  },
  {
    title: 'ASSOCIATE SPONSOR',
    desc: 'High-impact visibility & brand recognition',
    icon: Users,
    color: 'text-[#3b8c2a]',
    bg: 'bg-[#f4fbf6]',
    borderColor: 'border-gray-200'
  },
  {
    title: 'CONFERENCE SPONSOR',
    desc: 'Brand association with knowledge sessions',
    icon: Mic,
    color: 'text-[#3b8c2a]',
    bg: 'bg-[#f4fbf6]',
    borderColor: 'border-gray-200'
  },
  {
    title: 'REGISTRATION SPONSOR',
    desc: 'High brand recall at every entry point',
    icon: UserCheck,
    color: 'text-[#3b8c2a]',
    bg: 'bg-[#f4fbf6]',
    borderColor: 'border-gray-200'
  },
  {
    title: 'LANYARD SPONSOR',
    desc: 'Put your brand around every neck',
    icon: Contact,
    color: 'text-[#3b8c2a]',
    bg: 'bg-[#f4fbf6]',
    borderColor: 'border-gray-200'
  },
  {
    title: 'ORGANIC ZONE SPONSOR',
    desc: 'Showcase your brand in the experience zone',
    icon: Leaf,
    color: 'text-[#3b8c2a]',
    bg: 'bg-[#f4fbf6]',
    borderColor: 'border-gray-200'
  },
  {
    title: 'DIGITAL PARTNER',
    desc: 'Expand your reach across digital platforms',
    icon: MonitorPlay,
    color: 'text-[#3b8c2a]',
    bg: 'bg-[#f4fbf6]',
    borderColor: 'border-gray-200'
  },
  {
    title: 'NETWORKING SPONSOR',
    desc: 'Connect your brand during high-value interactions',
    icon: Calendar,
    color: 'text-[#3b8c2a]',
    bg: 'bg-[#f4fbf6]',
    borderColor: 'border-gray-200'
  },
  {
    title: 'INTERNATIONAL SPONSOR',
    desc: 'Lead the global organic trade discussion',
    icon: Globe,
    color: 'text-[#3b8c2a]',
    bg: 'bg-[#f4fbf6]',
    borderColor: 'border-gray-200'
  },
  {
    title: 'VIP LOUNGE SPONSOR',
    desc: 'Exclusive visibility among top decision makers',
    icon: Star,
    color: 'text-[#3b8c2a]',
    bg: 'bg-[#f4fbf6]',
    borderColor: 'border-gray-200'
  },
  {
    title: 'AWARDS SPONSOR',
    desc: 'Recognize and align with industry excellence',
    icon: Target,
    color: 'text-[#3b8c2a]',
    bg: 'bg-[#f4fbf6]',
    borderColor: 'border-gray-200'
  }
];

const SponsorshipCategories = () => {
  return (
    <section className="w-full bg-[#EFF7EE] relative px-2 lg:px-11 py-4 lg:py-6 overflow-hidden border-b border-gray-100">
      <div className="max-w-[1500px] mx-auto relative z-10">

        {/* HEADER */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-[1px] w-12 bg-[#3b8c2a]/30"></div>
          <Leaf className="w-4 h-4 text-[#3b8c2a]" />
          <h2 className="text-[16px] md:text-[20px] font-black text-[#0b2912] uppercase tracking-widest">
            SPONSORSHIP OPPORTUNITIES
          </h2>
          <Leaf className="w-4 h-4 text-[#3b8c2a] scale-x-[-1]" />
          <div className="h-[1px] w-12 bg-[#3b8c2a]/30"></div>
        </div>

        {/* TOP GRID: CATEGORIES */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
          {SponsorTypes.map((sponsor, idx) => {
            // Softened pastel gradients and colors
            const multiColors = [
              { bg: 'from-orange-50 via-orange-50/50 to-red-50', text: 'text-orange-400', border: 'border-orange-100', strip: 'from-orange-200 via-red-200 to-rose-300' },
              { bg: 'from-blue-50 via-cyan-50/50 to-teal-50', text: 'text-blue-400', border: 'border-blue-100', strip: 'from-blue-200 via-cyan-200 to-teal-300' },
              { bg: 'from-fuchsia-50 via-purple-50/50 to-pink-50', text: 'text-purple-400', border: 'border-purple-100', strip: 'from-fuchsia-200 via-purple-200 to-pink-300' },
              { bg: 'from-emerald-50 via-green-50/50 to-teal-50', text: 'text-emerald-400', border: 'border-emerald-100', strip: 'from-emerald-200 via-green-200 to-teal-300' },
              { bg: 'from-rose-50 via-pink-50/50 to-red-50', text: 'text-rose-400', border: 'border-rose-100', strip: 'from-rose-200 via-pink-200 to-red-300' },
              { bg: 'from-indigo-50 via-blue-50/50 to-cyan-50', text: 'text-indigo-400', border: 'border-indigo-100', strip: 'from-indigo-200 via-blue-200 to-cyan-300' },
              { bg: 'from-lime-50 via-green-50/50 to-emerald-50', text: 'text-lime-500', border: 'border-lime-100', strip: 'from-lime-300 via-green-300 to-emerald-300' },
              { bg: 'from-cyan-50 via-sky-50/50 to-blue-50', text: 'text-cyan-400', border: 'border-cyan-100', strip: 'from-cyan-200 via-sky-200 to-blue-300' },
            ];
            const colorTheme = multiColors[idx % multiColors.length];

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="bg-white rounded-xl p-3 flex flex-col items-center text-center justify-between border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden min-h-[160px]"
              >
                {/* Vivid Multi-color Gradient Bottom Border */}
                <div className={`absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r ${colorTheme.strip} group-hover:h-[6px] transition-all duration-300`}></div>

                {sponsor.exclusive && (
                  <div className="absolute top-0 right-0 bg-yellow-400 text-black text-[9px] md:text-[10px] font-black px-2 py-0.5 rounded-bl-md uppercase tracking-wider z-10">
                    Exclusive
                  </div>
                )}

                <div className={`w-12 h-12 rounded-full mb-2 flex items-center justify-center relative overflow-hidden shadow-inner border bg-gradient-to-br ${colorTheme.bg} ${colorTheme.border}`}>
                  <sponsor.icon className={`w-6 h-6 relative z-10 ${colorTheme.text} group-hover:scale-110 transition-transform duration-300`} strokeWidth={1.5} />
                </div>

                <h4 className="text-[14px] md:text-[15px] font-bold text-gray-900 leading-[1.1] mb-1 uppercase tracking-wide group-hover:text-black transition-colors z-10 relative">
                  {sponsor.title}
                </h4>
                <p className="text-[13px] md:text-[14px] text-gray-500 leading-[1.3] font-medium z-10 relative">
                  {sponsor.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM SECTION: SPLIT LAYOUT */}
        <div className="flex flex-col lg:flex-row gap-4">

          {/* LEFT: INFO & STATS */}
          <div className="flex-1 flex flex-col gap-3">
            {/* Alert Banner */}
            <div className="bg-[#f2f8f4] border border-[#3b8c2a]/20 rounded-xl p-3 flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="w-10 h-10 rounded bg-[#0b2912] flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-[14px] font-black text-[#0b2912] uppercase leading-tight">LIMITED SPONSORSHIP SLOTS AVAILABLE</h4>
                  <p className="text-[13px] md:text-[14px] text-gray-600 font-medium leading-tight">Secure your category before it's gone!</p>
                </div>
              </div>
              <div className="hidden sm:block w-[1px] h-10 bg-gray-300"></div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded bg-white flex items-center justify-center shrink-0 border border-gray-200">
                  <Star className="w-4 h-4 text-[#3b8c2a]" />
                </div>
                <p className="text-[13px] md:text-[14px] text-gray-700 font-medium leading-snug max-w-[200px]">
                  Featured sponsors get exclusive media coverage & brand promotions.
                </p>
              </div>
            </div>

            {/* Dark Green Box EXACT REPLICA */}
            <div className="rounded-[24px] relative overflow-hidden flex-1 shadow-lg flex min-h-[300px] bg-[#0b2912]">
              {/* Background Image on Right */}
              <div className="absolute top-0 right-0 bottom-0 w-[50%] z-0">
                <img src="https://th-i.thgim.com/public/incoming/z6bs2x/article69071875.ece/alternates/FREE_1200/IMG_iStock-1488883191.jp_2_1_55C17SK5.jpg"

                  className="w-full h-full object-cover"
                  alt="Bharat Organic Expo - B2B Exhibition and Conference"
                />
                {/* Bottom decorative wave line on the image */}
                <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-black/70 to-transparent pointer-events-none"></div>
              </div>

              {/* Full-width SVG Overlay for Gradient and Curve */}
              <div className="absolute inset-0 w-full h-full z-10 pointer-events-none">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
                  <defs>
                    <linearGradient id="brandGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0b2912" />
                      <stop offset="100%" stopColor="#3b8c2a" />
                    </linearGradient>
                  </defs>
                  {/* Draws the left background and curves gracefully inwards on the right */}
                  <path d="M0,0 L75,0 C55,30 55,70 70,100 L0,100 Z" fill="url(#brandGradient)" />
                </svg>
              </div>

              {/* GO ORGANIC GO BETTER Badge */}
              <div className="absolute bottom-4 right-5 border border-white/30 rounded-full px-4 py-1.5 flex items-center gap-2 bg-black/40 backdrop-blur-md z-20">
                <Leaf className="w-5 h-5 text-[#F2B40E]" strokeWidth={1.5} />
                <span className="text-[11px] font-bold text-white uppercase leading-tight tracking-wider text-center">
                  GO ORGANIC<br />GO BETTER
                </span>
              </div>

              {/* Content on Left (relative z-20) */}
              <div className="relative z-20 p-5 lg:p-6 w-full lg:w-[55%] flex flex-col justify-between pointer-events-auto">
                <div>
                  <h3 className="text-[22px] lg:text-[28px] font-black text-white uppercase leading-[1.1] mb-2 tracking-tight">
                    ELEVATE YOUR BRAND PRESENCE <br />
                    <span className="text-[#F2B40E]">AT BHARAT ORGANIC EXPO 2027</span>
                  </h3>
                  <p className="text-[14px] lg:text-[15px] text-gray-300 font-medium leading-relaxed max-w-[360px] mb-4">
                    meaningful connections and grow your business with India's biggest organic show.
                  </p>
                </div>

                {/* Stats 2x2 Grid */}
                <div className="grid grid-cols-2 gap-y-2 gap-x-2 mb-4 mt-1">
                  <div className="flex w-full items-center gap-2.5 bg-white/5 border border-white/10 rounded-lg px-3 py-2 hover:bg-white/10 transition-colors">
                    <div className="w-8 h-8 rounded-full border border-[#F2B40E] flex items-center justify-center shrink-0">
                      <Users className="w-4 h-4 text-[#F2B40E]" strokeWidth={2} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[15px] md:text-[16px] font-bold text-white leading-none mb-0.5">10,000+</span>
                      <span className="text-[12px] font-medium text-gray-400 leading-tight">Visitors / Delegates</span>
                    </div>
                  </div>
                  <div className="flex w-full items-center gap-2.5 bg-white/5 border border-white/10 rounded-lg px-3 py-2 hover:bg-white/10 transition-colors">
                    <div className="w-8 h-8 rounded-full border border-[#F2B40E] flex items-center justify-center shrink-0">
                      <Target className="w-4 h-4 text-[#F2B40E]" strokeWidth={2} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[15px] md:text-[16px] font-bold text-white leading-none mb-0.5">200+</span>
                      <span className="text-[12px] font-medium text-gray-400 leading-tight">Exhibitors</span>
                    </div>
                  </div>
                  <div className="flex w-full items-center gap-2.5 bg-white/5 border border-white/10 rounded-lg px-3 py-2 hover:bg-white/10 transition-colors">
                    <div className="w-8 h-8 rounded-full border border-[#F2B40E] flex items-center justify-center shrink-0">
                      <Globe className="w-4 h-4 text-[#F2B40E]" strokeWidth={2} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[15px] md:text-[16px] font-bold text-white leading-none mb-0.5">1,000+</span>
                      <span className="text-[12px] font-medium text-gray-400 leading-tight">Global Buyers</span>
                    </div>
                  </div>
                  <div className="flex w-full items-center gap-2.5 bg-white/5 border border-white/10 rounded-lg px-3 py-2 hover:bg-white/10 transition-colors">
                    <div className="w-8 h-8 rounded-full border border-[#F2B40E] flex items-center justify-center shrink-0">
                      <Zap className="w-4 h-4 text-[#F2B40E]" strokeWidth={2} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[15px] md:text-[16px] font-bold text-white leading-none mb-0.5">Unlimited</span>
                      <span className="text-[12px] font-medium text-gray-400 leading-tight">Opportunities</span>
                    </div>
                  </div>
                </div>

                {/* Buttons horizontally aligned */}
                <div className="flex flex-nowrap items-center gap-2 mt-auto w-full">
                  <button className="flex items-center justify-center gap-1.5 px-3 lg:px-4 py-2 border border-[#3b8c2a]/80 hover:border-[#3b8c2a] rounded-full text-white hover:bg-[#3b8c2a]/10 transition-colors flex-1 min-w-0">
                    <Download className="w-3.5 h-3.5 shrink-0" />
                    <span className="text-[9px] xl:text-[11px] font-bold uppercase tracking-wider whitespace-nowrap overflow-hidden text-ellipsis">DOWNLOAD BROCHURE</span>
                  </button>
                  <button className="flex items-center justify-center gap-1.5 px-3 lg:px-4 py-2 bg-[#3b8c2a] hover:bg-[#2f7121] border border-[#3b8c2a] rounded-full text-white transition-colors shadow-lg flex-1 min-w-0">
                    <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                    <span className="text-[9px] xl:text-[11px] font-bold uppercase tracking-wider whitespace-nowrap overflow-hidden text-ellipsis">ANY QUERY?</span>
                  </button>
                  <button className="flex items-center justify-center gap-1.5 px-3 lg:px-4 py-2 border border-[#3b8c2a]/80 hover:border-[#3b8c2a] rounded-full text-white hover:bg-[#3b8c2a]/10 transition-colors flex-1 min-w-0">
                    <PhoneCall className="w-3.5 h-3.5 shrink-0" />
                    <span className="text-[9px] xl:text-[11px] font-bold uppercase tracking-wider whitespace-nowrap overflow-hidden text-ellipsis">TALK TO US</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: CONTACT FORM */}
          <div className="w-full lg:w-[400px] bg-white rounded-xl shadow-md border border-gray-200 p-4 shrink-0">
            <h3 className="text-[16px] md:text-[18px] font-black text-[#0b2912] uppercase text-center mb-1">INTERESTED IN SPONSORING?</h3>
            <div className="w-12 h-1 bg-[#3b8c2a] mx-auto mb-4"></div>

            <form className="flex flex-col gap-3">
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Full Name*"
                  aria-label="Full Name"
                  className="w-full text-[13px] md:text-[14px] px-3 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:border-[#3b8c2a] focus:ring-1 focus:ring-[#3b8c2a]/30"
                />
                <input
                  type="text"
                  placeholder="Company Name*"
                  aria-label="Company Name"
                  className="w-full text-[13px] md:text-[14px] px-3 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:border-[#3b8c2a] focus:ring-1 focus:ring-[#3b8c2a]/30"
                />
              </div>

              <div className="relative">
                <input
                  type="email"
                  placeholder="Email Address*"
                  aria-label="Email Address"
                  className="w-full text-[13px] md:text-[14px] px-3 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:border-[#3b8c2a] focus:ring-1 focus:ring-[#3b8c2a]/30 pr-20"
                />
                <button type="button" aria-label="Send Email OTP" className="absolute right-1 top-1 bottom-1 px-3 bg-gray-100 hover:bg-gray-200 text-gray-700 text-[11px] font-bold rounded">
                  Send OTP
                </button>
              </div>

              <div className="relative">
                <input
                  type="tel"
                  placeholder="WhatsApp Number*"
                  aria-label="WhatsApp Number"
                  className="w-full text-[13px] md:text-[14px] px-3 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:border-[#3b8c2a] focus:ring-1 focus:ring-[#3b8c2a]/30 pr-20"
                />
                <button type="button" aria-label="Send WhatsApp OTP" className="absolute right-1 top-1 bottom-1 px-3 bg-gray-100 hover:bg-gray-200 text-gray-700 text-[11px] font-bold rounded">
                  Send OTP
                </button>
              </div>

              <div className="relative">
                <select
                  aria-label="Interested Sponsorship Category"
                  className="w-full text-[13px] md:text-[14px] px-3 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:border-[#3b8c2a] focus:ring-1 focus:ring-[#3b8c2a]/30 appearance-none text-gray-600"
                >
                  <option value="">Interested Sponsorship Category*</option>
                  <option value="title">Title Sponsor</option>
                  <option value="powered">Powered By Sponsor</option>
                  <option value="associate">Associate Sponsor</option>
                  <option value="conference">Conference Sponsor</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>

              <textarea
                placeholder="Message (Optional)"
                aria-label="Message"
                rows={2}
                className="w-full text-[13px] md:text-[14px] px-3 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:border-[#3b8c2a] focus:ring-1 focus:ring-[#3b8c2a]/30 resize-none"
              ></textarea>

              <button type="button" className="w-full py-3 bg-[#cbd5e1] hover:bg-[#3b8c2a] text-white transition-colors text-[12px] md:text-[13px] font-black uppercase rounded-md tracking-wider">
                VERIFY EMAIL & WHATSAPP TO SUBMIT
              </button>
              <p className="text-[11px] md:text-[12px] text-gray-500 text-center font-medium flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#3b8c2a]" /> Your information is safe with us.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SponsorshipCategories;

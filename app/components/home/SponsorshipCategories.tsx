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
          <div className="h-[2px] w-12 bg-[#3b8c2a]/60"></div>
          <Leaf className="w-4 h-4 text-[#3b8c2a]" />
          <h2 className="text-[16px] md:text-[20px] font-semibold text-[#0b2912] uppercase tracking-widest">
            SPONSORSHIP OPPORTUNITIES
          </h2>
          <Leaf className="w-4 h-4 text-[#3b8c2a] scale-x-[-1]" />
          <div className="h-[2px] w-12 bg-[#3b8c2a]/60"></div>
        </div>

        {/* TOP GRID: CATEGORIES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mb-5">
          {SponsorTypes.map((sponsor, idx) => {
            // Use properties from SponsorTypes or defaults
            const isExclusive = sponsor.exclusive;
            const iconBg = isExclusive ? 'bg-[#F2B40E]/10' : 'bg-[#f4fbf6]';
            const iconBorder = isExclusive ? 'border-[#F2B40E]/30' : 'border-[#e6f2e8]';
            const iconColor = isExclusive ? 'text-[#F2B40E]' : 'text-[#3b8c2a]';
            const hoverBg = isExclusive ? 'group-hover:bg-[#F2B40E]' : 'group-hover:bg-[#3b8c2a]';
            const hoverIconColor = isExclusive ? 'group-hover:text-[#0b2912]' : 'group-hover:text-white';
            const hoverBorder = isExclusive ? 'hover:border-[#F2B40E]/50' : 'hover:border-[#3b8c2a]/30';

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`bg-white rounded-2xl p-2 lg:px-4 lg:py-3 flex flex-col sm:flex-row items-start sm:items-center gap-4 border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_35px_rgba(11,41,18,0.08)] ${hoverBorder} hover:-translate-y-1.5 transition-all duration-300 group relative overflow-hidden cursor-pointer`}
              >
                {/* Exclusive Badge */}
                {isExclusive && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-[#F2B40E] to-[#f58220] text-[#0b2912] text-[10px] font-black px-3 py-1 rounded-bl-lg uppercase tracking-widest z-10 shadow-sm">
                    Exclusive
                  </div>
                )}

                {/* Icon Container */}
                <div className={`w-14 h-14 rounded-[14px] ${iconBg} ${iconBorder} border flex items-center justify-center shrink-0 ${hoverBg} group-hover:scale-105 group-hover:-rotate-3 group-hover:shadow-md transition-all duration-300 shadow-sm relative z-10`}>
                  <sponsor.icon className={`w-6 h-6 ${iconColor} ${hoverIconColor} group-hover:scale-110 transition-all duration-300`} strokeWidth={1.5} />
                </div>

                {/* Content */}
                <div className="flex flex-col z-10 flex-1">
                  <h4 className={`text-[14px] font-semibold text-[#0b2912] leading-[1.2] mb-1 uppercase tracking-wide transition-colors ${isExclusive ? 'group-hover:text-[#f58220]' : 'group-hover:text-[#3b8c2a]'}`}>
                    {sponsor.title}
                  </h4>
                  <p className="text-[12.5px] text-gray-500 leading-[1.4] font-medium pr-2">
                    {sponsor.desc}
                  </p>
                </div>

                {/* Subtle Hover Gradient Background */}
                <div className={`absolute -bottom-12 -right-12 w-32 h-32 rounded-full blur-2xl pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100 ${isExclusive ? 'bg-[#F2B40E]/10' : 'bg-[#3b8c2a]/5'}`}></div>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM SECTION: SPLIT LAYOUT */}
        <div className="flex flex-col lg:flex-row gap-4">

          {/* LEFT: INFO & STATS */}
          <div className="flex-1 flex flex-col gap-3">
            {/* Alert Banner */}
            <div className="w-full bg-[#f2f8f4] border border-[#3b8c2a]/20 rounded-xl p-3 flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <div className="flex items-center gap-3 w-[50%]">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#F2B40E] to-[#f58220] flex items-center justify-center shrink-0 shadow-[0_4px_15px_rgba(242,180,14,0.3)] border border-[#F2B40E]/50">
                  <Calendar className="w-5 h-5 text-[#0b2912]" strokeWidth={2.5} />
                </div>
                <div className='flex flex-col gap-1'>
                  <h4 className="text-[14px] font-semibold text-[#0b2912] uppercase leading-tight">LIMITED SPONSORSHIP SLOTS AVAILABLE</h4>
                  <p className="text-[13px] md:text-[14px] text-gray-600 font-medium leading-tight">Secure your category before it's gone!</p>
                </div>
              </div>
              <div className="hidden sm:block w-[1px] h-10 bg-gray-300"></div>
              <div className="flex items-center gap-4 w-[50%]">
                <div className="w-8 h-8 rounded bg-white flex items-center justify-center shrink-0 border border-gray-200">
                  <Star className="w-4 h-4 text-[#3b8c2a]" />
                </div>
                <p className="text-[13px] md:text-[14px] text-gray-700 font-medium leading-snug">
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
            <h3 className="text-[16px] md:text-[18px] font-semibold text-[#0b2912] uppercase text-center mb-1">INTERESTED IN SPONSORING?</h3>
            <div className="w-12 h-1 bg-[#3b8c2a] mx-auto mb-4"></div>

            <form className="flex flex-col gap-3">
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Full Name*"
                  aria-label="Full Name"
                  className="w-full text-[13px] md:text-[14px] px-3 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:border-[#3b8c2a] focus:ring-1 focus:ring-[#3b8c2a]/30 placeholder:text-black"
                />
                <input
                  type="text"
                  placeholder="Company Name*"
                  aria-label="Company Name"
                  className="w-full text-[13px] md:text-[14px] px-3 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:border-[#3b8c2a] focus:ring-1 focus:ring-[#3b8c2a]/30 placeholder:text-black"
                />
              </div>

              <div className="relative">
                <input
                  type="email"
                  placeholder="Email Address*"
                  aria-label="Email Address"
                  className="w-full text-[13px] md:text-[14px] px-3 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:border-[#3b8c2a] focus:ring-1 focus:ring-[#3b8c2a]/30 pr-20 placeholder:text-black"
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
                  className="w-full text-[13px] md:text-[14px] px-3 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:border-[#3b8c2a] focus:ring-1 focus:ring-[#3b8c2a]/30 pr-20 placeholder:text-black"
                />
                <button type="button" aria-label="Send WhatsApp OTP" className="absolute right-1 top-1 bottom-1 px-3 bg-gray-100 hover:bg-gray-200 text-gray-700 text-[11px] font-bold rounded">
                  Send OTP
                </button>
              </div>

              <div className="relative">
                <select
                  aria-label="Interested Sponsorship Category"
                  className="w-full text-[13px] md:text-[14px] px-3 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:border-[#3b8c2a] focus:ring-1 focus:ring-[#3b8c2a]/30 appearance-none text-black font-normal"
                >
                  <option value="">Interested Sponsorship Category*</option>
                  <option value="title">Title Sponsor</option>
                  <option value="powered">Powered By Sponsor</option>
                  <option value="associate">Associate Sponsor</option>
                  <option value="conference">Conference Sponsor</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black pointer-events-none" />
              </div>

              <textarea
                placeholder="Message (Optional)"
                aria-label="Message"
                rows={2}
                className="w-full text-[13px] md:text-[14px] px-3 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:border-[#3b8c2a] focus:ring-1 focus:ring-[#3b8c2a]/30 resize-none placeholder:text-black"
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

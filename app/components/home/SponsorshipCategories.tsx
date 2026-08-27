"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Trophy, Zap, Users, Mic, UserCheck,
  Contact, Leaf, MonitorPlay, Calendar,
  Star, Download, MessageCircle, PhoneCall,
  ChevronDown, Target, Globe, ShieldCheck, Loader2
} from 'lucide-react';
import { verifyApi, sponsorshipEnquiryApi } from '../../../lib/api';
import Swal from 'sweetalert2';

const Sparkle = ({ style, color = "#ffc107", shadow = "#4B1426" }: { style?: React.CSSProperties; color?: string; shadow?: string }) => (
  <span
    style={{
      position: "absolute",
      pointerEvents: "none",
      fontSize: "11px",
      color,
      textShadow: shadow ? `0 0 4px ${shadow}, 0 0 8px ${shadow}` : undefined,
      animation: "sparkleAnim 1.6s ease-in-out infinite",
      opacity: 0,
      zIndex: 25,
      ...style,
    }}
  >
    ✦
  </span>
);

// ── Dynamic Data Configuration ──
const sectionData = {
  headerTitle: "SPONSORSHIP OPPORTUNITIES",
  categories: [
    { title: 'TITLE SPONSOR', desc: 'Maximum visibility & brand exclusivity', icon: Trophy, exclusive: true },
    { title: 'POWERED BY SPONSOR', desc: 'Align your brand as the power behind BOE', icon: Zap },
    { title: 'ASSOCIATE SPONSOR', desc: 'High-impact visibility & brand recognition', icon: Users },
    { title: 'CONFERENCE SPONSOR', desc: 'Brand association with knowledge sessions', icon: Mic },
    { title: 'REGISTRATION SPONSOR', desc: 'High brand recall at every entry point', icon: UserCheck },
    { title: 'LANYARD SPONSOR', desc: 'Put your brand around every neck', icon: Contact },
    { title: 'ORGANIC ZONE SPONSOR', desc: 'Showcase your brand in the experience zone', icon: Leaf },
    { title: 'DIGITAL PARTNER', desc: 'Expand your reach across digital platforms', icon: MonitorPlay },
    { title: 'NETWORKING SPONSOR', desc: 'Connect your brand during high-value interactions', icon: Calendar },
    { title: 'INTERNATIONAL SPONSOR', desc: 'Lead the global organic trade discussion', icon: Globe },
    { title: 'VIP LOUNGE SPONSOR', desc: 'Exclusive visibility among top decision makers', icon: Star },
    { title: 'AWARDS SPONSOR', desc: 'Recognize and align with industry excellence', icon: Target }
  ],
  promoBox: {
    bannerTitle: "LIMITED SPONSORSHIP SLOTS AVAILABLE",
    bannerSubtitle: "Secure your category before it's gone!",
    bannerFeature: "Featured sponsors get exclusive media coverage & brand promotions.",
    image: "https://th-i.thgim.com/public/incoming/z6bs2x/article69071875.ece/alternates/FREE_1200/IMG_iStock-1488883191.jp_2_1_55C17SK5.jpg",
    imageAlt: "Bharat Organic Expo - B2B Exhibition and Conference",
    badgeLine1: "GO ORGANIC",
    badgeLine2: "GO BETTER",
    titlePrefix: "ELEVATE YOUR BRAND PRESENCE",
    titleHighlight: "AT BHARAT ORGANIC EXPO 2027",
    description: "meaningful connections and grow your business with India's biggest organic show.",
    stats: [
      { count: "8,000+", label: "Visitors / Delegates", icon: Users },
      { count: "200+", label: "Exhibitors", icon: Target },
      { count: "1,000+", label: "Global Buyers", icon: Globe },
      { count: "Unlimited", label: "Opportunities", icon: Zap }
    ],
    buttons: {
      brochureLink: "/download/invited card.pdf",
      brochureText: "BROCHURE",
      contactLink: "/contact",
      contactText: "ANY QUERY?",
      phoneLink: "tel:+919654900525",
      phoneText: "TALK TO US"
    }
  },
  form: {
    title: "INTERESTED IN SPONSORING?",
    safeText: "Your information is safe with us."
  }
};

const SponsorshipCategories = () => {
  const [formData, setFormData] = useState({ fullName: '', companyName: '', email: '', phone: '', category: '', message: '' });
  const [isVerifying, setIsVerifying] = useState({ email: false, phone: false });
  const [otpSent, setOtpSent] = useState({ email: false, phone: false });
  const [otpVerified, setOtpVerified] = useState({ email: false, phone: false });
  const [otpValues, setOtpValues] = useState({ email: '', phone: '' });
  const [loading, setLoading] = useState(false);

  const handleSendOtp = async (type: 'email' | 'phone') => {
    const value = type === 'email' ? formData.email : formData.phone;
    if (!value) {
      Swal.fire({ scrollbarPadding: false, title: "Error", text: `Please enter your ${type} first.`, icon: "error" });
      return;
    }
    setIsVerifying(prev => ({ ...prev, [type]: true }));
    try {
      const res = type === 'email'
        ? await verifyApi.sendEmailOtp(value, 'SPONSOR', formData.fullName)
        : await verifyApi.sendPhoneOtp(value, 'SPONSOR', formData.fullName);
      if (res?.success) {
        setOtpSent(prev => ({ ...prev, [type]: true }));
        Swal.fire({ scrollbarPadding: false, title: "OTP Sent", text: `An OTP has been sent to your ${type}.`, icon: "success", timer: 2000, showConfirmButton: false });
      } else {
        Swal.fire({ scrollbarPadding: false, title: "Error", text: res?.message || "Failed to send OTP.", icon: "error" });
      }
    } catch (err) {
      Swal.fire({ scrollbarPadding: false, title: "Error", text: "Something went wrong.", icon: "error" });
    } finally {
      setIsVerifying(prev => ({ ...prev, [type]: false }));
    }
  };

  const handleVerifyOtp = async (type: 'email' | 'phone') => {
    const value = type === 'email' ? formData.email : formData.phone;
    const otp = type === 'email' ? otpValues.email : otpValues.phone;
    if (!otp) {
      Swal.fire({ scrollbarPadding: false, title: "Error", text: "Please enter the OTP.", icon: "error" });
      return;
    }
    setIsVerifying(prev => ({ ...prev, [type]: true }));
    try {
      const res = type === 'email'
        ? await verifyApi.verifyEmailOtp(value, otp)
        : await verifyApi.verifyPhoneOtp(value, otp);
      if (res?.success) {
        setOtpVerified(prev => ({ ...prev, [type]: true }));
        setOtpSent(prev => ({ ...prev, [type]: false }));
        Swal.fire({ scrollbarPadding: false, title: "Verified", text: `${type} verified successfully.`, icon: "success", timer: 2000, showConfirmButton: false });
      } else {
        Swal.fire({ scrollbarPadding: false, title: "Error", text: res?.message || "Invalid OTP.", icon: "error" });
      }
    } catch (err) {
      Swal.fire({ scrollbarPadding: false, title: "Error", text: "Something went wrong.", icon: "error" });
    } finally {
      setIsVerifying(prev => ({ ...prev, [type]: false }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.companyName || !formData.email || !formData.phone || !formData.category) {
      Swal.fire({ scrollbarPadding: false, title: "Error", text: "Please fill all required fields.", icon: "error" });
      return;
    }
    if (!otpVerified.email || !otpVerified.phone) {
      Swal.fire({ scrollbarPadding: false, title: "Error", text: "Please verify both Email and WhatsApp number to submit.", icon: "error" });
      return;
    }

    setLoading(true);
    try {
      const res = await sponsorshipEnquiryApi.submit(formData);
      if (res && res.success) {
        Swal.fire({
          scrollbarPadding: false,
          title: "Submitted!",
          text: "Your sponsorship enquiry has been submitted successfully.",
          icon: "success"
        });
        setFormData({ fullName: '', companyName: '', email: '', phone: '', category: '', message: '' });
        setOtpVerified({ email: false, phone: false });
        setOtpValues({ email: '', phone: '' });
      } else {
        Swal.fire({ scrollbarPadding: false, title: "Error", text: res?.message || "Failed to submit enquiry.", icon: "error" });
      }
    } catch (err) {
      Swal.fire({ scrollbarPadding: false, title: "Error", text: "Something went wrong.", icon: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-[#EFF7EE] font-inter relative px-2 lg:px-14 py-4 lg:py-6 overflow-hidden border-b border-gray-100">
      <style>{`
        @keyframes sparkleAnim {
          0%, 100% { opacity: 0; transform: scale(0.4) rotate(0deg); }
          50% { opacity: 1; transform: scale(1.2) rotate(180deg); }
        }
      `}</style>
      <div className="max-w-[1500px] mx-auto relative z-10">

        {/* HEADER */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-[2px] w-12 bg-[#3b8c2a]/60"></div>
          <Leaf className="w-4 h-4 text-[#3b8c2a]" />
          <h2 className="text-[16px] md:text-[20px] font-semibold text-[#0b2912] uppercase tracking-widest font-poppins">
            {sectionData.headerTitle}
          </h2>
          <Leaf className="w-4 h-4 text-[#3b8c2a] scale-x-[-1]" />
          <div className="h-[2px] w-12 bg-[#3b8c2a]/60"></div>
        </div>

        {/* TOP GRID: CATEGORIES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mb-5">
          {sectionData.categories.map((sponsor, idx) => {
            // Use properties from sectionData.categories or defaults
            const isExclusive = sponsor.exclusive;
            const iconBg = isExclusive ? 'bg-[#F2B40E]/10' : 'bg-[#f4fbf6]';
            const iconBorder = isExclusive ? 'border-[#F2B40E]/30' : 'border-[#e6f2e8]';
            const iconColor = isExclusive ? 'text-[#F2B40E]' : 'text-[#3b8c2a]';
            const hoverBg = isExclusive ? 'group-hover:bg-[#F2B40E]' : 'group-hover:bg-[#3b8c2a]';
            const hoverIconColor = isExclusive ? 'group-hover:text-[#0b2912]' : 'group-hover:text-white';
            const hoverBorder = isExclusive ? 'hover:border-[#F2B40E]/50' : 'hover:border-[#3b8c2a]/30';

            return (
              <Link
                key={idx}
                href="/sponsership"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className={`bg-white rounded-2xl p-2 lg:px-4 lg:py-3 flex flex-col sm:flex-row items-start sm:items-center gap-4 border border-gray-200 ${hoverBorder} hover:-translate-y-1.5 transition-all duration-300 group relative overflow-hidden cursor-pointer`}
                  style={{ boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" }}
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
                  <div className="flex flex-col z-10 flex-1 font-inter">
                    <h3 className={`text-[13px] sm:text-[14px] font-semibold text-[#1b5e20] leading-tight mb-1 uppercase tracking-wide transition-colors ${isExclusive ? 'group-hover:text-[#f58220]' : 'group-hover:text-[#3b8c2a]'}`}>
                      {sponsor.title}
                    </h3>
                    <p className="text-[11.5px] sm:text-[12px] text-gray-700 leading-relaxed font-medium pr-2">
                      {sponsor.desc}
                    </p>
                  </div>

                  {/* Subtle Hover Gradient Background */}
                  <div className={`absolute -bottom-12 -right-12 w-32 h-32 rounded-full blur-2xl pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100 ${isExclusive ? 'bg-[#F2B40E]/10' : 'bg-[#3b8c2a]/5'}`}></div>
                </motion.div>
              </Link>
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
                  <h3 className="text-[14px] font-semibold text-[#0b2912] uppercase leading-tight">{sectionData.promoBox.bannerTitle}</h3>
                  <p className="text-[13px] md:text-[14px] text-gray-600 font-medium leading-tight">{sectionData.promoBox.bannerSubtitle}</p>
                </div>
              </div>
              <div className="hidden sm:block w-[1px] h-10 bg-gray-300"></div>
              <div className="flex items-center gap-4 w-[50%]">
                <div className="w-8 h-8 rounded bg-white flex items-center justify-center shrink-0 border border-gray-200">
                  <Star className="w-4 h-4 text-[#3b8c2a]" />
                </div>
                <p className="text-[13px] md:text-[14px] text-gray-700 font-medium leading-snug">
                  {sectionData.promoBox.bannerFeature}
                </p>
              </div>
            </div>

            {/* Dark Green Box EXACT REPLICA */}
            <div className="rounded-[24px] relative overflow-hidden flex-1 shadow-lg flex min-h-[300px] bg-[#0b2912]">
              {/* Background Image on Right */}
              <div className="absolute top-0 right-0 bottom-0 w-[50%] z-0">
                <img src={sectionData.promoBox.image}

                  className="w-full h-full object-cover"
                  alt={sectionData.promoBox.imageAlt}
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
                  {sectionData.promoBox.badgeLine1}<br />{sectionData.promoBox.badgeLine2}
                </span>
              </div>

              {/* Content on Left (relative z-20) */}
              <div className="relative z-20 p-5 lg:p-6 w-full lg:w-[55%] flex flex-col justify-between pointer-events-auto font-inter">
                <div>
                  <h3 className="text-[20px] md:text-[24px] lg:text-[26px] font-semibold text-white uppercase leading-[1.2] mb-2 tracking-tight font-poppins">
                    {sectionData.promoBox.titlePrefix} <br />
                    <span className="text-[#F2B40E]">{sectionData.promoBox.titleHighlight}</span>
                  </h3>
                  <p className="text-[13px] md:text-[14px] text-gray-200 font-normal leading-[1.6] max-w-[360px] mb-4">
                    {sectionData.promoBox.description}
                  </p>
                </div>

                {/* Stats 2x2 Grid */}
                <div className="grid grid-cols-2 gap-y-2 gap-x-2 mb-4 mt-1">
                  {sectionData.promoBox.stats.map((stat, idx) => (
                    <div key={idx} className="flex w-full items-center gap-2.5 bg-white/5 border border-white/10 rounded-lg px-3 py-2 hover:bg-white/10 transition-colors">
                      <div className="w-8 h-8 rounded-full border border-[#F2B40E] flex items-center justify-center shrink-0">
                        <stat.icon className="w-4 h-4 text-[#F2B40E]" strokeWidth={2} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[16px] md:text-[18px] font-semibold text-[#F2B40E] leading-none mb-1">{stat.count}</span>
                        <span className="text-[11px] md:text-[12px] font-bold text-gray-300 uppercase tracking-widest leading-tight">{stat.label}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Buttons horizontally aligned */}
                <div className="flex flex-nowrap items-center gap-1.5 mt-auto w-full">
                  {/* BROCHURE Button with #4B1426 bg & Sparkles */}
                  <div className="relative shrink-0 flex-1 min-w-0">
                    <Sparkle color="#ffc107" shadow="#4B1426" style={{ top: "-10px", left: "5%", animationDelay: "0s" }} />
                    <Sparkle color="#ff9800" shadow="#4B1426" style={{ top: "-12px", left: "45%", animationDelay: "0.5s" }} />
                    <Sparkle color="#ffc107" shadow="#4B1426" style={{ top: "-10px", right: "5%", animationDelay: "1s" }} />
                    <a
                      href={sectionData.promoBox.buttons.brochureLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative w-full flex items-center justify-center gap-1 px-2.5 py-1.5 bg-[#4B1426] hover:bg-[#360e1b] border border-white/20 rounded-full text-white transition-colors shadow-md overflow-hidden"
                    >
                      <span className="absolute inset-0 bg-white/15 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
                      <Download className="w-3 h-3 shrink-0 relative z-10 text-white" />
                      <span className="text-[9px] xl:text-[11px] font-bold uppercase tracking-wider whitespace-nowrap overflow-hidden text-ellipsis relative z-10 text-white">{sectionData.promoBox.buttons.brochureText}</span>
                    </a>
                  </div>

                  <Link href={sectionData.promoBox.buttons.contactLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1 px-2.5 py-1.5 bg-[#3b8c2a] hover:bg-[#2f7121] border border-[#3b8c2a] rounded-full text-white transition-colors shadow-lg flex-1 min-w-0">
                    <MessageCircle className="w-3 h-3 shrink-0" />
                    <span className="text-[8.5px] xl:text-[10px] font-bold uppercase tracking-wider whitespace-nowrap overflow-hidden text-ellipsis">{sectionData.promoBox.buttons.contactText}</span>
                  </Link>
                  <a href={sectionData.promoBox.buttons.phoneLink} className="flex items-center justify-center gap-1 px-2.5 py-1.5 border border-[#3b8c2a]/80 hover:border-[#3b8c2a] rounded-full text-white hover:bg-[#3b8c2a]/10 transition-colors flex-1 min-w-0">
                    <PhoneCall className="w-3 h-3 shrink-0" />
                    <span className="text-[8.5px] xl:text-[10px] font-bold uppercase tracking-wider whitespace-nowrap overflow-hidden text-ellipsis">{sectionData.promoBox.buttons.phoneText}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: CONTACT FORM */}
          <div className="w-full lg:w-[400px] bg-white rounded-xl shadow-md border border-gray-200 p-4 shrink-0">
            <h3 className="text-[16px] md:text-[18px] font-semibold text-[#0b2912] uppercase text-center mb-1">{sectionData.form.title}</h3>
            <div className="w-12 h-1 bg-[#3b8c2a] mx-auto mb-4"></div>

            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Full Name*"
                  aria-label="Full Name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full text-[13px] md:text-[14px] px-3 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:border-[#3b8c2a] focus:ring-1 focus:ring-[#3b8c2a]/30 text-black placeholder:text-black"
                />
                <input
                  type="text"
                  placeholder="Company Name*"
                  aria-label="Company Name"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full text-[13px] md:text-[14px] px-3 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:border-[#3b8c2a] focus:ring-1 focus:ring-[#3b8c2a]/30 text-black placeholder:text-black"
                />
              </div>

              <div className="relative">
                <input
                  type="email"
                  placeholder="Email Address*"
                  aria-label="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  disabled={otpVerified.email}
                  className="w-full text-[13px] md:text-[14px] px-3 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:border-[#3b8c2a] focus:ring-1 focus:ring-[#3b8c2a]/30 pr-20 text-black placeholder:text-black disabled:bg-gray-100"
                />
                {!otpVerified.email && !otpSent.email && (
                  <button type="button" onClick={() => handleSendOtp('email')} disabled={isVerifying.email} aria-label="Send Email OTP" className="absolute right-1 top-1 bottom-1 px-3 bg-gray-100 hover:bg-gray-200 text-gray-700 text-[11px] font-bold rounded flex items-center justify-center">
                    {isVerifying.email ? <Loader2 className="w-3 h-3 animate-spin" /> : 'Send OTP'}
                  </button>
                )}
                {otpVerified.email && (
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[11px] font-bold text-green-600 flex items-center gap-1"><ShieldCheck className="w-4 h-4" /> Verified</span>
                )}
              </div>

              {otpSent.email && !otpVerified.email && (
                <div className="relative animate-in slide-in-from-top-2">
                  <input
                    type="text"
                    placeholder="Enter Email OTP"
                    value={otpValues.email}
                    onChange={(e) => setOtpValues({ ...otpValues, email: e.target.value })}
                    className="w-full text-[13px] md:text-[14px] px-3 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:border-[#3b8c2a] pr-20 text-black placeholder:text-black"
                  />
                  <button type="button" onClick={() => handleVerifyOtp('email')} disabled={isVerifying.email} className="absolute right-1 top-1 bottom-1 px-3 bg-[#3b8c2a] hover:bg-[#2f7121] text-white text-[11px] font-bold rounded flex items-center justify-center">
                    {isVerifying.email ? <Loader2 className="w-3 h-3 animate-spin" /> : 'Verify'}
                  </button>
                </div>
              )}

              <div className="relative">
                <input
                  type="tel"
                  placeholder="WhatsApp Number*"
                  aria-label="WhatsApp Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  disabled={otpVerified.phone}
                  className="w-full text-[13px] md:text-[14px] px-3 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:border-[#3b8c2a] focus:ring-1 focus:ring-[#3b8c2a]/30 pr-20 text-black placeholder:text-black disabled:bg-gray-100"
                />
                {!otpVerified.phone && !otpSent.phone && (
                  <button type="button" onClick={() => handleSendOtp('phone')} disabled={isVerifying.phone} aria-label="Send WhatsApp OTP" className="absolute right-1 top-1 bottom-1 px-3 bg-gray-100 hover:bg-gray-200 text-gray-700 text-[11px] font-bold rounded flex items-center justify-center">
                    {isVerifying.phone ? <Loader2 className="w-3 h-3 animate-spin" /> : 'Send OTP'}
                  </button>
                )}
                {otpVerified.phone && (
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[11px] font-bold text-green-600 flex items-center gap-1"><ShieldCheck className="w-4 h-4" /> Verified</span>
                )}
              </div>

              {otpSent.phone && !otpVerified.phone && (
                <div className="relative animate-in slide-in-from-top-2">
                  <input
                    type="text"
                    placeholder="Enter WhatsApp OTP"
                    value={otpValues.phone}
                    onChange={(e) => setOtpValues({ ...otpValues, phone: e.target.value })}
                    className="w-full text-[13px] md:text-[14px] px-3 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:border-[#3b8c2a] pr-20 text-black placeholder:text-black"
                  />
                  <button type="button" onClick={() => handleVerifyOtp('phone')} disabled={isVerifying.phone} className="absolute right-1 top-1 bottom-1 px-3 bg-[#3b8c2a] hover:bg-[#2f7121] text-white text-[11px] font-bold rounded flex items-center justify-center">
                    {isVerifying.phone ? <Loader2 className="w-3 h-3 animate-spin" /> : 'Verify'}
                  </button>
                </div>
              )}

              <div className="relative">
                <select
                  aria-label="Interested Sponsorship Category"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full text-[13px] md:text-[14px] px-3 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:border-[#3b8c2a] focus:ring-1 focus:ring-[#3b8c2a]/30 appearance-none text-black font-normal"
                >
                  <option value="">Interested Sponsorship Category*</option>
                  {sectionData.categories.map(s => (
                    <option key={s.title} value={s.title}>{s.title}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black pointer-events-none" />
              </div>

              <textarea
                placeholder="Message (Optional)"
                aria-label="Message"
                rows={2}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full text-[13px] md:text-[14px] px-3 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:border-[#3b8c2a] focus:ring-1 focus:ring-[#3b8c2a]/30 resize-none text-black placeholder:text-black"
              ></textarea>

              <button type="submit" disabled={loading} className={`w-full py-3 text-white transition-colors text-[12px] md:text-[13px] font-black uppercase rounded-md tracking-wider flex items-center justify-center gap-2 ${otpVerified.email && otpVerified.phone ? 'bg-[#3b8c2a] hover:bg-[#2f7121]' : 'bg-[#cbd5e1] cursor-not-allowed'}`}>
                {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                {otpVerified.email && otpVerified.phone ? 'SUBMIT ENQUIRY' : 'VERIFY EMAIL & WHATSAPP TO SUBMIT'}
              </button>
              <p className="text-[11px] md:text-[12px] text-gray-500 text-center font-medium flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#3b8c2a]" /> {sectionData.form.safeText}
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SponsorshipCategories;

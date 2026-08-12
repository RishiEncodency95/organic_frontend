"use client";
import introImg from "../../assets/home/homeIntro.png";


import { motion, useInView, animate } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import {
  Stethoscope, Landmark, Leaf, Globe, Building2, GraduationCap,
  Users, Handshake, Package, Sparkles, Camera, ShieldCheck, UserCheck, Activity, Award, Briefcase
} from "lucide-react";


const ICON_MAP: Record<string, React.ReactNode> = {
  Award: <Award size={32} className="text-[#1a6b3a]" />,
  Sparkles: <Sparkles size={32} className="text-[#3b6fd4]" />,
  Users: <Users size={32} className="text-[#1a6b3a]" />,
  Globe: <Globe size={32} className="text-[#3b6fd4]" />,
  Stethoscope: <Stethoscope size={32} className="text-[#1a6b3a]" />,
  Landmark: <Landmark size={32} className="text-[#3b6fd4]" />,
  Leaf: <Leaf size={32} className="text-[#1a6b3a]" />,
  Building2: <Building2 size={32} className="text-[#3b6fd4]" />,
  GraduationCap: <GraduationCap size={32} className="text-[#1a6b3a]" />,
  Handshake: <Handshake size={32} className="text-[#3b6fd4]" />,
  Package: <Package size={32} className="text-[#1a6b3a]" />,
  Camera: <Camera size={32} className="text-[#3b6fd4]" />,
  ShieldCheck: <ShieldCheck size={32} className="text-[#1a6b3a]" />,
  UserCheck: <UserCheck size={32} className="text-[#3b6fd4]" />,
  Activity: <Activity size={32} className="text-[#1a6b3a]" />,
  Briefcase: <Briefcase size={32} className="text-[#3b6fd4]" />,
};


const IntroductionSection = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const targetDate = new Date("2027-02-19T00:00:00").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, mins: 0, secs: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        mins: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        secs: Math.floor((distance % (1000 * 60)) / 1000)
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const staticData = {
    bgColor: '#EFF7EE',
    subtitle: 'INTRODUCTION',
    title: 'A Global Platform for <span class="text-[#246b38] relative inline-block">Organic & <svg class="absolute w-full h-3 -bottom-1 left-0 text-[#3b8c2a]/20" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" stroke-width="4" fill="transparent"/></svg></span> Sustainable Living',
    description: "Bharat Organic Expo 2027 stands as India's most influential international platform dedicated to organic excellence, wellness innovation, and sustainable living. Entering its prestigious edition, the Expo represents a strategic evolution—from a conventional trade exhibition into a powerful global ecosystem for business growth, policy exchange, knowledge sharing, and international collaboration.<br/><br/>With a strong legacy of 10+ years and 8 successfully executed editions, the Expo has established itself as a trusted meeting ground for organic leaders, wellness brands, sustainable technology providers, investors, policymakers, researchers, startups, and global delegations from across the world.",
    image: introImg
  };

  const sortedFeatures = [
    { _id: "1", icon: "Award", number: "10+", label: "YEARS OF LEGACY" },
    { _id: "2", icon: "Sparkles", number: "8", label: "SUCCESSFUL EDITIONS" },
    { _id: "3", icon: "Users", number: "10,000+", label: "EXHIBITORS & BRANDS" },
    { _id: "4", icon: "Globe", number: "80+", label: "COUNTRIES PARTICIPATED" },
  ];

  return (
    <section
      className="py-2 md:py-4 overflow-hidden relative"
      style={{ background: staticData.bgColor }}
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#3b8c2a]/5 rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#3b6fd4]/5 rounded-full blur-[80px] -z-10 -translate-x-1/4 translate-y-1/4"></div>

      <div className="w-full px-6 lg:px-11 relative z-10">
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-6 items-center mb-2">

          {/* LEFT: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-[60%]"
          >
            {/* Introduction Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gradient-to-r from-[#3b8c2a]/10 to-[#F2B40E]/10 border border-[#3b8c2a]/20 shadow-[0_4px_15px_rgba(59,140,42,0.06)] mb-4 transform hover:scale-105 transition-transform duration-300">
              <span className="w-2 h-2 rounded-full bg-[#F2B40E] animate-pulse"></span>
              <span className="text-[11px] md:text-xs font-black uppercase tracking-[0.25em] text-[#1a6b3a]">
                INTRODUCTION
              </span>
            </div>

            {/* Title */}
            <h2 className="text-[32px] md:text-[36px] lg:text-[40px] font-black text-slate-900 leading-[1.15] mb-2 tracking-tight">
              Welcome to <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b8c2a] to-[#1a6b3a] relative inline-block">
                BHARAT ORGANIC EXPO <span className="text-[#F2B40E] inline-block">2027</span>
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#F2B40E]/40" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" /></svg>
              </span>
              <span className="text-[18px] md:text-[18px] font-semibold text-slate-600 mt-4 block tracking-normal">
                {/* A Global Platform for Organic & Sustainable Living */}
                India's Premier Platform for Organic Products, Sustainable Agriculture & Natural Living
              </span>
            </h2>

            {/* Description */}
            <div className="mb-3 pr-0 lg:pr-10 space-y-3">
              <p className="text-[15px] md:text-[16px] leading-[1.5] text-slate-700 font-medium border-l-4 border-[#F2B40E] pl-5 bg-gradient-to-r from-[#F2B40E]/5 to-transparent py-3 rounded-r-xl shadow-sm">
                <strong className="text-[#1a6b3a] font-bold">Bharat Organic Expo 2027</strong> Bharat Organic Expo 2027 is India's leading international exhibition dedicated to organic products, sustainable agriculture, natural wellness, eco-friendly innovations, and green business opportunities. The Expo brings together manufacturers, exhibitors, buyers, importers, exporters, investors, government organizations, industry experts, startups, researchers, and global delegates under one dynamic platform.
              </p>
              <p className="text-[14px] md:text-[16px] leading-[1.4] text-slate-600">
                Designed to foster business growth, knowledge sharing, innovation, and international collaboration, Bharat Organic Expo serves as the perfect destination for discovering new products, building strategic partnerships, expanding global markets, and promoting a sustainable future.              </p>
            </div>

            {/* Action Buttons (Optional) */}
            <div className="flex items-center gap-4 ">
              <button className="px-6 py-2 bg-[#3b8c2a] border-2 border-[#F2B40E] hover:bg-[#F2B40E] hover:text-[#0b2912] text-white text-[12px] font-bold uppercase tracking-wider rounded-full shadow-[0_10px_20px_rgba(59,140,42,0.2)] hover:shadow-[0_15px_30px_rgba(59,140,42,0.3)] hover:-translate-y-0.5 transition-all duration-300">
                Explore Exhibition
              </button>
            </div>
          </motion.div>

          {/* RIGHT: Image & Timer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-[40%] flex flex-col items-center gap-2 relative mt-2 lg:mt-0"
          >
            {/* Highly Highlighted White Countdown Timer (Top Center) */}
            <div className="w-fit self-center bg-white rounded-xl p-1.5 sm:p-2 shadow-[0_15px_40px_rgba(59,140,42,0.25)] border-2 border-[#3b8c2a] flex flex-col items-center justify-center transform hover:-translate-y-1 transition-all duration-500 group relative z-20 overflow-hidden">
              {/* Soft decorative glow inside the card */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#F2B40E] opacity-10 blur-2xl rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#3b8c2a] opacity-10 blur-2xl rounded-full"></div>

              <div className="text-[#3b8c2a] text-[9px] md:text-[11px] font-black tracking-[0.25em] uppercase mb-1 flex items-center justify-center gap-1.5 w-full relative z-10 drop-shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F2B40E] animate-pulse"></span>
                EVENT BEGINS IN
                <span className="w-1.5 h-1.5 rounded-full bg-[#F2B40E] animate-pulse"></span>
              </div>

              <div className="flex justify-center gap-1.5 sm:gap-2 w-full relative z-10">
                {['DAYS', 'HOURS', 'MINS', 'SECS'].map((label, idx) => {
                  const value = idx === 0 ? timeLeft.days : idx === 1 ? timeLeft.hours : idx === 2 ? timeLeft.mins : timeLeft.secs;
                  return (
                    <div key={label} className="bg-gradient-to-b from-[#f6fbf7] to-white border border-[#3b8c2a]/30 rounded-lg px-2 py-0.5 sm:px-3 sm:py-1 min-w-[50px] sm:min-w-[65px] flex flex-col items-center justify-center shadow-inner group-hover:border-[#F2B40E] group-hover:shadow-[0_4px_15px_rgba(242,180,14,0.2)] transition-all duration-300">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a6b3a] to-[#3b8c2a] text-xl sm:text-xl font-semibold leading-none tracking-tighter drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)]">
                        {value.toString().padStart(2, '0')}
                      </span>
                      <span className="text-[#F2B40E] text-[7px] sm:text-[8px] font-extrabold tracking-[0.2em] uppercase mt-0.5">
                        {label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Image Container */}
            <div className="relative z-10 p-2 md:p-3 rounded-[1.5rem] bg-white/60 backdrop-blur-md border border-white shadow-[0_15px_40px_rgba(0,0,0,0.06)] max-w-[450px] w-full">
              {staticData.image ? (
                <img
                  loading="lazy"
                  decoding="async"
                  src={staticData.image.src}
                  alt="ORGANIC EXPO Introduction"
                  className="w-full h-auto object-cover rounded-2xl"
                />
              ) : (
                <div className="w-full aspect-[4/3] rounded-2xl bg-slate-100 flex items-center justify-center">
                  <span className="text-slate-400 font-bold">Image Placeholder</span>
                </div>
              )}

              {/* Floating Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjM2I4YzJhIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1kYXNoYXJyYXk9IjQgNCIgb3BhY2l0eT0iMC4yIi8+PC9zdmc+')] animate-[spin_20s_linear_infinite] pointer-events-none z-0"></div>
            </div>
          </motion.div>
        </div>


      </div>
    </section>
  );
};

export default IntroductionSection;
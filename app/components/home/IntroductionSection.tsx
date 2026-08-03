"use client";
import introImg from "../../assets/home/homeIntroduction.png";


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
  const staticData = {
    bgColor: 'linear-gradient(135deg, #f6fbf7 0%, #ffffff 100%)',
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
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#246b38]/10 shadow-[0_2px_10px_rgba(36,107,56,0.05)] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#246b38] animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#246b38]">{staticData.subtitle}</span>
            </div>

            {/* Title */}
            <div
              className="text-[20px] md:text-[25px] font-medium text-[#0f172a] leading-[1.15] mb-2 tracking-tight"
              dangerouslySetInnerHTML={{ __html: staticData.title }}
            />

            {/* Description */}
            <div
              className="text-[14px] md:text-[15px] leading-[1.8] text-[#475569] text-justify mb-6 pr-4 lg:pr-10"
              dangerouslySetInnerHTML={{ __html: staticData.description }}
            />

            {/* Action Buttons (Optional) */}
            <div className="flex items-center gap-4">
              <button className="px-8 py-2.5 bg-[#3b8c2a] border-2 border-[#F2B40E] hover:bg-[#F2B40E] hover:text-[#0b2912] text-white text-[12px] font-bold uppercase tracking-wider rounded-full shadow-[0_10px_20px_rgba(59,140,42,0.2)] hover:shadow-[0_15px_30px_rgba(59,140,42,0.3)] hover:-translate-y-0.5 transition-all duration-300">
                Explore Exhibition
              </button>
            </div>
          </motion.div>

          {/* RIGHT: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-[40%] relative flex justify-end"
          >
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
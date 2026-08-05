"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Users, Target, Rocket, Globe, Megaphone, Handshake,
  ChevronRight, CalendarDays, Download, Info,
  Store, Users as UsersIcon, TrendingUp, Leaf, ArrowRight
} from "lucide-react";

// You can replace this with the exact image uploaded
import meetingImg from "../../assets/home/bs_meet.png";

const listItems = [
  {
    icon: <Users size={20} className="text-white" />,
    title: "Meet Genuine Buyers",
    desc: "Connect with buyers, distributors, retailers & industry professionals."
  },
  {
    icon: <Target size={20} className="text-white" />,
    title: "Generate Quality Leads",
    desc: "Generate high-quality B2B & B2C leads with faster business conversions"
  },
  {
    icon: <Rocket size={20} className="text-white" />,
    title: "Launch New Products",
    desc: "Launch new products with maximum visibility & market impact."
  },
  {
    icon: <Globe size={20} className="text-white" />,
    title: "Expand Your Network",
    desc: "Expand your dealer, distributor, franchise & export network."
  },
  {
    icon: <Megaphone size={20} className="text-white" />,
    title: "Strengthen Brand Presence",
    desc: "Strengthen brand presence through live demos & media exposure"
  },
  {
    icon: <Handshake size={20} className="text-white" />,
    title: "Connect with Decision Makers",
    desc: "Connect with investors, CEOs, doctors & key decision-makers."
  }
];

const bottomStats = [
  {
    icon: <Store size={32} className="text-[#154726]" />,
    title: "EXHIBIT",
    desc: "Showcase your products to the right audience and gain maximum visibility."
  },
  {
    icon: <UsersIcon size={32} className="text-[#154726]" />,
    title: "CONNECT",
    desc: "Network with buyers, investors & partners from across the world."
  },
  {
    icon: <TrendingUp size={32} className="text-[#154726]" />,
    title: "GROW",
    desc: "Expand your business, build lasting relationships and grow globally."
  }
];

const WhyParticipate = () => {
  return (
    <section className="relative w-full bg-[#fdfefc] py-2 lg:py-2 overflow-hidden font-inter">

      {/* Decorative Background Leaves (Top Left, Top Right, Bottom Right) */}
      <Leaf className="absolute -top-10 -left-10 text-[#3b8c2a] opacity-5 -rotate-45" size={200} />
      <Leaf className="absolute top-20 -right-20 text-[#3b8c2a] opacity-[0.03] rotate-12" size={300} />
      <Leaf className="absolute -bottom-20 right-40 text-[#3b8c2a] opacity-[0.03] -rotate-12" size={250} />

      <div className="max-w-[1700px] mx-auto w-full px-4 sm:px-6 lg:px-8 xl:px-11 relative z-10 flex flex-col xl:flex-row gap-8 items-center xl:items-start">

        {/* Left Content Column */}
        <div className="w-full xl:w-[45%] flex flex-col relative z-20">

          {/* Highlighted Text Box */}
          <div className="bg-white/90 backdrop-blur-md rounded-2xl lg:px-3 lg:py-2 sm:p-6 border-[1.5px] border-white/60 shadow-[0_10px_40px_rgba(59,140,42,0.08)] mb-2">
            {/* Badge */}
            <div className="flex items-center gap-3 mb-3">
              <div className="h-[1.5px] w-12 bg-gradient-to-r from-[#3b8c2a] to-transparent"></div>
              <div className="w-8 h-8 rounded-full bg-[#eef5f0] flex items-center justify-center border border-[#d5ebd9] shadow-sm">
                <Leaf size={14} className="text-[#3b8c2a] -rotate-12" />
              </div>
              <p className="text-[#1a3821] font-bold text-[13px] tracking-widest uppercase drop-shadow-sm">
                WHY PARTICIPATE
              </p>
              <div className="h-[1.5px] w-12 bg-gradient-to-r from-[#3b8c2a] to-transparent"></div>
            </div>

            {/* Title */}
            <h2 className="text-[#154726] text-3xl lg:text-[32px] leading-[1.15] font-extrabold mb-3 drop-shadow-sm" style={{ fontFamily: 'Georgia, serif' }}>
              Your Gateway to<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b8c2a] to-[#F2B40E]">Global Opportunities</span>
            </h2>

            {/* Description */}
            <p className="text-[#334155] text-[14px] leading-relaxed max-w-[550px] font-semibold">
              Bharat Organic Expo is India's most influential platform for organic products, innovation, and sustainable solutions—connecting you with the right people, partnerships, and possibilities.
            </p>
          </div>

          {/* List Items */}
          <div className="flex flex-col gap-2 mb-2 max-w-[600px]">
            {listItems.map((item, index) => (
              <div key={index} className="flex items-center justify-between bg-white rounded-full p-1.5 pr-4 shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-gray-100 transition-transform hover:-translate-y-1 hover:shadow-[0_4px_15px_rgba(59,140,42,0.06)] duration-300 group cursor-pointer">
                <div className="flex items-center gap-1">
                  <div className="w-10 h-10 rounded-full bg-[#3b8c2a] flex items-center justify-center shrink-0 shadow-inner scale-90">
                    {item.icon}
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-[#154726] font-bold text-[13px] leading-tight mb-0.5">{item.title}</h4>
                    <p className="text-[#64748b] text-[10.5px] leading-snug pr-2">{item.desc}</p>
                  </div>
                </div>
                <ChevronRight size={16} className="text-gray-400 group-hover:text-[#3b8c2a] transition-colors shrink-0" />
              </div>
            ))}
          </div>

          {/* Action buttons removed from here */}
        </div>

        {/* Right Image & Stats Column */}
        <div className="w-full xl:w-[55%] relative z-10 flex flex-col h-full mt-8 xl:mt-0">

          {/* Main Curved Image Container */}
          <div className="relative w-full h-[300px] lg:h-[400px] overflow-hidden rounded-[24px] rounded-tl-[100px] rounded-br-[100px] shadow-xl mb-2">
            <Image
              src={meetingImg}
              alt="Business Meeting at Expo"
              fill
              className="object-cover"
            />
            {/* Overlay Gradient */}
            {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div> */}
          </div>

          {/* Bottom Dark Green Panel - 3D Compact Look */}
          <div className="w-full bg-[#469e36] text-white rounded-[24px] rounded-tl-[60px] rounded-br-[60px] p-4 lg:px-6 lg:py-3 shadow-[inset_0_2px_4px_rgba(255,255,255,0.2),_0_15px_30px_rgba(0,0,0,0.3)] border border-white/10 relative overflow-hidden group">

            {/* 3D Glass Glow inside the panel */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-64 h-32 bg-[#f58634] rounded-full blur-[80px] opacity-15"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 relative z-10">
              {bottomStats.map((stat, index) => (
                <div key={index} className="flex flex-row items-center text-left gap-3 group/item">

                  {/* 3D Icon Circle */}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white to-[#eef5f0] flex-shrink-0 flex items-center justify-center shadow-[inset_0_2px_4px_rgba(255,255,255,1),_0_6px_12px_rgba(0,0,0,0.2)] border border-white/60 relative z-10 transition-transform duration-300 group-hover/item:scale-110">
                    <div className="scale-75 text-[#154726]">
                      {stat.icon}
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <h3 className="text-white font-extrabold text-[13px] tracking-widest mb-0.5 drop-shadow-md">
                      {stat.title}
                    </h3>
                    <p className="text-green-50/90 text-[10px] leading-[1.3] font-semibold drop-shadow-sm pr-1">
                      {stat.desc}
                    </p>
                  </div>

                </div>
              ))}
            </div>

          </div>

          {/* Action Buttons */}
          <div className="flex flex-row items-center justify-center gap-4 overflow-x-auto no-scrollbar mt-2 py-4 w-full px-2">
            <Link href="#" className="flex shrink-0 items-center gap-1.5 px-6 py-2.5 bg-[#3b8c2a] border-2 border-[#F2B40E] hover:bg-[#F2B40E] hover:text-[#0b2912] text-white text-[11px] font-bold uppercase tracking-wider rounded-full shadow-[0_10px_20px_rgba(59,140,42,0.2)] hover:shadow-[0_15px_30px_rgba(59,140,42,0.3)] hover:-translate-y-0.5 transition-all duration-300">
              <CalendarDays size={14} />
              BOOK A STALL <ArrowRight size={14} className="ml-0.5" />
            </Link>
            <Link href="#" className="flex shrink-0 items-center gap-1.5 px-6 py-2.5 bg-white border-2 border-[#3b8c2a] text-[#3b8c2a] hover:bg-[#3b8c2a] hover:text-white text-[11px] font-bold uppercase tracking-wider rounded-full shadow-sm hover:shadow-[0_10px_20px_rgba(59,140,42,0.2)] hover:-translate-y-0.5 transition-all duration-300">
              <Download size={14} />
              DOWNLOAD BROCHURE
            </Link>
            <Link href="#" className="flex shrink-0 items-center gap-1.5 px-6 py-2.5 bg-white border-2 border-[#3b8c2a] text-[#3b8c2a] hover:bg-[#3b8c2a] hover:text-white text-[11px] font-bold uppercase tracking-wider rounded-full shadow-sm hover:shadow-[0_10px_20px_rgba(59,140,42,0.2)] hover:-translate-y-0.5 transition-all duration-300">
              <Info size={14} />
              WHY EXHIBIT?
            </Link>
          </div>

        </div>

      </div>

    </section>
  );
};

export default WhyParticipate;

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Users, Target, Rocket, Globe, Megaphone, Handshake,
  CalendarDays, Download, Store, Users as UsersIcon, TrendingUp
} from "lucide-react";

import meetingImg from "../../assets/home/bs_meet.png";

const listItems = [
  {
    title: "Meet Genuine Buyers",
    desc: "Connect with top organic buyers, health distributors, natural retailers & wellness industry professionals."
  },
  {
    title: "Generate Quality Leads",
    desc: "Generate high-quality B2B & B2C leads in the organic and wellness sector with faster business conversions."
  },
  {
    title: "Launch New Products",
    desc: "Launch your new natural and Ayurvedic products with maximum visibility & market impact."
  },
  {
    title: "Expand Your Network",
    desc: "Expand your dealer, distributor, franchise & export network across the global organic ecosystem."
  },
  {
    title: "Strengthen Brand Presence",
    desc: "Strengthen your eco-friendly brand presence through live product demos & targeted media exposure."
  },
  {
    title: "Connect with Decision Makers",
    desc: "Connect with health investors, CEOs, holistic doctors & key decision-makers in the wellness industry."
  }
];

const bottomStats = [
  {
    icon: <Store size={26} />,
    title: "EXHIBIT",
    desc: "Showcase your products to the right audience and gain maximum visibility."
  },
  {
    icon: <UsersIcon size={26} />,
    title: "CONNECT",
    desc: "Network with buyers, investors & partners from across the world."
  },
  {
    icon: <TrendingUp size={26} />,
    title: "GROW",
    desc: "Expand your business, build lasting relationships and grow globally."
  }
];

const WhyParticipate = () => {
  return (
    <section className="relative w-full bg-[#f4fbf4] py-2 lg:py-6 overflow-hidden font-inter border-y border-[#3b8c2a]/10">

      <div className="w-full px-4 sm:px-6 lg:px-11 relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-8 lg:items-stretch">

        {/* Left Content Column */}
        <div className="w-full lg:w-[50%] flex flex-col relative z-20">

          {/* Clean Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#3b8c2a]/20 mb-3 shadow-sm w-fit mx-auto lg:mx-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f58634] animate-pulse"></span>
            <span className="text-[11px] md:text-[12px] font-bold tracking-[0.2em] uppercase text-[#3b8c2a]">
              WHY PARTICIPATE
            </span>
          </div>

          {/* Title */}
          <h2 className="text-[#1a3821] text-[22px] md:text-[32px] lg:text-[38px] leading-[1.2] font-semibold mb-3 font-poppins tracking-tight text-center lg:text-left">
            Your Gateway to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b8c2a] to-[#F2B40E]">Global Opportunities</span>
          </h2>

          {/* Description */}
          <p className="text-slate-600 text-[15px] md:text-[17px] leading-[1.7] mb-4 font-medium text-center lg:text-left">
            Bharat Organic Expo is India's most influential platform for organic products, innovation, and sustainable solutions—connecting you with the right people, partnerships, and possibilities.
          </p>

          {/* Grid Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {listItems.map((item, index) => (
              <div key={index} className="flex flex-col gap-2 bg-white rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(59,140,42,0.08)] group cursor-default">
                <h4 className="text-[#1a3821] font-semibold text-[15px] md:text-[16px] leading-[1.3] group-hover:text-[#3b8c2a] transition-colors">{item.title}</h4>
                <p className="text-slate-600 text-[13.5px] leading-[1.6]">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>

        <div className="w-full lg:w-[50%] relative z-10 flex flex-col">

          {/* Main Curved Image Container */}
          <div className="relative w-full aspect-[4/3] lg:aspect-auto flex-1 overflow-hidden rounded-3xl shadow-2xl mb-4 group min-h-[300px]">
            <Image
              src={meetingImg}
              alt="Business Meeting at Expo"
              fill
              className="object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

            {/* Overlay Action Buttons inside Image */}
            <div className="absolute bottom-6 left-0 right-0 flex flex-wrap justify-center gap-3 px-4">
              <Link href="#" className="flex items-center gap-2 px-5 py-2.5 bg-[#3b8c2a] hover:bg-[#F2B40E] text-white hover:text-[#0b2912] text-[12px] md:text-[13px] font-bold uppercase tracking-wider rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-md">
                <CalendarDays size={16} />
                BOOK A STALL
              </Link>
              <Link href="#" className="flex items-center gap-2 px-5 py-2.5 bg-white/90 text-[#3b8c2a] hover:bg-white text-[12px] md:text-[13px] font-bold uppercase tracking-wider rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-md">
                <Download size={16} />
                BROCHURE
              </Link>
            </div>
          </div>

          {/* Bottom Stats Grid */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 mt-1">
            {bottomStats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-center gap-3 bg-white p-5 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(59,140,42,0.1)] group/item">
                <div className="w-14 h-14 rounded-full bg-[#f4fbf4] flex items-center justify-center border border-[#d5ebd9] shadow-inner group-hover/item:bg-[#3b8c2a] group-hover/item:border-[#3b8c2a] transition-all duration-500">
                  {React.cloneElement(stat.icon as React.ReactElement<{ className?: string }>, { className: "text-[#3b8c2a] group-hover/item:text-white transition-colors duration-500" })}
                </div>
                <div>
                  <h3 className="text-[#1a3821] font-bold text-[15px] tracking-[0.1em] mb-1.5 uppercase group-hover/item:text-[#3b8c2a] transition-colors">
                    {stat.title}
                  </h3>
                  <p className="text-slate-600 text-[13px] leading-[1.6]">
                    {stat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
};

export default WhyParticipate;

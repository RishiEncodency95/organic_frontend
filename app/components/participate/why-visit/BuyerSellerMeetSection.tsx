"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ShieldCheck, Handshake, TrendingUp, ArrowRight, CheckCircle2, Users, Mic, Globe, MapPin } from "lucide-react";

import b2bOg from "@/app/assets/banner/b2bog.png";

const BuyerSellerMeetSection = () => {
  return (
    <section className="py-16 bg-[#f0f6f0] font-inter relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#285e19] text-white px-4 py-1 rounded-full font-poppins font-bold text-xs uppercase tracking-widest shadow-sm">
            REASON TO VISIT
          </div>

          <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-[#112a12]">
            Buyer–Seller Meet
          </h2>

          <p className="font-poppins font-bold text-sm sm:text-base text-[#285e19] tracking-wider uppercase">
            MEET. CONNECT. GROW.
          </p>

          <p className="font-inter text-slate-600 text-sm sm:text-base leading-relaxed">
            A focused platform to connect serious buyers with trusted exhibitors and build long-term business relationships.
          </p>
        </div>

        {/* MAIN 2-COLUMN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-14">
          
          {/* LEFT IMAGE DISPLAY */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl group">
              <Image
                src={b2bOg}
                alt="Buyer-Seller Meet at Bharat Organic Expo"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="bg-[#285e19]/90 backdrop-blur-md px-4 py-2 rounded-xl inline-block mb-2">
                  <p className="font-poppins font-bold text-xs uppercase tracking-wider">BUYER MEET</p>
                </div>
                <p className="font-inter text-xs text-slate-200">
                  Pre-arranged B2B Meetings for High-Volume Procurement
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT 4 FEATURE CARDS */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Feature 1 */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#e8f3e7] text-[#285e19] flex items-center justify-center mb-3">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="font-poppins font-bold text-base text-[#112a12] mb-1">
                  Pre-scheduled Meetings
                </h3>
                <p className="font-inter text-xs text-slate-600 leading-relaxed">
                  We connect you with relevant exhibitors before the expo.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#e8f3e7] text-[#285e19] flex items-center justify-center mb-3">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-poppins font-bold text-base text-[#112a12] mb-1">
                  Quality Connections
                </h3>
                <p className="font-inter text-xs text-slate-600 leading-relaxed">
                  Meet verified manufacturers, suppliers & brands.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#e8f3e7] text-[#285e19] flex items-center justify-center mb-3">
                  <Handshake className="w-6 h-6" />
                </div>
                <h3 className="font-poppins font-bold text-base text-[#112a12] mb-1">
                  Save Time, Close Deals
                </h3>
                <p className="font-inter text-xs text-slate-600 leading-relaxed">
                  One-to-one meetings that help you discover, compare & decide.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#e8f3e7] text-[#285e19] flex items-center justify-center mb-3">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="font-poppins font-bold text-base text-[#112a12] mb-1">
                  Grow Your Business
                </h3>
                <p className="font-inter text-xs text-slate-600 leading-relaxed">
                  Explore new products, expand your portfolio & increase margins.
                </p>
              </div>

            </div>

            {/* CTA ROW */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/registration/buyer-registration"
                className="bg-[#112a12] hover:bg-[#285e19] text-white font-poppins font-semibold px-7 py-3.5 rounded-xl flex items-center gap-3 transition-all duration-300 shadow-md"
              >
                <span>REGISTER AS BUYER</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="flex items-center gap-2 text-xs font-poppins font-semibold text-slate-700 bg-white px-4 py-3 rounded-xl border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#285e19]" />
                <span>Exclusive for Serious Business Buyers</span>
              </div>
            </div>

          </div>

        </div>

        {/* BOTTOM STATS & LOCATION BAR */}
        <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200 mb-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
            <div className="flex items-center gap-4 px-2">
              <div className="w-10 h-10 rounded-full bg-[#e8f3e7] text-[#285e19] flex items-center justify-center shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-poppins font-bold text-lg text-[#112a12]">200+</h4>
                <p className="font-inter text-xs text-slate-600">EXHIBITORS Across Ecosystem</p>
              </div>
            </div>

            <div className="flex items-center gap-4 px-2 sm:pl-4 pt-3 sm:pt-0">
              <div className="w-10 h-10 rounded-full bg-[#e8f3e7] text-[#285e19] flex items-center justify-center shrink-0">
                <Mic className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-poppins font-bold text-lg text-[#112a12]">150+</h4>
                <p className="font-inter text-xs text-slate-600">SPEAKERS Industry Leaders</p>
              </div>
            </div>

            <div className="flex items-center gap-4 px-2 sm:pl-4 pt-3 sm:pt-0">
              <div className="w-10 h-10 rounded-full bg-[#e8f3e7] text-[#285e19] flex items-center justify-center shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-poppins font-bold text-lg text-[#112a12]">8,000+</h4>
                <p className="font-inter text-xs text-slate-600">BUSINESS VISITORS</p>
              </div>
            </div>

            <div className="flex items-center gap-4 px-2 sm:pl-4 pt-3 sm:pt-0">
              <div className="w-10 h-10 rounded-full bg-[#e8f3e7] text-[#285e19] flex items-center justify-center shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-poppins font-bold text-base text-[#112a12]">GLOBAL</h4>
                <p className="font-inter text-xs text-slate-600">PARTICIPATION</p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM DARK GREEN BANNER STRIP */}
        <div className="bg-[#112a12] text-white rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex flex-wrap items-center gap-6 font-poppins font-semibold text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#86efac]" />
              <span>19–21 FEBRUARY 2027</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#86efac]" />
              <span>HALL 12, BHARAT MANDAPAM, NEW DELHI</span>
            </div>
          </div>

          <Link
            href="/registration/visitor-registration"
            className="bg-[#86efac] hover:bg-[#6ee7b7] text-[#112a12] font-poppins font-bold text-xs px-5 py-2.5 rounded-xl flex items-center gap-2 transition-all shrink-0"
          >
            <span>PLAN YOUR VISIT NOW</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default BuyerSellerMeetSection;

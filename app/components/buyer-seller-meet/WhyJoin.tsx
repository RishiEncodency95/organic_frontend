"use client";
import React from "react";
import { CheckCircle2, ShoppingCart, User, Laptop } from "lucide-react";
import a3ogImg from "../../assets/image/a3og.png";
import a1ogImg from "../../assets/image/a1og.png";
import a2ogImg from "../../assets/image/a2og.png";
import leafsImg from "../../assets/icons/leafs.png";

export default function WhyJoin() {
  const buyerPoints = [
    "Discover New Suppliers",
    "Compare Products & Solutions",
    "Explore New Brands",
    "Develop Sourcing Partnerships",
    "Build Industry Connections",
  ];

  const exhibitorPoints = [
    "Meet Relevant Buyers",
    "Generate B2B Opportunities",
    "Expand Market Reach",
    "Explore Strategic Partnerships",
    "Build Brand Awareness",
  ];

  return (
    <section className="pt-2 pb-8 bg-white font-inter relative overflow-hidden">
      {/* Decorative Left Image */}
      <div className="absolute left-0 top-[5%] pointer-events-none opacity-100 w-20 md:w-28 lg:w-40 z-0">
        <img src={leafsImg.src} alt="Leaf Decoration" className="w-full h-auto object-contain -translate-x-1/4" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        {/* Removed central heading */}

        <div className="flex flex-col md:flex-row gap-6">
          
          {/* For Buyers */}
          {/* For Buyers */}
          <div 
            className="w-full md:w-[40%] bg-[#f8fbf8] rounded-xl flex items-center px-8 py-5"
            style={{ boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" }}
          >
            <img src={a1ogImg.src} alt="Buyer" className="hidden sm:block w-32 h-auto object-contain flex-shrink-0 mr-8" />
            <div>
              <p className="text-[12px] md:text-sm font-bold text-[#1b5e20] uppercase tracking-wider mb-2 text-center sm:text-left whitespace-nowrap">
                WHY JOIN THE BUYER-SELLER MEET?
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-poppins text-center sm:text-left">For Buyers</h3>
              <ul className="space-y-3">
                {buyerPoints.map((p, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-[#1b5e20] shrink-0" fill="currentColor" stroke="white" />
                    <span className="text-sm font-semibold text-[#4B1426]">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* For Exhibitors */}
          <div 
            className="w-full md:w-[60%] bg-[#fffbf8] rounded-xl flex items-stretch overflow-hidden"
            style={{ boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" }}
          >
            <div className="px-8 py-5 flex items-center flex-1">
              <img src={a2ogImg.src} alt="Exhibitor Icon" className="hidden sm:block w-32 h-auto object-contain flex-shrink-0 mr-8" />
              <div>
                <p className="text-[12px] md:text-sm font-bold text-[#1b5e20] uppercase tracking-wider mb-2 text-center sm:text-left whitespace-nowrap">
                  WHY JOIN THE BUYER-SELLER MEET?
                </p>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-poppins text-center sm:text-left">For Exhibitors</h3>
                <ul className="space-y-3">
                  {exhibitorPoints.map((p, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-[#ea580c] shrink-0" fill="currentColor" stroke="white" />
                      <span className="text-sm font-semibold text-[#4B1426]">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* External Exhibitor Image */}
          <img src={a3ogImg.src} alt="Exhibitor" className="hidden lg:block w-48 h-64 object-cover object-center shrink-0 self-center rounded-xl" />

        </div>
      </div>
    </section>
  );
}

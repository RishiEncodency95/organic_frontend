"use client";
import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Mail, Phone, Globe, MapPin } from "lucide-react";
import pleaf from "@/app/assets/icons/pleaf.png";
import leafRight from "@/app/assets/icons/leafright.png";
import logiog from "@/app/assets/icons/logiog.png";
import leafsImg from "@/app/assets/icons/leafs.png";

export default function WhyPartnerLogistics() {
  const [stateVal, setStateVal] = useState("");
  const [categoryVal, setCategoryVal] = useState("Logistics Partner");
  const [agreed, setAgreed] = useState(false);

  const points = [
    "Position your brand as a dependable logistics expert",
    "Build strong relationships with exhibitors & event organizers",
    "Enhance brand recall, credibility & visibility",
    "Connect with a large network of industry stakeholders",
    "Support a sustainable & well-organized event experience"
  ];

  const statesList = [
    "Delhi", "Maharashtra", "Karnataka", "Tamil Nadu", "Gujarat", 
    "Uttar Pradesh", "Haryana", "Telangana", "West Bengal", "Other"
  ];

  return (
    <section className="pt-4 pb-4 bg-white font-inter relative overflow-hidden">
      {/* Left Decorative Image */}
      <img 
        src={leafsImg.src} 
        alt="Left Decoration" 
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/4 w-32 md:w-48 object-contain pointer-events-none z-10 opacity-100" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Why Partner */}
          <div className="lg:col-span-4 bg-[#F5F4EF] p-8 rounded-2xl border border-gray-150 flex flex-col justify-between relative overflow-hidden">
            <div>
              <h3 className="text-[14px] md:text-[16px] lg:text-[15px] xl:text-[17px] whitespace-normal md:whitespace-nowrap font-semibold text-[#1b5e20] uppercase font-poppins mb-6 leading-tight">
                WHY PARTNER AS LOGISTICS PARTNER?
              </h3>
              
              <ul className="space-y-5 relative z-10">
                {points.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full border border-[#1b5e20] bg-transparent flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-4 h-4 text-[#1b5e20]">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.6L3 8l6 5-3 3-3-1-2 2 4 4 2-2-1-3 3-3 5 6 1.2-.7c.4-.2.7-.6.6-1.1Z"/></svg>
                      </div>
                    </div>
                    <span className="text-[13px] md:text-sm font-bold text-gray-900 leading-snug">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <img 
              src={logiog.src} 
              alt="Logistics Decoration" 
              className="absolute right-0 bottom-0 w-56 md:w-72 object-contain pointer-events-none opacity-100 mix-blend-multiply" 
            />
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-8 bg-white p-8 rounded-2xl border border-gray-150 relative overflow-hidden flex flex-col justify-center"
               style={{ boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px" }}>
            
            <div className="mb-6 relative z-10 flex flex-col items-center">
              <div className="flex items-center gap-4 mb-4 w-full justify-center">
                <div className="h-[1px] flex-1 bg-gray-300"></div>
                <div className="flex items-center gap-2 px-2 shrink-0">
                  <h3 className="text-xl md:text-2xl font-semibold text-[#1b5e20] uppercase font-poppins text-center">
                    PARTNER WITH US
                  </h3>
                </div>
                <div className="h-[1px] flex-1 bg-gray-300"></div>
              </div>
              <p className="text-xs font-bold text-gray-800 w-full text-left">
                Fill in your details and our team will connect with you shortly.
              </p>
            </div>

            <form className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-5">
                
                {/* Row 1 */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-900">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    placeholder="Enter full name" 
                    required 
                    className="w-full px-4 py-2 border border-gray-200 rounded-md bg-white text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#113217] focus:border-[#113217]" 
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-900">
                    Designation <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    placeholder="Enter designation" 
                    required 
                    className="w-full px-4 py-2 border border-gray-200 rounded-md bg-white text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#113217] focus:border-[#113217]" 
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-900">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="email" 
                    placeholder="Enter email address" 
                    required 
                    className="w-full px-4 py-2 border border-gray-200 rounded-md bg-white text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#113217] focus:border-[#113217]" 
                  />
                </div>

                {/* Row 2 */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-900">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="tel" 
                    placeholder="Enter mobile number" 
                    required 
                    className="w-full px-4 py-2 border border-gray-200 rounded-md bg-white text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#113217] focus:border-[#113217]" 
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-900">
                    Organization / Company Name <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    placeholder="Enter organization name" 
                    required 
                    className="w-full px-4 py-2 border border-gray-200 rounded-md bg-white text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#113217] focus:border-[#113217]" 
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-900">
                    Website (if any)
                  </label>
                  <input 
                    type="url" 
                    placeholder="Enter website" 
                    className="w-full px-4 py-2 border border-gray-200 rounded-md bg-white text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#113217] focus:border-[#113217]" 
                  />
                </div>

                {/* Row 3 */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-900">
                    City <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    placeholder="Enter city" 
                    required 
                    className="w-full px-4 py-2 border border-gray-200 rounded-md bg-white text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#113217] focus:border-[#113217]" 
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-900">
                    State <span className="text-red-500">*</span>
                  </label>
                  <select 
                    required 
                    value={stateVal}
                    onChange={(e) => setStateVal(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-200 rounded-md bg-white text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#113217] focus:border-[#113217]"
                  >
                    <option value="" disabled hidden>Select state</option>
                    {statesList.map((st) => (
                      <option key={st} value={st}>{st}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-900">
                    Preferred Partner Category <span className="text-red-500">*</span>
                  </label>
                  <select 
                    required 
                    value={categoryVal}
                    onChange={(e) => setCategoryVal(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-200 rounded-md bg-white text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#113217] focus:border-[#113217]"
                  >
                    <option value="Travel Partner">Travel Partner</option>
                    <option value="Hotel & Stay">Hotel & Stay Partner</option>
                    <option value="Stall Design">Stall Design & Fabrication</option>
                    <option value="Logistics">Logistics Partner</option>
                    <option value="Printing">Printing & Branding</option>
                    <option value="Manpower Supply">Manpower Supply Partner</option>
                  </select>
                </div>

                {/* Tell Us About Your Organization */}
                <div className="flex flex-col gap-1.5 md:col-span-3">
                  <label className="text-xs font-bold text-gray-900">
                    Tell Us About Your Organization <span className="text-red-500">*</span>
                  </label>
                  <textarea 
                    placeholder="Briefly describe your organization and how you would like to partner with us." 
                    rows={3} 
                    required
                    className="w-full px-4 py-2 border border-gray-200 rounded-md bg-white text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#113217] focus:border-[#113217] resize-none"
                  />
                </div>

                {/* Footer Row */}
                <div className="md:col-span-3 flex flex-col md:flex-row items-center justify-between gap-4 mt-2">
                  <div className="flex items-center gap-2">
                    <input 
                      type="checkbox" 
                      id="agree" 
                      checked={agreed} 
                      onChange={(e) => setAgreed(e.target.checked)} 
                      className="w-4 h-4 text-[#1b5e20] focus:ring-[#1b5e20] border-gray-300 rounded"
                      required
                    />
                    <label htmlFor="agree" className="text-xs font-bold text-gray-700 cursor-pointer">
                      I agree to the <span className="text-[#1b5e20] hover:underline">Terms &amp; Conditions</span> and <span className="text-[#1b5e20] hover:underline">Privacy Policy</span>.
                    </label>
                  </div>

                  <button 
                    type="submit" 
                    className="bg-[#113217] hover:bg-[#1a4f22] text-white px-8 py-2.5 rounded-md font-bold text-xs tracking-wider uppercase transition-colors flex items-center gap-2"
                    style={{ boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px" }}
                  >
                    SUBMIT REGISTRATION <ArrowRight size={14} />
                  </button>
                </div>

              </div>
            </form>
          </div>

        </div>

        {/* Contact Footer Bar - Styled to match screenshot in one line without card/shadow */}
        <div className="mt-12 bg-white pt-6 border-t border-gray-200 flex flex-wrap lg:flex-nowrap items-center justify-between gap-4 w-full">
          <div className="text-gray-900 font-bold text-xs lg:text-[13px] uppercase tracking-wider whitespace-nowrap">
            For partnership enquiries, please contact:
          </div>
          
          <div className="hidden lg:block border-l border-gray-300 h-6 shrink-0" />
          
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#d6a549] flex items-center justify-center text-white shrink-0">
              <Mail size={16} />
            </div>
            <a href="mailto:partnership@bharatorganicexpo.in" className="text-xs lg:text-[13px] font-bold text-gray-900 hover:text-[#113217] transition-colors whitespace-nowrap">
              partnership@bharatorganicexpo.in
            </a>
          </div>

          <div className="hidden lg:block border-l border-gray-300 h-6 shrink-0" />

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#d6a549] flex items-center justify-center text-white shrink-0">
              <Phone size={16} />
            </div>
            <a href="tel:+917428991115" className="text-xs lg:text-[13px] font-bold text-gray-900 hover:text-[#113217] transition-colors whitespace-nowrap">
              +91 7428 99 1115
            </a>
          </div>

          <div className="hidden lg:block border-l border-gray-300 h-6 shrink-0" />

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#d6a549] flex items-center justify-center text-white shrink-0">
              <Globe size={16} />
            </div>
            <a href="https://www.bharatorganicexpo.in" target="_blank" rel="noreferrer" className="text-xs lg:text-[13px] font-bold text-gray-900 hover:text-[#113217] transition-colors whitespace-nowrap">
              www.bharatorganicexpo.in
            </a>
          </div>

          <div className="hidden lg:block border-l border-gray-300 h-6 shrink-0" />

          <div className="flex items-center gap-2.5">
            <MapPin size={24} className="text-[#d6a549] shrink-0" />
            <div className="text-[10px] lg:text-[11px] font-bold text-gray-900 leading-tight">
              <div className="whitespace-nowrap">Pragati Maidan,</div>
              <div className="whitespace-nowrap">New Delhi, India</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

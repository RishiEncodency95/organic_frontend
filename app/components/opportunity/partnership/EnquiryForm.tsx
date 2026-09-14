"use client";
import React, { useState } from "react";
import { ArrowRight, Mail, Phone, Globe, MapPin } from "lucide-react";
import hogImg from "@/app/assets/icons/hog.png";
import rightRightImg from "@/app/assets/icons/leafright.png";
import SectionContainer from "@/app/components/layout/SectionContainer";

export const ENQUIRY_FORM_DATA = [
  {
    id: 1,
    leftTitle: "CUSTOM PARTNERSHIP\nPACKAGES AVAILABLE",
    leftDesc: "We offer customized partnership solutions tailored to your marketing goals and budget.",
    leftButtonText: "LET'S COLLABORATE",
    formTitle: "INTERESTED IN PARTNERSHIP?",
    formSubtitle: "Fill in your details and our team will get in touch with you.",
    contactEmail: "info@namogangewellness.com",
    contactPhone: "+91-9654900525",
    contactWebsite: "bharatorganicexpo.com",
    contactWebsiteUrl: "https://bharatorganicexpo.com/",
    contactLocationLine1: "Pragati Maidan,",
    contactLocationLine2: "New Delhi, India",
    categories: [
      { label: "Hotel & Stay Partner", value: "Hotel & Stay" },
      { label: "Travel Partner", value: "Travel" },
      { label: "Stall Design & Fabrication", value: "Stall Design" },
      { label: "Logistics Partner", value: "Logistics" },
      { label: "Printing & Branding", value: "Printing" },
      { label: "Manpower Supply Partner", value: "Manpower Supply" },
      { label: "Custom Partnership", value: "Custom" },
    ]
  }
];

export default function EnquiryForm() {
  const [category, setCategory] = useState("");
  const data = ENQUIRY_FORM_DATA[0];

  return (
    <section className="pt-4 pb-6 bg-white font-inter">
      <SectionContainer>
        <div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-0 rounded-2xl overflow-hidden"
          style={{ boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px" }}
        >
          
          {/* Left Green Box */}
          <div className="bg-[#113217] py-8 px-10 flex flex-col justify-center items-center text-center relative overflow-hidden">
            <img src={hogImg.src} alt="Partnership Icon" className="w-20 h-20 object-contain mb-6 relative z-10" />
            
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 font-poppins relative z-10 uppercase leading-[1.1] whitespace-pre-line">
              {data.leftTitle}
            </h3>
            
            <p className="text-gray-300 text-xs md:text-sm mb-6 relative z-10 leading-relaxed max-w-[280px]">
              {data.leftDesc}
            </p>
            
            <button 
              className="bg-[#d6a549] hover:bg-[#b88c3a] text-white px-6 py-2.5 rounded-md font-bold text-xs tracking-wider uppercase transition-colors relative z-10 flex items-center gap-2"
              style={{ boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px" }}
            >
              {data.leftButtonText} <ArrowRight size={14} />
            </button>
            
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-[#194c21] rounded-full blur-2xl opacity-50"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-[#0c2410] rounded-full blur-2xl opacity-50"></div>
          </div>

          {/* Right Form Box */}
          <div className="lg:col-span-2 bg-white py-8 px-10 relative overflow-hidden flex flex-col justify-center">
            <img 
              src={rightRightImg.src} 
              alt="Right Corner Leaf" 
              className="absolute right-0 top-0 w-24 md:w-32 object-contain pointer-events-none z-0" 
            />
            <div className="mb-6 relative z-10">
              <h3 className="text-xl md:text-2xl font-semibold text-[#1b5e20] font-poppins uppercase leading-[1.1] mb-1">
                {data.formTitle}
              </h3>
              <p className="text-xs font-bold text-gray-800">
                {data.formSubtitle}
              </p>
            </div>

            <form className="space-y-4 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="relative bg-gray-50 rounded-md">
                  <input 
                    type="text" 
                    placeholder=" " 
                    required 
                    className="peer w-full px-4 py-2.5 border border-gray-200 rounded-md bg-transparent text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#113217] focus:border-[#113217] relative z-10" 
                  />
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-sm text-gray-600 font-semibold z-0 opacity-0 peer-placeholder-shown:opacity-100 transition-opacity">
                    Full Name <span className="text-red-500 ml-1 font-bold">*</span>
                  </div>
                </div>

                {/* Organization */}
                <div className="relative bg-gray-50 rounded-md">
                  <input 
                    type="text" 
                    placeholder=" " 
                    required 
                    className="peer w-full px-4 py-2.5 border border-gray-200 rounded-md bg-transparent text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#113217] focus:border-[#113217] relative z-10" 
                  />
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-sm text-gray-600 font-semibold z-0 opacity-0 peer-placeholder-shown:opacity-100 transition-opacity">
                    Organization <span className="text-red-500 ml-1 font-bold">*</span>
                  </div>
                </div>

                {/* Email ID */}
                <div className="relative bg-gray-50 rounded-md">
                  <input 
                    type="email" 
                    placeholder=" " 
                    required 
                    className="peer w-full px-4 py-2.5 border border-gray-200 rounded-md bg-transparent text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#113217] focus:border-[#113217] relative z-10" 
                  />
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-sm text-gray-600 font-semibold z-0 opacity-0 peer-placeholder-shown:opacity-100 transition-opacity">
                    Email ID <span className="text-red-500 ml-1 font-bold">*</span>
                  </div>
                </div>

                {/* Mobile Number */}
                <div className="relative bg-gray-50 rounded-md">
                  <input 
                    type="tel" 
                    placeholder=" " 
                    required 
                    className="peer w-full px-4 py-2.5 border border-gray-200 rounded-md bg-transparent text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#113217] focus:border-[#113217] relative z-10" 
                  />
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-sm text-gray-600 font-semibold z-0 opacity-0 peer-placeholder-shown:opacity-100 transition-opacity">
                    Mobile Number <span className="text-red-500 ml-1 font-bold">*</span>
                  </div>
                </div>

                {/* Partnership Category */}
                <div className="relative bg-gray-50 rounded-md">
                  <select 
                    required 
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-md bg-transparent text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#113217] focus:border-[#113217] relative z-10"
                  >
                    <option value="" disabled hidden></option>
                    {data.categories.map((cat, idx) => (
                      <option key={idx} value={cat.value}>{cat.label}</option>
                    ))}
                  </select>
                  {!category && (
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-sm text-gray-600 font-semibold z-0">
                      Partnership Category <span className="text-red-500 ml-1 font-bold">*</span>
                    </div>
                  )}
                </div>

                {/* Message */}
                <div className="relative bg-gray-50 rounded-md md:row-span-2">
                  <textarea 
                    placeholder=" " 
                    rows={4} 
                    className="peer w-full px-4 py-2.5 border border-gray-200 rounded-md bg-transparent text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#113217] focus:border-[#113217] resize-none h-full relative z-10"
                  />
                  <div className="absolute top-2.5 left-4 pointer-events-none text-sm text-gray-600 font-semibold z-0 opacity-0 peer-placeholder-shown:opacity-100 transition-opacity">
                    Message
                  </div>
                </div>

                {/* Submit button */}
                <div>
                  <button 
                    type="submit" 
                    className="bg-[#113217] hover:bg-[#1a4f22] text-white px-8 py-2.5 rounded-md font-bold text-xs tracking-wider uppercase transition-colors flex items-center gap-2"
                    style={{ boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px" }}
                  >
                    SUBMIT ENQUIRY <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </form>
            
            <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
              <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M190 20C170 30 150 50 140 80C160 70 180 80 190 100" stroke="#113217" strokeWidth="2"/>
                <path d="M140 80C120 100 110 130 120 160C140 140 160 140 180 150" stroke="#113217" strokeWidth="2"/>
                <path d="M120 160C100 170 80 190 60 200" stroke="#113217" strokeWidth="2"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Contact Footer Bar */}
        <div className="mt-4 bg-white pt-4 border-t border-gray-200 flex flex-wrap lg:flex-nowrap items-center justify-between gap-4 w-full">
          <div className="text-gray-900 font-bold text-xs lg:text-[13px] uppercase tracking-wider whitespace-nowrap">
            For partnership enquiries, please contact:
          </div>
          
          <div className="hidden lg:block border-l border-gray-300 h-6 shrink-0" />
          
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#d6a549] flex items-center justify-center text-white shrink-0">
              <Mail size={16} />
            </div>
            <a href={`mailto:${data.contactEmail}`} className="text-xs lg:text-[13px] font-bold text-gray-900 hover:text-[#113217] transition-colors whitespace-nowrap">
              {data.contactEmail}
            </a>
          </div>

          <div className="hidden lg:block border-l border-gray-300 h-6 shrink-0" />

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#d6a549] flex items-center justify-center text-white shrink-0">
              <Phone size={16} />
            </div>
            <a href={`tel:${data.contactPhone}`} className="text-xs lg:text-[13px] font-bold text-gray-900 hover:text-[#113217] transition-colors whitespace-nowrap">
              {data.contactPhone}
            </a>
          </div>

          <div className="hidden lg:block border-l border-gray-300 h-6 shrink-0" />

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#d6a549] flex items-center justify-center text-white shrink-0">
              <Globe size={16} />
            </div>
            <a href={data.contactWebsiteUrl} target="_blank" rel="noopener noreferrer" className="text-xs lg:text-[13px] font-bold text-blue-600 hover:underline transition-colors whitespace-nowrap">
              {data.contactWebsite}
            </a>
          </div>

          <div className="hidden lg:block border-l border-gray-300 h-6 shrink-0" />

          <div className="flex items-center gap-2.5">
            <MapPin size={24} className="text-[#d6a549] shrink-0" />
            <div className="text-[10px] lg:text-[11px] font-bold text-gray-900 leading-tight">
              <div className="whitespace-nowrap">{data.contactLocationLine1}</div>
              <div className="whitespace-nowrap">{data.contactLocationLine2}</div>
            </div>
          </div>
        </div>
        
      </SectionContainer>
    </section>
  );
}

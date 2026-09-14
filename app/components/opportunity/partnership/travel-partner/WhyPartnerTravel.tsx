"use client";
import React, { useState } from "react";
import { ArrowRight, Mail, Phone, Globe, MapPin, Plane } from "lucide-react";
import leafsImg from "@/app/assets/icons/leafs.png";
import traog from "@/app/assets/icons/traog.png";
import SectionContainer from "@/app/components/layout/SectionContainer";

export const WHY_PARTNER_TRAVEL_DATA = [
  {
    id: 1,
    leftTitleLine1: "WHY PARTNER AS",
    leftTitleLine2: "TRAVEL PARTNER?",
    formTitle: "PARTNER WITH US",
    formSubtitle: "Fill in your details and our team will connect with you shortly.",
    contactEmail: "info@namogangewellness.com",
    contactPhone: "+91-9654900525",
    contactWebsite: "bharatorganicexpo.com",
    contactWebsiteUrl: "https://bharatorganicexpo.com/",
    contactLocationLine1: "Pragati Maidan,",
    contactLocationLine2: "New Delhi, India",
    points: [
      "Position your agency as the official travel partner for India's premier organic expo",
      "Gain direct bookings from 8,000+ delegates, exhibitors & international buyers",
      "Offer flight, cab, bus & airport transfer packages to delegates",
      "Build long-term corporate & MICE travel partnerships",
      "Increase brand visibility & recall across all event platforms",
      "Enhance delegate travel convenience with customized packages"
    ],
    statesList: [
      "Delhi", "Maharashtra", "Karnataka", "Tamil Nadu", "Gujarat", 
      "Uttar Pradesh", "Haryana", "Telangana", "West Bengal", "Other"
    ],
  }
];

export default function WhyPartnerTravel() {
  const [stateVal, setStateVal] = useState("");
  const [categoryVal, setCategoryVal] = useState("Travel Partner");
  const [agreed, setAgreed] = useState(false);

  const data = WHY_PARTNER_TRAVEL_DATA[0];

  return (
    <section className="pt-4 pb-4 bg-white font-inter relative overflow-hidden">
      <img 
        src={leafsImg.src} 
        alt="Left Decoration" 
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/4 w-32 md:w-48 object-contain pointer-events-none z-10 opacity-100" 
      />

      <SectionContainer className="relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column */}
          <div className="lg:col-span-4 bg-[#F5F4EF] p-8 pb-0 rounded-2xl border border-gray-150 flex flex-col justify-between relative overflow-hidden">
            <div>
              <h3 className="text-base md:text-lg lg:text-[17px] xl:text-[19px] font-semibold text-[#1b5e20] uppercase font-poppins mb-6 leading-tight">
                {data.leftTitleLine1}<br />{data.leftTitleLine2}
              </h3>
              
              <ul className="space-y-5 relative z-10">
                {data.points.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full border border-[#1b5e20] bg-transparent flex items-center justify-center shrink-0 mt-0.5">
                      <Plane className="w-3.5 h-3.5 text-[#1b5e20]" />
                    </div>
                    <span className="text-[13px] md:text-sm font-bold text-gray-900 leading-snug">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <img 
              src={traog.src} 
              alt="Travel Decoration" 
              className="w-full object-contain pointer-events-none mt-1" 
            />
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-8 bg-white p-8 rounded-2xl border border-gray-150 relative overflow-hidden flex flex-col justify-center"
               style={{ boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px" }}>
            
            <div className="mb-6 relative z-10 flex flex-col items-center">
              <div className="flex items-center gap-4 mb-4 w-full justify-center">
                <div className="h-[1px] flex-1 bg-gray-300"></div>
                <h3 className="text-xl md:text-2xl font-semibold text-[#1b5e20] uppercase font-poppins text-center px-2 shrink-0">
                  {data.formTitle}
                </h3>
                <div className="h-[1px] flex-1 bg-gray-300"></div>
              </div>
              <p className="text-xs font-bold text-gray-800 w-full text-left">
                {data.formSubtitle}
              </p>
            </div>

            <form className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-5">
                
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-900">Full Name <span className="text-red-500">*</span></label>
                  <input type="text" placeholder="Enter full name" required className="w-full px-4 py-2 border border-gray-200 rounded-md bg-white text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#113217] focus:border-[#113217]" />
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-900">Designation <span className="text-red-500">*</span></label>
                  <input type="text" placeholder="Enter designation" required className="w-full px-4 py-2 border border-gray-200 rounded-md bg-white text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#113217] focus:border-[#113217]" />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-900">Email Address <span className="text-red-500">*</span></label>
                  <input type="email" placeholder="Enter email address" required className="w-full px-4 py-2 border border-gray-200 rounded-md bg-white text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#113217] focus:border-[#113217]" />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-900">Mobile Number <span className="text-red-500">*</span></label>
                  <input type="tel" placeholder="Enter mobile number" required className="w-full px-4 py-2 border border-gray-200 rounded-md bg-white text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#113217] focus:border-[#113217]" />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-900">Organization / Company Name <span className="text-red-500">*</span></label>
                  <input type="text" placeholder="Enter organization name" required className="w-full px-4 py-2 border border-gray-200 rounded-md bg-white text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#113217] focus:border-[#113217]" />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-900">Website (if any)</label>
                  <input type="url" placeholder="Enter website" className="w-full px-4 py-2 border border-gray-200 rounded-md bg-white text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#113217] focus:border-[#113217]" />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-900">City <span className="text-red-500">*</span></label>
                  <input type="text" placeholder="Enter city" required className="w-full px-4 py-2 border border-gray-200 rounded-md bg-white text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#113217] focus:border-[#113217]" />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-900">State <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <select required value={stateVal} onChange={(e) => setStateVal(e.target.value)}
                      className={`w-full px-4 py-2 border border-gray-200 rounded-md bg-white text-sm focus:outline-none focus:ring-1 focus:ring-[#113217] focus:border-[#113217] appearance-none ${!stateVal ? 'text-gray-500' : 'text-gray-900'}`}>
                      <option value="" disabled>Select state</option>
                      {data.statesList.map(st => <option key={st} value={st} className="text-gray-900">{st}</option>)}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-gray-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-900">Preferred Partner Category <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <select required value={categoryVal} onChange={(e) => setCategoryVal(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-200 rounded-md bg-white text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#113217] focus:border-[#113217] appearance-none">
                      <option value="Travel Partner">Travel Partner</option>
                      <option value="Hotel & Stay Partner">Hotel & Stay Partner</option>
                      <option value="Logistics Partner">Logistics Partner</option>
                      <option value="Stall Design Partner">Stall Design Partner</option>
                      <option value="Manpower Supply Partner">Manpower Supply Partner</option>
                      <option value="Printing & Branding Partner">Printing & Branding Partner</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-gray-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
                    </div>
                  </div>
                </div>

              </div>
              
              <div className="mt-5 flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-900">Tell Us About Your Organization <span className="text-red-500">*</span></label>
                <textarea rows={2} placeholder="Briefly describe your organization and how you would like to partner with us." required
                  className="w-full px-4 py-2 border border-gray-200 rounded-md bg-white text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#113217] focus:border-[#113217] resize-none">
                </textarea>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <div className="relative flex items-center justify-center w-4 h-4">
                    <input type="checkbox" className="peer sr-only" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} required />
                    <div className="w-4 h-4 border border-gray-300 rounded bg-white peer-checked:bg-[#113217] peer-checked:border-[#113217] transition-colors"></div>
                    <svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <span className="text-xs font-bold text-gray-800 select-none group-hover:text-[#113217] transition-colors">
                    I agree to the <span className="text-[#1b5e20] hover:underline">Terms & Conditions</span> and <span className="text-[#1b5e20] hover:underline">Privacy Policy</span>.
                  </span>
                </label>
                <button type="submit" className="bg-[#113217] hover:bg-[#0b2912] text-white px-6 py-2.5 rounded-md font-semibold text-xs tracking-wide uppercase transition-colors flex items-center justify-center gap-2">
                  SUBMIT REGISTRATION <ArrowRight size={14} />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Contact Footer Bar */}
        <div className="mt-12 bg-white pt-6 border-t border-gray-200 flex flex-wrap lg:flex-nowrap items-center justify-between gap-4 w-full">
          <div className="text-gray-900 font-bold text-xs lg:text-[13px] uppercase tracking-wider whitespace-nowrap">
            For partnership enquiries, please contact:
          </div>
          <div className="hidden lg:block border-l border-gray-300 h-6 shrink-0" />
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#d6a549] flex items-center justify-center text-white shrink-0"><Mail size={16} /></div>
            <a href={`mailto:${data.contactEmail}`} className="text-xs lg:text-[13px] font-bold text-gray-900 hover:text-[#113217] transition-colors whitespace-nowrap">{data.contactEmail}</a>
          </div>
          <div className="hidden lg:block border-l border-gray-300 h-6 shrink-0" />
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#d6a549] flex items-center justify-center text-white shrink-0"><Phone size={16} /></div>
            <a href={`tel:${data.contactPhone}`} className="text-xs lg:text-[13px] font-bold text-gray-900 hover:text-[#113217] transition-colors whitespace-nowrap">{data.contactPhone}</a>
          </div>
          <div className="hidden lg:block border-l border-gray-300 h-6 shrink-0" />
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#d6a549] flex items-center justify-center text-white shrink-0"><Globe size={16} /></div>
            <a href={data.contactWebsiteUrl} target="_blank" rel="noopener noreferrer" className="text-xs lg:text-[13px] font-bold text-blue-600 hover:underline transition-colors whitespace-nowrap">{data.contactWebsite}</a>
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

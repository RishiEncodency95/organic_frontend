"use client";

import { ArrowRight, CheckCircle2, CalendarDays, Handshake } from "lucide-react";

const SponsorsAndAttend = () => {
  return (
    <section className="py-2 bg-white overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-11">
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
          
          {/* Column 1: Who Should Attend */}
          <div className="lg:col-span-1 bg-white rounded-xl shadow-[0_2px_15px_rgba(0,0,0,0.06)] border border-gray-100 p-4 md:p-5 flex flex-col h-full">
            <h3 className="text-[#154726] text-[11px] font-bold uppercase tracking-wider mb-4">
              WHO SHOULD ATTEND?
            </h3>
            
            <ul className="space-y-2 mb-4 flex-grow">
              {[
                "Distributors, Wholesalers & Retailers",
                "Importers & Exporters",
                "Hospitals, Clinics & Healthcare Institutions",
                "Doctors, Nutritionists & Wellness Experts",
                "Ayurveda, Organics & Natural Product Businesses",
                "Investors, Franchise Seekers & Business Owners",
                "Corporate Buyers & Procurement Teams",
                "Media, Associations & Lifestyle Enthusiasts"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#3b8c2a] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="text-[#475569] text-[9.5px] font-medium leading-[1.3]">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-start gap-2.5 bg-[#f8fdf9] p-3 rounded-lg border border-[#e8f5ec] mt-auto">
              <Handshake className="w-5 h-5 text-[#3b8c2a] flex-shrink-0 mt-0.5" strokeWidth={2} />
              <p className="text-[#111827] text-[10px] font-bold leading-[1.4]">
                Whether you're sourcing, learning or networking — this is the place to be!
              </p>
            </div>
          </div>

          {/* Column 2: Our Proud Sponsors */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-[0_2px_15px_rgba(0,0,0,0.04)] border border-gray-50 p-4 md:p-5 flex flex-col h-full relative overflow-hidden">
            <div className="text-center mb-6">
              <h3 className="text-[#154726] text-[13px] font-bold uppercase tracking-widest inline-flex items-center gap-2">
                <span className="text-[#aae639]">🌿</span>
                - OUR PROUD SPONSORS -
                <span className="text-[#aae639]">🌿</span>
              </h3>
            </div>

            <div className="flex flex-col gap-5 flex-grow">
              {/* Top Row: Platinum, Gold, Silver */}
              <div className="grid grid-cols-3 gap-4">
                {/* Platinum */}
                <div className="flex flex-col items-center">
                  <span className="text-gray-400 text-[8px] font-bold uppercase tracking-wider mb-2">PLATINUM PARTNER</span>
                  <div className="w-full h-12 bg-gray-50 rounded border border-gray-100 flex items-center justify-center">
                    <span className="text-red-500 font-bold text-[14px]">PATANJALI</span>
                  </div>
                </div>
                {/* Gold */}
                <div className="flex flex-col items-center">
                  <span className="text-gray-400 text-[8px] font-bold uppercase tracking-wider mb-2">GOLD PARTNER</span>
                  <div className="w-full h-12 bg-gray-50 rounded border border-gray-100 flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-[14px]">Apollo</span>
                  </div>
                </div>
                {/* Silver */}
                <div className="flex flex-col items-center">
                  <span className="text-gray-400 text-[8px] font-bold uppercase tracking-wider mb-2">SILVER PARTNER</span>
                  <div className="w-full h-12 bg-gray-50 rounded border border-gray-100 flex items-center justify-center text-center">
                    <span className="text-red-600 font-bold text-[10px]">SHEKH BROTHERS</span>
                  </div>
                </div>
              </div>

              {/* Bottom Row: Associate Partners */}
              <div className="flex flex-col items-center mt-2">
                <span className="text-gray-400 text-[8px] font-bold uppercase tracking-wider mb-2">ASSOCIATE PARTNER</span>
                <div className="w-full grid grid-cols-4 gap-3">
                  <div className="h-10 bg-gray-50 rounded border border-gray-100 flex items-center justify-center">
                    <span className="text-teal-600 font-bold text-[11px]">Himalaya</span>
                  </div>
                  <div className="h-10 bg-gray-50 rounded border border-gray-100 flex items-center justify-center">
                    <span className="text-green-600 font-bold text-[11px]">Fortis</span>
                  </div>
                  <div className="h-10 bg-gray-50 rounded border border-gray-100 flex items-center justify-center">
                    <span className="text-blue-500 font-bold text-[11px]">ENSIS</span>
                  </div>
                  <div className="h-10 bg-gray-50 rounded border border-gray-100 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-red-100 border border-red-200"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-6">
              <button className="inline-flex items-center gap-1.5 px-5 py-1.5 rounded-full border-2 border-[#F2B40E] bg-[#3b8c2a] text-white text-[10px] font-bold uppercase tracking-wider hover:bg-[#F2B40E] hover:text-[#0b2912] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                VIEW ALL PARTNERS
                <ArrowRight size={12} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Column 3: Book Your Space */}
          <div className="lg:col-span-1 bg-[#11381d] rounded-xl shadow-xl p-5 flex flex-col h-full relative overflow-hidden group">
            {/* Background Decorative Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#3b8c2a] opacity-10 rounded-full blur-[30px] -translate-y-1/2 translate-x-1/4"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#aae639] opacity-10 rounded-full blur-[30px] translate-y-1/2 -translate-x-1/4"></div>

            <div className="relative z-10 flex flex-col h-full">
              <h3 className="text-white text-[16px] font-bold leading-[1.2] mb-1.5">
                Book Your Space Now!
              </h3>
              <p className="text-[#a3d8b2] text-[11.5px] font-medium leading-[1.4] mb-6">
                Be Part of India's Biggest Organic & Wellness Platform
              </p>

              <div className="flex flex-col items-center justify-center flex-grow mb-6">
                <div className="w-20 h-20 bg-white rounded-full border-4 border-[#3b8c2a] flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(59,140,42,0.3)] group-hover:scale-105 transition-transform duration-300">
                  <CalendarDays className="w-9 h-9 text-[#3b8c2a]" strokeWidth={1.5} />
                </div>
                
                <button className="w-full flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full border-2 border-[#F2B40E] bg-[#3b8c2a] text-white text-[11px] font-bold uppercase tracking-wider hover:bg-[#F2B40E] hover:text-[#0b2912] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 shadow-md">
                  BOOK YOUR SPACE
                  <ArrowRight size={13} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="text-center mt-auto">
                <p className="text-white text-[10px] font-bold mb-0.5">
                  Limited Stalls Available
                </p>
                <p className="text-[#d1e8d8] text-[9px] font-medium">
                  Secure your spot today!
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SponsorsAndAttend;

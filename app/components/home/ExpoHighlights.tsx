"use client";
import img1 from "../../assets/home/home11.png";
import img2 from "../../assets/home/home22.png";


import { ArrowRight, CheckCircle, Users, Mic, Store, Globe, Clock } from "lucide-react";

const ExpoHighlights = () => {
  return (
    <section className="py-2 bg-white overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-11">
        
        <div className="flex flex-col lg:flex-row gap-3 mb-2.5">
          
          {/* Card 1: Buyer-Seller Meet */}
          <div className="flex-1 flex flex-col md:flex-row bg-[#0c4220] rounded-xl overflow-hidden shadow-xl group">
            {/* Content Side */}
            <div className="flex-1 p-4 md:p-5 flex flex-col justify-center">
              <span className="text-[#aae639] text-[8.5px] font-extrabold tracking-[0.2em] uppercase mb-1.5 opacity-90">
                BUYER-SELLER MEET
              </span>
              <h3 className="text-white text-[18px] md:text-[20px] font-bold leading-[1.1] mb-2">
                Where Connections<br/>Create Growth
              </h3>
              <p className="text-[#d1e8d8] text-[10.5px] font-medium leading-[1.4] mb-3 max-w-[95%]">
                A dedicated B2B platform to connect with verified buyers, global brands, distributors & suppliers.
              </p>
              
              <ul className="space-y-1.5 mb-4">
                {["Pre-Scheduled Meetings", "Quality Business Opportunities", "Expand Your Global Network", "Global Trade Collaboration"].map((item, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-[#aae639]" strokeWidth={2.5} />
                    <span className="text-white text-[10px] font-medium tracking-wide">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto">
                <button className="inline-flex items-center gap-1.5 px-5 py-1.5 rounded-full border-2 border-[#F2B40E] bg-[#3b8c2a] text-white text-[10px] font-bold uppercase tracking-wider hover:bg-[#F2B40E] hover:text-[#0b2912] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                  REGISTER AS BUYER
                  <ArrowRight size={12} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
            
            {/* Image Side */}
            <div className="md:w-[40%] h-[160px] md:h-auto overflow-hidden relative">
              <img src={img1.src} alt="Buyer-Seller Meet" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>

          {/* Card 2: Conference & Seminars */}
          <div className="flex-1 flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-100 group">
            {/* Content Side */}
            <div className="flex-1 p-4 md:p-5 flex flex-col justify-center">
              <span className="text-[#3b8c2a] text-[8.5px] font-extrabold tracking-[0.2em] uppercase mb-1.5">
                CONFERENCE & SEMINARS
              </span>
              <h3 className="text-[#111827] text-[18px] md:text-[20px] font-bold leading-[1.1] mb-2">
                Learn. Connect. Get <span className="text-[#3b8c2a]">Inspired.</span>
              </h3>
              <p className="text-[#64748b] text-[10.5px] font-medium leading-[1.4] mb-3 max-w-[95%]">
                Join global thought leaders, industry experts & innovators as they share insights on the future of health & wellness.
              </p>
              
              <ul className="space-y-1.5 mb-4">
                {["International Speaker Sessions", "Live Product Demonstrations", "Awards, Recognitions & Felicitations", "Policy Dialogues & Roundtables"].map((item, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-[#3b8c2a]" strokeWidth={2.5} />
                    <span className="text-[#475569] text-[10px] font-medium tracking-wide">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto">
                <button className="inline-flex items-center gap-1.5 px-5 py-1.5 rounded-full border-2 border-[#F2B40E] bg-[#3b8c2a] text-white text-[10px] font-bold uppercase tracking-wider hover:bg-[#F2B40E] hover:text-[#0b2912] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                  VIEW CONFERENCE AGENDA
                  <ArrowRight size={12} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
            
            {/* Image Side */}
            <div className="md:w-[40%] h-[160px] md:h-auto overflow-hidden relative">
              <img src={img2.src} alt="Conference & Seminars" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>

        </div>


      </div>
    </section>
  );
};

export default ExpoHighlights;

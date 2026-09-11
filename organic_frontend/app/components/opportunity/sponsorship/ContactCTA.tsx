import React from "react";
import { ArrowRight } from "lucide-react";
import cogIcon from "../../../assets/icons/cog.png";
import SectionContainer from "@/app/components/layout/SectionContainer";

export default function ContactCTA() {
  return (
    <section className="pt-2 pb-8 bg-[#fcfcf0] font-inter">
      <SectionContainer>
        <div 
          className="bg-[#0a1f0d] rounded-2xl p-4 md:px-8 md:py-4 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 relative overflow-hidden"
          style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px" }}
        >
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#103314]/50 pointer-events-none"></div>
          
          <div className="flex items-center gap-6 relative z-10 w-full md:w-auto">
            {/* Cog Icon */}
            <img src={cogIcon.src} alt="Cog" className="w-12 md:w-14 h-12 md:h-14 shrink-0 object-contain" />
            
            <div className="text-left flex-1">
              <h3 className="text-[#a3e635] text-base md:text-lg font-semibold uppercase tracking-wide font-poppins mb-1.5">
                LET'S DISCUSS YOUR SPONSORSHIP GOALS
              </h3>
              <p className="text-gray-300 text-sm md:text-[15px] font-medium leading-relaxed max-w-lg font-poppins">
                Our team will help you choose the right package to<br className="hidden md:block" />
                maximize your brand visibility and impact.
              </p>
            </div>
          </div>
          
          <div className="relative z-10 w-full md:w-auto mt-4 md:mt-0">
            <a 
              href="/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-3.5 bg-[#ea580c] hover:bg-[#c2410c] text-white text-[10px] md:text-xs font-bold uppercase tracking-wider rounded-lg transition-colors shadow-md w-full md:w-auto font-poppins"
            >
              CONTACT US TODAY
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

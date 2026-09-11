"use client";

import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/app/constants/siteConfig";

const ContactStrip = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-4 relative z-20 mt-[-40px] md:mt-[-50px]">
      <div className="bg-gradient-to-r from-[#3b8c2a] to-[#215e12] rounded-xl shadow-[0_10px_30px_rgba(59,140,42,0.3)] border-b-4 border-[#F2B40E] p-1 md:p-1.5">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20">

          {/* Item 1 */}
          <a href={`tel:${SITE_CONFIG.rawPhone}`} className="flex items-center justify-center md:justify-start gap-4 px-4 py-4 hover:bg-black/10 transition-colors rounded-l-lg cursor-pointer group">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0 group-hover:bg-[#F2B40E] group-hover:shadow-md transition-all duration-300">
              <Phone size={18} className="text-white group-hover:text-[#0a1f12] transition-colors duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-white text-[15px] md:text-[16px] font-bold leading-tight">Call Us</span>
              <span className="text-white/80 text-[13px] md:text-[14px] font-medium leading-[1.6] group-hover:text-white transition-colors">{SITE_CONFIG.phone}</span>
            </div>
          </a>

          {/* Item 2 */}
          <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center justify-center md:justify-start gap-4 px-4 py-4 hover:bg-black/10 transition-colors cursor-pointer group">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0 group-hover:bg-[#F2B40E] group-hover:shadow-md transition-all duration-300">
              <Mail size={18} className="text-white group-hover:text-[#0a1f12] transition-colors duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-white text-[15px] md:text-[16px] font-bold leading-tight">Email Us</span>
              <span className="text-white/80 text-[13px] md:text-[14px] font-medium leading-[1.6] group-hover:text-white transition-colors">{SITE_CONFIG.email}</span>
            </div>
          </a>

          {/* Item 3 */}
          <div className="flex items-center justify-center md:justify-start gap-4 px-4 py-4 hover:bg-black/10 transition-colors cursor-pointer group">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0 group-hover:bg-[#F2B40E] group-hover:shadow-md transition-all duration-300">
              <MapPin size={18} className="text-white group-hover:text-[#0a1f12] transition-colors duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-white text-[15px] md:text-[16px] font-bold leading-tight">Visit Office</span>
              <span className="text-white/80 text-[13px] md:text-[14px] font-medium leading-[1.6] group-hover:text-white transition-colors">Pragati Maidan, New Delhi</span>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex items-center justify-center md:justify-start gap-4 px-4 py-4 hover:bg-black/10 transition-colors rounded-r-lg cursor-pointer group">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0 group-hover:bg-[#F2B40E] group-hover:shadow-md transition-all duration-300">
              <MessageCircle size={18} className="text-white group-hover:text-[#0a1f12] transition-colors duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-white text-[15px] md:text-[16px] font-bold leading-tight">Live Chat</span>
              <span className="text-white/80 text-[13px] md:text-[14px] font-medium leading-[1.6] group-hover:text-white transition-colors">Talk to our team</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactStrip;

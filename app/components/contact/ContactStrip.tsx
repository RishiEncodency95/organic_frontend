"use client";

import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const ContactStrip = () => {
  return (
    <div className="w-full px-2 md:px-11 py-2 relative z-20 ">
      <div className="bg-gradient-to-r from-[#3b8c2a] to-[#215e12] rounded-xl shadow-[0_10px_30px_rgba(59,140,42,0.3)] border-b-4 border-[#F2B40E] p-1 md:p-1.5">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20">

          {/* Item 1 */}
          <div className="flex items-center justify-center md:justify-start gap-3 px-3 py-2.5 hover:bg-black/10 transition-colors rounded-l-lg cursor-pointer group">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0 group-hover:bg-[#F2B40E] group-hover:shadow-md transition-all duration-300">
              <Phone size={14} className="text-white group-hover:text-[#0a1f12] transition-colors duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-white text-[12px] font-bold leading-tight">Call Us</span>
              <span className="text-white/80 text-[10px] md:text-[11px] font-medium leading-tight group-hover:text-white transition-colors">+91 98765 43210</span>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-center justify-center md:justify-start gap-3 px-3 py-2.5 hover:bg-black/10 transition-colors cursor-pointer group">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0 group-hover:bg-[#F2B40E] group-hover:shadow-md transition-all duration-300">
              <Mail size={14} className="text-white group-hover:text-[#0a1f12] transition-colors duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-white text-[12px] font-bold leading-tight">Email Us</span>
              <span className="text-white/80 text-[10px] md:text-[11px] font-medium leading-tight group-hover:text-white transition-colors">info@bharatorganicexpo.com</span>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-center justify-center md:justify-start gap-3 px-3 py-2.5 hover:bg-black/10 transition-colors cursor-pointer group">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0 group-hover:bg-[#F2B40E] group-hover:shadow-md transition-all duration-300">
              <MapPin size={14} className="text-white group-hover:text-[#0a1f12] transition-colors duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-white text-[12px] font-bold leading-tight">Visit Office</span>
              <span className="text-white/80 text-[10px] md:text-[11px] font-medium leading-tight group-hover:text-white transition-colors">Pragati Maidan, New Delhi</span>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex items-center justify-center md:justify-start gap-3 px-3 py-2.5 hover:bg-black/10 transition-colors rounded-r-lg cursor-pointer group">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0 group-hover:bg-[#F2B40E] group-hover:shadow-md transition-all duration-300">
              <MessageCircle size={14} className="text-white group-hover:text-[#0a1f12] transition-colors duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-white text-[12px] font-bold leading-tight">Live Chat</span>
              <span className="text-white/80 text-[10px] md:text-[11px] font-medium leading-tight group-hover:text-white transition-colors">Talk to our team</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactStrip;

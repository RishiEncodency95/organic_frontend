"use client";

import { Train, Car, Plane, Building } from "lucide-react";

const ContactMap = () => {
  return (
    <section className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-11 py-2">
      <div className="flex flex-col gap-4">
        <h2 className="text-[#3b8c2a] text-[18px] font-bold">Find Us Easily</h2>
        
        {/* Map Container */}
        <div className="w-full h-[250px] md:h-[400px] rounded-2xl overflow-hidden border border-gray-200 shadow-sm relative">
          {/* Using an iframe for Google Maps - Defaulting to Pragati Maidan */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.971553531641!2d77.2346049!3d28.6186411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2d6771d9d43%3A0x6e9f1661642c8bc5!2sPragati%20Maidan%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Bharat Organic Expo Location"
          ></iframe>
        </div>

        {/* Highlights Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 ">
          
          <div className="flex items-center gap-3 bg-white p-3 md:px-4 md:py-2 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#3b8c2a]/30 hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-[#f8fdf9] border border-[#e8f5ec] flex items-center justify-center shrink-0 group-hover:bg-[#3b8c2a] group-hover:border-[#3b8c2a] transition-colors duration-300">
              <Train size={18} className="text-[#3b8c2a] group-hover:text-white transition-colors duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-[#111827] text-[13px] font-bold leading-tight mb-0.5">Metro Station</span>
              <span className="text-[#64748b] text-[11px] leading-tight">5 min walk</span>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white p-3 md:px-4 md:py-2 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#3b8c2a]/30 hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-[#f8fdf9] border border-[#e8f5ec] flex items-center justify-center shrink-0 group-hover:bg-[#3b8c2a] group-hover:border-[#3b8c2a] transition-colors duration-300">
              <Car size={18} className="text-[#3b8c2a] group-hover:text-white transition-colors duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-[#111827] text-[13px] font-bold leading-tight mb-0.5">Parking Space</span>
              <span className="text-[#64748b] text-[11px] leading-tight">500+ Cars</span>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white p-3 md:px-4 md:py-2 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#3b8c2a]/30 hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-[#f8fdf9] border border-[#e8f5ec] flex items-center justify-center shrink-0 group-hover:bg-[#3b8c2a] group-hover:border-[#3b8c2a] transition-colors duration-300">
              <Plane size={18} className="text-[#3b8c2a] group-hover:text-white transition-colors duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-[#111827] text-[13px] font-bold leading-tight mb-0.5">IGI Airport</span>
              <span className="text-[#64748b] text-[11px] leading-tight">20 km (30 min)</span>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white p-3 md:px-4 md:py-2 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#3b8c2a]/30 hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-[#f8fdf9] border border-[#e8f5ec] flex items-center justify-center shrink-0 group-hover:bg-[#3b8c2a] group-hover:border-[#3b8c2a] transition-colors duration-300">
              <Building size={18} className="text-[#3b8c2a] group-hover:text-white transition-colors duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-[#111827] text-[13px] font-bold leading-tight mb-0.5">Nearby Hotels</span>
              <span className="text-[#64748b] text-[11px] leading-tight">20+ Options</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactMap;

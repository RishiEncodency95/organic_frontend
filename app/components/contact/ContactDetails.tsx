"use client";

import { MapPin, Phone, Mail, Globe } from "lucide-react";

const ContactDetails = () => {
  return (
    <section className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-11 py-2">
      <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden flex flex-col lg:flex-row">
        
        {/* Left Side: Info */}
        <div className="w-full lg:w-[45%] p-2 sm:px-8 xl:px-10 flex flex-col justify-center">
          <h2 className="text-[#111827] text-2xl lg:text-3xl font-bold mb-1.5">Bharat Organic Expo</h2>
          <h3 className="text-[#3b8c2a] text-[12px] lg:text-[13px] font-bold uppercase tracking-wider mb-4">
            India's Biggest Organic & Natural Products Exhibition
          </h3>
          <p className="text-[#475569] text-[12px] lg:text-[13px] leading-relaxed mb-6 max-w-md">
            We are dedicated to promoting organic lifestyle, supporting farmers, connecting businesses and inspiring a healthier tomorrow.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Card 1 */}
            <div className="flex items-center gap-2.5 p-2.5 bg-[#f8fdf9] border border-[#e8f5ec] rounded-lg hover:-translate-y-0.5 hover:shadow-md hover:border-[#3b8c2a]/30 transition-all duration-300 group cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 group-hover:bg-[#3b8c2a] shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-colors duration-300">
                <MapPin size={14} className="text-[#3b8c2a] group-hover:text-white transition-colors" />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#111827] text-[11px] font-bold leading-none mb-1">Address</p>
                <p className="text-[#64748b] text-[10px] leading-tight line-clamp-1">
                  Pragati Maidan, New Delhi
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-center gap-2.5 p-2.5 bg-[#f8fdf9] border border-[#e8f5ec] rounded-lg hover:-translate-y-0.5 hover:shadow-md hover:border-[#3b8c2a]/30 transition-all duration-300 group cursor-pointer">
               <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 group-hover:bg-[#3b8c2a] shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-colors duration-300">
                <Phone size={14} className="text-[#3b8c2a] group-hover:text-white transition-colors" />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#111827] text-[11px] font-bold leading-none mb-1">Phone</p>
                <p className="text-[#64748b] text-[10px] leading-tight">
                  +91 98765 43210
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex items-center gap-2.5 p-2.5 bg-[#f8fdf9] border border-[#e8f5ec] rounded-lg hover:-translate-y-0.5 hover:shadow-md hover:border-[#3b8c2a]/30 transition-all duration-300 group cursor-pointer">
               <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 group-hover:bg-[#3b8c2a] shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-colors duration-300">
                <Mail size={14} className="text-[#3b8c2a] group-hover:text-white transition-colors" />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#111827] text-[11px] font-bold leading-none mb-1">Email</p>
                <p className="text-[#64748b] text-[10px] leading-tight">
                  info@bharatorganicexpo.com
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="flex items-center gap-2.5 p-2.5 bg-[#f8fdf9] border border-[#e8f5ec] rounded-lg hover:-translate-y-0.5 hover:shadow-md hover:border-[#3b8c2a]/30 transition-all duration-300 group cursor-pointer">
               <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 group-hover:bg-[#3b8c2a] shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-colors duration-300">
                <Globe size={14} className="text-[#3b8c2a] group-hover:text-white transition-colors" />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#111827] text-[11px] font-bold leading-none mb-1">Website</p>
                <p className="text-[#64748b] text-[10px] leading-tight">
                  www.bharatorganicexpo.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Image Placeholder */}
        <div className="w-full lg:w-[55%] min-h-[400px] lg:min-h-full relative">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')" }}
          ></div>
          <div className="absolute inset-0 bg-black/10"></div>
          
        </div>

      </div>
    </section>
  );
};

export default ContactDetails;

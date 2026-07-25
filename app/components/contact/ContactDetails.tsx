"use client";

import { MapPin, Phone, Mail, Globe } from "lucide-react";

const ContactDetails = () => {
  return (
    <section className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-11 pb-6 pt-4">
      <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden flex flex-col lg:flex-row">
        
        {/* Left Side: Info */}
        <div className="w-full lg:w-[45%] p-8 lg:p-10 xl:p-12 flex flex-col justify-center">
          <h2 className="text-[#111827] text-3xl font-bold mb-2">Bharat Organic Expo</h2>
          <h3 className="text-[#3b8c2a] text-[13px] font-bold uppercase tracking-wider mb-6">
            India's Biggest Organic & Natural Products Exhibition
          </h3>
          <p className="text-[#475569] text-[13px] leading-relaxed mb-10 max-w-md">
            We are dedicated to promoting organic lifestyle, supporting farmers, connecting businesses and inspiring a healthier tomorrow.
          </p>

          <div className="flex flex-col gap-6">
            <div className="flex gap-4 items-start group cursor-pointer">
              <MapPin size={20} className="text-[#3b8c2a] mt-0.5 group-hover:scale-110 transition-transform" />
              <div>
                <p className="text-[#111827] text-[12px] font-bold mb-1">Address</p>
                <p className="text-[#64748b] text-[13px] leading-relaxed">
                  Pragati Maidan, Mathura Road,<br />New Delhi, India - 110001
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start group cursor-pointer">
              <Phone size={20} className="text-[#3b8c2a] mt-0.5 group-hover:scale-110 transition-transform" />
              <div>
                <p className="text-[#111827] text-[12px] font-bold mb-1">Phone</p>
                <p className="text-[#64748b] text-[13px] leading-relaxed">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex gap-4 items-start group cursor-pointer">
              <Mail size={20} className="text-[#3b8c2a] mt-0.5 group-hover:scale-110 transition-transform" />
              <div>
                <p className="text-[#111827] text-[12px] font-bold mb-1">Email</p>
                <p className="text-[#64748b] text-[13px] leading-relaxed">info@bharatorganicexpo.com</p>
              </div>
            </div>

            <div className="flex gap-4 items-start group cursor-pointer">
              <Globe size={20} className="text-[#3b8c2a] mt-0.5 group-hover:scale-110 transition-transform" />
              <div>
                <p className="text-[#111827] text-[12px] font-bold mb-1">Website</p>
                <p className="text-[#64748b] text-[13px] leading-relaxed">www.bharatorganicexpo.com</p>
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
          
          {/* Logo overlay on image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm px-8 py-6 rounded-2xl shadow-xl flex items-center gap-3">
            <span className="text-[#aae639] text-4xl">🌿</span>
            <div className="flex flex-col">
              <span className="text-[#3b8c2a] text-xl font-black leading-none tracking-tight">BHARAT</span>
              <span className="text-[#0b2912] text-xl font-black leading-none tracking-tight">ORGANIC</span>
              <span className="text-[#F2B40E] text-xl font-black leading-none tracking-tight">EXPO</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactDetails;

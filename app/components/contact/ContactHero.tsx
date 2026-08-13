"use client";

import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import contactBgImg from "../../assets/contact/contact.png";

const ContactHero = () => {
  return (
    <section className="relative w-full min-h-[350px] md:min-h-[500px] flex items-center bg-[#0a1f12] overflow-hidden">
      {/* Background Image */}
      <img
        src={contactBgImg.src}
        alt="Contact Us Background"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
      />
      {/* <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#051c0e] via-[#051c0e]/80 to-transparent"></div> */}

      <div className="max-w-7xl w-full mx-auto px-4 md:px-8 relative z-10 py-16 md:py-0">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">

          {/* Left Content */}
          <div className="w-full md:w-3/5 text-white">
            <h1 className="text-[30px] md:text-[40px] lg:text-[46px] xl:text-[52px] font-bold leading-[1.1] mb-4 drop-shadow-xl [text-shadow:_0_4px_12px_rgba(0,0,0,0.6)]">
              Let's Grow <br /> Organic Together
            </h1>
            <p className="text-white text-[16px] md:text-[18px] font-normal leading-[1.6] max-w-xl mb-8 drop-shadow-lg [text-shadow:_0_2px_8px_rgba(0,0,0,0.8)]">
              We're here to answer your questions, help exhibitors, guide visitors, and support partners.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button className="bg-[#3b8c2a] hover:bg-[#aae639] hover:text-[#0b2912] text-white px-6 py-3 rounded-md text-[15px] md:text-[16px] font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 group shadow-[0_4px_14px_rgba(0,0,0,0.3)] min-h-[44px]">
                CONTACT US
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-black/30 backdrop-blur-sm border-2 border-white hover:bg-white hover:text-black text-white px-6 py-3 rounded-md text-[15px] md:text-[16px] font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_4px_14px_rgba(0,0,0,0.3)] min-h-[44px]">
                BOOK YOUR STALL
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;

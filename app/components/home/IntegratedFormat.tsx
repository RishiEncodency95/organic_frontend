"use client";

import React from "react";
import Image from "next/image";
import { Building2, Users, Award, Handshake, Globe2, HeartPulse, Leaf } from "lucide-react";
import logo from "../../assets/logos/longlogo1.png";

const cards = [
  {
    title: "DYNAMIC\nEXHIBITION",
    desc: "Showcasing cutting-edge innovations, products, and services from global leaders and emerging startups in health and wellness sectors.\n\nA vibrant marketplace for direct engagement and unparalleled business showcasing.",
    num: "01",
    color: "#3b8c2a",
    icon: <Building2 size={24} color="#ffffff" strokeWidth={2} />
  },
  {
    title: "INSIGHTFUL CONFERENCE &\nAROGYA SANGOSHTHI",
    desc: "A platform for critical policy dialogue, knowledge dissemination, and expert discussions.\n\nFeaturing keynote speakers and panel sessions on global health trends, traditional medicine, and future challenges.",
    num: "02",
    color: "#1e40af", // Blue
    icon: <Users size={24} color="#ffffff" strokeWidth={2} />
  },
  {
    title: "PRESTIGIOUS\nAWARDS CEREMONY",
    desc: "Recognizing excellence and innovation across the health and wellness spectrum.\n\nCategories honor trailblazers, ground-breaking research, and significant contributions to the industry, fostering aspiration and leadership.",
    num: "03",
    color: "#f59e0b", // Orange/Gold
    icon: <Award size={24} color="#ffffff" strokeWidth={2} />
  },
  {
    title: "EXCLUSIVE BUYER-\nSELLER MEETS",
    desc: "Facilitating strategically curated B2B interactions and fostering powerful partnerships.\n\nPre-scheduled 1-on-1 meetings connect international buyers with exhibitors, driving global commerce and collaboration.",
    num: "04",
    color: "#0f766e", // Teal
    icon: <Handshake size={24} color="#ffffff" strokeWidth={2} />
  }
];

const bottomItems = [
  {
    icon: <Globe2 size={28} className="text-[#3b8c2a]" strokeWidth={1.5} />,
    title: "GLOBAL\nPARTICIPATION",
    desc: "Connect with leaders and innovators from around the world."
  },
  {
    icon: <Users size={28} className="text-[#3b8c2a]" strokeWidth={1.5} />,
    title: "MEANINGFUL\nCONNECTIONS",
    desc: "Build valuable relationships that drive growth and long-term impact."
  },
  {
    icon: <HeartPulse size={28} className="text-[#3b8c2a]" strokeWidth={1.5} />,
    title: "HEALTHIER\nCOMMUNITIES",
    desc: "Empowering people to live healthier and happier lives through knowledge and care."
  },
  {
    icon: <Leaf size={28} className="text-[#3b8c2a]" strokeWidth={1.5} />,
    title: "SUSTAINABLE\nFUTURE",
    desc: "Creating a better tomorrow through innovation, collaboration and action."
  }
];

const IntegratedFormat = () => {
  return (
    <section className="relative w-full bg-[#fcfdfc] pt-16 pb-32 lg:pt-20 lg:pb-40 overflow-hidden font-inter">
      {/* Background Leaves (Decorative) */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full blur-3xl opacity-50 -z-10"></div>
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-green-50 rounded-full blur-3xl opacity-50 -z-10"></div>
      <Leaf className="absolute top-10 right-10 text-[#3b8c2a] opacity-10 rotate-45" size={100} />
      <Leaf className="absolute top-1/2 left-5 text-[#3b8c2a] opacity-10 -rotate-12" size={60} />
      
      <div className="max-w-[1600px] mx-auto w-full px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 flex flex-col xl:flex-row gap-12 lg:gap-8">
        
        {/* Left Content */}
        <div className="w-full xl:w-[35%] flex flex-col items-center xl:items-start text-center xl:text-left">
          
          <div className="mb-6 w-full flex justify-center xl:justify-start">
            <Image
              src={logo}
              alt="Bharat Organic Expo Logo"
              width={220}
              height={80}
              className="object-contain"
            />
          </div>
          
          <div className="flex items-center gap-3 mb-2 w-full justify-center xl:justify-start">
            <div className="h-[1px] w-12 bg-[#3b8c2a]"></div>
            <p className="text-[#3b8c2a] font-medium text-[18px] italic" style={{ fontFamily: 'Georgia, serif' }}>
              Our Comprehensive
            </p>
            <div className="h-[1px] w-12 bg-[#3b8c2a]"></div>
          </div>
          
          <h2 className="text-[#1a3821] text-4xl lg:text-[42px] leading-[1.1] font-black mb-6 uppercase flex flex-col items-center xl:items-start gap-1">
            <span>INTEGRATED</span>
            <span className="flex items-center gap-2 text-[#649622]">
              FORMAT <Leaf size={32} className="text-[#3b8c2a] fill-[#3b8c2a] -rotate-12 mt-2" />
            </span>
          </h2>
          
          <div className="text-[#475569] text-[14px] leading-relaxed flex flex-col gap-4 font-medium max-w-[500px]">
            <p>
              The 9th International Health & Wellness Expo brings together innovation, business, and global opportunities on one powerful platform.
            </p>
            <p>
              Designed to maximize engagement and meaningful connections, it creates a dynamic space for exhibitors, buyers, and healthcare leaders.
            </p>
            <p>
              From exhibitions and conferences to awards and buyer-seller meets, every element is curated to promote knowledge exchange, inspire innovation, and recognize excellence in the health and wellness industry.
            </p>
          </div>
        </div>

        {/* Right Cards Grid */}
        <div className="w-full xl:w-[65%] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-4 mt-12 xl:mt-0 relative z-20">
          {cards.map((card, index) => (
            <div key={index} className="relative flex flex-col mt-8">
              {/* Floating Top Icon */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center border-4 border-white shadow-md z-30" style={{ backgroundColor: card.color }}>
                 {card.icon}
              </div>
              
              {/* Card Body */}
              <div className="bg-white rounded-[24px] rounded-t-[40px] pt-12 pb-6 px-4 shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col h-full relative overflow-hidden group">
                
                {/* Subtle top color gradient background */}
                <div className="absolute top-0 left-0 w-full h-32 opacity-10" style={{ background: `linear-gradient(to bottom, ${card.color}, transparent)` }}></div>
                
                <h3 className="text-[#154726] font-bold text-[13px] leading-snug tracking-wider uppercase whitespace-pre-line text-center mb-3 h-10 flex items-center justify-center" style={{ color: card.color }}>
                  {card.title}
                </h3>
                
                <div className="flex items-center justify-center w-full mb-4">
                  <div className="flex items-center gap-1">
                     <div className="w-2 h-[2px]" style={{ backgroundColor: card.color }}></div>
                     <div className="w-2 h-2 rounded-full" style={{ backgroundColor: card.color }}></div>
                     <div className="w-8 h-[2px]" style={{ backgroundColor: card.color }}></div>
                  </div>
                </div>

                <div className="text-[#475569] text-[11px] leading-[1.7] text-center font-medium px-1 flex-1 whitespace-pre-line">
                  {card.desc}
                </div>
                
                {/* Bottom Number Strip */}
                <div className="mt-6 mx-auto px-8 py-1 rounded-full text-white font-bold text-[14px] shadow-sm" style={{ backgroundColor: card.color }}>
                  {card.num}
                </div>
                
                {/* Decorative bottom corner leaf vectors */}
                <Leaf className="absolute -bottom-2 -right-2 opacity-[0.03] rotate-45" size={80} />
              </div>
            </div>
          ))}
        </div>
        
      </div>

      {/* Bottom Wave Strip */}
      <div className="absolute bottom-0 left-0 w-full z-30">
        <div className="w-full bg-[#469e36] text-white py-6 lg:py-8 px-4 sm:px-6 lg:px-8 xl:px-12 relative" style={{ borderTopLeftRadius: '100% 30px', borderTopRightRadius: '100% 30px' }}>
           
           <div className="max-w-[1600px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 relative z-40">
             {bottomItems.map((item, index) => (
               <div key={index} className="flex items-start gap-4">
                 <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shrink-0 shadow-lg mt-1">
                   {item.icon}
                 </div>
                 <div className="flex flex-col">
                   <h4 className="text-white font-bold text-[13px] tracking-wide whitespace-pre-line leading-tight mb-1">
                     {item.title} <Leaf className="inline-block w-3 h-3 text-[#a3d289] fill-[#a3d289]" />
                   </h4>
                   <p className="text-green-50 text-[11px] leading-relaxed font-medium pr-4">
                     {item.desc}
                   </p>
                 </div>
               </div>
             ))}
           </div>
           
           {/* Decorative background shapes inside the green wave */}
           <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none rounded-t-[100px]">
              <div className="absolute top-0 right-10 w-96 h-96 bg-white rounded-full blur-3xl mix-blend-overlay"></div>
              <div className="absolute bottom-0 left-10 w-96 h-96 bg-black rounded-full blur-3xl mix-blend-overlay"></div>
           </div>
        </div>
      </div>
      
    </section>
  );
};

export default IntegratedFormat;

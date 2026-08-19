import React from 'react';
import { GraduationCap, Stethoscope, Landmark, Leaf, Globe, Building2 } from 'lucide-react';
import SectionContainer from "@/app/components/layout/SectionContainer";

const AudienceStrip = () => {
  const items = [
    {
      title: "UNIVERSITY/",
      subtitle: "ACADEMIC PARTNERS",
      icon: GraduationCap,
      color: "text-orange-500"
    },
    {
      title: "HEALTHCARE",
      subtitle: "LEADERS",
      icon: Stethoscope,
      color: "text-[#3b8c2a]"
    },
    {
      title: "GOVERNMENT",
      subtitle: "BODIES",
      icon: Landmark,
      color: "text-blue-500"
    },
    {
      title: "AYUSH",
      subtitle: "INDUSTRY",
      icon: Leaf,
      color: "text-green-600"
    },
    {
      title: "INTERNATIONAL",
      subtitle: "BUYERS",
      icon: Globe,
      color: "text-indigo-600"
    },
    {
      title: "HOSPITAL & CLINIC",
      subtitle: "PROCUREMENT TEAMS",
      icon: Building2,
      color: "text-red-500"
    }
  ];

  return (
    <div
      className="w-full py-2.5 md:py-3.5 border-t border-b border-white/10 shadow-md overflow-x-auto hide-scrollbar font-poppins"
      style={{ backgroundColor: "#1b5e20" }}
    >
      <SectionContainer>
        <div className="flex items-center justify-between min-w-[1000px]">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center gap-2.5 md:gap-3.5 group cursor-pointer hover:scale-105 transition-transform duration-300">
                <div className="w-7 h-7 md:w-9 md:h-9 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center shadow-md group-hover:bg-white transition-all duration-300">
                  <item.icon className="w-4 h-4 md:w-5 md:h-5 text-[#facc15] group-hover:text-[#1b5e20] transition-colors" />
                </div>
                <div className="flex flex-col">
                  <span
                    className="text-white font-semibold text-[12px] md:text-[14px] leading-[1.15] tracking-wide uppercase font-poppins"
                    style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.4)" }}
                  >
                    {item.title}
                  </span>
                  <span
                    className="text-[#facc15] font-semibold text-[11px] md:text-[13px] leading-[1.15] tracking-wider uppercase mt-0.5 font-poppins"
                    style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.3)" }}
                  >
                    {item.subtitle}
                  </span>
                </div>
              </div>

              {/* Separator Line */}
              {index < items.length - 1 && (
                <div className="w-px h-7 bg-white/20 mx-2 md:mx-3" />
              )}
            </React.Fragment>
          ))}
        </div>
      </SectionContainer>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default AudienceStrip;

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
    <div className="bg-[#3B8D2A] w-full py-1.5 md:py-3 border-t border-b border-white/10 shadow-inner overflow-x-auto hide-scrollbar font-inter">
      <SectionContainer>
        <div className="flex items-center justify-between min-w-[1000px]">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center gap-2 md:gap-3 group cursor-pointer hover:scale-105 transition-transform duration-300">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                  <item.icon className={`w-3.5 h-3.5 md:w-6 md:h-6 ${item.color}`} />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-[12px] md:text-[14px] leading-[1.1] tracking-wider uppercase">
                    {item.title}
                  </span>
                  <span className="text-slate-300 font-medium text-[12px] md:text-[14px] leading-[1.1] tracking-wide uppercase mt-1" >
                    {item.subtitle}
                  </span>
                </div>
              </div>

              {/* Separator Line */}
              {index < items.length - 1 && (
                <div className="w-px h-6 bg-white/20 mx-2 md:mx-3" />
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

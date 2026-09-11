import React from 'react';
import { GraduationCap, Stethoscope, Landmark, Leaf, Globe, Building2 } from 'lucide-react';
import SectionContainer from "@/app/components/layout/SectionContainer";

interface AudienceStripItem {
  title?: string;
  subtitle?: string;
  label?: string;
  icon?: any;
  color?: string;
}

interface AudienceStripProps {
  items?: AudienceStripItem[];
}

const iconMap: Record<string, any> = {
  GraduationCap,
  Stethoscope,
  Landmark,
  Leaf,
  Globe,
  Building2,
};

const defaultItems: AudienceStripItem[] = [
  {
    title: "UNIVERSITY",
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

const AudienceStrip: React.FC<AudienceStripProps> = ({ items: propItems }) => {
  const displayItems = (propItems && propItems.length > 0 ? propItems : defaultItems).map((item, idx) => {
    let IconComponent = typeof item.icon === "string" ? iconMap[item.icon] : item.icon;
    if (!IconComponent) {
      IconComponent = defaultItems[idx % defaultItems.length].icon;
    }
    return {
      title: item.title || item.label || defaultItems[idx % defaultItems.length].title,
      subtitle: item.subtitle || defaultItems[idx % defaultItems.length].subtitle || "",
      Icon: IconComponent,
      color: item.color || defaultItems[idx % defaultItems.length].color,
    };
  });

  return (
    <div
      className="w-full py-3 md:py-3.5 border-t border-b border-white/10 shadow-md font-poppins"
      style={{ backgroundColor: "#1b5e20" }}
    >
      <SectionContainer>
        {/* Mobile View: 2-column grid layout | Desktop View: Horizontal flex strip */}
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:flex md:items-center md:justify-between">
          {displayItems.map((item, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center gap-2 md:gap-3.5 group cursor-pointer hover:scale-105 transition-transform duration-300 bg-white/10 md:bg-transparent p-2.5 md:p-0 rounded-xl md:rounded-none border border-white/15 md:border-none shadow-sm md:shadow-none">
                <div className="w-7 h-7 md:w-9 md:h-9 bg-white/15 md:bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center shadow-md group-hover:bg-white transition-all duration-300 shrink-0">
                  <item.Icon className="w-3.5 h-3.5 md:w-5 md:h-5 text-[#facc15] group-hover:text-[#1b5e20] transition-colors" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span
                    className="text-white font-semibold text-[10px] sm:text-[11px] md:text-[14px] leading-[1.15] tracking-wide uppercase font-poppins truncate md:whitespace-normal"
                    style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.4)" }}
                  >
                    {item.title}
                  </span>
                  {item.subtitle ? (
                    <span
                      className="text-[#facc15] font-semibold text-[9.5px] sm:text-[10px] md:text-[13px] leading-[1.15] tracking-wider uppercase mt-0.5 font-poppins truncate md:whitespace-normal"
                      style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.3)" }}
                    >
                      {item.subtitle}
                    </span>
                  ) : null}
                </div>
              </div>

              {/* Desktop Separator Line */}
              {index < displayItems.length - 1 && (
                <div className="hidden md:block w-px h-7 bg-white/20 mx-2 md:mx-3" />
              )}
            </React.Fragment>
          ))}
        </div>
      </SectionContainer>
    </div>
  );
};

export default AudienceStrip;

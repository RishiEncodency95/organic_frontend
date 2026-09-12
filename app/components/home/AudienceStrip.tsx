"use client";

import React, { useState, useEffect } from "react";
import {
  GraduationCap,
  Stethoscope,
  Landmark,
  Leaf,
  Globe,
  Building2,
  Users,
  Store,
  Presentation,
  ShieldCheck,
  Handshake,
  Target,
  TrendingUp,
  Award,
  Medal,
  Lightbulb,
  Mic,
  CalendarDays,
  Eye,
  Sprout,
  HeartPulse,
  Trophy,
  Megaphone,
  UserCheck,
  Briefcase,
  Sparkles,
  Zap,
  IdCard,
  Plug,
  Contact,
  Wifi,
  ShoppingBag,
  Coffee,
  Newspaper,
  FileText,
  Camera,
  Headphones,
  MessageCircle,
  Clock,
  Phone,
  Mail,
  MapPin,
  Heart,
  Star,
  CheckCircle,
  Info,
} from "lucide-react";
import SectionContainer from "@/app/components/layout/SectionContainer";
import { websiteApi } from "@/lib/api";

export interface AudienceStripItem {
  _id?: string;
  title?: string;
  subtitle?: string;
  label?: string;
  icon?: any;
  color?: string;
  order?: number;
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
  Users,
  Store,
  Presentation,
  ShieldCheck,
  Handshake,
  Target,
  TrendingUp,
  Award,
  Medal,
  Lightbulb,
  Mic,
  CalendarDays,
  Eye,
  Sprout,
  HeartPulse,
  Trophy,
  Megaphone,
  UserCheck,
  Briefcase,
  Sparkles,
  Zap,
  IdCard,
  Plug,
  Contact,
  Wifi,
  ShoppingBag,
  Coffee,
  Newspaper,
  FileText,
  Camera,
  Headphones,
  MessageCircle,
  Clock,
  Phone,
  Mail,
  MapPin,
  Heart,
  Star,
  CheckCircle,
  Info,
};

const getIconComponent = (iconName: any) => {
  if (!iconName) return GraduationCap;
  if (typeof iconName !== "string") return iconName;
  if (iconMap[iconName]) return iconMap[iconName];
  const found = Object.keys(iconMap).find(
    (k) => k.toLowerCase() === iconName.toLowerCase()
  );
  return found ? iconMap[found] : GraduationCap;
};

const defaultItems: AudienceStripItem[] = [
  {
    title: "UNIVERSITY",
    subtitle: "ACADEMIC PARTNERS",
    icon: "GraduationCap",
    color: "#facc15",
  },
  {
    title: "HEALTHCARE",
    subtitle: "LEADERS",
    icon: "Stethoscope",
    color: "#facc15",
  },
  {
    title: "GOVERNMENT",
    subtitle: "BODIES",
    icon: "Landmark",
    color: "#facc15",
  },
  {
    title: "AYUSH",
    subtitle: "INDUSTRY",
    icon: "Leaf",
    color: "#facc15",
  },
  {
    title: "INTERNATIONAL",
    subtitle: "BUYERS",
    icon: "Globe",
    color: "#facc15",
  },
  {
    title: "HOSPITAL & CLINIC",
    subtitle: "PROCUREMENT TEAMS",
    icon: "Building2",
    color: "#facc15",
  },
];

const AudienceStrip: React.FC<AudienceStripProps> = ({ items: propItems }) => {
  const [items, setItems] = useState<AudienceStripItem[]>(propItems || defaultItems);
  const [enabled, setEnabled] = useState<boolean>(true);

  useEffect(() => {
    if (propItems && propItems.length > 0) {
      setItems(propItems);
      return;
    }

    let isMounted = true;
    const fetchAudienceData = async () => {
      try {
        const res = await websiteApi.getAudienceStrip();
        const data = res?.data || res;
        if (data && isMounted) {
          if (data.enabled === false) {
            setEnabled(false);
            return;
          }
          setEnabled(true);
          if (Array.isArray(data.items) && data.items.length > 0) {
            setItems(data.items);
          }
        }
      } catch (err) {
        console.error("Failed to load audience strip dynamic data:", err);
      }
    };

    fetchAudienceData();

    return () => {
      isMounted = false;
    };
  }, [propItems]);

  if (!enabled) {
    return null;
  }

  const displayList = items && items.length > 0 ? items : defaultItems;

  return (
    <div
      className="w-full py-3 md:py-3.5 border-t border-b border-white/10 shadow-md font-poppins transition-all"
      style={{ backgroundColor: "#1b5e20" }}
    >
      <SectionContainer>
        {/* Mobile View: 2-column grid layout | Desktop View: Horizontal flex strip */}
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:flex md:items-center md:justify-between">
          {displayList.map((item, index) => {
            const IconComponent = getIconComponent(item.icon);
            const itemColor = item.color || "#facc15";
            const isHexOrRgb =
              itemColor.startsWith("#") ||
              itemColor.startsWith("rgb") ||
              itemColor.startsWith("hsl");

            return (
              <React.Fragment key={item._id || index}>
                <div className="flex items-center gap-2 md:gap-3.5 group cursor-pointer hover:scale-105 transition-transform duration-300 bg-white/10 md:bg-transparent p-2.5 md:p-0 rounded-xl md:rounded-none border border-white/15 md:border-none shadow-sm md:shadow-none">
                  <div
                    className="w-7 h-7 md:w-9 md:h-9 bg-white/15 md:bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center shadow-md group-hover:bg-white transition-all duration-300 shrink-0"
                    style={{
                      borderColor: isHexOrRgb ? `${itemColor}40` : undefined,
                    }}
                  >
                    <IconComponent
                      className={`w-3.5 h-3.5 md:w-5 md:h-5 transition-colors duration-300 group-hover:text-[#1b5e20] ${
                        !isHexOrRgb ? itemColor : ""
                      }`}
                      style={isHexOrRgb ? { color: itemColor } : undefined}
                    />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span
                      className="text-white font-semibold text-[10px] sm:text-[11px] md:text-[14px] leading-[1.15] tracking-wide uppercase font-poppins truncate md:whitespace-normal"
                      style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.4)" }}
                    >
                      {item.title || item.label}
                    </span>
                    {item.subtitle ? (
                      <span
                        className={`font-semibold text-[9.5px] sm:text-[10px] md:text-[13px] leading-[1.15] tracking-wider uppercase mt-0.5 font-poppins truncate md:whitespace-normal ${
                          !isHexOrRgb ? itemColor : ""
                        }`}
                        style={
                          isHexOrRgb
                            ? {
                                color: itemColor,
                                textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
                              }
                            : { textShadow: "1px 1px 2px rgba(0,0,0,0.3)" }
                        }
                      >
                        {item.subtitle}
                      </span>
                    ) : null}
                  </div>
                </div>

                {/* Desktop Separator Line */}
                {index < displayList.length - 1 && (
                  <div className="hidden md:block w-px h-7 bg-white/20 mx-2 md:mx-3" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </SectionContainer>
    </div>
  );
};

export default AudienceStrip;

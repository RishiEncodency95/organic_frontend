import React from 'react';
import { Briefcase, Globe, Building, Users, Landmark, Star, MapPin } from 'lucide-react';
import Image from 'next/image';
import pragatiMaidanImg from './pragati_maidan.png';

const venueFeatures = [
  {
    icon: <Briefcase size={20} className="text-[#e85d1c]" />,
    colorClass: "border-[#e85d1c]",
    text: "India's premier international exhibition & convention venue with world-class facilities"
  },
  {
    icon: <Globe size={20} className="text-[#3b8c2a]" />,
    colorClass: "border-[#3b8c2a]",
    text: "Excellent connectivity via dedicated Metro, International Airport & Central Delhi hubs"
  },
  {
    icon: <Building size={20} className="text-[#e85d1c]" />,
    colorClass: "border-[#e85d1c]",
    text: "State-of-the-art infrastructure featuring modern air-conditioned exhibition hall space"
  },
  {
    icon: <Users size={20} className="text-[#3b8c2a]" />,
    colorClass: "border-[#3b8c2a]",
    text: "Preferred global destination for high-profile trade fairs, congresses & mega exhibitions"
  },
  {
    icon: <Landmark size={20} className="text-[#e85d1c]" />,
    colorClass: "border-[#e85d1c]",
    text: "Strategically located close to key government ministries, foreign embassies & institutions"
  },
  {
    icon: <Star size={20} className="text-[#3b8c2a]" />,
    colorClass: "border-[#3b8c2a]",
    text: "A perfect business-centric environment designed for global networking & deal-making"
  }
];

const AboutVenue = () => {
  return (
    <section className="w-full bg-[#EFF7EE] py-2 md:py-6 lg:py-6 border-t border-gray-100">
      <div className="w-full px-4 md:px-11">

        <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-8">

          {/* Left Column: Image Area */}
          <div className="flex-1 lg:max-w-[45%] relative rounded-xl overflow-hidden shadow-xl min-h-[250px] md:min-h-[300px] lg:min-h-[320px] bg-gray-100 border border-gray-200 group">
            <Image src={pragatiMaidanImg} alt="Pragati Maidan" fill className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />

            {/* Hall Badge */}
            <div className="absolute top-4 right-4 bg-[#e85d1c] text-white px-4 py-1 text-[12px] md:text-[14px] font-bold tracking-wider rounded-sm z-10 uppercase">
              HALL 12
            </div>

            {/* Location Badge */}
            <div className="absolute bottom-6 left-6 bg-white px-4 py-2 rounded-md shadow-lg flex items-center gap-2 z-10">
              <MapPin size={16} className="text-[#e85d1c]" />
              <span className="text-[12px] md:text-[14px] font-bold text-gray-800 tracking-wide uppercase">
                Pragati Maidan, New Delhi
              </span>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="flex-1 lg:py-4">

            {/* Heading */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-[2px] bg-[#e85d1c]"></div>
              <h3 className="text-[12px] md:text-[14px] font-bold text-[#e85d1c] tracking-[0.2em] uppercase">
                OUR VENUE
              </h3>
              <div className="w-8 h-[2px] bg-[#e85d1c]"></div>
            </div>

            <h2 className="text-[26px] md:text-[28px] lg:text-[28px] font-semibold text-[#113d29] leading-[1.2] mb-4">
              Why Pragati Maidan, New Delhi?
            </h2>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
              {venueFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-full border-[2px] flex items-center justify-center shrink-0 bg-transparent ${feature.colorClass}`}>
                    {feature.icon}
                  </div>
                  <p className="text-[14px] md:text-[16px] text-gray-700 leading-relaxed font-medium mt-1">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutVenue;

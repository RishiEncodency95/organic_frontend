"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "Organic Expo is a powerful platform that connects the right people and creates real business impact.",
    name: "Dr. Anjali Verma",
    title: "Wellness Expert",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    quote: "We've found incredible partners and opportunities here every year.",
    name: "Rahul Mehta",
    title: "CEO, Herbal Life",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "A must-attend expo for anyone serious about the future of health and sustainability.",
    name: "Neha Sharma",
    title: "Business Strategist",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

const VoicesThatInspire = () => {
  return (
    <section className="py-2 bg-[#f8fdf9] border-t border-b border-gray-50 overflow-hidden">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 45s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      <div className="w-full px-4 sm:px-6 lg:px-11">
        
        {/* Header */}
        <div className="text-center mb-5">
          <h3 className="text-[#154726] text-[13px] font-bold uppercase tracking-widest inline-flex items-center gap-2">
            <span className="text-[#aae639]">🌿</span>
            - VOICES THAT INSPIRE -
            <span className="text-[#aae639]">🌿</span>
          </h3>
        </div>

        {/* Testimonials Auto-Slider Container */}
        <div className="relative w-full overflow-hidden py-2 mask-image-linear">
          <div className="animate-marquee gap-4">
            {/* Duplicate the array twice (4 sets total) to ensure seamless infinite looping when translating by -50% */}
            {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-5 flex items-center gap-4 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_25px_rgba(36,107,56,0.08)] transition-all duration-300 group hover:-translate-y-0.5 cursor-pointer w-[280px] sm:w-[320px] md:w-[350px] shrink-0"
              >
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-gray-50 shadow-sm group-hover:border-[#3b8c2a]/30 transition-colors duration-300">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <p className="text-[#475569] text-[10.5px] font-medium leading-[1.5] mb-2.5">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <h4 className="text-[#111827] text-[11px] font-bold leading-none mb-1 group-hover:text-[#3b8c2a] transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-[#64748b] text-[9.5px] font-medium">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default VoicesThatInspire;

import React from 'react';
import SectionContainer from '@/app/components/layout/SectionContainer';

const VisionMission = () => {
  return (
    <section className="py-10 md:py-12 relative overflow-hidden bg-[#0d2a1e] font-sans border-t border-gray-100">
      {/* Faint Glow accents */}
      <div 
        className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(190,130,60,0.12) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} 
      />
      <div 
        className="absolute bottom-0 left-0 w-56 h-56 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(80,200,120,0.1) 0%, transparent 70%)', transform: 'translate(-30%, 30%)' }} 
      />

      <SectionContainer className="relative z-10">
        <div className="grid md:grid-cols-[1fr_1px_1fr] gap-x-12 gap-y-8 items-start">

          {/* Vision */}
          <div>
            <p 
              className="text-xs font-medium tracking-widest mb-3 flex items-center gap-2 uppercase"
              style={{ color: '#c8a055', letterSpacing: '1.8px' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block" />
              OUR VISION
            </p>
            
            <h2 className="text-2xl font-semibold mb-4 leading-tight text-[#f0ece3]">
              India as a Global Wellness Hub
            </h2>
            
            <div className="space-y-3 text-sm leading-relaxed text-[rgba(240,236,227,0.78)] font-light">
              <p>
                To position India as a Global Hub for Healthcare, Wellness, and AYUSH, by creating an integrated ecosystem that connects traditional wisdom, modern healthcare, innovation, and global markets.
              </p>
              <p>
                We envision a future where <span className="text-[#c8a055] font-medium">preventive healthcare, holistic wellness, and sustainable living</span> are at the core of global development, enabling individuals, businesses, and nations to thrive in a healthier and more connected world.
              </p>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block self-stretch my-2 bg-white/10" />

          {/* Mission */}
          <div>
            <p 
              className="text-xs font-medium tracking-widest mb-3 flex items-center gap-2 uppercase"
              style={{ color: '#c8a055', letterSpacing: '1.8px' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block" />
              OUR MISSION
            </p>
            
            <h2 className="text-2xl font-semibold mb-4 leading-tight text-[#f0ece3]">
              World-Class B2B Health Platform
            </h2>
            
            <div className="space-y-3 text-sm leading-relaxed text-[rgba(240,236,227,0.78)] font-light">
              <p>
                To build a world-class B2B healthcare and wellness platform that brings together industry leaders, innovators, buyers, and global stakeholders to drive business growth and collaboration.
              </p>
              <p>
                We aim to promote <span className="text-[#c8a055] font-medium">preventive healthcare, AYUSH, digital health, and wellness innovation</span>, while enabling high-value networking, international trade opportunities, and long-term ecosystem development across the global health and wellness industry.
              </p>
            </div>
          </div>

        </div>
      </SectionContainer>
    </section>
  );
};

export default VisionMission;

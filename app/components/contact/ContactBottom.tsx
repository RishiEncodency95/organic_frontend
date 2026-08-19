"use client";
import React, { useRef, useEffect } from 'react';
import { Navigation, ArrowRight } from 'lucide-react';
import beIcon from '@/app/assets/icons/be.png';
import SectionContainer from '@/app/components/layout/SectionContainer';

const ContactBottom = () => {
  const defaultMapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14010.597792706509!2d77.23467611599812!3d28.618606041009804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2d400000000%3A0xc6eb9b3e1503e7e3!2sPragati%20Maidan%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";
  const mapSrc = defaultMapSrc;
  
  const mapCardTitle = "Find Us Here";
  const mapCardAddress = "Pragati Maidan,\nNew Delhi - 110001, India";
  
  const handleGetDirections = () => {
    const destination = encodeURIComponent(mapCardAddress);
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${destination}`, '_blank');
  };

  // Lazy-load the map iframe only when visible
  const mapIframeRef = useRef<HTMLIFrameElement>(null);
  useEffect(() => {
    const iframe = mapIframeRef.current;
    if (!iframe) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (!iframe.src || iframe.src === 'about:blank') {
            iframe.src = mapSrc;
          }
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    observer.observe(iframe);
    return () => observer.disconnect();
  }, [mapSrc]);

  return (
    <section className="w-full bg-[#fbfcf7] pb-10 font-inter relative z-20 -mt-4 md:-mt-8">
      <SectionContainer>
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Column: Find Us Here (Map Card) */}
          <div className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-100 flex overflow-hidden relative min-h-[250px]">
            {/* Map background (lazy loaded) */}
            <div className="absolute inset-0 w-full h-full z-0">
              <iframe 
                ref={mapIframeRef}
                className="w-full h-full border-0" 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Map Location"
              ></iframe>
            </div>

            {/* Overlay card */}
            <div className="relative z-10 bg-white m-4 px-5 py-4 rounded-xl shadow-md w-[240px] h-fit self-center flex flex-col justify-center border border-gray-100">
              <h3 className="text-[#0c290d] font-semibold text-lg mb-2">{mapCardTitle}</h3>
              <p className="text-black text-sm mb-4 leading-relaxed whitespace-pre-line">
                {mapCardAddress}
              </p>
              <button 
                onClick={handleGetDirections}
                className="bg-[#032e1c] hover:bg-[#044026] text-white px-4 py-2 rounded-lg font-medium text-xs transition-colors flex items-center justify-center gap-2 w-fit"
              >
                <Navigation size={14} /> Get Directions
              </button>
            </div>
          </div>

          {/* Right Column: Newsletter Subscription */}
          <div className="w-full lg:w-[500px] xl:w-[550px] bg-[#123c2e] rounded-2xl p-8 relative overflow-hidden flex flex-col justify-center">
            
            {/* Top row with icon and text */}
            <div className="flex items-start gap-6 mb-8 relative z-10">
              {/* Icon Image */}
              <img src={(beIcon as any).src ?? (beIcon as unknown as string)} alt="Subscribe" className="w-20 h-20 shrink-0 object-contain" />
              
              <div className="text-white pt-2">
                <h3 className="font-inter font-bold text-2xl mb-2">Stay Updated!</h3>
                <p className="text-white/80 text-sm leading-relaxed max-w-[250px]">
                  Subscribe to our newsletter and never miss an update.
                </p>
              </div>
            </div>

            {/* Input Form */}
            <form className="relative z-10 flex flex-col sm:flex-row bg-white rounded-xl p-1 w-full lg:w-[90%] shadow-sm mt-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 px-4 py-3 bg-transparent focus:outline-none text-sm text-gray-700 w-full"
                required
              />
              <button 
                type="submit" 
                className="bg-[#f07e26] hover:bg-[#d96e1a] text-white px-6 py-2.5 rounded-lg font-medium text-sm transition-colors flex items-center justify-center gap-2 shrink-0 w-full sm:w-auto mt-2 sm:mt-0"
              >
                Subscribe <ArrowRight size={16} />
              </button>
            </form>
            
          </div>

        </div>
      </SectionContainer>
    </section>
  );
};

export default ContactBottom;

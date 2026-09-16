"use client";
import React, { useRef, useEffect } from 'react';
import { Navigation, ArrowRight } from 'lucide-react';
import beIcon from '@/app/assets/icons/be.png';
import SectionContainer from '@/app/components/layout/SectionContainer';

const ContactBottom = () => {
  const defaultMapSrc = "https://maps.google.com/maps?q=12/29,%20Site%20II%20Industrial%20Area,%20Loni%20Rd,%20Mohan%20Nagar,%20Ghaziabad,%20Uttar%20Pradesh%20201007,%20India&t=&z=15&ie=UTF8&iwloc=&output=embed";
  const mapSrc = defaultMapSrc;

  const mapCardTitle = "Find Us Here";
  const mapCardAddress = "12/29, Site II Industrial Area,\nLoni Rd, Mohan Nagar, Ghaziabad,\nUttar Pradesh 201007, India";

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
            <div className="relative z-10 bg-white m-4 px-5 py-2 rounded-xl shadow-md w-[240px] h-fit self-center flex flex-col justify-center border border-gray-100">
              <h3 className="text-[#0c290d] font-semibold text-[15px] mb-1">{mapCardTitle}</h3>
              <p className="text-black text-[12px] mb-4 leading-relaxed whitespace-pre-line">
                {mapCardAddress}
              </p>
              <button
                onClick={handleGetDirections}
                className="bg-[#032e1c] hover:bg-[#044026] text-white px-4 py-1.5 rounded-lg font-medium text-xs transition-colors flex items-center justify-center gap-2 w-fit"
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

"use client";
import React, { useRef, useEffect, useState } from 'react';
import { Navigation, ArrowRight } from 'lucide-react';
import beIcon from '@/app/assets/icons/be.png';
import SectionContainer from '@/app/components/layout/SectionContainer';
import { API_URL } from '@/lib/api';

const DEFAULT_MAP_EMBED =
  "https://maps.google.com/maps?q=12/29,%20Site%20II%20Industrial%20Area,%20Loni%20Rd,%20Mohan%20Nagar,%20Ghaziabad,%20Uttar%20Pradesh%20201007,%20India&t=&z=15&ie=UTF8&iwloc=&output=embed";
const DEFAULT_ADDRESS = "12/29, Site II Industrial Area,\nLoni Rd, Mohan Nagar, Ghaziabad,\nUttar Pradesh 201007, India";

/** Admins may paste either a bare embed URL or the full <iframe> snippet Google Maps gives you. */
function extractMapSrc(raw: string): string {
  const trimmed = raw.trim();
  if (!trimmed) return DEFAULT_MAP_EMBED;
  const iframeMatch = trimmed.match(/<iframe[^>]*\ssrc=["']([^"']+)["']/i);
  return iframeMatch ? iframeMatch[1] : trimmed;
}

const ContactBottom = () => {
  const [mapSrc, setMapSrc] = useState(DEFAULT_MAP_EMBED);
  const [mapCardAddress, setMapCardAddress] = useState(DEFAULT_ADDRESS);
  const [directionsLabel, setDirectionsLabel] = useState('Get Directions');
  const [newsletterSubtitle, setNewsletterSubtitle] = useState('Subscribe to our newsletter and never miss an update.');
  const [subscribeLabel, setSubscribeLabel] = useState('Subscribe');
  const mapCardTitle = "Find Us Here";

  useEffect(() => {
    let active = true;
    fetch(`${API_URL}/settings`, { cache: 'no-store' })
      .then((res) => (res.ok ? res.json() : null))
      .then((json) => {
        const settings = json?.data || json;
        const sections = settings?.contactPage?.sections;
        const bottom = Array.isArray(sections) ? sections.find((s: any) => s.key === 'contact-bottom') : null;
        if (active && bottom) {
          if (typeof bottom.mapEmbedUrl === 'string' && bottom.mapEmbedUrl.trim()) {
            setMapSrc(extractMapSrc(bottom.mapEmbedUrl));
          }
          if (typeof bottom.description === 'string' && bottom.description.trim()) {
            setMapCardAddress(bottom.description.trim());
          }
          if (typeof bottom.buttonLabel === 'string' && bottom.buttonLabel.trim()) {
            setDirectionsLabel(bottom.buttonLabel.trim());
          }
          if (typeof bottom.subtitle === 'string' && bottom.subtitle.trim()) {
            setNewsletterSubtitle(bottom.subtitle.trim());
          }
          if (typeof bottom.secondaryButtonLabel === 'string' && bottom.secondaryButtonLabel.trim()) {
            setSubscribeLabel(bottom.secondaryButtonLabel.trim());
          }
        }
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  const handleGetDirections = () => {
    const destination = encodeURIComponent(mapCardAddress);
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${destination}`, '_blank');
  };

  // Lazy-load the map iframe only once it scrolls into view; keeps tracking `mapSrc`
  // so the real admin-configured map replaces the default once the settings fetch resolves.
  const mapIframeRef = useRef<HTMLDivElement>(null);
  const [mapVisible, setMapVisible] = useState(false);
  useEffect(() => {
    const el = mapIframeRef.current;
    if (!el || mapVisible) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setMapVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [mapVisible]);

  return (
    <section className="w-full bg-[#fbfcf7] pb-10 font-inter relative z-20 -mt-4 md:-mt-8">
      <SectionContainer>
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Left Column: Find Us Here (Map Card) */}
          <div className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-100 flex overflow-hidden relative min-h-[250px]">
            {/* Map background (lazy loaded) */}
            <div ref={mapIframeRef} className="absolute inset-0 w-full h-full z-0">
              {mapVisible && (
                <iframe
                  src={mapSrc}
                  className="w-full h-full border-0"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Map Location"
                ></iframe>
              )}
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
                <Navigation size={14} /> {directionsLabel}
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
                  {newsletterSubtitle}
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
                {subscribeLabel} <ArrowRight size={16} />
              </button>
            </form>

          </div>

        </div>
      </SectionContainer>
    </section>
  );
};

export default ContactBottom;

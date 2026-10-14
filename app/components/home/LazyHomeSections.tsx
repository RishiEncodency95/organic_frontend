"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { makeSectionGate } from "@/lib/sectionGate";

const SectionLoader = () => (
  <div className="min-h-[240px] animate-pulse bg-gradient-to-b from-white to-[#f7fbf6]" aria-hidden="true" />
);

const GlobalPlatform = dynamic(() => import("./GlobalPlatform"), { ssr: false, loading: SectionLoader });
const WhyParticipate = dynamic(() => import("./WhyParticipate"), { ssr: false, loading: SectionLoader });
const ConferenceSection = dynamic(() => import("./ConferenceSection"), { ssr: false, loading: SectionLoader });
const ExpoCategories = dynamic(() => import("./ExpoCategories"), { ssr: false, loading: SectionLoader });
const BeyondExhibition = dynamic(() => import("./BeyondExhibition"), { ssr: false, loading: SectionLoader });
const SponsorsAndAttend = dynamic(() => import("./SponsorsAndAttend"), { ssr: false, loading: SectionLoader });
const BecomeSponsor = dynamic(() => import("./BecomeSponsor"), { ssr: false, loading: SectionLoader });
const SponsorshipCategories = dynamic(() => import("./SponsorshipCategories"), { ssr: false, loading: SectionLoader });
const PartnersAndBrands = dynamic(() => import("./PartnersAndBrands"), { ssr: false, loading: SectionLoader });
const BuyerSellerMeet = dynamic(() => import("./BuyerSellerMeet"), { ssr: false, loading: SectionLoader });
const TestimonialsCarousel = dynamic(() => import("./TestimonialsCarousel"), { ssr: false, loading: SectionLoader });
const LatestInsights = dynamic(() => import("./LatestInsights"), { ssr: false, loading: SectionLoader });

// `disabledSections`: landingPage section keys switched off in admin (see lib/sectionVisibility).
export default function LazyHomeSections({ disabledSections = [] }: { disabledSections?: string[] }) {
  const show = makeSectionGate(disabledSections);
  const triggerRef = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const target = triggerRef.current;
    if (!target || shouldRender) return;

    if (!("IntersectionObserver" in window)) {
      setShouldRender(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShouldRender(true);
        observer.disconnect();
      },
      { rootMargin: "200px 0px" },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [shouldRender]);

  return (
    <div ref={triggerRef} className="min-h-px">
      {shouldRender ? (
        <>
          {show("global-platform") && <GlobalPlatform />}
          {show("why-participate") && <WhyParticipate />}
          {show("conference-section") && <ConferenceSection />}
          {show("expo-categories") && <ExpoCategories />}
          {show("beyond-exhibition") && <BeyondExhibition />}
          {show("sponsors-attend") && <SponsorsAndAttend />}
          {show("become-sponsor") && <BecomeSponsor />}
          {show("sponsorship-categories") && <SponsorshipCategories />}
          {show("partners-brands") && <PartnersAndBrands />}
          {show("buyer-seller-meet") && <BuyerSellerMeet />}
          {show("testimonials-carousel") && <TestimonialsCarousel />}
          {show("latest-insights") && <LatestInsights />}
        </>
      ) : (
        <SectionLoader />
      )}
    </div>
  );
}

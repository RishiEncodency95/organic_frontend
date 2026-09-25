"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import dynamic from "next/dynamic";

const SponsorsAndAttend = dynamic(() => import("./SponsorsAndAttend"));
const BecomeSponsor = dynamic(() => import("./BecomeSponsor"));
const SponsorshipCategories = dynamic(() => import("./SponsorshipCategories"));
const PartnersAndBrands = dynamic(() => import("./PartnersAndBrands"));
const BuyerSellerMeet = dynamic(() => import("./BuyerSellerMeet"));
const TestimonialsCarousel = dynamic(() => import("./TestimonialsCarousel"));
const LatestInsights = dynamic(() => import("./LatestInsights"));

function DeferredSection({
  children,
  minHeight,
}: {
  children: ReactNode;
  minHeight: number;
}) {
  const markerRef = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const marker = markerRef.current;
    if (!marker || shouldRender) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShouldRender(true);
        observer.disconnect();
      },
      { rootMargin: "1400px 0px" },
    );

    observer.observe(marker);
    return () => observer.disconnect();
  }, [shouldRender]);

  return (
    <div
      ref={markerRef}
      style={shouldRender ? undefined : { minHeight }}
      className="[content-visibility:auto]"
    >
      {shouldRender ? children : null}
    </div>
  );
}

export default function DeferredHomeSections() {
  return (
    <>
      <DeferredSection minHeight={850}><SponsorsAndAttend /></DeferredSection>
      <DeferredSection minHeight={650}><BecomeSponsor /></DeferredSection>
      <DeferredSection minHeight={750}><SponsorshipCategories /></DeferredSection>
      <DeferredSection minHeight={900}><PartnersAndBrands /></DeferredSection>
      <DeferredSection minHeight={750}><BuyerSellerMeet /></DeferredSection>
      <DeferredSection minHeight={650}><TestimonialsCarousel /></DeferredSection>
      <DeferredSection minHeight={550}><LatestInsights /></DeferredSection>
    </>
  );
}

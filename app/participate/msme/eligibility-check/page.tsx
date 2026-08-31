import React from 'react';
import { Metadata } from 'next';
import EligibilityHero from '@/app/components/participate/msme/eligibility/EligibilityHero';
import EligibilityInputBar from '@/app/components/participate/msme/eligibility/EligibilityInputBar';
import PreliminaryStatus from '@/app/components/participate/msme/eligibility/PreliminaryStatus';
import EnterpriseDetails from '@/app/components/participate/msme/eligibility/EnterpriseDetails';
import IndustryMatch from '@/app/components/participate/msme/eligibility/IndustryMatch';
import CalculationSteps from '@/app/components/participate/msme/eligibility/CalculationSteps';
import EstimateSection from '@/app/components/participate/msme/eligibility/EstimateSection';
import VerificationAlerts from '@/app/components/participate/msme/eligibility/VerificationAlerts';
import FinalScoreFooter from '@/app/components/participate/msme/eligibility/FinalScoreFooter';
import EligibilityDisclaimer from '@/app/components/participate/msme/eligibility/EligibilityDisclaimer';

export const metadata: Metadata = {
  title: "PMS Eligibility Check | Bharat Organic Expo",
  description: "Check your PMS Eligibility for Bharat Organic Expo 2027.",
  alternates: {
    canonical: "/participate/msme/eligibility-check",
  },
};

export default function PMSEligibilityCheckPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans text-neutral-800 pb-16">
      {/* Hero Section */}
      <EligibilityHero />
      
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Input Bar */}
        <EligibilityInputBar />
        
        {/* Content sections */}
        <PreliminaryStatus />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6 items-stretch">
          <EnterpriseDetails />
          <IndustryMatch />
        </div>
        
        <CalculationSteps />
        <EstimateSection />
        <VerificationAlerts />
        <FinalScoreFooter />
        <EligibilityDisclaimer />
      </div>
    </div>
  );
}

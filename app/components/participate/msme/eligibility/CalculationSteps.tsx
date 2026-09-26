"use client";

import React from 'react';
import { CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import { useEligibility } from './EligibilityContext';

const StepCard = ({
  step,
  title,
  subtitle,
  found,
}: {
  step: string;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  found: boolean;
}) => {
  return (
    <div className="flex flex-col items-center justify-start flex-1 min-w-0 bg-white border border-gray-100 rounded-lg p-2 md:p-3 text-center">
      <div className="flex items-center gap-1.5 mb-2.5">
        {found ? (
          <CheckCircle2 size={16} className="text-white fill-[#1b5e20]" />
        ) : (
          <AlertCircle size={16} className="text-[#e17f19]" />
        )}
        <span className="text-sm font-semibold text-[#1b5e20] tracking-wide">STEP {step}</span>
      </div>
      <h4 className="text-xs lg:text-sm font-semibold text-gray-900 mb-2 leading-tight min-h-[30px] flex items-center justify-center text-center">
        {title}
      </h4>
      <div className="text-xs font-medium text-gray-600 mb-3 leading-snug flex-1 flex flex-col justify-center text-center">
        {subtitle}
      </div>
      <div className={`text-xs font-semibold tracking-wide mt-auto uppercase ${found ? "text-[#1b5e20]" : "text-[#a15a10]"}`}>
        {found ? "FOUND ON CERTIFICATE" : "NOT FOUND"}
      </div>
    </div>
  );
};

const Arrow = () => (
  <div className="hidden md:flex shrink-0 items-center justify-center text-[#1b5e20] self-center w-4 h-4 md:w-6 md:h-6 mx-0.5 lg:mx-1">
    <ArrowRight size={24} strokeWidth={2.5} />
  </div>
);

const CalculationSteps = ({ customTitle, customSteps }: { customTitle?: string; customSteps?: any[] }) => {
  const { result } = useEligibility();
  const hasResult = result && result.documentType === "valid_udyam_certificate";

  if (customSteps && customSteps.length > 0) {
    // CMS-authored steps are static editorial content — render as-is.
    return (
      <div className="w-full bg-white rounded-xl lg:rounded-2xl border border-gray-100 p-4 md:px-5 md:py-4 mt-4 shadow-sm">
        <h3 className="text-sm lg:text-base font-semibold text-[#1b5e20] uppercase tracking-wide mb-4">
          {customTitle || "WHAT WE READ FROM YOUR CERTIFICATE"}
        </h3>
        <div className="flex flex-col md:flex-row items-stretch justify-between w-full gap-2 lg:gap-1.5">
          {customSteps.map((s: any, idx: number) => (
            <React.Fragment key={idx}>
              <StepCard step={s.step || String(idx + 1)} title={s.title} subtitle={s.subtitle} found={true} />
              {idx < customSteps.length - 1 && <Arrow />}
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  }

  if (!hasResult) {
    return (
      <div className="w-full bg-white rounded-xl lg:rounded-2xl border border-dashed border-gray-200 p-6 mt-4 text-center">
        <p className="text-[13px] font-medium text-gray-500">
          Upload your Udyam certificate above to see what we could read from it.
        </p>
      </div>
    );
  }

  const steps = [
    {
      step: "1",
      title: <>Udyam<br />Registration No.</>,
      subtitle: <span className="font-semibold text-gray-800">{result.udyamRegistrationNumber || "Not printed"}</span>,
      found: !!result.udyamRegistrationNumber,
    },
    {
      step: "2",
      title: <>Enterprise<br />Classification</>,
      subtitle: <span className="font-semibold text-gray-800 uppercase">{result.enterpriseType || "Not printed"}</span>,
      found: !!result.enterpriseType,
    },
    {
      step: "3",
      title: <>Major<br />Activity</>,
      subtitle: <span className="font-semibold text-gray-800 uppercase">{result.majorActivity || "Not printed"}</span>,
      found: !!result.majorActivity,
    },
    {
      step: "4",
      title: <>NIC<br />Code</>,
      subtitle: <span className="font-semibold text-gray-800">{result.nicCode || "Not printed"}</span>,
      found: !!result.nicCode,
    },
    {
      step: "5",
      title: <>Entrepreneur<br />Category</>,
      subtitle: <span className="font-semibold text-gray-800 uppercase">{result.gender || result.socialCategory || "Not printed"}</span>,
      found: !!(result.gender || result.socialCategory),
    },
  ];

  return (
    <div className="w-full bg-white rounded-xl lg:rounded-2xl border border-gray-100 p-4 md:px-5 md:py-4 mt-4 shadow-sm">
      <h3 className="text-sm lg:text-base font-semibold text-[#1b5e20] uppercase tracking-wide mb-4">
        {customTitle || "WHAT WE READ FROM YOUR CERTIFICATE"}
      </h3>

      <div className="flex flex-col md:flex-row items-stretch justify-between w-full gap-2 lg:gap-1.5">
        {steps.map((s, idx) => (
          <React.Fragment key={idx}>
            <StepCard step={s.step} title={s.title} subtitle={s.subtitle} found={s.found} />
            {idx < steps.length - 1 && <Arrow />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default CalculationSteps;

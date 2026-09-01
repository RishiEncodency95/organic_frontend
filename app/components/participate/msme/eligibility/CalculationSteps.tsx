import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const StepCard = ({
  step,
  title,
  subtitle,
  statusText
}: {
  step: string;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  statusText: string;
}) => {
  return (
    <div className="flex flex-col items-center justify-start flex-1 min-w-0 bg-white border border-gray-100 rounded-lg p-2 md:p-3 text-center">
      <div className="flex items-center gap-1.5 mb-2.5">
        <CheckCircle2 size={16} className="text-white fill-[#1b5e20]" />
        <span className="text-sm font-bold text-[#1b5e20] tracking-wide">STEP {step}</span>
      </div>
      <h4 className="text-xs lg:text-sm font-semibold text-gray-900 mb-2 leading-tight min-h-[30px] flex items-center justify-center text-center">
        {title}
      </h4>
      <div className="text-xs font-medium text-gray-600 mb-3 leading-snug flex-1 flex flex-col justify-center text-center">
        {subtitle}
      </div>
      <div className="text-xs font-semibold tracking-wide text-[#1b5e20] mt-auto uppercase">
        {statusText}
      </div>
    </div>
  );
};

const Arrow = () => (
  <div className="hidden md:flex shrink-0 items-center justify-center text-[#1b5e20] self-center w-4 h-4 md:w-6 md:h-6 mx-0.5 lg:mx-1">
    <ArrowRight size={24} strokeWidth={2.5} />
  </div>
);

const CalculationSteps = () => {
  return (
    <div className="w-full bg-white rounded-xl lg:rounded-2xl border border-gray-100 p-4 md:px-5 md:py-4 mt-4 shadow-sm">
      <h3 className="text-sm lg:text-base font-semibold text-[#1b5e20] uppercase tracking-wide mb-4">
        HOW YOUR ELIGIBILITY WAS CALCULATED
      </h3>

      <div className="flex flex-col md:flex-row items-stretch justify-between w-full gap-2 lg:gap-1.5">

        <StepCard
          step="1"
          title={<>Valid Udyam<br />Registration</>}
          subtitle={<span className="font-semibold text-gray-800">UDYAM-DL-02-0118490</span>}
          statusText="PASSED"
        />

        <Arrow />

        <StepCard
          step="2"
          title={<>Micro / Small<br />Enterprise</>}
          subtitle={<>Enterprise Classification:<br /><span className="font-semibold text-gray-800 mt-0.5 inline-block">MICRO</span></>}
          statusText="PASSED"
        />

        <Arrow />

        <StepCard
          step="3"
          title={<>Manufacturing /<br />Service Activity</>}
          subtitle={<>Major Activity:<br /><span className="font-semibold text-gray-800 mt-0.5 inline-block">MANUFACTURING</span></>}
          statusText="PASSED"
        />

        <Arrow />

        <StepCard
          step="4"
          title={<>Approved Expo<br />Industry Match</>}
          subtitle={<>Food • Spices • Pharmaceutical •<br />Medicinal • Botanical Products</>}
          statusText="PASSED"
        />

        <Arrow />

        <StepCard
          step="5"
          title={<>Special PMS<br />Category Check</>}
          subtitle={<>Entrepreneur Gender:<br /><span className="font-semibold text-gray-800 mt-0.5 inline-block">FEMALE</span></>}
          statusText="100% CATEGORY IDENTIFIED*"
        />

      </div>
    </div>
  );
};

export default CalculationSteps;

import React from 'react';
import { CheckCircle2 } from 'lucide-react';

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
    <div className="flex flex-col items-center justify-start flex-1 min-w-0 bg-white border border-gray-100 rounded-lg p-3 lg:p-4 text-center">
      <div className="flex items-center gap-1.5 mb-3 lg:mb-4">
        <CheckCircle2 size={16} className="text-white fill-[#1b5e20]" />
        <span className="text-[11px] lg:text-[12px] font-bold text-[#1b5e20] tracking-wide">STEP {step}</span>
      </div>
      <h4 className="text-[11px] lg:text-[12px] font-bold text-gray-900 mb-2 lg:mb-3 leading-[1.3] min-h-[30px] flex items-center justify-center text-center">
        {title}
      </h4>
      <div className="text-[9.5px] lg:text-[10.5px] font-medium text-gray-500 mb-4 leading-[1.4] flex-1 flex flex-col justify-center text-center">
        {subtitle}
      </div>
      <div className="text-[10px] lg:text-[11px] font-bold tracking-wide text-[#1b5e20] mt-auto uppercase">
        {statusText}
      </div>
    </div>
  );
};

const CalculationSteps = () => {
  return (
    <div className="w-full bg-white rounded-xl lg:rounded-2xl border border-gray-100 p-5 lg:p-7 mt-4 shadow-sm">
      <h3 className="text-[13px] lg:text-[16px] font-semibold text-[#1b5e20] uppercase tracking-wide mb-6">
        HOW YOUR ELIGIBILITY WAS CALCULATED
      </h3>

      <div className="flex flex-col md:flex-row items-stretch justify-between w-full gap-2 lg:gap-3">

        <StepCard
          step="1"
          title={<>Valid Udyam<br />Registration</>}
          subtitle={<span className="font-semibold text-gray-800">UDYAM-DL-02-0118490</span>}
          statusText="PASSED"
        />

        <div className="hidden md:flex shrink-0 items-center justify-center text-[#1b5e20] text-lg mb-8">
          →
        </div>

        <StepCard
          step="2"
          title={<>Micro / Small<br />Enterprise</>}
          subtitle={<>Enterprise Classification:<br /><span className="font-semibold text-gray-800 mt-0.5 inline-block">MICRO</span></>}
          statusText="PASSED"
        />

        <div className="hidden md:flex shrink-0 items-center justify-center text-[#1b5e20] text-lg mb-8">
          →
        </div>

        <StepCard
          step="3"
          title={<>Manufacturing /<br />Service Activity</>}
          subtitle={<>Major Activity:<br /><span className="font-semibold text-gray-800 mt-0.5 inline-block">MANUFACTURING</span></>}
          statusText="PASSED"
        />

        <div className="hidden md:flex shrink-0 items-center justify-center text-[#1b5e20] text-lg mb-8">
          →
        </div>

        <StepCard
          step="4"
          title={<>Approved Expo<br />Industry Match</>}
          subtitle={<>Food • Spices • Pharmaceutical •<br />Medicinal • Botanical Products</>}
          statusText="PASSED"
        />

        <div className="hidden md:flex shrink-0 items-center justify-center text-[#1b5e20] text-lg mb-8">
          →
        </div>

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

import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const StepCard = ({ 
  step, 
  title, 
  subtitle, 
  statusText, 
  highlightStatus = false 
}: { 
  step: string; 
  title: string; 
  subtitle: React.ReactNode; 
  statusText: string; 
  highlightStatus?: boolean 
}) => {
  return (
    <div className="flex flex-col items-center justify-start flex-1 min-w-[150px] text-center">
      <div className="flex items-center gap-1.5 mb-2">
        <CheckCircle2 size={16} className="text-[#1b5e20] fill-[#1b5e20] text-white" />
        <span className="text-[12px] font-bold text-gray-800 tracking-wider">STEP {step}</span>
      </div>
      <h4 className="text-[12px] font-bold text-gray-900 mb-1 leading-tight min-h-[30px] flex items-center justify-center">
        {title}
      </h4>
      <div className="text-[10px] md:text-[11px] font-medium text-gray-500 mb-3 min-h-[30px] flex items-center justify-center leading-tight">
        {subtitle}
      </div>
      <div className={`px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase ${highlightStatus ? 'bg-[#f0f9f0] text-[#1b5e20]' : 'text-[#1b5e20] font-black'}`}>
        {statusText}
      </div>
    </div>
  );
};

const CalculationSteps = () => {
  return (
    <div className="w-full bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8 mt-6">
      <h3 className="text-[13px] font-bold text-gray-500 uppercase tracking-widest mb-6 border-b border-gray-100 pb-4">
        How Your Eligibility Was Calculated
      </h3>

      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4 md:gap-0">
        
        <StepCard 
          step="1"
          title="Valid Udyam Registration"
          subtitle="UDYAM-DL-02-0118490"
          statusText="PASSED"
        />

        <div className="hidden md:block shrink-0 px-2 text-green-700/30">
          <ArrowRight size={20} strokeWidth={2} />
        </div>

        <StepCard 
          step="2"
          title="Micro / Small Enterprise"
          subtitle={<>Enterprise Classification:<br/>MICRO</>}
          statusText="PASSED"
        />

        <div className="hidden md:block shrink-0 px-2 text-green-700/30">
          <ArrowRight size={20} strokeWidth={2} />
        </div>

        <StepCard 
          step="3"
          title="Manufacturing / Service Activity"
          subtitle={<>Major Activity:<br/>MANUFACTURING</>}
          statusText="PASSED"
        />

        <div className="hidden md:block shrink-0 px-2 text-green-700/30">
          <ArrowRight size={20} strokeWidth={2} />
        </div>

        <StepCard 
          step="4"
          title="Approved Expo Industry Match"
          subtitle="Food → Spices → Pharmaceutical → Medicinal → Botanical Products"
          statusText="PASSED"
        />

        <div className="hidden md:block shrink-0 px-2 text-green-700/30">
          <ArrowRight size={20} strokeWidth={2} />
        </div>

        <StepCard 
          step="5"
          title="Special PMS Category Check"
          subtitle={<>Entrepreneur Gender:<br/>FEMALE</>}
          statusText="100% CATEGORY IDENTIFIED*"
          highlightStatus={false}
        />

      </div>
    </div>
  );
};

export default CalculationSteps;

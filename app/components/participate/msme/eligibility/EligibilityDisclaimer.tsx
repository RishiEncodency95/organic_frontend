import React from 'react';
import { ShieldAlert } from 'lucide-react';

const EligibilityDisclaimer = () => {
  return (
    <div className="w-full bg-[#ffedd5]/50 rounded-2xl shadow-sm border border-[#fdba74]/50 p-4 lg:px-6 lg:py-2 flex flex-col sm:flex-row items-start gap-4 mt-4">
      <div className="bg-[#fff8f1] rounded-full p-2.5 shrink-0 border border-[#fdba74]/30 text-[#ea580c]">
        <ShieldAlert size={24} strokeWidth={2} />
      </div>
      <div>
        <h4 className="text-[12px] font-semibold text-[#ea580c] uppercase tracking-wide mb-1.5">
          Important Disclaimer
        </h4>
        <p className="text-[11px] md:text-[12px] font-medium text-gray-700 leading-relaxed">
          This page reads and displays details directly from the Udyam Registration Certificate you upload — it is not a determination of PMS eligibility or assistance amount. Final eligibility, admissible stall area, applicable assistance percentage, financial ceiling, sanction and reimbursement are subject to applicable Ministry of MSME guidelines and approval by the competent authority after you submit your application.
        </p>
      </div>
    </div>
  );
};

export default EligibilityDisclaimer;

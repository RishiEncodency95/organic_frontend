"use client";

import React from 'react';
import { Award, Factory } from 'lucide-react';
import { useEligibility } from './EligibilityContext';

const IndustryMatch = ({ customProps }: { customProps?: any }) => {
  const { result } = useEligibility();
  const hasResult = result && result.documentType === "valid_udyam_certificate";

  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div className="w-full bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-gray-100 p-3 md:px-5 md:py-4 flex-1">

        <div className="flex items-start gap-3 mb-4">
          <Award size={24} className="text-[#1b5e20] mt-0.5" />
          <div>
            <h2 className="text-sm md:text-base font-semibold text-[#1b5e20] uppercase tracking-wider mb-0.5">
              {customProps?.title || "Registered Industry Activity"}
            </h2>
            <p className="text-xs md:text-sm font-medium text-gray-600 leading-snug">
              {customProps?.subtitle || "As recorded on your Udyam certificate."}
            </p>
          </div>
        </div>

        {!hasResult ? (
          <div className="border border-dashed border-gray-200 rounded-xl p-6 text-center">
            <p className="text-[13px] font-medium text-gray-500">
              Upload your Udyam certificate above to see your registered industry activity here.
            </p>
          </div>
        ) : (
          <div className="border border-gray-100 rounded-xl p-3 md:p-4 relative overflow-hidden flex items-center justify-between shadow-sm">
            <div className="flex flex-col z-10 w-[80%]">
              <span className="text-[11px] md:text-xs font-semibold text-[#1b5e20] mb-0.5">
                NIC Code: {result.nicCode || "Not found on certificate"}
              </span>
              <h3 className="text-sm md:text-[15px] font-semibold text-gray-900 mb-1 leading-snug">
                {result.majorActivity || "Major activity not found"}
              </h3>
              <p className="text-[11.5px] md:text-[13px] font-medium text-gray-600">
                Exact fit with Bharat Organic Expo's exhibitor categories will be confirmed by our team during review.
              </p>
            </div>

            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-gray-100 flex items-center justify-center shrink-0 bg-gray-50">
              <Factory size={28} className="text-[#1b5e20]" />
            </div>
          </div>
        )}
      </div>

      {hasResult && (
        <div className="w-full flex items-center justify-center md:justify-start mt-3 px-1 text-[11.5px] md:text-[13px] font-medium text-gray-600">
          This is read directly from your certificate — it isn't a guarantee of Expo category fit.
        </div>
      )}
    </div>
  );
};

export default IndustryMatch;

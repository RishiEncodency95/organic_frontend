import React from 'react';
import {
  AlertTriangle,
  FileText,
  CheckCircle2,
  Receipt,
  Stamp,
} from 'lucide-react';

const VerificationAlerts = () => {
  return (
    <div className="w-full mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">

      {/* LEFT — Additional Verification Required */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-[0_1px_8px_rgba(0,0,0,0.03)] p-4 md:px-5 md:py-4">

        {/* Heading */}
        <div className="flex items-center gap-3 mb-5">
          <AlertTriangle
            size={24}
            strokeWidth={2}
            className="text-[#c95d32]"
          />

          <h3 className="text-[12px] lg:text-[14px] font-bold text-[#c95d32] uppercase tracking-wide">
            Additional Verification Required
          </h3>
        </div>

        {/* Description */}
        <p className="text-[15px] leading-[1.55] font-medium text-gray-700 mb-3 max-w-[700px]">
          Your preliminary eligibility is positive, but we found a few details
          that may require supporting documents during application/claim
          processing:
        </p>

        {/* Verification Table */}
        <div className="border border-gray-100 rounded-lg overflow-hidden bg-white mb-3">
          <table className="w-full text-left">
            <tbody className="divide-y divide-gray-100">

              {/* Turnover */}
              <tr>
                <td className="px-5 py-2">
                  <div className="flex items-center gap-3 text-[15px] font-medium text-gray-700">
                    <Receipt
                      size={19}
                      strokeWidth={1.8}
                      className="text-gray-500 shrink-0"
                    />
                    <span>FY 2024-25 Turnover</span>
                  </div>
                </td>

                <td className="px-5 py-2 w-[190px] text-[15px] font-bold text-gray-900">
                  ₹0
                </td>
              </tr>

              {/* ITR */}
              <tr>
                <td className="px-5 py-2">
                  <div className="flex items-center gap-3 text-[15px] font-medium text-gray-700">
                    <FileText
                      size={19}
                      strokeWidth={1.8}
                      className="text-gray-500 shrink-0"
                    />
                    <span>ITR Filed</span>
                  </div>
                </td>

                <td className="px-5 py-2 text-[15px] font-bold text-gray-900">
                  No
                </td>
              </tr>

              {/* IEC */}
              <tr>
                <td className="px-5 py-2">
                  <div className="flex items-center gap-3 text-[15px] font-medium text-gray-700">
                    <Stamp
                      size={19}
                      strokeWidth={1.8}
                      className="text-gray-500 shrink-0"
                    />
                    <span>IEC Status</span>
                  </div>
                </td>

                <td className="px-5 py-2 text-[15px] font-bold text-gray-900">
                  Inactive
                </td>
              </tr>

            </tbody>
          </table>
        </div>

        {/* Bottom Warning */}
        <div className="bg-[#fff7e9] border border-[#f4dfbd] rounded-lg px-3 py-3">
          <p className="text-[14px] leading-[1.7] font-medium">
            <span className="text-[#91451f]">
              This does <strong className="font-bold text-[#000]">NOT</strong>{' '}
              currently change <span className="text-[#000]">your result to</span> &quot;Not Eligible.&quot;
            </span>
            <br />
            <span className="text-gray-700">
              It means supporting business/financial documents may be required during
              final verification.
            </span>
          </p>
        </div>
      </div>


      {/* RIGHT — Documents to Keep Ready */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-[0_1px_8px_rgba(0,0,0,0.03)] p-4 md:px-5 md:py-4">

        {/* Heading */}
        <div className="flex items-center gap-3 mb-6">
          <FileText
            size={24}
            strokeWidth={2}
            className="text-[#1f6426]"
          />

          <h3 className="text-[12px] lg:text-[14px] font-bold text-[#1f6426] uppercase tracking-wide">
            Documents to Keep Ready
          </h3>
        </div>

        {/* Documents */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5">

          {/* Left Vertical List */}
          <div className="flex flex-col gap-5">
            <div className="flex items-start gap-3">
              <CheckCircle2 size={20} strokeWidth={2} className="text-[#4b9652] shrink-0 mt-[1px]" />
              <span className="text-[15px] leading-[1.45] font-medium text-gray-700">Udyam Registration Certificate</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 size={20} strokeWidth={2} className="text-[#4b9652] shrink-0 mt-[1px]" />
              <span className="text-[15px] leading-[1.45] font-medium text-gray-700">PAN</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 size={20} strokeWidth={2} className="text-[#4b9652] shrink-0 mt-[1px]" />
              <span className="text-[15px] leading-[1.45] font-medium text-gray-700">GST Registration Certificate</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 size={20} strokeWidth={2} className="text-[#4b9652] shrink-0 mt-[1px]" />
              <span className="text-[15px] leading-[1.45] font-medium text-gray-700">Cancelled Cheque / Bank Details</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 size={20} strokeWidth={2} className="text-[#4b9652] shrink-0 mt-[1px]" />
              <span className="text-[15px] leading-[1.45] font-medium text-gray-700">
                Bharat Organic Expo Booking Confirmation
              </span>
            </div>
          </div>

          {/* Right Vertical List */}
          <div className="flex flex-col gap-5 mt-5 sm:mt-0">
            <div className="flex items-start gap-3">
              <CheckCircle2 size={20} strokeWidth={2} className="text-[#4b9652] shrink-0 mt-[1px]" />
              <span className="text-[15px] leading-[1.45] font-medium text-gray-700">Stall Invoice</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 size={20} strokeWidth={2} className="text-[#4b9652] shrink-0 mt-[1px]" />
              <span className="text-[15px] leading-[1.45] font-medium text-gray-700">Payment Proof</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 size={20} strokeWidth={2} className="text-[#4b9652] shrink-0 mt-[1px]" />
              <span className="text-[15px] leading-[1.45] font-medium text-gray-700">Product / Business Activity Proof</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 size={20} strokeWidth={2} className="text-[#4b9652] shrink-0 mt-[1px]" />
              <span className="text-[15px] leading-[1.45] font-medium text-gray-700">
                Women ownership/promoter proof, if requested
              </span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 size={20} strokeWidth={2} className="text-[#4b9652] shrink-0 mt-[1px]" />
              <span className="text-[15px] leading-[1.45] font-medium text-gray-700">
                Additional documents required under PMS guidelines
              </span>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default VerificationAlerts;
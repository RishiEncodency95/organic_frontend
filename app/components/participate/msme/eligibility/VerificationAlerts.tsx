import React from 'react';
import { AlertTriangle, FileText, CheckCircle2, Receipt, CreditCard, Banknote, ShieldAlert, Stamp } from 'lucide-react';

const VerificationAlerts = () => {
  return (
    <div className="w-full mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
      
      {/* Left Column: Additional Verification Required */}
      <div className="bg-[#fff8f1] rounded-2xl shadow-sm border border-[#fdba74] p-6 md:p-8 flex flex-col h-full">
        
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle size={20} className="text-[#ea580c]" />
          <h3 className="text-[14px] font-bold text-[#ea580c] uppercase tracking-wide">
            Additional Verification Required
          </h3>
        </div>
        
        <p className="text-[12px] md:text-[13px] font-medium text-gray-700 mb-5 leading-relaxed">
          Your preliminary eligibility is positive, but we found a few details that may require supporting documents during application/claim processing:
        </p>

        <div className="border border-[#fdba74]/50 rounded-xl overflow-hidden mb-6 bg-white">
          <table className="w-full text-left text-[12px] md:text-[13px]">
            <tbody className="divide-y divide-[#fdba74]/30 font-medium text-gray-700">
              <tr>
                <td className="px-4 py-3 flex items-center gap-3">
                  <Receipt size={16} className="text-gray-400" /> FY 2024-25 Turnover
                </td>
                <td className="px-4 py-3 font-bold text-gray-900 w-[120px]">₹0</td>
              </tr>
              <tr>
                <td className="px-4 py-3 flex items-center gap-3">
                  <FileText size={16} className="text-gray-400" /> ITR Filed
                </td>
                <td className="px-4 py-3 font-bold text-gray-900">No</td>
              </tr>
              <tr>
                <td className="px-4 py-3 flex items-center gap-3">
                  <Stamp size={16} className="text-gray-400" /> IEC Status
                </td>
                <td className="px-4 py-3 font-bold text-gray-900">Inactive</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-[#ffedd5] p-4 rounded-xl text-[12px] font-medium text-[#c2410c] leading-relaxed border border-[#fdba74]/50 mt-auto">
          This does <strong className="font-bold">NOT</strong> currently change your result to &quot;Not Eligible.&quot;<br className="hidden sm:block" />
          It means supporting business/financial documents may be required during final verification.
        </div>
      </div>

      {/* Right Column: Documents to Keep Ready */}
      <div className="bg-[#f2f7f2] rounded-2xl shadow-sm border border-[#e2ede2] p-6 md:p-8 flex flex-col h-full">
        
        <div className="flex items-center gap-2 mb-6">
          <FileText size={20} className="text-[#1b5e20]" />
          <h3 className="text-[14px] font-bold text-[#1b5e20] uppercase tracking-wide">
            Documents to Keep Ready
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4 text-[12px] md:text-[13px] font-medium text-gray-700">
          <div className="flex items-start gap-2.5">
            <CheckCircle2 size={16} className="text-[#1b5e20] shrink-0 mt-0.5" />
            <span className="leading-snug">Udyam Registration Certificate</span>
          </div>
          <div className="flex items-start gap-2.5">
            <CheckCircle2 size={16} className="text-[#1b5e20] shrink-0 mt-0.5" />
            <span className="leading-snug">Stall Invoice</span>
          </div>
          <div className="flex items-start gap-2.5">
            <CheckCircle2 size={16} className="text-[#1b5e20] shrink-0 mt-0.5" />
            <span className="leading-snug">PAN</span>
          </div>
          <div className="flex items-start gap-2.5">
            <CheckCircle2 size={16} className="text-[#1b5e20] shrink-0 mt-0.5" />
            <span className="leading-snug">Payment Proof</span>
          </div>
          <div className="flex items-start gap-2.5">
            <CheckCircle2 size={16} className="text-[#1b5e20] shrink-0 mt-0.5" />
            <span className="leading-snug">GST Registration Certificate</span>
          </div>
          <div className="flex items-start gap-2.5">
            <CheckCircle2 size={16} className="text-[#1b5e20] shrink-0 mt-0.5" />
            <span className="leading-snug">Product / Business Activity Proof</span>
          </div>
          <div className="flex items-start gap-2.5">
            <CheckCircle2 size={16} className="text-[#1b5e20] shrink-0 mt-0.5" />
            <span className="leading-snug">Cancelled Cheque / Bank Details</span>
          </div>
          <div className="flex items-start gap-2.5">
            <CheckCircle2 size={16} className="text-[#1b5e20] shrink-0 mt-0.5" />
            <span className="leading-snug">Women ownership/promoter proof, if requested</span>
          </div>
          <div className="flex items-start gap-2.5 sm:col-span-1">
            <CheckCircle2 size={16} className="text-[#1b5e20] shrink-0 mt-0.5" />
            <span className="leading-snug">Bharat Organic Expo Booking Confirmation</span>
          </div>
          <div className="flex items-start gap-2.5 sm:col-span-1">
            <CheckCircle2 size={16} className="text-[#1b5e20] shrink-0 mt-0.5" />
            <span className="leading-snug">Additional documents required under PMS guidelines</span>
          </div>
        </div>

      </div>

    </div>
  );
};

export default VerificationAlerts;

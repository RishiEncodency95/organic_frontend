import { AlertTriangle, CheckSquare, ArrowRight, Headphones, Phone } from "lucide-react";

export default function ApplyFooter() {
  return (
    <div className="flex flex-col">

      {/* Declaration Section */}
      <div className="bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] mt-4 p-4 md:mx-14">
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle size={20} className="text-[#176b27]" strokeWidth={2.5} />
          <h2 className="text-[16px] font-semibold uppercase text-[#176b27] tracking-wide">
            Declaration
          </h2>
        </div>

        <div className="flex items-start gap-3 mt-4">
          <div className="mt-0.5 relative shrink-0">
            {/* Custom Checkbox */}
            <input type="checkbox" defaultChecked className="peer sr-only" id="declaration-check" />
            <div className="w-5 h-5 rounded-[4px] border-2 border-[#176b27] bg-[#176b27] flex items-center justify-center transition-colors">
              <CheckSquare size={14} className="text-white fill-current" strokeWidth={3} />
            </div>
          </div>
          <label htmlFor="declaration-check" className="text-[14px] font-medium text-gray-700 leading-[1.6] cursor-pointer">
            I hereby declare that the information provided above is true and correct to the best of my knowledge and belief. I understand that any misrepresentation of facts may lead to rejection of my PMS claim and action as per applicable government guidelines.
          </label>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-4 bg-white px-4 md:mx-14 py-4 rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)]">
        <button type="button" className="w-full sm:w-auto h-[48px] px-6 rounded-md border-2 border-[#176b27] text-[#176b27] font-bold text-[13px] uppercase tracking-wide hover:bg-[#f1f6f1] transition-colors">
          Save & Continue Later
        </button>
        <button type="button" className="w-full sm:w-auto h-[48px] px-8 rounded-md bg-[#176b27] text-white font-bold text-[13px] uppercase tracking-wide hover:bg-[#115d20] transition-colors flex items-center justify-center gap-2 shadow-md">
          Save & Proceed to Next <ArrowRight size={18} strokeWidth={2.5} />
        </button>
      </div>

      {/* Help Banner */}
      <div className="bg-white rounded-xl border border-[#edf0ed] flex flex-col lg:flex-row items-center justify-between gap-6 mt-4 px-4 md:mx-14 py-4 ">

        <div className="flex items-center gap-4 flex-1">
          <div className="w-14 h-14 rounded-full bg-[#f1f6f1] text-[#176b27] flex items-center justify-center shrink-0">
            <Headphones size={28} strokeWidth={2} />
          </div>
          <div>
            <h4 className="text-[15px] font-bold text-[#176b27] mb-1">
              Need Help with PMS Application?
            </h4>
            <p className="text-[14px] font-medium text-gray-600 leading-snug">
              Our PMS support team is here to help you with documentation, eligibility, and claim process.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-6 shrink-0">
          <button type="button" className="h-[40px] px-5 rounded-md border border-[#176b27] text-[#176b27] font-semibold text-[14px] uppercase tracking-wide flex items-center gap-2 hover:bg-[#f1f6f1] transition-colors">
            Talk to PMS Support Team <Headphones size={16} strokeWidth={2.5} />
          </button>

          <div className="h-10 w-[1px] bg-gray-200 hidden sm:block"></div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border-2 border-[#176b27] text-[#176b27] flex items-center justify-center">
              <Phone size={18} strokeWidth={2} />
            </div>
            <div>
              <div className="text-[14px] font-bold text-[#176b27] uppercase tracking-wider mb-0.5">
                PMS Helpline
              </div>
              <div className="text-[16px] font-bold text-[#176b27] leading-none mb-1">
                +91 11 4075 4187
              </div>
              <div className="text-[12px] font-medium text-gray-500">
                Mon - Sat | 10:00 AM - 6:00 PM
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

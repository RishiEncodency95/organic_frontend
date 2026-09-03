import { CheckCircle2, ShieldCheck, Tag } from "lucide-react";

export default function ParticipationSidebar() {
  return (
    <div className="flex flex-col gap-6">
      
      {/* Eligibility Summary */}
      <div className="bg-[#115d20] rounded-xl shadow-lg p-6 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute -right-6 -top-6 w-24 h-24 bg-white opacity-5 rounded-full blur-xl"></div>
        <div className="absolute -left-6 -bottom-6 w-32 h-32 bg-[#1a852d] opacity-20 rounded-full blur-2xl"></div>

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-6 justify-center">
            <ShieldCheck size={20} className="text-[#a3d9a5]" strokeWidth={2.5} />
            <h3 className="text-[12px] font-semibold uppercase text-white tracking-widest text-center">
              Your PMS Eligibility Summary
            </h3>
          </div>

          <div className="border-t border-b border-[#2e7d38] py-4 mb-4 flex flex-col items-center">
            <span className="text-[#a3d9a5] text-[10px] font-semibold uppercase tracking-wider mb-1">
              Preliminary Status
            </span>
            <div className="flex items-center gap-2">
              <span className="text-3xl font-extrabold text-white tracking-tight">ELIGIBLE</span>
              <CheckCircle2 size={24} className="text-[#a3d9a5]" strokeWidth={3} fill="currentColor" />
            </div>
          </div>

          <div className="flex flex-col items-center mb-5">
            <span className="text-[#a3d9a5] text-[11px] font-medium mb-1">
              Potential Assistance
            </span>
            <span className="text-2xl font-extrabold text-white tracking-tight mb-1">
              UP TO 100%
            </span>
            <span className="text-[10px] text-white/80 font-medium">
              Eligible Space Rent Assistance*
            </span>
          </div>

          <div className="bg-white rounded-full py-1.5 px-3 flex items-center justify-center gap-1.5 w-max mx-auto shadow-sm">
            <Tag size={12} className="text-[#176b27]" strokeWidth={2.5} />
            <span className="text-[11px] font-semibold text-[#176b27]">
              Women MSE Category
            </span>
          </div>
        </div>
      </div>

      {/* Application Summary */}
      <div className="bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-[#edf0ed] p-5">
        <h3 className="text-[12px] font-semibold uppercase text-[#176b27] tracking-wider mb-4 border-b border-[#edf0ed] pb-2">
          Application Summary
        </h3>
        
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-start gap-4">
            <span className="text-[11px] font-medium text-gray-500 w-[40%]">Udyam Reg. Number</span>
            <span className="text-[11px] font-semibold text-gray-900 w-[60%] text-right">UDYAM-DL-02-0118490</span>
          </div>
          <div className="flex justify-between items-start gap-4">
            <span className="text-[11px] font-medium text-gray-500 w-[40%]">Enterprise Name</span>
            <span className="text-[11px] font-semibold text-gray-900 w-[60%] text-right leading-tight">RAMMANI TRADELINK PRIVATE LIMITED</span>
          </div>
          <div className="flex justify-between items-start gap-4">
            <span className="text-[11px] font-medium text-gray-500 w-[40%]">Enterprise Type</span>
            <span className="text-[11px] font-semibold text-gray-900 w-[60%] text-right">Micro</span>
          </div>
          <div className="flex justify-between items-start gap-4">
            <span className="text-[11px] font-medium text-gray-500 w-[40%]">Major Activity</span>
            <span className="text-[11px] font-semibold text-gray-900 w-[60%] text-right">Manufacturing</span>
          </div>
          <div className="flex justify-between items-start gap-4">
            <span className="text-[11px] font-medium text-gray-500 w-[40%]">Stall Type</span>
            <span className="text-[11px] font-semibold text-gray-900 w-[60%] text-right">Shell Scheme</span>
          </div>
          <div className="flex justify-between items-start gap-4">
            <span className="text-[11px] font-medium text-gray-500 w-[40%]">Stall Size</span>
            <span className="text-[11px] font-semibold text-gray-900 w-[60%] text-right">9 sqm</span>
          </div>
          <div className="flex justify-between items-start gap-4 pt-2 border-t border-[#edf0ed]">
            <span className="text-[11px] font-semibold text-gray-700 w-[40%]">Total Amount <br/><span className="text-[9px] font-medium text-gray-500">(Inclusive of GST)</span></span>
            <span className="text-[13px] font-extrabold text-[#176b27] w-[60%] text-right">₹1,16,820</span>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-[#edf0ed] p-5">
        <h3 className="text-[12px] font-semibold uppercase text-[#176b27] tracking-wider mb-5">
          Next Steps
        </h3>
        
        <div className="flex flex-col relative">
          {/* Vertical Line */}
          <div className="absolute left-3 top-2 bottom-4 w-[2px] bg-gray-100 z-0"></div>
          
          {[
            { id: 1, title: "Documents", desc: "Upload required documents" },
            { id: 2, title: "Declaration", desc: "Review & submit application" },
            { id: 3, title: "Verification", desc: "Our team will verify your application" },
            { id: 4, title: "PMS Assistance", desc: "We will guide you through the claim process after the event" },
          ].map((step, i) => (
            <div key={i} className="flex gap-4 relative z-10 mb-4 last:mb-0">
              <div className="w-6 h-6 rounded-full bg-[#176b27] text-white flex items-center justify-center text-[10px] font-semibold shrink-0 shadow-sm border-2 border-white">
                {step.id}
              </div>
              <div className="flex flex-col pt-0.5">
                <span className="text-[12px] font-semibold text-gray-900 leading-none mb-1">{step.title}</span>
                <span className="text-[11px] font-medium text-gray-500 leading-snug pr-2">{step.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

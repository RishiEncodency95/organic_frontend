import { Users, Percent, ShieldCheck, Store, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import bgImage from "@/app/assets/msme/apply.png";

export default function ApplyHero() {
  return (
    <div className="relative w-full overflow-hidden bg-[#fafbfa]">
      {/* Background Section with Curved Bottom */}
      <div className="relative w-full h-full overflow-hidden">
        {/* We use a large div with a border-radius for the swooping effect */}
        {/* Plant Background Image */}
        <div className="absolute right-0 top-0 w-full  h-full opacity-90">
          {/* Gradient overlay to fade the image into the background color smoothly */}
          {/* <div className="absolute inset-0 bg-gradient-to-r from-[#eef4ef] via-[#eef4ef]/50 to-transparent z-10 hidden md:block"></div> */}

          <img
            src={bgImage.src}
            alt="Hands holding plant"
            className="w-full h-full object-cover object-[center_35%]"
          />
        </div>


        {/* Content Overlay */}
        <div className="relative z-10 w-full px-4 md:pl-28 h-full flex flex-col justify-center py-12">
          <div className="max-w-2xl mt-4">
            
            {/* Breadcrumb */}
            <div className="flex flex-wrap items-center gap-2 text-[12px] font-bold text-gray-600 mb-6 bg-white w-max px-4 py-2 rounded-xl shadow-sm border border-gray-100">
              <Link href="#" className="hover:text-[#176b27] transition-colors">Home</Link>
              <span className="text-gray-400">&gt;</span>
              <Link href="#" className="hover:text-[#176b27] transition-colors">PMS Scheme</Link>
              <span className="text-gray-400">&gt;</span>
              <span className="text-[#176b27]">Apply for PMS Support</span>
            </div>

            <span className="text-[#176b27] font-bold text-[16px] tracking-wider uppercase mb-3 block">
              PMS Scheme
            </span>
            <h1 className="text-xl md:text-[56px] font-semibold text-[#1f2937] leading-[1.3] mb-2 ">
              Apply for <br />
              <span className="text-[#176b27]">PMS SUPPORT</span>
            </h1>

            {/* Top decorative line */}
            <div className="flex items-center mt-3 mb-4">
              <div className="h-[3px] w-12 bg-[#e67e22] rounded-full"></div>
              <div className="h-[3px] w-[2px] bg-[#e67e22] rounded-full ml-1"></div>
            </div>

            <p className="text-[#374151] text-[16px] leading-[1.7] max-w-[460px] font-medium">
              Take the next step towards getting <span className="font-bold text-[#176b27]">up to ₹1.5 Lakh</span> assistance under the <span className="font-bold text-[#176b27]">MSME</span> Promotion & Marketing Assistance (<span className="font-bold text-[#176b27]">PMS</span>) Scheme.
            </p>

            {/* Bottom decorative line */}
            <div className="flex items-center mt-5">
              <div className="h-[3px] w-12 bg-[#176b27] rounded-full"></div>
              <div className="h-[3px] w-[2px] bg-[#176b27] rounded-full ml-1"></div>
              <div className="h-[3px] w-[2px] bg-[#176b27] rounded-full ml-1"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Info Bar */}
      <div className="relative z-20 w-full px-4 md:px-14 -mt-6 mb-12">
        <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#edf0ed] p-2 md:p-1 overflow-x-auto">
          <div className="flex items-center min-w-[800px] md:min-w-0 divide-x divide-[#edf0ed]">

            {/* Item 1 */}
            <div className="flex-1 flex items-center gap-3 p-3 md:px-5">
              <div className="w-10 h-10 rounded-full bg-[#f1f6f1] text-[#176b27] flex items-center justify-center shrink-0">
                <Users size={18} strokeWidth={2.5} />
              </div>
              <span className="text-xs md:text-[14px] font-bold text-[#374151] leading-[1.3]">
                For Eligible <br /> MSEs Only
              </span>
            </div>

            {/* Item 2 */}
            <div className="flex-1 flex items-center gap-3 p-3 md:px-5">
              <div className="w-10 h-10 rounded-full bg-[#f1f6f1] text-[#176b27] flex items-center justify-center shrink-0">
                <Percent size={18} strokeWidth={2.5} />
              </div>
              <span className="text-xs md:text-[14px] font-bold text-[#374151] leading-[1.3]">
                Up to ₹1.5 Lakh <br /> Assistance
              </span>
            </div>

            {/* Item 3 */}
            <div className="flex-1 flex items-center gap-3 p-3 md:px-5">
              <div className="w-10 h-10 rounded-full bg-[#f1f6f1] text-[#176b27] flex items-center justify-center shrink-0">
                <ShieldCheck size={18} strokeWidth={2.5} />
              </div>
              <span className="text-xs md:text-[14px] font-bold text-[#374151] leading-[1.3]">
                80% or 100% <br /> Reimbursement
              </span>
            </div>

            {/* Item 4 */}
            <div className="flex-1 flex items-center gap-3 p-3 md:px-5">
              <div className="w-10 h-10 rounded-full bg-[#f1f6f1] text-[#176b27] flex items-center justify-center shrink-0">
                <Store size={18} strokeWidth={2.5} />
              </div>
              <span className="text-xs md:text-[14px] font-bold text-[#374151] leading-[1.3]">
                Min. 9 sqm <br /> Stall Required
              </span>
            </div>

            {/* Item 5 */}
            <div className="flex-1 flex items-center gap-3 p-3 md:px-5">
              <div className="w-10 h-10 rounded-full bg-[#f1f6f1] text-[#176b27] flex items-center justify-center shrink-0">
                <FileText size={18} strokeWidth={2.5} />
              </div>
              <span className="text-xs md:text-[13px] font-bold text-[#374151] leading-[1.3]">
                Subject to <br /> Govt. Guidelines
              </span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

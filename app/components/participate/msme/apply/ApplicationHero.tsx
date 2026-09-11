import { Users, Percent, ShieldCheck, Store, FileText } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import bgImage from "@/app/assets/msme/apply.png";

export default function ApplicationHero() {
  return (
    <div className="relative w-full overflow-hidden bg-[#fafbfa]">
      {/* Background Section with Curved Bottom */}
      <div className="relative w-full h-full overflow-hidden">
        <div className="absolute right-0 top-0 w-full  h-full opacity-90">
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
            <div className="flex flex-wrap items-center gap-2 text-[12px] font-semibold text-gray-600 mb-6 bg-white w-max px-4 py-2 rounded-xl shadow-sm border border-gray-100">
              <Link href="#" className="hover:text-[#176b27] transition-colors">Home</Link>
              <span className="text-gray-400">&gt;</span>
              <Link href="#" className="hover:text-[#176b27] transition-colors">PMS Scheme</Link>
              <span className="text-gray-400">&gt;</span>
              <Link href="/participate/msme/apply" className="hover:text-[#176b27] transition-colors">Apply for PMS Support</Link>
              <span className="text-gray-400">&gt;</span>
              <span className="text-[#176b27]">Application Details</span>
            </div>

            <span className="text-[#176b27] font-semibold text-[14px] tracking-wider uppercase mb-3 block">
              PMS SCHEME
            </span>
            <h1 className="text-4xl md:text-[52px] font-semibold text-[#111827] leading-[1.3] mb-2 tracking-tight">
              PMS SUPPORT <br />
              <span className="text-[#176b27]">APPLICATION</span>
            </h1>

            <p className="text-[14px] md:text-[16px] text-gray-700 leading-[1.6] font-medium pr-4 mt-6 max-w-lg">
              Fill in your participation and stall details to complete your PMS Support application.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}

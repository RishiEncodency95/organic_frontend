import React from 'react';
import { Building2, Settings2, Factory, Layout, UserCircle2, Venus, Calendar, MapPin, ShieldCheck, CheckCircle2, Star } from 'lucide-react';

const EnterpriseDetails = () => {
  return (
    <div className="w-full bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-gray-100 p-4 md:px-5 md:py-2 flex flex-col h-full">
      <h3 className="text-[12px] md:text-[16px] font-semibold text-[#1b5e20] uppercase tracking-wider mb-4">
        Your Enterprise Details
      </h3>

      <div className="flex flex-col text-xs md:text-sm font-medium text-gray-600 mb-4 flex-1">

        <div className="grid grid-cols-12 gap-2 border-b border-gray-100 pb-2.5 mb-2.5 items-center">
          <div className="col-span-5 flex items-center gap-2 text-gray-500">
            <Building2 size={16} className="text-[#1b5e20]/70" /> Enterprise Name
          </div>
          <div className="col-span-7 font-semibold text-gray-900 leading-tight">RAMMANI TRADELINK PRIVATE LIMITED</div>
        </div>

        <div className="grid grid-cols-12 gap-2 border-b border-gray-100 pb-2.5 mb-2.5 items-center">
          <div className="col-span-5 flex items-center gap-2 text-gray-500">
            <Settings2 size={16} className="text-[#1b5e20]/70" /> Enterprise Type
          </div>
          <div className="col-span-7 font-semibold text-gray-900 flex items-center gap-1.5">
            <CheckCircle2 size={16} className="text-[#1b5e20]" /> Micro
          </div>
        </div>

        <div className="grid grid-cols-12 gap-2 border-b border-gray-100 pb-2.5 mb-2.5 items-center">
          <div className="col-span-5 flex items-center gap-2 text-gray-500">
            <Factory size={16} className="text-[#1b5e20]/70" /> Major Activity
          </div>
          <div className="col-span-7 font-semibold text-gray-900 flex items-center gap-1.5">
            <CheckCircle2 size={16} className="text-[#1b5e20]" /> Manufacturing
          </div>
        </div>

        <div className="grid grid-cols-12 gap-2 border-b border-gray-100 pb-2.5 mb-2.5 items-center">
          <div className="col-span-5 flex items-center gap-2 text-gray-500">
            <Layout size={16} className="text-[#1b5e20]/70" /> Organisation
          </div>
          <div className="col-span-7 font-semibold text-gray-900">Private Limited Company</div>
        </div>

        <div className="grid grid-cols-12 gap-2 border-b border-gray-100 pb-2.5 mb-2.5 items-center">
          <div className="col-span-5 flex items-center gap-2 text-gray-500">
            <UserCircle2 size={16} className="text-[#1b5e20]/70" /> Entrepreneur Category
          </div>
          <div className="col-span-7 font-semibold text-gray-900">General</div>
        </div>

        <div className="grid grid-cols-12 gap-2 border-b border-gray-100 pb-2.5 mb-2.5 items-center">
          <div className="col-span-5 flex items-center gap-2 text-gray-500">
            <Venus size={16} className="text-[#1b5e20]/70" /> Gender
          </div>
          <div className="col-span-7 font-semibold text-gray-900 flex items-center gap-1.5">
            <Venus size={16} className="text-[#ec4899]" /> Female
          </div>
        </div>

        <div className="grid grid-cols-12 gap-2 border-b border-gray-100 pb-2.5 mb-2.5 items-center">
          <div className="col-span-5 flex items-center gap-2 text-gray-500">
            <Calendar size={16} className="text-[#1b5e20]/70" /> Udyam Registration Date
          </div>
          <div className="col-span-7 font-semibold text-gray-900">25 May 2026</div>
        </div>

        <div className="grid grid-cols-12 gap-2 border-b border-gray-100 pb-2.5 mb-2.5 items-center">
          <div className="col-span-5 flex items-center gap-2 text-gray-500">
            <MapPin size={16} className="text-[#1b5e20]/70" /> Location
          </div>
          <div className="col-span-7 font-semibold text-gray-900">East Delhi, Delhi</div>
        </div>

        <div className="grid grid-cols-12 gap-2 items-center">
          <div className="col-span-5 flex items-center gap-2 text-gray-500">
            <ShieldCheck size={16} className="text-[#1b5e20]/70" /> GSTIN Available
          </div>
          <div className="col-span-7 font-semibold text-gray-900 flex items-center gap-1.5">
            <CheckCircle2 size={16} className="text-[#1b5e20]" /> Yes
          </div>
        </div>

      </div>

      <div className="bg-[#f4fbf4] p-3 rounded-lg mb-4 text-[11px] md:text-[14px] leading-relaxed font-medium text-[#1b5e20]/80">
        The Udyam certificate confirms Micro classification and Manufacturing as the major activity. The detailed record identifies the entrepreneur as female.
      </div>

      <div className="flex items-center gap-3 border-t border-gray-100 pt-3">
        <span className="text-[12px] md:text-[14px] font-semibold text-[#1b5e20] uppercase tracking-wider">Match Quality</span>
        <div className="flex gap-0.5">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} size={14} className="text-[#1b5e20] fill-[#1b5e20]" />
          ))}
        </div>
        <span className="text-[11px] md:text-[14px] font-semibold text-gray-900 ml-auto md:ml-2">Strong Match</span>
      </div>

    </div>
  );
};

export default EnterpriseDetails;

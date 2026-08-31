import React from 'react';
import { Building2, Settings2, Factory, Layout, UserCircle2, Venus, Calendar, MapPin, ShieldCheck, CheckCircle2, Star } from 'lucide-react';

const EnterpriseDetails = () => {
  return (
    <div className="w-full bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8 flex flex-col h-full">
      <h3 className="text-[13px] font-bold text-gray-500 uppercase tracking-widest mb-6 border-b border-gray-100 pb-4">
        Your Enterprise Details
      </h3>

      <div className="flex flex-col gap-4 text-[12px] md:text-[13px] font-medium text-gray-600 mb-6 flex-1">
        
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-5 flex items-center gap-2 text-gray-500">
            <Building2 size={16} /> Enterprise Name
          </div>
          <div className="col-span-7 font-bold text-gray-900">RAMMANI TRADELINK PRIVATE LIMITED</div>
        </div>
        
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-5 flex items-center gap-2 text-gray-500">
            <Settings2 size={16} /> Enterprise Type
          </div>
          <div className="col-span-7 font-bold text-gray-900 flex items-center gap-1.5">
            <CheckCircle2 size={14} className="text-[#1b5e20]" /> Micro
          </div>
        </div>

        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-5 flex items-center gap-2 text-gray-500">
            <Factory size={16} /> Major Activity
          </div>
          <div className="col-span-7 font-bold text-gray-900 flex items-center gap-1.5">
            <CheckCircle2 size={14} className="text-[#1b5e20]" /> Manufacturing
          </div>
        </div>

        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-5 flex items-center gap-2 text-gray-500">
            <Layout size={16} /> Organisation
          </div>
          <div className="col-span-7 font-bold text-gray-900">Private Limited Company</div>
        </div>

        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-5 flex items-center gap-2 text-gray-500">
            <UserCircle2 size={16} /> Entrepreneur Category
          </div>
          <div className="col-span-7 font-bold text-gray-900">General</div>
        </div>

        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-5 flex items-center gap-2 text-gray-500">
            <Venus size={16} /> Gender
          </div>
          <div className="col-span-7 font-bold text-gray-900 flex items-center gap-1.5">
            <Venus size={14} className="text-pink-600" /> Female
          </div>
        </div>

        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-5 flex items-center gap-2 text-gray-500">
            <Calendar size={16} /> Udyam Registration Date
          </div>
          <div className="col-span-7 font-bold text-gray-900">25 May 2026</div>
        </div>

        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-5 flex items-center gap-2 text-gray-500">
            <MapPin size={16} /> Location
          </div>
          <div className="col-span-7 font-bold text-gray-900">East Delhi, Delhi</div>
        </div>

        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-5 flex items-center gap-2 text-gray-500">
            <ShieldCheck size={16} /> GSTIN Available
          </div>
          <div className="col-span-7 font-bold text-gray-900 flex items-center gap-1.5">
            <CheckCircle2 size={14} className="text-[#1b5e20]" /> Yes
          </div>
        </div>

      </div>

      <div className="bg-gray-50 p-4 rounded-lg mb-6 text-[12px] leading-relaxed font-medium text-gray-700">
        The Udyam certificate confirms Micro classification and Manufacturing as the major activity. The detailed record identifies the entrepreneur as female.
      </div>

      <div className="flex items-center justify-between border-t border-gray-100 pt-4">
        <div className="flex items-center gap-3">
          <span className="text-[12px] font-bold text-gray-600 uppercase tracking-widest">Match Quality</span>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} size={16} className="text-[#1b5e20] fill-[#1b5e20]" />
            ))}
          </div>
        </div>
        <span className="text-[12px] font-bold text-gray-900">Strong Match</span>
      </div>

    </div>
  );
};

export default EnterpriseDetails;

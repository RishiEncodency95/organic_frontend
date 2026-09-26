"use client";

import React from 'react';
import { Building2, Settings2, Factory, Layout, UserCircle2, Venus, Calendar, MapPin, ShieldCheck, CheckCircle2, XCircle } from 'lucide-react';
import { useEligibility } from './EligibilityContext';

const Row = ({ icon, label, value, ok }: { icon: React.ReactNode; label: string; value: React.ReactNode; ok?: boolean }) => (
  <div className="grid grid-cols-12 gap-2 border-b border-gray-100 pb-2.5 mb-2.5 items-center">
    <div className="col-span-5 flex items-center gap-2 text-gray-500">
      {icon} {label}
    </div>
    <div className="col-span-7 font-semibold text-gray-900 flex items-center gap-1.5 leading-tight">
      {ok !== undefined && (ok ? <CheckCircle2 size={16} className="text-[#1b5e20]" /> : <XCircle size={16} className="text-gray-300" />)}
      {value}
    </div>
  </div>
);

const EnterpriseDetails = ({ customProps }: { customProps?: any }) => {
  const { result } = useEligibility();

  if (!result || result.documentType !== "valid_udyam_certificate") {
    return (
      <div className="w-full bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-dashed border-gray-200 p-4 md:px-5 md:py-6 flex flex-col h-full items-center justify-center text-center">
        <h3 className="text-[12px] md:text-[16px] font-semibold text-[#1b5e20] uppercase tracking-wider mb-2">
          {customProps?.title || "Your Enterprise Details"}
        </h3>
        <p className="text-[13px] font-medium text-gray-500">
          Upload your Udyam certificate above to see your enterprise details here.
        </p>
      </div>
    );
  }

  const location = [result.district, result.state].filter(Boolean).join(", ") || "—";

  return (
    <div className="w-full bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-gray-100 p-4 md:px-5 md:py-2 flex flex-col h-full">
      <h3 className="text-[12px] md:text-[16px] font-semibold text-[#1b5e20] uppercase tracking-wider mb-4">
        {customProps?.title || "Your Enterprise Details"}
      </h3>

      <div className="flex flex-col text-xs md:text-sm font-medium text-gray-600 mb-4 flex-1">
        <Row icon={<Building2 size={16} className="text-[#1b5e20]/70" />} label="Enterprise Name" value={result.enterpriseName || "Not found"} />
        <Row icon={<Settings2 size={16} className="text-[#1b5e20]/70" />} label="Enterprise Type" value={result.enterpriseType || "Not found"} ok={!!result.enterpriseType} />
        <Row icon={<Factory size={16} className="text-[#1b5e20]/70" />} label="Major Activity" value={result.majorActivity || "Not found"} ok={!!result.majorActivity} />
        <Row icon={<Layout size={16} className="text-[#1b5e20]/70" />} label="Social Category" value={result.socialCategory || "Not found"} />
        <Row icon={<UserCircle2 size={16} className="text-[#1b5e20]/70" />} label="Entrepreneur Gender" value={result.gender || "Not stated"} />
        <Row
          icon={<Venus size={16} className="text-[#1b5e20]/70" />}
          label="Udyam Registration No."
          value={result.udyamRegistrationNumber || "Not found"}
        />
        <Row icon={<Calendar size={16} className="text-[#1b5e20]/70" />} label="Date of Udyam Registration" value={result.dateOfUdyamRegistration || "Not found"} />
        <Row icon={<MapPin size={16} className="text-[#1b5e20]/70" />} label="Location" value={location} />
        <Row icon={<ShieldCheck size={16} className="text-[#1b5e20]/70" />} label="NIC Code" value={result.nicCode || "Not found"} />
      </div>

      <div className="bg-[#f4fbf4] p-3 rounded-lg text-[11px] md:text-[13px] leading-relaxed font-medium text-[#1b5e20]/80">
        These details are read directly from your uploaded certificate. Please review them for accuracy — you can correct anything in the application form on the next step.
      </div>
    </div>
  );
};

export default EnterpriseDetails;

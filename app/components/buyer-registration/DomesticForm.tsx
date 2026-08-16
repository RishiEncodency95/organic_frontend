"use client";
import React, { useState, useRef, useEffect } from "react";
import { CheckCircle2, CheckCircle, ShieldCheck, User, Globe, Store, Factory, Laptop, HeartPulse, Leaf, Hotel, Briefcase, ChevronsUpDown, Loader2, X, AlertTriangle } from "lucide-react";

// Mock Data
const mockConfig = {
  primaryProductInterests: ["Organic Foods & Beverages", "Natural Health Products", "Ayurveda & Herbal", "Cosmetics & Personal Care"],
  secondaryProductCategories: ['Ayurveda', 'Organic', 'Wellness', 'Pharma', 'Cosmetics'],
  businessModelOptions: ["B2B", "D2C", "Retail", "Wholesale"],
  annualPurchaseValueRanges: ['Below 10 Lakhs', '10-50 Lakhs', '50 Lakhs - 1 Crore', '1-5 Crore', '5+ Crore'],
  purchaseFrequencyOptions: ['Weekly', 'Monthly', 'Quarterly', 'Annually'],
  purchaseTimelines: ['Immediate', '1–3 Months', '3–6 Months', 'Exploring'],
  roles: ['Final Decision Maker', 'Influencer', 'Research Only'],
  regions: ['North India', 'South India', 'East India', 'West India', 'Pan India', 'Global'],
  supplierTypes: ['Manufacturer', 'Exporter', 'MSME', 'Startup', 'Wholesaler'],
  companySizes: ['Micro', 'Small', 'Medium', 'Large'],
  certificationOptions: ['ISO', 'GMP', 'FDA', 'AYUSH', 'Organic', 'Others'],
  meetingCategoryOptions: ['Health Supplements', 'Organic Food', 'Herbal Cosmetics', 'Ayurvedic Medicines'],
  exhibitorTypeOptions: ['Manufacturers', 'Distributors', 'Service Providers'],
  meetingObjectiveOptions: ["Product Sourcing", "Partnership / Collaboration", "Distribution Opportunities", "Private label / OEM", "Investment / Business Expansion"],
  preferredBusinessTypeOptions: ["Bulk Purchase", "Private label", "Franchise", "Exclusive Distribution"],
  meetingDayOptions: ["Day 1", "Day 2", "Day 3"],
  packages: [
    {
      category: 'Pass',
      name: 'Expo Entry Pass',
      price: 0,
      badge: 'STANDARD',
      tagline: 'Free Registration',
      description: 'Access to the main exhibition floor to discover organic products.',
      benefits: ['Exhibition Entry', 'Digital Directory Access'],
      whyChoose: 'Perfect for quick sourcing.',
      cta: 'Select Plan'
    },
    {
      category: 'Pass',
      name: 'B2B Delegate Pass',
      price: 2500,
      tagline: 'Premium Access',
      description: 'Full access to B2B matchmaking, conference sessions, and networking lunch.',
      benefits: ['Exhibition & Conference Entry', 'B2B Matchmaking Access', 'Networking Lunch included'],
      whyChoose: 'Ideal for serious buyers.',
      cta: 'Select Plan'
    }
  ]
};

const MultiSelectDropdown = ({ options, selected, onChange, placeholder = "Select options", error = false, accentColor = "emerald" }: any) => {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    const toggle = (item: string) => {
        if (selected.includes(item)) onChange(selected.filter((s: string) => s !== item));
        else onChange([...selected, item]);
    };

    const accentClasses: any = {
        emerald: {
            bg: "bg-emerald-50",
            text: "text-emerald-700",
            check: "accent-emerald-500",
            tag: "bg-emerald-100 border-emerald-300",
            tagText: "text-emerald-700",
            tagX: "text-emerald-500 hover:text-emerald-700",
        },
        amber: {
            bg: "bg-amber-50",
            text: "text-amber-700",
            check: "accent-amber-500",
            tag: "bg-amber-100 border-amber-300",
            tagText: "text-amber-700",
            tagX: "text-amber-500 hover:text-amber-700",
        },
        blue: {
            bg: "bg-blue-50",
            text: "text-blue-700",
            check: "accent-blue-500",
            tag: "bg-blue-100 border-blue-300",
            tagText: "text-blue-700",
            tagX: "text-blue-500 hover:text-blue-700",
        },
        slate: {
            bg: "bg-slate-50",
            text: "text-slate-700",
            check: "accent-slate-500",
            tag: "bg-slate-100 border-slate-300",
            tagText: "text-slate-700",
            tagX: "text-slate-500 hover:text-slate-700",
        },
    };
    const ac = accentClasses[accentColor] || accentClasses.emerald;

    return (
        <div ref={ref} className="relative w-full">
            <button
                type="button"
                onClick={() => setOpen((p) => !p)}
                className={`w-full min-h-[34px] px-3 py-1.5 rounded-[2px] border text-left text-[12px] font-medium bg-white transition-all outline-none flex items-center justify-between gap-2 flex-wrap
                    ${error ? "border-red-400" : open ? `border-[#23471d]` : "border-slate-400"} hover:border-[#23471d]`}
            >
                <span className="flex flex-wrap gap-1 flex-1">
                    {selected.length === 0 ? (
                        <span className="text-slate-400">{placeholder}</span>
                    ) : (
                        selected.slice(0, 3).map((s: string) => (
                            <span key={s} className={`inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full border ${ac.tag} ${ac.tagText}`}>
                                {s}
                                <span role="button" onClick={(e) => { e.stopPropagation(); toggle(s); }} className={`cursor-pointer ${ac.tagX}`}>
                                    <X size={9} />
                                </span>
                            </span>
                        ))
                    )}
                    {selected.length > 3 && (
                        <span className={`inline-flex items-center text-[10px] font-bold px-2 py-0.5 rounded-full border ${ac.tag} ${ac.tagText}`}>
                            +{selected.length - 3} more
                        </span>
                    )}
                </span>
                <ChevronsUpDown size={14} className={`shrink-0 text-slate-400 transition-transform ${open ? "rotate-180" : ""}`} />
            </button>
            {open && (
                <div className="absolute z-50 top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-lg shadow-xl max-h-[220px] overflow-y-auto custom-scrollbar">
                    {options.length === 0 ? (
                        <p className="text-[11px] text-slate-400 text-center py-3">No options available</p>
                    ) : (
                        options.map((opt: string) => {
                            const isChecked = selected.includes(opt);
                            return (
                                <label key={opt} className={`flex items-center gap-2.5 px-3 py-2 cursor-pointer text-[12px] font-medium transition-colors ${isChecked ? `${ac.bg} ${ac.text}` : "text-slate-700 hover:bg-slate-50"}`}>
                                    <input type="checkbox" checked={isChecked} onChange={() => toggle(opt)} className={`h-3.5 w-3.5 shrink-0 ${ac.check}`} />
                                    {opt}
                                </label>
                            );
                        })
                    )}
                </div>
            )}
        </div>
    );
};

export default function DomesticBuyerForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isVerifying, setIsVerifying] = useState({ email: false, mobile: false });
  const [otpSent, setOtpSent] = useState({ email: false, mobile: false });
  const [otpVerified, setOtpVerified] = useState({ email: false, mobile: false });

  const [formData, setFormData] = useState({
    fullName: "",
    designation: "",
    companyName: "",
    businessType: "",
    mobileNumber: "",
    alternateNumber: "",
    emailAddress: "",
    website: "",
    registeredAddress: "",
    stateProvince: "",
    city: "",
    pinCode: "",
    companyFirmName: "",
    basicBusinessType: "",
    yearOfEstablishment: "",
    gstNumber: "",
    buyerIndustry: "",
    natureOfBusiness: "",
    yearsInBusiness: "",
    annualTurnover: "",
    primaryProductInterest: "",
    secondaryProductCategories: [] as string[],
    interestedInImporting: "No",
    interestedInExporting: "No",
    businessModelPreference: "",
    estimatedPurchaseVolume: "",
    estimatedAnnualPurchaseValue: "",
    purchaseFrequency: "",
    purchaseTimeline: "",
    matchmakingInterest: "Yes",
    roleInPurchaseDecision: "",
    specificProductRequirements: "",
    preferredSupplierRegion: [] as string[],
    preferredSupplierType: [] as string[],
    preferredCompanySize: "",
    requiredCertifications: [] as string[],
    pricingPreference: "Mid-Range",
    preferredMeetingCategories: [] as string[],
    preferredExhibitorTypes: [] as string[],
    meetingObjectives: [] as string[],
    preferredBusinessTypes: [] as string[],
    preferredMeetingDay: "",
    preferredTimeSlot: "",
    numberOfMeetingsInterested: "",
    meetingRequirements: "",
    requirePreScheduledB2B: "Yes",
    registrationCategory: "",
    registrationFee: ""
  });

  const handleChange = (e: any) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSelectChange = (name: string, value: any) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSimulateOtp = (type: 'email' | 'mobile') => {
    setIsVerifying(prev => ({ ...prev, [type]: true }));
    setTimeout(() => {
      setIsVerifying(prev => ({ ...prev, [type]: false }));
      setOtpSent(prev => ({ ...prev, [type]: true }));
    }, 1000);
  };

  const handleVerifyOtp = (type: 'email' | 'mobile') => {
    setIsVerifying(prev => ({ ...prev, [type]: true }));
    setTimeout(() => {
      setIsVerifying(prev => ({ ...prev, [type]: false }));
      setOtpVerified(prev => ({ ...prev, [type]: true }));
    }, 1000);
  };

  const handlePackageSelection = (pkg: any) => {
    setFormData(prev => ({
        ...prev,
        registrationCategory: pkg.name,
        registrationFee: `₹${pkg.price}`
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!otpVerified.email || !otpVerified.mobile) {
      alert("Please verify OTP for both Email and Mobile.");
      return;
    }
    setSubmitted(true);
  };

  const inputClasses = "w-full h-[34px] px-3 py-1.5 rounded-[2px] border border-slate-400 bg-white text-left text-[12px] font-medium text-slate-900 outline-none transition-all focus:border-[#4d7f1d] focus:ring-1 focus:ring-[#4d7f1d]/20 placeholder:text-slate-400 font-inter";
  const labelClasses = "text-[12px] font-semibold text-slate-900 mb-1 block text-left font-inter";
  const sectionTitleClasses = "text-[14px] font-bold text-[#1b5e20] pb-2 border-b border-[#4d7f1d]/20 flex items-center gap-2 mb-4 uppercase tracking-wide font-poppins mt-8";
  const buttonTextClasses = "text-[12px] font-bold uppercase tracking-wider font-inter";

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-20 h-20 rounded-full bg-[#eef6e2] flex items-center justify-center mb-6 shadow-lg">
          <CheckCircle2 size={40} className="text-[#4d7f1d]" />
        </div>
        <h3 className="text-2xl font-bold text-[#1a3352] mb-2 font-poppins">Registration Successful!</h3>
        <p className="text-gray-500 text-sm max-w-sm leading-relaxed">
          Thank you for registering as a Domestic Buyer at Bharat Organic Expo 2027. A confirmation will be sent to your email.
        </p>
        <div className="mt-8 px-6 py-3 rounded-xl bg-[#4d7f1d] text-white text-sm font-bold uppercase tracking-wider">
          19 – 21 February 2027 · Hall 12, Bharat Mandapam
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-2 animate-in fade-in duration-500">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-[#4d7f1d] flex items-center justify-center shrink-0 shadow-md">
          <User size={18} className="text-white" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-[#1a3352] uppercase tracking-wide font-poppins">Domestic Buyer Registration</h3>
          <p className="text-[12px] text-gray-500 font-medium">Bharat Organic Expo 2027</p>
        </div>
      </div>

      <div>
        <h3 className={sectionTitleClasses}>1. Personal & Company Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div><label className={labelClasses}>Full Name *</label><input required name="fullName" value={formData.fullName} onChange={handleChange} placeholder="As per ID Proof" className={inputClasses} /></div>
          <div><label className={labelClasses}>Designation *</label><input required name="designation" value={formData.designation} onChange={handleChange} placeholder="Current Position" className={inputClasses} /></div>
          <div><label className={labelClasses}>Company Name *</label><input required name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Full Registered Name" className={inputClasses} /></div>
          <div>
            <label className={labelClasses}>Business Role *</label>
            <select required name="businessType" value={formData.businessType} onChange={handleChange} className={inputClasses}>
              <option value="">Select Type</option>
              <option value="Distributor">Distributor / Wholesaler</option>
              <option value="Retailer">Retailer (Single/Multi Store)</option>
              <option value="Manufacturer">Manufacturer / OEM</option>
              <option value="Importer">Importer / Exporter</option>
              <option value="Consultant">Consultant / Professional</option>
            </select>
          </div>
        </div>
      </div>

      <div>
        <h3 className={sectionTitleClasses}>2. Contact Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="space-y-1">
            <label className={labelClasses}>Mobile Number (10 digits) *</label>
            <div className="flex gap-2 h-[34px]">
              <input required type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} placeholder="10-digit number" className={`${inputClasses} h-full`} disabled={otpVerified.mobile} />
              {!otpVerified.mobile && !otpSent.mobile && (
                <button type="button" onClick={() => handleSimulateOtp('mobile')} className={`bg-[#23471d] text-white px-3 rounded-[2px] transition hover:bg-[#1a3516] h-full ${buttonTextClasses}`}>
                  {isVerifying.mobile ? <Loader2 className="animate-spin" size={14} /> : 'OTP'}
                </button>
              )}
              {otpSent.mobile && !otpVerified.mobile && (
                <button type="button" onClick={() => handleVerifyOtp('mobile')} className={`bg-[#23471d] text-white px-3 rounded-[2px] transition hover:bg-[#1a3516] h-full ${buttonTextClasses}`}>
                  {isVerifying.mobile ? <Loader2 className="animate-spin" size={14} /> : 'Verify'}
                </button>
              )}
              {otpVerified.mobile && <CheckCircle size={18} className="text-emerald-600 self-center shrink-0 ml-2" />}
            </div>
            {otpSent.mobile && !otpVerified.mobile && (
              <input placeholder="Enter OTP" className={`${inputClasses} mt-2 text-center tracking-widest`} />
            )}
          </div>
          <div><label className={labelClasses}>Alternate Number *</label><input required type="tel" name="alternateNumber" value={formData.alternateNumber} onChange={handleChange} placeholder="Alternate number" className={inputClasses} /></div>
          <div className="space-y-1">
            <label className={labelClasses}>Email Address (OTP) *</label>
            <div className="flex gap-2 h-[34px]">
              <input required type="email" name="emailAddress" value={formData.emailAddress} onChange={handleChange} placeholder="Work Email" className={`${inputClasses} h-full`} disabled={otpVerified.email} />
              {!otpVerified.email && !otpSent.email && (
                <button type="button" onClick={() => handleSimulateOtp('email')} className={`bg-[#23471d] text-white px-3 rounded-[2px] transition hover:bg-[#1a3516] h-full ${buttonTextClasses}`}>
                  {isVerifying.email ? <Loader2 className="animate-spin" size={14} /> : 'OTP'}
                </button>
              )}
              {otpSent.email && !otpVerified.email && (
                <button type="button" onClick={() => handleVerifyOtp('email')} className={`bg-[#23471d] text-white px-3 rounded-[2px] transition hover:bg-[#1a3516] h-full ${buttonTextClasses}`}>
                  {isVerifying.email ? <Loader2 className="animate-spin" size={14} /> : 'Verify'}
                </button>
              )}
              {otpVerified.email && <CheckCircle size={18} className="text-emerald-600 self-center shrink-0 ml-2" />}
            </div>
            {otpSent.email && !otpVerified.email && (
              <input placeholder="Enter OTP" className={`${inputClasses} mt-2 text-center tracking-widest`} />
            )}
          </div>
          <div><label className={labelClasses}>Website (Optional)</label><input type="url" name="website" value={formData.website} onChange={handleChange} placeholder="https://..." className={inputClasses} /></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          <div><label className={labelClasses}>Registered Address *</label><input required name="registeredAddress" value={formData.registeredAddress} onChange={handleChange} placeholder="Full Corporate Address" className={inputClasses} /></div>
          <div><label className={labelClasses}>State/Province *</label><input required name="stateProvince" value={formData.stateProvince} onChange={handleChange} placeholder="e.g. Maharashtra" className={inputClasses} /></div>
          <div><label className={labelClasses}>City *</label><input required name="city" value={formData.city} onChange={handleChange} placeholder="e.g. Mumbai" className={inputClasses} /></div>
          <div><label className={labelClasses}>Pin Code *</label><input required name="pinCode" value={formData.pinCode} onChange={handleChange} placeholder="6-digit code" className={inputClasses} maxLength={6} /></div>
        </div>
      </div>

      <div>
        <h3 className={sectionTitleClasses}>3. Company Business Profile</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div><label className={labelClasses}>Company / Firm Name *</label><input required name="companyFirmName" value={formData.companyFirmName} onChange={handleChange} className={inputClasses} /></div>
          <div><label className={labelClasses}>Business Type *</label><select required name="basicBusinessType" value={formData.basicBusinessType} onChange={handleChange} className={inputClasses}><option value="">Select</option><option value="Proprietorship">Proprietorship</option><option value="Partnership">Partnership</option><option value="Pvt Ltd">Pvt Ltd</option><option value="LLP">LLP</option></select></div>
          <div><label className={labelClasses}>Year of Est. *</label><input required type="number" name="yearOfEstablishment" value={formData.yearOfEstablishment} onChange={handleChange} placeholder="e.g. 2010" className={inputClasses} /></div>
          <div><label className={labelClasses}>GST Number (Optional)</label><input name="gstNumber" value={formData.gstNumber} onChange={handleChange} className={inputClasses} /></div>
          <div><label className={labelClasses}>Buyer Industry *</label><select required name="buyerIndustry" value={formData.buyerIndustry} onChange={handleChange} className={inputClasses}><option value="">Select Industry</option>{mockConfig.primaryProductInterests.map((i: string) => <option key={i} value={i}>{i}</option>)}</select></div>
          <div><label className={labelClasses}>Nature of Business *</label><input required name="natureOfBusiness" value={formData.natureOfBusiness} onChange={handleChange} className={inputClasses} /></div>
          <div><label className={labelClasses}>Years in Business *</label><input required type="number" name="yearsInBusiness" value={formData.yearsInBusiness} onChange={handleChange} className={inputClasses} /></div>
          <div><label className={labelClasses}>Annual Turnover *</label><select required name="annualTurnover" value={formData.annualTurnover} onChange={handleChange} className={inputClasses}><option value="">Select Range</option>{mockConfig.annualPurchaseValueRanges.map((r: string) => <option key={r} value={r}>{r}</option>)}</select></div>
        </div>
      </div>

      <div>
        <h3 className={sectionTitleClasses}>4. Sourcing & Buying Interests</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div><label className={labelClasses}>Primary Product Interest *</label><select required name="primaryProductInterest" value={formData.primaryProductInterest} onChange={handleChange} className={inputClasses}><option value="">Choose Interest</option>{mockConfig.primaryProductInterests.map((i: string) => <option key={i} value={i}>{i}</option>)}</select></div>
          <div className="space-y-1 z-40">
            <label className={labelClasses}>Secondary Product Categories</label>
            <MultiSelectDropdown options={mockConfig.secondaryProductCategories} selected={formData.secondaryProductCategories} onChange={(val: any) => handleSelectChange('secondaryProductCategories', val)} placeholder="Select categories..." accentColor="emerald" />
          </div>
          <div><label className={labelClasses}>Interested in Importing?</label><select name="interestedInImporting" value={formData.interestedInImporting} onChange={handleChange} className={inputClasses}><option value="No">No</option><option value="Yes">Yes</option></select></div>
          <div><label className={labelClasses}>Interested in Exporting?</label><select name="interestedInExporting" value={formData.interestedInExporting} onChange={handleChange} className={inputClasses}><option value="No">No</option><option value="Yes">Yes</option></select></div>
          <div><label className={labelClasses}>Business Model Preference</label><select name="businessModelPreference" value={formData.businessModelPreference} onChange={handleChange} className={inputClasses}><option value="">Select Model</option>{mockConfig.businessModelOptions.map((m: string) => <option key={m} value={m}>{m}</option>)}</select></div>
          <div><label className={labelClasses}>Estimated Monthly Purchase</label><input name="estimatedPurchaseVolume" value={formData.estimatedPurchaseVolume} onChange={handleChange} placeholder="e.g. 5000" className={inputClasses} /></div>
          <div><label className={labelClasses}>Est. Annual Purchase Value *</label><select required name="estimatedAnnualPurchaseValue" value={formData.estimatedAnnualPurchaseValue} onChange={handleChange} className={inputClasses}><option value="">Select Range</option>{mockConfig.annualPurchaseValueRanges.map((v: string) => <option key={v} value={v}>{v}</option>)}</select></div>
          <div><label className={labelClasses}>Purchase Frequency</label><select name="purchaseFrequency" value={formData.purchaseFrequency} onChange={handleChange} className={inputClasses}><option value="">Select Frequency</option>{mockConfig.purchaseFrequencyOptions.map((f: string) => <option key={f} value={f}>{f}</option>)}</select></div>
          <div><label className={labelClasses}>Purchase Timeline *</label><select required name="purchaseTimeline" value={formData.purchaseTimeline} onChange={handleChange} className={inputClasses}><option value="">Select</option>{mockConfig.purchaseTimelines.map((t: string) => <option key={t} value={t}>{t}</option>)}</select></div>
          <div><label className={labelClasses}>Matchmaking Interest *</label><select required name="matchmakingInterest" value={formData.matchmakingInterest} onChange={handleChange} className={inputClasses}><option value="Yes">Yes</option><option value="No">No</option></select></div>
          <div><label className={labelClasses}>Role in Purchase Decision *</label><select required name="roleInPurchaseDecision" value={formData.roleInPurchaseDecision} onChange={handleChange} className={inputClasses}><option value="">Select Role</option>{mockConfig.roles.map((r: string) => <option key={r} value={r}>{r}</option>)}</select></div>
          <div><label className={labelClasses}>Specific Product Requirements</label><input name="specificProductRequirements" value={formData.specificProductRequirements} onChange={handleChange} placeholder="Any custom needs..." className={inputClasses} /></div>
        </div>
      </div>

      <div>
        <h3 className={sectionTitleClasses}>5. Supplier Preference</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="space-y-1 z-30">
            <label className={labelClasses}>Preferred Supplier Region *</label>
            <MultiSelectDropdown options={mockConfig.regions} selected={formData.preferredSupplierRegion} onChange={(val: any) => handleSelectChange('preferredSupplierRegion', val)} placeholder="Select regions..." accentColor="emerald" />
          </div>
          <div className="space-y-1 z-30">
            <label className={labelClasses}>Preferred Supplier Type *</label>
            <MultiSelectDropdown options={mockConfig.supplierTypes} selected={formData.preferredSupplierType} onChange={(val: any) => handleSelectChange('preferredSupplierType', val)} placeholder="Select supplier types..." accentColor="emerald" />
          </div>
          <div><label className={labelClasses}>Preferred Company Size</label><select name="preferredCompanySize" value={formData.preferredCompanySize} onChange={handleChange} className={inputClasses}><option value="">Select Size</option>{mockConfig.companySizes.map((s: string) => <option key={s} value={s}>{s}</option>)}</select></div>
          <div className="space-y-1 z-30">
            <label className={labelClasses}>Certification & Compliance</label>
            <MultiSelectDropdown options={mockConfig.certificationOptions} selected={formData.requiredCertifications} onChange={(val: any) => handleSelectChange('requiredCertifications', val)} placeholder="Select certifications..." accentColor="slate" />
          </div>
        </div>
      </div>

      <div>
        <h3 className={sectionTitleClasses}>6. Pricing Preference</h3>
        <div className="flex gap-6 mt-2">
          {['Premium', 'Mid-Range', 'Budget'].map(pref => (
            <label key={pref} className="flex items-center gap-2 text-[12px] font-medium text-slate-700 cursor-pointer">
              <input type="radio" name="pricingPreference" value={pref} checked={formData.pricingPreference === pref} onChange={handleChange} className="w-4 h-4 text-[#4d7f1d] focus:ring-[#4d7f1d] accent-[#23471d]" /> {pref}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className={sectionTitleClasses}>7. B2B Meeting Preferences</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="space-y-1 z-20">
            <label className={labelClasses}>Preferred Meeting Categories *</label>
            <MultiSelectDropdown options={mockConfig.meetingCategoryOptions} selected={formData.preferredMeetingCategories} onChange={(val: any) => handleSelectChange('preferredMeetingCategories', val)} placeholder="Select categories..." accentColor="emerald" />
          </div>
          <div className="space-y-1 z-20">
            <label className={labelClasses}>Exhibitor Types to Meet</label>
            <MultiSelectDropdown options={mockConfig.exhibitorTypeOptions} selected={formData.preferredExhibitorTypes} onChange={(val: any) => handleSelectChange('preferredExhibitorTypes', val)} placeholder="Select exhibitor types..." accentColor="emerald" />
          </div>
          <div className="space-y-1 z-20">
            <label className={labelClasses}>Meeting Objectives *</label>
            <MultiSelectDropdown options={mockConfig.meetingObjectiveOptions} selected={formData.meetingObjectives} onChange={(val: any) => handleSelectChange('meetingObjectives', val)} placeholder="Select objectives..." accentColor="amber" />
          </div>
          <div className="space-y-1 z-20">
            <label className={labelClasses}>Preferred Business Type *</label>
            <MultiSelectDropdown options={mockConfig.preferredBusinessTypeOptions} selected={formData.preferredBusinessTypes} onChange={(val: any) => handleSelectChange('preferredBusinessTypes', val)} placeholder="Select business types..." accentColor="blue" />
          </div>
          <div><label className={labelClasses}>Preferred Day *</label><select required name="preferredMeetingDay" value={formData.preferredMeetingDay} onChange={handleChange} className={inputClasses}><option value="">Select Day</option>{mockConfig.meetingDayOptions.map((d: string) => <option key={d} value={d}>{d}</option>)}</select></div>
          <div><label className={labelClasses}>Time Slot *</label><select required name="preferredTimeSlot" value={formData.preferredTimeSlot} onChange={handleChange} className={inputClasses}><option value="">Select Slot</option><option value="Morning (10AM - 1PM)">Morning (10AM - 1PM)</option><option value="Afternoon (2PM - 4PM)">Afternoon (2PM - 4PM)</option></select></div>
          <div><label className={labelClasses}>Number of Meetings</label><select name="numberOfMeetingsInterested" value={formData.numberOfMeetingsInterested} onChange={handleChange} className={inputClasses}><option value="">Select Count</option><option value="3-5 Meetings">3-5 Meetings</option><option value="5-10 Meetings">5-10 Meetings</option></select></div>
          <div className="md:col-span-2 lg:col-span-2">
            <label className={labelClasses}>Specific Meeting Requirements</label>
            <textarea name="meetingRequirements" value={formData.meetingRequirements} onChange={handleChange} placeholder="Mention specific expectations..." className={`${inputClasses} h-auto py-2 resize-none`} rows={2}></textarea>
          </div>
        </div>
      </div>

      <div className="pt-6">
        <h3 className={sectionTitleClasses}>Select Registration Package</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {mockConfig.packages.map((pkg: any) => {
            const isSelected = formData.registrationCategory === pkg.name;
            return (
              <div
                key={pkg.name}
                onClick={() => handlePackageSelection(pkg)}
                className={`relative p-5 border-2 transition-all cursor-pointer rounded-xl flex flex-col h-full group bg-white
                  ${isSelected ? 'border-[#1b5e20] shadow-xl ring-2 ring-emerald-100/50 scale-[1.02] z-10' : 'border-slate-200 hover:border-[#1b5e20]/50 hover:shadow-lg'}
                `}
              >
                {pkg.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-[#1b5e20] text-white">
                    ⭐ {pkg.badge}
                  </div>
                )}
                <h4 className="text-[16px] font-bold text-slate-800 mt-2 font-poppins group-hover:text-[#1b5e20] transition-colors">
                  {pkg.name}
                </h4>
                <p className="text-[12px] font-bold text-[#1b5e20] mt-1 uppercase font-poppins">{pkg.tagline}</p>
                <p className="text-[12px] text-slate-500 mt-3 italic mb-4">{pkg.description}</p>
                <ul className="text-[11px] text-slate-700 space-y-2 font-medium flex-1">
                  {pkg.benefits.map((b: string, i: number) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle size={14} className="text-[#1b5e20]" /> {b}
                    </li>
                  ))}
                </ul>
                <div className={`mt-5 w-full py-2.5 rounded-[4px] text-center text-[12px] font-bold transition-colors
                  ${isSelected ? 'bg-[#1b5e20] text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-[#1b5e20] group-hover:text-white'}
                `}>
                  {isSelected ? 'SELECTED' : pkg.cta}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="pt-8 border-t border-slate-100 mt-8 flex justify-end">
        <button type="submit" className="bg-[#ea580c] hover:bg-[#c2410c] text-white px-10 py-3 rounded-[4px] text-[13px] font-bold uppercase tracking-widest transition-all shadow-md flex items-center gap-2 font-inter">
          Submit Registration <ShieldCheck size={18} />
        </button>
      </div>
    </form>
  );
}

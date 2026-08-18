"use client";
import React, { useState, useEffect } from "react";
import { CheckCircle2, ShieldCheck, Store, Loader2, CheckCircle, X, ChevronsUpDown } from "lucide-react";
import { crmApi, verifyApi, visitorApi } from "../../../../lib/api";
import Swal from 'sweetalert2';
// Helper component for multi-select
const MultiSelectDropdown = ({ options, selected, onChange, placeholder = "Select options", error = false, accentColor = "emerald" }: any) => {
  const [open, setOpen] = useState(false);

  const toggle = (item: string) => {
    if (selected.includes(item)) onChange(selected.filter((s: string) => s !== item));
    else onChange([...selected, item]);
  };

  const accentClasses: any = {
    emerald: { bg: "bg-emerald-50", text: "text-emerald-700", check: "accent-emerald-500", tag: "bg-emerald-100 border-emerald-300", tagText: "text-emerald-700", tagX: "text-emerald-500 hover:text-emerald-700" },
  };
  const ac = accentClasses[accentColor] || accentClasses.emerald;

  return (
    <div className="relative w-full">
      <button
        type="button"
        onClick={() => setOpen((p) => !p)}
        className={`w-full min-h-[34px] px-3 py-1.5 rounded-[2px] border text-left text-[12px] font-medium bg-white transition-all outline-none flex items-center justify-between gap-2 flex-wrap
                    ${error ? "border-red-400" : open ? "border-[#23471d]" : "border-slate-400"} hover:border-[#23471d]`}
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

const PURPOSE_CORPORATE = ["Business Networking", "Product Sourcing", "Distributor Search", "Franchise Opportunity", "Investment Opportunity", "Medical Tourism", "Healthcare Collaboration", "Wellness Industry Exploration", "Ayurveda & AYUSH Interest", "Conference Participation", "Knowledge Sessions", "Startup Collaboration", "Government Delegation", "General Visit"];
const INTEREST_CORPORATE = ["Business Networking", "Product Sourcing", "Distributor Search", "Franchise Opportunity", "Investment Opportunity", "Medical Tourism", "Healthcare Collaboration", "Wellness Industry Exploration", "Ayurveda & AYUSH Interest", "Conference Participation", "Knowledge Sessions", "Startup Collaboration", "Government Delegation", "General Visit"];

export default function CorporateForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isVerifying, setIsVerifying] = useState({ email: false, mobile: false });
  const [otpSent, setOtpSent] = useState({ email: false, mobile: false });
  const [otpVerified, setOtpVerified] = useState({ email: false, mobile: false });
  const [emailOtp, setEmailOtp] = useState('');
  const [mobileOtp, setMobileOtp] = useState('');
  const [loading, setLoading] = useState(false);

  const [countries, setCountries] = useState<any[]>([]);
  const [states, setStates] = useState<any[]>([]);
  const [cities, setCities] = useState<any[]>([]);

  const defaultEventName = "9th Edition of International Health & Wellness Expo 2026";

  const [formData, setFormData] = useState({
    registrationFor: defaultEventName,
    firstName: "",
    lastName: "",
    gender: "",
    dob: "",
    designation: "",
    companyName: "",
    companyWebsite: "",
    industry: "",
    otherIndustry: "",
    companySize: "",
    email: "",
    mobileNo: "",
    alternateNo: "",
    country: "India",
    state: "",
    city: "",
    companyPincode: "",
    schedulingB2B: "no",
    whatsappUpdates: "yes",
    anyRequirement: "",
    subscribeNewsletter: true,
    purposeOfVisit: [] as string[],
    areaOfInterest: [] as string[]
  });

  useEffect(() => {
    crmApi.getCountries()
      .then(data => setCountries(data || []))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    if (formData.country) {
      const countryObj = countries.find((c: any) => c.name === formData.country);
      if (countryObj) {
        crmApi.getStates(countryObj.countryCode)
          .then(data => setStates(data || []))
          .catch(err => console.error(err));
      }
    }
  }, [formData.country, countries]);

  useEffect(() => {
    if (formData.state) {
      const stateObj = states.find((s: any) => s.name === formData.state);
      if (stateObj) {
        crmApi.getCities(stateObj.stateCode)
          .then(data => setCities(data || []))
          .catch(err => console.error(err));
      }
    }
  }, [formData.state, states]);

  const handleChange = (e: any) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }));
  };

  const handleSelectChange = (name: string, value: any) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRequestOtp = async (type: 'email' | 'mobile') => {
    const value = type === 'email' ? formData.email : formData.mobileNo;
    if (!value) return;

    setIsVerifying(prev => ({ ...prev, [type]: true }));
    try {
      const res = type === 'email'
        ? await verifyApi.sendEmailOtp(value, 'VISITOR')
        : await verifyApi.sendPhoneOtp(value, 'VISITOR', formData.firstName);

      if (res && res.success) {
        setOtpSent(prev => ({ ...prev, [type]: true }));
        Swal.fire({ icon: 'success', title: 'OTP Sent', text: `OTP sent to your ${type}.`, timer: 2000, showConfirmButton: false });
      } else {
        Swal.fire({ icon: 'error', title: 'Error', text: res?.message || 'Failed to send OTP.' });
      }
    } catch (error) {
      Swal.fire({ icon: 'error', title: 'Error', text: 'Something went wrong.' });
    }
    setIsVerifying(prev => ({ ...prev, [type]: false }));
  };

  const handleVerifyOtp = async (type: 'email' | 'mobile') => {
    const otpValue = type === 'email' ? emailOtp : mobileOtp;
    const value = type === 'email' ? formData.email : formData.mobileNo;
    if (!otpValue || otpValue.length !== 6) {
      Swal.fire({ icon: 'warning', title: 'Invalid OTP', text: 'Please enter a valid 6-digit OTP.' });
      return;
    }
    setIsVerifying(prev => ({ ...prev, [type]: true }));
    try {
      const res = type === 'email'
        ? await verifyApi.verifyEmailOtp(value, otpValue)
        : await verifyApi.verifyPhoneOtp(value, otpValue);

      if (res && res.success) {
        setOtpVerified(prev => ({ ...prev, [type]: true }));
        Swal.fire({ icon: 'success', title: 'Verified', text: 'Verified successfully!', timer: 2000, showConfirmButton: false });
      } else {
        Swal.fire({ icon: 'error', title: 'Invalid OTP', text: res?.message || 'Verification failed.' });
      }
    } catch (error) {
      Swal.fire({ icon: 'error', title: 'Error', text: 'Something went wrong.' });
    }
    setIsVerifying(prev => ({ ...prev, [type]: false }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!otpVerified.email || !otpVerified.mobile) {
      Swal.fire({ icon: 'warning', title: 'Verification Required', text: 'Please verify both Email and WhatsApp number.' });
      return;
    }
    setLoading(true);
    try {
      const res = await visitorApi.submitCorporate(formData);
      if (res) {
        setSubmitted(true);
      } else {
        Swal.fire({ icon: 'error', title: 'Submission Failed', text: 'Failed to submit registration.' });
      }
    } catch (error) {
      Swal.fire({ icon: 'error', title: 'Error', text: 'Something went wrong.' });
    }
    setLoading(false);
  };

  const inputClasses = "rounded border border-slate-400 h-7 focus:border-[#23471d] focus:ring-[#23471d]/10 transition-all text-[12px] bg-white placeholder:text-slate-400 text-slate-900 font-normal shadow-none outline-none px-3 w-full text-left";
  const labelClasses = "text-[11px] font-medium uppercase text-slate-800 mb-1 block text-left";
  const sectionTitleClasses = "text-[12px] font-medium text-[#4d7f1d] uppercase tracking-[0.05em]";
  const sectionTitleWrapperClasses = "pb-1 border-b border-slate-500 mb-3 mt-6 flex justify-between items-end";
  const buttonTextClasses = "text-[12px] font-bold uppercase tracking-wider font-inter";

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-20 h-20 rounded-full bg-[#eef6e2] flex items-center justify-center mb-6 shadow-lg">
          <CheckCircle2 size={40} className="text-[#4d7f1d]" />
        </div>
        <h3 className="text-2xl font-bold text-[#1a3352] mb-2 font-poppins">Registration Successful!</h3>
        <p className="text-gray-500 text-sm max-w-sm leading-relaxed">
          Thank you for registering as a Corporate Visitor at Bharat Organic Expo. A confirmation will be sent to your email.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-2 animate-in fade-in duration-500">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-[#4d7f1d] flex items-center justify-center shrink-0 shadow-md">
          <Store size={18} className="text-white" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-[#1a3352] uppercase tracking-wide font-poppins">Corporate Visitor Registration</h3>
          <p className="text-[12px] text-gray-500 font-medium">Bharat Organic Expo 2027</p>
        </div>
      </div>

      <div>
        <div className={sectionTitleWrapperClasses}>
          <h3 className={sectionTitleClasses}>
            1. Organization Details
          </h3>
          <span className="text-[10px] font-bold bg-[#4d7f1d]/10 text-[#4d7f1d] px-2 py-1 rounded tracking-widest uppercase w-fit">Step 1 of 3</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-3">
          <div><label className={labelClasses}>First Name *</label><input required name="firstName" value={formData.firstName} onChange={handleChange} className={inputClasses} placeholder="Enter First Name" /></div>
          <div><label className={labelClasses}>Last Name *</label><input required name="lastName" value={formData.lastName} onChange={handleChange} className={inputClasses} placeholder="Enter Last Name" /></div>
          <div><label className={labelClasses}>Gender *</label><select required name="gender" value={formData.gender} onChange={handleChange} className={inputClasses}><option value="">Select</option><option value="Male">Male</option><option value="Female">Female</option><option value="Other">Other</option></select></div>
          <div><label className={labelClasses}>Date of Birth (Optional)</label><input type="date" name="dob" value={formData.dob} onChange={handleChange} className={inputClasses} /></div>
          <div><label className={labelClasses}>Designation *</label><input required name="designation" value={formData.designation} onChange={handleChange} className={inputClasses} placeholder="Enter Designation.." /></div>

          <div className="space-y-1">
            <label className={labelClasses}>WhatsApp Number *</label>
            <div className="flex gap-2 h-[34px]">
              <input required type="tel" name="mobileNo" value={formData.mobileNo} onChange={handleChange} className={`${inputClasses} h-full`} disabled={otpVerified.mobile || otpSent.mobile} placeholder="Enter WhatsApp Number" />
              {!otpVerified.mobile && !otpSent.mobile && (
                <button type="button" onClick={() => handleRequestOtp('mobile')} disabled={!formData.mobileNo || isVerifying.mobile} className={`bg-[#23471d] text-white px-3 rounded-[2px] transition hover:bg-[#1a3516] h-full ${buttonTextClasses} disabled:opacity-50`}>
                  {isVerifying.mobile ? <Loader2 className="animate-spin" size={14} /> : 'OTP'}
                </button>
              )}
              {otpSent.mobile && !otpVerified.mobile && (
                <>
                  <input type="text" maxLength={6} value={mobileOtp} onChange={(e) => setMobileOtp(e.target.value.replace(/\D/g, ''))} className={`${inputClasses} h-full w-[100px] text-center tracking-widest`} placeholder="OTP" />
                  <button type="button" onClick={() => handleVerifyOtp('mobile')} className={`bg-[#23471d] text-white px-3 rounded-[2px] transition hover:bg-[#1a3516] h-full ${buttonTextClasses}`}>
                    {isVerifying.mobile ? <Loader2 className="animate-spin" size={14} /> : 'Verify'}
                  </button>
                </>
              )}
              {otpVerified.mobile && <CheckCircle size={18} className="text-[#4d7f1d] self-center shrink-0 ml-2" />}
            </div>
          </div>

          <div><label className={labelClasses}>Alternate Number (Optional)</label><input type="tel" name="alternateNo" value={formData.alternateNo} onChange={handleChange} className={inputClasses} placeholder="Enter Alternate No." /></div>

          <div className="space-y-1">
            <label className={labelClasses}>Email Address *</label>
            <div className="flex gap-2 h-[34px]">
              <input required type="email" name="email" value={formData.email} onChange={handleChange} className={`${inputClasses} h-full`} disabled={otpVerified.email || otpSent.email} placeholder="Enter Email Address" />
              {!otpVerified.email && !otpSent.email && (
                <button type="button" onClick={() => handleRequestOtp('email')} disabled={!formData.email || isVerifying.email} className={`bg-[#23471d] text-white px-3 rounded-[2px] transition hover:bg-[#1a3516] h-full ${buttonTextClasses} disabled:opacity-50`}>
                  {isVerifying.email ? <Loader2 className="animate-spin" size={14} /> : 'OTP'}
                </button>
              )}
              {otpSent.email && !otpVerified.email && (
                <>
                  <input type="text" maxLength={6} value={emailOtp} onChange={(e) => setEmailOtp(e.target.value.replace(/\D/g, ''))} className={`${inputClasses} h-full w-[100px] text-center tracking-widest`} placeholder="OTP" />
                  <button type="button" onClick={() => handleVerifyOtp('email')} className={`bg-[#23471d] text-white px-3 rounded-[2px] transition hover:bg-[#1a3516] h-full ${buttonTextClasses}`}>
                    {isVerifying.email ? <Loader2 className="animate-spin" size={14} /> : 'Verify'}
                  </button>
                </>
              )}
              {otpVerified.email && <CheckCircle size={18} className="text-[#4d7f1d] self-center shrink-0 ml-2" />}
            </div>
          </div>

        </div>
      </div>

      <div className={sectionTitleWrapperClasses}>
        <h3 className={sectionTitleClasses}>
          2. Company Details
        </h3>
        <span className="text-[10px] font-bold bg-[#4d7f1d]/10 text-[#4d7f1d] px-2 py-1 rounded tracking-widest uppercase w-fit">Step 2 of 3</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-3">
        <div><label className={labelClasses}>Company Name *</label><input required name="companyName" value={formData.companyName} onChange={handleChange} className={inputClasses} placeholder="Enter Company Name.." /></div>
        <div><label className={labelClasses}>Company Website</label><input type="url" name="companyWebsite" value={formData.companyWebsite} onChange={handleChange} className={inputClasses} placeholder="Enter Company Website.." /></div>
        <div>
          <label className={labelClasses}>Industry Sector *</label>
          <select required name="industry" value={formData.industry} onChange={handleChange} className={inputClasses}>
            <option value="">Select Here</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Wellness">Wellness</option>
            <option value="Ayurveda">Ayurveda</option>
            <option value="Medical Devices">Medical Devices</option>
            <option value="Pharmaceuticals">Pharmaceuticals</option>
            <option value="Hospitality">Hospitality</option>
            <option value="IT & Tech">IT & Tech</option>
            <option value="Others">Others</option>
          </select>
        </div>
        {formData.industry === "Others" && (
          <div><label className={labelClasses}>Other Industry</label><input required name="otherIndustry" value={formData.otherIndustry} onChange={handleChange} className={inputClasses} placeholder="Enter your industry" /></div>
        )}
        <div>
          <label className={labelClasses}>Company Size</label>
          <select name="companySize" value={formData.companySize} onChange={handleChange} className={inputClasses}>
            <option value="">Select Here</option>
            <option value="1-50">1-50 employees</option>
            <option value="51-200">51-200 employees</option>
            <option value="201-500">201-500 employees</option>
            <option value="500+">500+ employees</option>
          </select>
        </div>

        <div>
          <label className={labelClasses}>Country *</label>
          <select required name="country" value={formData.country} onChange={handleChange} className={inputClasses}>
            <option value="">Select Country</option>
            {countries.length > 0 ? countries.map((c: any) => <option key={c.countryCode} value={c.name}>{c.name}</option>) : <option value="India">India</option>}
          </select>
        </div>
        <div>
          <label className={labelClasses}>State *</label>
          <select required name="state" value={formData.state} onChange={handleChange} className={inputClasses} disabled={!formData.country}>
            <option value="">Select State</option>
            {states.map((s: any) => <option key={s.stateCode} value={s.name}>{s.name}</option>)}
          </select>
        </div>
        <div>
          <label className={labelClasses}>City *</label>
          <select required name="city" value={formData.city} onChange={handleChange} className={inputClasses} disabled={!formData.state}>
            <option value="">Select City</option>
            {cities.map((c: any) => <option key={c.name} value={c.name}>{c.name}</option>)}
          </select>
        </div>
        <div><label className={labelClasses}>Pincode / Zip Code</label><input name="companyPincode" value={formData.companyPincode} onChange={handleChange} className={inputClasses} placeholder="Enter Pincode" /></div>
      </div>

      <div>
        <div className={sectionTitleWrapperClasses}>
          <h3 className={sectionTitleClasses}>3. Purpose & Location Preferences</h3>
          <span className="text-[10px] font-bold bg-[#4d7f1d]/10 text-[#4d7f1d] px-2 py-1 rounded tracking-widest uppercase w-fit">Step 3 of 3</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-3 gap-y-3">
          <div className="space-y-3 bg-white p-4 border border-slate-200 rounded-sm shadow-sm">
            <label className="text-[11px] font-medium uppercase text-[#d26019] tracking-[0.05em] block border-b border-slate-200 pb-1">Purpose of Visit <span className="text-red-500">*</span></label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
              {PURPOSE_CORPORATE.map(option => (
                <label key={option} className="flex items-start gap-2 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={formData.purposeOfVisit.includes(option)}
                    onChange={(e) => {
                      const newSelection = e.target.checked
                        ? [...formData.purposeOfVisit, option]
                        : formData.purposeOfVisit.filter((item: string) => item !== option);
                      handleSelectChange('purposeOfVisit', newSelection);
                    }}
                    className="mt-0.5 w-3.5 h-3.5 text-[#23471d] accent-[#23471d] shrink-0 border-slate-300 rounded-[2px]"
                  />
                  <span className="text-[11px] text-slate-600 group-hover:text-slate-900 font-medium transition-colors font-inter whitespace-nowrap">{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-3 bg-white p-4 border border-slate-200 rounded-sm shadow-sm">
            <label className="text-[11px] font-medium uppercase text-[#d26019] tracking-[0.05em] block border-b border-slate-200 pb-1">Area of Interest <span className="text-red-500">*</span></label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
              {INTEREST_CORPORATE.map(option => (
                <label key={option} className="flex items-start gap-2 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={formData.areaOfInterest.includes(option)}
                    onChange={(e) => {
                      const newSelection = e.target.checked
                        ? [...formData.areaOfInterest, option]
                        : formData.areaOfInterest.filter((item: string) => item !== option);
                      handleSelectChange('areaOfInterest', newSelection);
                    }}
                    className="mt-0.5 w-3.5 h-3.5 text-[#23471d] accent-[#23471d] shrink-0 border-slate-300 rounded-[2px]"
                  />
                  <span className="text-[11px] text-slate-600 group-hover:text-slate-900 font-medium transition-colors font-inter whitespace-nowrap">{option}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="md:col-span-2 lg:col-span-4 mt-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4 text-left">
            <label className="text-[11px] font-bold text-[#4d7f1d] uppercase tracking-wider block">Would you like to schedule B2B meetings? <span className=" text-red-500">*</span></label>
            <div className="flex gap-6">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input type="radio" name="schedulingB2B" value="yes" checked={formData.schedulingB2B === 'yes'} onChange={handleChange} className="w-4 h-4 text-[#23471d] accent-[#23471d] border-slate-400" />
                <span className="text-[13px] font-medium text-slate-700">Yes</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input type="radio" name="schedulingB2B" value="no" checked={formData.schedulingB2B === 'no'} onChange={handleChange} className="w-4 h-4 text-[#23471d] accent-[#23471d] border-slate-400" />
                <span className="text-[13px] font-medium text-slate-700">No</span>
              </label>
            </div>
          </div>
        </div>
        <div className="md:col-span-2 lg:col-span-4"><label className={labelClasses}>Any Specific Requirement</label><input name="anyRequirement" value={formData.anyRequirement} onChange={handleChange} className={inputClasses} placeholder="Please specify if any..." /></div>
      </div>
      <div className="pt-4 border-t border-slate-100 mt-4">
        <label className="flex items-center gap-3 cursor-pointer group w-fit">
          <input type="checkbox" name="subscribeNewsletter" checked={formData.subscribeNewsletter} onChange={handleChange} className="w-4 h-4 text-[#23471d] accent-[#23471d] border-slate-300 rounded-sm" />
          <span className="text-[11px] font-bold text-[#23471d] uppercase tracking-wide">Subscribe to Event Updates & Newsletters</span>
        </label>
      </div>

      <div className="pt-6 mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] flex items-center gap-2">
          <ShieldCheck size={12} className="text-[#1b5e20]" />
          Secure Registration Portal
        </p>
        <button type="submit" disabled={loading} className="bg-[#1b5e20] hover:bg-[#144718] text-white px-10 py-3 rounded-[4px] text-[13px] font-bold uppercase tracking-widest transition-all shadow-md flex items-center justify-center gap-2 font-inter disabled:opacity-50 w-full sm:w-auto">
          {loading ? <Loader2 className="animate-spin" size={18} /> : <>Submit Registration <ShieldCheck size={18} /></>}
        </button>
      </div>
    </form>
  );
}

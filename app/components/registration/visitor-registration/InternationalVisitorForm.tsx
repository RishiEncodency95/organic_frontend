"use client";
import React, { useState, useEffect } from "react";
import { CheckCircle2, ShieldCheck, Globe2, Loader2, CheckCircle, X, ChevronsUpDown, Upload } from "lucide-react";
import { crmApi, verifyApi, visitorApi } from "../../../../lib/api";
import Swal from 'sweetalert2';

// Helper component for multi-select
const MultiSelectDropdown = ({ options, selected, onChange, placeholder = "Select options", error = false, accentColor = "orange" }: any) => {
  const [open, setOpen] = useState(false);

  const toggle = (item: string) => {
    if (selected.includes(item)) onChange(selected.filter((s: string) => s !== item));
    else onChange([...selected, item]);
  };

  const ac = {
    bg: "bg-[#fff4ed]", text: "text-[#4d7f1d]", check: "accent-[#4d7f1d]", tag: "bg-[#ffedd5] border-[#fdba74]", tagText: "text-[#4d7f1d]", tagX: "text-[#f97316] hover:text-[#4d7f1d]"
  };

  return (
    <div className="relative w-full">
      <button
        type="button"
        onClick={() => setOpen((p) => !p)}
        className={`w-full min-h-[34px] px-3 py-1.5 rounded-[2px] border text-left text-[12px] font-medium bg-white transition-all outline-none flex items-center justify-between gap-2 flex-wrap
                    ${error ? "border-red-400" : open ? "border-[#4d7f1d]" : "border-slate-400"} hover:border-[#4d7f1d]`}
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

const PURPOSE_OPTIONS = ["Business Networking", "Product Sourcing", "Distributor Search", "Franchise Opportunity", "Investment Opportunity", "Medical Tourism", "Healthcare Collaboration", "Wellness Industry Exploration", "Ayurveda & AYUSH Interest", "Conference Participation", "Knowledge Sessions", "Startup Collaboration", "Government Delegation", "General Visit"];
const INTEREST_OPTIONS = ["AYUSH & Herbal Products", "Organic & Natural Products", "Fitness & Wellness Equipment", "Health Supplements", "Hospitals & Healthcare Services", "Agriculture & Organic Farming", "R&D & Innovations", "Others"];

export default function InternationalVisitorForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [countries, setCountries] = useState<any[]>([]);
  const [states, setStates] = useState<any[]>([]);
  const [cities, setCities] = useState<any[]>([]);

  const defaultEventName = "9th Edition of International Health & Wellness Expo 2026";

  const [formData, setFormData] = useState({
    registrationFor: defaultEventName,
    firstName: "", lastName: "", gender: "", dob: "",
    nationality: "", passportNo: "", occupation: "",
    email: "", personalEmail: "", mobileNo: "", whatsappNo: "", indiaContactNo: "",
    designation: "", companyName: "", companyWebsite: "",
    industry: "", otherIndustry: "", companySize: "",
    address: "", country: "", state: "", city: "", companyPincode: "",
    preferredDate: "", numAttendees: "",
    invitationLetter: "no", hotelAssistance: "no", airportPickup: "no", translatorSupport: "no",
    conferenceInterest: "no", conferenceRole: "",
    vipPass: "no",
    schedulingB2B: "no", whatsappUpdates: "yes",
    anyRequirement: "", subscribeNewsletter: true,
    purposeOfVisit: [] as string[],
    areaOfInterest: [] as string[],
    // Declaration
    confirmInfo: false, agreeTerms: false, acceptPrivacy: false, agreeRules: false,
    digitalSignature: "",
  });

  const [files, setFiles] = useState<Record<string, File | null>>({});

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

  useEffect(() => {
    fetch(`${apiUrl}/crm/countries`)
      .then(res => res.json())
      .then(data => setCountries(data.data || data))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    if (formData.country) {
      const countryObj = countries.find((c: any) => c.name === formData.country);
      if (countryObj) {
        fetch(`${apiUrl}/crm/states/${countryObj.countryCode}`)
          .then(res => res.json())
          .then(data => setStates(data.data || data))
          .catch(err => console.error(err));
      }
    }
  }, [formData.country, countries]);

  useEffect(() => {
    if (formData.state) {
      const stateObj = states.find((s: any) => s.name === formData.state);
      if (stateObj) {
        fetch(`${apiUrl}/crm/cities/${stateObj.stateCode}`)
          .then(res => res.json())
          .then(data => setCities(data.data || data))
          .catch(err => console.error(err));
      }
    }
  }, [formData.state, states]);

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    if (name === 'country') {
      setFormData(prev => ({ ...prev, state: "", city: "" }));
      setStates([]); setCities([]);
    }
    if (name === 'state') {
      setFormData(prev => ({ ...prev, city: "" }));
      setCities([]);
    }
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSelectChange = (name: string, value: any) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const [isVerifying, setIsVerifying] = useState({ email: false, mobile: false });
  const [otpSent, setOtpSent] = useState({ email: false, mobile: false });
  const [otpVerified, setOtpVerified] = useState({ email: false, mobile: false });
  const [emailOtp, setEmailOtp] = useState('');
  const [mobileOtp, setMobileOtp] = useState('');

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
    if (!formData.confirmInfo || !formData.agreeTerms || !formData.acceptPrivacy || !formData.agreeRules) {
      alert("Please accept all declarations."); return;
    }
    if (!otpVerified.email || !otpVerified.mobile) {
      Swal.fire({ icon: 'warning', title: 'Verification Required', text: 'Please verify both Email and Mobile number.' });
      return;
    }
    setLoading(true);
    try {
      const res = await visitorApi.submitInternational(formData);
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

  const inputClasses = "w-full h-[34px] px-3 py-1.5 rounded-[2px] border border-slate-400 bg-white text-left text-[12px] font-medium text-slate-900 outline-none transition-all focus:border-[#4d7f1d] focus:ring-1 focus:ring-[#4d7f1d]/20 placeholder:text-slate-400 font-inter";
  const labelClasses = "text-[12px] font-semibold text-slate-900 mb-1 block text-left font-inter";
  const sectionTitleClasses = "text-[14px] font-bold text-[#4d7f1d] pb-2 border-b border-[#4d7f1d]/20 flex items-center gap-2 mb-4 uppercase tracking-wide font-poppins mt-8";

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-20 h-20 rounded-full bg-[#fff4ed] flex items-center justify-center mb-6 shadow-lg">
          <CheckCircle2 size={40} className="text-[#4d7f1d]" />
        </div>
        <h3 className="text-2xl font-bold text-[#1a3352] mb-2 font-poppins">Registration Successful!</h3>
        <p className="text-gray-500 text-sm max-w-sm leading-relaxed">
          Thank you for registering as an International Visitor at Bharat Organic Expo. A confirmation will be sent to your email.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-2 animate-in fade-in duration-500">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-[#4d7f1d] flex items-center justify-center shrink-0 shadow-md">
          <Globe2 size={18} className="text-white" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-[#1a3352] uppercase tracking-wide font-poppins">International Visitor Registration</h3>
          <p className="text-[12px] text-gray-500 font-medium">Bharat Organic Expo 2027</p>
        </div>
      </div>

      <div>
        <h3 className={sectionTitleClasses}>1. Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className={labelClasses}>Register For *</label>
            <select required name="registrationFor" value={formData.registrationFor} onChange={handleChange} className={inputClasses}>
              <option value={defaultEventName}>{defaultEventName}</option>
            </select>
          </div>
          <div><label className={labelClasses}>First Name *</label><input required name="firstName" value={formData.firstName} onChange={handleChange} className={inputClasses} placeholder="First Name" /></div>
          <div><label className={labelClasses}>Last Name *</label><input required name="lastName" value={formData.lastName} onChange={handleChange} className={inputClasses} placeholder="Last Name" /></div>
          <div>
            <label className={labelClasses}>Gender *</label>
            <select required name="gender" value={formData.gender} onChange={handleChange} className={inputClasses}>
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div><label className={labelClasses}>Date of Birth</label><input type="date" name="dob" value={formData.dob} onChange={handleChange} className={inputClasses} /></div>

          <div>
            <label className={labelClasses}>Nationality *</label>
            <select required name="nationality" value={formData.nationality} onChange={handleChange} className={inputClasses}>
              <option value="">Select Country</option>
              {countries.map(c => <option key={c._id || c.name} value={c.name}>{c.name}</option>)}
            </select>
          </div>
          <div><label className={labelClasses}>Passport Number</label><input name="passportNo" value={formData.passportNo} onChange={handleChange} className={inputClasses} placeholder="Passport / ID No." /></div>
          <div><label className={labelClasses}>Occupation</label><input name="occupation" value={formData.occupation} onChange={handleChange} className={inputClasses} placeholder="Your Occupation" /></div>
          <div><label className={labelClasses}>Designation *</label><input required name="designation" value={formData.designation} onChange={handleChange} className={inputClasses} placeholder="Your Designation" /></div>

          <div className="md:col-span-2"><label className={labelClasses}>Organisation / Company Name</label><input name="companyName" value={formData.companyName} onChange={handleChange} className={inputClasses} placeholder="Company Name (if applicable)" /></div>
          <div><label className={labelClasses}>Company Website</label><input name="companyWebsite" value={formData.companyWebsite} onChange={handleChange} className={inputClasses} placeholder="www.company.com" /></div>

          <div>
            <label className={labelClasses}>Industry / Sector</label>
            <select name="industry" value={formData.industry} onChange={handleChange} className={inputClasses}>
              <option value="">Select Here</option>
              <option value="ayush">AYUSH</option>
              <option value="agriculture">Agriculture & Organic</option>
              <option value="fitness">Fitness & Wellness</option>
              <option value="healthcare">Healthcare Services</option>
              <option value="pharma">Pharmaceutical</option>
              <option value="others">Others</option>
            </select>
          </div>
          {formData.industry === "others" && (
            <div><label className={labelClasses}>Specify Industry *</label><input required name="otherIndustry" value={formData.otherIndustry} onChange={handleChange} className={inputClasses} placeholder="Enter your industry" /></div>
          )}

          <div>
            <label className={labelClasses}>Company Size</label>
            <select name="companySize" value={formData.companySize} onChange={handleChange} className={inputClasses}>
              <option value="">Select Size</option>
              <option value="1-10">1-10 Employees</option>
              <option value="11-50">11-50 Employees</option>
              <option value="51-200">51-200 Employees</option>
              <option value="200+">200+ Employees</option>
            </select>
          </div>
        </div>
      </div>

      <div>
        <h3 className={sectionTitleClasses}>2. Contact Details & Location</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="space-y-1">
            <label className={labelClasses}>Mobile No. (with Country Code) *</label>
            <div className="flex gap-2 h-[34px]">
              <input required type="tel" name="mobileNo" value={formData.mobileNo} onChange={handleChange} className={`${inputClasses} h-full`} disabled={otpVerified.mobile || otpSent.mobile} placeholder="+1 234 567 8900" />
              {!otpVerified.mobile && !otpSent.mobile && (
                <button type="button" onClick={() => handleRequestOtp('mobile')} disabled={!formData.mobileNo || isVerifying.mobile} className={`bg-[#4d7f1d] text-white px-3 rounded-[2px] transition hover:bg-[#3b6315] h-full ${buttonTextClasses} disabled:opacity-50`}>
                  {isVerifying.mobile ? <Loader2 className="animate-spin" size={14} /> : 'OTP'}
                </button>
              )}
              {otpSent.mobile && !otpVerified.mobile && (
                <>
                  <input type="text" maxLength={6} value={mobileOtp} onChange={(e) => setMobileOtp(e.target.value.replace(/\D/g, ''))} className={`${inputClasses} h-full w-[100px] text-center tracking-widest`} placeholder="OTP" />
                  <button type="button" onClick={() => handleVerifyOtp('mobile')} className={`bg-[#4d7f1d] text-white px-3 rounded-[2px] transition hover:bg-[#3b6315] h-full ${buttonTextClasses}`}>
                    {isVerifying.mobile ? <Loader2 className="animate-spin" size={14} /> : 'Verify'}
                  </button>
                </>
              )}
              {otpVerified.mobile && <CheckCircle size={18} className="text-[#4d7f1d] self-center shrink-0 ml-2" />}
            </div>
          </div>
          <div><label className={labelClasses}>WhatsApp Number</label><input type="tel" name="whatsappNo" value={formData.whatsappNo} onChange={handleChange} className={inputClasses} placeholder="+1 234 567 8900" /></div>
          <div><label className={labelClasses}>India Contact Number</label><input type="tel" name="indiaContactNo" value={formData.indiaContactNo} onChange={handleChange} className={inputClasses} placeholder="+91 123 456 7890" /></div>

          <div className="space-y-1">
            <label className={labelClasses}>Official Email ID *</label>
            <div className="flex gap-2 h-[34px]">
              <input required type="email" name="email" value={formData.email} onChange={handleChange} className={`${inputClasses} h-full`} disabled={otpVerified.email || otpSent.email} placeholder="Email Address" />
              {!otpVerified.email && !otpSent.email && (
                <button type="button" onClick={() => handleRequestOtp('email')} disabled={!formData.email || isVerifying.email} className={`bg-[#4d7f1d] text-white px-3 rounded-[2px] transition hover:bg-[#3b6315] h-full ${buttonTextClasses} disabled:opacity-50`}>
                  {isVerifying.email ? <Loader2 className="animate-spin" size={14} /> : 'OTP'}
                </button>
              )}
              {otpSent.email && !otpVerified.email && (
                <>
                  <input type="text" maxLength={6} value={emailOtp} onChange={(e) => setEmailOtp(e.target.value.replace(/\D/g, ''))} className={`${inputClasses} h-full w-[100px] text-center tracking-widest`} placeholder="OTP" />
                  <button type="button" onClick={() => handleVerifyOtp('email')} className={`bg-[#4d7f1d] text-white px-3 rounded-[2px] transition hover:bg-[#3b6315] h-full ${buttonTextClasses}`}>
                    {isVerifying.email ? <Loader2 className="animate-spin" size={14} /> : 'Verify'}
                  </button>
                </>
              )}
              {otpVerified.email && <CheckCircle size={18} className="text-[#4d7f1d] self-center shrink-0 ml-2" />}
            </div>
          </div>
          <div><label className={labelClasses}>Personal Email ID</label><input type="email" name="personalEmail" value={formData.personalEmail} onChange={handleChange} className={inputClasses} placeholder="Personal Email ID" /></div>

          <div className="md:col-span-3"><label className={labelClasses}>Residential Address</label><input name="address" value={formData.address} onChange={handleChange} className={inputClasses} placeholder="Full Address" /></div>

          <div>
            <label className={labelClasses}>Country *</label>
            <select required name="country" value={formData.country} onChange={handleChange} className={inputClasses}>
              <option value="">Select Country</option>
              {countries.filter(c => c.name?.toLowerCase() !== 'india').map((c: any) => <option key={c.countryCode} value={c.name}>{c.name}</option>)}
            </select>
          </div>
          <div>
            <label className={labelClasses}>State / Province</label>
            <select name="state" value={formData.state} onChange={handleChange} className={inputClasses} disabled={!formData.country}>
              <option value="">Select State</option>
              {states.map((s: any) => <option key={s.stateCode} value={s.name}>{s.name}</option>)}
            </select>
          </div>
          <div>
            <label className={labelClasses}>City</label>
            <select name="city" value={formData.city} onChange={handleChange} className={inputClasses} disabled={!formData.state}>
              <option value="">Select City</option>
              {cities.map((c: any) => <option key={c.name} value={c.name}>{c.name}</option>)}
            </select>
          </div>
          <div><label className={labelClasses}>Postal Code</label><input name="companyPincode" value={formData.companyPincode} onChange={handleChange} className={inputClasses} placeholder="Postal / ZIP Code" /></div>
        </div>
      </div>

      {step === 1 && (
        <div className="pt-6 mt-4 flex justify-center">
          <button type="button" onClick={() => setStep(2)} className="bg-[#4d7f1d] hover:bg-[#3b6315] text-white px-10 py-3 rounded-[4px] text-[13px] font-bold uppercase tracking-widest transition-all shadow-md flex items-center justify-center gap-2 font-inter w-full sm:w-auto">
            Next Step
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-2 animate-in fade-in slide-in-from-bottom-4 duration-500">

          <div>
            <h3 className={sectionTitleClasses}>3. Purpose & Visit Planning</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="space-y-4 bg-white p-5 border border-slate-200 rounded-sm shadow-sm lg:col-span-2">
                <label className="text-[11px] font-bold text-[#4d7f1d] uppercase tracking-wider block border-b border-slate-200 pb-2">Purpose of Visit <span className="text-red-500">*</span></label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {PURPOSE_OPTIONS.map(option => (
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
                        className="mt-0.5 w-3.5 h-3.5 text-[#4d7f1d] accent-[#4d7f1d] shrink-0 border-slate-300 rounded-[2px]"
                      />
                      <span className="text-[11px] text-slate-600 group-hover:text-slate-900 font-medium transition-colors font-inter whitespace-nowrap">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="space-y-4 bg-white p-5 border border-slate-200 rounded-sm shadow-sm lg:col-span-2">
                <label className="text-[11px] font-bold text-[#4d7f1d] uppercase tracking-wider block border-b border-slate-200 pb-2">Interested Sectors <span className="text-red-500">*</span></label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {INTEREST_OPTIONS.map(option => (
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
                        className="mt-0.5 w-3.5 h-3.5 text-[#4d7f1d] accent-[#4d7f1d] shrink-0 border-slate-300 rounded-[2px]"
                      />
                      <span className="text-[11px] text-slate-600 group-hover:text-slate-900 font-medium transition-colors font-inter whitespace-nowrap">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className={labelClasses}>Preferred Visit Days</label>
                <select name="preferredDate" value={formData.preferredDate} onChange={handleChange} className={inputClasses}>
                  <option value="">Select Days</option>
                  <option value="1 Day">1 Day</option>
                  <option value="2 Days">2 Days</option>
                  <option value="3 Days">3 Days</option>
                  <option value="All Days">All Days</option>
                </select>
              </div>

              {[
                { label: "Need Invitation Letter for Visa?", key: "invitationLetter" },
                { label: "Need Hotel Booking Assistance?", key: "hotelAssistance" },
                { label: "Need Airport Pickup?", key: "airportPickup" },
                { label: "Need Translator Support?", key: "translatorSupport" },
              ].map(({ label, key }) => (
                <div key={key}>
                  <label className={labelClasses}>{label}</label>
                  <select name={key} value={(formData as any)[key]} onChange={handleChange} className={inputClasses}>
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                  </select>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className={sectionTitleClasses}>4. Conference & Document Upload</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className={labelClasses}>Schedule B2B meetings? *</label>
                <select required name="schedulingB2B" value={formData.schedulingB2B} onChange={handleChange} className={inputClasses}>
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>
              <div>
                <label className={labelClasses}>Interested in Conference?</label>
                <select name="conferenceInterest" value={formData.conferenceInterest} onChange={handleChange} className={inputClasses}>
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>
              {formData.conferenceInterest === 'yes' && (
                <div>
                  <label className={labelClasses}>Interested As</label>
                  <select name="conferenceRole" value={formData.conferenceRole} onChange={handleChange} className={inputClasses}>
                    <option value="">Select Role</option>
                    {["Delegate", "Attendee", "Speaker", "Panel Participant", "Industry Expert"].map(r => (
                      <option key={r} value={r.toLowerCase().replace(' ', '-')}>{r}</option>
                    ))}
                  </select>
                </div>
              )}
              <div className="lg:col-span-2">
                <label className={labelClasses}>Any Specific Requirement</label>
                <input name="anyRequirement" value={formData.anyRequirement} onChange={handleChange} className={inputClasses} placeholder="Write here..." />
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mt-4">
              {[
                { key: 'passport', label: 'Passport Copy' },
                { key: 'visitingCard', label: 'Visiting Card' },
                { key: 'companyProfile', label: 'Company Profile' },
                { key: 'visaDocs', label: 'Visa Documents' },
                { key: 'photoId', label: 'Photo ID' },
              ].map(({ key, label }) => (
                <label key={key} className="flex flex-col items-center justify-center gap-2 p-3 border-2 border-dashed border-slate-300 rounded-md cursor-pointer hover:border-[#4d7f1d]/50 hover:bg-orange-50/50 transition-all group">
                  <Upload size={16} className="text-slate-400 group-hover:text-[#4d7f1d] transition-colors" />
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wide text-center group-hover:text-[#4d7f1d]">{label}</span>
                  {files[key] && <span className="text-[9px] text-green-600 font-bold truncate w-full text-center">{files[key]?.name}</span>}
                  <input type="file" className="hidden" onChange={(e) => setFiles(prev => ({ ...prev, [key]: e.target.files?.[0] || null }))} />
                </label>
              ))}
            </div>
          </div>

          <div className="pt-4 space-y-3 bg-slate-50 p-4 border border-slate-200 mt-6 rounded-sm">
            <label className="flex items-start gap-3 cursor-pointer group">
              <input type="checkbox" name="confirmInfo" checked={formData.confirmInfo} onChange={handleChange} className="w-4 h-4 accent-[#4d7f1d] shrink-0 mt-0.5" />
              <span className="text-[11px] font-medium text-slate-700 leading-tight">I confirm that the information provided is accurate and complete.</span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer group">
              <input type="checkbox" name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} className="w-4 h-4 accent-[#4d7f1d] shrink-0 mt-0.5" />
              <span className="text-[11px] font-medium text-slate-700 leading-tight">I agree to the Terms and Conditions of the event.</span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer group">
              <input type="checkbox" name="acceptPrivacy" checked={formData.acceptPrivacy} onChange={handleChange} className="w-4 h-4 accent-[#4d7f1d] shrink-0 mt-0.5" />
              <span className="text-[11px] font-medium text-slate-700 leading-tight">I accept the Privacy Policy.</span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer group">
              <input type="checkbox" name="agreeRules" checked={formData.agreeRules} onChange={handleChange} className="w-4 h-4 accent-[#4d7f1d] shrink-0 mt-0.5" />
              <span className="text-[11px] font-medium text-slate-700 leading-tight">I agree to abide by the event rules and regulations.</span>
            </label>
          </div>

          <div className="pt-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" name="subscribeNewsletter" checked={formData.subscribeNewsletter} onChange={handleChange} className="w-4 h-4 text-[#4d7f1d] accent-[#4d7f1d]" />
              <span className="text-sm font-medium text-slate-700">Subscribe to IHWE Global Updates & Newsletters</span>
            </label>
          </div>

          <div className="pt-6 mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] flex items-center gap-2">
              <ShieldCheck size={12} className="text-[#4d7f1d]" />
              Secure Registration Portal
            </p>
            <button type="submit" disabled={loading} className="bg-[#4d7f1d] hover:bg-[#3b6315] text-white px-10 py-3 rounded-[4px] text-[13px] font-bold uppercase tracking-widest transition-all shadow-md flex items-center justify-center gap-2 font-inter disabled:opacity-50 w-full sm:w-auto">
              {loading ? <Loader2 className="animate-spin" size={18} /> : <>Submit Registration <ShieldCheck size={18} /></>}
            </button>
          </div>
        </div>
      )}
    </form>
  );
}

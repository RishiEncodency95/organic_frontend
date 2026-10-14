"use client";
import React, { useState, useEffect } from "react";
import RegistrationSuccess from "./RegistrationSuccess";
import { Users, Plus, Trash2, Globe2, Loader2, CheckCircle, X, ChevronsUpDown, ShieldCheck } from "lucide-react";
import { verifyApi, visitorApi, ihweSettingsApi } from "../../../../lib/api";
import Swal from 'sweetalert2';
import { check, errorList, EVENT_NAME, isIndia, sameName, showErrors, postalTarget, useLocations, usePincodeAutofill, addressLock } from "@/lib/registration";
import { CityField, PincodeHint } from "../shared/LocationFields";
import { toOptions, useDropdowns } from "@/lib/dropdowns";

const MIN_PERSONS = 5;
const MAX_PERSONS = 10;

const emptyPerson = () => ({
  firstName: "", lastName: "", gender: "", designation: "", email: "", mobileNo: "",
});
type Person = ReturnType<typeof emptyPerson>;

const defaultCompany = {
  registrationFor: "", companyName: "", companyWebsite: "", industry: "",
  companySize: "", country: "India", state: "", city: "", companyPincode: "",
  schedulingB2B: "no", whatsappUpdates: "yes", anyRequirement: "",
  subscribeNewsletter: true, purposeOfVisit: [] as string[], areaOfInterest: [] as string[],
  confirmInfo: false, agreeTerms: false, acceptPrivacy: false, agreeRules: false,
};


const PURPOSE_OPTIONS = ["Business Networking", "Product Sourcing", "Distributor Search", "Franchise Opportunity", "Investment Opportunity", "Medical Tourism", "Healthcare Collaboration", "Wellness Industry Exploration", "Ayurveda & AYUSH Interest", "Conference Participation", "Knowledge Sessions", "Startup Collaboration", "Government Delegation", "General Visit"];
const INTEREST_OPTIONS = ["AYUSH & Herbal Products", "Organic & Natural Products", "Fitness & Wellness Equipment", "Health Supplements", "Hospitals & Healthcare Services", "Agriculture & Organic Farming", "R&D & Innovations", "Others"];

// Admin-managed (Dropdown Manager); these are the fallback options.
const VISITOR_DROPDOWNS = {
  "visitor-industry": [
    { label: "AYUSH", value: "ayush" },
    { label: "Agriculture & Organic", value: "agriculture" },
    { label: "Fitness & Wellness", value: "fitness" },
    { label: "Healthcare Services", value: "healthcare" },
    { label: "Pharmaceutical", value: "pharma" },
    { label: "Others", value: "others" },
  ],
  "visitor-company-size": [
    { label: "1-10 Employees", value: "1-10" },
    { label: "11-50 Employees", value: "11-50" },
    { label: "51-200 Employees", value: "51-200" },
    { label: "200+ Employees", value: "200+" },
  ],
  "gender": toOptions(["Male", "Female", "Other"]),
};

export default function GroupVisitorForm() {
  const dropdowns = useDropdowns(VISITOR_DROPDOWNS);
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [registrationNo, setRegistrationNo] = useState("");
  const [loading, setLoading] = useState(false);


  const defaultEventName = EVENT_NAME;
  const [requireOtp, setRequireOtp] = useState(true);

  useEffect(() => {
    ihweSettingsApi.getSettings().then((res: any) => {
      if (res && res.requireOtpForVisitorRegistration !== undefined) {
        setRequireOtp(res.requireOtpForVisitorRegistration);
      }
    }).catch((err: any) => console.error(err));
  }, []);


  const [company, setCompany] = useState({ ...defaultCompany, registrationFor: defaultEventName });
  const [persons, setPersons] = useState<Person[]>(Array.from({ length: MIN_PERSONS }, emptyPerson));

  // Countries (A–Z), states and cities from the website's backend
  const loc = useLocations(company.country, company.state);
  // A complete pincode / postal code fills in the state, city and country (all stay editable)
  const pinLookup = usePincodeAutofill(company.companyPincode, postalTarget(company.country, loc.countries), (place) =>
    setCompany((prev) => ({ ...prev, country: place.country || prev.country, state: place.state, city: place.city })));
  const addrLock = addressLock(pinLookup);

  const handleCompanyChange = (e: any) => {
    let { name, value, type, checked } = e.target;
    if (name === "country") { setCompany(prev => ({ ...prev, country: value, state: "", city: "", companyPincode: "" })); return; }
    if (name === "state") { setCompany(prev => ({ ...prev, state: value, city: "" })); return; }
    
    let finalValue = type === "checkbox" ? checked : value;

    if (name === 'pinCode' || name === 'companyPincode') {
      // India: 6-digit pincode; elsewhere a postal / ZIP code
      finalValue = isIndia(company.country) ? String(finalValue).replace(/\D/g, '').slice(0, 6) : String(finalValue).replace(/[^A-Za-z0-9 -]/g, '').slice(0, 10);
    }
    if (name === 'mobileNo' || name === 'alternateNo' || name === 'whatsappNumber') {
      finalValue = String(finalValue).replace(/\D/g, '').slice(0, 10);
    }

    setCompany(prev => ({ ...prev, [name]: finalValue }));
  };

  const handlePersonChange = (index: number, field: keyof Person, value: string) => {
    let finalValue = value;
    if (field === 'mobileNo') {
      finalValue = String(finalValue).replace(/\D/g, '').slice(0, 10);
    }
    if (field === 'firstName' || field === 'lastName') finalValue = finalValue.replace(/[^\p{L}\p{M} .'-]/gu, '').replace(/^\s+/, '');
    if (field === 'email') finalValue = finalValue.trim();
    setPersons(prev => prev.map((p, i) => i === index ? { ...p, [field]: finalValue } : p));
  };

  const addPerson = () => {
    if (persons.length < MAX_PERSONS) setPersons(prev => [...prev, emptyPerson()]);
  };

  const removePerson = (index: number) => {
    if (persons.length > MIN_PERSONS) setPersons(prev => prev.filter((_, i) => i !== index));
  };

  const [isVerifying, setIsVerifying] = useState({ email: false, mobile: false });
  const [otpSent, setOtpSent] = useState({ email: false, mobile: false });
  const [otpVerified, setOtpVerified] = useState({ email: false, mobile: false });
  const [emailOtp, setEmailOtp] = useState('');
  const [mobileOtp, setMobileOtp] = useState('');
  const [resendTimers, setResendTimers] = useState({ email: 0, mobile: 0 });


  useEffect(() => {
    let emailInterval: NodeJS.Timeout, mobileInterval: NodeJS.Timeout;
    if (resendTimers.email > 0) {
      emailInterval = setInterval(() => setResendTimers(prev => ({ ...prev, email: prev.email - 1 })), 1000);
    }
    if (resendTimers.mobile > 0) {
      mobileInterval = setInterval(() => setResendTimers(prev => ({ ...prev, mobile: prev.mobile - 1 })), 1000);
    }
    return () => { clearInterval(emailInterval); clearInterval(mobileInterval); };
  }, [resendTimers]);

  const handleRequestOtp = async (type: 'email' | 'mobile') => {
    const value = type === 'email' ? persons[0].email : persons[0].mobileNo;
    const problem = type === 'email' ? check.email(value, 'Person 1 email') : check.indianMobile(value, 'Person 1 WhatsApp number');
    if (problem) { showErrors([problem]); return; }

    setIsVerifying(prev => ({ ...prev, [type]: true }));
    try {
      const res = type === 'email'
        ? await verifyApi.sendEmailOtp(value, 'VISITOR', persons[0].firstName)
        : await verifyApi.sendPhoneOtp(value, 'VISITOR', persons[0].firstName);

      if (res && res.success) {
        setOtpSent(prev => ({ ...prev, [type]: true }));
        // The Resend link counts down from 30s
        setResendTimers(prev => ({ ...prev, [type]: 30 }));
        Swal.fire({ scrollbarPadding: false, icon: 'success', title: 'OTP Sent', text: `OTP sent to your ${type}.`, timer: 2000, showConfirmButton: false });
      } else {
        Swal.fire({ scrollbarPadding: false, icon: 'error', title: 'Error', text: res?.message || 'Failed to send OTP.' });
      }
    } catch (error) {
      Swal.fire({ scrollbarPadding: false, icon: 'error', title: 'Error', text: 'Something went wrong.' });
    }
    setIsVerifying(prev => ({ ...prev, [type]: false }));
  };

  const handleVerifyOtp = async (type: 'email' | 'mobile') => {
    const otpValue = type === 'email' ? emailOtp : mobileOtp;
    const value = type === 'email' ? persons[0].email : persons[0].mobileNo;
    if (!otpValue || otpValue.length !== 6) {
      Swal.fire({ scrollbarPadding: false, icon: 'warning', title: 'Invalid OTP', text: 'Please enter a valid 6-digit OTP.' });
      return;
    }
    setIsVerifying(prev => ({ ...prev, [type]: true }));
    try {
      const res = type === 'email'
        ? await verifyApi.verifyEmailOtp(value, otpValue)
        : await verifyApi.verifyPhoneOtp(value, otpValue);

      if (res && res.success) {
        setOtpVerified(prev => ({ ...prev, [type]: true }));
        Swal.fire({ scrollbarPadding: false, icon: 'success', title: 'Verified', text: 'Verified successfully!', timer: 2000, showConfirmButton: false });
      } else {
        Swal.fire({ scrollbarPadding: false, icon: 'error', title: 'Invalid OTP', text: res?.message || 'Verification failed.' });
      }
    } catch (error) {
      Swal.fire({ scrollbarPadding: false, icon: 'error', title: 'Error', text: 'Something went wrong.' });
    }
    setIsVerifying(prev => ({ ...prev, [type]: false }));
  };

  // Step 1 (checked before "Next Step"): the company
  const validateCompany = () => errorList(
    check.required(company.companyName, "Company name"),
    check.required(company.companyWebsite, "Company website"),
    check.website(company.companyWebsite, "Company website"),
    check.required(company.industry, "Industry / sector"),
    check.required(company.companySize, "Company size"),
    check.required(company.country, "Country"),
    check.required(company.state, "State"),
    check.required(company.city, "City"),
    check.postal(company.companyPincode, company.country, true),
  );

  // Steps 2–3: every member, no member twice (same name, email or number), and the declarations
  const validateMembers = () => {
    const errors: (string | false)[] = [];
    persons.forEach((p, i) => {
      const who = `Person ${i + 1}`;
      errors.push(
        check.name(p.firstName, `${who} first name`),
        check.name(p.lastName, `${who} last name`),
        check.required(p.designation, `${who} designation`),
        check.required(p.gender, `${who} gender`),
        check.email(p.email, `${who} email`),
        check.indianMobile(p.mobileNo, `${who} WhatsApp number`),
      );
      persons.slice(0, i).forEach((q, j) => {
        const other = `Person ${j + 1}`;
        if (p.firstName && q.firstName && sameName(`${p.firstName} ${p.lastName}`, `${q.firstName} ${q.lastName}`)) errors.push(`${who} has the same name as ${other}. Each member must be a different person.`);
        if (p.email && q.email && p.email.toLowerCase() === q.email.toLowerCase()) errors.push(`${who} has the same email as ${other}.`);
        if (p.mobileNo && p.mobileNo === q.mobileNo) errors.push(`${who} has the same WhatsApp number as ${other}.`);
      });
    });
    errors.push(
      !company.purposeOfVisit.length && "Please choose at least one purpose of visit.",
      !company.areaOfInterest.length && "Please choose at least one area of interest.",
      (!company.confirmInfo || !company.agreeTerms || !company.acceptPrivacy || !company.agreeRules) && "Please accept all four declarations.",
    );
    return errorList(...errors);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!showErrors([...validateCompany(), ...validateMembers()])) return;
    if (requireOtp && (!otpVerified.email || !otpVerified.mobile)) {
      Swal.fire({ scrollbarPadding: false, icon: 'warning', title: 'Verification Required', text: 'Please verify the Primary Contact (Person 1) Email and Mobile number.' });
      return;
    }
    setLoading(true);
    try {
      const res = await visitorApi.submitGroup({ company, persons });
      if (res.ok) {
        setSubmitted(true);
        setRegistrationNo(res.data?.registrationNo || "");
      } else {
        // The server's reason, e.g. "This mobile number is already registered"
        Swal.fire({ scrollbarPadding: false, icon: 'error', title: 'Registration Failed', text: res.message });
      }
    } catch (error) {
      Swal.fire({ scrollbarPadding: false, icon: 'error', title: 'Error', text: 'Something went wrong.' });
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
      <RegistrationSuccess
        title="Group Registration Successful!"
        name={persons[0]?.firstName}
        message="Your group registration for Bharat Organic Expo 2027 has been received with all members' details."
        registrationNo={registrationNo}
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full space-y-2 animate-in fade-in duration-500">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-[#4d7f1d] flex items-center justify-center shrink-0 shadow-md">
          <Users size={18} className="text-white" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-[#1a3352] uppercase tracking-wide font-poppins">Group Registration</h3>
          <p className="text-[12px] text-gray-500 font-medium">Bharat Organic Expo 2027</p>
        </div>
      </div>

      <div>
        <div className={sectionTitleWrapperClasses}>
          <h3 className={sectionTitleClasses}>1. Company & Industry Information</h3>
          <span className="text-[10px] font-bold bg-[#4d7f1d]/10 text-[#4d7f1d] px-2 py-1 rounded tracking-widest uppercase w-fit">Step 1 of 3</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-3 gap-y-3">
          <div className="md:col-span-2"><label className={labelClasses}>Company Name <span className="text-red-600">*</span></label><input required name="companyName" value={company.companyName} onChange={handleCompanyChange} className={inputClasses} placeholder="Enter Company Name.." /></div>
          <div className="md:col-span-2"><label className={labelClasses}>Company Website <span className="text-red-600">*</span></label><input required inputMode="url" name="companyWebsite" value={company.companyWebsite} onChange={handleCompanyChange} className={inputClasses} placeholder="Enter Company Website.." /></div>

          <div>
            <label className={labelClasses}>Industry / Sector <span className="text-red-600">*</span></label>
            <select required name="industry" value={company.industry} onChange={handleCompanyChange} className={inputClasses}>
              <option value="">Select</option>
              {dropdowns["visitor-industry"].map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
          </div>
          <div>
            <label className={labelClasses}>Company Size <span className="text-red-600">*</span></label>
            <select required name="companySize" value={company.companySize} onChange={handleCompanyChange} className={inputClasses}>
              <option value="">Select</option>
              {dropdowns["visitor-company-size"].map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
          </div>

          <div>
            <label className={labelClasses}>{isIndia(company.country) ? "Pincode" : "Postal / ZIP Code"} <span className="text-red-600">*</span></label>
            <input required inputMode={isIndia(company.country) ? "numeric" : "text"} name="companyPincode" value={company.companyPincode} onChange={handleCompanyChange} className={inputClasses} placeholder={isIndia(company.country) ? "6-digit Pincode" : "Postal / ZIP Code"} autoComplete="postal-code" aria-describedby="pincode-hint" />
            <div id="pincode-hint"><PincodeHint lookup={pinLookup} /></div>
          </div>
          <div>
            <label className={labelClasses}>State <span className="text-red-600">*</span></label>
            <select required name="state" value={company.state} onChange={handleCompanyChange} className={inputClasses} disabled={addrLock.locked || !company.country}>
              <option value="">Select State</option>
              {loc.states.map((s) => <option key={s.stateCode} value={s.name}>{s.name}</option>)}
            </select>
          </div>
          <div>
            <label className={labelClasses}>City <span className="text-red-600">*</span></label>
            <CityField key={company.state} value={company.city} onChange={(city) => setCompany((prev) => ({ ...prev, city }))} cities={loc.cities} ready={loc.citiesReady} stateChosen={!!company.state} disabled={addrLock.cityLocked} className={inputClasses} required />
          </div>
          <div>
            <label className={labelClasses}>Country <span className="text-red-600">*</span></label>
            <select required name="country" value={company.country} onChange={handleCompanyChange} className={inputClasses} disabled={addrLock.locked}>
              <option value="">Select Country</option>
              {loc.countries.map((c) => <option key={c.countryCode} value={c.name}>{c.name}</option>)}
            </select>
          </div>
        </div>
      </div>

      {step === 1 && (
        <div className="pt-6 mt-4 flex justify-center">
          <button type="button" onClick={() => showErrors(validateCompany()) && setStep(2)} className="bg-[#4d7f1d] hover:bg-[#3b6315] text-white px-10 py-3 rounded-[4px] text-[13px] font-bold uppercase tracking-widest transition-all shadow-md flex items-center justify-center gap-2 font-inter w-full sm:w-auto">
            Next Step
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-2 animate-in fade-in slide-in-from-bottom-4 duration-500">

          <div>
            <div className={sectionTitleWrapperClasses}>
              <h3 className={sectionTitleClasses}>
                2. Personal Information
                <span className="ml-2 text-[10px] text-slate-400 normal-case tracking-normal font-medium">({persons.length} / {MAX_PERSONS} — min. {MIN_PERSONS})</span>
              </h3>
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-bold bg-[#4d7f1d]/10 text-[#4d7f1d] px-2 py-1 rounded tracking-widest uppercase">Step 2 of 3</span>
                <button type="button" onClick={addPerson} disabled={persons.length >= MAX_PERSONS}
                  className="flex items-center gap-1.5 text-[10px] font-extrabold text-[#4d7f1d] uppercase tracking-wider hover:text-[#3b6315] disabled:text-slate-300 transition-colors">
                  <Plus size={13} /> Add Member
                </button>
              </div>
            </div>

            <p className="text-[11px] text-[#4d7f1d] font-semibold bg-[#f0f9ff] border border-[#bae6fd] rounded px-3 py-1.5 mb-4">
              Person 1 is the primary contact.
            </p>

            <div className="space-y-3">
              {persons.map((person, idx) => (
                <div key={idx} className={`border rounded-lg px-4 py-3 relative ${idx === 0 ? "border-[#bae6fd] bg-[#f0f9ff]" : "border-slate-200 bg-slate-50/40"}`}>
                  <div className="absolute -left-2 -top-2 w-6 h-6 rounded-full bg-[#4d7f1d] text-white flex items-center justify-center text-[10px] font-black shadow-sm">
                    {idx + 1}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-x-3 gap-y-3">
                    <div>
                      <label className={labelClasses}>First Name <span className="text-red-600">*</span></label>
                      <input required value={person.firstName} onChange={e => handlePersonChange(idx, "firstName", e.target.value)} className={inputClasses} placeholder="First Name" />
                    </div>
                    <div>
                      <label className={labelClasses}>Last Name <span className="text-red-600">*</span></label>
                      <input required value={person.lastName} onChange={e => handlePersonChange(idx, "lastName", e.target.value)} className={inputClasses} placeholder="Last Name" />
                    </div>
                    <div>
                      <label className={labelClasses}>Designation <span className="text-red-600">*</span></label>
                      <input required value={person.designation} onChange={e => handlePersonChange(idx, "designation", e.target.value)} className={inputClasses} placeholder="Designation" />
                    </div>
                    <div>
                      <label className={labelClasses}>Gender <span className="text-red-600">*</span></label>
                      <select required value={person.gender} onChange={e => handlePersonChange(idx, "gender", e.target.value)} className={inputClasses}>
                        <option value="">Select</option>
                        {dropdowns["gender"].map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                      </select>
                    </div>
                    <div className={idx === 0 ? "md:col-span-2" : ""}>
                      <div className="flex justify-between items-end">
                        <label className={`${labelClasses} mb-0`}>Email Address <span className="text-red-600">*</span></label>
                        {requireOtp && idx === 0 && otpSent.email && !otpVerified.email && (
                          <button type="button" onClick={() => handleRequestOtp('email')} disabled={resendTimers.email > 0 || isVerifying.email} className="text-[#4d7f1d] text-[10px] font-bold uppercase disabled:opacity-50 hover:underline">
                            {resendTimers.email > 0 ? `Resend (${resendTimers.email}s)` : 'Resend'}
                          </button>
                        )}
                      </div>
                      <div className="flex gap-2 h-7">
                        <input required type="email" value={person.email} onChange={e => handlePersonChange(idx, "email", e.target.value)} className={`${inputClasses} h-full`} placeholder="Email" disabled={idx === 0 && (otpVerified.email || otpSent.email)} />
                        {requireOtp && idx === 0 && !otpVerified.email && !otpSent.email && (
                          <button type="button" onClick={() => handleRequestOtp('email')} disabled={!person.email || isVerifying.email} className={`bg-[#4d7f1d] text-white px-3 rounded text-[10px] uppercase font-bold transition hover:bg-[#3b6315] h-full disabled:opacity-50`}>
                            {isVerifying.email ? <Loader2 className="animate-spin" size={14} /> : 'OTP'}
                          </button>
                        )}
                        {requireOtp && idx === 0 && otpSent.email && !otpVerified.email && (
                          <>
                            <input type="text" maxLength={6} value={emailOtp} onChange={(e) => setEmailOtp(e.target.value.replace(/\D/g, ''))} className={`${inputClasses} h-full w-[80px] text-center tracking-widest`} placeholder="OTP" />
                            <button type="button" onClick={() => handleVerifyOtp('email')} className={`bg-[#4d7f1d] text-white px-3 rounded text-[10px] uppercase font-bold transition hover:bg-[#3b6315] h-full`}>
                              {isVerifying.email ? <Loader2 className="animate-spin" size={14} /> : 'Verify'}
                            </button>
                          </>
                        )}
                        {requireOtp && idx === 0 && otpVerified.email && <CheckCircle size={18} className="text-[#4d7f1d] self-center shrink-0 ml-2" />}
                      </div>
                    </div>
                    <div className={`relative ${idx === 0 ? "md:col-span-2" : ""}`}>
                      <div className="flex justify-between items-end">
                        <label className={`${labelClasses} mb-0`}>WhatsApp No. <span className="text-red-600">*</span></label>
                        {requireOtp && idx === 0 && otpSent.mobile && !otpVerified.mobile && (
                          <button type="button" onClick={() => handleRequestOtp('mobile')} disabled={resendTimers.mobile > 0 || isVerifying.mobile} className="text-[#4d7f1d] text-[10px] font-bold uppercase disabled:opacity-50 hover:underline">
                            {resendTimers.mobile > 0 ? `Resend (${resendTimers.mobile}s)` : 'Resend'}
                          </button>
                        )}
                      </div>
                      <div className="flex gap-2 h-7">
                        <input required type="tel" value={person.mobileNo} onChange={e => handlePersonChange(idx, "mobileNo", e.target.value)} className={`${inputClasses} h-full w-full`} placeholder="Mobile" disabled={idx === 0 && (otpVerified.mobile || otpSent.mobile)} />
                        {requireOtp && idx === 0 && !otpVerified.mobile && !otpSent.mobile && (
                          <button type="button" onClick={() => handleRequestOtp('mobile')} disabled={!person.mobileNo || isVerifying.mobile} className={`bg-[#4d7f1d] text-white px-3 rounded text-[10px] uppercase font-bold transition hover:bg-[#3b6315] h-full disabled:opacity-50 shrink-0`}>
                            {isVerifying.mobile ? <Loader2 className="animate-spin" size={14} /> : 'OTP'}
                          </button>
                        )}
                        {requireOtp && idx === 0 && otpSent.mobile && !otpVerified.mobile && (
                          <>
                            <input type="text" maxLength={6} value={mobileOtp} onChange={(e) => setMobileOtp(e.target.value.replace(/\D/g, ''))} className={`${inputClasses.replace('w-full', '')} h-full w-[80px] text-center tracking-widest shrink-0`} placeholder="OTP" />
                            <button type="button" onClick={() => handleVerifyOtp('mobile')} className={`bg-[#4d7f1d] text-white px-3 rounded text-[10px] uppercase font-bold transition hover:bg-[#3b6315] h-full shrink-0`}>
                              {isVerifying.mobile ? <Loader2 className="animate-spin" size={14} /> : 'Verify'}
                            </button>
                          </>
                        )}
                        {requireOtp && idx === 0 && otpVerified.mobile && <CheckCircle size={18} className="text-[#4d7f1d] self-center shrink-0 ml-2" />}
                        {persons.length > MIN_PERSONS && (
                          <button type="button" onClick={() => removePerson(idx)} className="h-7 w-7 shrink-0 flex items-center justify-center bg-red-50 text-red-500 rounded border border-red-200 hover:bg-red-100 transition-colors">
                            <Trash2 size={14} />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className={sectionTitleWrapperClasses}>
              <h3 className={sectionTitleClasses}>3. Purpose & Location Preferences</h3>
              <span className="text-[10px] font-bold bg-[#4d7f1d]/10 text-[#4d7f1d] px-2 py-1 rounded tracking-widest uppercase w-fit">Step 3 of 3</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-3 gap-y-3">
              <div className="space-y-3 bg-white p-4 border border-slate-200 rounded-sm shadow-sm">
                <label className="text-[11px] font-medium uppercase text-[#d26019] tracking-[0.05em] block border-b border-slate-200 pb-1">Purpose of Visit <span className="text-red-600">*</span></label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {PURPOSE_OPTIONS.map(option => (
                    <label key={option} className="flex items-start gap-2 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={company.purposeOfVisit.includes(option)}
                        onChange={(e) => {
                          const newSelection = e.target.checked
                            ? [...company.purposeOfVisit, option]
                            : company.purposeOfVisit.filter((item: string) => item !== option);
                          setCompany(prev => ({ ...prev, purposeOfVisit: newSelection }));
                        }}
                        className="mt-0.5 w-3.5 h-3.5 text-[#4d7f1d] accent-[#4d7f1d] shrink-0 border-slate-300 rounded-[2px]"
                      />
                      <span className="text-[11px] text-slate-600 group-hover:text-slate-900 font-medium transition-colors font-inter whitespace-nowrap">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="space-y-3 bg-white p-4 border border-slate-200 rounded-sm shadow-sm">
                <label className="text-[11px] font-medium uppercase text-[#d26019] tracking-[0.05em] block border-b border-slate-200 pb-1">Area of Interest <span className="text-red-600">*</span></label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {INTEREST_OPTIONS.map(option => (
                    <label key={option} className="flex items-start gap-2 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={company.areaOfInterest.includes(option)}
                        onChange={(e) => {
                          const newSelection = e.target.checked
                            ? [...company.areaOfInterest, option]
                            : company.areaOfInterest.filter((item: string) => item !== option);
                          setCompany(prev => ({ ...prev, areaOfInterest: newSelection }));
                        }}
                        className="mt-0.5 w-3.5 h-3.5 text-[#4d7f1d] accent-[#4d7f1d] shrink-0 border-slate-300 rounded-[2px]"
                      />
                      <span className="text-[11px] text-slate-600 group-hover:text-slate-900 font-medium transition-colors font-inter whitespace-nowrap">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-3 mt-6">
              <h3 className="text-[11px] font-medium uppercase text-[#d26019] tracking-[0.05em] block border-b border-slate-200 pb-1">
                Additional Preferences
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-3 gap-y-3">
                <div>
                  <label className={labelClasses}>SCHEDULING B2B MEETINGS?</label>
                  <div className="flex gap-6 mt-1">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input type="radio" name="schedulingB2B" value="yes" checked={company.schedulingB2B === 'yes'} onChange={handleCompanyChange} className="w-4 h-4 text-[#4d7f1d] accent-[#4d7f1d] border-slate-400" />
                      <span className="text-[13px] font-medium text-slate-700">Yes</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input type="radio" name="schedulingB2B" value="no" checked={company.schedulingB2B === 'no'} onChange={handleCompanyChange} className="w-4 h-4 text-[#4d7f1d] accent-[#4d7f1d] border-slate-400" />
                      <span className="text-[13px] font-medium text-slate-700">No</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label className={labelClasses}>WHATSAPP UPDATES?</label>
                  <div className="flex gap-6 mt-1">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input type="radio" name="whatsappUpdates" value="yes" checked={company.whatsappUpdates === 'yes'} onChange={(e) => setCompany(p => ({ ...p, whatsappUpdates: 'yes' }))} className="w-4 h-4 text-[#4d7f1d] accent-[#4d7f1d] border-slate-400" />
                      <span className="text-[13px] font-medium text-slate-700">Yes</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input type="radio" name="whatsappUpdates" value="no" checked={company.whatsappUpdates === 'no'} onChange={(e) => setCompany(p => ({ ...p, whatsappUpdates: 'no' }))} className="w-4 h-4 text-[#4d7f1d] accent-[#4d7f1d] border-slate-400" />
                      <span className="text-[13px] font-medium text-slate-700">No</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label className={labelClasses}>SPECIFIC REQUIREMENT (IF ANY)</label>
                  <input name="anyRequirement" value={company.anyRequirement} onChange={handleCompanyChange} className={inputClasses} placeholder="Any specific details" />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 space-y-3 bg-slate-50 p-4 border border-slate-200 mt-6 rounded-sm">
            <label className="flex items-start gap-3 cursor-pointer group">
              <input type="checkbox" name="confirmInfo" checked={company.confirmInfo} onChange={handleCompanyChange} className="w-4 h-4 accent-[#4d7f1d] shrink-0 mt-0.5" />
              <span className="text-[11px] font-medium text-slate-700">I confirm that the information provided is accurate and complete. *</span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer group">
              <input type="checkbox" name="agreeTerms" checked={company.agreeTerms} onChange={handleCompanyChange} className="w-4 h-4 accent-[#4d7f1d] shrink-0 mt-0.5" />
              <span className="text-[11px] font-medium text-slate-700">I agree to the Terms and Conditions of the event. *</span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer group">
              <input type="checkbox" name="acceptPrivacy" checked={company.acceptPrivacy} onChange={handleCompanyChange} className="w-4 h-4 accent-[#4d7f1d] shrink-0 mt-0.5" />
              <span className="text-[11px] font-medium text-slate-700">I accept the Privacy Policy. *</span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer group">
              <input type="checkbox" name="agreeRules" checked={company.agreeRules} onChange={handleCompanyChange} className="w-4 h-4 accent-[#4d7f1d] shrink-0 mt-0.5" />
              <span className="text-[11px] font-medium text-slate-700">I agree to abide by the event rules and regulations. *</span>
            </label>
          </div>

          <div className="pt-2 border-t border-slate-100 mt-2">
            <label className="flex items-center gap-3 cursor-pointer group w-fit">
              <input type="checkbox" name="subscribeNewsletter" checked={company.subscribeNewsletter} onChange={handleCompanyChange} className="w-4 h-4 text-[#4d7f1d] accent-[#4d7f1d] border-slate-300 rounded-sm" />
              <span className="text-[10px] font-bold text-slate-500">
                I agree to the <a href="/registration/terms-and-conditions" target="_blank" className="text-[#4d7f1d] underline">Terms &amp; Conditions</a> and <a href="/registration/privacy-policy" target="_blank" className="text-[#4d7f1d] underline">Privacy Policy</a>
              </span>
            </label>
          </div>

          <div className="pt-3 mt-2 flex flex-col-reverse items-center justify-center gap-2">
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

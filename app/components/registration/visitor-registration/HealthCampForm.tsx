"use client";
import React, { useState, useEffect } from "react";
import { CheckCircle2, ShieldCheck, HeartPulse, Loader2, CheckCircle, Activity, Calendar, Heart } from "lucide-react";
import { crmApi, visitorApi } from "../../../../lib/api";
import Swal from 'sweetalert2';

const HEALTH_SERVICES = [
  { key: "generalCheckup", label: "General Check-up" },
  { key: "dentalCheckup", label: "Dental Check-up" },
  { key: "eyeCheckup", label: "Eye Check-up" },
  { key: "bloodPressure", label: "Blood Pressure" },
  { key: "bloodSugar", label: "Blood Sugar" },
  { key: "bmi", label: "BMI Calculation" },
];

const TIME_SLOTS = [
  "10:00 AM - 11:00 AM",
  "11:00 AM - 12:00 PM",
  "12:00 PM - 01:00 PM",
  "02:00 PM - 03:00 PM",
  "03:00 PM - 04:00 PM",
  "04:00 PM - 05:00 PM",
];

export default function HealthCampForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [countries, setCountries] = useState<any[]>([]);
  const [states, setStates] = useState<any[]>([]);
  const [cities, setCities] = useState<any[]>([]);

  const defaultEventName = "9th Edition of International Health & Wellness Expo 2026";

  const [formData, setFormData] = useState({
    registrationFor: defaultEventName,
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    alternateNo: "",
    dateOfBirth: "",
    gender: "",
    residenceAddress: "",
    country: "India",
    state: "",
    city: "",
    existingMedicalConditions: "no",
    isTakingMedications: "no",
    hasAllergies: "no",
    isExperiencingSymptoms: "no",
    medicationNames: "",
    allergyDetails: "",
    symptomDetails: "",
    healthCheckupServices: {
      generalCheckup: false,
      dentalCheckup: false,
      eyeCheckup: false,
      bloodPressure: false,
      bloodSugar: false,
      bmi: false
    } as any,
    preferredDate: "",
    preferredTimeSlot: "",
    consentMedicalData: "yes",
    agreeToUpdates: "yes",
    specificHealthConcerns: "",
    subscribeNewsletter: true
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

  const handleHealthServiceChange = (key: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      healthCheckupServices: {
        ...prev.healthCheckupServices,
        [key]: checked
      }
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await visitorApi.submitHealthCamp(formData);
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
        <div className="w-20 h-20 rounded-full bg-[#fff1f2] flex items-center justify-center mb-6 shadow-lg">
          <CheckCircle2 size={40} className="text-[#e11d48]" />
        </div>
        <h3 className="text-2xl font-bold text-[#1a3352] mb-2 font-poppins">Registration Successful!</h3>
        <p className="text-gray-500 text-sm max-w-sm leading-relaxed">
          Thank you for registering for the Free Health Camp. A confirmation will be sent to your email.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-2 animate-in fade-in duration-500">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-[#e11d48] flex items-center justify-center shrink-0 shadow-md">
          <HeartPulse size={18} className="text-white" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-[#1a3352] uppercase tracking-wide font-poppins">Free Health Camp Registration</h3>
          <p className="text-[12px] text-gray-500 font-medium">Bharat Organic Expo 2027</p>
        </div>
      </div>

      <div>
        <div className={sectionTitleWrapperClasses}>
          <h3 className={sectionTitleClasses}>1. Patient Information</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-3 gap-y-3">
          <div>
            <label className={labelClasses}>Event Name *</label>
            <select required name="registrationFor" value={formData.registrationFor} onChange={handleChange} className={inputClasses} disabled>
              <option value={defaultEventName}>{defaultEventName}</option>
            </select>
          </div>
          <div><label className={labelClasses}>First Name *</label><input required name="firstName" value={formData.firstName} onChange={handleChange} className={inputClasses} placeholder="First Name" /></div>
          <div><label className={labelClasses}>Last Name *</label><input required name="lastName" value={formData.lastName} onChange={handleChange} className={inputClasses} placeholder="Last Name" /></div>
          <div><label className={labelClasses}>Email Address *</label><input required type="email" name="email" value={formData.email} onChange={handleChange} className={inputClasses} placeholder="Email" /></div>
          <div><label className={labelClasses}>Mobile Number *</label><input required type="tel" name="mobile" value={formData.mobile} onChange={handleChange} className={inputClasses} placeholder="Mobile No." /></div>
          <div><label className={labelClasses}>Alternate No.</label><input type="tel" name="alternateNo" value={formData.alternateNo} onChange={handleChange} className={inputClasses} placeholder="Optional" /></div>
          <div><label className={labelClasses}>Date of Birth *</label><input required type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} className={inputClasses} /></div>
          <div>
            <label className={labelClasses}>Gender *</label>
            <select required name="gender" value={formData.gender} onChange={handleChange} className={inputClasses}>
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="md:col-span-2"><label className={labelClasses}>Residence Address</label><input name="residenceAddress" value={formData.residenceAddress} onChange={handleChange} className={inputClasses} placeholder="Full Address" /></div>
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
        </div>
      </div>

      <div>
        <div className={sectionTitleWrapperClasses}>
          <h3 className={sectionTitleClasses}><Heart className="w-4 h-4 mr-1 inline-block mb-1" /> 2. Medical Background</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-3">
          {[
            { label: "Existing Medical Conditions?", key: "existingMedicalConditions", area: "existingMedicalConditions_text" },
            { label: "Currently taking medications?", key: "isTakingMedications", area: "medicationNames" },
            { label: "Do you have any allergies?", key: "hasAllergies", area: "allergyDetails" },
            { label: "Experiencing any symptoms currently?", key: "isExperiencingSymptoms", area: "symptomDetails" },
          ].map(({ label, key, area }) => (
            <div key={key} className="grid grid-cols-1 md:grid-cols-3 gap-2 items-start">
              <div>
                <label className={labelClasses}>{label}</label>
                <div className="flex gap-4 mt-1">
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input type="radio" name={key} value="yes" checked={(formData as any)[key] === "yes"} onChange={handleChange} className="w-3.5 h-3.5 accent-[#4d7f1d]" />
                    <span className="text-[11px] font-medium text-slate-700">Yes</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input type="radio" name={key} value="no" checked={(formData as any)[key] === "no"} onChange={handleChange} className="w-3.5 h-3.5 accent-[#4d7f1d]" />
                    <span className="text-[11px] font-medium text-slate-700">No</span>
                  </label>
                </div>
              </div>
              <div className="md:col-span-2">
                {(formData as any)[key] === "yes" && (
                  <textarea
                    name={area}
                    value={(formData as any)[area] || ""}
                    onChange={handleChange}
                    className="w-full h-7 px-3 border border-slate-400 focus:border-[#4d7f1d] outline-none text-[12px] rounded bg-white"
                    placeholder="Provide details here..."
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-3 gap-y-3 mt-6">
        <div>
          <div className={sectionTitleWrapperClasses}>
            <h3 className={sectionTitleClasses}><Activity className="w-4 h-4 mr-1 inline-block mb-1" /> 3. Health Check-Up Services</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
            {HEALTH_SERVICES.map(({ key, label }) => (
              <label key={key} className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={formData.healthCheckupServices[key]}
                  onChange={(e) => handleHealthServiceChange(key, e.target.checked)}
                  className="w-4 h-4 rounded border-slate-400 accent-[#e11d48]"
                />
                <span className="text-[11px] text-slate-600 group-hover:text-slate-900 font-medium transition-colors font-inter whitespace-nowrap">{label}</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <div className={sectionTitleWrapperClasses}>
            <h3 className={sectionTitleClasses}><Calendar className="w-4 h-4 mr-1 inline-block mb-1" /> 4. Appointment Schedule</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-3">
            <div>
              <label className={labelClasses}>Preferred Date *</label>
              <input required type="date" name="preferredDate" value={formData.preferredDate} onChange={handleChange} className={inputClasses} />
            </div>
            <div>
              <label className={labelClasses}>Preferred Time Slot *</label>
              <select required name="preferredTimeSlot" value={formData.preferredTimeSlot} onChange={handleChange} className={inputClasses}>
                <option value="">Select Time Slot</option>
                {TIME_SLOTS.map(slot => <option key={slot} value={slot}>{slot}</option>)}
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-4 space-y-4 mt-4 bg-orange-50 p-6 border-l-4 border-[#ea580c]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            {[
              { label: "Consent to share medical data for analysis? *", key: "consentMedicalData" },
              { label: "Agree to health updates & reminders? *", key: "agreeToUpdates" },
            ].map(({ label, key }) => (
              <div key={key}>
                <label className={labelClasses}>{label}</label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input type="radio" name={key} value="yes" checked={(formData as any)[key] === "yes"} onChange={handleChange} className="w-3.5 h-3.5 accent-[#4d7f1d]" />
                    <span className="text-[11px] font-medium text-slate-700">Yes</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input type="radio" name={key} value="no" checked={(formData as any)[key] === "no"} onChange={handleChange} className="w-3.5 h-3.5 accent-[#4d7f1d]" />
                    <span className="text-[11px] font-medium text-slate-700">No</span>
                  </label>
                </div>
              </div>
            ))}
          </div>
          <div>
            <label className={labelClasses}>Specific Health Concerns or Questions?</label>
            <textarea
              name="specificHealthConcerns"
              value={formData.specificHealthConcerns}
              onChange={handleChange}
              className="w-full h-20 p-2 border border-slate-400 focus:border-[#4d7f1d] outline-none text-[12px] rounded bg-white resize-none"
              placeholder="Mention any specific concerns for the doctors..."
            />
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-slate-100 mt-8">
        <label className="flex items-center gap-3 cursor-pointer group w-fit">
          <input type="checkbox" name="subscribeNewsletter" checked={(formData as any).subscribeNewsletter} onChange={handleChange} className="w-4 h-4 text-[#4d7f1d] accent-[#4d7f1d] border-slate-300 rounded-sm" />
          <span className="text-[11px] font-bold text-[#4d7f1d] uppercase tracking-wide">Subscribe to Event Updates & Wellness Newsletters</span>
        </label>
      </div>

      <div className="pt-6 mt-4 flex flex-col-reverse items-center justify-center gap-4">
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] flex items-center gap-2">
          <ShieldCheck size={12} className="text-[#4d7f1d]" />
          Secure Registration Portal
        </p>
        <button type="submit" disabled={loading} className="bg-[#4d7f1d] hover:bg-[#3b6315] text-white px-10 py-3 rounded text-[13px] font-bold uppercase tracking-widest transition-all shadow-md flex items-center justify-center gap-2 font-inter disabled:opacity-50 w-full sm:w-auto">
          {loading ? <Loader2 className="animate-spin" size={18} /> : <>Submit Registration <ShieldCheck size={18} /></>}
        </button>
      </div>
    </form>
  );
}

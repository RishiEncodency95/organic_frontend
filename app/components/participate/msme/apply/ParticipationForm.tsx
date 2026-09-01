"use client";
import { useState, useEffect, useRef } from "react";
import { FileText, ChevronDown, CheckCircle2, User, ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import { verifyApi } from "@/lib/api";
import Swal from "sweetalert2";

export default function ParticipationForm() {
  const [stallSize, setStallSize] = useState<number>(9);
  
  // Verification States
  const [contactPerson, setContactPerson] = useState({
    name: "",
    designation: "",
    mobile: "",
    email: "",
    alternateMobile: "",
    landline: ""
  });
  const [emailVerified, setEmailVerified] = useState(false);
  const [phoneVerified, setPhoneVerified] = useState(false);
  const [emailOtp, setEmailOtp] = useState("");
  const [phoneOtp, setPhoneOtp] = useState("");
  const [emailTimer, setEmailTimer] = useState(0);
  const [phoneTimer, setPhoneTimer] = useState(0);
  const [isEmailLoading, setIsEmailLoading] = useState(false);
  const [isPhoneLoading, setIsPhoneLoading] = useState(false);
  
  const emailTimerRef = useRef<number | null>(null);
  const phoneTimerRef = useRef<number | null>(null);

  useEffect(() => {
    if (emailTimer > 0) {
      emailTimerRef.current = window.setInterval(() => {
        setEmailTimer((prev) => prev - 1);
      }, 1000);
    } else if (emailTimerRef.current) {
      clearInterval(emailTimerRef.current);
    }
    return () => {
      if (emailTimerRef.current) clearInterval(emailTimerRef.current);
    };
  }, [emailTimer]);

  useEffect(() => {
    if (phoneTimer > 0) {
      phoneTimerRef.current = window.setInterval(() => {
        setPhoneTimer((prev) => prev - 1);
      }, 1000);
    } else if (phoneTimerRef.current) {
      clearInterval(phoneTimerRef.current);
    }
    return () => {
      if (phoneTimerRef.current) clearInterval(phoneTimerRef.current);
    };
  }, [phoneTimer]);

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (name === "email") setEmailVerified(false);
    if (name === "mobile") setPhoneVerified(false);

    let newValue = value;
    if (name === "mobile" || name === "alternateMobile") {
      newValue = value.replace(/\D/g, "").slice(0, 10);
    }
    
    setContactPerson(prev => ({ ...prev, [name]: newValue }));
  };

  const handleSendEmailOtp = async () => {
    if (!contactPerson.email) {
      Swal.fire({ title: "Error", text: "Please enter your email first.", icon: "error" });
      return;
    }
    setIsEmailLoading(true);
    try {
      const res = await verifyApi.sendEmailOtp(contactPerson.email, "EXHIBITOR");
      if (res.success) {
        setEmailTimer(60);
      } else {
        Swal.fire({ title: "Error", text: res.message || "Failed to send OTP.", icon: "error" });
      }
    } catch (error) {
      Swal.fire({ title: "Error", text: "Failed to send email OTP.", icon: "error" });
    } finally {
      setIsEmailLoading(false);
    }
  };

  const handleVerifyEmailOtp = async () => {
    if (!emailOtp || emailOtp.length < 6) {
      Swal.fire({ title: "Error", text: "Please enter a valid 6-digit OTP.", icon: "error" });
      return;
    }
    setIsEmailLoading(true);
    try {
      const res = await verifyApi.verifyEmailOtp(contactPerson.email, emailOtp);
      if (res.success) {
        setEmailVerified(true);
        setEmailOtp("");
      } else {
        Swal.fire({ title: "Invalid OTP", text: "The OTP is incorrect.", icon: "error" });
      }
    } catch (error) {
      Swal.fire({ title: "Error", text: "Verification failed.", icon: "error" });
    } finally {
      setIsEmailLoading(false);
    }
  };

  const handleSendPhoneOtp = async () => {
    if (!contactPerson.mobile) {
      Swal.fire({ title: "Error", text: "Please enter your mobile number first.", icon: "error" });
      return;
    }
    setIsPhoneLoading(true);
    try {
      const exhibitorName = contactPerson.name || "Exhibitor";
      const phoneToSend = contactPerson.mobile.length === 10 ? `91${contactPerson.mobile}` : contactPerson.mobile;
      const res = await verifyApi.sendPhoneOtp(phoneToSend, "EXHIBITOR", exhibitorName);
      if (res.success) {
        setPhoneTimer(60);
      } else {
        Swal.fire({ title: "Error", text: res.message || "Failed to send OTP.", icon: "error" });
      }
    } catch (error) {
      Swal.fire({ title: "Error", text: "Failed to send WhatsApp OTP.", icon: "error" });
    } finally {
      setIsPhoneLoading(false);
    }
  };

  const handleVerifyPhoneOtp = async () => {
    if (!phoneOtp || phoneOtp.length < 6) {
      Swal.fire({ title: "Error", text: "Please enter a valid 6-digit OTP.", icon: "error" });
      return;
    }
    setIsPhoneLoading(true);
    try {
      const phoneToSend = contactPerson.mobile.length === 10 ? `91${contactPerson.mobile}` : contactPerson.mobile;
      const res = await verifyApi.verifyPhoneOtp(phoneToSend, phoneOtp);
      if (res.success) {
        setPhoneVerified(true);
        setPhoneOtp("");
      } else {
        Swal.fire({ title: "Invalid OTP", text: "The OTP is incorrect.", icon: "error" });
      }
    } catch (error) {
      Swal.fire({ title: "Error", text: "Verification failed.", icon: "error" });
    } finally {
      setIsPhoneLoading(false);
    }
  };

  const stallRate = 11000;
  const amountBeforeGst = stallSize * stallRate;
  const gst = amountBeforeGst * 0.18;
  const totalAmount = amountBeforeGst + gst;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="w-full bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] p-4 md:p-6">

        {/* Header */}
        <div className="mb-2">
          <div className="flex items-center gap-2 mb-2">
            <FileText size={22} className="text-[#176b27]" strokeWidth={2.5} />
            <h2 className="text-[16px] font-semibold uppercase text-[#176b27] tracking-wide">
              2. Participation Details
            </h2>
          </div>
          <p className="text-[14px] font-semibold text-gray-500">
            — Please provide your Bharat Organic Expo participation details.
          </p>
        </div>

        {/* Section 1: Event Details */}
        <div className="flex flex-col gap-4 mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="w-full relative">
              <label className="block text-[11px] font-bold text-gray-700 mb-1">
                Expo Edition <span className="text-red-500">*</span>
              </label>
              <select disabled className="w-full h-[36px] px-3 bg-[#fafbfa] border border-[#e5e7eb] rounded-md text-[13px] font-semibold text-gray-800 appearance-none focus:outline-none">
                <option>Bharat Organic Expo 2027</option>
              </select>
              <ChevronDown size={16} className="absolute right-3 top-[25px] text-gray-400 pointer-events-none" />
            </div>
            <div className="w-full">
              <label className="block text-[11px] font-bold text-gray-700 mb-1">
                Event Dates
              </label>
              <input
                type="text"
                defaultValue="19 - 21 February 2027"
                readOnly
                className="w-full h-[36px] px-3 bg-[#fafbfa] border border-[#e5e7eb] rounded-md text-[13px] font-semibold text-gray-800 focus:outline-none"
              />
            </div>
          </div>
          <div className="w-full">
            <label className="block text-[11px] font-bold text-gray-700 mb-1">
              Venue <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              defaultValue="Bharat Mandapam (Pragati Maidan), New Delhi"
              readOnly
              className="w-full h-[36px] px-3 bg-[#fafbfa] border border-[#e5e7eb] rounded-md text-[13px] font-semibold text-gray-800 focus:outline-none"
            />
          </div>
        </div>

        {/* Section 2: Stall Type */}
        <div className="mb-4">
          <label className="block text-[12px] font-bold text-gray-800 mb-3">
            Stall Type <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {/* Option 1 */}
            <label className="relative cursor-pointer">
              <input type="radio" name="stall_type" defaultChecked className="peer sr-only" />
              <div className="flex flex-col items-center justify-center py-4 px-2 border border-gray-200 hover:border-[#176b27] peer-checked:border-[#176b27] peer-checked:border-2 peer-checked:bg-[#f9fbf9] rounded-lg text-center transition-all h-full">
                <div className="absolute top-2 right-2 text-[#176b27] opacity-0 peer-checked:opacity-100 transition-opacity">
                  <CheckCircle2 size={18} strokeWidth={3} fill="currentColor" className="text-white bg-[#176b27] rounded-full" />
                </div>
                <div className="flex items-center justify-center gap-1.5 mb-1.5">
                  <div className="text-gray-400 peer-checked:text-[#176b27] transition-colors shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3h18v18H3z" /><path d="M3 9h18" /><path d="M9 21V9" /></svg>
                  </div>
                  <span className="text-[13px] font-bold text-gray-700 peer-checked:text-[#176b27] leading-none transition-colors">Shell Scheme</span>
                </div>
                <span className="text-[10px] font-medium text-gray-500 peer-checked:text-gray-600 leading-relaxed transition-colors">Pre-fabricated stall<br />with basic fittings</span>
              </div>
            </label>

            {/* Option 2 */}
            <label className="relative cursor-pointer">
              <input type="radio" name="stall_type" className="peer sr-only" />
              <div className="flex flex-col items-center justify-center py-4 px-2 border border-gray-200 hover:border-[#176b27] peer-checked:border-[#176b27] peer-checked:border-2 peer-checked:bg-[#f9fbf9] rounded-lg text-center transition-all h-full">
                <div className="absolute top-2 right-2 text-[#176b27] opacity-0 peer-checked:opacity-100 transition-opacity">
                  <CheckCircle2 size={18} strokeWidth={3} fill="currentColor" className="text-white bg-[#176b27] rounded-full" />
                </div>
                <div className="flex items-center justify-center gap-1.5 mb-1.5">
                  <div className="text-gray-400 peer-checked:text-[#176b27] transition-colors shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3h18v18H3z" /></svg>
                  </div>
                  <span className="text-[13px] font-bold text-gray-700 peer-checked:text-[#176b27] leading-none transition-colors">Bare Space</span>
                </div>
                <span className="text-[10px] font-medium text-gray-500 peer-checked:text-gray-600 leading-relaxed transition-colors">Open space for custom<br />stall construction</span>
              </div>
            </label>

            {/* Option 3 */}
            <label className="relative cursor-pointer">
              <input type="radio" name="stall_type" className="peer sr-only" />
              <div className="flex flex-col items-center justify-center py-4 px-2 border border-gray-200 hover:border-[#176b27] peer-checked:border-[#176b27] peer-checked:border-2 peer-checked:bg-[#f9fbf9] rounded-lg text-center transition-all h-full">
                <div className="absolute top-2 right-2 text-[#176b27] opacity-0 peer-checked:opacity-100 transition-opacity">
                  <CheckCircle2 size={18} strokeWidth={3} fill="currentColor" className="text-white bg-[#176b27] rounded-full" />
                </div>
                <div className="flex items-center justify-center gap-1.5 mb-1.5">
                  <div className="text-gray-400 peer-checked:text-[#176b27] transition-colors shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /><path d="M2 12h20" /></svg>
                  </div>
                  <span className="text-[13px] font-bold text-gray-700 peer-checked:text-[#176b27] leading-none transition-colors">Country Pavilion</span>
                </div>
                <span className="text-[10px] font-medium text-gray-500 peer-checked:text-gray-600 leading-relaxed transition-colors">Group participation<br />under country pavilion</span>
              </div>
            </label>

            {/* Option 4 */}
            <label className="relative cursor-pointer">
              <input type="radio" name="stall_type" className="peer sr-only" />
              <div className="flex flex-col items-center justify-center py-4 px-2 border border-gray-200 hover:border-[#176b27] peer-checked:border-[#176b27] peer-checked:border-2 peer-checked:bg-[#f9fbf9] rounded-lg text-center transition-all h-full">
                <div className="absolute top-2 right-2 text-[#176b27] opacity-0 peer-checked:opacity-100 transition-opacity">
                  <CheckCircle2 size={18} strokeWidth={3} fill="currentColor" className="text-white bg-[#176b27] rounded-full" />
                </div>
                <div className="flex items-center justify-center gap-1.5 mb-1.5">
                  <div className="text-gray-400 peer-checked:text-[#176b27] transition-colors shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>
                  </div>
                  <span className="text-[13px] font-bold text-gray-700 peer-checked:text-[#176b27] leading-none transition-colors">Other</span>
                </div>
                <span className="text-[10px] font-medium text-gray-500 peer-checked:text-gray-600 leading-relaxed transition-colors">Please specify</span>
              </div>
            </label>
          </div>
        </div>

        {/* Section 3: Dimensions and Rates */}
        <div className="flex flex-col gap-4 mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="w-full relative">
              <label className="block text-[11px] font-bold text-gray-700 mb-1">
                Preferred Stall Size <span className="text-red-500">*</span>
              </label>
              <select
                value={stallSize}
                onChange={(e) => setStallSize(Number(e.target.value))}
                className="w-full h-[36px] px-3 bg-[#fafbfa] border border-[#e5e7eb] rounded-md text-[13px] font-semibold text-gray-800 appearance-none focus:outline-none cursor-pointer"
              >
                <option value={9}>9 sqm</option>
                <option value={12}>12 sqm</option>
                <option value={15}>15 sqm</option>
                <option value={18}>18 sqm</option>
              </select>
              <ChevronDown size={16} className="absolute right-3 top-[25px] text-gray-400 pointer-events-none" />
            </div>
            <div className="w-full">
              <label className="block text-[11px] font-bold text-gray-700 mb-1">
                Preferred Location (Hall / Zone / Area)
              </label>
              <input
                type="text"
                defaultValue="Hall 12 - Organic & Natural Products Zone"
                className="w-full h-[36px] px-3 bg-[#fafbfa] border border-[#e5e7eb] rounded-md text-[13px] font-semibold text-gray-800 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="w-full">
              <label className="block text-[11px] font-bold text-gray-700 mb-1">
                Stall Rate (₹ / sqm)
              </label>
              <input
                type="text"
                defaultValue="₹11,000"
                readOnly
                className="w-full h-[36px] px-3 bg-[#fafbfa] border border-[#e5e7eb] rounded-md text-[13px] font-semibold text-gray-800 focus:outline-none"
              />
            </div>
            <div className="w-full">
              <label className="block text-[11px] font-bold text-gray-700 mb-1">
                Total Area
              </label>
              <input
                type="text"
                value={`${stallSize} sqm`}
                readOnly
                className="w-full h-[36px] px-3 bg-[#fafbfa] border border-[#e5e7eb] rounded-md text-[13px] font-semibold text-gray-800 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="w-full">
              <label className="block text-[11px] font-bold text-gray-700 mb-1">
                Total Stall Amount (Before GST)
              </label>
              <input
                type="text"
                value={formatCurrency(amountBeforeGst)}
                readOnly
                className="w-full h-[36px] px-3 bg-[#fafbfa] border border-[#e5e7eb] rounded-md text-[13px] font-semibold text-gray-800 focus:outline-none"
              />
            </div>
            <div className="w-full">
              <label className="block text-[11px] font-bold text-gray-700 mb-1">
                GST (18%)
              </label>
              <input
                type="text"
                value={formatCurrency(gst)}
                readOnly
                className="w-full h-[36px] px-3 bg-[#fafbfa] border border-[#e5e7eb] rounded-md text-[13px] font-semibold text-gray-800 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Total Amount Green Box */}
        <div className="bg-[#f1f6f1] border border-[#e1eee2] rounded-lg px-5 py-3 flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          <div>
            <div className="text-[12px] font-bold text-[#176b27] mb-1 uppercase tracking-wider">
              Total Amount (Inclusive of GST)
            </div>
            <div className="text-2xl font-bold text-[#176b27]">
              {formatCurrency(totalAmount)}
            </div>
          </div>
          <div className="text-[11px] text-gray-500 font-medium md:w-[40%] leading-relaxed md:text-right">
            This amount is for your reference only. Final invoice will be issued after booking confirmation.
          </div>
        </div>


        {/* Contact Person */}
        <div className="mb-0">
          <div className="flex items-center gap-2 mb-4">
            <User size={18} className="text-[#176b27]" strokeWidth={2.5} />
            <h3 className="text-[13px] font-bold uppercase text-[#176b27] tracking-wide">
              Contact Person for PMS Communication
            </h3>
          </div>

          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="w-full">
                <label className="block text-[11px] font-bold text-gray-700 mb-1">
                  Contact Person Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={contactPerson.name}
                    onChange={handleContactChange}
                    placeholder="e.g. Ms. Ritu Sharma"
                    className="w-full h-[36px] pl-9 pr-3 bg-[#fafbfa] border border-[#e5e7eb] rounded-md text-[13px] font-semibold text-gray-800 focus:outline-none"
                  />
                </div>
              </div>
              <div className="w-full">
                <label className="block text-[11px] font-bold text-gray-700 mb-1">
                  Designation <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="designation"
                  value={contactPerson.designation}
                  onChange={handleContactChange}
                  placeholder="e.g. Operations Manager"
                  className="w-full h-[36px] px-3 bg-[#fafbfa] border border-[#e5e7eb] rounded-md text-[13px] font-semibold text-gray-800 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="w-full">
                <div className="flex justify-between items-center mb-1">
                  <label className="text-[11px] font-bold text-gray-700">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  {!phoneVerified ? (
                    <button
                      type="button"
                      onClick={handleSendPhoneOtp}
                      disabled={isPhoneLoading || phoneTimer > 0}
                      className="inline-flex items-center justify-center h-[18px] bg-[#176b27] text-white text-[9px] font-bold uppercase rounded-[2px] px-2 transition-colors disabled:opacity-50 hover:bg-[#11501d]"
                    >
                      {phoneTimer > 0 ? `Resend ${phoneTimer}s` : "Get OTP"}
                    </button>
                  ) : (
                    <span className="text-[10px] font-bold text-green-600 flex items-center gap-1">
                      <CheckCircle size={12} /> VERIFIED
                    </span>
                  )}
                </div>
                <input
                  type="text"
                  name="mobile"
                  value={contactPerson.mobile}
                  onChange={handleContactChange}
                  readOnly={phoneVerified}
                  placeholder="10-digit mobile number"
                  className={`w-full h-[36px] px-3 bg-[#fafbfa] border rounded-md text-[13px] font-semibold text-gray-800 focus:outline-none ${
                    phoneVerified ? "border-green-500" : "border-[#e5e7eb]"
                  }`}
                />
                {!phoneVerified && phoneTimer > 0 && (
                  <div className="flex gap-1 mt-1 animate-in fade-in slide-in-from-top-1">
                    <input
                      value={phoneOtp}
                      onChange={(e) => setPhoneOtp(e.target.value)}
                      placeholder="6-Digit OTP"
                      maxLength={6}
                      className="h-[32px] border border-[#176b27] bg-white text-gray-900 text-[12px] font-bold text-center tracking-[0.3em] outline-none rounded-md w-full"
                    />
                    <button
                      type="button"
                      onClick={handleVerifyPhoneOtp}
                      disabled={isPhoneLoading}
                      className="inline-flex items-center justify-center h-[32px] bg-[#176b27] text-white text-[11px] font-bold uppercase rounded-md px-4 hover:bg-[#11501d] transition-colors disabled:opacity-50"
                    >
                      Verify
                    </button>
                  </div>
                )}
              </div>

              <div className="w-full">
                <div className="flex justify-between items-center mb-1">
                  <label className="text-[11px] font-bold text-gray-700">
                    Email ID <span className="text-red-500">*</span>
                  </label>
                  {!emailVerified ? (
                    <button
                      type="button"
                      onClick={handleSendEmailOtp}
                      disabled={isEmailLoading || emailTimer > 0}
                      className="inline-flex items-center justify-center h-[18px] bg-[#176b27] text-white text-[9px] font-bold uppercase rounded-[2px] px-2 transition-colors disabled:opacity-50 hover:bg-[#11501d]"
                    >
                      {emailTimer > 0 ? `Resend ${emailTimer}s` : "Get OTP"}
                    </button>
                  ) : (
                    <span className="text-[10px] font-bold text-green-600 flex items-center gap-1">
                      <CheckCircle size={12} /> VERIFIED
                    </span>
                  )}
                </div>
                <input
                  type="email"
                  name="email"
                  value={contactPerson.email}
                  onChange={handleContactChange}
                  readOnly={emailVerified}
                  placeholder="Official Email"
                  className={`w-full h-[36px] px-3 bg-[#fafbfa] border rounded-md text-[13px] font-semibold text-gray-800 focus:outline-none ${
                    emailVerified ? "border-green-500" : "border-[#e5e7eb]"
                  }`}
                />
                {!emailVerified && emailTimer > 0 && (
                  <div className="flex gap-1 mt-1 animate-in fade-in slide-in-from-top-1">
                    <input
                      value={emailOtp}
                      onChange={(e) => setEmailOtp(e.target.value)}
                      placeholder="6-Digit OTP"
                      maxLength={6}
                      className="h-[32px] border border-[#176b27] bg-white text-gray-900 text-[12px] font-bold text-center tracking-[0.3em] outline-none rounded-md w-full"
                    />
                    <button
                      type="button"
                      onClick={handleVerifyEmailOtp}
                      disabled={isEmailLoading}
                      className="inline-flex items-center justify-center h-[32px] bg-[#176b27] text-white text-[11px] font-bold uppercase rounded-md px-4 hover:bg-[#11501d] transition-colors disabled:opacity-50"
                    >
                      Verify
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="w-full">
                <label className="block text-[11px] font-bold text-gray-700 mb-1">
                  Alternate Mobile Number
                </label>
                <input
                  type="text"
                  name="alternateMobile"
                  value={contactPerson.alternateMobile}
                  onChange={handleContactChange}
                  placeholder="10-digit mobile number"
                  className="w-full h-[36px] px-3 bg-[#fafbfa] border border-[#e5e7eb] rounded-md text-[13px] font-semibold text-gray-800 focus:outline-none"
                />
              </div>
              <div className="w-full">
                <label className="block text-[11px] font-bold text-gray-700 mb-1">
                  Landline Number (with STD Code)
                </label>
                <input
                  type="text"
                  name="landline"
                  value={contactPerson.landline}
                  onChange={handleContactChange}
                  placeholder="e.g. 011-45678900"
                  className="w-full h-[36px] px-3 bg-[#fafbfa] border border-[#e5e7eb] rounded-md text-[13px] font-semibold text-gray-800 focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Form Bottom Actions */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-2">
        <button type="button" className="h-[40px] px-5 rounded-md border border-gray-300 text-gray-700 font-bold text-[12px] uppercase tracking-wide hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
          <ArrowLeft size={16} strokeWidth={2.5} /> Back
        </button>
        <button type="button" className="w-full sm:w-auto h-[40px] px-8 rounded-md bg-[#176b27] text-white font-bold text-[12px] uppercase tracking-wide hover:bg-[#115d20] transition-colors flex items-center justify-center gap-2 shadow-md">
          Save & Continue to Documents <ArrowRight size={16} strokeWidth={2.5} />
        </button>
      </div>

    </div>
  );
}

"use client";
import React, { useState, useRef, useEffect } from "react";
import { CheckCircle2, CheckCircle, ShieldCheck, User, Globe, Store, Factory, Laptop, HeartPulse, Leaf, Hotel, Briefcase, ChevronsUpDown, Loader2, X, AlertTriangle } from "lucide-react";
import { verifyApi, buyerApi, settingsApi } from "@/lib/api";
import Swal from "sweetalert2";

// Mock Data
const defaultMockConfig = {
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
  packages: [],
  membershipPackages: [
    // {
    //   category: 'Membership',
    //   name: 'ICOA Standard Buyer Membership',
    //   price: 1999,
    //   badge: 'BASIC',
    //   description: 'Join the ICOA network with standard benefits.',
    //   benefits: ['Access to member directory', 'Monthly newsletter', 'Standard networking events'],
    //   whyChoose: 'Great for new buyers looking to expand their network.',
    //   cta: 'SELECT PLAN',
    //   color: 'blue'
    // },
    // {
    //   category: 'Membership',
    //   name: 'ICOA Premium Buyer Membership',
    //   price: 3999,
    //   badge: 'RECOMMENDED',
    //   description: 'Unlock premium benefits and VIP access.',
    //   benefits: ['All Standard benefits', 'VIP lounge access', 'Priority B2B matchmaking', 'Premium directory listing'],
    //   whyChoose: 'Ideal for serious buyers who want dedicated support.',
    //   cta: 'SELECT PLAN',
    //   color: 'green'
    // },
    // {
    //   category: 'Membership',
    //   name: 'ICOA Elite Buyer Membership',
    //   price: 7999,
    //   badge: 'ELITE',
    //   description: 'The ultimate membership for elite industry leaders.',
    //   benefits: ['All Premium benefits', '1-on-1 introductions', 'Speaking opportunities', 'Dedicated account manager'],
    //   whyChoose: 'For top-tier buyers seeking maximum visibility and influence.',
    //   cta: 'SELECT PLAN',
    //   color: 'purple'
    // }
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

export default function InternationalBuyerForm() {
  const [submitted, setSubmitted] = useState(false);
  const [mockConfig, setMockConfig] = useState<any>(defaultMockConfig);
  const [isVerifying, setIsVerifying] = useState({ email: false, mobile: false });
  const [otpSent, setOtpSent] = useState({ email: false, mobile: false });
  const [otpVerified, setOtpVerified] = useState({ email: false, mobile: false });
  const [otpValue, setOtpValue] = useState({ email: "", mobile: "" });
  const [resendTimers, setResendTimers] = useState({ email: 0, mobile: 0 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [showMembershipOptions, setShowMembershipOptions] = useState(false);
  const [companyProfileFile, setCompanyProfileFile] = useState<File | null>(null);
  const [paymentProofFile, setPaymentProofFile] = useState<File | null>(null);

  const [formData, setFormData] = useState({
    websiteName: "Organicexpo",
    eventName: process.env.NEXT_PUBLIC_EVENT_NAME || "BOE2026",
    fullName: "",
    designation: "",
    companyName: "",
    businessType: "",
    mobileNumber: "",
    alternateNumber: "",
    emailAddress: "",
    website: "",
    country: "",
    registeredAddress: "",
    stateProvince: "",
    city: "",
    pinCode: "",
    companyFirmName: "",
    panNumber: "",
    brandName: "",
    numberOfOutlets: "",
    budgetRange: "",
    b2bMeetInterest: "Yes",
    preferredState: [] as string[],
    buyingFrequency: "",
    experienceWithIndianSuppliers: "",
    preferredMeetingDate: "",
    meetingPriorityLevel: "",
    logisticsRequirements: "",
    preferredPaymentMethods: [] as string[],
    sourceOfInformation: "",
    remarks: "",
    paymentMode: "",
    transactionId: "",
    consentTerms: false,
    consentPaymentValid: false,
    consentMatchedExhibitors: false,
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
  const [requireOtp, setRequireOtp] = useState(true);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const res = await buyerApi.getInternationalConfig();
        if (res?.success && res.data) {
          const cfg = res.data;
          const membershipPackages = cfg.packages?.filter((p: any) => p.category === 'Membership') || [];
          const passPackages = cfg.packages?.filter((p: any) => p.category === 'Pass') || [];

          setMockConfig((prev: any) => ({
            ...prev,
            ...cfg,
            packages: passPackages.length > 0 ? passPackages : prev.packages,
            membershipPackages: membershipPackages.length > 0 ? membershipPackages : prev.membershipPackages
          }));

          if (passPackages.length > 0 && !formData.registrationCategory) {
            setFormData(prev => ({
              ...prev,
              registrationCategory: passPackages[0].name,
              registrationFee: `₹${passPackages[0].price}`
            }));
          }
        }
      } catch (err) {
        console.error("Error fetching config:", err);
      }
    };
    fetchConfig();
  }, []);

  useEffect(() => {
    settingsApi.getSettings().then((res: any) => {
      if (res && res.success && res.data && res.data.requireOtpForVisitorRegistration !== undefined) {
        setRequireOtp(res.data.requireOtpForVisitorRegistration);
      }
    }).catch((err: any) => console.error(err));
  }, []);
  const handleChange = (e: any) => {
    let { name, value } = e.target;

    // Numeric field validations (no chars, spaces allowed)
    if (name === 'mobileNumber' || name === 'alternateNumber') {
      value = value.replace(/\D/g, '').slice(0, 10);
    }
    if (name === 'pinCode') {
      value = value.replace(/\D/g, '').slice(0, 6);
    }
    if (name === 'yearOfEstablishment' || name === 'yearsInBusiness' || name === 'numberOfOutlets') {
      value = value.replace(/\D/g, '');
      if (name === 'yearOfEstablishment') value = value.slice(0, 4);
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: any) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSimulateOtp = async (type: 'email' | 'mobile') => {
    const value = type === 'email' ? formData.emailAddress : formData.mobileNumber;
    if (!value) return;

    setIsVerifying(prev => ({ ...prev, [type]: true }));
    try {
      const res = type === 'email'
        ? await verifyApi.sendEmailOtp(value, 'BUYER')
        : await verifyApi.sendPhoneOtp(value, 'BUYER', formData.fullName);

      if (res && res.success) {
        setOtpSent(prev => ({ ...prev, [type]: true }));
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
    const value = type === 'email' ? formData.emailAddress : formData.mobileNumber;
    const otp = type === 'email' ? otpValue.email : otpValue.mobile;
    if (!otp || otp.length !== 6) {
      Swal.fire({ scrollbarPadding: false, icon: 'warning', title: 'Invalid OTP', text: 'Please enter a valid 6-digit OTP.' });
      return;
    }
    setIsVerifying(prev => ({ ...prev, [type]: true }));
    try {
      const res = type === 'email'
        ? await verifyApi.verifyEmailOtp(value, otp)
        : await verifyApi.verifyPhoneOtp(value, otp);

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

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const submitFinal = async (pkg: any, transactionId: string, paymentStatus: string = "Completed") => {
    setIsSubmitting(true);
    try {
      const dataToSubmit = new FormData();

      // Map flat formData to the InternationalBuyer backend schema
      const mappedData = {
        eventName: formData.eventName,
        brandName: formData.companyName || 'N/A',
        countryOfRegistration: formData.country || 'N/A',
        address: formData.registeredAddress || 'N/A',
        city: formData.city || 'N/A',
        stateProvince: formData.stateProvince || 'N/A',
        country: formData.country || 'N/A',
        website: formData.website || '',
        primaryContact: JSON.stringify({
          fullName: formData.fullName || 'N/A',
          designation: formData.designation || 'N/A',
          mobileNumber: formData.mobileNumber || 'N/A',
          emailId: formData.emailAddress || 'N/A'
        })
      };

      Object.entries(mappedData).forEach(([key, value]) => {
        dataToSubmit.append(key, value);
      });

      // Also append the original flattened data in case the backend needs it for emails
      Object.entries(formData).forEach(([key, value]) => {
        if (!Object.prototype.hasOwnProperty.call(mappedData, key) && key !== 'primaryContact') {
          if (Array.isArray(value)) {
            value.forEach(v => dataToSubmit.append(key + '[]', String(v)));
          } else {
            let valToAppend = value;
            if (key === 'paymentMode' && !value) valToAppend = 'Online/Razorpay';
            dataToSubmit.append(key, String(valToAppend));
          }
        }
      });

      dataToSubmit.append('registrationCategory', pkg.name);
      dataToSubmit.append('registrationFee', `$${pkg.price}`);
      dataToSubmit.append('transactionId', transactionId);
      dataToSubmit.append('paymentStatus', paymentStatus);

      if (companyProfileFile) dataToSubmit.append('companyBrochure', companyProfileFile);
      if (paymentProofFile) dataToSubmit.append('paymentScreenshot', paymentProofFile);

      const res = await buyerApi.submitInternationalBuyer(dataToSubmit);
      if (res && res.success !== false) {
        setSubmitted(true);
      } else {
        Swal.fire('Error', res?.message || 'Submission failed', 'error');
      }
    } catch (err) {
      Swal.fire('Error', 'Something went wrong', 'error');
    }
    setIsSubmitting(false);
  };

  const initiateRazorpayPayment = async (pkg: any) => {
    if (pkg.price === 0) {
      await submitFinal(pkg, "N/A");
      return;
    }

    const razorpayLoaded = await loadRazorpayScript();
    if (!razorpayLoaded) {
      Swal.fire({ icon: 'error', title: 'Error', text: 'Failed to load payment gateway.', scrollbarPadding: false });
      return;
    }

    const gatewayPrice = Math.round(pkg.price * 1.025);
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID
        || "rzp_test_RTd9y3ngRanKxq",
      amount: gatewayPrice * 100,
      currency: "USD",
      name: "BOE 2027",
      description: `${pkg.name} Registration`,
      handler: async function (response: any) {
        setFormData(prev => ({ ...prev, registrationCategory: pkg.name, registrationFee: `$${pkg.price}`, transactionId: response.razorpay_payment_id }));
        await submitFinal(pkg, response.razorpay_payment_id, "Completed");
      },
      prefill: {
        name: formData.fullName,
        email: formData.emailAddress,
        contact: formData.mobileNumber
      },
      theme: { color: "#4d7f1d" },
      modal: {
        confirm_close: true,
        ondismiss: function () {
          Swal.fire({ icon: 'warning', title: 'Cancelled', text: 'Payment cancelled.', scrollbarPadding: false });
        }
      }
    };
    const razorpay = new (window as any).Razorpay(options);
    razorpay.on('payment.failed', async function (response: any) {
      Swal.fire({ icon: 'error', title: 'Failed', text: 'Payment failed.', scrollbarPadding: false });
      await submitFinal(pkg, response.error?.metadata?.payment_id || "FAILED", "Failed");
    });
    razorpay.open();
  };

  const handlePackageSelection = (pkg: any) => {
    if (!formRef.current) return;
    if (!formRef.current.checkValidity()) {
      formRef.current.classList.add('was-validated');
      Swal.fire({ icon: 'warning', title: 'Incomplete Form', text: 'Please fill out all required fields before selecting a package.', scrollbarPadding: false });
      const firstInvalid = formRef.current.querySelector(':invalid');
      if (firstInvalid) {
        firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }
    if (requireOtp && (!otpVerified.email || !otpVerified.mobile)) {
      Swal.fire({ icon: 'warning', title: 'Verification Required', text: 'Please verify OTP for both Email and Mobile.', scrollbarPadding: false });
      return;
    }
    initiateRazorpayPayment(pkg);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
          Thank you for registering as an International Buyer at Bharat Organic Expo 2027. A confirmation will be sent to your email.
        </p>
        <div className="mt-8 px-6 py-3 rounded-xl bg-[#4d7f1d] text-white text-sm font-bold uppercase tracking-wider">
          19 – 21 February 2027 · Hall 12, Bharat Mandapam
        </div>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} onInvalid={(e) => (e.currentTarget as HTMLFormElement).classList.add('was-validated')} className="w-full space-y-2 animate-in fade-in duration-500">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-[#4d7f1d] flex items-center justify-center shrink-0 shadow-md">
          <Globe size={18} className="text-white" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-[#1a3352] uppercase tracking-wide font-poppins">International Buyer Registration</h3>
          <p className="text-[12px] text-gray-500 font-medium">Bharat Organic Expo 2027</p>
        </div>
      </div>

      <div>
        <div className={sectionTitleWrapperClasses}><h3 className={sectionTitleClasses}>1. Personal & Company Information</h3></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-x-3 gap-y-3">
          <div><label className={labelClasses}>Full Name <span className="text-red-600">*</span></label><input required name="fullName" value={formData.fullName} onChange={handleChange} placeholder="As per ID Proof" className={inputClasses} /></div>
          <div><label className={labelClasses}>Designation <span className="text-red-600">*</span></label><input required name="designation" value={formData.designation} onChange={handleChange} placeholder="Current Position" className={inputClasses} /></div>
          <div><label className={labelClasses}>Company Name <span className="text-red-600">*</span></label><input required name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Full Registered Name" className={inputClasses} /></div>
          <div><label className={labelClasses}>Brand Name</label><input name="brandName" value={formData.brandName} onChange={handleChange} placeholder="Brand Name" className={inputClasses} /></div>
          <div><label className={labelClasses}>PAN Number</label><input name="panNumber" value={formData.panNumber} onChange={handleChange} placeholder="PAN Number" className={inputClasses} /></div>
          <div>
            <label className={labelClasses}>Business Role <span className="text-red-600">*</span></label>
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
        <div className={sectionTitleWrapperClasses}><h3 className={sectionTitleClasses}>2. Contact Information</h3></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-3">
          <div className="space-y-1">
            <label className={labelClasses}>Mobile Number (10 digits) <span className="text-red-600">*</span></label>
            <div className="flex gap-2 h-7">
              <input required type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} placeholder="10-digit number" className={`${inputClasses} h-full`} disabled={otpVerified.mobile} />
              {requireOtp && !otpVerified.mobile && !otpSent.mobile && (
                <button type="button" onClick={() => handleSimulateOtp('mobile')} disabled={!formData.mobileNumber || isVerifying.mobile} className={`bg-[#4d7f1d] text-white px-3 rounded text-[10px] uppercase font-bold transition hover:bg-[#3b6315] h-full disabled:opacity-50`}>
                  {isVerifying.mobile ? <Loader2 className="animate-spin" size={14} /> : 'OTP'}
                </button>
              )}
              {requireOtp && otpSent.mobile && !otpVerified.mobile && (
                <>
                  <button type="button" onClick={() => handleVerifyOtp('mobile')} className={`bg-[#23471d] text-white px-3 rounded-[2px] transition hover:bg-[#1a3516] h-full ${buttonTextClasses}`}>
                    {isVerifying.mobile ? <Loader2 className="animate-spin" size={14} /> : 'Verify'}
                  </button>
                  <button type="button" onClick={() => handleSimulateOtp('mobile')} disabled={resendTimers.mobile > 0 || isVerifying.mobile} className={`bg-gray-200 text-gray-700 px-3 rounded-[2px] transition hover:bg-gray-300 h-full ${buttonTextClasses || ''} disabled:opacity-50`}>
                    {resendTimers.mobile > 0 ? `Resend (${resendTimers.mobile}s)` : 'Resend'}
                  </button>
                </>
              )}
              {requireOtp && otpVerified.mobile && <CheckCircle size={18} className="text-emerald-600 self-center shrink-0 ml-2" />}
            </div>
            {requireOtp && otpSent.mobile && !otpVerified.mobile && (
              <input type="text" placeholder="Enter OTP" value={otpValue.mobile} onChange={e => setOtpValue(p => ({ ...p, mobile: e.target.value }))} className={`${inputClasses} mt-2 text-center tracking-widest`} />
            )}
          </div>
          <div><label className={labelClasses}>Alternate Number <span className="text-red-600">*</span></label><input required type="tel" name="alternateNumber" value={formData.alternateNumber} onChange={handleChange} placeholder="Alternate number" className={inputClasses} /></div>
          <div className="space-y-1">
            <label className={labelClasses}>Email Address (OTP) <span className="text-red-600">*</span></label>
            <div className="flex gap-2 h-7">
              <input required type="email" name="emailAddress" value={formData.emailAddress} onChange={handleChange} placeholder="Work Email" className={`${inputClasses} h-full`} disabled={otpVerified.email} />
              {requireOtp && !otpVerified.email && !otpSent.email && (
                <button type="button" onClick={() => handleSimulateOtp('email')} disabled={!formData.emailAddress || isVerifying.email} className={`bg-[#4d7f1d] text-white px-3 rounded text-[10px] uppercase font-bold transition hover:bg-[#3b6315] h-full disabled:opacity-50`}>
                  {isVerifying.email ? <Loader2 className="animate-spin" size={14} /> : 'OTP'}
                </button>
              )}
              {requireOtp && otpSent.email && !otpVerified.email && (
                <>
                  <button type="button" onClick={() => handleVerifyOtp('email')} className={`bg-[#23471d] text-white px-3 rounded-[2px] transition hover:bg-[#1a3516] h-full ${buttonTextClasses}`}>
                    {isVerifying.email ? <Loader2 className="animate-spin" size={14} /> : 'Verify'}
                  </button>
                  <button type="button" onClick={() => handleSimulateOtp('email')} disabled={resendTimers.email > 0 || isVerifying.email} className={`bg-gray-200 text-gray-700 px-3 rounded-[2px] transition hover:bg-gray-300 h-full ${buttonTextClasses || ''} disabled:opacity-50`}>
                    {resendTimers.email > 0 ? `Resend (${resendTimers.email}s)` : 'Resend'}
                  </button>
                </>
              )}
              {requireOtp && otpVerified.email && <CheckCircle size={18} className="text-emerald-600 self-center shrink-0 ml-2" />}
            </div>
            {requireOtp && otpSent.email && !otpVerified.email && (
              <input type="text" placeholder="Enter OTP" value={otpValue.email} onChange={e => setOtpValue(p => ({ ...p, email: e.target.value }))} className={`${inputClasses} mt-2 text-center tracking-widest`} />
            )}
          </div>
          <div><label className={labelClasses}>Website (Optional)</label><input type="url" name="website" value={formData.website} onChange={handleChange} placeholder="https://..." className={inputClasses} /></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-3 gap-y-3 mt-4">
          <div><label className={labelClasses}>Country <span className="text-red-600">*</span></label><input required name="country" value={(formData as any).country || ""} onChange={handleChange} placeholder="e.g. USA" className={inputClasses} /></div>
          <div><label className={labelClasses}>Registered Address <span className="text-red-600">*</span></label><input required name="registeredAddress" value={formData.registeredAddress} onChange={handleChange} placeholder="Full Corporate Address" className={inputClasses} /></div>
          <div><label className={labelClasses}>State/Province <span className="text-red-600">*</span></label><input required name="stateProvince" value={formData.stateProvince} onChange={handleChange} placeholder="e.g. Maharashtra" className={inputClasses} /></div>
          <div><label className={labelClasses}>City <span className="text-red-600">*</span></label><input required name="city" value={formData.city} onChange={handleChange} placeholder="e.g. Mumbai" className={inputClasses} /></div>
          <div><label className={labelClasses}>Pin Code <span className="text-red-600">*</span></label><input required name="pinCode" value={formData.pinCode} onChange={handleChange} placeholder="6-digit code" className={inputClasses} maxLength={6} /></div>
        </div>
      </div>

      <div>
        <div className={sectionTitleWrapperClasses}><h3 className={sectionTitleClasses}>3. Company Business Profile</h3></div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-3">
          <div><label className={labelClasses}>Company / Firm Name <span className="text-red-600">*</span></label><input required name="companyFirmName" value={formData.companyFirmName} onChange={handleChange} className={inputClasses} /></div>
          <div><label className={labelClasses}>Business Type <span className="text-red-600">*</span></label><select required name="basicBusinessType" value={formData.basicBusinessType} onChange={handleChange} className={inputClasses}><option value="">Select</option><option value="Proprietorship">Proprietorship</option><option value="Partnership">Partnership</option><option value="Pvt Ltd">Pvt Ltd</option><option value="LLP">LLP</option></select></div>
          <div><label className={labelClasses}>Year of Est. <span className="text-red-600">*</span></label><input required type="text" inputMode="numeric" name="yearOfEstablishment" value={formData.yearOfEstablishment} onChange={handleChange} placeholder="e.g. 2010" className={inputClasses} /></div>
          <div><label className={labelClasses}>GST Number (Optional)</label><input name="gstNumber" value={formData.gstNumber} onChange={handleChange} className={inputClasses} /></div>
          <div><label className={labelClasses}>Buyer Industry <span className="text-red-600">*</span></label><select required name="buyerIndustry" value={formData.buyerIndustry} onChange={handleChange} className={inputClasses}><option value="">Select Industry</option>{mockConfig.primaryProductInterests.map((i: string) => <option key={i} value={i}>{i}</option>)}</select></div>
          <div><label className={labelClasses}>Nature of Business <span className="text-red-600">*</span></label><input required name="natureOfBusiness" value={formData.natureOfBusiness} onChange={handleChange} className={inputClasses} /></div>
          <div><label className={labelClasses}>Years in Business <span className="text-red-600">*</span></label><input required type="text" inputMode="numeric" name="yearsInBusiness" value={formData.yearsInBusiness} onChange={handleChange} className={inputClasses} /></div>
          <div><label className={labelClasses}>Annual Turnover <span className="text-red-600">*</span></label><select required name="annualTurnover" value={formData.annualTurnover} onChange={handleChange} className={inputClasses}><option value="">Select Range</option>{mockConfig.annualPurchaseValueRanges.map((r: string) => <option key={r} value={r}>{r}</option>)}</select></div>
        </div>
      </div>

      <div>
        <div className={sectionTitleWrapperClasses}><h3 className={sectionTitleClasses}>4. Sourcing & Buying Interests</h3></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-x-3 gap-y-3">
          <div><label className={labelClasses}>Primary Product Interest <span className="text-red-600">*</span></label><select required name="primaryProductInterest" value={formData.primaryProductInterest} onChange={handleChange} className={inputClasses}><option value="">Choose Interest</option>{mockConfig.primaryProductInterests.map((i: string) => <option key={i} value={i}>{i}</option>)}</select></div>
          <div className="space-y-1 z-40">
            <label className={labelClasses}>Secondary Product Categories</label>
            <MultiSelectDropdown options={mockConfig.secondaryProductCategories} selected={formData.secondaryProductCategories} onChange={(val: any) => handleSelectChange('secondaryProductCategories', val)} placeholder="Select categories..." accentColor="emerald" />
          </div>
          <div><label className={labelClasses}>Interested in Importing?</label><select name="interestedInImporting" value={formData.interestedInImporting} onChange={handleChange} className={inputClasses}><option value="No">No</option><option value="Yes">Yes</option></select></div>
          <div><label className={labelClasses}>Interested in Exporting?</label><select name="interestedInExporting" value={formData.interestedInExporting} onChange={handleChange} className={inputClasses}><option value="No">No</option><option value="Yes">Yes</option></select></div>
          <div><label className={labelClasses}>Business Model Preference</label><select name="businessModelPreference" value={formData.businessModelPreference} onChange={handleChange} className={inputClasses}><option value="">Select Model</option>{mockConfig.businessModelOptions.map((m: string) => <option key={m} value={m}>{m}</option>)}</select></div>
          <div><label className={labelClasses}>Estimated Monthly Purchase</label><input name="estimatedPurchaseVolume" value={formData.estimatedPurchaseVolume} onChange={handleChange} placeholder="e.g. 5000" className={inputClasses} /></div>
          <div><label className={labelClasses}>Est. Annual Purchase Value <span className="text-red-600">*</span></label><select required name="estimatedAnnualPurchaseValue" value={formData.estimatedAnnualPurchaseValue} onChange={handleChange} className={inputClasses}><option value="">Select Range</option>{mockConfig.annualPurchaseValueRanges.map((v: string) => <option key={v} value={v}>{v}</option>)}</select></div>
          <div><label className={labelClasses}>Purchase Frequency</label><select name="purchaseFrequency" value={formData.purchaseFrequency} onChange={handleChange} className={inputClasses}><option value="">Select Frequency</option>{mockConfig.purchaseFrequencyOptions.map((f: string) => <option key={f} value={f}>{f}</option>)}</select></div>
          <div><label className={labelClasses}>Purchase Timeline <span className="text-red-600">*</span></label><select required name="purchaseTimeline" value={formData.purchaseTimeline} onChange={handleChange} className={inputClasses}><option value="">Select</option>{mockConfig.purchaseTimelines.map((t: string) => <option key={t} value={t}>{t}</option>)}</select></div>
          <div><label className={labelClasses}>Matchmaking Interest <span className="text-red-600">*</span></label><select required name="matchmakingInterest" value={formData.matchmakingInterest} onChange={handleChange} className={inputClasses}><option value="Yes">Yes</option><option value="No">No</option></select></div>
          <div><label className={labelClasses}>Role in Purchase Decision <span className="text-red-600">*</span></label><select required name="roleInPurchaseDecision" value={formData.roleInPurchaseDecision} onChange={handleChange} className={inputClasses}><option value="">Select Role</option>{mockConfig.roles.map((r: string) => <option key={r} value={r}>{r}</option>)}</select></div>
          <div><label className={labelClasses}>Specific Product Requirements</label><input name="specificProductRequirements" value={formData.specificProductRequirements} onChange={handleChange} placeholder="Any custom needs..." className={inputClasses} /></div>
        </div>
      </div>

      <div>
        <div className={sectionTitleWrapperClasses}><h3 className={sectionTitleClasses}>5. Supplier Preference</h3></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-3">
          <div className="space-y-1 z-30">
            <label className={labelClasses}>Preferred Supplier Region <span className="text-red-600">*</span></label>
            <MultiSelectDropdown options={mockConfig.regions} selected={formData.preferredSupplierRegion} onChange={(val: any) => handleSelectChange('preferredSupplierRegion', val)} placeholder="Select regions..." accentColor="emerald" />
          </div>
          <div className="space-y-1 z-30">
            <label className={labelClasses}>Preferred Supplier Type <span className="text-red-600">*</span></label>
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
        <div className={sectionTitleWrapperClasses}><h3 className={sectionTitleClasses}>6. Pricing Preference</h3></div>
        <div className="flex gap-6 mt-2">
          {['Premium', 'Mid-Range', 'Budget'].map(pref => (
            <label key={pref} className="flex items-center gap-2 text-[12px] font-medium text-slate-700 cursor-pointer">
              <input type="radio" name="pricingPreference" value={pref} checked={formData.pricingPreference === pref} onChange={handleChange} className="w-4 h-4 text-[#4d7f1d] focus:ring-[#4d7f1d] accent-[#23471d]" /> {pref}
            </label>
          ))}
        </div>
      </div>

      <div>
        <div className={sectionTitleWrapperClasses}><h3 className={sectionTitleClasses}>7. B2B Meeting Preferences</h3></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-3 gap-y-3">
          <div className="space-y-1 z-20">
            <label className={labelClasses}>Preferred Meeting Categories <span className="text-red-600">*</span></label>
            <MultiSelectDropdown options={mockConfig.meetingCategoryOptions} selected={formData.preferredMeetingCategories} onChange={(val: any) => handleSelectChange('preferredMeetingCategories', val)} placeholder="Select categories..." accentColor="emerald" />
          </div>
          <div className="space-y-1 z-20">
            <label className={labelClasses}>Exhibitor Types to Meet</label>
            <MultiSelectDropdown options={mockConfig.exhibitorTypeOptions} selected={formData.preferredExhibitorTypes} onChange={(val: any) => handleSelectChange('preferredExhibitorTypes', val)} placeholder="Select exhibitor types..." accentColor="emerald" />
          </div>
          <div className="space-y-1 z-20">
            <label className={labelClasses}>Meeting Objectives <span className="text-red-600">*</span></label>
            <MultiSelectDropdown options={mockConfig.meetingObjectiveOptions} selected={formData.meetingObjectives} onChange={(val: any) => handleSelectChange('meetingObjectives', val)} placeholder="Select objectives..." accentColor="amber" />
          </div>
          <div className="space-y-1 z-20">
            <label className={labelClasses}>Preferred Business Type <span className="text-red-600">*</span></label>
            <MultiSelectDropdown options={mockConfig.preferredBusinessTypeOptions} selected={formData.preferredBusinessTypes} onChange={(val: any) => handleSelectChange('preferredBusinessTypes', val)} placeholder="Select business types..." accentColor="blue" />
          </div>
          <div><label className={labelClasses}>Preferred Day <span className="text-red-600">*</span></label><select required name="preferredMeetingDay" value={formData.preferredMeetingDay} onChange={handleChange} className={inputClasses}><option value="">Select Day</option>{mockConfig.meetingDayOptions.map((d: string) => <option key={d} value={d}>{d}</option>)}</select></div>
          <div><label className={labelClasses}>Time Slot <span className="text-red-600">*</span></label><select required name="preferredTimeSlot" value={formData.preferredTimeSlot} onChange={handleChange} className={inputClasses}><option value="">Select Slot</option><option value="Morning (10AM - 1PM)">Morning (10AM - 1PM)</option><option value="Afternoon (2PM - 4PM)">Afternoon (2PM - 4PM)</option></select></div>
          <div><label className={labelClasses}>Number of Meetings</label><select name="numberOfMeetingsInterested" value={formData.numberOfMeetingsInterested} onChange={handleChange} className={inputClasses}><option value="">Select Count</option><option value="3-5 Meetings">3-5 Meetings</option><option value="5-10 Meetings">5-10 Meetings</option></select></div>
          <div className="md:col-span-2 lg:col-span-2">
            <label className={labelClasses}>Specific Meeting Requirements</label>
            <textarea name="meetingRequirements" value={formData.meetingRequirements} onChange={handleChange} placeholder="Mention specific expectations..." className={`${inputClasses} h-auto py-2 resize-none`} rows={1}></textarea>
          </div>
        </div>
      </div>

      <div>
        <div className={sectionTitleWrapperClasses}><h3 className={sectionTitleClasses}>Select Registration Package</h3></div>
        <div className="relative">
          {!showMembershipOptions ? (
            <div className="space-y-4">
              <div className="flex items-center gap-2 px-2 mt-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <p className="text-[11px] font-black text-slate-600 uppercase tracking-[0.2em] font-sans">Available Registration Passes</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
                {mockConfig.packages?.map((pkg: any) => {
                  const isSelected = formData.registrationCategory === pkg.name;
                  const colorMap: Record<string, any> = {
                    blue: { border: 'border-blue-400 bg-blue-50/10', accent: 'text-blue-700', badge: 'bg-emerald-500' },
                    yellow: { border: 'border-amber-400 bg-amber-50/10', accent: 'text-amber-700', badge: 'bg-amber-400' },
                    green: { border: 'border-emerald-400 bg-emerald-50/10', accent: 'text-emerald-700', badge: 'bg-emerald-500' },
                    red: { border: 'border-red-400 bg-red-50/10', accent: 'text-red-700', badge: 'bg-red-500' }
                  };
                  const theme = colorMap[pkg.color] || colorMap.blue;

                  return (
                    <div
                      key={pkg.name}
                      onClick={() => handlePackageSelection(pkg)}
                      className={`relative bg-green-500/10 p-5 border-2 transition-all cursor-pointer rounded-xl flex flex-col h-full group 
                            ${isSelected ? `border-[#23471d]  shadow-2xl ring-2 ring-emerald-100 scale-[1.02] z-10` : `border-green-200  hover:border-emerald-300 hover:shadow-lg`}
                        `}
                    >
                      {pkg.badge && (
                        <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest shadow-sm z-20 text-white ${theme.badge}`}>
                          ⭐ {pkg.badge}
                        </div>
                      )}

                      <div className="mb-3">
                        <h4 className="text-[15px] font-semibold leading-tight text-slate-800 group-hover:text-[#23471d] transition-colors">
                          {pkg.name} – {pkg.price === 0 ? "Free" : `$${pkg.price}`}
                        </h4>
                        {pkg.tagline && (
                          <p className={`text-[10px] font-bold uppercase tracking-tight mt-1 ${theme.accent}`}>
                            {pkg.tagline}
                          </p>
                        )}
                      </div>

                      <div className="flex-1 space-y-4">
                        {pkg.description && (
                          <p className="text-[11px] text-slate-500 leading-relaxed italic border-l-2 border-slate-200 pl-2">
                            {pkg.description}
                          </p>
                        )}

                        {pkg.benefits && pkg.benefits.length > 0 && (
                          <div className="space-y-1.5">
                            <p className="text-[9px] font-black text-gray-500 uppercase tracking-widest">What You Get:</p>
                            <ul className="text-[11px] text-gray-700 space-y-1.5 font-medium">
                              {pkg.benefits.map((b: string, i: number) => (
                                <li key={i} className="flex items-start gap-2">
                                  <CheckCircle size={12} className="text-emerald-500 mt-0.5 shrink-0" />
                                  <span>{b}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {pkg.whyChoose && (
                          <div className={`p-2 rounded-lg ${theme.border} border`}>
                            <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Why Choose This:</p>
                            <p className="text-[10px] text-slate-700 font-semibold leading-snug">
                              {pkg.whyChoose}
                            </p>
                          </div>
                        )}
                      </div>

                      <div className={`mt-4 w-full py-2.5 text-white rounded-lg bg-green-600 hover:bg-green-700 text-center text-[11px] font-medium uppercase tracking-widest transition-all 
                            ${isSelected ? ' shadow-lg' : ''}
                        `}>
                        {pkg.cta || "Select Plan"}
                      </div>
                    </div>
                  );
                })}

                {mockConfig.membershipPackages && mockConfig.membershipPackages.length > 0 && (
                  <div className="relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-md text-white bg-emerald-500 whitespace-nowrap">
                      ⭐ Recommended
                    </div>

                    <div
                      onClick={() => setShowMembershipOptions(true)}
                      className="relative border-2 border-dashed border-emerald-300 transition-all rounded-xl cursor-pointer hover:border-emerald-400 overflow-hidden"
                      style={{
                        backgroundImage: 'url(/buyer/optionbg.webp)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        minHeight: '120px',
                      }}
                    >
                      <div className="absolute inset-0 rounded-xl"
                        style={{ background: 'linear-gradient(135deg, rgba(26,61,20,0.82) 0%, rgba(74,143,47,0.55) 100%)' }}
                      />

                      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 pt-6 pb-6 gap-3">
                        <div className="flex flex-col items-center gap-1">
                          <img loading="lazy" decoding="async" src="/assets/registration/icoa.webp"
                            alt="ICOA"
                            className="w-48 h-auto object-contain"
                            style={{
                              filter: 'drop-shadow(0 0 12px rgba(168,208,96,0.9)) drop-shadow(0 0 24px rgba(168,208,96,0.5)) drop-shadow(0 0 40px rgba(168,208,96,0.3))',
                            }}
                          />
                          <p
                            className="text-lg font-bold uppercase tracking-[0.18em] text-center mt-2"
                            style={{
                              background: 'linear-gradient(90deg, #a8d060, #d4f07a, #a8d060)',
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              textShadow: 'none',
                            }}
                          >
                            International Council of Ayush
                          </p>
                        </div>

                        <h4
                          className="text-[15px] font-black text-white text-center leading-tight mt-2"
                          style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}
                        >
                          Unlock <span className="text-[#a8d060]">Premium</span> Membership
                        </h4>

                        <p className="text-sm text-white/80 text-center leading-relaxed px-2 mt-1">
                          Join ICOA's exclusive network of<br />
                          Ayush professionals & wellness brands.<br />
                          Get certified, grow your reach,<br />
                          and unlock global opportunities.
                        </p>

                        <button
                          type="button"
                          className="flex items-center gap-3 px-5 py-1 rounded-lg font-medium uppercase tracking-widest text-[11px] text-white w-fit mt-2"
                          style={{
                            background: 'linear-gradient(135deg, #2d7a1f, #4a9e2f)',
                            border: '1.5px solid rgba(168,208,96,0.6)',
                            animation: 'gentlePulse 2s ease-in-out infinite',
                          }}
                        >
                          Register Now
                          <span
                            className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                            style={{ background: 'rgba(168,208,96,0.25)', border: '1px solid rgba(168,208,96,0.5)' }}
                          >
                            <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M5 12h14M13 6l6 6-6 6" />
                            </svg>
                          </span>
                        </button>
                      </div>

                      <style>{`
                        @keyframes gentlePulse {
                          0%, 100% { box-shadow: 0 0 8px rgba(168,208,96,0.5); }
                          50%       { box-shadow: 0 0 18px rgba(168,208,96,0.9); }
                        }
                      `}</style>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between px-2 mt-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  <p className="text-[11px] font-black text-slate-600 uppercase tracking-[0.2em] font-sans">Exclusive Membership Plans</p>
                </div>
                <button
                  type="button"
                  onClick={() => setShowMembershipOptions(false)}
                  className="text-[10px] font-bold text-slate-500 uppercase tracking-widest hover:text-slate-800 transition-colors"
                >
                  ← Back to Passes
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch mt-4 lg:max-w-[1050px]">
                {mockConfig.membershipPackages?.map((pkg: any) => {
                  const isSelected = formData.registrationCategory === pkg.name;

                  return (
                    <div
                      key={pkg.name}
                      onClick={() => handlePackageSelection(pkg)}
                      className={`relative bg-green-500/10 p-5 border-2 transition-all rounded-xl flex flex-col h-full group cursor-pointer
                          ${isSelected ? `border-[#23471d] shadow-2xl ring-1 ring-emerald-100 scale-[1.02] z-10` : `border-green-100 hover:border-emerald-300 hover:shadow-lg`}
                      `}
                    >
                      {pkg.badge && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest shadow-sm z-20 text-white bg-emerald-500">
                          ⭐ {pkg.badge}
                        </div>
                      )}

                      <div className="mb-3">
                        <h4 className={`text-[15px] font-semibold leading-tight text-slate-800 group-hover:text-[#23471d] transition-colors`}>
                          {pkg.name} – {pkg.price === 0 ? "Free" : `$${pkg.price}`}
                        </h4>
                        {pkg.tagline && (
                          <p className={`text-[10px] font-bold uppercase tracking-tight mt-1 text-slate-500`}>
                            {pkg.tagline}
                          </p>
                        )}
                      </div>

                      <div className="flex-1 space-y-4">
                        <p className="text-[11px] text-slate-600 leading-relaxed italic border-l-2 border-slate-200 pl-2">
                          {pkg.description}
                        </p>

                        <div className="space-y-1.5 bg-white/50 p-2.5 rounded-lg border border-slate-200/50">
                          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Membership Benefits:</p>
                          <ul className="text-[11px] text-slate-700 space-y-2 font-medium">
                            {pkg.benefits?.map((b: string, i: number) => (
                              <li key={i} className="flex items-start gap-2">
                                <CheckCircle size={12} className="text-emerald-500 mt-0.5 shrink-0" />
                                <span className="leading-snug">{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="flex justify-center mt-4">
                        <button
                          type="button"
                          className={`flex justify-between items-center gap-3 px-5 py-1 rounded-lg font-medium uppercase tracking-widest text-[11px] text-white w-fit ${isSelected ? 'bg-[#23471d]' : 'bg-green-600 hover:bg-green-700'}`}
                        >
                          <span>{isSelected ? "SELECTED" : (pkg.cta || "SELECT PLAN")}</span>
                          <span
                            className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                            style={{ background: 'rgba(255,255,255,0.2)', border: '1.5px solid rgba(255,255,255,0.4)' }}
                          >
                            <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M5 12h14M13 6l6 6-6 6" />
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      <div><div className={sectionTitleWrapperClasses}><h3 className={sectionTitleClasses}>Document Uploads</h3></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div><label className={labelClasses}>Company Profile (PDF/Word) <span className="text-red-600">*</span></label><input required type="file" accept=".pdf,.doc,.docx" onChange={(e) => { if (e.target.files && e.target.files.length > 0) setCompanyProfileFile(e.target.files[0]) }} className={inputClasses + " py-1"} /></div>
          <div><label className={labelClasses}>Payment Proof (if applicable)</label><input type="file" accept=".png,.jpg,.jpeg,.pdf" onChange={(e) => { if (e.target.files && e.target.files.length > 0) setPaymentProofFile(e.target.files[0]) }} className={inputClasses + " py-1"} /></div>
        </div></div>

      <div><div className={sectionTitleWrapperClasses}><h3 className={sectionTitleClasses}>Terms & Consent</h3></div>
        <div className="space-y-3">
          <label className="flex items-start gap-3 cursor-pointer group">
            <input required type="checkbox" name="consentTerms" checked={formData.consentTerms} onChange={(e) => setFormData(p => ({ ...p, consentTerms: e.target.checked }))} className="w-4 h-4 mt-0.5 rounded border-slate-300 text-[#23471d] focus:ring-[#23471d]" />
            <span className="text-[12px] text-slate-700 leading-snug">I accept the Terms and Conditions and verify all information is accurate.</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer group">
            <input required type="checkbox" name="consentPaymentValid" checked={formData.consentPaymentValid} onChange={(e) => setFormData(p => ({ ...p, consentPaymentValid: e.target.checked }))} className="w-4 h-4 mt-0.5 rounded border-slate-300 text-[#23471d] focus:ring-[#23471d]" />
            <span className="text-[12px] text-slate-700 leading-snug">I confirm payment is valid (if applicable) and understand it is non-refundable.</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer group">
            <input type="checkbox" name="consentMatchedExhibitors" checked={formData.consentMatchedExhibitors} onChange={(e) => setFormData(p => ({ ...p, consentMatchedExhibitors: e.target.checked }))} className="w-4 h-4 mt-0.5 rounded border-slate-300 text-[#23471d] focus:ring-[#23471d]" />
            <span className="text-[12px] text-slate-700 leading-snug">I agree to be matched with exhibitors based on my sourcing needs.</span>
          </label>
        </div></div>

      <div><div className={sectionTitleWrapperClasses}><h3 className={sectionTitleClasses}>Additional Information</h3></div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-3"><div><label className={labelClasses}>Logistics Requirements</label><input name="logisticsRequirements" value={formData.logisticsRequirements} onChange={handleChange} placeholder="e.g. Shipping needs" className={inputClasses} /></div><div><label className={labelClasses}>Source of Information</label><input name="sourceOfInformation" value={formData.sourceOfInformation} onChange={handleChange} placeholder="How did you hear about us?" className={inputClasses} /></div><div className="col-span-2"><label className={labelClasses}>Remarks</label><input name="remarks" value={formData.remarks} onChange={handleChange} placeholder="Any other remarks" className={inputClasses} /></div></div></div>
    </form>
  );
}

"use client";
import React, { useState } from "react";
import { CheckCircle2, CreditCard, Landmark, Receipt, ShieldCheck, ArrowLeft, ArrowRight, Shield } from "lucide-react";
import Link from "next/link";

export default function PaymentMain() {
  const [selectedMethod, setSelectedMethod] = useState("online");

  return (
    <div className="w-full flex flex-col gap-3">
      {/* 3. PAYMENT DETAILS Block */}
      <div className="bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] p-4 md:p-5">
        <h2 className="text-[17px] font-semibold uppercase text-[#176b27] tracking-wide mb-2">
          3. PAYMENT DETAILS
        </h2>
        <p className="text-gray-500 text-[13px] font-medium mb-3">
          Review your payment summary and make the secure payment to complete your PMS Support application.
        </p>

        {/* Banner */}
        <div className="bg-[#f7faf7] border border-[#dce7dc] rounded-md px-4 py-3 flex items-start gap-3">
          <CheckCircle2 size={18} className="text-[#176b27] shrink-0 mt-0.5" />
          <p className="text-[13px] text-gray-700 font-medium leading-snug">
            Once payment is successful, your application will be submitted for verification.
          </p>
        </div>
      </div>

      {/* PAYMENT SUMMARY Block */}
      <div className="bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] overflow-hidden">
        <div className="bg-[#f7faf7] border-b border-[#e5e7eb] px-4 py-2">
          <h3 className="text-[13px] font-bold uppercase text-[#265a29] tracking-wide">
            PAYMENT SUMMARY
          </h3>
        </div>

        <div className="p-4 flex flex-col gap-3">
          {/* Summary Table */}
          <div className="flex flex-col gap-2 text-[12px]">
            <div className="flex justify-between items-center py-1.5 border-b border-gray-100">
              <span className="text-gray-600 font-medium">Stall Size</span>
              <span className="text-gray-900 font-bold">9 sqm</span>
            </div>
            <div className="flex justify-between items-center py-1.5 border-b border-gray-100">
              <span className="text-gray-600 font-medium">Stall Type</span>
              <span className="text-gray-900 font-bold">Shell Scheme</span>
            </div>
            <div className="flex justify-between items-center py-1.5 border-b border-gray-100">
              <span className="text-gray-600 font-medium">Total Amount (Inclusive of GST)</span>
              <span className="text-gray-900 font-bold">₹1,16,820</span>
            </div>
            <div className="flex justify-between items-center py-1.5 border-b border-gray-100">
              <span className="text-gray-600 font-medium">PMS Category</span>
              <span className="text-gray-900 font-bold">Women MSE</span>
            </div>
            <div className="flex justify-between items-center py-1.5 border-b border-gray-100">
              <span className="text-gray-600 font-medium">Potential Assistance</span>
              <span className="text-gray-900 font-bold">Up to 100%</span>
            </div>
            <div className="flex justify-between items-center py-1.5 border-b border-gray-100">
              <span className="text-gray-600 font-medium">Estimated Assistance (Up to)</span>
              <span className="text-gray-900 font-bold">Up to ₹99,000*</span>
            </div>

            {/* Amount Payable Highlight */}
            <div className="mt-2 bg-[#f1f6f1] rounded-lg px-4 py-3 flex justify-between items-center">
              <span className="text-[#176b27] font-bold text-[15px]">Amount Payable Now</span>
              <span className="text-[#176b27] font-black text-[22px]">₹1,16,820</span>
            </div>
          </div>

          {/* Warning/Info Box */}
          <div className="mt-2 bg-[#fff8ed] border border-[#efc080] rounded-md px-4 py-3 flex items-start gap-3">
            <span className="text-[#e98218] font-bold text-[16px] shrink-0 mt-0.5">!</span>
            <p className="text-[12.5px] text-gray-700 font-medium leading-snug">
              This is the total amount towards your stall booking. PMS assistance (if approved) will be processed by the Ministry of MSME as per scheme guidelines after the event.
            </p>
          </div>
        </div>
      </div>

      {/* CHOOSE PAYMENT METHOD Block */}
      <div className="bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] overflow-hidden">
        <div className="bg-[#f7faf7] border-b border-[#e5e7eb] px-5 py-3">
          <h3 className="text-[14px] font-bold uppercase text-[#265a29] tracking-wide">
            CHOOSE PAYMENT METHOD
          </h3>
        </div>

        <div className="p-5 flex flex-col gap-3.5">
          {/* Method 1: Online */}
          <label
            className={`flex items-center gap-4 p-4 border rounded-xl cursor-pointer transition-all ${selectedMethod === "online" ? "border-[#176b27] bg-[#f9fbf9] ring-1 ring-[#176b27]" : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
              }`}
          >
            <div className="shrink-0 flex items-center justify-center">
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedMethod === "online" ? "border-[#176b27]" : "border-gray-300"}`}>
                {selectedMethod === "online" && <div className="w-2.5 h-2.5 rounded-full bg-[#176b27]"></div>}
              </div>
            </div>

            <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <CreditCard size={24} className={selectedMethod === "online" ? "text-[#176b27]" : "text-gray-500"} />
                <div className="flex flex-col">
                  <span className={`font-bold text-[14px] ${selectedMethod === "online" ? "text-[#176b27]" : "text-gray-800"}`}>Online Payment</span>
                  <span className="text-[11px] text-gray-500 font-medium">Pay securely using UPI, Net Banking, Credit / Debit Card</span>
                </div>
              </div>

              {/* Dummy logos for online payment */}
              <div className="flex items-center gap-1.5 shrink-0 opacity-80">
                <div className="h-6 px-2 bg-white border border-gray-200 rounded flex items-center justify-center text-[10px] font-bold italic text-blue-700">UPI</div>
                <div className="h-6 px-2 bg-white border border-gray-200 rounded flex items-center justify-center text-[10px] font-bold text-orange-600">RuPay</div>
                <div className="h-6 px-2 bg-white border border-gray-200 rounded flex items-center justify-center text-[10px] font-bold text-blue-800">VISA</div>
                <div className="h-6 px-1.5 bg-white border border-gray-200 rounded flex items-center justify-center text-[10px] font-bold">
                  <div className="w-3 h-3 rounded-full bg-red-500/80 -mr-1"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                </div>
              </div>
            </div>
          </label>


          {/* Security Banner */}
          <div className="mt-2 bg-[#f1f6f1] border border-[#dce7dc] rounded-md px-4 py-3 flex items-center gap-3">
            <ShieldCheck size={18} className="text-[#176b27] shrink-0" />
            <p className="text-[12px] text-[#176b27] font-semibold">
              Your payment is 100% secure and encrypted. We never store your card or banking details.
            </p>
          </div>
        </div>
      </div>

      {/* Form Bottom Actions */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-2">
        <Link href="/participate/msme/apply/participation-details" className="h-[36px] px-5 rounded-md border border-gray-300 text-gray-700 font-bold text-[12px] uppercase tracking-wide hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
          <ArrowLeft size={16} strokeWidth={2.5} /> Back
        </Link>
        <button type="button" className="w-full sm:w-auto h-[36px] px-8 rounded-md bg-[#176b27] text-white font-bold text-[12px] uppercase tracking-wide hover:bg-[#115d20] transition-colors flex items-center justify-center gap-2 shadow-md">
          Proceed to Payment <ArrowRight size={16} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}

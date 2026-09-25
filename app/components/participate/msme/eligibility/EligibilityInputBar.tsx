'use client';
import React, { useState } from 'react';
import { Lock, Check, Upload, AlertTriangle } from 'lucide-react';
import { useEligibility } from './EligibilityContext';

const MAX_UDYAM_BYTES = 5 * 1024 * 1024;

const EligibilityInputBar = () => {
  const { fileName, isUploading, result, error, checkedAt, analyzeCertificate } = useEligibility();
  const [pickedFile, setPickedFile] = useState<File | null>(null);
  const [localError, setLocalError] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLocalError("");
    if (!/\.(pdf|jpe?g|png)$/i.test(file.name)) {
      setLocalError("Only PDF, JPG, or PNG files are allowed.");
      e.target.value = "";
      return;
    }
    if (file.size > MAX_UDYAM_BYTES) {
      setLocalError("File is larger than 5 MB.");
      e.target.value = "";
      return;
    }
    setPickedFile(file);
  };

  const handleUploadAndVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pickedFile) {
      document.getElementById("udyam-file")?.click();
      return;
    }
    void analyzeCertificate(pickedFile);
  };

  const checkedTime = checkedAt
    ? checkedAt.toLocaleString("en-GB", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit", hour12: true })
    : null;

  return (
    <form
      onSubmit={handleUploadAndVerify}
      className="w-full bg-white shadow-sm border border-gray-200 p-3 md:p-4 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-30 -mt-4"
    >

      {/* Left side: Input Area */}
      <div className="flex flex-col gap-1.5 flex-1">
        <label className="text-[12px] font-semibold text-gray-800">
          Upload Udyam Registration Certificate
        </label>
        <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
          <label
            htmlFor="udyam-file"
            className="cursor-pointer border border-dashed border-gray-400 rounded-lg bg-gray-50 flex items-center px-4 py-2 hover:bg-gray-100 transition-colors w-full sm:w-[320px] h-[40px]"
          >
            <Upload size={16} className="text-gray-500 mr-2 shrink-0" />
            <span className={`text-sm truncate w-full ${fileName ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
              {fileName || "Choose PDF, JPG or PNG file..."}
            </span>
          </label>
          <input
            id="udyam-file"
            type="file"
            accept=".pdf,.jpeg,.jpg,.png"
            className="hidden"
            onChange={handleFileChange}
          />
          <button type="submit" disabled={isUploading} className="bg-[#1b5e20] hover:bg-[#154a19] text-white px-5 rounded-lg text-sm font-semibold tracking-wide transition-colors whitespace-nowrap shadow-sm h-[40px] flex items-center justify-center disabled:opacity-75">
            {isUploading ? "ANALYZING..." : "UPLOAD & VERIFY"}
          </button>
        </div>
        {(localError || error) ? (
          <div className="flex items-center gap-1.5 mt-1 text-red-600">
            <AlertTriangle size={12} />
            <span className="text-[11px] font-medium">{localError || error}</span>
          </div>
        ) : (
          <div className="flex items-center gap-1.5 mt-1 text-gray-500">
            <Lock size={12} />
            <span className="text-[11px] font-medium">Upload your official Udyam certificate (PDF/JPG/PNG) — our Software will read the details for you.</span>
          </div>
        )}
      </div>

      {/* Right side: Status */}
      {result && (
        <div className="flex items-center gap-3 border-t md:border-t-0 pt-3 md:pt-0 border-gray-100">
          <span className="text-[12px] font-medium text-gray-500">
            Checked on: {checkedTime}
          </span>
          {result.documentType === "valid_udyam_certificate" ? (
            <div className="flex items-center gap-1.5 bg-[#f0f9f0] border border-[#1b5e20] text-[#1b5e20] px-3 py-1 rounded-md font-semibold text-[12px]">
              <Check size={14} strokeWidth={3} />
              Details Read
            </div>
          ) : (
            <div className="flex items-center gap-1.5 bg-[#fff8ed] border border-[#e98218] text-[#b26a2e] px-3 py-1 rounded-md font-semibold text-[12px]">
              <AlertTriangle size={14} strokeWidth={3} />
              Could Not Read Clearly
            </div>
          )}
        </div>
      )}

    </form>
  );
};

export default EligibilityInputBar;

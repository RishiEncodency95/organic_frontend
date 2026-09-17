"use client";

import { ArrowRight } from "lucide-react";
import { useRef } from "react";

interface Props {
  variant?: "solid" | "outline";
}

export default function ResumeUploadButton({ variant = "solid" }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      alert(`Thank you! Resume "${file.name}" has been selected. (Backend upload integration pending)`);
      // Reset the input so the same file can be selected again if needed
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const className = variant === "solid"
    ? "inline-flex h-[46px] w-auto items-center justify-center gap-2 rounded-full bg-[#0a7140] px-8 text-[15px] font-bold text-white shadow-[0_4px_12px_rgba(10,113,64,0.25)] transition-all hover:-translate-y-[1px] hover:bg-[#085a33] hover:shadow-[0_6px_16px_rgba(10,113,64,0.35)] cursor-pointer"
    : "inline-flex h-[36px] w-auto items-center justify-center gap-2 rounded-full border-2 border-[#0a7140] bg-white px-8 text-[15px] font-bold text-[#0a7140] shadow-sm transition-all hover:bg-[#f4fcf6] cursor-pointer";

  return (
    <label className={className}>
      Submit Your Resume <ArrowRight className="h-[18px] w-[18px]" />
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        className="hidden"
      />
    </label>
  );
}

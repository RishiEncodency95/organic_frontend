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
    ? "inline-flex h-[clamp(38px,4.2vh,48px)] w-full items-center justify-center gap-2 rounded-[4px] bg-[#075f38] px-5 text-[clamp(11px,0.78vw,14px)] font-bold text-white hover:bg-[#064f30] cursor-pointer"
    : "inline-flex h-[clamp(38px,3.4vw,48px)] w-full items-center justify-center gap-2 rounded-[4px] border border-[#0b7a47] bg-white px-5 text-[clamp(12px,0.86vw,15px)] font-bold text-[#075f38] hover:bg-[#f8fcf9] cursor-pointer";

  return (
    <label className={className}>
      Submit Your Resume <ArrowRight className={variant === "solid" ? "h-[18px] w-[18px]" : "h-[clamp(16px,1.1vw,20px)] w-[clamp(16px,1.1vw,20px)]"} />
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

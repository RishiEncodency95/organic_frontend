"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import UploadCvComponent from "@/app/components/careers/uploade_cv/page";

const defaultJob = {
  title: "Sales Manager – Domestic Exhibition Sales & Sponsorships",
  company: "Namo Gange Wellness Pvt. Ltd.",
  brand: "Bharat Organic Expo",
  location: "Delhi NCR",
  type: "Full Time",
  experience: "3 – 6 Years",
};

export default function UploadCvPage() {
  const router = useRouter();
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
    router.push("/careers");
  };

  return (
    <main className="min-h-screen bg-white">
      {!open && (
        <div className="flex min-h-screen items-center justify-center">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="rounded-[8px] bg-[#08743e] px-6 py-3 text-sm font-bold text-white"
          >
            Open Upload CV
          </button>
        </div>
      )}
      {open && (
        <UploadCvComponent
          job={defaultJob}
          onClose={handleClose}
          onAnalyze={() => {
            router.push("/careers/submit-resume");
          }}
        />
      )}
    </main>
  );
}
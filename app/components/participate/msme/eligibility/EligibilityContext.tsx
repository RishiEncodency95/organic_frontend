"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export interface UdyamExtractedData {
  documentType: "valid_udyam_certificate" | "unclear" | "not_a_udyam_certificate";
  udyamRegistrationNumber: string | null;
  enterpriseName: string | null;
  enterpriseType: string | null;
  majorActivity: string | null;
  socialCategory: string | null;
  gender: string | null;
  dateOfIncorporation: string | null;
  dateOfUdyamRegistration: string | null;
  address: string | null;
  state: string | null;
  district: string | null;
  pincode: string | null;
  mobile: string | null;
  email: string | null;
  nicCode: string | null;
}

interface EligibilityContextValue {
  fileName: string;
  isUploading: boolean;
  result: UdyamExtractedData | null;
  error: string | null;
  checkedAt: Date | null;
  analyzeCertificate: (file: File) => Promise<void>;
}

const EligibilityContext = createContext<EligibilityContextValue | null>(null);

export const useEligibility = () => {
  const ctx = useContext(EligibilityContext);
  if (!ctx) throw new Error("useEligibility must be used within EligibilityProvider");
  return ctx;
};

export function EligibilityProvider({ children }: { children: ReactNode }) {
  const [fileName, setFileName] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [result, setResult] = useState<UdyamExtractedData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [checkedAt, setCheckedAt] = useState<Date | null>(null);

  const analyzeCertificate = async (file: File) => {
    setFileName(file.name);
    setIsUploading(true);
    setError(null);
    setResult(null);

    try {
      const { msmeApi, msmeStorage } = await import("@/lib/api");
      const res = await msmeApi.analyzeUdyamCertificate(file);

      if (!res.success) {
        setError(res.message || "Could not analyze the certificate. Please try again.");
        return;
      }

      setResult(res.data.extractedData);
      setCheckedAt(new Date());
      msmeStorage.setUdyamExtract(res.data.extractedData);
    } catch (err) {
      setError("Could not reach the server. Please check your connection and try again.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <EligibilityContext.Provider value={{ fileName, isUploading, result, error, checkedAt, analyzeCertificate }}>
      {children}
    </EligibilityContext.Provider>
  );
}

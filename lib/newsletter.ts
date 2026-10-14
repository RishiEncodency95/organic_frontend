"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { API_URL, apiMessage } from "./api";
import { emailProblem } from "./emailCheck";

export type NewsletterSource = "Contact Page" | "Blog Sidebar" | "Blog Article";

/**
 * State for a newsletter "Subscribe" form: checks the email, sends it to
 * POST /newsletter/subscribe (Admin → Newsletter Subscribers) and reports the result.
 */
export function useNewsletterForm(source: NewsletterSource) {
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<{ ok: boolean; message: string } | null>(null);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (busy) return;
    const problem = emailProblem(email, "Email");
    if (problem) {
      setResult({ ok: false, message: problem });
      return;
    }
    setBusy(true);
    setResult(null);
    try {
      const res = await fetch(`${API_URL}/newsletter/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim().toLowerCase(), source }),
      });
      const json = await res.json().catch(() => null);
      if (!res.ok) throw new Error(apiMessage(json, "Could not subscribe. Please try again."));
      setResult({ ok: true, message: json?.message || "Thank you for subscribing!" });
      setEmail("");
    } catch (err) {
      setResult({ ok: false, message: (err as Error).message || "Could not subscribe. Please try again." });
    } finally {
      setBusy(false);
    }
  };

  return {
    email,
    setEmail: (v: string) => {
      setEmail(v);
      if (result && !result.ok) setResult(null);
    },
    busy,
    result,
    submit,
  };
}

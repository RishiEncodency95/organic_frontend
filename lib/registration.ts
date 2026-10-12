"use client";

import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { API_URL, apiMessage, EVENT_NAME, postResult, type SubmitResult } from "./api";
import { emailProblem } from "./emailCheck";

/*
 * Shared by the registration forms (visitor, buyer, book a stand): the event name, field
 * rules, one popup that lists every problem, and the country / state / city lists.
 */

export { apiMessage, EVENT_NAME, postResult };
export type { SubmitResult };

// ─── Field rules ─────────────────────────────────────────────────────────────

export const RULES = {
  /** Letters (any language), spaces, dots, apostrophes, hyphens */
  name: /^\p{L}[\p{L}\p{M} .'-]*$/u,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
  /** Indian mobile: 10 digits starting 6–9 */
  indianMobile: /^[6-9]\d{9}$/,
  /** Indian PIN code: 6 digits, not starting with 0 */
  pincode: /^[1-9]\d{5}$/,
  /** Postal / ZIP code outside India: 3–10 letters, digits, spaces or hyphens */
  zip: /^[A-Za-z0-9][A-Za-z0-9 -]{1,8}[A-Za-z0-9]$/,
  /** Local part of an international number (without the country code) */
  intlNumber: /^\d{6,14}$/,
  /** www.example.com, https://example.co.in/page */
  website: /^(https?:\/\/)?([a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,}(:\d+)?(\/\S*)?$/i,
  passport: /^[A-Za-z0-9]{6,12}$/,
  gst: /^\d{2}[A-Z]{5}\d{4}[A-Z][1-9A-Z]Z[0-9A-Z]$/,
};

/** Each check returns an error message, or "" when the value is fine. Optional fields pass when empty. */
export const check = {
  required: (value: unknown, label: string) =>
    (Array.isArray(value) ? value.length : String(value ?? "").trim()) ? "" : `${label} is required.`,
  name: (value: string, label: string, required = true) => {
    const v = value.trim();
    if (!v) return required ? `${label} is required.` : "";
    if (v.length < 2) return `${label} is too short.`;
    if (v.length > 50) return `${label} is too long.`;
    return RULES.name.test(v) ? "" : `${label} can contain letters only.`;
  },
  /** Format, provider rules (Gmail / Outlook / Yahoo) and common typos — see lib/emailCheck.ts */
  email: (value: string, label = "Email", required = true) => {
    if (!value.trim()) return required ? `${label} is required.` : "";
    return emailProblem(value, label);
  },
  indianMobile: (value: string, label = "Mobile number", required = true) => {
    if (!value) return required ? `${label} is required.` : "";
    return RULES.indianMobile.test(value) ? "" : `${label} must be 10 digits and start with 6, 7, 8 or 9.`;
  },
  intlNumber: (code: string, value: string, label = "Mobile number", required = true) => {
    if (!value) return required ? `${label} is required.` : "";
    if (!code) return `Please choose the country code for the ${label.toLowerCase()}.`;
    return RULES.intlNumber.test(value) ? "" : `${label} must be 6 to 14 digits (without the country code).`;
  },
  /** Indian PIN code when the country is India, otherwise a postal / ZIP code */
  postal: (value: string, country: string, required = false) => {
    const v = value.trim();
    if (!v) return required ? (isIndia(country) ? "Pincode is required." : "Postal / ZIP code is required.") : "";
    if (isIndia(country)) return RULES.pincode.test(v) ? "" : "Pincode must be 6 digits and cannot start with 0.";
    return RULES.zip.test(v) ? "" : "Please enter a valid postal / ZIP code.";
  },
  website: (value: string, label = "Website") => (!value.trim() || RULES.website.test(value.trim()) ? "" : `${label} is not a valid web address (e.g. www.example.com).`),
  passport: (value: string, required = false) => {
    const v = value.trim();
    if (!v) return required ? "Passport number is required." : "";
    return RULES.passport.test(v) ? "" : "Passport number must be 6 to 12 letters or digits.";
  },
  /** Date of birth: not in the future and at least `minAge` years ago */
  dob: (value: string, minAge = 10) => {
    if (!value) return "";
    const d = new Date(value);
    if (Number.isNaN(d.getTime())) return "Date of birth is not valid.";
    const limit = new Date();
    limit.setFullYear(limit.getFullYear() - minAge);
    if (d > limit) return `Date of birth must be at least ${minAge} years ago.`;
    if (d.getFullYear() < 1900) return "Date of birth is not valid.";
    return "";
  },
};

export const isIndia = (country: string) => country.trim().toLowerCase() === "india";

/** Collected error messages, without blanks or repeats */
export const errorList = (...messages: (string | false | null | undefined)[]) => [...new Set(messages.filter(Boolean) as string[])];

/** Shows every problem in one popup; returns true when there were none */
export const showErrors = (errors: string[], title = "Please check the form") => {
  if (!errors.length) return true;
  const escape = (s: string) => s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
  Swal.fire({
    scrollbarPadding: false,
    icon: "warning",
    title,
    html: `<ul style="text-align:left;margin:0;padding-left:18px;font-size:14px;line-height:1.6">${errors.map((e) => `<li>${escape(e)}</li>`).join("")}</ul>`,
    confirmButtonColor: "#4d7f1d",
  });
  return false;
};

/**
 * Messages for the fields the browser marks invalid (required / pattern), named after their
 * labels — so long forms can list every missing field in the popup instead of stopping at one.
 */
export const invalidFields = (form: HTMLFormElement | null) => {
  if (!form) return [];
  const seen = new Set<Element>();
  return [...form.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>(":invalid")]
    .filter((el) => el.tagName !== "FIELDSET" && !el.disabled && !seen.has(el) && seen.add(el))
    .map((el) => {
      const label = el.closest("div")?.querySelector("label")?.textContent?.replace(/\*/g, "").replace(/\(.*?\)/g, "").trim();
      const what = label || el.getAttribute("placeholder") || el.name || "A field";
      return el.validity.valueMissing ? `${what} is required.` : `${what} is not valid.`;
    });
};

/** "Rohit Kumar" and "rohit  kumar" count as the same person */
export const sameName = (a: string, b: string) => a.trim().replace(/\s+/g, " ").toLowerCase() === b.trim().replace(/\s+/g, " ").toLowerCase();

// ─── Country / state / city ──────────────────────────────────────────────────

export type Country = { name: string; countryCode: string; phoneCode?: string };
export type Region = { name: string; stateCode: string };

/** "Other" at the end of every city list: the visitor then types the city */
export const OTHER_CITY = "Other";

const byName = (a: { name: string }, b: { name: string }) => a.name.localeCompare(b.name);
const getList = async <T,>(path: string): Promise<T[]> => {
  try {
    const res = await fetch(`${API_URL}${path}`);
    const json = await res.json().catch(() => null);
    const data = json?.data ?? json;
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
};

let countriesRequest: Promise<Country[]> | null = null;
const loadCountries = () => {
  countriesRequest ??= getList<Country>("/crm-countries").then((list) => {
    // Only cache a real list, so a failed request is tried again on the next form
    if (!list.length) countriesRequest = null;
    return [...list].sort(byName);
  });
  return countriesRequest;
};

/**
 * Countries (A–Z, from the website's own backend), the states of `country` and the cities of
 * `state`. `citiesReady` is true once the cities of the chosen state have loaded — an empty
 * list then means the visitor types the city.
 */
export function useLocations(country: string, state: string) {
  const [countries, setCountries] = useState<Country[]>([{ name: "India", countryCode: "IN", phoneCode: "91" }]);
  const [states, setStates] = useState<Region[]>([]);
  const [cities, setCities] = useState<{ name: string }[]>([]);
  const [citiesFor, setCitiesFor] = useState("");

  useEffect(() => {
    let live = true;
    loadCountries().then((list) => live && list.length && setCountries(list));
    return () => {
      live = false;
    };
  }, []);

  const countryCode = countries.find((c) => c.name === country)?.countryCode || "";
  useEffect(() => {
    let live = true;
    if (!countryCode) return;
    getList<Region>(`/crm-states?countryCode=${countryCode}`).then((list) => live && setStates([...list].sort(byName)));
    return () => {
      live = false;
    };
  }, [countryCode]);

  const stateCode = states.find((s) => s.name === state)?.stateCode || "";
  useEffect(() => {
    let live = true;
    if (!stateCode) return;
    getList<{ name: string }>(`/crm-cities?stateCode=${encodeURIComponent(stateCode)}`).then((list) => {
      if (!live) return;
      const seen = new Set<string>();
      setCities(list.filter((c) => c.name && !seen.has(c.name.toLowerCase()) && seen.add(c.name.toLowerCase())));
      setCitiesFor(stateCode);
    });
    return () => {
      live = false;
    };
  }, [stateCode]);

  return {
    countries,
    states: countryCode ? states : [],
    cities: stateCode && citiesFor === stateCode ? cities : [],
    citiesReady: !!stateCode && citiesFor === stateCode,
    /** "91" for India; "" when unknown. Codes like "1-684" keep their digits only */
    phoneCodeOf: (name: string) => (countries.find((c) => c.name === name)?.phoneCode || "").replace(/\D/g, ""),
  };
}

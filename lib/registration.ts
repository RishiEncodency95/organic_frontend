"use client";

import { useEffect, useRef, useState } from "react";
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
  /** PAN: five letters, four digits, one letter */
  pan: /^[A-Z]{5}\d{4}[A-Z]$/,
  /** Aadhaar: 12 digits, kept as text so leading zeros survive */
  aadhaar: /^\d{12}$/,
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
  pan: (value: string, required = false) => {
    const v = value.trim();
    if (!v) return required ? "PAN number is required." : "";
    return RULES.pan.test(v) ? "" : "PAN must be 10 characters: 5 letters, 4 digits, then 1 letter (e.g. ABCDE1234F).";
  },
  aadhaar: (value: string, required = false) => {
    const v = value.trim();
    if (!v) return required ? "Aadhaar number is required." : "";
    return RULES.aadhaar.test(v) ? "" : "Aadhaar number must be exactly 12 digits.";
  },
  gst: (value: string, required = false) => {
    const v = value.trim();
    if (!v) return required ? "GST number is required." : "";
    return RULES.gst.test(v) ? "" : "GST number is not valid (15 characters, e.g. 07AABCU9603R1ZX).";
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

/** What a field keeps as it is typed, so letters never land in number fields and the reverse */
export const clean = {
  /** Person / country names: letters (any language), spaces, dots, apostrophes, hyphens */
  name: (value: string) => value.replace(/[^\p{L}\p{M} .'-]/gu, "").replace(/^\s+/, ""),
  /** Designation / occupation: letters plus the punctuation job titles use — "Sr. Manager (Sales & Marketing)" */
  title: (value: string) => value.replace(/[^\p{L}\p{M} .,&/()'-]/gu, "").replace(/^\s+/, ""),
  /** Phone number outside India: digits with an optional +, spaces or hyphens */
  phone: (value: string) => value.replace(/[^\d+ -]/g, "").replace(/^[ -]+/, "").replace(/(?!^)\+/g, "").slice(0, 18),
  /** Indian mobile: 10 digits. A pasted "+91 98765 43210" or "098765 43210" loses its prefix, not its last digits */
  indianMobile: (value: string) => {
    const digits = value.replace(/\D/g, "");
    const local = digits.length > 10 ? digits.replace(/^(?:91|0)(?=[6-9])/, "") : digits;
    return local.slice(0, 10);
  },
  /** Money amount: digits and one decimal point */
  amount: (value: string) => value.replace(/[^\d.]/g, "").replace(/(\..*)\./g, "$1").slice(0, 12),
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

// ─── Pincode / postal code → state / city / country ──────────────────────────

export type PincodePlace = {
  pincode: string;
  country: string;
  state: string;
  /** "" when the place is not in the state's city list (outside India) — the visitor picks the city */
  city: string;
  /** false: the city is the postal district and is not in the state's city list */
  cityListed: boolean;
};
export type PincodeStatus = "idle" | "loading" | "found" | "notFound" | "error";
export type PincodeLookup = {
  status: PincodeStatus;
  message: string;
  /** Found, but the place is not in the state's city list: the visitor picks the city */
  needsCity?: boolean;
};

/**
 * State / city / country are filled in from the pincode and stay locked. They open for the
 * visitor when the lookup cannot fill them (unknown code, lookup unavailable), and the city
 * alone opens when only it is missing.
 */
export const addressLock = (lookup: PincodeLookup) => {
  const locked = lookup.status !== "notFound" && lookup.status !== "error";
  return { locked, cityLocked: locked && !lookup.needsCity };
};

type PincodeResult = { status: "found"; place: PincodePlace } | { status: "notFound" | "error"; message: string };

/**
 * What a form's postal field should be looked up as: "IN" for India (and before a country is
 * chosen, when `indiaByDefault`), the chosen country's ISO code otherwise, "" for no lookup.
 */
export const postalTarget = (country: string, countries: Country[], indiaByDefault = true) => {
  if (!country) return indiaByDefault ? "IN" : "";
  if (isIndia(country)) return "IN";
  return countries.find((c) => c.name === country)?.countryCode || "";
};

// One request per code for the whole visit; failed lookups are not kept, so retyping retries.
// Keys are "IN/110001" or "US/10001".
const pincodeRequests = new Map<string, Promise<PincodeResult>>();
const lookupPincode = (key: string) => {
  let request = pincodeRequests.get(key);
  if (!request) {
    const [countryCode, code] = [key.slice(0, key.indexOf("/")), key.slice(key.indexOf("/") + 1)];
    const india = countryCode === "IN";
    request = (async (): Promise<PincodeResult> => {
      try {
        const res = await fetch(india ? `${API_URL}/pincode/${code}` : `${API_URL}/postal/${countryCode}/${encodeURIComponent(code)}`);
        const json = await res.json().catch(() => null);
        if (res.ok && json?.data?.state) return { status: "found", place: json.data as PincodePlace };
        // Only the lookup's own "not found" (it carries a statusCode); a 404 without one means
        // the server does not have this route yet, which is an error, not a wrong code
        if (res.status === 404 && json?.statusCode === 404) {
          return {
            status: "notFound",
            message: india ? "No location found for this pincode. Please check it." : "State and city could not be found for this postal code. Please select them yourself.",
          };
        }
      } catch {
        // falls through to the generic message
      }
      return { status: "error", message: `Could not look up this ${india ? "pincode" : "postal code"}. Please select the state and city yourself.` };
    })();
    pincodeRequests.set(key, request);
    request.then((result) => result.status === "error" && pincodeRequests.delete(key));
  }
  return request;
};

// Postal codes outside India have no fixed length, so the lookup waits for a pause in typing
const POSTAL_TYPING_PAUSE_MS = 700;

/**
 * Looks up a pincode / postal code as it is typed and hands the place to `onFound`, which fills
 * the form's state / city (and country, for India); they stay editable afterwards. `target` is
 * true or "IN" for an Indian pincode, another ISO country code for a postal code of that
 * country, and false / "" for no lookup. A code already in the form when it opens is left
 * alone, and an answer for an older code never overwrites a newer one.
 */
export function usePincodeAutofill(pincode: string, target: boolean | string, onFound: (place: PincodePlace) => void): PincodeLookup {
  const countryCode = target === true ? "IN" : target || "";
  const code = pincode.trim();
  const valid = countryCode === "IN" ? RULES.pincode.test(code) : RULES.zip.test(code);
  const key = countryCode && valid ? `${countryCode}/${code}` : "";
  const [result, setResult] = useState<{ key: string; lookup: PincodeLookup } | null>(null);
  const onFoundRef = useRef(onFound);
  // The code the form opened with (a restored draft): its address is already in the form
  const [openedWith] = useState(key);
  useEffect(() => {
    onFoundRef.current = onFound;
  });

  useEffect(() => {
    if (!key || key === openedWith) return;
    let live = true;
    const run = () =>
      lookupPincode(key).then((found) => {
        if (!live) return;
        if (found.status === "found") {
          onFoundRef.current(found.place);
          const where = [found.place.city, found.place.state].filter(Boolean).join(", ");
          setResult({
            key,
            lookup: { status: "found", message: found.place.city ? where : `${where} — please select the city`, needsCity: !found.place.city },
          });
        } else setResult({ key, lookup: { status: found.status, message: found.message } });
      });
    const timer = setTimeout(run, key.startsWith("IN/") ? 0 : POSTAL_TYPING_PAUSE_MS);
    return () => {
      live = false;
      clearTimeout(timer);
    };
  }, [key, openedWith]);

  if (!key || key === openedWith) return { status: "idle", message: "" };
  return result?.key === key ? result.lookup : { status: "loading", message: "Finding state and city…" };
}

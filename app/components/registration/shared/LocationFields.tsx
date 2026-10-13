"use client";

import React, { useState } from "react";
import { Loader2 } from "lucide-react";
import { OTHER_CITY, type Country, type PincodeLookup } from "@/lib/registration";

/*
 * Fields shared by the registration forms. They take the form's own input class, so they look
 * like the fields around them.
 */

type CityFieldProps = {
  value: string;
  onChange: (city: string) => void;
  cities: { name: string }[];
  /** Cities of the chosen state have loaded (an empty list then means: type the city) */
  ready: boolean;
  /** A state is chosen */
  stateChosen: boolean;
  className: string;
  required?: boolean;
  name?: string;
  /** Locked while the pincode fills it in (see addressLock) */
  disabled?: boolean;
};

/**
 * City dropdown. When the state has no cities, or the visitor picks "Other", a text box asks
 * for the city instead — so every state can be completed.
 */
export function CityField({ value, onChange, cities, ready, stateChosen, className, required, name = "city", disabled = false }: CityFieldProps) {
  const listed = cities.some((c) => c.name === value);
  const [typing, setTyping] = useState(false);
  const typeIt = ready && (cities.length === 0 || typing || (!!value && !listed));

  if (typeIt) {
    return (
      <div className="flex gap-1">
        <input
          name={name}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value.replace(/[^\p{L}\p{M} .'-]/gu, "").replace(/^\s+/, ""))}
          maxLength={60}
          placeholder="Type your city"
          autoFocus={typing}
          disabled={disabled}
          className={className}
        />
        {cities.length > 0 && (
          <button
            type="button"
            onClick={() => {
              setTyping(false);
              onChange("");
            }}
            title="Choose from the list"
            disabled={disabled}
            className="shrink-0 rounded border border-slate-300 px-2 text-[10px] font-bold uppercase text-slate-600 hover:bg-slate-50"
          >
            List
          </button>
        )}
      </div>
    );
  }

  return (
    <select
      name={name}
      required={required}
      value={listed ? value : ""}
      onChange={(e) => {
        if (e.target.value === OTHER_CITY) {
          setTyping(true);
          onChange("");
        } else onChange(e.target.value);
      }}
      disabled={disabled || !stateChosen || !ready}
      className={className}
    >
      <option value="">{!stateChosen ? "Select state first" : ready ? "Select City" : "Loading cities..."}</option>
      {cities.map((c) => (
        <option key={c.name} value={c.name}>
          {c.name === OTHER_CITY ? "Other (type your city)" : c.name}
        </option>
      ))}
    </select>
  );
}

/** Country calling code for an international number, e.g. "+44 United Kingdom" */
export function DialCodeSelect({
  value,
  onChange,
  countries,
  className,
  disabled,
  label = "Country code",
}: {
  value: string;
  onChange: (code: string) => void;
  countries: Country[];
  className: string;
  disabled?: boolean;
  label?: string;
}) {
  const options = countries
    .map((c) => ({ code: (c.phoneCode || "").replace(/\D/g, ""), name: c.name }))
    .filter((c) => c.code);
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)} disabled={disabled} aria-label={label} className={className}>
      <option value="">Code</option>
      {options.map((c) => (
        <option key={`${c.name}-${c.code}`} value={c.code}>
          +{c.code} {c.name}
        </option>
      ))}
    </select>
  );
}

/** Line under the pincode field: looking up / what was filled in / why nothing was */
export function PincodeHint({ lookup, idleNote = "" }: { lookup: PincodeLookup; idleNote?: string }) {
  if (lookup.status === "idle") {
    return idleNote ? <p className="mt-1 text-[10px] font-medium leading-tight text-slate-500">{idleNote}</p> : null;
  }
  const tone = lookup.status === "found" ? "text-green-700" : lookup.status === "loading" ? "text-slate-500" : "text-red-600";
  return (
    <p role="status" aria-live="polite" className={`mt-1 flex items-center gap-1 text-[10px] font-medium leading-tight ${tone}`}>
      {lookup.status === "loading" && <Loader2 size={11} className="shrink-0 animate-spin" />}
      {lookup.message}
    </p>
  );
}


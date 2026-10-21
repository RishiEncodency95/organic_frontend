"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  ChevronDown,
  ClipboardList,
  Eye,
  FileText,
  Loader2,
  LockKeyhole,
  Mail,
  MapPin,
  Phone,
  UserRound,
  UserRoundCheck,
  UsersRound,
  X,
} from "lucide-react";
import { labelsOf, toOptions, useDropdowns } from "@/lib/dropdowns";
import { isValidPhone, type CandidateProfileData } from "../submit-resume/SubmitResume";
import {
  CardTitle,
  EditButton,
  FlowHero,
  FlowPage,
  FlowSteps,
  GREEN,
  INK,
  PhotoBox,
  ProfileMatch,
  SERIF,
  capitalise,
  card,
  greenButton,
  outlineButton,
  profileOf,
  strList,
  submitApplication,
  usePhotoUpload,
} from "./shared";

/*
 * Careers → Complete Your Application: the last answers, the consents and the submit.
 * Answers are kept on the candidate (`application`) so going back to Review keeps them.
 */

export type ApplicationAnswers = {
  preferredLocations: string[];
  noticePeriod: string;
  expectedCTC: string;
  joiningPreference: string;
  employmentType: string;
  whyJoin: string;
  additionalSkills: string;
  workedWith: string[];
  references: { name: string; designation: string; organization: string; phone: string; email: string }[];
  consents: { accurate: boolean; verify: boolean; contact: boolean; terms: boolean };
};

const WHY_MAX = 400;
const SKILLS_MAX = 300;

const WORKED_WITH = [
  "Organic / Agriculture",
  "Exhibition / Trade Show",
  "Client Acquisition",
  "Sponsorship Sales",
  "Event Planning",
  "Marketing & Communication",
  "Business Development",
  "Government / NGO Collaboration",
];

const CONSENTS: { key: keyof ApplicationAnswers["consents"]; label: React.ReactNode }[] = [
  { key: "accurate", label: "I confirm that all the information provided is correct and complete." },
  { key: "verify", label: "I authorize Bharat Organic Expo to verify my information if required." },
  { key: "contact", label: "I agree to be contacted for future opportunities." },
  {
    key: "terms",
    label: (
      <>
        I have read and agree to the{" "}
        <Link href="/registration/privacy-policy" target="_blank" className="text-[#1f63a8] underline">
          Privacy Policy
        </Link>{" "}
        and{" "}
        <Link href="/registration/terms-and-conditions" target="_blank" className="text-[#1f63a8] underline">
          Terms &amp; Conditions
        </Link>
        .
      </>
    ),
  },
];

// Admin-managed lists (Dropdown Manager / Career options); these are the fallbacks
const LOCATION_LISTS = { "careers-current-location": toOptions(["Delhi NCR", "Noida", "Gurugram", "Ghaziabad", "Faridabad", "Kolkata", "Mumbai", "Bengaluru"]) };
const DEFAULT_OPTIONS = {
  notice_period: ["Immediate", "7 Days", "15 Days", "30 Days", "45 Days", "60 Days", "90 Days"],
  joining_period: ["Immediate", "Within 7 Days", "Within 15 Days", "Within 1 Month", "Within 2 Months"],
  expected_ctc: ["As per company norms", "₹3 - 5 LPA", "₹5 - 8 LPA", "₹8 - 12 LPA", "₹12 - 18 LPA", "₹18+ LPA"],
};
type OptionKey = keyof typeof DEFAULT_OPTIONS;

function useCareerOptions() {
  const [lists, setLists] = useState(DEFAULT_OPTIONS);
  useEffect(() => {
    let cancelled = false;
    fetch("/api/careers/options")
      .then((res) => (res.ok ? res.json() : null))
      .then((body) => {
        if (cancelled || !body?.data) return;
        const pick = (key: OptionKey) => {
          const labels = Array.isArray(body.data[key]) ? body.data[key].map((o: { label?: string }) => o?.label).filter((l: unknown): l is string => typeof l === "string" && !!l) : [];
          return labels.length ? labels : DEFAULT_OPTIONS[key];
        };
        setLists({ notice_period: pick("notice_period"), joining_period: pick("joining_period"), expected_ctc: pick("expected_ctc") });
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);
  return lists;
}

const emptyRef = { name: "", designation: "", organization: "", phone: "", email: "" };

function initialAnswers(c: CandidateProfileData): ApplicationAnswers {
  const saved = (c.application || {}) as Partial<ApplicationAnswers>;
  const p = profileOf(c);
  const jobLoc = c.jobDetails?.location?.split(/[\/,]/)[0]?.trim();
  return {
    preferredLocations: saved.preferredLocations ?? (jobLoc ? [jobLoc] : []),
    noticePeriod: saved.noticePeriod ?? p.noticePeriod ?? "",
    expectedCTC: saved.expectedCTC ?? p.expectedCTC ?? "",
    joiningPreference: saved.joiningPreference ?? "",
    employmentType: c.jobDetails?.type || "Full Time",
    whyJoin: saved.whyJoin ?? "",
    additionalSkills: saved.additionalSkills ?? strList(p.skills).slice(0, 8).join(", "),
    workedWith: saved.workedWith ?? [],
    references: saved.references?.length === 2 ? saved.references : [{ ...emptyRef }, { ...emptyRef }],
    consents: saved.consents ?? { accurate: false, verify: false, contact: false, terms: false },
  };
}

/** What still blocks the submit, in plain words */
function problems(a: ApplicationAnswers, c: CandidateProfileData): string[] {
  const out: string[] = [];
  if (!c.image) out.push("add your photo");
  if (!a.preferredLocations.length) out.push("choose a preferred location");
  if (!a.noticePeriod) out.push("select your notice period");
  if (!a.expectedCTC) out.push("select your expected salary");
  if (!a.joiningPreference) out.push("select your joining preference");
  if (a.whyJoin.trim().length < 20) out.push("tell us why you want to join (at least 20 characters)");
  a.references.forEach((r, i) => {
    const any = Object.values(r).some((v) => v.trim());
    if (!any) return;
    if (!r.name.trim()) out.push(`add a name for reference ${i + 1}`);
    if (r.phone.trim() && !isValidPhone(r.phone)) out.push(`fix the contact number of reference ${i + 1}`);
    if (r.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r.email.trim())) out.push(`fix the email of reference ${i + 1}`);
    if (!r.phone.trim() && !r.email.trim()) out.push(`add a phone or email for reference ${i + 1}`);
  });
  if (!Object.values(a.consents).every(Boolean)) out.push("tick all the boxes under Before You Submit");
  return out;
}

const fieldBase = "h-[34px] w-full rounded-[6px] border border-[#d9e0d4] bg-white px-[12px] text-[14px] text-[#13261b] outline-none transition focus:border-[#1d7a3e] focus:ring-2 focus:ring-[#1d7a3e]/15";
const labelBase = "mb-[3px] block text-[13px] leading-tight text-[#26352c]";

function Label({ children, required, htmlFor }: { children: React.ReactNode; required?: boolean; htmlFor?: string }) {
  return (
    <label htmlFor={htmlFor} className={labelBase}>
      {children}
      {required && <span className="text-[#d92027]"> *</span>}
    </label>
  );
}

function Select({ id, value, onChange, options, placeholder, disabled }: { id: string; value: string; onChange: (v: string) => void; options: string[]; placeholder: string; disabled?: boolean }) {
  return (
    <div className="relative">
      <select
        id={id}
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        className={`${fieldBase} appearance-none pr-[34px] disabled:bg-[#f1f3ef] disabled:text-[#8a968d] ${value ? "" : "text-[#8a968d]"}`}
      >
        {!disabled && <option value="">{placeholder}</option>}
        {[...new Set(value && !options.includes(value) ? [value, ...options] : options)].map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-[11px] top-1/2 h-[16px] w-[16px] -translate-y-1/2 text-[#55635a]" />
    </div>
  );
}

function LocationPicker({ value, onChange, options }: { value: string[]; onChange: (v: string[]) => void; options: string[] }) {
  const rest = options.filter((o) => !value.includes(o));
  return (
    <div className={`${fieldBase} relative flex h-auto min-h-[38px] flex-wrap items-center gap-[6px] py-[4px] pr-[34px]`}>
      {value.map((v) => (
        <span key={v} className="flex items-center gap-[5px] rounded-[5px] bg-[#eef3ea] px-[8px] py-[2px] text-[13px]">
          {v}
          <button type="button" aria-label={`Remove ${v}`} onClick={() => onChange(value.filter((x) => x !== v))}>
            <X className="h-[13px] w-[13px]" />
          </button>
        </span>
      ))}
      {rest.length > 0 && (
        <select
          aria-label="Add a preferred location"
          value=""
          onChange={(e) => e.target.value && onChange([...value, e.target.value])}
          className="min-w-[90px] flex-1 appearance-none bg-transparent text-[13px] text-[#8a968d] outline-none"
        >
          <option value="">{value.length ? "Add more…" : "Select locations"}</option>
          {rest.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      )}
      <ChevronDown className="pointer-events-none absolute right-[11px] top-1/2 h-[16px] w-[16px] -translate-y-1/2 text-[#55635a]" />
    </div>
  );
}

function RefInput({ label, value, onChange, type = "text" }: { label: string; value: string; onChange: (v: string) => void; type?: string }) {
  return (
    <label className="block">
      <span className="block text-[11px] leading-tight text-[#55635a]">{label}</span>
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)} className="h-[26px] w-full rounded-[5px] border border-[#d9e0d4] bg-white px-[8px] text-[12.5px] text-[#13261b] outline-none focus:border-[#1d7a3e]" />
    </label>
  );
}

export default function CompleteApplicationPage({
  candidate,
  onChange,
  onBack,
  onViewAnalysis,
  onChangeJob,
  onSubmitted,
}: {
  candidate: CandidateProfileData;
  onChange: (c: CandidateProfileData) => void;
  /** Back to Review Your Details */
  onBack: () => void;
  onViewAnalysis: () => void;
  onChangeJob: () => void;
  onSubmitted: (result: { applicationId: string; submittedAt: string }, answers: ApplicationAnswers) => void;
}) {
  const [answers, setAnswers] = useState<ApplicationAnswers>(() => initialAnswers(candidate));
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [tried, setTried] = useState(false);
  const options = useCareerOptions();
  const locationLists = useDropdowns(LOCATION_LISTS);
  const photo = usePhotoUpload(candidate, (url) => onChange({ ...candidate, image: url, application: answers }));
  const p = profileOf(candidate);
  const j = candidate.jobDetails || {};

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  // Keep what was typed (reload, Back to Review) — saved a moment after the last change
  const latest = useRef({ candidate, onChange });
  useEffect(() => {
    latest.current = { candidate, onChange };
  });
  useEffect(() => {
    const timer = setTimeout(() => latest.current.onChange({ ...latest.current.candidate, application: answers }), 400);
    return () => clearTimeout(timer);
  }, [answers]);

  const set = <K extends keyof ApplicationAnswers>(key: K, value: ApplicationAnswers[K]) => setAnswers((a) => ({ ...a, [key]: value }));
  const setRef = (i: number, key: keyof ApplicationAnswers["references"][number], value: string) =>
    setAnswers((a) => ({ ...a, references: a.references.map((r, idx) => (idx === i ? { ...r, [key]: value } : r)) }));

  const issues = problems(answers, candidate);
  const locationOptions = [...new Set([...(j.location ? j.location.split(/[\/,]/).map((x) => x.trim()) : []), ...labelsOf(locationLists["careers-current-location"]).map((l) => l.replace(", NCR", " NCR"))])].filter(Boolean);

  const goBack = () => {
    onChange({ ...candidate, application: answers });
    onBack();
  };

  const submit = async () => {
    setTried(true);
    if (issues.length || submitting) return;
    setSubmitting(true);
    setError("");
    const cleaned: ApplicationAnswers = {
      ...answers,
      whyJoin: answers.whyJoin.trim(),
      additionalSkills: answers.additionalSkills.trim(),
      references: answers.references.filter((r) => r.name.trim()).map((r) => ({ ...r, phone: r.phone.trim(), email: r.email.trim() })),
    };
    try {
      const result = await submitApplication(candidate, { ...cleaned, consentsAcceptedAt: new Date().toISOString() }, cleaned.whyJoin);
      onSubmitted(result, cleaned);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong. Please try again.");
      setSubmitting(false);
    }
  };

  const location = candidate.location || p.location;

  return (
    <FlowPage>
      <FlowHero
        crumb="Complete Your Application"
        eyebrow="Careers at Bharat Organic Expo"
        title="Complete Your Application"
        subtitle="You're almost there! Please review and confirm your details to submit your application."
        image="/assets/careers/apply-form-hero.png"
        imageAlt="Healing People, Enriching Lives"
      />

      <div className="mx-auto grid max-w-[1360px] grid-cols-1 gap-4 px-4 pb-6 pt-[12px] sm:px-8 xl:grid-cols-[minmax(0,1fr)_440px] xl:gap-[20px] lg:pb-[16px]">
        {/* ── Left: the form ── */}
        <div className="min-w-0 space-y-[10px]">
          <FlowSteps current={2} />

          <div className={`${card} space-y-[9px] px-4 py-[10px] sm:px-5`}>
            <section>
              <CardTitle Icon={UserRoundCheck} title="Application Details" />
              <div className="mt-[7px] grid grid-cols-1 gap-x-[14px] gap-y-[7px] md:grid-cols-[1.25fr_1fr_0.85fr]">
                <div>
                  <Label required htmlFor="position">
                    Position Applied For
                  </Label>
                  <Select id="position" value={j.title || ""} onChange={() => {}} options={[j.title || ""]} placeholder="" disabled />
                </div>
                <div>
                  <Label required>Preferred Location(s)</Label>
                  <LocationPicker value={answers.preferredLocations} onChange={(v) => set("preferredLocations", v)} options={locationOptions} />
                </div>
                <div>
                  <Label required htmlFor="notice">
                    Notice Period
                  </Label>
                  <Select id="notice" value={answers.noticePeriod} onChange={(v) => set("noticePeriod", v)} options={options.notice_period} placeholder="Select" />
                </div>
                <div>
                  <Label required htmlFor="ctc">
                    Expected Salary (CTC)
                  </Label>
                  <Select id="ctc" value={answers.expectedCTC} onChange={(v) => set("expectedCTC", v)} options={options.expected_ctc} placeholder="Select" />
                </div>
                <div>
                  <Label required htmlFor="joining">
                    Joining Preference
                  </Label>
                  <Select id="joining" value={answers.joiningPreference} onChange={(v) => set("joiningPreference", v)} options={options.joining_period} placeholder="Select" />
                </div>
                <div>
                  <Label htmlFor="etype">Employment Type</Label>
                  <Select id="etype" value={answers.employmentType} onChange={() => {}} options={[answers.employmentType]} placeholder="" disabled />
                </div>
              </div>
            </section>

            <section className="border-t border-[#eef1ea] pt-[9px]">
              <CardTitle Icon={FileText} title="Additional Information" />
              <div className="mt-[7px] grid grid-cols-1 gap-x-[14px] gap-y-[6px] md:grid-cols-2">
                <div>
                  <Label required htmlFor="why">
                    Why do you want to join Bharat Organic Expo?
                  </Label>
                  <textarea
                    id="why"
                    value={answers.whyJoin}
                    maxLength={WHY_MAX}
                    onChange={(e) => set("whyJoin", e.target.value)}
                    rows={3}
                    placeholder="Tell us what draws you to this role and to organic living…"
                    className="w-full resize-none rounded-[6px] border border-[#d9e0d4] bg-white px-[11px] py-[6px] text-[13px] leading-[1.4] text-[#13261b] outline-none focus:border-[#1d7a3e]"
                  />
                  <p className="-mt-[2px] text-right text-[11px] leading-tight text-[#7c8a80]">{WHY_MAX - answers.whyJoin.length} characters left</p>
                </div>
                <div>
                  <Label htmlFor="skills">Any additional skills or expertise?</Label>
                  <textarea
                    id="skills"
                    value={answers.additionalSkills}
                    maxLength={SKILLS_MAX}
                    onChange={(e) => set("additionalSkills", e.target.value)}
                    rows={3}
                    className="w-full resize-none rounded-[6px] border border-[#d9e0d4] bg-white px-[11px] py-[6px] text-[13px] leading-[1.4] text-[#13261b] outline-none focus:border-[#1d7a3e]"
                  />
                  <p className="-mt-[2px] text-right text-[11px] leading-tight text-[#7c8a80]">{SKILLS_MAX - answers.additionalSkills.length} characters left</p>
                </div>
              </div>
              <p className="text-[13px] text-[#26352c]">Have you worked with any of these? (Optional)</p>
              <div className="mt-[4px] flex flex-wrap gap-[6px]">
                {WORKED_WITH.map((w) => {
                  const on = answers.workedWith.includes(w);
                  return (
                    <label key={w} className={`flex cursor-pointer items-center gap-[7px] rounded-[6px] border px-[9px] py-[3px] text-[12.5px] ${on ? "border-[#bcd7c0] bg-[#f1f8ef]" : "border-[#e1e6dc] bg-white"}`}>
                      <input
                        type="checkbox"
                        checked={on}
                        onChange={() => set("workedWith", on ? answers.workedWith.filter((x) => x !== w) : [...answers.workedWith, w])}
                        className="h-[15px] w-[15px] accent-[#1d7a3e]"
                      />
                      {w}
                    </label>
                  );
                })}
              </div>
            </section>

            <section className="border-t border-[#eef1ea] pt-[9px]">
              <CardTitle Icon={UsersRound} title="References" extra="(Optional)" />
              <div className="mt-[5px] grid grid-cols-1 gap-x-[16px] gap-y-[10px] md:grid-cols-2">
                {answers.references.map((r, i) => (
                  <div key={i} className="grid grid-cols-2 gap-x-[10px] gap-y-[3px]">
                    <p className="col-span-2 text-[12.5px] font-semibold leading-tight text-[#1b4d2e]">Reference {i + 1}</p>
                    <RefInput label="Name" value={r.name} onChange={(v) => setRef(i, "name", v)} />
                    <RefInput label="Designation" value={r.designation} onChange={(v) => setRef(i, "designation", v)} />
                    <RefInput label="Organization" value={r.organization} onChange={(v) => setRef(i, "organization", v)} />
                    <RefInput label="Contact Number" type="tel" value={r.phone} onChange={(v) => setRef(i, "phone", v.replace(/[^\d+\s]/g, "").slice(0, 15))} />
                    <div className="col-span-2">
                      <RefInput label="Email Address" type="email" value={r.email} onChange={(v) => setRef(i, "email", v.replace(/\s/g, ""))} />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* ── Right ── */}
        <aside className="relative flex min-w-0 flex-col gap-[10px]">
          {photo.input}
          <div className={`${card} flex gap-[14px] p-[10px]`}>
            <button type="button" onClick={photo.open} className="relative shrink-0" aria-label={candidate.image ? "Change photo" : "Add photo"}>
              <PhotoBox src={candidate.image} name={candidate.candidateName || "Candidate"} busy={photo.busy} className="h-[132px] w-[124px]" />
              {!candidate.image && <span className="absolute inset-x-0 bottom-0 rounded-b-[8px] bg-[#0f4d2a]/90 py-[3px] text-center text-[11px] font-medium text-white">Add Photo *</span>}
            </button>
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-2">
                <p className="truncate text-[18px] font-semibold" style={{ ...SERIF, color: INK }}>
                  {candidate.candidateName}
                </p>
                <EditButton onClick={goBack} title="Edit on Review Your Details" />
              </div>
              <ul className="mt-[6px] space-y-[5px] text-[13.5px] text-[#26352c]">
                {candidate.email && (
                  <li className="flex items-center gap-[8px] truncate">
                    <Mail className="h-[15px] w-[15px] shrink-0" style={{ color: GREEN }} />
                    <span className="truncate">{candidate.email}</span>
                  </li>
                )}
                {candidate.phone && (
                  <li className="flex items-center gap-[8px]">
                    <Phone className="h-[15px] w-[15px] shrink-0" style={{ color: GREEN }} />
                    {candidate.phone}
                  </li>
                )}
                {location && (
                  <li className="flex items-center gap-[8px]">
                    <MapPin className="h-[15px] w-[15px] shrink-0" style={{ color: GREEN }} />
                    {location}
                  </li>
                )}
                {p.gender && (
                  <li className="flex items-center gap-[8px]">
                    <UserRound className="h-[15px] w-[15px] shrink-0" style={{ color: GREEN }} />
                    {capitalise(p.gender)}
                  </li>
                )}
              </ul>
              {photo.error && <p className="mt-[4px] text-[11.5px] text-[#b23b2e]">{photo.error}</p>}
            </div>
          </div>

          <div className={`${card} flex gap-[12px] bg-[#f6faf3] p-[12px]`}>
            <UserRoundCheck className="h-[40px] w-[40px] shrink-0" style={{ color: GREEN }} strokeWidth={1.5} />
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-2">
                <p className="text-[13.5px] text-[#26352c]">Position Applied For</p>
                <EditButton onClick={onChangeJob} title="Choose a different position" />
              </div>
              <p className="text-[13.5px] font-medium leading-snug" style={{ color: INK }}>
                {j.title}
              </p>
              <div className="mt-[5px] flex flex-wrap gap-x-[12px] gap-y-1 text-[12.5px] text-[#26352c]">
                {(j.company || j.brand) && (
                  <span className="flex items-center gap-[4px]">
                    <Building2 className="h-[14px] w-[14px]" style={{ color: GREEN }} />
                    {j.company || j.brand}
                  </span>
                )}
                {j.location && (
                  <span className="flex items-center gap-[4px]">
                    <MapPin className="h-[14px] w-[14px]" style={{ color: GREEN }} />
                    {j.location}
                  </span>
                )}
                {j.type && (
                  <span className="flex items-center gap-[4px]">
                    <BriefcaseBusiness className="h-[14px] w-[14px]" style={{ color: GREEN }} />
                    {j.type}
                  </span>
                )}
              </div>
            </div>
          </div>

          <ProfileMatch
            score={candidate.score}
            summary={candidate.score >= 70 ? undefined : "Your profile matches several key requirements, but a few important areas need strengthening."}
            link={
              <button type="button" onClick={onViewAnalysis} className="mt-[4px] flex items-center gap-[5px] text-[13px] text-[#1f63a8] underline">
                <Eye className="h-[15px] w-[15px]" />
                View Match Analysis
              </button>
            }
          />

          <div className={`${card} flex gap-[12px] px-[12px] py-[10px]`}>
            <span className="grid h-[38px] w-[38px] shrink-0 place-items-center rounded-full bg-[#fdf0dc]">
              <ClipboardList className="h-[20px] w-[20px] text-[#e8860f]" />
            </span>
            <div className="min-w-0">
              <h3 className="text-[17px] font-semibold" style={{ ...SERIF, color: INK }}>
                Before You Submit
              </h3>
              <div className="mt-[6px] space-y-[6px]">
                {CONSENTS.map(({ key, label }) => (
                  <label key={key} className="flex cursor-pointer items-start gap-[9px] text-[12.5px] leading-[1.4] text-[#26352c]">
                    <input
                      type="checkbox"
                      checked={answers.consents[key]}
                      onChange={(e) => set("consents", { ...answers.consents, [key]: e.target.checked })}
                      className="mt-[1px] h-[17px] w-[17px] shrink-0 accent-[#1d7a3e]"
                    />
                    <span>{label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <button type="button" onClick={submit} disabled={submitting} className={`${greenButton} h-[48px] w-full text-[17px]`}>
            {submitting ? (
              <>
                <Loader2 className="h-[19px] w-[19px] animate-spin" /> Submitting…
              </>
            ) : (
              <>
                Submit Application <ArrowRight className="h-[20px] w-[20px] text-[#f2c45a]" strokeWidth={2.4} />
              </>
            )}
          </button>
          {(error || (tried && issues.length > 0)) && (
            <p role="alert" className="rounded-[8px] border border-[#f1c9c2] bg-[#fdf1ef] px-[12px] py-[7px] text-[12.5px] leading-[1.4] text-[#9b2c1f]">
              {error || `Please ${issues.slice(0, 3).join(", ")}${issues.length > 3 ? " and more" : ""}.`}
            </p>
          )}
          <button type="button" onClick={goBack} className={`${outlineButton} h-[42px] w-full text-[16px]`}>
            <ArrowLeft className="h-[18px] w-[18px]" strokeWidth={2.4} />
            Back to Review Details
          </button>
          <p className="flex items-center justify-center gap-[8px] text-[11.5px] text-[#26352c]">
            <LockKeyhole className="h-[15px] w-[15px]" style={{ color: INK }} fill={INK} stroke="#fffefa" />
            Your data is secure and will only be used for recruitment purposes.
          </p>
        </aside>
      </div>
    </FlowPage>
  );
}

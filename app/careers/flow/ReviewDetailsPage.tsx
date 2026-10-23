"use client";

import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Camera,
  CircleCheck,
  FileText,
  GraduationCap,
  Leaf,
  LockKeyhole,
  MapPin,
  Settings,
  TrendingUp,
  UserRound,
  UserRoundCheck,
} from "lucide-react";
import { cvEmailOf, isValidEmail, phoneKey, type CandidateProfileData } from "../submit-resume/SubmitResume";
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
  educationOf,
  experienceOf,
  greenButton,
  outlineButton,
  profileOf,
  strList,
  usePhotoUpload,
} from "./shared";

/*
 * Careers → Review Your Details (after the WhatsApp OTP). Everything shown comes from the
 * CV analysis; the candidate can fix their contact details and add a photo here, then goes
 * on to "Complete Your Application".
 */

const DETAIL_ROW = "grid grid-cols-[112px_minmax(0,1fr)] gap-2 border-b border-[#eef1ea] py-[4px] text-[13px] last:border-0";
const EMPTY = <span className="text-[#8a968d]">Not mentioned in CV</span>;

function CandidateProfile({ c, onChange }: { c: CandidateProfileData; onChange: (patch: Partial<CandidateProfileData>) => void }) {
  const p = profileOf(c);
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState({ name: "", email: "", location: "" });
  const photo = usePhotoUpload(c, (url) => onChange({ image: url }));
  const verified = c.verifiedPhone && phoneKey(c.verifiedPhone) === phoneKey(c.phone);
  const location = c.location || p.location || "";

  const startEdit = () => {
    setDraft({ name: c.candidateName || "", email: c.email || "", location });
    setEditing(true);
  };
  // The CV's email is fixed; only a candidate whose CV had none can type one
  const cvEmail = cvEmailOf(c);
  const emailLocked = Boolean(cvEmail);
  const valid = draft.name.trim().length > 1 && (emailLocked || isValidEmail(draft.email));
  const save = () => {
    if (!valid) return;
    const name = draft.name.trim();
    onChange({ candidateName: name, firstName: name.split(" ")[0], email: emailLocked ? cvEmail : draft.email.trim(), location: draft.location.trim() || null });
    setEditing(false);
  };

  const input = "h-[28px] w-full rounded-[5px] border border-[#d7e2da] bg-white px-[8px] text-[13px] text-[#13261b] outline-none focus:border-[#1d7a3e]";

  return (
    <div className={`${card} px-4 py-[10px]`}>
      <CardTitle
        Icon={UserRound}
        title="Candidate Profile"
        action={
          editing ? (
            <div className="flex items-center gap-[8px]">
              <button type="button" onClick={() => setEditing(false)} className="text-[13px] font-medium text-[#6b7a87] hover:opacity-80">
                Cancel
              </button>
              <button type="button" onClick={save} disabled={!valid} className="rounded-[6px] bg-[#0f4d2a] px-[10px] py-[4px] text-[13px] font-medium text-white disabled:bg-[#b6c4bc]">
                Save
              </button>
            </div>
          ) : (
            <EditButton onClick={startEdit} />
          )
        }
      />
      {photo.input}
      <div className="mt-[8px] grid grid-cols-[112px_minmax(0,1fr)] gap-[12px]">
        <div className="relative">
          <PhotoBox src={c.image} name={c.candidateName || "Candidate"} busy={photo.busy} className="h-[140px] w-full" />
          <button
            type="button"
            onClick={photo.open}
            className="absolute bottom-[8px] left-1/2 flex -translate-x-1/2 items-center gap-[5px] whitespace-nowrap rounded-[6px] bg-white px-[9px] py-[4px] text-[12px] font-medium text-[#13261b] shadow-[0_2px_8px_rgba(0,0,0,0.15)]"
          >
            <Camera className="h-[14px] w-[14px] text-[#1d5a37]" />
            {c.image ? "Change Photo" : "Add Photo"}
          </button>
        </div>
        <div className="min-w-0">
          {editing ? (
            <div className="space-y-[6px] pt-[2px]">
              <input className={input} value={draft.name} onChange={(e) => setDraft({ ...draft, name: e.target.value })} placeholder="Full name *" aria-label="Full name" />
              {emailLocked ? (
                <>
                  <input className={`${input} cursor-not-allowed bg-[#f1f4f1] text-[#55635a]`} value={cvEmail} readOnly aria-readonly="true" aria-label="Email address (from your CV)" title="Taken from your CV" />
                  <p className="text-[11px] text-[#6b7a87]">Email is taken from your CV and cannot be changed.</p>
                </>
              ) : (
                <>
                  <input className={input} value={draft.email} onChange={(e) => setDraft({ ...draft, email: e.target.value.replace(/\s/g, "") })} placeholder="Add your email address *" aria-label="Email address" />
                  {draft.email && !isValidEmail(draft.email) && <p className="text-[11px] text-[#b23b2e]">Use a Gmail, Outlook or Yahoo email address.</p>}
                </>
              )}
              <input className={input} value={draft.location} onChange={(e) => setDraft({ ...draft, location: e.target.value })} placeholder="Current location" aria-label="Current location" />
              <p className="text-[11px] text-[#55635a]">Mobile number stays the one verified on WhatsApp.</p>
            </div>
          ) : (
            <dl>
              {[
                ["Full Name", c.candidateName],
                ["Email Address", c.email],
                ["Mobile Number", c.phone ? (
                  <span className="flex items-center gap-[5px]">
                    {c.phone}
                    {verified && <BadgeCheck className="h-[15px] w-[15px] text-[#1d7a3e]" aria-label="Verified on WhatsApp" />}
                  </span>
                ) : null],
                ["Gender", capitalise(p.gender)],
                ["Current Location", location],
                ["LinkedIn", c.linkedin],
              ].map(([label, value]) => (
                <div key={label as string} className={DETAIL_ROW}>
                  <dt className="text-[#3d4a40]">{label}</dt>
                  <dd className="min-w-0 break-words [overflow-wrap:anywhere]" style={{ color: INK }}>
                    {value || EMPTY}
                  </dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </div>
      {photo.error && <p className="mt-[6px] text-[12px] text-[#b23b2e]">{photo.error}</p>}
    </div>
  );
}

function PositionDetails({ c }: { c: CandidateProfileData }) {
  const j = c.jobDetails || {};
  const p = profileOf(c);
  const rows: [string, string | undefined][] = [
    ["Position Applied For", j.title],
    ["Job Location", j.location],
    ["Employment Type", j.type],
    ["Experience Required", j.experience],
    ["Qualification", j.education],
    ["Your Total Experience", p.totalExperience],
    ["Current Company", p.currentCompany],
    ["Current Designation", p.currentDesignation],
  ];
  return (
    <div className={`${card} px-4 py-[10px]`}>
      <CardTitle Icon={BriefcaseBusiness} title="Position Details" />
      <dl className="mt-[8px]">
        {rows.map(([label, value]) => (
          <div key={label} className="grid grid-cols-[170px_minmax(0,1fr)] gap-3 border-b border-[#eef1ea] py-[4px] text-[13px] last:border-0">
            <dt className="text-[#3d4a40]">{label}</dt>
            <dd className="min-w-0 truncate" style={{ color: INK }}>
              {value || EMPTY}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

/** `widths`: column widths (%); a column empty in every row is left out */
function Table({ head: allHead, rows: allRows, empty, widths }: { head: string[]; rows: string[][]; empty: string; widths?: number[] }) {
  const keep = allHead.map((_, i) => i === 0 || allRows.some((r) => r[i]?.trim()));
  const head = allHead.filter((_, i) => keep[i]);
  const rows = allRows.map((r) => r.filter((_, i) => keep[i]));
  const cols = widths?.filter((_, i) => keep[i]);
  const total = cols?.reduce((a, b) => a + b, 0) || 0;
  if (!rows.length) return <p className="mt-[10px] rounded-[8px] bg-[#f4f7f1] px-3 py-[10px] text-[12.5px] text-[#55635a]">{empty}</p>;
  return (
    <div className="mt-[8px] overflow-x-auto rounded-[8px] border border-[#e8ece2]">
      <table className="w-full min-w-[420px] table-fixed text-left text-[11.5px] xl:min-w-0">
        {cols && (
          <colgroup>
            {cols.map((w, i) => (
              <col key={i} style={{ width: `${(w / total) * 100}%` }} />
            ))}
          </colgroup>
        )}
        <thead className="bg-[#f1f6ee] text-[#1b4d2e]">
          <tr>
            {head.map((h) => (
              <th key={h} className="px-[7px] py-[6px] align-top font-semibold leading-tight">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-[#eef1ea] align-top">
              {row.map((cell, j) => (
                <td key={j} className="break-words px-[7px] py-[6px] leading-[1.35] text-[#26352c] [hyphens:auto]">
                  {cell || "—"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Skills({ c }: { c: CandidateProfileData }) {
  const skills = strList(profileOf(c).skills).slice(0, 10);
  return (
    <div className={`${card} px-4 py-[10px]`}>
      <CardTitle Icon={Settings} title="Skills" />
      {skills.length ? (
        <ul className="mt-[8px] grid grid-cols-1 gap-x-3 gap-y-[5px] sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s) => (
            <li key={s} className="flex items-start gap-[7px] text-[12.5px] leading-[1.3] text-[#26352c]">
              <CircleCheck className="mt-[1px] h-[15px] w-[15px] shrink-0 text-white" fill="#1d7a3e" strokeWidth={2.4} />
              <span className="min-w-0 [overflow-wrap:anywhere]">{capitalise(s)}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-[10px] text-[12.5px] text-[#55635a]">No skills listed in your CV.</p>
      )}
    </div>
  );
}

function Documents({ c }: { c: CandidateProfileData }) {
  const viewable = c.cvUrl && !c.cvUrl.startsWith("blob:") ? c.cvUrl : null;
  const docs = [
    { name: c.cvName, size: c.cvSize, url: viewable },
    ...(c.image ? [{ name: "Profile Photo", size: "Added", url: c.image.startsWith("data:") ? null : c.image }] : []),
  ];
  return (
    <div className={`${card} px-4 py-[10px]`}>
      <CardTitle Icon={FileText} title="Additional Documents" />
      <ul className="mt-[8px] space-y-[7px]">
        {docs.map((d) => (
          <li key={d.name} className="flex items-center gap-[8px] text-[12.5px] text-[#26352c]">
            <span className="grid h-[22px] w-[18px] shrink-0 place-items-center rounded-[3px] bg-[#d9322b] text-[7px] font-bold text-white">{d.name === "Profile Photo" ? "IMG" : "PDF"}</span>
            {d.url ? (
              <a href={d.url} target="_blank" rel="noreferrer" className="truncate hover:underline">
                {d.name}
              </a>
            ) : (
              <span className="truncate">{d.name}</span>
            )}
            <span className="shrink-0 text-[#7c8a80]">({d.size})</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Summary({ c }: { c: CandidateProfileData }) {
  const j = c.jobDetails || {};
  const strengths = strList(c.requirementsMet).slice(0, 5);
  const gaps = (strList(c.gaps).length ? strList(c.gaps) : strList(c.missingRequirements)).slice(0, 3);
  return (
    <>
      <div className={`${card} overflow-hidden`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/careers/review-healing.png" alt="Healing People, Enriching Lives" className="block h-[118px] w-full object-cover" />
        <div className="px-4 py-[10px]">
          <h3 className="text-[17px] font-semibold" style={{ ...SERIF, color: INK }}>
            Application Summary
          </h3>
          <div className="mt-[8px] flex items-start gap-[12px]">
            <UserRoundCheck className="mt-[2px] h-[38px] w-[38px] shrink-0" style={{ color: GREEN }} strokeWidth={1.6} />
            <div className="min-w-0">
              <p className="text-[17px] font-semibold leading-tight" style={{ ...SERIF, color: INK }}>
                {j.title}
              </p>
              <div className="mt-[5px] flex flex-wrap gap-x-[12px] gap-y-1 text-[12.5px] text-[#26352c]">
                {j.location && (
                  <span className="flex items-center gap-[4px]">
                    <MapPin className="h-[14px] w-[14px] text-[#d9730d]" />
                    {j.location}
                  </span>
                )}
                {j.type && (
                  <span className="flex items-center gap-[4px]">
                    <BriefcaseBusiness className="h-[14px] w-[14px] text-[#d9730d]" />
                    {j.type}
                  </span>
                )}
                {j.education && (
                  <span className="flex items-center gap-[4px]">
                    <TrendingUp className="h-[14px] w-[14px] text-[#d9730d]" />
                    {j.education}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProfileMatch score={c.score} />

      <div className={`${card} px-4 py-[10px]`}>
        <div className="flex gap-[10px]">
          <Leaf className="mt-[2px] h-[24px] w-[24px] shrink-0" style={{ color: GREEN }} fill="#2f8f3a" />
          <div className="min-w-0">
            <h3 className="text-[15px] font-semibold" style={{ ...SERIF, color: INK }}>
              Key Strengths Identified
            </h3>
            {strengths.length ? (
              <ul className="mt-[5px] space-y-[3px]">
                {strengths.map((s) => (
                  <li key={s} className="flex items-start gap-[7px] text-[12.5px] leading-[1.35] text-[#26352c]">
                    <CircleCheck className="mt-[1px] h-[15px] w-[15px] shrink-0 text-white" fill="#1d7a3e" strokeWidth={2.4} />
                    {s}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-[4px] text-[12.5px] text-[#55635a]">No specific strengths were listed by the analysis.</p>
            )}
          </div>
        </div>
      </div>

      <div className={`${card} px-4 py-[10px] xl:flex-1`}>
        <div className="flex gap-[10px]">
          <span className="grid h-[30px] w-[30px] shrink-0 place-items-center rounded-full bg-[#fdf0dc]">
            <TrendingUp className="h-[17px] w-[17px] text-[#e8860f]" strokeWidth={2.6} />
          </span>
          <div className="min-w-0">
            <h3 className="text-[15px] font-semibold" style={{ ...SERIF, color: INK }}>
              Areas for Improvement <span className="font-normal text-[#55635a]">(Optional)</span>
            </h3>
            {gaps.length ? (
              <ul className="mt-[5px] space-y-[3px]">
                {gaps.map((g) => (
                  <li key={g} className="flex items-start gap-[7px] text-[12.5px] leading-[1.35] text-[#26352c]">
                    <span className="mt-[5px] h-[8px] w-[8px] shrink-0 rounded-full bg-[#f0a43a]" />
                    {g}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-[4px] text-[12.5px] text-[#55635a]">No major gaps found in your CV for this role.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default function ReviewDetailsPage({
  candidate,
  onChange,
  onContinue,
  onBack,
}: {
  candidate: CandidateProfileData;
  onChange: (c: CandidateProfileData) => void;
  onContinue: () => void;
  /** Back to the AI analysis result */
  onBack: () => void;
}) {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  const patch = (p: Partial<CandidateProfileData>) => onChange({ ...candidate, ...p });
  const education = educationOf(candidate);
  const experience = experienceOf(candidate);

  return (
    <FlowPage>
      <FlowHero
        crumb="Review Details"
        title="Review Your Details"
        subtitle="Please review your information below before submitting your application."
        image="/assets/careers/review-hero.png"
        imageAlt="Together for a Healthier Tomorrow"
      />

      {/* Row 1: the steps. Row 2: the cards and the summary side by side — same top (below the
          banner art) and, as grid items of one row, the same height. */}
      <div className="mx-auto grid max-w-[1360px] grid-cols-1 gap-y-[16px] px-4 pb-6 pt-[12px] sm:px-8 xl:grid-cols-[minmax(0,1fr)_420px] xl:gap-x-[20px] lg:pb-[16px]">
        <div className="min-w-0 xl:col-start-1 xl:row-start-1 xl:mr-[8%]">
          <FlowSteps current={2} />
        </div>

        <div className="flex min-w-0 flex-col gap-[10px] xl:col-start-1 xl:row-start-2">

          <div className="grid grid-cols-1 gap-[10px] lg:grid-cols-2">
            <CandidateProfile c={candidate} onChange={patch} />
            <PositionDetails c={candidate} />
          </div>

          <div className="grid grid-cols-1 gap-[10px] lg:grid-cols-2">
            <div className={`${card} min-w-0 px-4 py-[10px]`}>
              <CardTitle Icon={GraduationCap} title="Education Details" />
              <Table
                head={["Qualification", "Institute / University", "Year", "Percentage", "Specialization"]}
                rows={education.map((e) => [e.qualification, e.institute, e.year, e.percentage, e.specialization])}
                widths={[28, 28, 10, 13, 22]}
                empty="No education details were found in your CV."
              />
            </div>
            <div className={`${card} min-w-0 px-4 py-[10px]`}>
              <CardTitle Icon={BriefcaseBusiness} title="Work Experience" />
              <Table
                head={["Organization", "Designation", "Duration", "Key Responsibilities"]}
                rows={experience.map((e) => [e.organization, e.designation, e.duration, e.responsibilities.length > 60 ? `${e.responsibilities.slice(0, 58).trim()}…` : e.responsibilities])}
                empty="No work experience was found in your CV."
                widths={[26, 28, 22, 24]}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-[10px] md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] xl:flex-1">
            <Skills c={candidate} />
            <Documents c={candidate} />
          </div>
        </div>

        <aside className="relative flex min-w-0 flex-col gap-[10px] xl:col-start-2 xl:row-start-2">
          <Summary c={candidate} />
          {/* A photo is required before the application can be submitted */}
          <button
            type="button"
            onClick={onContinue}
            disabled={!candidate.image}
            title={candidate.image ? undefined : "Add your photo in Candidate Profile to continue"}
            className={`${greenButton} h-[46px] w-full text-[17px]`}
          >
            Continue to Submit Application
            <ArrowRight className={`h-[20px] w-[20px] ${candidate.image ? "text-[#f2c45a]" : "text-white"}`} strokeWidth={2.4} />
          </button>
          {!candidate.image && (
            <p role="status" className="-mt-[4px] flex items-center justify-center gap-[6px] text-[12.5px] font-medium text-[#b23b2e]">
              <Camera className="h-[15px] w-[15px]" />
              Please add your photo in Candidate Profile to continue.
            </p>
          )}
          <button type="button" onClick={onBack} className={`${outlineButton} h-[42px] w-full text-[16px]`}>
            <ArrowLeft className="h-[18px] w-[18px]" strokeWidth={2.4} />
            Back to AI Analysis
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

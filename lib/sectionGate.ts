// Client-safe half of lib/sectionVisibility (no server fetch here).

/** True when none of the given section keys is switched off in admin. */
export type SectionGate = (...keys: string[]) => boolean;

export const makeSectionGate = (disabledKeys: readonly string[]): SectionGate => {
  const disabled = new Set(disabledKeys);
  return (...keys) => !keys.some((key) => disabled.has(key));
};

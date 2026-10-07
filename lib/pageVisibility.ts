import { API_URL } from "./api";

// Admin → Pages & CMS → "Published" toggle. The admin stores the status per page
// under its settings configKey (see admin/lib/cmsPages.ts pageDefinitions); this maps
// each configKey to the website route(s) it controls. A page set to "Draft" is removed
// from the navbar / dropdowns and its URL returns 404 (see proxy.ts).
// The homepage (landingPage) is intentionally absent: it can never be hidden.
export const PAGE_PATHS: Record<string, string[]> = {
  aboutPage: ["/about"],
  advisoryPage: ["/about/advisory_board_member"],
  nominateAdvisoryPage: ["/about/nominate_advisory_board"],
  supportServicesPage: ["/about/suport_services"],
  blogPage: ["/blog"],
  participateAsExhibitorPage: ["/participate-as-exhibitor", "/participate_as_exhibiture"],
  exhibitionCategoriesPage: ["/exhibition-categories"],
  bookAStandPage: ["/registration/book-a-stand"],
  visitorRegistrationPage: ["/registration/visitor-registration"],
  delegateRegistrationPage: ["/registration/delegate-registration"],
  buyerRegistrationPage: ["/registration/buyer-registration"],
  sponsorshipPage: ["/sponsorship", "/sponsership"],
  contactPage: ["/contact"],
  termsAndConditionsPage: ["/registration/terms-and-conditions"],
  privacyPolicyPage: ["/registration/privacy-policy"],
  refundPolicyPage: ["/registration/refund-policy"],
  whyVisitPage: ["/why-visit", "/participate/why-visit"],
  whyExhibitPage: ["/why-exhibit"],
  msmePage: ["/participate/msme"],
  msmeEligibilityCheckPage: ["/participate/msme/eligibility-check"],
  msmeApplyPage: ["/participate/msme/apply"],
  exhibitorsPage: ["/exhibitors"],
  buyerSellerMeetPage: ["/buyer-seller-meet"],
  galleryPage: ["/gallery"],
  awardsPage: ["/awards"],
  awardsNominationPage: ["/awards/nominations"],
  epromotionPage: ["/e-promotion-web"],
  partnershipPage: ["/partnership"],
  servicesPage: ["/our-services"],
  exhibitorLoginPage: ["/exhibitor-login"],
  buyerLoginPage: ["/buyer-login"],
  delegatesLoginPage: ["/delegates-login"],
  userLoginPage: ["/login"],
  msmeApplyParticipationDetailsPage: ["/participate/msme/apply/participation-details"],
  msmeApplyPaymentPage: ["/participate/msme/apply/payment"],
  printingBrandingPartnerPage: ["/partnership/printing-branding-partner", "/opportunity/partnership/printing-branding-partner"],
  travelPartnerPage: ["/partnership/travel-partner"],
  manpowerSupplyPartnerPage: ["/partnership/manpower-supply-partner"],
  logisticsPartnerPage: ["/partnership/logistics-partner"],
  stallDesignPartnerPage: ["/partnership/stall-design-partner"],
  hotelStayPartnerPage: ["/partnership/hotel-stay-partner"],
  careersPage: ["/careers"],
};

const normalizePath = (path: string) => {
  const clean = path.split(/[?#]/)[0].replace(/\/+$/, "");
  return (clean || "/").toLowerCase();
};

const PATH_TO_KEY: Record<string, string> = Object.fromEntries(
  Object.entries(PAGE_PATHS).flatMap(([key, paths]) => paths.map((p) => [normalizePath(p), key])),
);

/** The admin configKey that controls this website path, if any (exact match only). */
export function pageKeyForPath(path: string): string | undefined {
  if (!path.startsWith("/")) return undefined;
  return PATH_TO_KEY[normalizePath(path)];
}

/** True when the link (by explicit pageKey, or by its path) points to an unpublished page. */
export function isLinkHidden(hiddenKeys: ReadonlySet<string>, path?: string, pageKey?: string): boolean {
  if (hiddenKeys.size === 0) return false;
  const key = pageKey ?? (path ? pageKeyForPath(path) : undefined);
  return Boolean(key && hiddenKeys.has(key));
}

const PAGE_STATUS_URL = `${API_URL}/settings/page-status?website=Organicexpo`;

type PageStatusResponse = { data?: { pages?: Record<string, string> }; pages?: Record<string, string> } | null;

function hiddenKeysFromResponse(json: PageStatusResponse): string[] {
  const pages: Record<string, string> = json?.data?.pages ?? json?.pages ?? {};
  return Object.entries(pages)
    .filter(([key, status]) => status === "Draft" && key !== "landingPage")
    .map(([key]) => key);
}

/** Server-side (layout / sitemap): unpublished page keys, cached with the page. */
export async function getHiddenPageKeys(revalidate = 30): Promise<string[]> {
  try {
    const res = await fetch(PAGE_STATUS_URL, { next: { revalidate } });
    if (!res.ok) return [];
    return hiddenKeysFromResponse(await res.json());
  } catch {
    return [];
  }
}

/** Uncached fetch, for the browser (Navbar refresh) and proxy.ts. Returns null on failure. */
export async function fetchHiddenPageKeysFresh(timeoutMs = 2000): Promise<string[] | null> {
  try {
    const res = await fetch(PAGE_STATUS_URL, { cache: "no-store", signal: AbortSignal.timeout(timeoutMs) });
    if (!res.ok) return null;
    return hiddenKeysFromResponse(await res.json());
  } catch {
    return null;
  }
}

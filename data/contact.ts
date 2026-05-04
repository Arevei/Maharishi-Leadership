export const contactName = "Debashish Sarkar";
export const contactEmail = "debasish.sarkar@tm.org";

export type ContactInquiryTypeKey =
  | "general"
  | "intro-talk"
  | "corporate-team"
  | "individual-instruction"
  | "press-research";

export type ContactInquiryType = {
  key: ContactInquiryTypeKey;
  label: string;
  subject: string;
  description: string;
  responseNote: string;
  prompt: string;
};

export const contactInquiryTypes: ContactInquiryType[] = [
  {
    key: "general",
    label: "General inquiry",
    subject: "Maharishi Center for Leadership - General Inquiry",
    description:
      "For leaders, teams, or partners who want a tailored conversation about the programme.",
    responseNote: "Best for first conversations and broad enquiries.",
    prompt:
      "Tell us a little about your context, what sparked your interest, and what kind of outcome you are exploring.",
  },
  {
    key: "intro-talk",
    label: "Free intro talk",
    subject: "Maharishi Center for Leadership - Free Intro Talk",
    description:
      "For individuals or teams who want a guided introduction before deciding on next steps.",
    responseNote: "Ideal for a first-touch 30-minute conversation.",
    prompt:
      "Share who should attend, what questions you want answered, and any time preferences for the talk.",
  },
  {
    key: "corporate-team",
    label: "Corporate / team programme",
    subject: "Maharishi Center for Leadership - Corporate Team Programme Inquiry",
    description:
      "For founders, CHROs, business heads, and leadership teams exploring organisational rollout.",
    responseNote:
      "Best for team-based delivery, executive cohorts, and culture-performance conversations.",
    prompt:
      "Tell us about your team size, leadership level, current challenges, and what success would look like.",
  },
  {
    key: "individual-instruction",
    label: "Individual instruction",
    subject: "Maharishi Center for Leadership - Individual Instruction Inquiry",
    description:
      "For one-to-one instruction and a more personal path into the programme.",
    responseNote: "Best for private learning and direct teacher support.",
    prompt:
      "Share your role, what you want to improve, and whether you are exploring personal or executive application.",
  },
  {
    key: "press-research",
    label: "Press / research",
    subject: "Maharishi Center for Leadership - Press and Research Inquiry",
    description:
      "For media, academic, institutional, or research-based conversations.",
    responseNote:
      "Best for interviews, data requests, speaking opportunities, and evidence questions.",
    prompt:
      "Tell us about your publication, institution, or research focus, along with the specific information you need.",
  },
];

const contactInquiryTypeKeySet = new Set<ContactInquiryTypeKey>(
  contactInquiryTypes.map((item) => item.key),
);

export function isContactInquiryTypeKey(
  value: string | undefined,
): value is ContactInquiryTypeKey {
  return value !== undefined && contactInquiryTypeKeySet.has(value as ContactInquiryTypeKey);
}

export function resolveContactInquiryType(
  value: string | string[] | undefined,
): ContactInquiryTypeKey {
  const candidate = Array.isArray(value) ? value[0] : value;
  return isContactInquiryTypeKey(candidate) ? candidate : "general";
}

export function getContactHref(type: ContactInquiryTypeKey = "general") {
  return type === "general" ? "/contact" : `/contact?type=${type}`;
}

export function getContactInquiryType(type: ContactInquiryTypeKey) {
  return (
    contactInquiryTypes.find((item) => item.key === type) ?? contactInquiryTypes[0]
  );
}

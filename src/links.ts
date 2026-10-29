export const MEMBERSHIP_URL = "https://www.showpass.com/m/hksa-2627-general-membership/";

const SPONSOR_EMAIL = "pr.ubc.hksa@gmail.com";
const SPONSOR_SUBJECT = "HKSA 2026/27 Sponsorship Inquiry";
const SPONSOR_BODY =
  "Hi HKSA team,\n\nWe're interested in sponsoring UBC HKSA this year. Could you share more details?\n\nBusiness name:\nContact name:\nPhone:\n\nThanks!";

// Opens the visitor's email app with a drafted message.
export const SPONSOR_URL = `mailto:${SPONSOR_EMAIL}?subject=${encodeURIComponent(SPONSOR_SUBJECT)}&body=${encodeURIComponent(SPONSOR_BODY)}`;

export const MEMBERSHIP_URL = "https://www.showpass.com/m/hksa-2627-general-membership/";

export const SPONSOR_EMAIL = "pr.ubc.hksa@gmail.com";
const SPONSOR_SUBJECT = "HKSA 2026/27 Sponsorship Inquiry";
const SPONSOR_BODY =
  "Hi HKSA team,\n\nWe're interested in sponsoring UBC HKSA this year. Could you share more details?\n\nBusiness name:\nContact name:\nPhone:\n\nThanks!";

const subject = encodeURIComponent(SPONSOR_SUBJECT);
const body = encodeURIComponent(SPONSOR_BODY);

// Opens a compose window in Gmail's web app.
export const SPONSOR_GMAIL_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${SPONSOR_EMAIL}&su=${subject}&body=${body}`;

// Opens whatever mail app the visitor has set up. Kept as a last resort.
export const SPONSOR_MAILTO_URL = `mailto:${SPONSOR_EMAIL}?subject=${subject}&body=${body}`;

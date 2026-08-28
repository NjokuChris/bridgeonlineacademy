export interface NavLink {
  label: string;
  href: string;
}

/** Main navigation for the BOA marketing site. */
export const NAV_ITEMS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Programmes", href: "/programmes" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
];

export const PRIMARY_CTA: NavLink = { label: "Start Learning", href: "/enrol" };
export const TEACHER_CTA: NavLink = { label: "Become a Teacher", href: "/teach" };

// Replace these placeholders with BOA's confirmed contact details before launch.
export const WHATSAPP_NUMBER = "+2348000000000";
export const PHONE_NUMBER = "+234 800 000 0000";
export const EMAIL_ADDRESS = "admissions@bridgeonlineacademy.com";

import { siteConfig } from "@/config/site";

export interface NavLink {
  label: string;
  href: string;
}

/** Main navigation for the BOA marketing site. */
export const NAV_ITEMS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Programmes", href: "/programmes" },
  { label: "About", href: "/about" },
  { label: "Team & Tutors", href: "/team" },
  { label: "Contact & FAQ", href: "/contact" },
];

export const PRIMARY_CTA: NavLink = { label: "Start Learning", href: "/enrol" };
export const TEACHER_CTA: NavLink = { label: "Become a Teacher", href: "/teach" };

// All contact values come from siteConfig. Do not hardcode these here.
export const WHATSAPP_NUMBER = siteConfig.contact.whatsapp.e164;
export const PHONE_NUMBER = siteConfig.contact.phones[0].display;
export const EMAIL_ADDRESS = siteConfig.contact.email;

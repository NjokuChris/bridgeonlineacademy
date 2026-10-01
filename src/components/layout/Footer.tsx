import Link from "next/link";
import { FaWhatsapp, FaTiktok, FaInstagram } from "react-icons/fa6";
import { FiPhone, FiMail } from "react-icons/fi";
import { siteConfig } from "@/config/site";
import { whatsappLink, telLink, mailtoLink } from "@/lib/contact";
import Logo from "@/components/ui/Logo";

const exploreLinks: [string, string][] = [
  ["Home", "/"],
  ["Programmes", "/programmes"],
  ["Team & Tutors", "/team"],
  ["About BOA", "/about"],
  ["Contact & FAQ", "/contact"],
];

const admissionsLinks: [string, string][] = [
  ["Start Enrolment", "/enrol"],
  ["Become a Teacher", "/teach"],
  ["Full Curriculum", "/programmes"],
  ["Individual Subjects", "/programmes"],
];

const legalLinks: [string, string][] = [
  ["Privacy Policy", "/privacy"],
  ["Terms of Use", "/terms"],
];

export default function Footer() {
  const phone1 = siteConfig.contact.phones[0];
  const phone2 = siteConfig.contact.phones[1];

  return (
    <footer className="border-t border-border bg-white text-ink">
      <div className="shell grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-20">
        {/* Brand column */}
        <div className="lg:col-span-4">
          <Logo size="lg" />
          <p className="mt-4 text-base font-semibold text-ink">
            {siteConfig.slogan}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted max-w-sm">
            Live, teacher-led online learning for students anywhere. Full Nigerian
            curriculum programmes and individual subject mastery.
          </p>

          {/* Social links */}
          <div className="mt-6 flex items-center gap-3">
            <a
              href={siteConfig.contact.whatsapp.base}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
            >
              <FaWhatsapp size={18} aria-hidden="true" />
            </a>
            <a
              href={siteConfig.social.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Bridge Online Academy on TikTok"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-white transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
            >
              <FaTiktok size={16} aria-hidden="true" />
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Bridge Online Academy on Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E1306C] text-white transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1306C] focus-visible:ring-offset-2"
            >
              <FaInstagram size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Explore column */}
        <nav aria-label="Explore" className="lg:col-span-3">
          <h2 className="text-xs font-bold uppercase tracking-widest text-link">
            Explore
          </h2>
          <ul className="mt-5 space-y-3">
            {exploreLinks.map(([label, href]) => (
              <li key={label}>
                <Link
                  href={href}
                  className="focus-ring text-sm text-muted transition-colors hover:text-link"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Admissions column */}
        <nav aria-label="Admissions" className="lg:col-span-2">
          <h2 className="text-xs font-bold uppercase tracking-widest text-link">
            Admissions
          </h2>
          <ul className="mt-5 space-y-3">
            {admissionsLinks.map(([label, href]) => (
              <li key={label}>
                <Link
                  href={href}
                  className="focus-ring text-sm text-muted transition-colors hover:text-link"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact column */}
        <div className="lg:col-span-3">
          <h2 className="text-xs font-bold uppercase tracking-widest text-link">
            Direct Contact
          </h2>
          <ul className="mt-5 space-y-3.5 text-sm text-muted">
            <li>
              <a
                href={telLink(phone1.e164)}
                className="focus-ring inline-flex items-center gap-2.5 transition-colors hover:text-link"
              >
                <FiPhone className="text-link shrink-0" size={16} aria-hidden="true" />
                <span>{phone1.display}</span>
              </a>
            </li>
            <li>
              <a
                href={telLink(phone2.e164)}
                className="focus-ring inline-flex items-center gap-2.5 transition-colors hover:text-link"
              >
                <FiPhone className="text-link shrink-0" size={16} aria-hidden="true" />
                <span>{phone2.display}</span>
              </a>
            </li>
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex items-center gap-2.5 transition-colors hover:text-link"
              >
                <FaWhatsapp className="text-[#25D366] shrink-0" size={16} aria-hidden="true" />
                <span>Chat on WhatsApp</span>
              </a>
            </li>
            <li>
              <a
                href={mailtoLink()}
                className="focus-ring inline-flex items-center gap-2.5 transition-colors hover:text-link"
              >
                <FiMail className="text-link shrink-0" size={16} aria-hidden="true" />
                <span className="break-all">{siteConfig.contact.email}</span>
              </a>
            </li>
          </ul>
          <div className="mt-6 rounded-xl bg-bg p-3.5 border border-border/80">
            <p className="text-xs font-medium text-muted">
              Live sessions run 3 days a week. Admissions enquiries answered within 24 hours.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar with single copyright and legal links — second logo removed */}
      <div className="border-t border-border bg-bg/50">
        <div className="shell flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Bridge Online Academy. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            {legalLinks.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="focus-ring text-xs text-muted transition-colors hover:text-link"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

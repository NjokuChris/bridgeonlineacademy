import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp, FaTiktok, FaInstagram } from "react-icons/fa6";
import { siteConfig } from "@/config/site";
import { whatsappLink, telLink, mailtoLink } from "@/lib/contact";

const exploreLinks: [string, string][] = [
  ["Home", "/"],
  ["About", "/about"],
  ["Programmes", "/programmes"],
  ["FAQ", "/faq"],
  ["Contact", "/contact"],
];

const admissionsLinks: [string, string][] = [
  ["Start Enrolment", "/enrol"],
  ["Become a Teacher", "/teach"],
];

const legalLinks: [string, string][] = [
  ["Privacy Policy", "/privacy"],
  ["Terms of Use", "/terms"],
];

export default function Footer() {
  const phone1 = siteConfig.contact.phones[0];
  const phone2 = siteConfig.contact.phones[1];

  return (
    <footer className="border-t border-border bg-white">
      <div className="shell grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand column */}
        <div>
          <Link href="/" aria-label="Bridge Online Academy home">
            <Image
              src="/boa-logo.png"
              alt="Bridge Online Academy"
              width={120}
              height={70}
              className="h-auto w-16 rounded"
            />
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            {siteConfig.slogan}
          </p>
          {/* Social links — 44px tap targets */}
          <div className="mt-5 flex items-center gap-3">
            <a
              href={siteConfig.contact.whatsapp.base}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
            >
              <FaWhatsapp size={19} aria-hidden="true" />
            </a>
            <a
              href={siteConfig.social.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Bridge Online Academy on TikTok"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
            >
              <FaTiktok size={17} aria-hidden="true" />
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Bridge Online Academy on Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E1306C] text-white transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1306C] focus-visible:ring-offset-2"
            >
              <FaInstagram size={19} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Explore column */}
        <nav aria-label="Explore">
          <h2 className="text-sm font-bold uppercase tracking-widest text-ink">Explore</h2>
          <ul className="mt-4 space-y-3">
            {exploreLinks.map(([label, href]) => (
              <li key={label}>
                <Link href={href} className="focus-ring body-sm text-muted transition-colors hover:text-link">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Admissions column */}
        <nav aria-label="Admissions">
          <h2 className="text-sm font-bold uppercase tracking-widest text-ink">Admissions</h2>
          <ul className="mt-4 space-y-3">
            {admissionsLinks.map(([label, href]) => (
              <li key={label}>
                <Link href={href} className="focus-ring body-sm text-muted transition-colors hover:text-link">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact column */}
        <nav aria-label="Contact">
          <h2 className="text-sm font-bold uppercase tracking-widest text-ink">Contact</h2>
          <ul className="mt-4 space-y-3">
            <li>
              <a href={telLink(phone1.e164)} className="focus-ring body-sm text-muted transition-colors hover:text-link">
                {phone1.display}
              </a>
            </li>
            <li>
              <a href={telLink(phone2.e164)} className="focus-ring body-sm text-muted transition-colors hover:text-link">
                {phone2.display}
              </a>
            </li>
            <li>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="focus-ring body-sm text-muted transition-colors hover:text-link">
                WhatsApp us
              </a>
            </li>
            <li>
              <a href={mailtoLink()} className="focus-ring body-sm text-muted transition-colors hover:text-link">
                {siteConfig.contact.email}
              </a>
            </li>
          </ul>

          <h2 className="mt-7 text-sm font-bold uppercase tracking-widest text-ink">Legal</h2>
          <ul className="mt-4 space-y-3">
            {legalLinks.map(([label, href]) => (
              <li key={label}>
                <Link href={href} className="focus-ring body-sm text-muted transition-colors hover:text-link">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-border">
        <div className="shell flex items-center justify-between py-5">
          <Link href="/" aria-label="Bridge Online Academy home" className="focus-ring">
            <Image src="/boa-logo.png" alt="Bridge Online Academy" width={70} height={40} className="h-auto w-12 rounded" />
          </Link>
          <p className="body-sm text-muted">
            &copy; {new Date().getFullYear()} Bridge Online Academy
          </p>
        </div>
      </div>
    </footer>
  );
}

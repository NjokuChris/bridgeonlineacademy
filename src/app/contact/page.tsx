import type { Metadata } from "next";
import SiteLayout from "@/components/layout/SiteLayout";
import AnimateIn from "@/components/ui/AnimateIn";
import SectionLabel from "@/components/ui/SectionLabel";
import RegisterCTA from "@/components/home/RegisterCTA";
import { FaWhatsapp, FaTiktok, FaInstagram } from "react-icons/fa6";
import { FiPhone, FiMail } from "react-icons/fi";
import { siteConfig } from "@/config/site";
import { whatsappLink, telLink, mailtoLink } from "@/lib/contact";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Bridge Online Academy by WhatsApp, phone or email. You can also use the contact form or request a meeting with Ms Zika or another tutor.",
};

export default function ContactPage() {
  const phone1 = siteConfig.contact.phones[0];
  const phone2 = siteConfig.contact.phones[1];

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="bg-bg py-20 lg:py-28">
        <div className="shell max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-widest text-link">
            Contact
          </p>
          <h1 className="mt-5 font-display text-5xl font-semibold leading-tight text-ink lg:text-6xl">
            Get in touch with BOA.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-muted">
            Whether you have a question about enrolment, want to speak with a
            tutor or just need more information, we are happy to help.
          </p>
        </div>
      </section>

      {/* Contact details + form */}
      <section className="bg-white py-20 lg:py-28">
        <div className="shell grid gap-14 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          {/* Left: contact details */}
          <div>
            <AnimateIn>
              <SectionLabel>Reach us directly</SectionLabel>
            </AnimateIn>
            <AnimateIn delay={0.08}>
              <h2 className="mt-5 font-display text-3xl font-semibold text-ink">
                We are here for you.
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.14}>
              <p className="mt-4 leading-relaxed text-muted">
                WhatsApp is usually the quickest way to reach us. You can also
                call, email or message on social media.
              </p>
            </AnimateIn>

            <ul className="mt-8 space-y-5">
              <AnimateIn delay={0.18}>
                <li>
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-base font-semibold text-ink hover:text-link"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white">
                      <FaWhatsapp size={18} aria-hidden="true" />
                    </span>
                    WhatsApp us
                  </a>
                </li>
              </AnimateIn>
              <AnimateIn delay={0.22}>
                <li>
                  <a
                    href={telLink(phone1.e164)}
                    className="flex items-center gap-3 text-base text-ink hover:text-link"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pill text-pill-ink">
                      <FiPhone size={18} aria-hidden="true" />
                    </span>
                    {phone1.display}
                  </a>
                </li>
              </AnimateIn>
              <AnimateIn delay={0.26}>
                <li>
                  <a
                    href={telLink(phone2.e164)}
                    className="flex items-center gap-3 text-base text-ink hover:text-link"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pill text-pill-ink">
                      <FiPhone size={18} aria-hidden="true" />
                    </span>
                    {phone2.display}
                  </a>
                </li>
              </AnimateIn>
              <AnimateIn delay={0.3}>
                <li>
                  <a
                    href={mailtoLink()}
                    className="flex items-center gap-3 text-base text-ink hover:text-link"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pill text-pill-ink">
                      <FiMail size={18} aria-hidden="true" />
                    </span>
                    {siteConfig.contact.email}
                  </a>
                </li>
              </AnimateIn>
            </ul>

            <div className="mt-10">
              <AnimateIn delay={0.34}>
                <p className="text-sm font-bold uppercase tracking-widest text-muted">
                  Follow us
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href={siteConfig.social.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Bridge Online Academy on TikTok"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-white transition-opacity hover:opacity-80"
                  >
                    <FaTiktok size={16} aria-hidden="true" />
                  </a>
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Bridge Online Academy on Instagram"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E1306C] text-white transition-opacity hover:opacity-80"
                  >
                    <FaInstagram size={18} aria-hidden="true" />
                  </a>
                </div>
              </AnimateIn>
            </div>
          </div>

          {/* Right: contact form */}
          <AnimateIn delay={0.1} direction="left">
            <ContactForm />
          </AnimateIn>
        </div>
      </section>

      <RegisterCTA />
    </SiteLayout>
  );
}

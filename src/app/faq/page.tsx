import type { Metadata } from "next";
import Script from "next/script";
import SiteLayout from "@/components/layout/SiteLayout";
import FAQs from "@/components/home/FAQs";
import { ALL_FAQS } from "@/data/faqs";
import RegisterCTA from "@/components/home/RegisterCTA";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to the questions families ask most often about Bridge Online Academy: who can join, what we teach, how classes work and how to enrol.",
};

/** FAQPage structured data generated from the same source array as the
 *  visible FAQ list. They cannot drift apart. */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: ALL_FAQS.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
};

export default function FAQPage() {
  return (
    <SiteLayout>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="bg-bg py-20 lg:py-28">
        <div className="shell max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-widest text-link">
            FAQ
          </p>
          <h1 className="mt-5 font-display text-5xl font-semibold leading-tight text-ink lg:text-6xl">
            Your questions, answered.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-muted">
            If you do not find what you need here, reach us on WhatsApp or
            through the{" "}
            <a href="/contact" className="font-semibold text-link hover:underline">
              Contact page
            </a>
            .
          </p>
        </div>
      </section>

      <FAQs standalone />

      {/* Organisation structured data */}
      <Script
        id="org-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Organization", "EducationalOrganization"],
            name: siteConfig.name,
            url: siteConfig.url,
            email: siteConfig.contact.email,
            telephone: siteConfig.contact.phones.map((p) => p.e164),
            sameAs: [
              siteConfig.social.tiktok,
              siteConfig.social.instagram,
            ],
          }),
        }}
      />

      <RegisterCTA />
    </SiteLayout>
  );
}

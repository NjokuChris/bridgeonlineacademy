import type { Metadata } from "next";
import SiteLayout from "@/components/layout/SiteLayout";
import RegisterCTA from "@/components/home/RegisterCTA";
import { siteConfig } from "@/config/site";
import { mailtoLink } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Bridge Online Academy collects, uses and protects the personal data of families, learners and tutors.",
};

const updated = "September 2026";

export default function PrivacyPage() {
  return (
    <SiteLayout>
      <section className="bg-bg py-20 lg:py-28">
        <div className="shell max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-link">
            Legal
          </p>
          <h1 className="mt-5 font-display text-5xl font-semibold leading-tight text-ink lg:text-6xl">
            Privacy Policy
          </h1>
          <p className="mt-5 text-sm text-muted">Last updated: {updated}</p>
          <p className="mt-2 text-sm text-muted">
            This policy covers Bridge Online Academy ({siteConfig.url}). If you
            have questions, email us at{" "}
            <a href={mailtoLink("Privacy query")} className="text-link hover:underline">
              {siteConfig.contact.email}
            </a>
            .
          </p>

          <div className="prose-policy mt-14 space-y-10">
            <Section title="1. What we collect">
              <p>
                When a parent or guardian submits an enrolment form, we collect
                the parent's full name, email address, phone number and country
                of residence, and the learner's full name and current school
                year or date of birth.
              </p>
              <p>
                Once a learner is enrolled, we collect attendance records, test
                scores, assignment submissions and teacher comments as part of
                normal teaching activity.
              </p>
              <p>
                If you use the contact form or request a meeting, we collect
                the name, email and message you provide.
              </p>
              <p>
                If a tutor applies to teach at BOA, we collect the information
                they submit in their application, including any CV they upload.
              </p>
              <p>
                When fees are paid through the portal, our payment provider
                processes card details. BOA does not receive or store card
                numbers.
              </p>
            </Section>

            <Section title="2. Why we collect it">
              <p>
                We use personal data to run the school: to follow up on
                enrolment requests, to deliver lessons and track progress, to
                communicate with parents about their child, to process fee
                payments and to respond to contact and meeting requests.
              </p>
              <p>
                Tutor application data is used to assess suitability and
                communicate with candidates.
              </p>
            </Section>

            <Section title="3. Who can see it">
              <p>
                A family's data is accessible to the parents or guardians
                linked to that family, the tutors assigned to their child's
                classes, and BOA's admin team. No family can see another
                family's data.
              </p>
              <p>
                Tutors can see the names and progress records of the learners
                they teach. They cannot see other learners' data.
              </p>
              <p>
                We do not sell personal data to third parties. We share data
                with service providers only to the extent needed to run the
                school (for example a payment processor or a transactional
                email service). Those providers are required to keep data
                secure.
              </p>
            </Section>

            <Section title="4. Children's data">
              <p>
                BOA collects data about children as part of delivering
                education. We treat this data with particular care. Learner
                data is only accessible to the family account linked to that
                learner and to the tutors who teach them.
              </p>
              <p>
                Parents and guardians are responsible for the accuracy of the
                information they provide about their child.
              </p>
            </Section>

            <Section title="5. How long we keep it">
              <p>
                We keep enrolment and learning records for as long as the
                family is active with BOA and for a reasonable period
                afterwards in case of follow-up questions. If you ask us to
                delete your data, we will do so unless we are required to keep
                it for a legal reason.
              </p>
              <p>
                Contact and meeting request messages are kept until the
                conversation is resolved and for a short period afterwards.
              </p>
              <p>
                Unsuccessful tutor applications are kept for up to six months
                and then deleted.
              </p>
            </Section>

            <Section title="6. How we protect it">
              <p>
                Data is stored in a secure cloud database with access controls.
                Connections to the site and portal use HTTPS. Passwords are
                stored as secure hashes. Access to production data is
                restricted to the admin team.
              </p>
              <p>
                We do not log personal data (names, emails, phone numbers, child
                details) to external services in production.
              </p>
            </Section>

            <Section title="7. Your rights">
              <p>
                You can ask us to correct inaccurate data, delete your data, or
                provide a copy of what we hold about you. Use the request form
                in your account settings or email us at{" "}
                <a
                  href={mailtoLink("Data request")}
                  className="text-link hover:underline"
                >
                  {siteConfig.contact.email}
                </a>
                .
              </p>
              <p>
                We will respond within a reasonable time. If we cannot fulfil a
                request, we will explain why.
              </p>
            </Section>

            <Section title="8. Cookies and tracking">
              <p>
                The public website uses only the cookies and scripts needed to
                run it. We do not add third-party analytics or advertising
                trackers without telling you.
              </p>
            </Section>

            <Section title="9. Legal review">
              <p className="rounded border border-border bg-white px-4 py-3 text-sm text-muted">
                This policy has been prepared in good faith and reflects how BOA
                currently handles data. It is pending formal legal review. If
                you have specific compliance questions, contact us directly.
              </p>
            </Section>

            <Section title="10. Contact">
              <p>
                Email:{" "}
                <a
                  href={mailtoLink("Privacy query")}
                  className="text-link hover:underline"
                >
                  {siteConfig.contact.email}
                </a>
              </p>
              <p>Website: {siteConfig.url}</p>
            </Section>
          </div>
        </div>
      </section>

      <RegisterCTA />
    </SiteLayout>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="font-display text-xl font-semibold text-ink">{title}</h2>
      <div className="mt-3 space-y-3 leading-relaxed text-muted">{children}</div>
    </div>
  );
}

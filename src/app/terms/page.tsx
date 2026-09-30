import type { Metadata } from "next";
import SiteLayout from "@/components/layout/SiteLayout";
import RegisterCTA from "@/components/home/RegisterCTA";
import { siteConfig } from "@/config/site";
import { mailtoLink } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms that govern enrolment, fees, conduct and use of the Bridge Online Academy portal.",
};

const updated = "September 2026";

export default function TermsPage() {
  return (
    <SiteLayout>
      <section className="bg-bg py-20 lg:py-28">
        <div className="shell max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-link">
            Legal
          </p>
          <h1 className="mt-5 font-display text-5xl font-semibold leading-tight text-ink lg:text-6xl">
            Terms of Use
          </h1>
          <p className="mt-5 text-sm text-muted">Last updated: {updated}</p>
          <p className="mt-2 text-sm text-muted">
            These terms apply to your use of the Bridge Online Academy website
            and portal at{" "}
            <a href={siteConfig.url} className="text-link hover:underline">
              {siteConfig.url}
            </a>
            . By using the site or enrolling with BOA, you agree to these terms.
            Questions can be sent to{" "}
            <a
              href={mailtoLink("Terms query")}
              className="text-link hover:underline"
            >
              {siteConfig.contact.email}
            </a>
            .
          </p>

          <div className="mt-14 space-y-10">
            <Section title="1. Enrolment">
              <p>
                Enrolment begins when a parent or guardian submits the
                enrolment form. Submission does not guarantee a place. A BOA
                team member will follow up to confirm availability and the
                programme details. A place is confirmed when BOA notifies you
                in writing (by email or WhatsApp).
              </p>
              <p>
                The parent or guardian is responsible for providing accurate
                information about the learner. If information changes, let us
                know as soon as possible.
              </p>
            </Section>

            <Section title="2. Fees and payment">
              <p>
                Fees are invoiced monthly and paid online through the parent
                portal. The current fee is displayed in your portal account. A
                receipt is available to download after each payment.
              </p>
              <p>
                BOA will give reasonable notice of any fee change. Fee changes
                take effect from the start of the next billing period after
                notice is given.
              </p>
              <p>
                Payments are processed securely by our payment provider. BOA
                does not store card details.
              </p>
              <p className="rounded border border-border bg-white px-4 py-3 text-sm text-muted">
                The specific fee amount and payment schedule are confirmed at
                enrolment. Please speak with the BOA team if you have questions
                about fees.
              </p>
            </Section>

            <Section title="3. Missed sessions">
              <p>
                If a learner misses a session, the family is responsible for
                letting BOA know in advance where possible. BOA does not
                automatically refund or reschedule missed sessions, but the
                team can discuss arrangements if a learner is absent for an
                extended period.
              </p>
              <p>
                If BOA cancels a session, we will notify families promptly and
                make reasonable efforts to reschedule or offer an alternative.
              </p>
            </Section>

            <Section title="4. Conduct in live classes">
              <p>
                Learners are expected to treat tutors and classmates with
                respect. Behaviour that disrupts a session, causes distress to
                others or is otherwise inappropriate may result in a learner
                being removed from a session.
              </p>
              <p>
                Repeated conduct issues will be discussed with the parent or
                guardian. In serious cases, BOA reserves the right to end
                enrolment.
              </p>
              <p>
                Live sessions may not be recorded by participants without
                explicit permission from BOA and all other participants.
              </p>
            </Section>

            <Section title="5. Use of the portal">
              <p>
                Access to the portal is personal. Do not share your login
                credentials. You are responsible for all activity under your
                account.
              </p>
              <p>
                The portal is for educational use. Do not use it to upload,
                share or transmit unlawful, harmful or offensive content.
              </p>
              <p>
                BOA takes reasonable steps to keep the portal available, but
                does not guarantee uninterrupted access. Maintenance or
                technical issues may cause temporary downtime.
              </p>
            </Section>

            <Section title="6. Uploaded content">
              <p>
                When a learner submits an assignment or a tutor uploads a
                resource, the content remains the property of the person who
                created it. By uploading, you give BOA permission to use it for
                the educational purposes of the school (for example, for tutors
                to review and mark it).
              </p>
              <p>
                Do not upload content that infringes copyright or that you do
                not have the right to share.
              </p>
            </Section>

            <Section title="7. Ending the arrangement">
              <p>
                Either side may end the enrolment with reasonable written
                notice. The family sends notice by email or WhatsApp; BOA sends
                notice by email to the registered parent address.
              </p>
              <p>
                Fees already paid are non-refundable unless BOA ends the
                arrangement without cause, in which case BOA will refund fees
                paid for sessions not yet delivered.
              </p>
              <p>
                BOA may end an enrolment immediately if there is a serious
                safeguarding concern, unpaid fees over a reasonable period, or
                continued conduct issues after warnings.
              </p>
            </Section>

            <Section title="8. Changes to these terms">
              <p>
                BOA may update these terms from time to time. We will notify
                enrolled families of material changes by email. Continued use of
                the portal after notice constitutes acceptance.
              </p>
            </Section>

            <Section title="9. Legal review">
              <p className="rounded border border-border bg-white px-4 py-3 text-sm text-muted">
                These terms have been prepared in good faith and reflect how BOA
                currently operates. They are pending formal legal review. If you
                have specific legal questions, contact us directly.
              </p>
            </Section>

            <Section title="10. Contact">
              <p>
                Email:{" "}
                <a
                  href={mailtoLink("Terms query")}
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

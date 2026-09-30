import type { Metadata } from "next";
import SiteLayout from "@/components/layout/SiteLayout";
import Enrollment from "@/components/home/Enrollment";

export const metadata: Metadata = {
  title: "Enrol",
  description:
    "Start your enrolment at Bridge Online Academy. Share your details and a BOA team member will follow up with you directly.",
};

export default function EnrolPage() {
  return (
    <SiteLayout>
      <section className="bg-bg py-20 lg:py-28">
        <div className="shell max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-widest text-link">
            Enrolment
          </p>
          <h1 className="font-display text-5xl font-semibold leading-tight text-ink lg:text-6xl">
            Start learning with BOA.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-muted">
            Fill in the form below and a BOA team member will follow up with you
            directly. They will talk through the right programme for your child
            and explain the next steps. The process is straightforward and the
            team is friendly.
          </p>
        </div>
      </section>
      <Enrollment type="student" />
    </SiteLayout>
  );
}

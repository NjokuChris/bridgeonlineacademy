import type { Metadata } from "next";
import SiteLayout from "@/components/layout/SiteLayout";
import AnimateIn from "@/components/ui/AnimateIn";
import SectionLabel from "@/components/ui/SectionLabel";
import Enrollment from "@/components/home/Enrollment";

export const metadata: Metadata = {
  title: "Become a Teacher",
  description:
    "Join the Bridge Online Academy teaching team. We look for tutors with strong subject knowledge, online teaching ability and genuine care for every learner.",
};

/**
 * These standards are proposed by the development team and must be approved
 * by the client before launch. See docs/CLAIMS_TO_CONFIRM.md.
 */
const STANDARDS = [
  {
    title: "Strong subject knowledge",
    desc: "You know your subject well enough to explain it clearly, answer unexpected questions and adapt an explanation when the first one does not land.",
  },
  {
    title: "Ability to teach live online",
    desc: "You are comfortable managing a live session over video, keeping learners engaged and handling the practical side of online teaching.",
  },
  {
    title: "Reliable setup",
    desc: "A stable internet connection, a working camera and a quiet space where you can teach without interruption.",
  },
  {
    title: "Patience with learners",
    desc: "You understand that children learn at different speeds and in different ways. You stay calm when progress is slow and keep looking for the explanation that works.",
  },
  {
    title: "Safeguarding awareness",
    desc: "You understand the basics of keeping children safe in an online environment and are willing to complete BOA's safeguarding guidance before teaching.",
  },
  {
    title: "Written feedback to parents",
    desc: "You are willing to provide clear, honest written feedback on each learner's progress as part of the BOA parent partnership.",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Apply",
    desc: "Fill in the application form below. Tell us about your background, the subjects you teach and why you want to work with BOA.",
  },
  {
    number: "02",
    title: "Screening call",
    desc: "A short conversation to understand your experience and how you approach teaching. No preparation required.",
  },
  {
    number: "03",
    title: "Demo lesson",
    desc: "Teach a short sample lesson so we can see your method and how you work with learners.",
  },
  {
    number: "04",
    title: "Onboarding",
    desc: "If it is a good fit, we welcome you into the BOA teaching community and get you set up to start.",
  },
];

export default function TeachPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="bg-bg py-20 lg:py-28">
        <div className="shell max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-widest text-link">
            Become a Teacher
          </p>
          <h1 className="font-display text-5xl font-semibold leading-tight text-ink lg:text-6xl">
            Teach with purpose at Bridge Online Academy.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-muted">
            BOA is looking for tutors who believe every learner deserves clear
            teaching, personal attention and honest feedback. If that describes
            you, we would like to hear from you.
          </p>
        </div>
      </section>

      {/* Why teach at BOA */}
      <section className="bg-white py-20 lg:py-28">
        <div className="shell">
          <div className="mx-auto max-w-2xl text-center">
            <AnimateIn>
              <SectionLabel>Why teach at BOA</SectionLabel>
            </AnimateIn>
            <AnimateIn delay={0.08}>
              <h2 className="mt-7 font-display text-[2rem] font-semibold leading-tight text-ink lg:text-[2.75rem]">
                A team built around real teaching relationships.
              </h2>
            </AnimateIn>
          </div>

          <div className="mx-auto mt-14 max-w-3xl space-y-8 lg:mt-20">
            <AnimateIn delay={0.1}>
              <div>
                <h3 className="font-display text-xl font-semibold text-ink">
                  Know your learners
                </h3>
                <p className="mt-3 leading-relaxed text-muted">
                  Small groups mean you actually know every child you teach. You
                  see their progress, notice when they are quiet and help them
                  move forward.
                </p>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.16}>
              <div>
                <h3 className="font-display text-xl font-semibold text-ink">
                  Part of something meaningful
                </h3>
                <p className="mt-3 leading-relaxed text-muted">
                  BOA was built to make quality Nigerian education accessible to
                  families wherever they are. Your work as a tutor is a direct
                  part of that.
                </p>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.22}>
              <div>
                <h3 className="font-display text-xl font-semibold text-ink">
                  Teach from wherever you are
                </h3>
                <p className="mt-3 leading-relaxed text-muted">
                  All sessions are online. No commute, and the flexibility to
                  structure your teaching day around what works for you.
                </p>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.28}>
              <div>
                <h3 className="font-display text-xl font-semibold text-ink">
                  Work alongside Ms Zika and the team
                </h3>
                <p className="mt-3 leading-relaxed text-muted">
                  You will not be teaching in isolation. BOA is a community of
                  tutors who support one another and share a common approach.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="bg-bg py-20 lg:py-28">
        <div className="shell">
          <div className="mx-auto max-w-3xl">
            <AnimateIn>
              <SectionLabel>What we look for</SectionLabel>
            </AnimateIn>
            <AnimateIn delay={0.08}>
              <h2 className="mt-7 font-display text-[2rem] font-semibold leading-tight text-ink lg:text-[2.75rem]">
                Standards we hold for every BOA tutor.
              </h2>
            </AnimateIn>
            <div className="mt-12 space-y-4 lg:mt-16">
              {STANDARDS.map((standard, index) => (
                <AnimateIn key={standard.title} delay={0.1 + index * 0.06}>
                  <div className="rounded-xl border border-border bg-white p-5 lg:p-6">
                    <div className="flex gap-4">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-yellow text-sm font-bold text-ink">
                        ✓
                      </div>
                      <div>
                        <p className="font-display text-base font-semibold text-ink lg:text-lg">
                          {standard.title}
                        </p>
                        <p className="mt-1 leading-relaxed text-muted">
                          {standard.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application process */}
      <section className="bg-white py-20 lg:py-28">
        <div className="shell">
          <div className="mx-auto max-w-3xl text-center">
            <AnimateIn>
              <SectionLabel>Our process</SectionLabel>
            </AnimateIn>
            <AnimateIn delay={0.08}>
              <h2 className="mt-7 font-display text-[2rem] font-semibold leading-tight text-ink lg:text-[2.75rem]">
                How to join the BOA teaching team.
              </h2>
            </AnimateIn>
          </div>
          <div className="mx-auto mt-14 max-w-5xl lg:mt-20">
            <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
              {STEPS.map((step, index) => (
                <AnimateIn key={step.number} delay={index * 0.1}>
                  <div className="rounded-2xl border border-border bg-bg p-7 lg:p-9">
                    <div className="font-display text-4xl font-semibold text-link">
                      {step.number}
                    </div>
                    <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-muted">
                      {step.desc}
                    </p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application form */}
      <Enrollment type="teacher" />
    </SiteLayout>
  );
}

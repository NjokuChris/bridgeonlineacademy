import Link from "next/link";
import SiteLayout from "@/components/layout/SiteLayout";
import AnimateIn from "@/components/ui/AnimateIn";
import SectionLabel from "@/components/ui/SectionLabel";
import Enrollment from "@/components/home/Enrollment";

const STANDARDS = [
  "Degree qualification in your subject area",
  "Subject specialist expertise and clarity",
  "Classroom or online teaching experience",
  "Commitment to knowing your students as individuals",
  "Reliable internet, camera, and a quiet teaching space",
];

const STEPS = [
  { number: "01", title: "Apply", desc: "Tell us about your background, qualifications, and teaching approach." },
  { number: "02", title: "Screening call", desc: "We have a brief conversation to understand your experience and fit with BOA." },
  { number: "03", title: "Demo lesson", desc: "You'll teach a sample lesson to show your method and how you work with students." },
  { number: "04", title: "Onboarding", desc: "If all goes well, we onboard you into the BOA teaching community." },
];

export default function TeachPage() {
  return (
    <SiteLayout>
      {/* Hero section */}
      <section className="bg-bg py-20 lg:py-28">
        <div className="shell max-w-4xl">
          <h1 className="font-display text-5xl font-semibold leading-tight text-ink lg:text-6xl">
            Teach with purpose at Bridge Online Academy.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-muted">
            We're looking for degree-qualified teachers who believe every student deserves attention, clear teaching, and a real sense of belonging in an online classroom.
          </p>
        </div>
      </section>

      {/* Why teach at BOA section */}
      <section className="bg-white py-20 lg:py-28">
        <div className="shell">
          <div className="mx-auto max-w-2xl text-center">
            <AnimateIn>
              <SectionLabel>Why teach at BOA</SectionLabel>
            </AnimateIn>
            <AnimateIn delay={0.08}>
              <h2 className="mt-7 font-display text-[2rem] font-semibold leading-tight text-ink lg:text-[2.75rem]">
                A community of educators who prioritise connection over convenience.
              </h2>
            </AnimateIn>
          </div>

          <div className="mx-auto mt-14 max-w-3xl space-y-8 lg:mt-20">
            <AnimateIn delay={0.14}>
              <div>
                <h3 className="font-display text-xl font-semibold text-ink">Mission-driven teaching</h3>
                <p className="mt-3 leading-relaxed text-muted">
                  You'll be part of making a quality Nigerian education accessible to families wherever they are. Your work matters.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.2}>
              <div>
                <h3 className="font-display text-xl font-semibold text-ink">Flexibility that works</h3>
                <p className="mt-3 leading-relaxed text-muted">
                  Teach from wherever you are. No commute, no crowded staffrooms, and the flexibility to design your teaching day around what matters to you.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.26}>
              <div>
                <h3 className="font-display text-xl font-semibold text-ink">Teaching community</h3>
                <p className="mt-3 leading-relaxed text-muted">
                  You're not teaching alone. You'll work alongside other subject specialists, share resources, collaborate on curriculum, and genuinely support one another.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.32}>
              <div>
                <h3 className="font-display text-xl font-semibold text-ink">Know your students</h3>
                <p className="mt-3 leading-relaxed text-muted">
                  Smaller classes mean you actually know every student you teach. You'll see their progress, notice when they're quiet, and help them succeed.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Standards section */}
      <section className="bg-bg py-20 lg:py-28">
        <div className="shell">
          <div className="mx-auto max-w-3xl">
            <AnimateIn>
              <SectionLabel>What we're looking for</SectionLabel>
            </AnimateIn>
            <AnimateIn delay={0.08}>
              <h2 className="mt-7 font-display text-[2rem] font-semibold leading-tight text-ink lg:text-[2.75rem]">
                Standards we hold for every BOA teacher.
              </h2>
            </AnimateIn>

            <div className="mt-12 space-y-4 lg:mt-16">
              {STANDARDS.map((standard, index) => (
                <AnimateIn key={standard} delay={0.1 + index * 0.06}>
                  <div className="flex gap-4 rounded-xl border border-border bg-white p-5 lg:p-6">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-yellow text-sm font-bold text-ink">
                      ✓
                    </div>
                    <p className="text-base leading-relaxed text-ink lg:text-lg">{standard}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application process section */}
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
                    <div className="font-display text-4xl font-semibold text-link">{step.number}</div>
                    <h3 className="mt-4 font-display text-xl font-semibold text-ink">{step.title}</h3>
                    <p className="mt-3 leading-relaxed text-muted">{step.desc}</p>
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

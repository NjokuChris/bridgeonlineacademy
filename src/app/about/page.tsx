import type { Metadata } from "next";
import SiteLayout from "@/components/layout/SiteLayout";
import AnimateIn from "@/components/ui/AnimateIn";
import SectionLabel from "@/components/ui/SectionLabel";
import RegisterCTA from "@/components/home/RegisterCTA";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Bridge Online Academy started with one teacher, Ms Zika, and has grown into a team. Learn our story, our vision and how we work with every family.",
};

const differentiators = [
  {
    title: "Personalized Learning",
    body: "We don't use a one-size-fits-all approach. Every lesson is tailored to your child's level and goals.",
  },
  {
    title: "From 1 Teacher to a Team",
    body: "We started small with Ms Zika and have intentionally grown our teaching team so every child gets more attention and support.",
  },
  {
    title: "Whole-Child Focus",
    body: "Beyond grades, we work on confidence, communication, and character, including pride in language and culture.",
  },
  {
    title: "Parent Partnership",
    body: "We keep you involved with regular updates, progress reports, and an open-door policy. Your child's growth is our shared mission.",
  },
];

export default function AboutPage() {
  return (
    <SiteLayout>
      {/* Page hero */}
      <section className="bg-bg py-20 lg:py-28">
        <div className="shell max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-widest text-link">
            About BOA
          </p>
          <h1 className="mt-5 font-display text-5xl font-semibold leading-tight text-ink lg:text-6xl">
            A learning community built around each child.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-muted">
            BOA is a learning community dedicated to helping every child grow with
            confidence: academically, personally, and culturally. We believe every child
            deserves quality teaching, personal attention, and the tools to thrive both
            in school and in life.
          </p>
        </div>
      </section>

      {/* Our story: Ms Zika & The Teaching Team */}
      <section className="bg-white py-20 lg:py-28">
        <div className="shell grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <AnimateIn direction="right">
            <div className="flex aspect-square max-w-sm items-center justify-center rounded-2xl bg-navy">
              <span className="font-display text-7xl font-semibold text-yellow">
                Z
              </span>
            </div>
          </AnimateIn>
          <div>
            <AnimateIn>
              <SectionLabel>Our Teachers</SectionLabel>
            </AnimateIn>
            <AnimateIn delay={0.08}>
              <h2 className="mt-5 font-display text-4xl font-semibold text-ink">
                From one teacher to a dedicated team.
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.14}>
              <p className="mt-6 leading-relaxed text-muted">
                BOA started with <strong className="text-ink">Ms Zika</strong>, whose passion and
                dedication laid the foundation of our school.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p className="mt-5 leading-relaxed text-muted">
                Today, we have grown. BOA now has a <strong className="text-ink">team of experienced, caring tutors</strong> who
                work alongside Ms Zika to give every child more support, more feedback, and more
                opportunities to shine.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.26}>
              <p className="mt-5 leading-relaxed text-muted">
                Our teachers are trained to meet children where they are, explain concepts clearly,
                and make learning engaging, whether online or in class.
              </p>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Our vision */}
      <section className="bg-bg py-20 lg:py-28">
        <div className="shell max-w-3xl">
          <AnimateIn>
            <SectionLabel>Our Vision</SectionLabel>
          </AnimateIn>
          <AnimateIn delay={0.08}>
            <h2 className="mt-7 font-display text-[2rem] font-semibold leading-tight text-ink lg:text-[2.75rem]">
              Raising a generation of confident, capable, and compassionate learners.
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.14}>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              To raise a generation of confident, capable, and compassionate learners who excel
              in academics, speak with pride, and serve others.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="mt-4 leading-relaxed text-muted">
              At BOA, we don&apos;t just teach subjects. We build foundations for school success,
              for life skills, and for community leadership.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* What Makes BOA Different? */}
      <section className="bg-white py-20 lg:py-28">
        <div className="shell">
          <div className="mx-auto max-w-3xl text-center">
            <AnimateIn>
              <SectionLabel>What Makes BOA Different?</SectionLabel>
            </AnimateIn>
            <AnimateIn delay={0.08}>
              <h2 className="mt-7 font-display text-[2rem] font-semibold leading-tight text-ink lg:text-[2.75rem]">
                Four reasons families choose BOA.
              </h2>
            </AnimateIn>
          </div>
          <div className="mx-auto mt-14 max-w-3xl space-y-5 lg:mt-20">
            {differentiators.map((d, i) => (
              <AnimateIn key={d.title} delay={0.08 + i * 0.06}>
                <div className="rounded-xl border border-border bg-bg p-6 lg:p-8">
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-navy text-xs font-bold text-yellow">
                      {i + 1}
                    </span>
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {d.title}
                    </h3>
                  </div>
                  <p className="mt-3 leading-relaxed text-muted">{d.body}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Client Quote: Family Callout */}
      <section className="border-t border-border bg-bg py-16 lg:py-24">
        <div className="shell max-w-3xl text-center">
          <AnimateIn>
            <p className="font-display text-2xl font-semibold text-ink sm:text-3xl lg:text-4xl">
              &ldquo;At BOA, your child isn&apos;t just another student. They&apos;re family.&rdquo;
            </p>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              And together, we&apos;re building learners who are ready for exams, ready for life, and proud of who they are.
            </p>
          </AnimateIn>
        </div>
      </section>

      <RegisterCTA />
    </SiteLayout>
  );
}

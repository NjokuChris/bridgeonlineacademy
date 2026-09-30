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

const beliefs = [
  {
    title: "Personal attention",
    body: "Small groups and consistent tutors mean every learner is known by name. Tutors notice when something changes and respond to it.",
  },
  {
    title: "Whole-child focus",
    body: "Confidence, communication and character are built alongside academic progress. Pride in language and culture is part of the programme, not an afterthought.",
  },
  {
    title: "Parent partnership",
    body: "Regular updates, progress reports and an open-door policy keep families informed and involved. The child's growth is a shared goal.",
  },
  {
    title: "No child left behind",
    body: "Sessions are small. Tutors are trained to meet learners where they are. If a child is struggling, the team acts early rather than waiting for a problem to grow.",
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
            {siteConfig.name} is dedicated to helping every child grow with
            confidence, academically, personally and culturally.
          </p>
        </div>
      </section>

      {/* Our story: Ms Zika */}
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
              <SectionLabel>Our story</SectionLabel>
            </AnimateIn>
            <AnimateIn delay={0.08}>
              <h2 className="mt-5 font-display text-4xl font-semibold text-ink">
                It started with one teacher.
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.14}>
              <p className="mt-6 leading-relaxed text-muted">
                Ms Zika started Bridge Online Academy with a simple belief:
                every child deserves quality teaching, personal attention and
                the tools to thrive both in school and in life.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p className="mt-5 leading-relaxed text-muted">
                She built her lessons around her learners, adapting to their
                pace, noticing when they were lost and celebrating when they
                clicked. Word spread, and more families came.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.26}>
              <p className="mt-5 leading-relaxed text-muted">
                As BOA grew, Ms Zika made a deliberate choice: bring in
                experienced, caring tutors who shared her values, so that every
                child could have the same quality of attention she gave her
                first students.
              </p>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Our vision */}
      <section className="bg-bg py-20 lg:py-28">
        <div className="shell max-w-3xl">
          <AnimateIn>
            <SectionLabel>Our vision</SectionLabel>
          </AnimateIn>
          <AnimateIn delay={0.08}>
            <h2 className="mt-7 font-display text-[2rem] font-semibold leading-tight text-ink lg:text-[2.75rem]">
              Raising a generation ready for school, for life and for each
              other.
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.14}>
            <p className="mt-6 leading-relaxed text-muted">
              BOA&apos;s vision is to raise a generation of confident, capable and
              compassionate learners who excel in academics, speak with pride
              and serve others. BOA builds foundations for school success, for
              life skills and for community leadership.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* From one teacher to a team */}
      <section className="bg-white py-20 lg:py-28">
        <div className="shell max-w-4xl">
          <AnimateIn>
            <SectionLabel>From one teacher to a team</SectionLabel>
          </AnimateIn>
          <AnimateIn delay={0.08}>
            <h2 className="mt-7 font-display text-[2rem] font-semibold leading-tight text-ink lg:text-[2.75rem]">
              What growing the team means for each child.
            </h2>
          </AnimateIn>
          <div className="mt-10 space-y-8 lg:mt-14">
            <AnimateIn delay={0.1}>
              <div>
                <h3 className="font-display text-xl font-semibold text-ink">
                  More support, more feedback, more opportunities.
                </h3>
                <p className="mt-3 leading-relaxed text-muted">
                  When Ms Zika taught alone, she could only give so much time to
                  each child. By building a team, BOA can offer more subjects,
                  smaller groups and more personal attention across the board.
                </p>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.16}>
              <div>
                <h3 className="font-display text-xl font-semibold text-ink">
                  Tutors trained to teach, not just to know.
                </h3>
                <p className="mt-3 leading-relaxed text-muted">
                  Every BOA tutor is trained to meet children where they are,
                  explain concepts clearly and make learning engaging. Subject
                  knowledge matters, but so does the ability to teach it well,
                  online, to a child who might be distracted or confused.
                </p>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.22}>
              <div>
                <h3 className="font-display text-xl font-semibold text-ink">
                  Ms Zika still leads.
                </h3>
                <p className="mt-3 leading-relaxed text-muted">
                  The team works alongside Ms Zika. Her standards and her
                  approach shape everything the school does. Families can still
                  speak with her directly.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* What we believe */}
      <section className="bg-bg py-20 lg:py-28">
        <div className="shell">
          <div className="mx-auto max-w-3xl text-center">
            <AnimateIn>
              <SectionLabel>What we believe</SectionLabel>
            </AnimateIn>
            <AnimateIn delay={0.08}>
              <h2 className="mt-7 font-display text-[2rem] font-semibold leading-tight text-ink lg:text-[2.75rem]">
                The values behind every lesson.
              </h2>
            </AnimateIn>
          </div>
          <div className="mx-auto mt-14 max-w-3xl space-y-5 lg:mt-20">
            {beliefs.map((b, i) => (
              <AnimateIn key={b.title} delay={0.08 + i * 0.06}>
                <div className="rounded-xl border border-border bg-white p-6 lg:p-8">
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {b.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted">{b.body}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <RegisterCTA />
    </SiteLayout>
  );
}

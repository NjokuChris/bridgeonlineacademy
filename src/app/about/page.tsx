import Link from "next/link";
import SiteLayout from "@/components/layout/SiteLayout";
import AnimateIn from "@/components/ui/AnimateIn";
import SectionLabel from "@/components/ui/SectionLabel";
import RegisterCTA from "@/components/home/RegisterCTA";

export default function AboutPage() {
  return (
    <SiteLayout>
      {/* Hero section */}
      <section className="bg-bg py-20 lg:py-28">
        <div className="shell max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-widest text-link">About BOA</p>
          <h1 className="mt-5 font-display text-5xl font-semibold leading-tight text-ink lg:text-6xl">
            A more connected way to learn.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-muted">
            Bridge Online Academy was founded to make quality Nigerian education accessible to anyone, at any age. Whether you are following the full curriculum or picking up a skill you need, we are here to teach with care.
          </p>
        </div>
      </section>

      {/* Ms. Zika's story section */}
      <section className="bg-white py-20 lg:py-28">
        <div className="shell grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <AnimateIn>
            <div className="flex aspect-square max-w-sm items-center justify-center rounded-2xl bg-navy">
              <span className="font-display text-7xl font-semibold text-yellow">Z</span>
            </div>
          </AnimateIn>
          <AnimateIn delay={0.08}>
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-link">Ms. Zika's story</p>
              <h2 className="mt-5 font-display text-4xl font-semibold text-ink">Teaching with structure, warmth and purpose.</h2>
              <p className="mt-6 leading-relaxed text-muted">
                Ms. Zika leads BOA with the belief that online learning can be both academically purposeful and genuinely personal. Every child deserves clear teaching, a dependable routine and an educator who pays attention to how they are progressing.
              </p>
              <p className="mt-5 leading-relaxed text-muted">
                That belief shaped Bridge Online Academy: a place where students at any level receive focused, rigorous instruction and genuine personal attention from qualified teachers.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* How Our Teachers Work section */}
      <section className="bg-bg py-20 lg:py-28">
        <div className="shell max-w-4xl">
          <AnimateIn>
            <SectionLabel>Behind the scenes</SectionLabel>
          </AnimateIn>
          <AnimateIn delay={0.08}>
            <h2 className="mt-7 font-display text-[2rem] font-semibold leading-tight text-ink lg:text-[2.75rem]">
              How our teachers work.
            </h2>
          </AnimateIn>

          <div className="mt-12 space-y-10 lg:mt-16">
            <AnimateIn delay={0.14}>
              <div>
                <h3 className="font-display text-xl font-semibold text-ink">Lessons are planned with care, not improvised.</h3>
                <p className="mt-3 leading-relaxed text-muted">
                  Each term, BOA teachers plan their curriculum and lesson structure together. Every live session follows a deliberate plan: what will be taught, how students will practise it, and how the teacher will check understanding. This planning happens before the term starts, so lessons are never rushed or unclear.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.2}>
              <div>
                <h3 className="font-display text-xl font-semibold text-ink">Live sessions have a real structure.</h3>
                <p className="mt-3 leading-relaxed text-muted">
                  A typical live lesson opens with a clear learning goal, moves through whole-class teaching, gives students time to practise with support, and closes with a quick check that everyone understood. Teachers use the live format to notice when a student is lost and respond in real time. It's teaching, not just talking.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.26}>
              <div>
                <h3 className="font-display text-xl font-semibold text-ink">Progress is tracked and reported.</h3>
                <p className="mt-3 leading-relaxed text-muted">
                  Teachers keep clear records of how each student is progressing. Parents receive term reports that show what their child has learned, what they're doing well, and where they need more help. Teachers can also flag a student who is struggling so additional support can start quickly, not weeks down the line.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.32}>
              <div>
                <h3 className="font-display text-xl font-semibold text-ink">Struggling students get support before they fall behind.</h3>
                <p className="mt-3 leading-relaxed text-muted">
                  If a teacher notices a student isn't keeping up, they don't wait for parents to ask for help. They reach out early, identify what's going wrong, and work with the student to get them back on track. Some students get catch-up sessions or adjusted pacing. Others just need the teacher to explain something a different way. The point is that struggling is flagged fast and handled quickly.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Philosophy section */}
      <section className="bg-white py-20 lg:py-28">
        <div className="shell max-w-3xl">
          <AnimateIn>
            <SectionLabel>Our philosophy</SectionLabel>
          </AnimateIn>
          <AnimateIn delay={0.08}>
            <h2 className="mt-7 font-display text-[2rem] font-semibold leading-tight text-ink lg:text-[2.75rem]">
              Learning works best when children feel known.
            </h2>
          </AnimateIn>

          <AnimateIn delay={0.14}>
            <div className="mt-8 space-y-5 leading-relaxed text-muted">
              <p>
                BOA brings live, teacher-led lessons together with clear expectations and room for questions. We want families to understand exactly what their child is learning and why. There's no guesswork about progress, and no child disappears into the background.
              </p>
              <p>
                An online classroom can feel isolating if it isn't built carefully. At BOA, it doesn't. Students meet the same peers in live sessions day after day. They join online clubs and competitions. They lead assemblies. They become part of something, not just logging in to lessons.
              </p>
              <p>
                This is a school that takes itself seriously. It follows a real curriculum, runs on a real schedule, and holds itself to real standards. It is also warm, and makes room for every student to be seen and supported.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Values section */}
      <section className="bg-bg py-20 lg:py-28">
        <div className="shell">
          <div className="mx-auto max-w-3xl text-center">
            <AnimateIn>
              <SectionLabel>What we believe in</SectionLabel>
            </AnimateIn>
            <AnimateIn delay={0.08}>
              <h2 className="mt-7 font-display text-[2rem] font-semibold leading-tight text-ink lg:text-[2.75rem]">
                The standards BOA holds.
              </h2>
            </AnimateIn>
          </div>

          <div className="mx-auto mt-14 max-w-3xl space-y-6 lg:mt-20">
            <AnimateIn delay={0.14}>
              <div className="rounded-xl border border-border bg-white p-6 lg:p-8">
                <h3 className="font-display text-lg font-semibold text-ink">Academic rigour</h3>
                <p className="mt-2 leading-relaxed text-muted">
                  We follow the Nigerian curriculum carefully. Every child meets learning standards for their stage. If they're ready to move ahead, we support that. If they need time, we give it.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.2}>
              <div className="rounded-xl border border-border bg-white p-6 lg:p-8">
                <h3 className="font-display text-lg font-semibold text-ink">Teaching quality</h3>
                <p className="mt-2 leading-relaxed text-muted">
                  Our teachers are degree-qualified and trained in their subject. They are skilled at live online teaching. They know how to help a student who is confused, and they see teaching as something you get better at with practice.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.26}>
              <div className="rounded-xl border border-border bg-white p-6 lg:p-8">
                <h3 className="font-display text-lg font-semibold text-ink">Personal attention</h3>
                <p className="mt-2 leading-relaxed text-muted">
                  Smaller classes, consistent teachers, and regular parent contact mean every child is known by name. We can see when something changes in how a child is learning and respond to it.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.32}>
              <div className="rounded-xl border border-border bg-white p-6 lg:p-8">
                <h3 className="font-display text-lg font-semibold text-ink">Accessibility</h3>
                <p className="mt-2 leading-relaxed text-muted">
                  A quality Nigerian education should not depend on where you live. BOA serves families in Lagos, Abuja, Port Harcourt, and abroad. Learning happens in whatever time zone you need.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <RegisterCTA />
    </SiteLayout>
  );
}

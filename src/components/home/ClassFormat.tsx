/**
 * ClassFormat — full-bleed navy panel. Layout break from the light sections.
 * This is the first dark section, creating a strong visual contrast point.
 * Stats are big and bold — hierarchy through scale, not decoration.
 */
import SectionLabel from "@/components/ui/SectionLabel";
import AnimateIn from "@/components/ui/AnimateIn";
import { siteConfig } from "@/config/site";

const stats = [
  {
    value: `${siteConfig.classFormat.sessionsPerWeek}×`,
    label: "Sessions per week",
    note: "Consistent rhythm every week",
  },
  {
    value: "1–2 hrs",
    label: "Session length",
    note: "1 hour, 1.5 hours or 2 hours",
  },
  {
    value: "Small",
    label: "Group size",
    note: "No child lost in the crowd",
  },
  {
    value: "Live",
    label: "Every class",
    note: "Real-time, teacher-led sessions",
  },
];

export default function ClassFormat() {
  return (
    <section className="bg-navy py-20 lg:py-28">
      <div className="shell">

        <div className="mx-auto max-w-2xl text-center">
          <AnimateIn>
            <SectionLabel tone="light">How classes work</SectionLabel>
          </AnimateIn>
          <AnimateIn delay={0.07}>
            <h2 className="heading-xl mt-4 text-white">
              Three sessions a week, every week.
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.13}>
            <p className="body-lg mt-4 text-white/80">
              Small groups, live tutors, and a fixed rhythm. Every learner
              follows the same structure so progress is steady and visible.
            </p>
          </AnimateIn>
        </div>

        {/* Stats row — large numbers do the hierarchy work */}
        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 lg:grid-cols-4">
          {stats.map((s, i) => (
            <AnimateIn key={s.label} delay={i * 0.07}>
              <div className="flex flex-col items-center bg-navy px-6 py-8 text-center">
                <p className="font-display text-5xl font-semibold text-yellow lg:text-6xl">
                  {s.value}
                </p>
                <p className="mt-2 text-sm font-bold uppercase tracking-wider text-white">
                  {s.label}
                </p>
                <p className="mt-1 text-xs text-white/60">{s.note}</p>
              </div>
            </AnimateIn>
          ))}
        </div>

      </div>
    </section>
  );
}

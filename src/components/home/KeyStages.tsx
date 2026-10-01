/**
 * KeyStages: two-track split. Full-width with strong contrast between cards.
 * Layout: horizontal split cards, not stacked grid.
 * The two cards sit side by side and fill the section width, no shell gutters.
 */
import Link from "next/link";
import AnimateIn from "@/components/ui/AnimateIn";

const tracks = [
  {
    eyebrow: "Structured learning",
    title: "Full Curriculum",
    body: "Ongoing, structured teaching across all subjects of the Nigerian curriculum, matched to your level. Learn with a consistent peer group and a dependable weekly routine.",
    cta: "Explore curriculum",
    bg: "bg-stage-primary",
    textColour: "text-white",
    ctaClass: "border border-white/40 text-white hover:bg-white hover:text-stage-primary",
  },
  {
    eyebrow: "Pick what you need",
    title: "Individual Subjects",
    body: "One subject, one skill, without the full curriculum. Coding, video editing, exam preparation, creative writing, or any subject taught live by a specialist.",
    cta: "See all subjects",
    bg: "bg-bg",
    textColour: "text-ink",
    ctaClass: "border border-navy text-navy hover:bg-navy hover:text-white",
  },
];

export default function KeyStages() {
  return (
    <section className="overflow-hidden bg-white py-20 lg:py-28">
      <div className="shell">

        <AnimateIn>
          <p className="eyebrow">Two ways to learn</p>
          <h2 className="heading-xl mt-4 max-w-lg">
            Choose the path that fits.
          </h2>
        </AnimateIn>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {tracks.map((t, i) => (
            <AnimateIn key={t.title} delay={i * 0.1}>
              <div className={`rounded-2xl ${t.bg} p-8 lg:p-10`}>
                <p className={`text-xs font-bold uppercase tracking-widest ${t.bg === "bg-bg" ? "text-link" : "text-yellow"}`}>
                  {t.eyebrow}
                </p>
                <h3
                  className={`heading-lg mt-4 ${t.textColour}`}
                  style={{ color: t.bg === "bg-bg" ? "var(--color-ink)" : "#ffffff" }}
                >
                  {t.title}
                </h3>
                <p
                  className={`body-base mt-4 ${t.bg === "bg-bg" ? "text-muted" : "text-white"}`}
                  style={{ color: t.bg === "bg-bg" ? "var(--color-muted)" : "rgba(255, 255, 255, 0.95)" }}
                >
                  {t.body}
                </p>
                <Link
                  href="/programmes"
                  className={`focus-ring mt-8 inline-flex h-11 items-center rounded-lg px-6 text-sm font-bold uppercase tracking-wide transition-colors ${t.ctaClass}`}
                >
                  {t.cta}
                </Link>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.2}>
          <p className="mt-6 text-right">
            <Link href="/programmes" className="focus-ring text-sm font-bold text-link hover:underline">
              View all programmes →
            </Link>
          </p>
        </AnimateIn>

      </div>
    </section>
  );
}

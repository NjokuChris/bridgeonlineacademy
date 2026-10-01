/**
 * TeachingAndSupport: split layout, image-left/copy-right.
 * The navy avatar square is kept; it's an honest placeholder, not pretending to be a photo.
 * All text tokens used correctly.
 */
import Link from "next/link";
import AnimateIn from "@/components/ui/AnimateIn";
import SectionLabel from "@/components/ui/SectionLabel";

const points = [
  "Tutors trained to meet children where they are",
  "Clear explanations, not just correct answers",
  "Regular written feedback to parents",
  "Ms Zika still leads and is still reachable",
];

export default function TeachingAndSupport() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="shell grid gap-12 lg:grid-cols-2 lg:gap-20">

        {/* Avatar placeholder */}
        <AnimateIn direction="right">
          <div className="relative">
            <div className="aspect-square w-full max-w-sm rounded-2xl bg-navy p-10 lg:max-w-none">
              <span className="font-display text-8xl font-semibold text-yellow" aria-hidden="true">Z</span>
              <p className="mt-4 text-sm font-bold uppercase tracking-widest text-white/90">
                Ms Zika · Founder
              </p>
            </div>
            {/* Accent block */}
            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-2xl bg-yellow" aria-hidden="true" />
          </div>
        </AnimateIn>

        {/* Copy */}
        <div className="flex flex-col justify-center">
          <AnimateIn>
            <SectionLabel>Meet the team</SectionLabel>
          </AnimateIn>
          <AnimateIn delay={0.07}>
            <h2 className="heading-xl mt-4">
              From one teacher to a team, led by Ms Zika.
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.13}>
            <p className="body-lg mt-4">
              BOA started with Ms Zika. As more families joined, she built a
              team of experienced tutors who share her approach: personal,
              clear, and honest about progress.
            </p>
          </AnimateIn>

          {/* Feature list: replaces a second paragraph blob */}
          <AnimateIn delay={0.18}>
            <ul className="mt-6 space-y-3">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-yellow" aria-hidden="true" />
                  <span className="body-base text-ink">{p}</span>
                </li>
              ))}
            </ul>
          </AnimateIn>

          <AnimateIn delay={0.24}>
            <Link
              href="/about"
              className="focus-ring mt-8 inline-flex h-11 w-fit items-center rounded-lg border border-navy px-6 text-sm font-bold uppercase tracking-wide text-navy transition-colors hover:bg-navy hover:text-white"
            >
              Read our story →
            </Link>
          </AnimateIn>
        </div>

      </div>
    </section>
  );
}

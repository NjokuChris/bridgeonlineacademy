/**
 * FocusAreas — staggered 2-col grid, left-aligned header.
 * Layout variation: header is left-aligned (not centred like Hero).
 * Contrast: number badges use navy background → white text (7:1 ratio).
 * Hardcoded hex colours replaced with design tokens.
 */
import AnimateIn from "@/components/ui/AnimateIn";
import SectionLabel from "@/components/ui/SectionLabel";
import { siteConfig } from "@/config/site";

const areaAccents = [
  { border: "border-l-[3px] border-l-[#3B82F6]", num: "bg-navy" },
  { border: "border-l-[3px] border-l-[#8B5CF6]", num: "bg-navy" },
  { border: "border-l-[3px] border-l-[#F97316]", num: "bg-navy" },
  { border: "border-l-[3px] border-l-[#22C55E]", num: "bg-navy" },
];

export default function FocusAreas() {
  return (
    <section className="bg-bg py-20 lg:py-28">
      <div className="shell">

        {/* Left-aligned header — different from Hero's centred layout */}
        <div className="max-w-xl">
          <AnimateIn>
            <SectionLabel>What we focus on</SectionLabel>
          </AnimateIn>
          <AnimateIn delay={0.07}>
            <h2 className="heading-xl mt-4">
              Four areas where BOA makes a difference.
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.13}>
            <p className="body-lg mt-4">
              Every learner has a specific need. BOA is built around four
              focused programmes so nothing gets treated as an afterthought.
            </p>
          </AnimateIn>
        </div>

        {/* 2-col card grid with left accent border — no background fills */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:gap-6">
          {siteConfig.focusAreas.map((area, i) => {
            const accent = areaAccents[i % areaAccents.length];
            return (
              <AnimateIn key={area.id} delay={i * 0.07}>
                <div className={`rounded-lg border border-border bg-white p-6 ${accent.border} lg:p-7`}>
                  <div className={`inline-flex h-8 w-8 items-center justify-center rounded-md ${accent.num}`}>
                    <span className="font-display text-sm font-semibold text-white">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="heading-md mt-4">{area.title}</h3>
                  <p className="body-base mt-2">{area.description}</p>
                </div>
              </AnimateIn>
            );
          })}
        </div>

      </div>
    </section>
  );
}

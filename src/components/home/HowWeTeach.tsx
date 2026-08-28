"use client";

import Link from "next/link";
import AnimateIn from "@/components/ui/AnimateIn";
import SectionLabel from "@/components/ui/SectionLabel";
import ChecklistCard from "@/components/ui/ChecklistCard";

const LESSON_FEATURES = [
  "Purpose-built virtual classrooms",
  "Small class sizes",
  "Collaboration with classmates",
  "Regular teacher feedback",
  "Lesson recordings to revisit",
];

export default function HowWeTeach() {
  return (
    <section className="bg-bg py-20 lg:py-28">
      <div className="shell">
        <div className="relative overflow-hidden rounded-3xl bg-navy px-7 py-12 lg:px-14 lg:py-16">
          {/* Subtle geometric line pattern, as on the reference panel */}
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]"
          >
            <defs>
              <pattern
                id="how-we-teach-grid"
                width="72"
                height="72"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(30)"
              >
                <path
                  d="M0 0 L72 0 L36 62 Z"
                  fill="none"
                  stroke="white"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#how-we-teach-grid)" />
          </svg>

          <div className="relative grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left — copy */}
            <div>
              <AnimateIn>
                <SectionLabel>How we teach</SectionLabel>
              </AnimateIn>
              <AnimateIn delay={0.08}>
                <h2 className="mt-7 font-display text-[2rem] font-semibold leading-tight text-white lg:text-[2.75rem]">
                  Interactive teaching, built for online
                </h2>
              </AnimateIn>
              <AnimateIn delay={0.14}>
                <p className="mt-6 max-w-md text-base leading-relaxed text-white/90 lg:text-[1.0625rem]">
                  We pair experienced subject teachers with classroom technology
                  chosen for one purpose — keeping students engaged, answering
                  and progressing in every lesson.
                </p>
              </AnimateIn>
              <AnimateIn delay={0.2}>
                <Link
                  href="/how-we-teach"
                  className="mt-8 inline-flex items-center rounded border-2 border-white px-7 py-3.5 text-[0.875rem] font-bold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
                >
                  How we teach
                </Link>
              </AnimateIn>
            </div>

            {/* Right — white checklist card */}
            <AnimateIn delay={0.12} direction="left">
              <ChecklistCard
                heading="What our live lessons look like"
                items={LESSON_FEATURES}
              />
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

/**
 * WhyUs: split layout. Header left, feature list right.
 * All token values: text-ink, text-muted, no hardcoded hex.
 * Icons: single consistent set (react-icons/fi, thin strokes).
 * Hover: subtle bg tint only - no transforms.
 */
import { FiUser, FiUsers, FiHeart, FiMessageSquare } from "react-icons/fi";
import AnimateIn from "@/components/ui/AnimateIn";
import SectionLabel from "@/components/ui/SectionLabel";
import { siteConfig } from "@/config/site";

const icons = [FiUser, FiUsers, FiHeart, FiMessageSquare];

export default function WhyUs() {
  return (
    <section className="bg-bg py-20 lg:py-28">
      <div className="shell grid gap-14 lg:grid-cols-[1fr_1.6fr] lg:gap-20">

        {/* Sticky left column */}
        <div className="lg:pt-1">
          <AnimateIn>
            <SectionLabel>What makes us different</SectionLabel>
          </AnimateIn>
          <AnimateIn delay={0.07}>
            <h2 className="heading-xl mt-4">
              Why families choose BOA.
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.13}>
            <p className="body-lg mt-4">
              At BOA, your child isn&apos;t just another student. They&apos;re family.
              Together, we&apos;re building learners who are ready for exams, ready for life,
              and proud of who they are.
            </p>
          </AnimateIn>
        </div>

        {/* Right: feature rows - not a grid of cards */}
        <div className="space-y-4">
          {siteConfig.differentiators.map((feat, i) => {
            const Icon = icons[i % icons.length];
            return (
              <AnimateIn key={feat.id} delay={i * 0.07}>
                <div className="flex gap-5 rounded-xl border border-border bg-white p-5 transition-colors hover:border-link/30 hover:bg-pill/20 lg:p-6">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-pill text-pill-ink">
                    <Icon size={18} aria-hidden="true" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="heading-md">{feat.title}</h3>
                    <p className="body-base mt-1">{feat.description}</p>
                  </div>
                </div>
              </AnimateIn>
            );
          })}
        </div>

      </div>
    </section>
  );
}

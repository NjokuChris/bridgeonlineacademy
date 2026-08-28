"use client";

import {
  PiBroadcastBold,
  PiGraduationCapBold,
  PiUsersThreeBold,
  PiClockBold,
} from "react-icons/pi";
import AnimateIn from "@/components/ui/AnimateIn";
import SectionLabel from "@/components/ui/SectionLabel";

const FEATURES = [
  {
    icon: PiBroadcastBold,
    title: "Live, teacher-led lessons",
    desc: "Join real-time, interactive lessons with subject-specialist teachers every teaching day. Missed a class? Recordings are available to catch up on.",
    bg: "bg-[#EAF2FF]",
    iconBg: "bg-[#3B82F6]/15",
    iconColor: "text-[#2563EB]",
  },
  {
    icon: PiGraduationCapBold,
    title: "Qualified expert teachers",
    desc: "Learn from degree-qualified, subject-specialist teachers with experience in both classroom and online education.",
    bg: "bg-[#F1EEFF]",
    iconBg: "bg-[#8B5CF6]/15",
    iconColor: "text-[#7C3AED]",
  },
  {
    icon: PiUsersThreeBold,
    title: "Vibrant, social community",
    desc: "Make friends through online clubs, assemblies, competitions and student leadership — a real sense of belonging, not just a login.",
    bg: "bg-[#FFF1E9]",
    iconBg: "bg-[#F97316]/15",
    iconColor: "text-[#EA580C]",
  },
  {
    icon: PiClockBold,
    title: "Flexible learning options",
    desc: "Learn from Lagos, Abuja, Port Harcourt or abroad, and fit school around your family's routine and time zone.",
    bg: "bg-[#EAFBF1]",
    iconBg: "bg-[#22C55E]/15",
    iconColor: "text-[#16A34A]",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-bg py-20 lg:py-28">
      <div className="shell">
        {/* Intro */}
        <div className="mx-auto max-w-2xl text-center">
          <AnimateIn>
            <SectionLabel>What makes us different?</SectionLabel>
          </AnimateIn>
          <AnimateIn delay={0.08}>
            <h2 className="mt-7 font-display text-[2rem] font-semibold leading-tight text-ink lg:text-[2.75rem]">
              Why families choose Bridge Online Academy
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.14}>
            <p className="mt-6 text-base leading-relaxed text-muted lg:text-[1.0625rem]">
              We hold to the standards of a serious school and offer an
              environment where every student is known by name. Our students
              learn flexibly, and shape a schedule that fits their family life.
            </p>
          </AnimateIn>
        </div>

        {/* Feature cards */}
        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-24 lg:gap-7">
          {FEATURES.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <AnimateIn key={feat.title} delay={i * 0.08}>
                <div
                  className={`group h-full rounded-2xl ${feat.bg} p-6 transition-transform duration-300 hover:-translate-y-1 lg:p-7`}
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${feat.iconBg}`}
                  >
                    <Icon className={`h-6 w-6 ${feat.iconColor}`} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold leading-snug text-[#0F172A] lg:text-xl">
                    {feat.title}
                  </h3>
                  <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-[#475569] lg:text-base">
                    {feat.desc}
                  </p>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

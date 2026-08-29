"use client";

import Image from "next/image";
import AnimateIn from "@/components/ui/AnimateIn";
import SectionLabel from "@/components/ui/SectionLabel";
import CheckCircle from "@/components/ui/CheckCircle";

/**
 * Optional programme. If the school does not run one-to-one mentoring, remove
 * this section from the homepage rather than reframing it. Nothing here should
 * describe a service that is not actually offered.
 */
const BENEFITS = [
  {
    title: "Weekly one-to-one sessions",
    desc: "Your child meets their mentor each week to review progress, manage workload and talk through anything that is getting in the way.",
  },
  {
    title: "A single point of contact",
    desc: "One named teacher who knows the whole timetable, tracks progress across every subject and builds a relationship over the session.",
  },
  {
    title: "A tracked path",
    desc: "Continuous monitoring means no subject or deadline is quietly missed, and parents can see how their child is tracking.",
  },
];

export default function MentoredPathway() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="shell">
        {/* Image left / copy right */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <AnimateIn direction="right">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1000&h=750&fit=crop"
                alt="A student in a one-to-one session on a laptop"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </AnimateIn>

          <div>
            <AnimateIn>
              <SectionLabel>Mentored pathway</SectionLabel>
            </AnimateIn>
            <AnimateIn delay={0.08}>
              <h2 className="mt-7 font-display text-[2rem] font-semibold leading-tight text-ink lg:text-[2.75rem]">
                Dedicated mentoring to keep your child on track
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.14}>
              <p className="mt-6 text-base leading-relaxed text-muted lg:text-[1.0625rem]">
                If your child needs closer academic support, they can join our
                mentored pathway. Students are matched with a dedicated mentor
                and meet weekly to stay motivated and accountable.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p className="mt-5 text-base leading-relaxed text-muted lg:text-[1.0625rem]">
                The pathway sits alongside the core curriculum rather than
                replacing any part of it. Speak with admissions about
                availability and cost for your child&apos;s year group.
              </p>
            </AnimateIn>
          </div>
        </div>

        {/* Three benefits */}
        <div className="mt-16 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:mt-24 lg:grid-cols-3">
          {BENEFITS.map((b, i) => (
            <AnimateIn key={b.title} delay={i * 0.08}>
              <div>
                <CheckCircle index={i} />
                <h3 className="mt-5 font-display text-[1.375rem] font-semibold leading-snug text-ink lg:text-[1.5rem]">
                  {b.title}
                </h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted lg:text-base">
                  {b.desc}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

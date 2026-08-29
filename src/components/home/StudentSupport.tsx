"use client";

import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/ui/AnimateIn";
import SectionLabel from "@/components/ui/SectionLabel";
import CheckCircle from "@/components/ui/CheckCircle";

const PILLARS = [
  {
    title: "Pastoral care",
    desc: "Through regular tutor-group sessions, one-to-one check-ins and a named pastoral lead, every student has a support network they can rely on.",
    href: "/pastoral-care",
    cta: "Explore our school life",
  },
  {
    title: "Learning support",
    desc: "Our learning support team builds tailored plans for students with additional learning needs, so every child can access a full education with confidence.",
    href: "/learning-support",
    cta: "Our learning support",
  },
  {
    title: "Inclusive community",
    desc: "Students are welcomed from day one through induction, school houses, buddy systems and clubs, online and where offered, in person.",
    href: "/student-community",
    cta: "Meet our community",
  },
];

export default function StudentSupport() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="shell">
        {/* Copy left / image right */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <AnimateIn>
              <SectionLabel>Student support</SectionLabel>
            </AnimateIn>
            <AnimateIn delay={0.08}>
              <h2 className="mt-7 font-display text-[2rem] font-semibold leading-tight text-ink lg:text-[2.75rem]">
                Every child deserves to feel happy at school
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.14}>
              <p className="mt-6 text-base leading-relaxed text-muted lg:text-[1.0625rem]">
                At Bridge Online Academy your child's wellbeing sits alongside
                their academic progress. Many families join us not only for the
                teaching, but to find confidence and steady support at school.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p className="mt-5 text-base leading-relaxed text-muted lg:text-[1.0625rem]">
                Whatever brings you here, you will find a warm environment with
                expert-led care and guidance, where every child is known, safe
                and encouraged.
              </p>
            </AnimateIn>
          </div>

          <AnimateIn direction="left">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1000&h=750&fit=crop"
                alt="A young student writing in an exercise book beside a tablet"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </AnimateIn>
        </div>

        {/* Three support pillars */}
        <div className="mt-16 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:mt-24 lg:grid-cols-3">
          {PILLARS.map((p, i) => (
            <AnimateIn key={p.title} delay={i * 0.08}>
              <div className="flex h-full flex-col">
                <CheckCircle index={i} />
                <h3 className="mt-5 font-display text-[1.375rem] font-semibold leading-snug text-ink lg:text-[1.5rem]">
                  {p.title}
                </h3>
                <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-muted lg:text-base">
                  {p.desc}
                </p>
                <Link
                  href={p.href}
                  className="group mt-5 inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-link hover:underline"
                >
                  {p.cta}
                  <span
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

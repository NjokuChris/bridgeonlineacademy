"use client";

import Image from "next/image";
import AnimateIn from "@/components/ui/AnimateIn";
import SectionLabel from "@/components/ui/SectionLabel";

/**
 * Set to false once real, permissioned family quotes replace the entries below.
 * While true, each card carries an "Illustrative" chip so nothing here reads as
 * a genuine testimonial.
 */
const AWAITING_REAL_QUOTES = true;

type Testimonial = {
  name: string;
  meta: string;
  quote: string;
  avatarUrl?: string | null;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Student, SS 2",
    meta: "Science stream",
    quote:
      "I struggled to keep up in a large class. Here the teacher notices when I go quiet, and I can rewatch the lesson the same evening.",
    avatarUrl: null,
  },
  {
    name: "Parent, JSS 1",
    meta: "Lagos",
    quote:
      "My daughter was losing confidence. Within a term she was answering in class again, and I can see her attendance and reports myself.",
    avatarUrl: null,
  },
  {
    name: "Parent, Primary 5",
    meta: "Nigerian family abroad",
    quote:
      "We moved abroad and wanted our son to stay on the Nigerian curriculum. He kept his year group and his friends, and nothing was interrupted.",
    avatarUrl: null,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-navy py-20 lg:py-28">
      <div className="shell">
        {/* Centred header */}
        <div className="mx-auto max-w-2xl text-center">
          <AnimateIn>
            <SectionLabel>Our impact</SectionLabel>
          </AnimateIn>
          <AnimateIn delay={0.08}>
            <h2 className="mt-7 font-display text-[2rem] font-semibold leading-tight text-white lg:text-[3rem]">
              Hear what parents and students have to say
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.14}>
            <p className="mt-6 text-base text-white/85 lg:text-[1.0625rem]">
              Don&apos;t just take our word for it.
            </p>
            <p className="mt-2 text-base text-white/85 lg:text-[1.0625rem]">
              {AWAITING_REAL_QUOTES
                ? "The experiences below illustrate what families tell us matters most. Verified quotes replace them as we collect permission to publish."
                : "Here is why families like yours choose to learn with us."}
            </p>
          </AnimateIn>
        </div>

        {/* Three white cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-3 lg:mt-20 lg:gap-8">
          {TESTIMONIALS.map((t, i) => {
            const hasAvatar = Boolean(t.avatarUrl);
            const initial = t.name.trim().charAt(0).toUpperCase();

            return (
              <AnimateIn key={t.name} delay={i * 0.1}>
                <div className="flex h-full flex-col items-center rounded-3xl bg-white px-7 py-10 text-center lg:px-9">
                  {hasAvatar ? (
                    <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full">
                      <Image
                        src={t.avatarUrl!}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="96px"
                        unoptimized
                      />
                    </div>
                  ) : (
                    <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-pill font-display text-3xl font-semibold text-pill-ink">
                      {initial}
                    </div>
                  )}

                  <p className="mt-6 font-display text-[1.375rem] font-semibold leading-tight text-ink">
                    {t.name}
                  </p>
                <p className="mt-1.5 text-sm text-muted">{t.meta}</p>

                {AWAITING_REAL_QUOTES && (
                  <span className="mt-3 rounded-full border border-border px-3 py-1 text-[0.6875rem] font-semibold uppercase tracking-wider text-muted">
                    Illustrative
                  </span>
                )}

                  <blockquote className="mt-5 font-display text-[1.0625rem] leading-relaxed text-ink lg:text-[1.125rem]">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import AnimateIn from "@/components/ui/AnimateIn";
import SectionLabel from "@/components/ui/SectionLabel";
import { FaStar } from "react-icons/fa6";

/**
 * Real, permissioned reviews go here, or this section is replaced by the
 * embed from whichever review platform the school actually uses. Left empty
 * because inventing reviews or a star rating would misrepresent the school.
 */
const REVIEWS: { quote: string; author: string; rating: number }[] = [];

export default function ReviewsStrip() {
  return (
    <section className="bg-bg py-16 lg:py-20">
      <div className="shell">
        <div className="mx-auto max-w-2xl text-center">
          <AnimateIn>
            <SectionLabel>Reviews</SectionLabel>
          </AnimateIn>
          <AnimateIn delay={0.08}>
            <h2 className="mt-7 font-display text-[2rem] font-semibold leading-tight text-ink lg:text-[2.75rem]">
              Hear what families have to say about us
            </h2>
          </AnimateIn>
        </div>

        {REVIEWS.length > 0 ? (
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {REVIEWS.map((review, i) => (
              <AnimateIn key={review.author} delay={i * 0.06}>
                <figure className="flex h-full flex-col rounded-xl border border-border bg-white p-5">
                  <div
                    className="flex gap-0.5"
                    aria-label={`${review.rating} out of 5`}
                  >
                    {Array.from({ length: 5 }, (_, s) => (
                      <FaStar key={s} aria-hidden="true" size={16} color={s < review.rating ? "var(--color-tick)" : "var(--color-border)"} />
                    ))}
                  </div>
                  <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {review.quote}
                  </blockquote>
                  <figcaption className="mt-4 text-sm font-semibold text-ink">
                    {review.author}
                  </figcaption>
                </figure>
              </AnimateIn>
            ))}
          </div>
        ) : (
          /* Honest holding state until real reviews are collected */
          <AnimateIn delay={0.12}>
            <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-border bg-white px-7 py-9 text-center">
              <p className="text-base leading-relaxed text-muted lg:text-[1.0625rem]">
                We are a new school, and we would rather show you nothing than
                show you reviews we wrote ourselves. As families complete their
                first session with us and agree to share their experience, their
                words will appear here.
              </p>
            </div>
          </AnimateIn>
        )}
      </div>
    </section>
  );
}

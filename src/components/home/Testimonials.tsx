/**
 * Testimonials are loaded from the database (testimonials table) in production.
 * This component receives them as props. If the array is empty or undefined,
 * the section does not render at all. No placeholder text, no empty state.
 *
 * The admin adds testimonials via the admin area. Each row must have both
 * published and consent_confirmed set to true before it appears here.
 */

import AnimateIn from "@/components/ui/AnimateIn";
import SectionLabel from "@/components/ui/SectionLabel";

export type TestimonialItem = {
  id: string;
  author_name: string;
  author_role: string;
  quote: string;
};

interface TestimonialsProps {
  items?: TestimonialItem[];
}

export default function Testimonials({ items = [] }: TestimonialsProps) {
  // Section does not render until real, consented testimonials exist.
  if (items.length === 0) return null;

  return (
    <section className="bg-navy py-20 lg:py-28">
      <div className="shell">
        <div className="mx-auto max-w-2xl text-center">
          <AnimateIn>
            <SectionLabel tone="light">What families say</SectionLabel>
          </AnimateIn>
          <AnimateIn delay={0.08}>
            <h2 className="mt-7 font-display text-[2rem] font-semibold leading-tight text-white lg:text-[3rem]">
              Hear what parents and students have to say
            </h2>
          </AnimateIn>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3 lg:mt-20 lg:gap-8">
          {items.map((t, i) => {
            const initial = t.author_name.trim().charAt(0).toUpperCase();
            return (
              <AnimateIn key={t.id} delay={i * 0.1}>
                <div className="flex h-full flex-col items-center rounded-3xl bg-white px-7 py-10 text-center lg:px-9">
                  <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-pill font-display text-3xl font-semibold text-pill-ink">
                    {initial}
                  </div>
                  <p className="mt-6 font-display text-[1.375rem] font-semibold leading-tight text-ink">
                    {t.author_name}
                  </p>
                  <p className="mt-1.5 text-sm text-muted">{t.author_role}</p>
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

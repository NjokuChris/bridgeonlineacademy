import Link from "next/link";

export default function RegisterCTA() {
  return (
    <section className="bg-bg px-4 py-16 md:px-10 lg:py-24">
      <div className="relative overflow-hidden rounded-3xl bg-navy px-7 py-14 text-center sm:px-12 lg:px-16 lg:py-20">
        <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]">
          <defs>
            <pattern id="register-cta-grid" width="72" height="72" patternUnits="userSpaceOnUse" patternTransform="rotate(30)">
              <path d="M0 0 L72 0 L36 62 Z" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#register-cta-grid)" />
        </svg>
        <div className="relative mx-auto max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-yellow">Your child's next step</p>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-white lg:text-5xl">
            Ready to start learning with BOA?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/85 lg:text-lg">
            A BOA team member will help you find the right programme and get your child started.
          </p>
          <Link
            href="/enrol"
            className="mt-8 inline-flex rounded bg-yellow px-8 py-4 text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:bg-yellow-hover"
          >
            Enroll now
          </Link>
        </div>
      </div>
    </section>
  );
}

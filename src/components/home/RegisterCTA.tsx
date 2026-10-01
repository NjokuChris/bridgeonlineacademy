import Link from "next/link";

/**
 * RegisterCTA: full-bleed navy closer. No decorative SVG patterns.
 * Hierarchy: big heading, sub-copy, single action. Nothing else.
 * Contrast: text-white on bg-navy passes AAA.
 */
export default function RegisterCTA() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 lg:py-28 text-white">
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]"
      >
        <defs>
          <pattern
            id="register-cta-grid"
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
        <rect width="100%" height="100%" fill="url(#register-cta-grid)" />
      </svg>
      <div className="shell relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-yellow">
            Your child&apos;s next step
          </p>
          <h2 className="heading-xl mt-4 text-white" style={{ color: "#ffffff" }}>
            Ready to start learning with BOA?
          </h2>
          <p className="body-lg mt-4 text-white/90" style={{ color: "rgba(255, 255, 255, 0.9)" }}>
            A BOA team member will help you find the right programme and get
            your child started.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/enrol"
              className="focus-ring inline-flex h-12 items-center rounded-lg bg-yellow px-8 text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:bg-yellow-hover"
            >
              Enrol now
            </Link>
            <Link
              href="/contact"
              className="focus-ring inline-flex h-12 items-center rounded-lg border border-white/30 px-8 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-white hover:bg-white/10"
              style={{ color: "#ffffff" }}
            >
              Ask a question
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

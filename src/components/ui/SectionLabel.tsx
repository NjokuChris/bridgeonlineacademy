interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  /** `light` inverts the pill for use on navy panels. */
  tone?: "default" | "light";
}

/**
 * The pill that sits above every section heading in the reference design:
 * soft green ground, sentence case (not uppercase), generously padded.
 */
export default function SectionLabel({
  children,
  className = "",
  tone = "default",
}: SectionLabelProps) {
  const tones = {
    default: "bg-pill text-pill-ink",
    light: "bg-pill/95 text-pill-ink",
  };

  return (
    <span
      className={`inline-block rounded-full px-5 py-2 text-[0.9375rem] font-semibold leading-none ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}

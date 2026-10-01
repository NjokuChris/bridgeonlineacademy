/**
 * SectionLabel: the eyebrow pill above every section heading.
 *
 * tone="default"  green pill on light backgrounds
 * tone="light"    same pill on dark (navy) backgrounds
 * tone="plain"    no pill, just the eyebrow text: for tighter layouts
 */
interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  tone?: "default" | "light" | "plain";
}

export default function SectionLabel({
  children,
  className = "",
  tone = "default",
}: SectionLabelProps) {
  if (tone === "plain") {
    return (
      <p className={`eyebrow ${className}`}>{children}</p>
    );
  }

  const bg =
    tone === "light"
      ? "bg-white/15 text-white"
      : "bg-pill text-pill-ink";

  return (
    <span
      className={`inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest ${bg} ${className}`}
    >
      {children}
    </span>
  );
}

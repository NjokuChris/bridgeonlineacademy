import Link from "next/link";
import Image from "next/image";

export interface LogoProps {
  /** Size variant */
  size?: "sm" | "md" | "lg";
  /** Theme: light for white/bg-bg surfaces, dark for navy/colored surfaces */
  theme?: "light" | "dark";
  /** Whether to prioritize loading the image (e.g. in the top header) */
  priority?: boolean;
  /** Additional container classes */
  className?: string;
  /** Optional click handler (e.g. to close mobile menu) */
  onClick?: () => void;
}

export default function Logo({
  size = "md",
  theme = "light",
  priority = false,
  className = "",
  onClick,
}: LogoProps) {
  const isDark = theme === "dark";

  const config = {
    sm: {
      dimension: 36,
      imgClass: "h-9 w-9 rounded-[20%]",
      primaryText: "text-[0.875rem]",
      secondaryText: "text-[0.7rem]",
      gap: "gap-2",
    },
    md: {
      dimension: 44,
      imgClass: "h-11 w-11 rounded-[22%]",
      primaryText: "text-[1rem] sm:text-base",
      secondaryText: "text-[0.8rem] sm:text-[0.8125rem]",
      gap: "gap-2.5",
    },
    lg: {
      dimension: 52,
      imgClass: "h-12 w-12 sm:h-13 sm:w-13 rounded-[22%]",
      primaryText: "text-base sm:text-lg",
      secondaryText: "text-xs sm:text-sm",
      gap: "gap-3",
    },
  }[size];

  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label="Bridge Online Academy home"
      className={`group inline-flex shrink-0 items-center ${config.gap} rounded-xl transition-opacity hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-link focus-visible:ring-offset-2 ${className}`}
    >
      <div className={`relative shrink-0 overflow-hidden ${config.imgClass} border border-black/5 shadow-xs transition-transform duration-200 group-hover:scale-[1.03]`}>
        <Image
          src="/BOA-icon.png"
          alt="Bridge Online Academy crest"
          width={config.dimension}
          height={config.dimension}
          priority={priority}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-col justify-center leading-none select-none">
        <span
          className={`font-display font-bold tracking-tight ${config.primaryText} leading-tight transition-colors ${
            isDark ? "text-white" : "text-ink group-hover:text-link"
          }`}
        >
          Bridge Online
        </span>
        <span
          className={`font-display font-medium tracking-wider ${config.secondaryText} leading-tight mt-0.5 transition-colors ${
            isDark ? "text-white/70" : "text-muted group-hover:text-link/80"
          }`}
        >
          Academy
        </span>
      </div>
    </Link>
  );
}

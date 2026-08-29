import { FiCheck } from "react-icons/fi";

/** The four accent colours the reference cycles through, in order. */
const CYCLE = ["#2B6CB0", "#2ECC71", "#F5811F", "#FFD100"] as const;

interface CheckCircleProps {
  /** Position in a grid: picks the accent colour by cycling through the four. */
  index?: number;
  className?: string;
}

/**
 * Filled circle with a white tick, used above every feature/pillar heading.
 * Colour is driven by grid position so a 3-across row reads blue / green /
 * orange, and the next row continues yellow / blue / green.
 */
export default function CheckCircle({ index = 0, className = "" }: CheckCircleProps) {
  const colour = CYCLE[index % CYCLE.length];
  // Yellow is too light for a white tick, use ink instead.
  const tick = colour === "#FFD100" ? "#14231C" : "#FFFFFF";

  return (
    <span
      aria-hidden="true"
      className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${className}`}
      style={{ backgroundColor: colour }}
    >
      <FiCheck size={22} color={tick} strokeWidth={3} />
    </span>
  );
}

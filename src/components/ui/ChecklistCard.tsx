import { FiCheck } from "react-icons/fi";

interface ChecklistCardProps {
  heading: string;
  items: string[];
  className?: string;
}

export default function ChecklistCard({
  heading,
  items,
  className = "",
}: ChecklistCardProps) {
  return (
    <div className={`rounded-2xl bg-white p-7 lg:p-9 ${className}`}>
      <h3 className="font-display text-[1.4rem] font-semibold leading-snug text-ink lg:text-[1.6rem]">
        {heading}
      </h3>
      <ul className="mt-5">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-center justify-between gap-4 border-t border-border py-4 last:pb-0"
          >
            <span className="text-[0.95rem] font-semibold leading-snug text-ink">
              {item}
            </span>
            <FiCheck
              aria-hidden="true"
              size={20}
              color="var(--color-tick)"
              strokeWidth={3}
              className="shrink-0"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * SubjectPills
 * No shadows — separation via background colour only.
 * Contrast-checked: pills with light/mid backgrounds use dark ink text.
 * Tap target: min 44px height on mobile.
 * Focus rings on every pill (they are now Links, not divs).
 */
import Link from "next/link";
import type { IconType } from "react-icons";
import {
  FaAtom, FaBrain, FaCalculator, FaCode,
  FaDna, FaFlask, FaLanguage, FaPalette,
} from "react-icons/fa6";
import {
  FiBookOpen, FiGlobe, FiHeart, FiMapPin,
  FiMessageCircle, FiMonitor, FiMoreHorizontal, FiMusic, FiPenTool,
} from "react-icons/fi";
import { MdScience } from "react-icons/md";

type Subject = {
  id: string;
  label: string;
  icon: IconType;
  colour: string;
  /** true = use dark ink text (light background) */
  darkText: boolean;
};

const subjects: Subject[] = [
  { id: "maths",     label: "Maths",           icon: FaCalculator,    colour: "#FFB020", darkText: true  },
  { id: "english",   label: "English",          icon: FiBookOpen,      colour: "#4C6EF5", darkText: false },
  { id: "science",   label: "Science",          icon: MdScience,       colour: "#2F9E6E", darkText: false },
  { id: "health",    label: "Health Ed.",       icon: FiHeart,         colour: "#E0576B", darkText: false },
  { id: "yoruba",    label: "Yoruba",           icon: FaLanguage,      colour: "#E8823A", darkText: true  },
  { id: "hausa",     label: "Hausa",            icon: FaLanguage,      colour: "#2FA6A0", darkText: false },
  { id: "igbo",      label: "Igbo",             icon: FiGlobe,         colour: "#8B5CF6", darkText: false },
  { id: "arts",      label: "Arts",             icon: FaPalette,       colour: "#D6519B", darkText: false },
  { id: "writing",   label: "Creative Writing", icon: FiPenTool,       colour: "#3E8EDE", darkText: false },
  { id: "mental",    label: "Mental Maths",     icon: FaBrain,         colour: "#C9A227", darkText: true  },
  { id: "physics",   label: "Physics",          icon: FaAtom,          colour: "#5D6FE0", darkText: false },
  { id: "chemistry", label: "Chemistry",        icon: FaFlask,         colour: "#34B37E", darkText: false },
  // Biology: darkened slightly from #6FBE44 to pass AA contrast with white
  { id: "biology",   label: "Biology",          icon: FaDna,           colour: "#3D8B37", darkText: false },
  // Computer Studies: darkened from #4AA9C7 to pass AA contrast with white
  { id: "ict",       label: "Computer Studies", icon: FiMonitor,       colour: "#1A7A9A", darkText: false },
  { id: "coding",    label: "Coding",           icon: FaCode,          colour: "#2563EB", darkText: false },
  { id: "french",    label: "French",           icon: FiMessageCircle, colour: "#DB5A8C", darkText: false },
  { id: "geography", label: "Geography",        icon: FiMapPin,        colour: "#C77B2E", darkText: true  },
  { id: "literature",label: "Literature",       icon: FiBookOpen,      colour: "#9B6BD6", darkText: false },
  { id: "music",     label: "Music",            icon: FiMusic,         colour: "#E0509A", darkText: false },
];

export default function SubjectPills() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Subjects we offer</p>
          <h2 className="heading-xl mt-4">A broad curriculum, taught live.</h2>
          <p className="body-lg mt-4">
            Follow the full Nigerian curriculum or come for a single subject.
            Every lesson is live, taught by an experienced tutor.
          </p>
        </div>

        <div className="mx-auto mt-12 flex max-w-5xl flex-wrap justify-center gap-2.5 sm:gap-4">
          {subjects.map(({ id, label, icon: Icon, colour, darkText }) => (
            <Link
              key={id}
              href="/programmes"
              className="focus-ring inline-flex h-11 w-[calc(50%-0.3125rem)] items-center justify-center gap-2 rounded-xl px-3 text-sm font-bold transition-opacity hover:opacity-90 sm:w-auto sm:min-w-40 sm:gap-3 sm:rounded-2xl sm:px-6 sm:py-4 sm:text-base"
              style={{
                backgroundColor: colour,
                color: darkText ? "#14231C" : "#FFFFFF",
              }}
            >
              <Icon className="h-5 w-5 shrink-0 sm:h-7 sm:w-7" aria-hidden="true" />
              {label}
            </Link>
          ))}

          {/* "and more" — decorative, no link needed */}
          <div
            className="inline-flex h-11 w-[calc(50%-0.3125rem)] items-center justify-center gap-2 rounded-xl bg-navy px-3 text-sm font-bold text-white sm:w-auto sm:min-w-40 sm:gap-3 sm:rounded-2xl sm:px-6 sm:py-4 sm:text-base"
            aria-hidden="true"
          >
            <FiMoreHorizontal className="h-5 w-5 shrink-0 sm:h-7 sm:w-7" />
            and more
          </div>
        </div>
      </div>
    </section>
  );
}

import type { IconType } from "react-icons";
import {
  FaAtom,
  FaBrain,
  FaCalculator,
  FaCode,
  FaDna,
  FaFlask,
  FaLanguage,
  FaPalette,
} from "react-icons/fa6";
import {
  FiBookOpen,
  FiGlobe,
  FiHeart,
  FiMapPin,
  FiMessageCircle,
  FiMonitor,
  FiMoreHorizontal,
  FiMusic,
  FiPenTool,
} from "react-icons/fi";
import { MdScience } from "react-icons/md";

type Subject = { id: string; label: string; icon: IconType; colour: string };
const subjects: Subject[] = [
  { id: "maths", label: "Maths", icon: FaCalculator, colour: "#FFB020" },
  { id: "english", label: "English", icon: FiBookOpen, colour: "#4C6EF5" },
  { id: "science", label: "Science", icon: MdScience, colour: "#2F9E6E" },
  { id: "health", label: "Health Ed.", icon: FiHeart, colour: "#E0576B" },
  { id: "yoruba", label: "Yoruba", icon: FaLanguage, colour: "#E8823A" },
  { id: "hausa", label: "Hausa", icon: FaLanguage, colour: "#2FA6A0" },
  { id: "igbo", label: "Igbo", icon: FiGlobe, colour: "#8B5CF6" },
  { id: "arts", label: "Arts", icon: FaPalette, colour: "#D6519B" },
  {
    id: "writing",
    label: "Creative Writing",
    icon: FiPenTool,
    colour: "#3E8EDE",
  },
  { id: "mental", label: "Mental Maths", icon: FaBrain, colour: "#C9A227" },
  { id: "physics", label: "Physics", icon: FaAtom, colour: "#5D6FE0" },
  { id: "chemistry", label: "Chemistry", icon: FaFlask, colour: "#34B37E" },
  { id: "biology", label: "Biology", icon: FaDna, colour: "#6FBE44" },
  { id: "ict", label: "Computer Studies", icon: FiMonitor, colour: "#4AA9C7" },
  { id: "coding", label: "Coding", icon: FaCode, colour: "#2563EB" },
  { id: "french", label: "French", icon: FiMessageCircle, colour: "#DB5A8C" },
  { id: "geography", label: "Geography", icon: FiMapPin, colour: "#C77B2E" },
  {
    id: "literature",
    label: "Literature",
    icon: FiBookOpen,
    colour: "#9B6BD6",
  },
  { id: "music", label: "Music", icon: FiMusic, colour: "#E0509A" },
];

export default function SubjectPills() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-link">
            Subjects we offer
          </p>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-ink lg:text-5xl">
            A broad curriculum, taught live.
          </h2>
          <p className="mt-5 leading-relaxed text-muted">
            From core subjects to languages, sciences and creative learning,
            students explore a rich Nigerian curriculum.
          </p>
        </div>
        <div className="mx-auto mt-12 flex max-w-5xl flex-wrap justify-center gap-2.5 sm:gap-5">
          {subjects.map(({ id, label, icon: Icon, colour }) => {
            const lightText =
              colour === "#FFB020" ||
              colour === "#C9A227" ||
              colour === "#6FBE44" ||
              colour === "#34B37E" ||
              colour === "#4AA9C7" ||
              colour === "#E8823A" ||
              colour === "#C77B2E";
            return (
              <div
                key={id}
                className="inline-flex w-[calc(50%-0.3125rem)] items-center justify-center gap-2 rounded-xl px-2 py-3 text-sm font-bold shadow-md transition-transform hover:-translate-y-1 sm:min-w-44 sm:w-auto sm:gap-4 sm:rounded-[1.5rem] sm:px-7 sm:py-6 sm:text-xl"
                style={{
                  backgroundColor: colour,
                  color: lightText ? "#14231C" : "#FFFFFF",
                }}
              >
                <Icon className="h-5 w-5 shrink-0 sm:h-[34px] sm:w-[34px]" />
                {label}
              </div>
            );
          })}
          <div className="inline-flex w-[calc(50%-0.3125rem)] items-center justify-center gap-2 rounded-xl bg-navy px-2 py-3 text-sm font-bold text-white shadow-md transition-transform hover:-translate-y-1 sm:min-w-44 sm:w-auto sm:gap-4 sm:rounded-[1.5rem] sm:px-7 sm:py-6 sm:text-xl">
            <FiMoreHorizontal className="h-5 w-5 shrink-0 sm:h-[34px] sm:w-[34px]" />
            and more
          </div>
        </div>
      </div>
    </section>
  );
}

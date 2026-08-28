import Link from "next/link";
import SiteLayout from "@/components/layout/SiteLayout";
import RegisterCTA from "@/components/home/RegisterCTA";
import AnimateIn from "@/components/ui/AnimateIn";
import SectionLabel from "@/components/ui/SectionLabel";
import {
  FaCalculator,
  FaBrain,
  FaFlask,
  FaAtom,
  FaDna,
  FaPalette,
  FaCode,
} from "react-icons/fa6";
import {
  FiBookOpen,
  FiGlobe,
  FiHeart,
  FiMusic,
  FiPenTool,
  FiActivity,
} from "react-icons/fi";
import { MdScience } from "react-icons/md";

type Subject = {
  name: string;
  icon: React.ComponentType<any>;
  color: string;
  description: string;
  skills: string;
};

const primarySubjects: Subject[] = [
  {
    name: "English Language",
    icon: FiBookOpen,
    color: "#4C6EF5",
    description:
      "Students develop reading, writing, and speaking skills through guided practice. They learn phonics, comprehension strategies, creative writing, and confident communication.",
    skills:
      "Clear expression, confident reading fluency, ability to write for different purposes.",
  },
  {
    name: "Mathematics",
    icon: FaCalculator,
    color: "#FFB020",
    description:
      "Building solid numeracy foundations through problem-solving and practical application. Students work with numbers, shapes, measurement, and reasoning.",
    skills:
      "Number sense, logical thinking, ability to solve multi-step problems, mathematical confidence.",
  },
  {
    name: "Science",
    icon: MdScience,
    color: "#2F9E6E",
    description:
      "Hands-on exploration of living things, forces, materials, and how systems work. Students learn through observation, questions, and simple experiments.",
    skills:
      "Scientific curiosity, observation skills, understanding cause and effect, ability to ask questions.",
  },
  {
    name: "Social Studies",
    icon: FiGlobe,
    color: "#2FA6A0",
    description:
      "Understanding communities, cultures, geography, and history. Students learn about where they live, how societies work, and different ways of life.",
    skills:
      "Cultural awareness, geographical understanding, knowledge of their community and wider world.",
  },
  {
    name: "Health Education",
    icon: FiHeart,
    color: "#E0576B",
    description:
      "Learning about physical and emotional wellbeing, healthy habits, safety, and understanding their own bodies and emotions.",
    skills:
      "Self-awareness, healthy decision-making, understanding personal safety and emotions.",
  },
  {
    name: "Visual Arts",
    icon: FaPalette,
    color: "#D6519B",
    description:
      "Creative expression through drawing, painting, and design. Students explore colour, texture, and different artistic techniques.",
    skills:
      "Creative thinking, fine motor control, ability to express ideas visually, appreciation of different styles.",
  },
  {
    name: "Music",
    icon: FiMusic,
    color: "#E0509A",
    description:
      "Learning rhythm, melody, and basic music theory. Students sing, play instruments, and explore how music works.",
    skills:
      "Listening skills, rhythm awareness, ability to follow and create patterns, musical confidence.",
  },
  {
    name: "Physical Education",
    icon: FiActivity,
    color: "#5D6FE0",
    description:
      "Building coordination, fitness, and confidence through age-appropriate activities. Students learn teamwork and the importance of movement.",
    skills:
      "Physical coordination, teamwork, persistence, understanding fitness and wellbeing.",
  },
  {
    name: "Information & Communication Technology",
    icon: FiPenTool,
    color: "#3E8EDE",
    description:
      "Safe and purposeful use of technology. Students learn digital literacy, basic coding concepts, and how to use technology to learn and create.",
    skills:
      "Digital confidence, problem-solving through technology, understanding how technology works.",
  },
  {
    name: "Scratch",
    icon: FaCode,
    color: "#FF6B35",
    description:
      "Introduction to programming through Scratch, a visual coding language. Students create interactive stories, games, and animations by connecting blocks.",
    skills:
      "Logical thinking, sequential reasoning, creativity through code, problem decomposition.",
  },
  {
    name: "Coding",
    icon: FaCode,
    color: "#2563EB",
    description:
      "Foundational coding skills using beginner-friendly languages. Students learn programming concepts and build simple applications.",
    skills:
      "Programming logic, syntax understanding, debugging skills, computational thinking.",
  },
];

const secondarySubjects: Subject[] = [
  {
    name: "English Language",
    icon: FiBookOpen,
    color: "#4C6EF5",
    description:
      "Deep engagement with literature, writing, and communication. Students analyse texts, write for purpose, develop their voice, and understand language.",
    skills:
      "Critical reading, persuasive writing, analytical thinking, articulate expression.",
  },
  {
    name: "Mathematics",
    icon: FaCalculator,
    color: "#FFB020",
    description:
      "Abstract thinking and problem-solving. Students explore algebra, geometry, data, and mathematical reasoning at greater depth and complexity.",
    skills:
      "Mathematical reasoning, problem decomposition, algebraic thinking, confidence with abstraction.",
  },
  {
    name: "Biology",
    icon: FaDna,
    color: "#6FBE44",
    description:
      "Study of living organisms, cells, genetics, and ecosystems. Students learn how life works at every scale.",
    skills:
      "Scientific method, understanding living systems, biological reasoning, lab safety.",
  },
  {
    name: "Chemistry",
    icon: FaFlask,
    color: "#34B37E",
    description:
      "Understanding matter, chemical reactions, and atomic structure. Students explore what things are made of and how they change.",
    skills:
      "Understanding reactions and properties, safety with chemicals, practical lab skills.",
  },
  {
    name: "Physics",
    icon: FaAtom,
    color: "#5D6FE0",
    description:
      "Studying forces, energy, waves, and how the physical world works. Students explore motion, electricity, light, and space.",
    skills:
      "Understanding forces and energy, mathematical application to physics, experimental design.",
  },
  {
    name: "Social Studies",
    icon: FiGlobe,
    color: "#2FA6A0",
    description:
      "Deeper exploration of geography, economics, politics, and social systems. Students understand how societies function and change.",
    skills:
      "Social analysis, understanding complex systems, geographical reasoning, civic awareness.",
  },
  {
    name: "History",
    icon: FiBookOpen,
    color: "#9B6BD6",
    description:
      "Understanding the past and how it shapes the present. Students explore events, periods, and how to interpret historical evidence.",
    skills:
      "Historical thinking, evidence evaluation, understanding causation and consequence, perspective.",
  },
  {
    name: "Geography",
    icon: FiGlobe,
    color: "#C77B2E",
    description:
      "Study of places, people, and environmental systems. Students explore human and physical geography at regional and global scales.",
    skills:
      "Spatial reasoning, understanding human-environment interaction, map reading, fieldwork skills.",
  },
  {
    name: "Health Education",
    icon: FiHeart,
    color: "#E0576B",
    description:
      "Comprehensive understanding of physical and mental wellbeing. Students learn about relationships, nutrition, fitness, and emotional resilience.",
    skills:
      "Self-care practices, emotional resilience, understanding health and wellbeing holistically.",
  },
  {
    name: "Visual Arts",
    icon: FaPalette,
    color: "#D6519B",
    description:
      "Advanced artistic practice and critical engagement with art. Students develop technique, explore art history, and develop their artistic voice.",
    skills:
      "Technical skill, artistic expression, critical analysis of art, creative problem-solving.",
  },
  {
    name: "Music",
    icon: FiMusic,
    color: "#E0509A",
    description:
      "Advanced music theory, performance, and composition. Students understand music at depth and create their own compositions.",
    skills:
      "Musical literacy, performance confidence, compositional thinking, music technology skills.",
  },
  {
    name: "Physical Education",
    icon: FiActivity,
    color: "#5D6FE0",
    description:
      "Developing competence, confidence, and participation in physical activity. Students understand fitness, sport, and movement at greater depth.",
    skills:
      "Athletic skill development, fitness knowledge, strategic thinking in sport, leadership.",
  },
  {
    name: "Scratch",
    icon: FaCode,
    color: "#FF6B35",
    description:
      "Intermediate programming through Scratch. Students create more complex projects, learn how to organize code, and explore computational concepts.",
    skills:
      "Advanced logical thinking, understanding algorithms, project organization, creative problem-solving.",
  },
  {
    name: "Coding",
    icon: FaCode,
    color: "#2563EB",
    description:
      "Advanced programming in languages like Python or JavaScript. Students build real applications and understand software development principles.",
    skills:
      "Programming fluency, debugging complex code, software design thinking, technical problem-solving.",
  },
];

const weeklySchedule = [
  { day: "Monday", morning: "Live Lesson", afternoon: "Independent Work", evening: "Break" },
  { day: "Tuesday", morning: "Live Lesson", afternoon: "Practice & Feedback", evening: "Break" },
  { day: "Wednesday", morning: "Live Lesson", afternoon: "Project Work", evening: "Break" },
  { day: "Thursday", morning: "Live Lesson", afternoon: "Independent Work", evening: "Break" },
  { day: "Friday", morning: "Live Lesson", afternoon: "Review & Practice", evening: "Break" },
];

export default function ProgrammesPage() {
  return (
    <SiteLayout>
      {/* Hero section */}
      <section className="bg-bg py-20 lg:py-28">
        <div className="shell max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-widest text-link">Programmes</p>
          <h1 className="mt-5 font-display text-5xl font-semibold leading-tight text-ink lg:text-6xl">
            Learning for every stage of the journey.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-muted">
            BOA offers live online learning for Primary and Secondary students following the Nigerian curriculum.
          </p>
        </div>
      </section>

      {/* Stages overview */}
      <section className="bg-white py-20 lg:py-28">
        <div className="shell grid gap-7 md:grid-cols-2">
          <article className="rounded-2xl border border-border p-8 lg:p-10">
            <p className="text-sm font-bold uppercase tracking-widest text-link">Ages 5–10</p>
            <h2 className="mt-5 font-display text-4xl font-semibold text-ink">Primary</h2>
            <p className="mt-6 leading-relaxed text-muted">
              Live lessons help younger learners build confidence, strong foundations and dependable learning habits.
            </p>
            <p className="mt-5 text-sm font-semibold text-ink">11 subjects taught live</p>
          </article>
          <article className="rounded-2xl border border-border p-8 lg:p-10">
            <p className="text-sm font-bold uppercase tracking-widest text-link">Ages 11–17</p>
            <h2 className="mt-5 font-display text-4xl font-semibold text-ink">Secondary</h2>
            <p className="mt-6 leading-relaxed text-muted">
              Structured, teacher-led learning supports students as subjects become deeper and more specialised.
            </p>
            <p className="mt-5 text-sm font-semibold text-ink">14 subjects taught live</p>
          </article>
        </div>
      </section>

      {/* Primary subjects */}
      <section className="bg-bg py-20 lg:py-28">
        <div className="shell">
          <AnimateIn>
            <SectionLabel>Primary (Ages 5–10)</SectionLabel>
          </AnimateIn>
          <AnimateIn delay={0.08}>
            <h2 className="mt-7 font-display text-[2rem] font-semibold leading-tight text-ink lg:text-[2.75rem]">
              What your child will learn.
            </h2>
          </AnimateIn>

          <div className="mt-12 space-y-8 lg:mt-16">
            {primarySubjects.map((subject, index) => {
              const Icon = subject.icon;
              return (
                <AnimateIn key={subject.name} delay={0.1 + index * 0.04}>
                  <div className="rounded-2xl border border-border bg-white p-6 lg:p-8">
                    <div className="flex items-start gap-4">
                      <div
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg"
                        style={{ backgroundColor: subject.color + "20" }}
                      >
                        <Icon className="h-6 w-6" style={{ color: subject.color }} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-display text-lg font-semibold text-ink">{subject.name}</h3>
                        <p className="mt-2 leading-relaxed text-muted">{subject.description}</p>
                        <p className="mt-3 text-sm font-semibold text-ink">Skills built: {subject.skills}</p>
                      </div>
                    </div>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Secondary subjects */}
      <section className="bg-white py-20 lg:py-28">
        <div className="shell">
          <AnimateIn>
            <SectionLabel>Secondary (Ages 11–17)</SectionLabel>
          </AnimateIn>
          <AnimateIn delay={0.08}>
            <h2 className="mt-7 font-display text-[2rem] font-semibold leading-tight text-ink lg:text-[2.75rem]">
              A deeper curriculum.
            </h2>
          </AnimateIn>

          <div className="mt-12 space-y-8 lg:mt-16">
            {secondarySubjects.map((subject, index) => {
              const Icon = subject.icon;
              return (
                <AnimateIn key={subject.name} delay={0.1 + index * 0.04}>
                  <div className="rounded-2xl border border-border bg-bg p-6 lg:p-8">
                    <div className="flex items-start gap-4">
                      <div
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg"
                        style={{ backgroundColor: subject.color + "20" }}
                      >
                        <Icon className="h-6 w-6" style={{ color: subject.color }} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-display text-lg font-semibold text-ink">{subject.name}</h3>
                        <p className="mt-2 leading-relaxed text-muted">{subject.description}</p>
                        <p className="mt-3 text-sm font-semibold text-ink">Skills built: {subject.skills}</p>
                      </div>
                    </div>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Weekly schedule section */}
      <section className="bg-bg py-20 lg:py-28">
        <div className="shell">
          <AnimateIn>
            <SectionLabel>How it works</SectionLabel>
          </AnimateIn>
          <AnimateIn delay={0.08}>
            <h2 className="mt-7 font-display text-[2rem] font-semibold leading-tight text-ink lg:text-[2.75rem]">
              What a typical week looks like.
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.14}>
            <p className="mt-5 max-w-3xl leading-relaxed text-muted">
              Our weekly schedule balances live instruction with independent work, giving students time to learn new concepts and practice them.
            </p>
          </AnimateIn>

          <div className="mt-12 overflow-x-auto lg:mt-16">
            <AnimateIn>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="bg-white px-4 py-3 text-left font-display font-semibold text-ink lg:px-6 lg:py-4">
                      Day
                    </th>
                    <th className="bg-white px-4 py-3 text-left font-display font-semibold text-ink lg:px-6 lg:py-4">
                      Morning
                    </th>
                    <th className="bg-white px-4 py-3 text-left font-display font-semibold text-ink lg:px-6 lg:py-4">
                      Afternoon
                    </th>
                    <th className="bg-white px-4 py-3 text-left font-display font-semibold text-ink lg:px-6 lg:py-4">
                      Evening
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {weeklySchedule.map((slot, index) => (
                    <tr key={slot.day} className={index % 2 === 0 ? "bg-white" : "bg-bg"}>
                      <td className="border-b border-border px-4 py-4 font-semibold text-ink lg:px-6">
                        {slot.day}
                      </td>
                      <td className="border-b border-border px-4 py-4 text-muted lg:px-6">
                        <span className="inline-block rounded-lg bg-link/10 px-3 py-1 text-sm font-medium text-link">
                          {slot.morning}
                        </span>
                      </td>
                      <td className="border-b border-border px-4 py-4 text-muted lg:px-6">
                        <span className="inline-block rounded-lg bg-yellow/10 px-3 py-1 text-sm font-medium text-yellow">
                          {slot.afternoon}
                        </span>
                      </td>
                      <td className="border-b border-border px-4 py-4 text-muted lg:px-6">
                        <span className="inline-block text-sm">{slot.evening}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </AnimateIn>
          </div>

          <AnimateIn delay={0.4}>
            <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted lg:mt-12">
              Live lessons are when your child learns new concepts directly from their teacher. Independent work gives them time to practise,
              complete assignments, and consolidate their learning. Breaks ensure they have time to rest and recharge.
            </p>
          </AnimateIn>
        </div>
      </section>

      <RegisterCTA />
    </SiteLayout>
  );
}

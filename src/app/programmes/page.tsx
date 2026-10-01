import type { Metadata } from "next";
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
  FaLanguage,
} from "react-icons/fa6";
import {
  FiBookOpen,
  FiGlobe,
  FiHeart,
  FiMusic,
  FiPenTool,
  FiMonitor,
  FiMapPin,
  FiMessageCircle,
} from "react-icons/fi";
import { MdScience } from "react-icons/md";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Programmes",
  description:
    "BOA covers Academic Catch-up, Entrance Exam Preparation, Reading Mastery and Cultural Identity. Follow the full Nigerian curriculum or choose individual subjects and skills.",
};

type Subject = {
  name: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
  description: string;
};

const academicSubjects: Subject[] = [
  {
    name: "Maths",
    icon: FaCalculator,
    color: "#FFB020",
    description:
      "Numbers, shapes, measurement and reasoning. Learners build a solid foundation and progress to algebra, geometry and data as topics deepen.",
  },
  {
    name: "English Language",
    icon: FiBookOpen,
    color: "#4C6EF5",
    description:
      "Reading, writing, comprehension and communication. Learners develop confidence with language at every level.",
  },
  {
    name: "Science",
    icon: MdScience,
    color: "#2F9E6E",
    description:
      "Living things, forces, materials and how systems work. Lessons build curiosity and understanding through observation and structured practice.",
  },
  {
    name: "Health Education",
    icon: FiHeart,
    color: "#E0576B",
    description:
      "Physical and emotional wellbeing, healthy habits, safety and understanding how the body works.",
  },
  {
    name: "Mental Maths",
    icon: FaBrain,
    color: "#C9A227",
    description:
      "Speed, accuracy and mental strategies. Learners practise calculation techniques that build confidence in all numeracy work.",
  },
  {
    name: "Physics",
    icon: FaAtom,
    color: "#5D6FE0",
    description:
      "Forces, energy, waves and electricity. Learners explore how the physical world works and apply maths to real problems.",
  },
  {
    name: "Chemistry",
    icon: FaFlask,
    color: "#34B37E",
    description:
      "Matter, chemical reactions and atomic structure. Learners discover what things are made of and how they change.",
  },
  {
    name: "Biology",
    icon: FaDna,
    color: "#6FBE44",
    description:
      "Living organisms, cells, genetics and ecosystems. Learners study how life works at every scale.",
  },
  {
    name: "Geography",
    icon: FiMapPin,
    color: "#C77B2E",
    description:
      "Places, people and environments. Learners explore human and physical geography at local and global scales.",
  },
  {
    name: "Literature",
    icon: FiBookOpen,
    color: "#9B6BD6",
    description:
      "Close reading, analysis and appreciation of texts. Learners engage with stories, poems and prose from a range of voices.",
  },
  {
    name: "Computer Studies",
    icon: FiMonitor,
    color: "#4AA9C7",
    description:
      "Digital literacy and how technology works. Learners use computers safely and purposefully.",
  },
  {
    name: "French",
    icon: FiMessageCircle,
    color: "#DB5A8C",
    description:
      "Listening, speaking, reading and writing in French. Learners build practical language skills from the ground up.",
  },
  {
    name: "Arts",
    icon: FaPalette,
    color: "#D6519B",
    description:
      "Drawing, painting and design. Learners explore colour, texture and different creative techniques.",
  },
  {
    name: "Creative Writing",
    icon: FiPenTool,
    color: "#3E8EDE",
    description:
      "Stories, essays and imaginative texts. Learners develop their own voice and write with purpose and clarity.",
  },
  {
    name: "Music",
    icon: FiMusic,
    color: "#E0509A",
    description:
      "Rhythm, melody and music theory. Learners listen, play and begin to create their own pieces.",
  },
  {
    name: "Coding",
    icon: FaCode,
    color: "#2563EB",
    description:
      "Programming logic and practical coding skills. Learners build real projects and develop computational thinking.",
  },
];

const entranceSubjects: Subject[] = [
  {
    name: "Maths (Exam Prep)",
    icon: FaCalculator,
    color: "#FFB020",
    description:
      "Past questions and focused strategies for maths sections of entrance exams. Learners practise under timed conditions.",
  },
  {
    name: "English (Exam Prep)",
    icon: FiBookOpen,
    color: "#4C6EF5",
    description:
      "Comprehension, verbal reasoning and essay technique for entrance papers. Learners work through real past questions.",
  },
  {
    name: "General Paper",
    icon: MdScience,
    color: "#2F9E6E",
    description:
      "Mixed-subject preparation for schools that set a general entrance paper. Tutors help learners identify and close gaps across all areas tested.",
  },
];

const readingSubjects: Subject[] = [
  {
    name: "Phonics",
    icon: FiBookOpen,
    color: "#4C6EF5",
    description:
      "Sound-letter relationships and decoding strategies that help learners read unfamiliar words confidently.",
  },
  {
    name: "Comprehension",
    icon: FiPenTool,
    color: "#3E8EDE",
    description:
      "Understanding what is read. Learners practise finding information, making inferences and explaining their thinking.",
  },
  {
    name: "Reading Fluency",
    icon: FiBookOpen,
    color: "#9B6BD6",
    description:
      "Speed, expression and accuracy in reading aloud. Learners build the fluency that makes reading a pleasure rather than a task.",
  },
];

const culturalSubjects: Subject[] = [
  {
    name: "Yoruba",
    icon: FaLanguage,
    color: "#E8823A",
    description:
      "Speaking, listening and reading in Yoruba. Learners develop fluency and a genuine connection to the language.",
  },
  {
    name: "Hausa",
    icon: FaLanguage,
    color: "#2FA6A0",
    description:
      "Speaking, listening and reading in Hausa. Lessons build practical communication and pride in the language.",
  },
  {
    name: "Igbo",
    icon: FiGlobe,
    color: "#8B5CF6",
    description:
      "Speaking, listening and reading in Igbo. Learners reconnect with their roots through structured, engaging lessons.",
  },
];

type SubjectGroupProps = {
  subjects: Subject[];
  bg?: string;
};

function SubjectList({ subjects, bg = "bg-white" }: SubjectGroupProps) {
  return (
    <div className="mt-10 space-y-5 lg:mt-14">
      {subjects.map((subject, index) => {
        const Icon = subject.icon;
        return (
          <AnimateIn key={subject.name} delay={0.08 + index * 0.04}>
            <div className={`rounded-2xl border border-border ${bg} p-6 lg:p-8`}>
              <div className="flex items-start gap-4">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg"
                  style={{ backgroundColor: subject.color + "22" }}
                >
                  <Icon
                    className="h-6 w-6"
                    style={{ color: subject.color }}
                  />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {subject.name}
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted">
                    {subject.description}
                  </p>
                </div>
              </div>
            </div>
          </AnimateIn>
        );
      })}
    </div>
  );
}

export default function ProgrammesPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="bg-bg py-20 lg:py-28">
        <div className="shell max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-widest text-link">
            Programmes
          </p>
          <h1 className="mt-5 font-display text-5xl font-semibold leading-tight text-ink lg:text-6xl">
            Practical, personalised and exam-ready.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-muted">
            Our robust curriculum is designed to be practical, personalised, and exam-ready.
            Follow the full Nigerian curriculum with structured, ongoing teaching, or pick
            up individual subjects and skills on their own, all taught live in small groups
            by experienced tutors.
          </p>
        </div>
      </section>

      {/* Two learning tracks */}
      <section className="bg-white py-20 lg:py-28">
        <div className="shell grid gap-7 md:grid-cols-2">
          <article className="rounded-2xl bg-stage-primary p-8 text-white lg:p-10">
            <p className="text-sm font-bold uppercase tracking-widest text-yellow">
              Structured learning
            </p>
            <h2 className="mt-5 font-display text-4xl font-semibold">
              Full Curriculum Programme
            </h2>
            <p className="mt-6 leading-relaxed text-white/90">
              Ongoing, structured teaching across all subjects of the Nigerian
              curriculum. Learners follow a dependable routine, build with
              peers, and receive regular progress reports.
            </p>
          </article>
          <article className="rounded-2xl bg-navy p-8 text-white lg:p-10">
            <p className="text-sm font-bold uppercase tracking-widest text-yellow">
              Pick what you need
            </p>
            <h2 className="mt-5 font-display text-4xl font-semibold">
              Individual Subjects and Skills
            </h2>
            <p className="mt-6 leading-relaxed text-white/90">
              Choose a single subject or skill without enrolling in the full
              curriculum. Coding, video editing, exam preparation, or any
              subject taught live by a specialist.
            </p>
          </article>
        </div>
      </section>

      {/* Class format */}
      <section className="bg-bg py-14 lg:py-20">
        <div className="shell max-w-3xl">
          <AnimateIn>
            <div className="rounded-2xl border border-border bg-white p-6 lg:p-8">
              <SectionLabel>How classes run</SectionLabel>
              <p className="mt-4 leading-relaxed text-muted">
                Sessions happen{" "}
                <strong className="text-ink">
                  {siteConfig.classFormat.sessionsPerWeek} times a week
                </strong>{" "}
                and last{" "}
                <strong className="text-ink">
                  {siteConfig.classFormat.sessionLengths.join(", ")}
                </strong>{" "}
                depending on the subject and programme. Groups are small.
                Personalised online sessions are also available.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Focus Area 1: Academic Catch-up and Excellence */}
      <section className="bg-white py-20 lg:py-28">
        <div className="shell">
          <AnimateIn>
            <SectionLabel>Focus area 1</SectionLabel>
          </AnimateIn>
          <AnimateIn delay={0.08}>
            <h2 className="mt-5 font-display text-[2rem] font-semibold leading-tight text-ink lg:text-[2.75rem]">
              Academic Catch-up and Excellence
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.14}>
            <p className="mt-5 max-w-3xl leading-relaxed text-muted">
              Core subjects taught carefully, with close attention to gaps in
              learning. Whether a learner needs to catch up or push ahead,
              tutors match lessons to where they actually are.
            </p>
          </AnimateIn>
          <SubjectList subjects={academicSubjects} bg="bg-white" />
        </div>
      </section>

      {/* Focus Area 2: Entrance Exam Preparation */}
      <section className="bg-bg py-20 lg:py-28">
        <div className="shell">
          <AnimateIn>
            <SectionLabel>Focus area 2</SectionLabel>
          </AnimateIn>
          <AnimateIn delay={0.08}>
            <h2 className="mt-5 font-display text-[2rem] font-semibold leading-tight text-ink lg:text-[2.75rem]">
              Entrance Exam Preparation
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.14}>
            <p className="mt-5 max-w-3xl leading-relaxed text-muted">
              Proven strategies and past questions to help learners prepare for
              entrance exams with confidence. Tutors work through the specific
              papers and techniques that make a real difference on exam day.
            </p>
          </AnimateIn>
          <SubjectList subjects={entranceSubjects} bg="bg-bg" />
        </div>
      </section>

      {/* Focus Area 3: Reading Mastery */}
      <section className="bg-white py-20 lg:py-28">
        <div className="shell">
          <AnimateIn>
            <SectionLabel>Focus area 3</SectionLabel>
          </AnimateIn>
          <AnimateIn delay={0.08}>
            <h2 className="mt-5 font-display text-[2rem] font-semibold leading-tight text-ink lg:text-[2.75rem]">
              Reading Mastery
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.14}>
            <p className="mt-5 max-w-3xl leading-relaxed text-muted">
              Phonics, comprehension and fluency programmes that build strong
              readers. Learners progress from decoding individual words to
              reading with speed, understanding and enjoyment.
            </p>
          </AnimateIn>
          <SubjectList subjects={readingSubjects} bg="bg-white" />
        </div>
      </section>

      {/* Focus Area 4: Cultural Identity */}
      <section className="bg-bg py-20 lg:py-28">
        <div className="shell">
          <AnimateIn>
            <SectionLabel>Focus area 4</SectionLabel>
          </AnimateIn>
          <AnimateIn delay={0.08}>
            <h2 className="mt-5 font-display text-[2rem] font-semibold leading-tight text-ink lg:text-[2.75rem]">
              Cultural Identity
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.14}>
            <p className="mt-5 max-w-3xl leading-relaxed text-muted">
              Lessons and practice to help learners speak their local dialect
              fluently and stay connected to their roots. Language is treated as
              something to be proud of, not just a subject to tick off.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="mt-3 max-w-3xl text-sm font-medium text-muted">
              Dialects currently offered: Yoruba, Hausa and Igbo.
            </p>
          </AnimateIn>
          <SubjectList subjects={culturalSubjects} bg="bg-bg" />
        </div>
      </section>

      <RegisterCTA />
    </SiteLayout>
  );
}

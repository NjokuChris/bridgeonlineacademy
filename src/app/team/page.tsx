import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteLayout from "@/components/layout/SiteLayout";
import RegisterCTA from "@/components/home/RegisterCTA";
import AnimateIn from "@/components/ui/AnimateIn";
import SectionLabel from "@/components/ui/SectionLabel";
import { FiCheckCircle } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Team and Tutors",
  description:
    "Meet Ms Zika and the dedicated teaching team at Bridge Online Academy. Experienced subject tutors delivering live, personal online learning.",
};

const teachers = [
  {
    name: "Ms Zika",
    subject: "English & Foundational Literacy",
    role: "Founder & Lead Educator",
    description:
      "Specialist in reading mastery, phonics and grammar. Focuses on confidence and independent study habits.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=750&fit=crop&crop=faces",
  },
  {
    name: "Mr David",
    subject: "Mathematics & Further Maths",
    role: "Senior STEM Tutor",
    description:
      "Breaks complex arithmetic and algebra into structured steps, helping students master problem-solving.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=750&fit=crop&crop=faces",
  },
  {
    name: "Mrs Folake",
    subject: "Yoruba & Cultural Studies",
    role: "Language Specialist",
    description:
      "Builds spoken fluency, cultural connection and pronunciation through warm, conversation-led lessons.",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&h=750&fit=crop&crop=faces",
  },
  {
    name: "Mr Chidi",
    subject: "Physics & Chemistry",
    role: "Sciences Tutor",
    description:
      "Uses practical real-world examples to explain scientific laws and prepare students for school tests and exams.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=750&fit=crop&crop=faces",
  },
  {
    name: "Ms Amina",
    subject: "Hausa & Social Studies",
    role: "Humanities Tutor",
    description:
      "Guides learners through language basics, reading comprehension and Nigerian regional geography.",
    image:
      "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=600&h=750&fit=crop&crop=faces",
  },
  {
    name: "Mr Emmanuel",
    subject: "Coding & Digital Skills",
    role: "Technology Instructor",
    description:
      "Introduces learners to computational thinking, scratch programming and digital project building.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=750&fit=crop&crop=faces",
  },
];

const standards = [
  {
    title: "Subject mastery",
    description:
      "Every tutor knows their subject deeply, explaining concepts simply and answering questions from multiple angles until understanding clicks.",
  },
  {
    title: "Trained for online learning",
    description:
      "Teaching online requires specific skills: keeping learners engaged, managing small-group interaction and using digital tools effectively.",
  },
  {
    title: "Regular parent communication",
    description:
      "Tutors provide clear written updates on attendance, engagement and progress, maintaining a dependable partnership with families.",
  },
  {
    title: "Safeguarding and verification",
    description:
      "Every tutor undergoes screening, reference checks and onboarding in child protection before entering a BOA live classroom.",
  },
];

export default function TeamPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="bg-bg py-20 lg:py-28">
        <div className="shell max-w-4xl">
          <p className="eyebrow">Our Teaching Team</p>
          <h1 className="mt-4 font-display text-5xl font-semibold leading-tight text-ink lg:text-6xl">
            The teachers behind your child&apos;s progress.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
            Bridge Online Academy started with one teacher, Ms Zika, and has grown
            deliberately into a team of experienced tutors. Every teacher is selected
            for subject depth, clear explanations and genuine patience with learners.
          </p>
        </div>
      </section>

      {/* Minimal Teacher Cards */}
      <section className="bg-white py-20 lg:py-28">
        <div className="shell">
          <div className="mx-auto max-w-2xl text-center">
            <AnimateIn>
              <SectionLabel>Our Tutors</SectionLabel>
            </AnimateIn>
            <AnimateIn delay={0.08}>
              <h2 className="heading-xl mt-4">
                Meet our tutors.
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.14}>
              <p className="body-lg mt-4 text-muted">
                Experienced, caring subject teachers who lead live lessons every week.
              </p>
            </AnimateIn>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teachers.map((teacher, index) => (
              <AnimateIn key={teacher.name} delay={index * 0.07}>
                <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white p-4 transition-colors hover:border-link/40">
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-bg">
                    <Image
                      src={teacher.image}
                      alt={teacher.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="mt-4 flex flex-1 flex-col justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-link">
                        {teacher.subject}
                      </p>
                      <h3 className="font-display text-xl font-semibold text-ink mt-1">
                        {teacher.name}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {teacher.description}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership: Ms Zika */}
      <section className="bg-bg py-20 lg:py-28">
        <div className="shell grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <AnimateIn direction="right">
            <div className="relative">
              <div className="flex aspect-square w-full max-w-sm flex-col justify-between rounded-2xl bg-navy p-8 lg:max-w-none lg:p-10">
                <span className="font-display text-8xl font-semibold text-yellow" aria-hidden="true">
                  Z
                </span>
                <div>
                  <h2 className="font-display text-2xl font-semibold text-white">Ms Zika</h2>
                  <p className="mt-1 text-sm font-bold uppercase tracking-widest text-yellow">
                    Founder and Head of School
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-2xl bg-yellow -z-10" aria-hidden="true" />
            </div>
          </AnimateIn>

          <div className="flex flex-col justify-center">
            <AnimateIn>
              <SectionLabel>Leadership</SectionLabel>
            </AnimateIn>
            <AnimateIn delay={0.08}>
              <h2 className="mt-5 font-display text-3xl font-semibold text-ink lg:text-4xl">
                Led by a teacher who still teaches.
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.14}>
              <p className="mt-6 leading-relaxed text-muted">
                Ms Zika founded Bridge Online Academy to give families dependable,
                high-quality education that adapts to the child, rather than forcing
                the child into a rigid mould. She began by tutoring individual students,
                noticing where they struggled and celebrating when lessons clicked.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p className="mt-4 leading-relaxed text-muted">
                As the academy grew, she brought in trusted tutors who share that same
                personal standard: clear communication, small group sizes and regular
                feedback to parents. Ms Zika remains directly involved in curriculum
                planning, tutor oversight and parent consultations.
              </p>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Teaching Standards */}
      <section className="bg-white py-20 lg:py-28">
        <div className="shell">
          <div className="mx-auto max-w-2xl text-center">
            <AnimateIn>
              <SectionLabel>Tutor Standards</SectionLabel>
            </AnimateIn>
            <AnimateIn delay={0.08}>
              <h2 className="heading-xl mt-4">
                How we select and support our tutors.
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.14}>
              <p className="body-lg mt-4 text-muted">
                Every tutor at BOA meets clear benchmarks before leading a classroom.
              </p>
            </AnimateIn>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:gap-8">
            {standards.map((s, i) => (
              <AnimateIn key={s.title} delay={i * 0.08}>
                <div className="flex gap-4 rounded-xl border border-border bg-bg p-6 lg:p-8">
                  <FiCheckCircle size={22} className="mt-1 shrink-0 text-link" aria-hidden="true" />
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{s.description}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/teach"
              className="focus-ring inline-flex h-12 items-center rounded-lg border border-navy px-8 text-sm font-bold uppercase tracking-wide text-navy transition-colors hover:bg-navy hover:text-white"
            >
              Interested in teaching with BOA? Apply here →
            </Link>
          </div>
        </div>
      </section>

      <RegisterCTA />
    </SiteLayout>
  );
}

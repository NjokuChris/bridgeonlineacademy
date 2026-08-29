import Link from "next/link";

const programmes = [
  { title: "Full Curriculum", ages: "Any age", copy: "Structured, ongoing teaching across all subjects of the Nigerian curriculum, tailored to your level. Learn with peers, build community, and follow a dependable routine.", colour: "bg-stage-primary" },
  { title: "Individual Subjects", ages: "Any age", copy: "Pick up a single subject or skill without enrolling in the full curriculum. Coding, video editing, creative writing, exam prep, or anything else taught live by a specialist.", colour: "bg-navy" },
];

export default function KeyStages() {
  return <section className="bg-bg py-20 lg:py-28"><div className="shell"><p className="text-sm font-bold uppercase tracking-widest text-link">Two ways to learn</p><div className="mt-5 flex flex-wrap items-end justify-between gap-5"><h2 className="max-w-2xl font-display text-4xl font-semibold leading-tight text-ink lg:text-5xl">Learn your way at BOA.</h2><Link href="/programmes" className="font-bold text-link hover:underline">View all programmes →</Link></div><div className="mt-12 grid gap-6 md:grid-cols-2">{programmes.map((programme) => <article key={programme.title} className={`${programme.colour} rounded-2xl p-8 text-white lg:p-10`}><p className="text-sm font-bold uppercase tracking-widest text-yellow">{programme.ages}</p><h3 className="mt-5 font-display text-3xl font-semibold">{programme.title}</h3><p className="mt-5 max-w-md leading-relaxed text-white/90">{programme.copy}</p><Link href="/programmes" className="mt-8 inline-block font-bold text-yellow hover:underline">Learn more →</Link></article>)}</div></div></section>;
}

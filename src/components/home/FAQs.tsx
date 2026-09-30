"use client";

import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import AnimateIn from "@/components/ui/AnimateIn";

export type FaqItem = [question: string, answer: string];

export const ALL_FAQS: FaqItem[] = [
  ["Who can join BOA?", "BOA is open to any learner, whatever their age. You can enrol in the full Nigerian curriculum programme or come to us for a single subject or skill. There is no age cutoff and no fixed stage requirement."],
  ["What do you teach?", "BOA covers four focus areas: Academic Catch-up and Excellence, Entrance Exam Preparation, Reading Mastery, and Cultural Identity. Subjects include Maths, English, Science, Health Education, Yoruba, Hausa, Igbo, Arts, Creative Writing, Mental Maths, Physics, Chemistry, Biology, Computer Studies, Coding, French, Geography, Literature and Music."],
  ["How do classes work?", "Classes are live and online. Sessions run in small groups three times a week and last 1 hour, 1 hour 30 minutes or 2 hours. Personalised one-to-one sessions are also available."],
  ["How much does it cost?", "Fees depend on the programme you choose. A BOA team member will share the details when you start the enrolment process. You can also reach us on WhatsApp or by email if you prefer to ask first."],
  ["How do I pay?", "Fees are paid online through the parent portal once you are enrolled. A receipt is available to download after each payment."],
  ["How will I know how my child is doing?", "You will have access to the parent dashboard showing attendance, test scores and teacher comments. BOA also sends regular progress reports, and tutors contact parents directly when something needs attention."],
  ["How do I speak to a teacher?", "Through the Contact page, on WhatsApp, or by requesting a meeting through the portal with Ms Zika or another tutor."],
  ["How do I start?", "Fill in the enrolment form and a BOA team member will follow up with you directly, usually within one business day."],
  ["Do you help with entrance exams?", "Yes. Entrance Exam Preparation is one of BOA's four focus areas. Tutors work through proven strategies and past questions."],
  ["Can my child learn a local language with you?", "Yes. Cultural Identity is a dedicated focus area. Yoruba, Hausa and Igbo are currently offered."],
];

export const HOME_FAQS = ALL_FAQS.slice(0, 3);

export default function FAQs({ standalone = false }: { standalone?: boolean }) {
  const [open, setOpen] = useState<number>(0);
  const faqs = standalone ? ALL_FAQS : HOME_FAQS;

  return (
    <section className="bg-bg py-20 lg:py-28">
      <div className="shell">

        {/* Header — full width, left aligned */}
        <AnimateIn>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">FAQs</p>
              <h2 className="heading-xl mt-3">
                {standalone ? "Your questions, answered." : "Questions families ask us."}
              </h2>
            </div>
            {!standalone && (
              <a href="/faq" className="focus-ring text-sm font-bold text-link hover:underline">
                See all questions →
              </a>
            )}
          </div>
        </AnimateIn>

        {/* Accordion */}
        <ul className="mt-10 rounded-xl border border-border bg-white overflow-hidden">
          {faqs.map(([question, answer], index) => (
            <li key={question} className="border-b border-border last:border-b-0">
              <button
                type="button"
                onClick={() => setOpen(open === index ? -1 : index)}
                aria-expanded={open === index}
                className="focus-ring flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-bg"
              >
                <span className="heading-md pr-4">{question}</span>
                <span className="shrink-0 text-link" aria-hidden="true">
                  {open === index
                    ? <FiMinus size={18} strokeWidth={2.5} />
                    : <FiPlus size={18} strokeWidth={2.5} />}
                </span>
              </button>
              {open === index && (
                <div className="bg-bg px-6 pb-6">
                  <p className="body-base border-t border-border pt-4">{answer}</p>
                </div>
              )}
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}

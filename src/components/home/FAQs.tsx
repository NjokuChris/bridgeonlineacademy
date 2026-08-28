"use client";
import { useState } from "react";

export const FAQS = [
  ["What ages do you teach?", "BOA offers Primary and Secondary learning for children aged approximately 5 to 17."],
  ["Which curriculum do you follow?", "Our programmes follow the Nigerian curriculum."],
  ["Are classes live or recorded?", "Classes are live and teacher-led. If you miss a class, we can discuss recording availability during your enrollment conversation."],
  ["How large are classes?", "We keep classes small so every student gets attention from the teacher. Size varies by subject and stage, but we prioritize class quality over capacity."],
  ["How much does it cost?", "Fees depend on the programme and your child's needs. A BOA team member will share pricing details when you start the enrollment process."],
  ["How do I get started?", "Fill out the enrollment form and a BOA team member will contact you directly to discuss your child's age, current class, and the right programme for them."],
];

export const PAGE_FAQS = [
  ["What happens after I submit the enrollment form?", "A BOA team member will contact you within one business day via WhatsApp or email, depending on your preference. We'll talk through your child's background and find the best fit within our programmes. The entire process from enrollment form to starting classes typically takes one to two weeks."],
  ["What technology or equipment does my child need?", "A reliable internet connection and a device to join live lessons (laptop, tablet, or phone). A headset helps with focus, but is not required. Some classes may use an online platform or document tool, which are free and require no special setup."],
  ["What if we need to pause or stop midway through a term?", "We understand circumstances change. Discuss this with the team during enrollment or anytime after your child starts. We can talk through options based on your situation and our programme schedule."],
  ["Can siblings enroll together? Does that affect cost?", "Yes, siblings can enrol in the same or different programmes depending on their ages and learning needs. Pricing is per student, but we can discuss any family packages or considerations during the enrollment conversation."],
  ["How is my child's progress reported to me?", "You'll receive a term report showing what your child has learned, areas of strength, and where they need more support. Teachers can also reach out anytime if they notice something that needs attention during the term, not just at the end."],
];

export default function FAQs({ standalone = false }: { standalone?: boolean }) {
  const [open, setOpen] = useState(0);
  const faqsToShow = standalone ? [...FAQS, ...PAGE_FAQS] : FAQS;

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="shell grid gap-10 lg:grid-cols-[20rem_1fr] lg:gap-16">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-link">FAQs</p>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-ink">
            {standalone ? "Your questions, answered." : "Questions families ask us."}
          </h2>
          <p className="mt-5 leading-relaxed text-muted">If you need more detail, we're happy to help.</p>
        </div>
        <ul>
          {faqsToShow.map(([question, answer], index) => (
            <li key={question} className="border-t border-border last:border-b">
              <button
                type="button"
                onClick={() => setOpen(open === index ? -1 : index)}
                aria-expanded={open === index}
                className="flex w-full items-center justify-between gap-6 py-5 text-left font-display text-xl font-semibold text-ink"
              >
                <span>{question}</span>
                <span className="font-sans text-link">{open === index ? "−" : "+"}</span>
              </button>
              {open === index && <p className="pb-5 pr-8 leading-relaxed text-muted">{answer}</p>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

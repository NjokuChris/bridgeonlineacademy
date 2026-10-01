"use client";

import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import AnimateIn from "@/components/ui/AnimateIn";

import { ALL_FAQS, HOME_FAQS, type FaqItem } from "@/data/faqs";
export { ALL_FAQS, HOME_FAQS, type FaqItem };

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
              <a href="/contact#faq" className="focus-ring text-sm font-bold text-link hover:underline">
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

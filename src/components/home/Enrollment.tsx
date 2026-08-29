"use client";

import { FormEvent, useState } from "react";
import { WHATSAPP_NUMBER } from "@/lib/navData";

const field = "mt-2 w-full rounded border border-border bg-white px-4 py-3 outline-none placeholder:text-muted/70 focus:border-link focus:ring-2 focus:ring-link/20";

type EnrollmentType = "student" | "teacher";

export default function Enrollment({ type = "student" }: { type?: EnrollmentType }) {
  const [submitted, setSubmitted] = useState(false);
  const whatsapp = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}`;

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // In production, this would send to backend/email service
    console.log("Form submitted:", new FormData(event.currentTarget));
    setSubmitted(true);
  }

  const isStudent = type === "student";

  return (
    <section id="enrol" className="bg-navy py-20 lg:py-28">
      <div className="shell max-w-4xl rounded-2xl bg-white p-7 sm:p-10 lg:p-14">
        {isStudent ? (
          <>
            <p className="text-sm font-bold uppercase tracking-widest text-link">Start your enrollment</p>
            <h2 className="mt-5 font-display text-4xl font-semibold text-ink">Begin your journey with BOA.</h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted">
              Share your details below and a BOA team member will guide you through the next steps.
            </p>
          </>
        ) : (
          <>
            <p className="text-sm font-bold uppercase tracking-widest text-link">Apply to teach at BOA</p>
            <h2 className="mt-5 font-display text-4xl font-semibold text-ink">Join our teaching community.</h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted">
              Tell us about your background and experience, and we'll explore the right fit with you.
            </p>
          </>
        )}

        {submitted ? (
          <div className="mt-8 rounded bg-pill p-4 text-pill-ink" role="status">
            <p className="font-semibold">
              {isStudent
                ? "Thank you. A BOA team member will be in touch to continue your enrollment."
                : "Thank you. We will review your application and be in touch shortly."}
            </p>
          </div>
        ) : (
          <form onSubmit={submit} className="mt-8 grid gap-5 sm:grid-cols-2">
            {/* Common fields */}
            <label className="text-sm font-semibold">
              Your name
              <input required name="name" placeholder="e.g. Ada Okafor" className={field} />
            </label>
            <label className="text-sm font-semibold">
              Email
              <input required type="email" name="email" placeholder="e.g. ada@email.com" className={field} />
            </label>
            <label className="text-sm font-semibold">
              WhatsApp number
              <input required type="tel" name="whatsapp" placeholder="e.g. +234 800 000 0000" className={field} />
            </label>

            {isStudent ? (
              <>
                <label className="text-sm font-semibold">
                  Name
                  <input required name="childName" placeholder="e.g. Chisom Okafor" className={field} />
                </label>
                <label className="text-sm font-semibold">
                  Age (optional)
                  <input type="number" min="5" name="childAge" placeholder="e.g. 10" className={field} />
                </label>
                <label className="text-sm font-semibold">
                  Current class or learning level (optional)
                  <input name="currentClass" placeholder="e.g. Primary 5, JS 2, or Beginner" className={field} />
                </label>
                <label className="text-sm font-semibold">
                  What would you like to learn?
                  <select name="learningTrack" className={field}>
                    <option value="">Select an option</option>
                    <option value="full-curriculum">Full Nigerian curriculum</option>
                    <option value="individual-subject">A single subject or skill</option>
                    <option value="not-sure">Not sure</option>
                  </select>
                </label>
                <label className="text-sm font-semibold">
                  Preferred term to start
                  <select name="preferredTerm" required className={field}>
                    <option value="">Select a term</option>
                    <option value="next-available">Next available</option>
                    <option value="q1">Q1 (January)</option>
                    <option value="q2">Q2 (April)</option>
                    <option value="q3">Q3 (July)</option>
                    <option value="q4">Q4 (October)</option>
                  </select>
                </label>
                <label className="text-sm font-semibold sm:col-span-2">
                  Anything else we should know? (optional)
                  <textarea name="message" rows={4} placeholder="Tell us about your learning goals or any questions." className={field} />
                </label>
              </>
            ) : (
              <>
                <label className="text-sm font-semibold">
                  Subject specialism
                  <input required name="subjectSpecialism" placeholder="e.g. Mathematics, English Language" className={field} />
                </label>
                <label className="text-sm font-semibold">
                  Qualification (e.g., degree, field)
                  <input required name="qualification" placeholder="e.g. B.Sc Mathematics" className={field} />
                </label>
                <label className="text-sm font-semibold">
                  Years of teaching experience
                  <input required type="number" min="0" name="experience" placeholder="e.g. 5" className={field} />
                </label>
                <label className="text-sm font-semibold">
                  Teaching setting
                  <select name="teachingSetting" required className={field}>
                    <option value="">Select one</option>
                    <option value="classroom">Classroom (in-person)</option>
                    <option value="online">Online only</option>
                    <option value="both">Both classroom and online</option>
                  </select>
                </label>
                <label className="text-sm font-semibold sm:col-span-2">
                  Tell us about your approach to teaching
                  <textarea required name="teachingApproach" rows={4} placeholder="What matters to you as an educator?" className={field} />
                </label>
              </>
            )}

            <div className="sm:col-span-2 flex flex-wrap items-center gap-5">
              <button className="rounded bg-yellow px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-ink hover:bg-yellow-hover">
                {isStudent ? "Start enrollment" : "Submit application"}
              </button>
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="font-bold text-link hover:underline">
                Prefer WhatsApp? Message us →
              </a>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

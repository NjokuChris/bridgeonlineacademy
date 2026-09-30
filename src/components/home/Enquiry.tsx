"use client";

import { FormEvent, useState } from "react";
import { whatsappLink } from "@/lib/contact";

const field = "mt-2 w-full rounded border border-border bg-white px-4 py-3 outline-none placeholder:text-muted/70 focus:border-link focus:ring-2 focus:ring-link/20";

export default function Enquiry() {
  const [submitted, setSubmitted] = useState(false);
  const whatsapp = whatsappLink();

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="enquire" className="bg-navy py-20 lg:py-28">
      <div className="shell max-w-4xl rounded-2xl bg-white p-7 sm:p-10 lg:p-14">
        <p className="text-sm font-bold uppercase tracking-widest text-link">Enquire about BOA</p>
        <h2 className="mt-5 font-display text-4xl font-semibold text-ink">Let&apos;s find the right learning experience for your child.</h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">Tell us a little about your family and we&apos;ll get back to you.</p>
        {submitted ? <p className="mt-8 rounded bg-pill p-4 text-pill-ink" role="status">Thank you. BOA will be in touch shortly.</p> : <form onSubmit={submit} className="mt-8 grid gap-5 sm:grid-cols-2">
          <label className="text-sm font-semibold">Parent name<input required name="parentName" placeholder="e.g. Ada Okafor" className={field} /></label>
          <label className="text-sm font-semibold">Email<input required type="email" name="email" placeholder="e.g. ada@email.com" className={field} /></label>
          <label className="text-sm font-semibold">WhatsApp number<input required type="tel" name="whatsapp" placeholder="e.g. +234 800 000 0000" className={field} /></label>
          <label className="text-sm font-semibold">Child&apos;s age<input required type="number" min="5" max="17" name="age" placeholder="e.g. 10" className={field} /></label>
          <label className="text-sm font-semibold">Current class<input required name="currentClass" placeholder="e.g. Primary 5" className={field} /></label>
          <label className="text-sm font-semibold sm:col-span-2">Message<textarea name="message" rows={4} placeholder="Tell us what you would like to know." className={field} /></label>
          <div className="sm:col-span-2 flex flex-wrap items-center gap-5"><button className="rounded bg-yellow px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-ink hover:bg-yellow-hover">Send enquiry</button><a href={whatsapp} target="_blank" rel="noopener noreferrer" className="font-bold text-link hover:underline">Prefer WhatsApp? Chat with BOA →</a></div>
        </form>}
      </div>
    </section>
  );
}

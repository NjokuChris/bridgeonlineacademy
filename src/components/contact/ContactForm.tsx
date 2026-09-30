"use client";

import { FormEvent, useState } from "react";
import { whatsappLink } from "@/lib/contact";

const field =
  "mt-2 w-full rounded border border-border bg-white px-4 py-3 text-sm outline-none placeholder:text-muted/60 focus:border-link focus:ring-2 focus:ring-link/20 transition-colors";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    // TODO: replace with server action once backend is wired up.
    // For now, simulate a short delay and show success.
    await new Promise((r) => setTimeout(r, 600));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div
        className="rounded-2xl border border-border bg-pill px-7 py-10 text-center"
        role="status"
      >
        <p className="font-display text-xl font-semibold text-pill-ink">
          Message received.
        </p>
        <p className="mt-3 leading-relaxed text-muted">
          A BOA team member will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-bg p-7 lg:p-10">
      <p className="font-display text-xl font-semibold text-ink">
        Send us a message
      </p>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Or reach us faster on{" "}
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-link hover:underline"
        >
          WhatsApp
        </a>
        .
      </p>

      <form onSubmit={handleSubmit} className="mt-7 grid gap-5 sm:grid-cols-2">
        {/* Honeypot (spam protection: hidden from real users, bots fill it) */}
        <input
          type="text"
          name="website"
          tabIndex={-1}
          aria-hidden="true"
          autoComplete="off"
          className="sr-only"
        />

        <label className="text-sm font-semibold">
          Your name
          <input
            required
            name="name"
            placeholder="e.g. Ada Okafor"
            className={field}
          />
        </label>

        <label className="text-sm font-semibold">
          Email address
          <input
            required
            type="email"
            name="email"
            placeholder="e.g. ada@email.com"
            className={field}
          />
        </label>

        <label className="text-sm font-semibold">
          Phone (optional)
          <input
            type="tel"
            name="phone"
            placeholder="e.g. +234 705 659 0881"
            className={field}
          />
        </label>

        <label className="text-sm font-semibold">
          I am a…
          <select name="audience" required className={field}>
            <option value="">Select one</option>
            <option value="parent">Parent or guardian</option>
            <option value="student">Student</option>
            <option value="tutor">Prospective tutor</option>
            <option value="other">Other</option>
          </select>
        </label>

        <label className="text-sm font-semibold sm:col-span-2">
          Message
          <textarea
            required
            name="message"
            rows={4}
            placeholder="What would you like to know?"
            className={field}
          />
        </label>

        <div className="sm:col-span-2">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="rounded bg-yellow px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:bg-yellow-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "submitting" ? "Sending…" : "Send message"}
          </button>
          {status === "error" && (
            <p className="mt-3 text-sm text-red-600" role="alert">
              Something went wrong. Please try again or reach us on WhatsApp.
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

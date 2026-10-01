"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

export default function Hero() {
  const textToType = "online learning";
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayText.length < textToType.length) {
        timeout = setTimeout(() => {
          setDisplayText(textToType.slice(0, displayText.length + 1));
        }, 110);
      } else {
        // Pause when fully typed
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(textToType.slice(0, displayText.length - 1));
        }, 60);
      } else {
        // Pause briefly when cleared before typing again
        timeout = setTimeout(() => {
          setIsDeleting(false);
        }, 500);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textToType]);

  return (
    <section className="overflow-hidden bg-bg">
      <div className="shell grid min-h-[80vh] items-center gap-12 py-16 lg:grid-cols-[1fr_auto] lg:gap-16 lg:py-20">

        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          {/* Eyebrow: link colour on bg-bg passes contrast */}
          <p className="eyebrow">{siteConfig.shortName} · Your Personal Study Companion</p>

          <h1
            className="heading-display mt-4 text-navy-deep"
            aria-label="Inspiring brighter futures through online learning"
          >
            Inspiring brighter{" "}
            <span className="whitespace-nowrap">futures through</span>
            <br className="hidden sm:block" />{" "}
            <span className="relative inline-block text-link">
              {/* Invisible placeholder permanently locks width & height so nothing on the page moves */}
              <span className="invisible select-none pointer-events-none" aria-hidden="true">
                {textToType}
              </span>
              {/* Animated typing overlay positioned within the reserved space */}
              <span className="absolute left-0 top-0 whitespace-nowrap">
                {displayText}
                <span
                  className="inline-block w-[3px] h-[0.85em] bg-link ml-1 align-baseline animate-pulse"
                  aria-hidden="true"
                />
              </span>
            </span>
          </h1>

          <p className="body-lg mt-6 max-w-lg">
            Small groups, experienced tutors, three sessions a week. Follow
            the full Nigerian curriculum or come for a single subject, at
            any age, with no one-size-fits-all approach.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/enrol"
              className="focus-ring inline-flex h-12 items-center rounded-lg bg-yellow px-7 text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:bg-yellow-hover"
            >
              Start Learning
            </Link>
            <Link
              href="/programmes"
              className="focus-ring inline-flex h-12 items-center rounded-lg border border-navy px-7 text-sm font-bold uppercase tracking-wide text-navy transition-colors hover:bg-navy hover:text-white"
            >
              Explore Programmes
            </Link>
          </div>

          {/* Trust strip */}
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-border pt-8">
            {[
              "Live classes, 3× a week",
              "Small groups",
              "Any subject, any age",
            ].map((point) => (
              <span key={point} className="flex items-center gap-2 text-sm font-semibold text-ink">
                <span className="h-1.5 w-1.5 rounded-full bg-yellow" aria-hidden="true" />
                {point}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm lg:max-w-md"
        >
          {/* Background circle */}
          <div className="absolute inset-0 -right-8 -top-8 rounded-3xl bg-yellow/30" />

          <Image
            src="/bridgestudent.png"
            alt="A BOA student holding an open book"
            width={600}
            height={800}
            priority
            className="relative z-10 h-auto w-full rounded-3xl object-cover"
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 420px"
          />

          {/* Floating badge */}
          <div className="absolute -bottom-4 left-4 z-20 rounded-xl bg-navy px-4 py-3">
            <p className="text-xs font-bold uppercase tracking-widest text-yellow">
              Learn. Grow. Thrive.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

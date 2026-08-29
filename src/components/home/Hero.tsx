"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  const animatedPhrase = "online learning.";
  const [typedPhrase, setTypedPhrase] = useState("");

  useEffect(() => {
    let characterIndex = 0;
    let deleting = false;
    let timeoutId: number;

    const typewriter = () => {
      if (!deleting) {
        characterIndex += 1;
        setTypedPhrase(animatedPhrase.slice(0, characterIndex));
        if (characterIndex === animatedPhrase.length) {
          deleting = true;
          timeoutId = window.setTimeout(typewriter, 1100);
        } else {
          timeoutId = window.setTimeout(typewriter, 95);
        }
        return;
      }

      characterIndex -= 1;
      setTypedPhrase(animatedPhrase.slice(0, characterIndex));
      if (characterIndex === 0) {
        deleting = false;
        timeoutId = window.setTimeout(typewriter, 300);
      } else {
        timeoutId = window.setTimeout(typewriter, 55);
      }
    };

    timeoutId = window.setTimeout(typewriter, 95);

    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <section className="overflow-hidden bg-bg px-4 py-5 lg:py-3">
      <div className="mx-auto grid max-w-[76rem] items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(25rem,0.9fr)] lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-2xl lg:py-6"
        >
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-yellow">
            Bridge Online Academy
          </p>
          <h1
            aria-label="Inspiring brighter futures through online learning."
            className="mt-5 font-display text-4xl font-semibold leading-tight text-navy-deep sm:text-5xl lg:text-7xl"
          >
            Inspiring brighter futures through{" "}
            <span className="inline-block min-w-[14ch] whitespace-nowrap">
              {typedPhrase}
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted lg:text-lg">
            Live, teacher-led learning built around what you actually need. Follow the full Nigerian curriculum, or pick up a single subject like coding or video editing, at any age, with structure, support and room to thrive online.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/enrol"
              className="rounded bg-yellow px-7 py-4 text-sm font-bold uppercase tracking-wide text-ink hover:bg-yellow-hover"
            >
              Start Learning
            </Link>
            <Link
              href="/programmes"
              className="rounded border border-navy px-7 py-4 text-sm font-bold uppercase tracking-wide text-navy hover:bg-navy hover:text-white"
            >
              Explore Programmes
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mx-auto flex min-h-[23rem] w-full max-w-[32rem] items-end justify-center sm:min-h-[29rem] lg:min-h-[31rem] lg:max-w-none"
        >
          <div className="absolute right-[-12%] top-[8%] z-0 aspect-square w-[82%] rounded-full bg-yellow/80 sm:right-[-8%]" />
          <div className="absolute right-[10%] top-[18%] z-0 aspect-square w-[66%] rounded-full border border-navy/20" />
          <Image
            src="/bridgestudent.png"
            alt="Student holding an open book"
            width={1024}
            height={1536}
            priority
            className="relative z-10 h-auto max-h-[28rem] w-[88%] object-contain sm:max-h-[34rem] lg:max-h-[34rem] lg:w-[94%]"
            sizes="(max-width: 640px) 88vw, (max-width: 1024px) 60vw, 42vw"
          />
          <div className="absolute bottom-[12%] left-[2%] z-20 rounded bg-navy px-4 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-lg sm:left-[5%]">
            Learn. Grow. Thrive.
          </div>
        </motion.div>
      </div>
    </section>
  );
}

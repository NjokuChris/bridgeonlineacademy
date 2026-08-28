"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const stats = [
  { value: 50, suffix: "+", label: "Expert teachers" },
  { value: 19, suffix: "", label: "Subjects offered" },
  { value: 9, suffix: "k+", label: "Students learning" },
  { value: 100, suffix: "%", label: "Live online lessons" },
];

function CountUp({
  target,
  suffix,
  active,
}: {
  target: number;
  suffix: string;
  active: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    const duration = 1400;
    const startTime = performance.now();
    let animationFrame = 0;

    const updateCount = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(animationFrame);
  }, [active, target]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

export default function Credentials() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section ref={sectionRef} className="bg-white px-4 py-5 md:px-10 md:py-8">
      <div className="grid min-h-48 overflow-hidden rounded-2xl bg-navy text-white sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center justify-center px-6 py-8 text-center ${index > 0 ? "border-white/20 sm:border-l" : ""}`}
          >
            <span className="font-display text-5xl font-semibold text-yellow lg:text-6xl">
              <CountUp
                target={stat.value}
                suffix={stat.suffix}
                active={isInView}
              />
            </span>
            <span className="mt-3 text-sm font-bold uppercase tracking-[0.14em] text-white/90">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

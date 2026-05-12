"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SectionStackProps {
  children: React.ReactNode[];
}

/** Numeric scrub = smoothed scroll-follow (seconds of easing lag). Avoid filter blur here — it stutters on many GPUs. */
const STACK_SCRUB = 2.4;

export default function SectionStack({ children }: SectionStackProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>(".stack-section");

      sections.forEach((section, i) => {
        if (i === sections.length - 1) return;

        const nextSection = sections[i + 1];

        gsap.fromTo(
          section,
          {
            scale: 1,
            y: 0,
            opacity: 1,
            force3D: true,
            transformOrigin: "50% 50%",
          },
          {
            scale: 0.94,
            y: -36,
            opacity: 0.52,
            force3D: true,
            ease: "none",
            scrollTrigger: {
              trigger: nextSection,
              start: "top bottom",
              end: "top top",
              scrub: STACK_SCRUB,
              invalidateOnRefresh: true,
            },
          }
        );
      });

      requestAnimationFrame(() => ScrollTrigger.refresh());
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {children.map((child, index) => (
        <div
          key={index}
          className="stack-section sticky top-0 flex min-h-screen w-full flex-col overflow-hidden shadow-[0_-24px_60px_rgba(0,0,0,0.06)] backface-hidden"
          style={{
            zIndex: index + 1,
            transformOrigin: "50% 50%",
          }}
        >
          <div className="relative z-0 flex-1">{child}</div>
        </div>
      ))}
    </div>
  );
}

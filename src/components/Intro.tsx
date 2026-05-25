"use client";

import Reveal from "./Reveal";
import { useLanguage } from "@/lib/LanguageProvider";

export default function Intro() {
  const { strings } = useLanguage();
  return (
    <section className="py-[140px] bg-snow border-t border-(rule) relative" id="parcours">
      <div className="absolute top-8 left-8 md:top-[32px] md:left-[32px] flex items-center gap-[10px]">
        <span className="w-1.5 h-1.5 rounded-full bg-silver"></span>
        <span className="font-mono text-[11px] tracking-[0.18em]">02</span>
          <span className="font-mono text-[11px] tracking-[0.18em] opacity-55">— {strings.intro.sectionLabel}</span>
        <div className="grid grid-cols-1 md:grid-cols-[0.42fr_0.58fr] gap-20 items-start">
          <Reveal>
            <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-silver font-medium mb-[18px]">
              {strings.intro.sectionLabel}
            </div>
            <h2 className="font-display font-bold text-[clamp(28px,3vw,44px)] leading-none tracking-[-0.02em] uppercase text-balance">
              {strings.intro.heading.line1}<br />
              <em className="not-italic text-silver font-medium">{strings.intro.heading.emphasis}</em> {strings.intro.heading.line2}
            </h2>
            <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5">
              {strings.intro.points.map((item) => (
                <div key={item.num} className="flex gap-3 items-start py-3.5 border-t border-(rule)">
                  <b className="font-mono text-[10px] tracking-[0.18em] text-silver min-w-[26px]">{item.num}</b>
                  <span className="font-display font-medium text-sm leading-[1.35] whitespace-pre-line">{item.text}</span>
                </div>
              ))}
            </div>
          </Reveal>
          
          <Reveal delay={200}>
            <div className="space-y-[22px] font-sans font-light text-[clamp(17px,1.3vw,20px)] leading-[1.7] text-[#3a2326] text-pretty">
              {strings.intro.paragraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

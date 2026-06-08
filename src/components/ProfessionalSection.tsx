"use client";

import Reveal from "./Reveal";
import HeroVideo from "./HeroVideo";
import { ASSET_IMAGES, REEL_STREAM } from "@/constants/reels";
import { useCinematicZoom } from "@/hooks/useCinematicZoom";
import { useRef } from "react";
import { useLanguage } from "@/lib/LanguageProvider";

export default function ProfessionalSection() {
  const { strings } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const mediaContainerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useCinematicZoom(sectionRef, mediaContainerRef, contentRef, {
    zoomScale: 1.2,
    parallaxAmount: 50,
  });

  return (
    <section ref={sectionRef} className="py-[140px] bg-cherry text-snow relative overflow-hidden sect-dark" id="professionnel">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_80%_0%,rgba(106,136,164,0.18),transparent_60%)] pointer-events-none"></div>

      <div className="absolute top-8 left-8 md:top-[32px] md:left-[32px] flex items-center gap-[10px]">
        <span className="w-1.5 h-1.5 rounded-full bg-beige"></span>
        <span className="font-mono text-[11px] tracking-[0.18em] text-beige">05</span>
        <span className="font-mono text-[11px] tracking-[0.18em] opacity-55">— {strings.professionalSection.sectionLabel}</span>
      </div>

      <div className="max-w-[1380px] mx-auto px-8 md:px-[32px]">
        <div className="grid grid-cols-1 lg:grid-cols-[0.45fr_0.55fr] gap-[60px] items-center">
          <Reveal className="relative rounded-[22px] overflow-hidden aspect-4/3 bg-black shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] group">
            <div ref={mediaContainerRef} className="absolute inset-0">
              <HeroVideo
                muted
                hlsUrl={REEL_STREAM.promotional3}
                poster={ASSET_IMAGES.photo9}
                className="absolute inset-0 z-0 h-full w-full object-cover object-[50%_25%]"
              />
              <div className="absolute inset-0 z-[1] bg-[repeating-linear-gradient(180deg,rgba(255,255,255,0.04)_0_1px,transparent_1px_3px)] mix-blend-screen pointer-events-none"></div>
              <div className="absolute top-[18px] left-[18px] z-10 flex gap-2 items-center font-mono text-[10px] tracking-[0.22em] text-white bg-[rgba(0,0,0,0.32)] px-3 py-2 rounded-full backdrop-blur-md">
                <b className="font-medium opacity-70">{strings.professionalSection.videoLabel}</b>
              </div>
              <div className="absolute top-[18px] right-[18px] z-10 font-mono text-[10px] tracking-[0.18em] text-white opacity-85">
                {strings.professionalSection.videoDuration}
              </div>
              <div className="absolute bottom-[18px] left-[18px] right-[18px] z-10 flex justify-between font-mono text-[10px] tracking-[0.2em] text-[rgba(255,255,255,0.75)]">
                <span>{strings.professionalSection.videoFooterLeft}</span>
                <span>{strings.professionalSection.videoFooterRight}</span>
              </div>
            </div>
          </Reveal>

          <div ref={contentRef} className="relative">
            <Reveal className="mb-3.5">
              <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-beige font-medium">
                {strings.professionalSection.sectionLabel}
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display font-bold text-[clamp(38px,4.8vw,72px)] leading-[0.92] tracking-tight uppercase text-balance">
                {strings.professionalSection.title.split("\n").map((line, idx) => (
                  <span key={idx} className={idx > 0 ? "block" : undefined}>
                    {idx === 2 ? <em className="not-italic text-beige font-medium">{line}</em> : line}
                  </span>
                ))}
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 max-w-[520px] font-sans font-light text-[clamp(17px,1.3vw,20px)] leading-[1.7] text-[rgba(236,235,233,0.78)] text-pretty">
                {strings.professionalSection.description}
              </p>
            </Reveal>

            <Reveal delay={300} className="mt-9 grid grid-cols-1 sm:grid-cols-2 border-t border-(rule-light)">
              {strings.professionalSection.benefits.map((text, idx) => (
                <div key={idx} className={`py-[18px] border-b border-(rule-light) flex gap-3 items-start ${idx % 2 === 0 ? "sm:pr-6 sm:border-r" : "sm:pl-6"}`}>
                  <b className="font-mono text-[11px] tracking-[0.18em] text-beige min-w-[24px]">{String(idx + 1).padStart(2, '0')}</b>
                  <span className="font-display font-medium text-sm leading-[1.4]">{text}</span>
                </div>
              ))}
            </Reveal>

            <Reveal delay={400} className="mt-9">
              <a href="#" className="inline-flex items-center gap-3.5 px-7 py-[18px] rounded-full font-display font-bold text-xs tracking-[0.14em] uppercase bg-beige text-cherry shadow-[inset_0_0_0_1px_rgba(43,21,23,0.08),0_14px_30px_-16px_rgba(43,21,23,0.4)] transition-all hover:-translate-y-0.5 hover:brightness-105 group relative overflow-hidden">
                <span className="relative z-10">{strings.professionalSection.button}</span>
                <span className="relative z-10 w-[18px] h-2.5">
                  <span className="absolute left-0 right-0 top-1/2 h-[1.5px] bg-current -translate-y-1/2"></span>
                  <span className="absolute right-0 top-1/2 w-2 h-2 border-t-[1.5px] border-r-[1.5px] border-current -translate-y-1/2 rotate-45"></span>
                </span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

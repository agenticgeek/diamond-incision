"use client";

import Reveal from "./Reveal";
import HeroVideo from "./HeroVideo";
import { ASSET_IMAGES, REEL_STREAM } from "@/constants/reels";
import { useCinematicZoom } from "@/hooks/useCinematicZoom";
import { useRef } from "react";
import { useLanguage } from "@/lib/LanguageProvider";

export default function SurgeonSection() {
  const { strings } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const mediaContainerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useCinematicZoom(sectionRef, mediaContainerRef, contentRef, {
    zoomScale: 1.25,
    parallaxAmount: 60,
  });

  return (
    <section ref={sectionRef} className="py-[140px] bg-slate text-snow relative overflow-hidden sect-slate" id="chirurgien">
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_20%_100%,rgba(222,205,187,0.12),transparent_60%)] pointer-events-none"></div>
      
      <div className="absolute top-8 left-8 md:top-[32px] md:left-[32px] flex items-center gap-[10px]">
        <span className="w-1.5 h-1.5 rounded-full bg-beige"></span>
        <span className="font-mono text-[11px] tracking-[0.18em] text-beige">06</span>
        <span className="font-mono text-[11px] tracking-[0.18em] opacity-55">— {strings.surgeonSection.sectionLabel}</span>
      </div>
      
      <div className="max-w-[1380px] mx-auto px-8 md:px-[32px]">
        <div ref={contentRef} className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-end mb-[50px]">
          <Reveal>
            <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-beige font-medium mb-3.5">
              {strings.surgeonSection.sectionLabel}
            </div>
            <h2 className="font-display font-bold text-[clamp(40px,5.4vw,80px)] leading-[0.9] tracking-tight uppercase text-balance">
              {strings.surgeonSection.title.split("\n").map((line, idx) => (
                <span key={idx} className={idx > 0 ? "block" : undefined}>
                  {idx === 2 ? <em className="not-italic text-beige font-medium">{line}</em> : line}
                </span>
              ))}
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="font-sans font-light text-[clamp(17px,1.3vw,20px)] leading-[1.7] text-[rgba(236,235,233,0.78)] text-pretty max-w-[480px]">
              {strings.surgeonSection.description}
            </p>
          </Reveal>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-[50px] items-stretch mb-[50px]">
          <Reveal className="relative rounded-[22px] overflow-hidden min-h-[420px] bg-[radial-gradient(60%_60%_at_70%_30%,rgba(222,205,187,0.3),transparent_60%),linear-gradient(160deg,#2b3d36_0%,#1f2a24_50%,#0e1310_100%)] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] group">
            <div ref={mediaContainerRef} className="absolute inset-0">
              <HeroVideo
                muted
                hlsUrl={REEL_STREAM.promotional3}
                className="absolute inset-0 z-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 z-[1] bg-[repeating-linear-gradient(180deg,rgba(255,255,255,0.04)_0_1px,transparent_1px_3px)] mix-blend-screen pointer-events-none"></div>
              <div className="absolute top-[18px] left-[18px] z-10 flex gap-2 items-center font-mono text-[10px] tracking-[0.22em] text-white bg-[rgba(0,0,0,0.32)] px-3 py-2 rounded-full backdrop-blur-md">
                <b className="font-medium opacity-70">{strings.surgeonSection.videoLabel}</b>
              </div>
              <div className="absolute top-[18px] right-[18px] z-10 font-mono text-[10px] tracking-[0.18em] text-white opacity-85">
                {strings.surgeonSection.videoDuration}
              </div>

              <div className="absolute bottom-[18px] left-[18px] right-[18px] z-10 flex justify-between font-mono text-[10px] tracking-[0.2em] text-[rgba(255,255,255,0.75)]">
                <span>{strings.surgeonSection.videoFooterLeft}</span>
                <span>{strings.surgeonSection.videoFooterRight}</span>
              </div>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {strings.surgeonSection.cards.map((card, idx) => (
              <Reveal key={idx} delay={idx * 100} className="p-6 rounded-[18px] bg-[rgba(236,235,233,0.05)] border border-(rule-light) relative overflow-hidden transition-all hover:-translate-y-1 hover:bg-[rgba(236,235,233,0.08)]">
                <div className="font-mono text-[10px] tracking-[0.18em] text-beige opacity-70">{card.scn}</div>
                <div className="w-10 h-10 my-[18px] mb-3.5 relative grid place-items-center">
                  <span className="w-8 h-8 bg-gradient-to-br from-beige to-silver [clip-path:polygon(50%_0,100%_50%,50%_100%,0_50%)]"></span>
                </div>
                <h4 className="font-display font-bold text-[15px] leading-[1.2] tracking-[-0.01em] uppercase text-balance whitespace-pre-line">{card.title}</h4>
                <p className="font-sans font-light text-[13px] leading-[1.55] text-[rgba(236,235,233,0.7)] mt-2">{card.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
        
        <Reveal delay={400} className="flex gap-3 flex-wrap">
          <a href="#" className="inline-flex items-center gap-3.5 px-7 py-[18px] rounded-full font-display font-bold text-xs tracking-[0.14em] uppercase bg-beige text-cherry shadow-[inset_0_0_0_1px_rgba(43,21,23,0.08),0_14px_30px_-16px_rgba(43,21,23,0.4)] transition-all hover:-translate-y-0.5 hover:brightness-105">
            {strings.surgeonSection.buttonPrimary} <span className="relative w-[18px] h-2.5 ml-3.5">
              <span className="absolute left-0 right-0 top-1/2 h-[1.5px] bg-current -translate-y-1/2"></span>
              <span className="absolute right-0 top-1/2 w-2 h-2 border-t-[1.5px] border-r-[1.5px] border-current -translate-y-1/2 rotate-45"></span>
            </span>
          </a>
          <a href="/chirurgien" className="inline-flex items-center gap-3.5 px-7 py-[18px] rounded-full font-display font-bold text-xs tracking-[0.14em] uppercase border border-[rgba(236,235,233,0.7)] text-snow transition-all hover:bg-snow hover:text-cherry hover:-translate-y-0.5">
            {strings.surgeonSection.buttonTertiary}
          </a>
        </Reveal>
      </div>
    </section>
  );
}

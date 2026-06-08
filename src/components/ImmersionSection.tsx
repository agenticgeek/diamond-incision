"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import HeroVideo from "./HeroVideo";
import { useCinematicZoom } from "@/hooks/useCinematicZoom";
import { useRef } from "react";
import { ASSET_IMAGES, REEL_STREAM } from "@/constants/reels";
import { useLanguage } from "@/lib/LanguageProvider";

export default function ImmersionSection() {
  const { strings } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useCinematicZoom(sectionRef, gridRef, undefined, {
    zoomScale: 1.1,
    parallaxAmount: 30,
  });

  return (
    <section ref={sectionRef} className="py-[140px] pb-[100px] bg-navy text-snow relative overflow-hidden" id="immersion">
      <div className="absolute inset-0 bg-[radial-gradient(40%_50%_at_90%_10%,rgba(222,205,187,0.12),transparent_60%)] pointer-events-none"></div>
      
      <div className="absolute top-8 left-8 md:top-[32px] md:left-[32px] flex items-center gap-[10px]">
        <span className="w-1.5 h-1.5 rounded-full bg-beige"></span>
        <span className="font-mono text-[11px] tracking-[0.18em] text-beige">08</span>
        <span className="font-mono text-[11px] tracking-[0.18em] opacity-55 text-[rgba(236,235,233,0.55)]">— {strings.immersionSection.sectionLabel}</span>
      </div>
      
      <div className="mx-auto max-w-[1380px] min-w-0 px-8 md:px-[32px]">
        <Reveal>
          <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-beige font-medium">
            {strings.immersionSection.sectionLabel}
          </div>
          <h2 className="mt-[18px] font-display font-bold text-[clamp(46px,7vw,120px)] leading-[0.9] tracking-[-0.03em] uppercase text-balance max-w-[1280px] italic chrome-text-final">
            {strings.immersionSection.headingLine1}
            <br />
            {strings.immersionSection.headingLine2}
            <br />
            {strings.immersionSection.headingLine3}
          </h2>
          <p className="mt-6 font-display font-bold text-[clamp(22px,2.8vw,44px)] leading-[0.95] tracking-[-0.02em] uppercase text-balance max-w-[1280px] text-snow">
            {strings.immersionSection.subtitleLine1}
            <br />
            {strings.immersionSection.subtitleLine2}
            <br />
            {strings.immersionSection.subtitleLine3}
          </p>
        </Reveal>
        
        <Reveal delay={200} className="mt-20 w-full min-w-0">
          <div className="mx-auto w-full max-w-[min(100%,920px)] xl:max-w-[980px] 2xl:max-w-[1040px]">
            <div
              ref={gridRef}
              className="grid w-full min-w-0 grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-[5fr_3.5fr_3.5fr] lg:gap-4"
            >
            {/* Main video — 8/12 cols, 2 rows tall */}
            <div className="relative flex flex-col justify-between overflow-hidden rounded-[22px] bg-[#0d1626] p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] sm:p-6 lg:col-start-1 lg:row-span-2 lg:row-start-1 aspect-[9/16]">
              <HeroVideo
                muted
                hlsUrl={REEL_STREAM.promotional3}
                className="absolute inset-0 z-0 h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 z-1 bg-[radial-gradient(60%_60%_at_60%_30%,rgba(222,205,187,0.2),transparent_55%),linear-gradient(150deg,rgba(63,84,106,0.45)_0%,rgba(27,45,79,0.7)_55%,rgba(10,19,38,0.88)_100%)]" />
              <div className="pointer-events-none absolute inset-0 z-2 bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.06)_0_1px,transparent_1px_3px)] opacity-55 mix-blend-overlay" />
              <div className="relative z-10 font-mono text-[10px] tracking-[0.22em] uppercase text-[rgba(255,255,255,0.9)] sm:text-[11px]">
                {strings.immersionSection.mainVideoLabel}
              </div>
              <div className="relative z-10 font-mono text-[10px] tracking-[0.22em] uppercase text-[rgba(255,255,255,0.88)] sm:text-[11px]">
                {strings.immersionSection.mainVideoFooter}
              </div>
            </div>

            {/* Capsule A — top-left of right block */}
            <div className="relative flex min-h-[min(40vw,220px)] flex-col justify-between overflow-hidden rounded-[22px] p-5 sm:p-6 lg:col-start-2 lg:row-start-1 lg:min-h-0">
              <Image src={ASSET_IMAGES.photo21} alt="" fill className="object-cover" sizes="(max-width: 1023px) 100vw, 33vw" />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-cherry/90 via-cherry/30 to-black/25" />
              <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.05)_0_1px,transparent_1px_2px)] opacity-50 mix-blend-overlay" />
              <div className="relative z-10 font-mono text-[10px] tracking-[0.22em] uppercase text-beige sm:text-[11px]">{strings.immersionSection.capsules[0].label}</div>
              <div className="relative z-10 max-w-[95%] font-mono text-[10px] leading-snug tracking-[0.18em] uppercase text-[rgba(255,255,255,0.9)] sm:text-[11px]">{strings.immersionSection.capsules[0].text}</div>
            </div>

            {/* Capsule B — top-right of right block */}
            <div className="relative flex min-h-[min(40vw,220px)] flex-col justify-between overflow-hidden rounded-[22px] p-5 sm:p-6 lg:col-start-3 lg:row-start-1 lg:min-h-0">
              <Image src={ASSET_IMAGES.photo22} alt="" fill className="object-cover" sizes="(max-width: 1023px) 100vw, 33vw" />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#0d1626]/92 via-[#2c4768]/35 to-black/20" />
              <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.05)_0_1px,transparent_1px_2px)] opacity-50 mix-blend-overlay" />
              <div className="relative z-10 font-mono text-[10px] tracking-[0.22em] uppercase text-beige sm:text-[11px]">{strings.immersionSection.capsules[1].label}</div>
              <div className="relative z-10 max-w-[95%] font-mono text-[10px] leading-snug tracking-[0.18em] uppercase text-[rgba(255,255,255,0.9)] sm:text-[11px]">{strings.immersionSection.capsules[1].text}</div>
            </div>

            {/* Capsule C — bottom-left of right block */}
            <div className="relative flex min-h-[min(36vw,200px)] flex-col justify-end overflow-hidden rounded-[22px] p-5 sm:p-6 lg:col-start-2 lg:row-start-2 lg:min-h-0">
              <Image src={ASSET_IMAGES.photo41} alt="" fill className="object-cover" sizes="(max-width: 1023px) 100vw, 33vw" />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#1a0a0c]/88 via-transparent to-black/30" />
              <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.05)_0_1px,transparent_1px_2px)] opacity-50 mix-blend-overlay" />
              <div className="relative z-10 font-mono text-[10px] tracking-[0.22em] uppercase text-beige sm:text-[11px]">{strings.immersionSection.capsules[2].label}</div>
            </div>

            {/* Capsule D — bottom-right of right block */}
            <div className="relative flex min-h-[min(36vw,200px)] flex-col justify-end overflow-hidden rounded-[22px] p-5 sm:p-6 lg:col-start-3 lg:row-start-2 lg:min-h-0">
              <Image src={ASSET_IMAGES.photo43} alt="" fill className="object-cover" sizes="(max-width: 1023px) 100vw, 33vw" />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#0a0f0d]/90 via-transparent to-black/35" />
              <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.05)_0_1px,transparent_1px_2px)] opacity-50 mix-blend-overlay" />
              <div className="relative z-10 font-mono text-[10px] tracking-[0.22em] uppercase text-beige sm:text-[11px]">{strings.immersionSection.capsules[3].label}</div>
            </div>

            </div>
          </div>
        </Reveal>
        
        <div className="mt-20 border-y border-(rule-light) py-[30px] overflow-hidden">
          <div className="flex gap-[60px] w-max animate-ticker items-center" style={{ animationDuration: "36s" }}>
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-[60px] items-center">
                {strings.immersionSection.ticker.map((text) => (
                  <div key={text} className="font-display font-bold text-[clamp(28px,4vw,52px)] uppercase tracking-[-0.01em] flex items-center gap-[60px] after:content-['◆'] after:text-silver after:text-[18px]">
                    {text} <em className="not-italic text-beige font-medium">·</em>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        
        <Reveal delay={400} className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-[60px] items-end">
          <div className="flex flex-col gap-2.5">
            {strings.immersionSection.highlights.map((text) => (
              <span key={text} className="font-display font-bold text-[clamp(22px,2.6vw,40px)] leading-none uppercase tracking-[-0.02em]">
                <em className="not-italic text-beige font-medium">{text}</em>
              </span>
            ))}
          </div>
          <div className="font-sans font-light text-base leading-[1.65] text-[rgba(236,235,233,0.75)] max-w-[420px] md:justify-self-end">
            <strong className="text-snow font-display font-semibold tracking-[-0.01em] block mb-3.5 text-lg">{strings.immersionSection.closingTitle}</strong>
            {strings.immersionSection.closingText}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

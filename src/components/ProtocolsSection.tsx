"use client";

import Reveal from "./Reveal";
import HeroVideo from "./HeroVideo";
import { useCinematicZoom } from "@/hooks/useCinematicZoom";
import { useRef } from "react";
import { ASSET_IMAGES, REEL_STREAM } from "@/constants/reels";
import { useLanguage } from "@/lib/LanguageProvider";

export default function ProtocolsSection() {
  const { strings } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  useCinematicZoom(sectionRef, videoRef, undefined, {
    zoomScale: 1.05,
    parallaxAmount: 20,
  });

  return (
    <section ref={sectionRef} className="py-[140px] bg-linear-to-b from-snow to-beige-soft relative" id="protocoles">
      <div className="absolute top-8 left-8 md:top-[32px] md:left-[32px] flex items-center gap-[10px]">
        <span className="w-1.5 h-1.5 rounded-full bg-silver"></span>
        <span className="font-mono text-[11px] tracking-[0.18em]">07</span>
        <span className="font-mono text-[11px] tracking-[0.18em] opacity-55">— {strings.protocolsSection.sectionLabel}</span>
      </div>

      <div className="max-w-[1380px] mx-auto px-8 md:px-[32px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-x-16 lg:gap-y-12 items-start lg:items-center">
          <Reveal className="min-w-0 lg:pt-1">
            <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-silver font-medium mb-3.5">
              {strings.protocolsSection.sectionLabel}
            </div>
            <h2 className="font-display font-bold text-[clamp(32px,4.2vw,56px)] lg:text-[clamp(36px,4.6vw,68px)] leading-[0.92] tracking-tight uppercase">
              {strings.protocolsSection.headingLine1}<br />
              {strings.protocolsSection.headingLine2}<br />
              {strings.protocolsSection.headingLine3}<br />
              <em className="not-italic text-silver font-medium">{strings.protocolsSection.headingEmphasis}</em>
            </h2>
            <p className="mt-8 lg:mt-10 font-sans font-light text-[clamp(20px,1.75vw,28px)] leading-[1.55] text-[#3a2326] text-pretty lg:max-w-none max-w-[42rem]">
              {strings.protocolsSection.description}
            </p>
          </Reveal>

          <Reveal delay={200} className="w-full min-w-0 lg:max-w-[520px] lg:justify-self-end shrink-0">
            <div
              ref={videoRef}
              className="relative mx-auto aspect-9/16 w-full max-w-[min(100%,24rem)] overflow-hidden rounded-[18px] sm:max-w-[26rem] lg:mx-0 lg:ml-auto lg:max-w-[min(100%,min(34vw,32rem))] xl:max-w-[34rem]"
            >
              <HeroVideo
                muted
                hlsUrl={REEL_STREAM.productShowcase}
                poster={ASSET_IMAGES.photo43}
                className="absolute inset-0 z-0 h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>

        <Reveal delay={400} className="mt-16 lg:mt-20 flex flex-wrap items-center justify-between gap-5 border-t border-(rule) pt-[34px]">
          <p className="max-w-[520px] font-sans text-sm font-light text-[#3a2326]">
            {strings.protocolsSection.footer}
          </p>
          <a
            href="#"
            className="btn-premium-blue inline-flex items-center gap-3.5 rounded-full px-7 py-[18px] font-display text-xs font-bold uppercase tracking-[0.14em] transition-all hover:-translate-y-0.5 hover:brightness-105"
          >
            <span className="relative z-10">{strings.protocolsSection.button}</span>
            <span className="relative z-10 ml-3.5 w-[18px] h-2.5">
              <span className="absolute left-0 right-0 top-1/2 h-[1.5px] -translate-y-1/2 bg-white"></span>
              <span className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 border-t-[1.5px] border-r-[1.5px] border-white"></span>
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

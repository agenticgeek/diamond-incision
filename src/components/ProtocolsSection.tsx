"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import { useCinematicZoom } from "@/hooks/useCinematicZoom";
import { useRef, useState, useEffect, useCallback } from "react";
import { ASSET_IMAGES } from "@/constants/reels";
import { useLanguage } from "@/lib/LanguageProvider";

const SLIDES = [
  ASSET_IMAGES.product1,
  ASSET_IMAGES.product2,
  ASSET_IMAGES.product3,
  ASSET_IMAGES.product4,
  ASSET_IMAGES.product5,
];

function ProductCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const total = SLIDES.length;

  const next = useCallback(() => setCurrent(i => (i + 1) % total), [total]);
  const prev = useCallback(() => setCurrent(i => (i - 1 + total) % total), [total]);

  const goTo = (idx: number) => {
    setCurrent(idx);
    setPaused(true);
    setTimeout(() => setPaused(false), 5000);
  };

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 3500);
    return () => clearInterval(id);
  }, [paused, next]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      diff > 0 ? next() : prev();
      setPaused(true);
      setTimeout(() => setPaused(false), 5000);
    }
    touchStartX.current = null;
  };

  const handlePrevClick = () => {
    prev();
    setPaused(true);
    setTimeout(() => setPaused(false), 5000);
  };

  const handleNextClick = () => {
    next();
    setPaused(true);
    setTimeout(() => setPaused(false), 5000);
  };

  return (
    <div
      className="relative overflow-hidden rounded-[18px] w-full aspect-[4/5]"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slide track */}
      <div
        className="flex h-full transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{ width: `${total * 100}%`, transform: `translateX(-${(current * 100) / total}%)` }}
      >
        {SLIDES.map((src, idx) => (
          <div key={idx} className="relative h-full flex-shrink-0 bg-[#3a4a6b]" style={{ width: `${100 / total}%` }}>
            <Image
              src={src}
              alt={`Produit Diamond Sculpt ${idx + 1}`}
              fill
              className="object-contain"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 34vw"
              priority={idx === 0}
            />
          </div>
        ))}
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={handlePrevClick}
        aria-label="Précédent"
        className="absolute left-2.5 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white text-lg leading-none hover:bg-black/50 transition-colors"
      >
        ‹
      </button>
      <button
        onClick={handleNextClick}
        aria-label="Suivant"
        className="absolute right-2.5 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white text-lg leading-none hover:bg-black/50 transition-colors"
      >
        ›
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-3.5 left-0 right-0 flex justify-center gap-1.5 z-10">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            aria-label={`Slide ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === current ? "w-5 bg-white" : "w-1.5 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

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
              className="mx-auto w-full max-w-[min(100%,24rem)] sm:max-w-[26rem] lg:mx-0 lg:ml-auto lg:max-w-[min(100%,min(34vw,32rem))] xl:max-w-[34rem]"
            >
              <ProductCarousel />
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

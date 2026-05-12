"use client";

import Reveal from "./Reveal";
import HeroVideo from "./HeroVideo";
import { useCinematicZoom } from "@/hooks/useCinematicZoom";
import { ASSET_IMAGES, REEL_STREAM } from "@/constants/reels";
import { useRef } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const mediaContainerRef = useRef<HTMLDivElement>(null);

  useCinematicZoom(sectionRef, mediaContainerRef, undefined, {
    zoomScale: 1.1,
    parallaxAmount: 30,
  });

  return (
    <section ref={sectionRef} className="min-h-screen pt-[120px] pb-[60px] relative overflow-hidden bg-snow-warm" id="top">
      <div className="absolute top-8 left-8 md:top-[32px] md:left-[32px] flex items-center gap-[10px] z-10">
        <span className="w-1.5 h-1.5 rounded-full bg-silver"></span>
        <span className="font-mono text-[11px] tracking-[0.18em]">01</span>
        <span className="font-mono text-[11px] tracking-[0.18em] opacity-55">— Diamond × METCARE / Manifeste</span>
      </div>
      
      <div className="max-w-[1380px] mx-auto px-8 md:px-[32px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-14 items-end min-h-[calc(100vh-180px)]">
          <div className="relative">
            <Reveal className="mb-6">
              <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-silver font-medium">
                Diamond Incision® × METCARE® &nbsp;·&nbsp; Édition 2026 &nbsp;·&nbsp; FR
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="font-display font-bold text-[clamp(38px,6vw,96px)] leading-[0.92] tracking-tight uppercase text-cherry text-balance">
                Une <em className="not-italic text-silver">innovation</em><br />
                internationale <span className="chrome-text italic animate-chrome-shift">qui&nbsp;fait</span><br />
                évoluer les<br />
                standards de<br />
                l'<em className="not-italic text-silver">esthétique.</em>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-9 max-w-[560px] font-sans font-light text-[clamp(17px,1.4vw,22px)] leading-[1.55] text-[#3a2326] text-pretty">
                Le Dr&nbsp;Martusciello, concepteur de la technique Diamond Incision, développe une approche innovante dédiée au traitement de la cellulite et des fibroses cicatricielles à travers un écosystème international réunissant innovation, expertise chirurgicale, accompagnement spécialisé et formation avancée.
              </p>
            </Reveal>
            <Reveal delay={300} className="mt-[42px] flex gap-3.5 flex-wrap items-center">
              <a href="#parcours" className="btn-premium-blue inline-flex items-center gap-3.5 px-7 py-[18px] rounded-full font-display font-bold text-xs tracking-[0.14em] uppercase transition-all hover:-translate-y-0.5 hover:brightness-105">
                <span className="relative z-10">Découvrir l'écosystème</span>
                <span className="relative z-10 w-[18px] h-2.5">
                  <span className="absolute left-0 right-0 top-1/2 h-[1.5px] bg-white -translate-y-1/2"></span>
                  <span className="absolute right-0 top-1/2 w-2 h-2 border-t-[1.5px] border-r-[1.5px] border-white -translate-y-1/2 rotate-45"></span>
                </span>
              </a>
              <a href="#immersion" className="inline-flex items-center gap-3.5 px-7 py-[18px] rounded-full font-display font-bold text-xs tracking-[0.14em] uppercase border border-cherry text-cherry transition-all hover:bg-cherry hover:text-snow hover:-translate-y-0.5">
                Voir le showreel
              </a>
            </Reveal>
            <Reveal delay={400} className="mt-16 flex gap-8 flex-wrap">
              {[
                { label: "Cellulite & Fibroses", sub: "· Traitement signature" },
                { label: "Formations avancées", sub: "· Masterclass internationale" },
                { label: "Réseau péri-opératoire", sub: "· Experts certifiés" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col gap-1.5 min-w-[120px]">
                  <b className="font-display font-semibold text-[13px] tracking-[0.04em] uppercase">{item.label}</b>
                  <span className="font-mono text-[10px] tracking-[0.16em] uppercase opacity-60">{item.sub}</span>
                </div>
              ))}
            </Reveal>
          </div>
          
          <Reveal
            delay={500}
            className="lg:order-0 order-first flex h-full flex-col justify-end gap-[18px] -translate-y-5 lg:-translate-y-10"
          >
            <div className="flex justify-between font-mono text-[10px] tracking-[0.2em] uppercase opacity-60">
              <span>Hero · Reel 01</span>
              <span>00:00 / 02:14</span>
            </div>
            <div className="relative mx-auto aspect-[9/16] w-full max-w-[min(100%,26rem)] sm:max-w-[28rem] lg:mx-0 lg:ml-auto lg:max-w-[min(100%,min(42vw,40rem))] xl:max-w-[min(100%,44rem)] rounded-[18px] overflow-hidden bg-[radial-gradient(60%_70%_at_30%_30%,rgba(222,205,187,0.35),transparent_60%),linear-gradient(170deg,#3a4f6a_0%,#1b2d4f_45%,#0d1626_100%)] shadow-[0_40px_80px_-30px_rgba(27,45,79,0.5),inset_0_0_0_1px_rgba(255,255,255,0.05)]">
              <div ref={mediaContainerRef} className="absolute inset-0">
                <HeroVideo
                  muted
                  hlsUrl={REEL_STREAM.heroPrimary}
                  poster={ASSET_IMAGES.photo43}
                  className="absolute inset-0 z-0 h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(180deg,rgba(255,255,255,0.04)_0_1px,transparent_1px_3px),radial-gradient(circle_at_65%_40%,rgba(222,205,187,0.35),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(106,136,164,0.45),transparent_45%)] mix-blend-screen" />
                <div className="absolute top-[18px] left-[18px] z-10 flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-white">
                  <span className="w-2 h-2 rounded-full bg-[#e85a5a] shadow-[0_0_14px_#e85a5a] animate-pulse-custom"></span>
                  REC · LIVE
                </div>
                <div className="absolute top-[18px] right-[18px] z-10 font-mono text-[10px] tracking-[0.2em] text-[rgba(255,255,255,0.85)] bg-[rgba(0,0,0,0.25)] px-2.5 py-1.5 rounded-full backdrop-blur-md">
                  Premium showreel
                </div>
                <div className="pointer-events-none absolute bottom-4 left-[18px] right-[18px] z-10 font-mono text-[10px] tracking-[0.2em] text-[rgba(255,255,255,0.7)]">
                  <span>SHOWREEL · AUTOPLAY · LOOP · MUTED</span>
                </div>
              </div>
            </div>
            <div className="flex justify-between font-mono text-[10px] tracking-[0.2em] uppercase opacity-60">
              <span>Avant / Après · Gestes · Backstage</span>
              <span>4K · CINEMA</span>
            </div>
          </Reveal>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 border-y border-(rule) bg-snow-warm overflow-hidden py-3.5" aria-hidden="true">
        <div className="flex gap-[60px] w-max animate-ticker items-center">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="flex items-center gap-[60px]">
              {["Cellulite", "Fibroses cicatricielles", "Parcours péri-opératoire", "Formations Masterclass", "Réseau international", "Innovation chirurgicale", "Accompagnement spécialisé"].map((text) => (
                <span key={text} className="font-mono text-[11px] tracking-[0.22em] uppercase text-cherry flex items-center gap-[60px] after:content-['◆'] after:text-silver after:text-[10px]">
                  {text}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

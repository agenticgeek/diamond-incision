"use client";

import Reveal from "./Reveal";
import HeroVideo from "./HeroVideo";
import { ASSET_IMAGES, REEL_STREAM } from "@/constants/reels";
import { useCinematicZoom } from "@/hooks/useCinematicZoom";
import { useRef } from "react";

export default function PatientSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const mediaContainerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useCinematicZoom(sectionRef, mediaContainerRef, contentRef, {
    zoomScale: 1.15,
    parallaxAmount: 40,
  });

  return (
    <section ref={sectionRef} className="py-[140px] bg-snow border-t border-(rule) relative" id="patient">
      <div className="absolute top-8 left-8 md:top-[32px] md:left-[32px] flex items-center gap-[10px]">
        <span className="w-1.5 h-1.5 rounded-full bg-silver"></span>
        <span className="font-mono text-[11px] tracking-[0.18em]">04</span>
        <span className="font-mono text-[11px] tracking-[0.18em] opacity-55">— Je suis patient</span>
      </div>
      
      <div className="max-w-[1380px] mx-auto px-8 md:px-[32px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-[60px] items-start">
          <Reveal className="lg:order-0 order-first">
            <div ref={mediaContainerRef} className="group relative aspect-5/6 overflow-hidden rounded-[20px] bg-[radial-gradient(60%_70%_at_30%_30%,rgba(222,205,187,0.35),transparent_60%),linear-gradient(170deg,#3a4f6a_0%,#1b2d4f_45%,#0d1626_100%)] shadow-[0_40px_80px_-30px_rgba(27,45,79,0.45),inset_0_0_0_1px_rgba(255,255,255,0.05)]">
              {/* Former hero reel (promotional) + same chrome as hero */}
              <HeroVideo
                muted
                hlsUrl={REEL_STREAM.promotional1}
                poster={ASSET_IMAGES.photo43}
                className="absolute inset-0 z-0 h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 z-1 bg-[repeating-linear-gradient(180deg,rgba(255,255,255,0.04)_0_1px,transparent_1px_3px),radial-gradient(circle_at_65%_40%,rgba(222,205,187,0.35),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(106,136,164,0.45),transparent_45%)] mix-blend-screen" />
              <div className="absolute top-[18px] left-[18px] z-10 flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-white">
                <span className="h-2 w-2 animate-pulse-custom rounded-full bg-[#e85a5a] shadow-[0_0_14px_#e85a5a]"></span>
                REC · LIVE
              </div>
              <div className="absolute top-[18px] right-[18px] z-10 rounded-full bg-[rgba(0,0,0,0.25)] px-2.5 py-1.5 font-mono text-[10px] tracking-[0.2em] text-[rgba(255,255,255,0.85)] backdrop-blur-md">
                Premium showreel
              </div>
              <div className="pointer-events-none absolute bottom-4 left-[18px] right-[18px] z-10 font-mono text-[10px] tracking-[0.2em] text-[rgba(255,255,255,0.7)]">
                <span>SHOWREEL · AUTOPLAY · LOOP · MUTED</span>
              </div>
            </div>
          </Reveal>
          
          <div ref={contentRef}>
            <Reveal className="mb-3.5">
              <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-silver font-medium">
                Section 04 · Parcours patient
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display font-bold text-[clamp(40px,5.2vw,84px)] leading-[0.92] tracking-tight uppercase">
                Je suis<br /><em className="not-italic text-silver font-medium">patient.</em>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 max-w-[560px] font-sans font-light text-[clamp(17px,1.4vw,22px)] leading-[1.55] text-[#3a2326] text-pretty">
                Découvrez une approche innovante du parcours esthétique autour du traitement de la cellulite, des fibroses cicatricielles et de l'accompagnement avant et après intervention.
              </p>
            </Reveal>
            <Reveal delay={300} className="mt-[34px]">
              <a href="#" className="btn-premium-blue inline-flex items-center gap-3.5 px-7 py-[18px] rounded-full font-display font-bold text-xs tracking-[0.14em] uppercase transition-all hover:-translate-y-0.5 hover:brightness-105">
                <span className="relative z-10">Accéder au parcours patient</span>
                <span className="relative z-10 w-[18px] h-2.5">
                  <span className="absolute left-0 right-0 top-1/2 h-[1.5px] bg-white -translate-y-1/2"></span>
                  <span className="absolute right-0 top-1/2 w-2 h-2 border-t-[1.5px] border-r-[1.5px] border-white -translate-y-1/2 rotate-45"></span>
                </span>
              </a>
            </Reveal>

            <Reveal delay={400} className="mt-12 flex flex-col border-t border-(rule)">
              {[
                "Télécharger mon guide Diamond",
                "Prendre rendez-vous pour bénéficier du protocole Diamond (consultations)",
                "Être mise en relation avec un expert péri-opératoire Diamond × METCARE",
                "Suivre mes recommandations Diamond",
                "Découvrir les solutions d'accompagnement"
              ].map((text, idx) => (
                <div key={idx} className="group flex items-center gap-[18px] py-6 border-b border-(rule) cursor-pointer transition-all hover:pl-2">
                  <span className="font-mono text-[11px] tracking-[0.18em] text-silver">{String(idx + 1).padStart(2, '0')}</span>
                  <span className="w-7 h-7 rounded-full bg-beige-soft relative shrink-0">
                    <span className="absolute inset-0 rounded-full bg-silver scale-0 transition-transform duration-350 group-hover:scale-[0.55]"></span>
                  </span>
                  <h4 className="font-display font-semibold text-[clamp(17px,1.6vw,22px)] leading-[1.2] tracking-[-0.01em] text-balance flex-1">{text}</h4>
                  <span className="w-8 h-3.5 relative opacity-55 transition-all group-hover:opacity-100 group-hover:translate-x-1.5">
                    <span className="absolute left-0 right-0 top-1/2 h-[1.5px] bg-current -translate-y-1/2"></span>
                    <span className="absolute right-0 top-1/2 w-[9px] h-[9px] border-t-[1.5px] border-r-[1.5px] border-current -translate-y-1/2 rotate-45"></span>
                  </span>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

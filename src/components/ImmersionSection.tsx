"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import HeroVideo from "./HeroVideo";
import { useCinematicZoom } from "@/hooks/useCinematicZoom";
import { useRef } from "react";
import { ASSET_IMAGES, REEL_STREAM } from "@/constants/reels";

export default function ImmersionSection() {
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
        <span className="font-mono text-[11px] tracking-[0.18em] opacity-55 text-[rgba(236,235,233,0.55)]">— Immersion internationale</span>
      </div>
      
      <div className="mx-auto max-w-[1380px] min-w-0 px-8 md:px-[32px]">
        <Reveal>
          <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-beige font-medium">
            Section 08 · International
          </div>
          <h2 className="font-display font-bold text-[clamp(46px,7vw,120px)] leading-[0.9] tracking-[-0.03em] uppercase text-balance max-w-[1280px] mt-[18px]">
            Une <em className="not-italic text-beige font-medium">innovation</em><br />
            qui s'étend<br />
            à <span className="chrome-text-final italic">l'international.</span>
          </h2>
        </Reveal>
        
        <Reveal delay={200} className="mt-20 w-full min-w-0">
          {/* Mosaic: moderate footprint — not full-bleed width / height */}
          <div className="mx-auto w-full max-w-[min(100%,920px)] xl:max-w-[980px] 2xl:max-w-[1040px]">
            <div
              ref={gridRef}
              className="grid w-full min-w-0 grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-12 lg:grid-rows-[minmax(200px,22vw)_minmax(200px,22vw)_minmax(160px,16vw)] lg:gap-4"
            >
            {/* Main video — 8/12 cols, 2 rows tall (~⅔ × full stack height) */}
            <div className="relative flex min-h-[min(52vw,280px)] flex-col justify-between overflow-hidden rounded-[22px] bg-[#0d1626] p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] sm:p-6 lg:col-span-8 lg:row-span-2 lg:row-start-1 lg:min-h-0">
              <HeroVideo
                muted
                hlsUrl={REEL_STREAM.promotional3}
                poster={ASSET_IMAGES.photo9}
                className="absolute inset-0 z-0 h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 z-1 bg-[radial-gradient(60%_60%_at_60%_30%,rgba(222,205,187,0.2),transparent_55%),linear-gradient(150deg,rgba(63,84,106,0.45)_0%,rgba(27,45,79,0.7)_55%,rgba(10,19,38,0.88)_100%)]" />
              <div className="pointer-events-none absolute inset-0 z-2 bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.06)_0_1px,transparent_1px_3px)] opacity-55 mix-blend-overlay" />

              <div className="relative z-10 font-mono text-[10px] tracking-[0.22em] uppercase text-[rgba(255,255,255,0.9)] sm:text-[11px]">
                Reel 05 · Showreel premium
              </div>

              <div className="relative z-10 font-mono text-[10px] tracking-[0.22em] uppercase text-[rgba(255,255,255,0.88)] sm:text-[11px]">
                Congrès · Backstage · Networking
              </div>
            </div>

            {/* Capsule A — top-right */}
            <div className="relative flex min-h-[min(40vw,220px)] flex-col justify-between overflow-hidden rounded-[22px] p-5 sm:p-6 lg:col-span-4 lg:row-start-1 lg:col-start-9 lg:min-h-0">
              <Image
                src={ASSET_IMAGES.photo21}
                alt="Avant / après — transformations"
                fill
                className="object-cover"
                sizes="(max-width: 1023px) 100vw, 33vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-cherry/90 via-cherry/30 to-black/25" />
              <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.05)_0_1px,transparent_1px_2px)] opacity-50 mix-blend-overlay" />
              <div className="relative z-10 font-mono text-[10px] tracking-[0.22em] uppercase text-beige sm:text-[11px]">Capsule A</div>
              <div className="relative z-10 max-w-[95%] font-mono text-[10px] leading-snug tracking-[0.18em] uppercase text-[rgba(255,255,255,0.9)] sm:text-[11px]">
                Avant / Après · Transformations
              </div>
            </div>

            {/* Capsule B — mid-right */}
            <div className="relative flex min-h-[min(40vw,220px)] flex-col justify-between overflow-hidden rounded-[22px] p-5 sm:p-6 lg:col-span-4 lg:row-start-2 lg:col-start-9 lg:min-h-0">
              <Image
                src={ASSET_IMAGES.photo22}
                alt="Conférences internationales"
                fill
                className="object-cover"
                sizes="(max-width: 1023px) 100vw, 33vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#0d1626]/92 via-[#2c4768]/35 to-black/20" />
              <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.05)_0_1px,transparent_1px_2px)] opacity-50 mix-blend-overlay" />
              <div className="relative z-10 font-mono text-[10px] tracking-[0.22em] uppercase text-beige sm:text-[11px]">Capsule B</div>
              <div className="relative z-10 max-w-[95%] font-mono text-[10px] leading-snug tracking-[0.18em] uppercase text-[rgba(255,255,255,0.9)] sm:text-[11px]">
                Conférences internationales
              </div>
            </div>

            {/* Capsule C */}
            <div className="relative flex min-h-[min(36vw,200px)] flex-col justify-end overflow-hidden rounded-[22px] p-5 sm:p-6 lg:col-span-4 lg:row-start-3 lg:col-start-1 lg:min-h-0">
              <Image
                src={ASSET_IMAGES.photo41}
                alt="Capsule C"
                fill
                className="object-cover"
                sizes="(max-width: 1023px) 100vw, 33vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#1a0a0c]/88 via-transparent to-black/30" />
              <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.05)_0_1px,transparent_1px_2px)] opacity-50 mix-blend-overlay" />
              <div className="relative z-10 font-mono text-[10px] tracking-[0.22em] uppercase text-beige sm:text-[11px]">Capsule C</div>
            </div>

            {/* Capsule D */}
            <div className="relative flex min-h-[min(36vw,200px)] flex-col justify-end overflow-hidden rounded-[22px] p-5 sm:p-6 lg:col-span-4 lg:row-start-3 lg:col-start-5 lg:min-h-0">
              <Image
                src={ASSET_IMAGES.photo43}
                alt="Capsule D"
                fill
                className="object-cover"
                sizes="(max-width: 1023px) 100vw, 33vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#0a0f0d]/90 via-transparent to-black/35" />
              <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.05)_0_1px,transparent_1px_2px)] opacity-50 mix-blend-overlay" />
              <div className="relative z-10 font-mono text-[10px] tracking-[0.22em] uppercase text-beige sm:text-[11px]">Capsule D</div>
            </div>

            {/* Capsule E */}
            <div className="relative flex min-h-[min(36vw,200px)] flex-col justify-end overflow-hidden rounded-[22px] bg-[#0d1626] p-5 sm:p-6 lg:col-span-4 lg:row-start-3 lg:col-start-9 lg:min-h-0">
              <Image
                src={ASSET_IMAGES.photo9}
                alt="Capsule E"
                fill
                className="object-cover opacity-55"
                sizes="(max-width: 1023px) 100vw, 33vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#0d1626]/95 via-[#1b2d4f]/40 to-black/25" />
              <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.05)_0_1px,transparent_1px_2px)] opacity-50 mix-blend-overlay" />
              <div className="relative z-10 font-mono text-[10px] tracking-[0.22em] uppercase text-beige sm:text-[11px]">Capsule E</div>
            </div>
          </div>
          </div>
        </Reveal>
        
        <div className="mt-20 border-y border-(rule-light) py-[30px] overflow-hidden">
          <div className="flex gap-[60px] w-max animate-ticker items-center" style={{ animationDuration: "36s" }}>
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-[60px] items-center">
                {[
                  "Congrès internationaux", "Formations", "Networking", "Interventions", "Backstage", "Conférences", "Professionnels spécialisés", "Accompagnement", "Évolution esthétique"
                ].map((text) => (
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
            {[
              "Formation.", "Innovation.", "Accompagnement.", "Perfectionnement.", "Évolution du parcours esthétique."
            ].map((text) => (
              <span key={text} className="font-display font-bold text-[clamp(22px,2.6vw,40px)] leading-none uppercase tracking-[-0.02em]">
                <em className="not-italic text-beige font-medium">{text}</em>
              </span>
            ))}
          </div>
          <div className="font-sans font-light text-base leading-[1.65] text-[rgba(236,235,233,0.75)] max-w-[420px] md:justify-self-end">
            <strong className="text-snow font-display font-semibold tracking-[-0.01em] block mb-3.5 text-lg">Diamond Incision × METCARE®</strong>
            Une nouvelle vision du parcours esthétique — réunissant innovation, expertise chirurgicale, accompagnement spécialisé et formation avancée à l'échelle internationale.
          </div>
        </Reveal>
      </div>
    </section>
  );
}

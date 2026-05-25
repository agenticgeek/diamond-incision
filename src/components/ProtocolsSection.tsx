"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import HeroVideo from "./HeroVideo";
import { useCinematicZoom } from "@/hooks/useCinematicZoom";
import { useRef } from "react";
import { ASSET_IMAGES, REEL_STREAM } from "@/constants/reels";
import { useLanguage } from "@/lib/LanguageProvider";

const PROTOCOL_MEDIA = [
  { icon: "pi-1", streamUrl: null, poster: null, coverImage: null },
  { icon: "pi-2", streamUrl: null, poster: null, coverImage: null },
  { icon: "pi-3", streamUrl: null, poster: null, coverImage: null },
  { icon: "pi-4", streamUrl: REEL_STREAM.heroPrimary, poster: ASSET_IMAGES.photo43, coverImage: null },
] as const;

export default function ProtocolsSection() {
  const { strings } = useLanguage();
  const protocols = strings.protocolsSection.items;
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useCinematicZoom(sectionRef, gridRef, undefined, {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start mb-16">
          <Reveal className="min-w-0">
            <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-silver font-medium mb-3.5">
              {strings.protocolsSection.sectionLabel}
            </div>
            <h2 className="font-display font-bold text-[clamp(32px,4.2vw,56px)] lg:text-[clamp(36px,4.6vw,68px)] leading-[0.92] tracking-tight uppercase">
              {strings.protocolsSection.headingLine1}<br />
              {strings.protocolsSection.headingLine2}<br />
              {strings.protocolsSection.headingLine3}<br />
              <em className="not-italic text-silver font-medium">{strings.protocolsSection.headingEmphasis}</em>
            </h2>
          </Reveal>
          <Reveal delay={200} className="min-w-0 lg:max-w-[520px] lg:justify-self-end">
            <p className="font-sans font-light text-[clamp(17px,1.3vw,20px)] leading-[1.7] text-[#3a2326] text-pretty">
              {strings.protocolsSection.description}
            </p>
          </Reveal>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {protocols.map((prod, idx) => {
            const media = PROTOCOL_MEDIA[idx];
            return (
              <Reveal key={idx} delay={idx * 100}>
                <article className="group relative flex min-h-[420px] flex-col overflow-hidden rounded-[18px] border border-(rule) bg-snow transition-all duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)] hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-20px_rgba(43,21,23,0.25)]">
                  <div className="relative aspect-square overflow-hidden">
                    {media.streamUrl ? (
                      <>
                        <HeroVideo
                          muted
                          hlsUrl={media.streamUrl}
                          poster={media.poster ?? undefined}
                          className="absolute inset-0 z-0 h-full w-full object-cover"
                        />
                        <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(180deg,transparent_40%,rgba(43,21,23,0.35)_100%)]" />
                      </>
                    ) : media.coverImage ? (
                      <>
                        <Image
                          src={media.coverImage}
                          alt=""
                          fill
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                        <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(180deg,transparent_50%,rgba(43,21,23,0.12)_100%)]" />
                      </>
                    ) : null}

                    <div className="absolute bottom-3.5 left-3.5 z-10 font-mono text-[10px] tracking-[0.2em] text-[rgba(43,21,23,0.45)]">
                      {prod.typeLabel}
                    </div>
                    <span className="absolute top-3.5 left-3.5 z-10 rounded-full bg-cherry px-2.5 py-1.5 font-mono text-[10px] tracking-[0.2em] text-snow">
                      {prod.badge}
                    </span>

                    <div className="absolute right-3.5 bottom-3.5 z-10 h-24 w-24 opacity-[0.18] transition-opacity group-hover:opacity-[0.28]">
                      {media.icon === "pi-1" && <div className="h-full w-full rounded-full border-4 border-cherry" />}
                      {media.icon === "pi-2" && <div className="h-full w-full border-4 border-cherry" />}
                      {media.icon === "pi-3" && <div className="h-full w-full rotate-45 border-4 border-cherry" />}
                      {media.icon === "pi-4" && <div className="h-full w-full rounded-2xl border-4 border-cherry" />}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col justify-between gap-3.5 border-t border-(rule) p-[22px] pb-6">
                    <div>
                      <div className="font-mono text-[10px] tracking-[0.2em] text-silver">{prod.num}</div>
                      <h4 className="mt-1.5 font-display text-lg font-bold uppercase leading-[1.1] tracking-[-0.01em]">
                        {prod.title}
                      </h4>
                      <p className="mt-2 font-sans text-[13px] font-light leading-[1.55] text-[#3a2326]">{prod.desc}</p>
                    </div>
                    <div className="flex items-center justify-between border-t border-dashed border-(rule) pt-3 font-mono text-[10px] uppercase tracking-[0.2em]">
                      <b className="text-silver">{strings.protocolsSection.cardCta}</b>
                      <span>→</span>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={400} className="mt-[50px] flex flex-wrap items-center justify-between gap-5 border-t border-(rule) pt-[34px]">
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

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CinematicZoomOptions {
  zoomScale?: number;
  parallaxAmount?: number;
  scrub?: number | boolean;
  start?: string;
  end?: string;
  blur?: number;
  opacity?: number;
}

/**
 * Scroll-scrubbed zoom + parallax on media; optional light motion on foreground.
 * Uses numeric scrub by default for smooth, luxury-style scroll lag.
 */
export function useCinematicZoom(
  containerRef: React.RefObject<HTMLElement | null>,
  mediaRef: React.RefObject<HTMLElement | null>,
  contentRef?: React.RefObject<HTMLElement | null>,
  options: CinematicZoomOptions = {}
) {
  const {
    zoomScale = 1.25,
    parallaxAmount = 60,
    scrub = 2,
    start = "top bottom",
    end = "bottom top",
    blur = 0,
    opacity = 1,
  } = options;

  useEffect(() => {
    if (!containerRef.current || !mediaRef.current) return;

    const ctx = gsap.context(() => {
      const media = mediaRef.current;
      if (!media) return;

      gsap.fromTo(
        media,
        {
          scale: 1,
          y: 0,
          filter: "blur(0px)",
          force3D: true,
        },
        {
          scale: zoomScale,
          y: parallaxAmount,
          filter: blur > 0 ? `blur(${blur}px)` : "blur(0px)",
          force3D: true,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start,
            end,
            scrub,
            invalidateOnRefresh: true,
          },
        }
      );

      if (contentRef?.current) {
        gsap.fromTo(
          contentRef.current,
          {
            y: 0,
            opacity: 1,
            force3D: true,
          },
          {
            y: -parallaxAmount * 0.35,
            opacity,
            force3D: true,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 75%",
              end: "bottom top",
              scrub,
              invalidateOnRefresh: true,
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [
    containerRef,
    mediaRef,
    contentRef,
    zoomScale,
    parallaxAmount,
    scrub,
    start,
    end,
    blur,
    opacity,
  ]);
}

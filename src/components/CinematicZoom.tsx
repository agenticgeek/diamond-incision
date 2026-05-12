"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CinematicZoomProps {
  children: React.ReactNode;
  backgroundImage?: string;
  videoSrc?: string;
  className?: string;
  overlay?: React.ReactNode;
  zoomScale?: number;
  parallaxAmount?: number;
  stickyHeight?: string;
}

export default function CinematicZoom({
  children,
  backgroundImage,
  videoSrc,
  className = "",
  overlay,
  zoomScale = 1.3,
  parallaxAmount = 100,
  stickyHeight = "150vh",
}: CinematicZoomProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!containerRef.current || !mediaRef.current) return;

      // Timeline for the cinematic effect
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 2,
          invalidateOnRefresh: true,
        },
      });

      tl.fromTo(
        mediaRef.current,
        {
          scale: 1,
          y: 0,
          force3D: true,
        },
        {
          scale: zoomScale,
          y: -parallaxAmount,
          force3D: true,
          ease: "none",
        }
      );

      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          {
            opacity: 1,
            y: 0,
            force3D: true,
          },
          {
            opacity: 0.92,
            y: -16,
            force3D: true,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "center top",
              scrub: 2,
              invalidateOnRefresh: true,
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert(); // Proper cleanup
  }, [zoomScale, parallaxAmount]);

  return (
    <div 
      ref={containerRef} 
      className={`relative w-full ${className}`}
      style={{ height: stickyHeight }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Background Media */}
        <div 
          ref={mediaRef}
          className="absolute inset-0 w-full h-full will-change-transform"
          style={{ transformOrigin: "center center" }}
        >
          {videoSrc ? (
            <video
              src={videoSrc}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          ) : backgroundImage ? (
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${backgroundImage})` }}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-b from-snow-warm to-beige-soft" />
          )}
          
          {/* Optional Overlay */}
          {overlay}
        </div>

        {/* Foreground Content */}
        <div 
          ref={contentRef}
          className="relative z-10 w-full h-full flex items-center justify-center pointer-events-none"
        >
          <div className="pointer-events-auto w-full h-full">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

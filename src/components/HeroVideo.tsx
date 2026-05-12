"use client";

import { useEffect, useRef } from "react";
import Hls from "hls.js";

export type HeroVideoProps = {
  className?: string;
  muted: boolean;
  /** Full HLS manifest URL (.m3u8). */
  hlsUrl: string;
  /** Optional poster while loading / before play. */
  poster?: string;
};

function tryPlay(video: HTMLVideoElement, muted: boolean) {
  video.defaultMuted = muted;
  video.muted = muted;
  const p = video.play();
  if (p !== undefined) void p.catch(() => {});
}

export default function HeroVideo({
  className = "",
  muted,
  hlsUrl,
  poster,
}: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const mutedRef = useRef(muted);
  mutedRef.current = muted;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    let cancelled = false;

    const startPlayback = () => {
      if (cancelled) return;
      tryPlay(video, mutedRef.current);
    };

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = hlsUrl;
      video.addEventListener("loadedmetadata", startPlayback);
      video.addEventListener("canplay", startPlayback);
      if (video.readyState >= 1) startPlayback();

      return () => {
        cancelled = true;
        video.removeEventListener("loadedmetadata", startPlayback);
        video.removeEventListener("canplay", startPlayback);
        video.removeAttribute("src");
        video.load();
      };
    }

    if (Hls.isSupported()) {
      const hls = new Hls({
        enableWorker: false,
        lowLatencyMode: false,
        startLevel: -1,
      });

      hls.loadSource(hlsUrl);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, startPlayback);

      hls.on(Hls.Events.ERROR, (_evt, data) => {
        if (!data.fatal) return;
        if (data.type === Hls.ErrorTypes.NETWORK_ERROR) {
          hls.startLoad();
        } else if (data.type === Hls.ErrorTypes.MEDIA_ERROR) {
          hls.recoverMediaError();
        }
      });

      return () => {
        cancelled = true;
        hls.destroy();
        video.removeAttribute("src");
        video.load();
      };
    }

    return undefined;
  }, [hlsUrl]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.defaultMuted = muted;
    video.muted = muted;
  }, [muted]);

  return (
    <video
      ref={videoRef}
      className={className}
      poster={poster}
      autoPlay
      loop
      playsInline
      muted={muted}
      preload="auto"
    />
  );
}

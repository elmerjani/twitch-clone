"use client";

import { useEffect, useRef } from "react";
import Hls from "hls.js";

interface HLSPlayerProps {
  src: string;
  autoPlay?: boolean;
  controls?: boolean;
  width?: string | number;
  height?: string | number;
}

export default function HLSPlayer({
  src,
  autoPlay = false,
  controls = true,
  width = "100%",
  height = "auto",
}: HLSPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      // Native HLS support (Safari)
      video.src = src;
    } else if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);

      return () => {
        hls.destroy();
      };
    } else {
      console.error("HLS is not supported in this browser");
    }
  }, [src]);

  return (
    <video
      ref={videoRef}
      autoPlay={autoPlay}
      controls={controls}
      width={width}
      height={height}
      style={{ borderRadius: "8px" }}
    />
  );
}

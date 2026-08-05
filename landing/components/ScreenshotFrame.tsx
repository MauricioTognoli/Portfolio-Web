"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Image from "next/image";

interface ScreenshotFrameProps {
  src: string;
  alt: string;
  naturalWidth: number;
  naturalHeight: number;
  mode?: "auto" | "scroll";
  speed?: number;
}

const ScreenshotFrame = ({
  src,
  alt,
  naturalWidth,
  naturalHeight,
  mode = "auto",
  speed = 45,
}: ScreenshotFrameProps) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [shotVars, setShotVars] = useState<CSSProperties | undefined>(undefined);

  useEffect(() => {
    if (mode !== "auto") return;
    const wrap = wrapRef.current;
    if (!wrap) return;

    const measure = () => {
      const containerWidth = wrap.clientWidth;
      const containerHeight = wrap.clientHeight;
      if (!containerWidth || !containerHeight) return;
      const renderedHeight = (containerWidth * naturalHeight) / naturalWidth;
      const dist = Math.max(0, renderedHeight - containerHeight);
      const dur = Math.max(6, dist / speed);
      setShotVars({
        ["--mt-shot-dist" as string]: `${dist}px`,
        ["--mt-shot-dur" as string]: `${dur}s`,
      });
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(wrap);
    return () => ro.disconnect();
  }, [mode, naturalWidth, naturalHeight, speed]);

  return (
    <div
      ref={wrapRef}
      className={`group relative h-full w-full overflow-hidden bg-mt-surface-2 ${
        mode === "scroll"
          ? "overflow-y-auto overflow-x-hidden [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-[3px] [&::-webkit-scrollbar-thumb]:bg-mt-border-bright [&::-webkit-scrollbar-track]:bg-transparent"
          : ""
      }`}
    >
      <Image
        src={src}
        alt={alt}
        width={naturalWidth}
        height={naturalHeight}
        className={`block h-auto w-full ${mode === "auto" ? "animate-mt-shot-scroll group-hover:[animation-play-state:paused]" : ""}`}
        style={shotVars}
        sizes="(max-width: 900px) 100vw, 600px"
      />
    </div>
  );
};

export default ScreenshotFrame;

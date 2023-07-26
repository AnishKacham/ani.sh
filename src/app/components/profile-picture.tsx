// Use only on home page if wanted. Sticks to navbar on scroll
"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import proPic from "@/app/images/profile-pic-cropped.jpg";

function clamp(number: number, a: number, b: number) {
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  return Math.min(Math.max(number, min), max);
}

export default function ProfilePicture() {
  const proPicRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const updateStyles = () => {
      let downDelay = proPicRef.current?.offsetTop ?? 0;
      let fromScale = 1;
      let toScale = 36 / 80;
      let fromX = 0;
      let toX = 2 / 16;
      let scrollY = downDelay - window.scrollY;
      let scale = (scrollY * (fromScale - toScale)) / downDelay + toScale;
      scale = clamp(scale, fromScale, toScale);
      let x = (scrollY * (fromX - toX)) / downDelay + toX;
      x = clamp(x, fromX, toX);

      console.log(x, scale);

      proPicRef.current?.style.setProperty(
        "--profile-image-transform",
        ` scale(${scale})`
      );
    };
    updateStyles();
    window.addEventListener("scroll", updateStyles);
    return () => {
      window.removeEventListener("scroll", updateStyles);
    };
  }, []);

  return (
    <div className="sticky top-0 mt-20" ref={proPicRef}>
      <Image
        priority
        src={proPic}
        alt="landing-page-image"
        className="rounded-full h-20 w-20 ring-2 p-1 ring-gray-400 dark:ring-gray-400"
        style={{ transform: "var(--profile-image-transform)" }}
      />
    </div>
  );
}

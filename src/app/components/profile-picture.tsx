"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

function clamp(number: number, a: number, b: number) {
    let min = Math.min(a, b)
    let max = Math.max(a, b)
    return Math.min(Math.max(number, min), max)
}

export default function ProfilePicture(){
    const proPicRef = useRef<HTMLImageElement>(null);
    useEffect(()=>{
        const adjustProfilePicture = ()=>{
            let distanceFromTop = proPicRef.current?.getBoundingClientRect().top ?? 147;
            // ranges from 17 - 147
            console.log(distanceFromTop);
            let fromX = 0;
            let toX = 2/16
            let fromScale = 1;
            let toScale = 0.5;
            let scale = (distanceFromTop - 17 / 140 ) * (0.5) // should range from fromScale to toScale linearly between 17 and 147
            let x = 
            proPicRef.current?.style.setProperty('transform',`scale(${clamp(scale,0,0.125)})`)
        }

        window.addEventListener('scroll',adjustProfilePicture);

        return ()=>{
            window.removeEventListener('scroll',adjustProfilePicture);
        }
    })
    return <div className="sticky top-2 p-2 h-fit border">
    <Image
      width={64}
      height={64}
      ref={proPicRef}
      src="/profile-pic-cropped.jpg"
      alt="landing-page-image"
      className="rounded-full border h-16 w-16"
    />
  </div>
}
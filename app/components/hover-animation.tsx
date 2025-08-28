"use client";

import { useRef } from "react";
import gsap from "gsap";
export default function HoverCard() {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleEnter = () => {
    // 👉 Animate scale up here with gsap.to()
    gsap.to(cardRef.current, {
      ease: "power1.inOut",
      scale: 1.2,
      duration: 0.5,
    });
  };

  const handleLeave = () => {
    // 👉 Animate scale back down here with gsap.to()
    gsap.to(cardRef.current, {
      ease: "power1.inOut",
      scale: 1,
      duration: 0.5,
    });
  };

  return (
    <main className="flex items-center justify-center min-h-screen flex-col gap-8">
      <div className="flex flex-col gap-4 items-center justify-center">
        <h1 className="font-mono font-bold text-2xl">Hover Animation (scale card)</h1>
        <p className="font-light text-md text-muted-foreground">
          <span className="font-bold">Task 4:</span> When hovering on the card, GSAP should make it scale up
          slightly, and reset on mouse leave.
        </p>
      </div>
      <div
        ref={cardRef}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className="w-48 h-48 bg-indigo-400 flex items-center justify-center text-white font-bold rounded-xl shadow-lg cursor-pointer"
      >
        Hover Me
      </div>
    </main>
  );
}

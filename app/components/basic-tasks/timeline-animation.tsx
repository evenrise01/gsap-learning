"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function TimelineAnimation() {
  useGSAP(() => {
    const tl = gsap.timeline();

    // ✨ Your GSAP steps here:
    tl.to("#t7-heading", { y:50, opacity: 1, duration: 1, ease: 'power1.in' })
    tl.to("#t7-subheading", { y:50, opacity: 1, duration: 1, ease: 'power1.in' })
    tl.to("#t7-cta-btn", { y:50, opacity: 1, duration: 1, ease: 'power1.in' })
  });

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 bg-neutral-200">
      <h1 id="t7-heading" className="text-4xl font-bold opacity-0">
        Welcome to GSAP Timeline
      </h1>
      <p id="t7-subheading" className="text-lg text-gray-600 opacity-0">
      <span className="font-bold">Task 7:</span> Smooth animations made easy using timeline
      </p>
      <button
        id="t7-cta-btn"
        className="px-6 py-3 bg-blue-500 text-white rounded-lg opacity-0"
      >
        Get Started
      </button>
    </main>
  );
}

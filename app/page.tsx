"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Home() {
  useGSAP(() => {
    gsap.to("#heading", {
      ease: "power1.inOut",
      opacity: "1",
      y: 0,
      duration: 1,
    });

    gsap.fromTo(
      "#slide-button",
      { x: -400, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, delay: 0.5 }
    );

    gsap.fromTo(
      "#list-item",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, stagger: 0.2, ease: "power2.out", duration: 0.6 }
    );
  });

  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 id="heading" className="text-5xl font-bold opacity-0">
        Hello GSAP + Next.js 🚀
      </h1>
      <button
        id="slide-button"
        className="border border-white p-2 bg-indigo-400 hover:bg-indigo-700"
      >
        Slide in
      </button>

      <ul className="space-y-4">
        <li id="list-item" className="text-xl opacity-0">
          Fade in animation
        </li>
        <li id="list-item" className="text-xl opacity-0">
          Slide in animation
        </li>
        <li id="list-item" className="text-xl opacity-0">
          List Stagger animation
        </li>
      </ul>
    </main>
  );
}

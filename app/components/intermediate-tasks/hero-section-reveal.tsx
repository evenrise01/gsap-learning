"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function HeroReveal() {

  useGSAP(() => {

    gsap.set(["#hero-heading", "#hero-sub", "#hero-btn"], {
      y: 40, // equivalent to translate-y-10
      opacity: 0
    });
    const tl = gsap.timeline();
    tl.to("#hero-img", {
      clipPath: "circle(150% at 50% 50%)",
      duration: 2,
      ease: "power2.out",
    });
    tl.to(
      "#hero-heading",
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
      },
      "-=0.8"
    );
    tl.to("#hero-sub", {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
    });
    tl.to("#hero-btn", {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "back.out(1.7)",
    });
  }, []);

  return (
    <main className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Hero Image */}
      <div
        id="hero-img"
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
          clipPath: "circle(0% at 50% 50%)", // Start hidden
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center text-white space-y-6">
        <h1
          id="hero-heading"
          className="text-5xl font-bold opacity-0"
        >
          Welcome to the Future
        </h1>
        <p
          id="hero-sub"
          className="text-lg text-gray-300 opacity-0"
        >
          Task 10: Hero section reveal with clip-path
        </p>
        <button
          id="hero-btn"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg opacity-0"
        >
          Explore
        </button>
      </div>
    </main>
  );
}

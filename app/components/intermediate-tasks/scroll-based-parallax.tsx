"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxScroll() {
  useGSAP(() => {
    // Clouds move slow
    gsap.to("#clouds", {
      yPercent: 40,
      ease: "none",
      scrollTrigger: {
        trigger: "#parallax",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Mountains move medium
    gsap.to("#mountains", {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: "#parallax",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Foreground moves faster
    gsap.to("#foreground", {
      yPercent: 10,
      ease: "none",
      scrollTrigger: {
        trigger: "#parallax",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Text floats slightly
    gsap.to("#title", {
      yPercent: -30,
      ease: "none",
      scrollTrigger: {
        trigger: "#parallax",
        start: "top center",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <main
      id="parallax"
      className="relative h-[200vh] bg-blue-200 overflow-hidden"
    >
      {/* Clouds */}
      <div
        id="clouds"
        className="absolute inset-0 bg-[url('https://i.ibb.co/zsY1t3k/clouds.png')] bg-cover bg-center"
      ></div>

      {/* Mountains */}
      <div
        id="mountains"
        className="absolute inset-0 bg-[url('https://i.ibb.co/Fw9jhnk/mountains.png')] bg-cover bg-bottom"
      ></div>

      {/* Foreground */}
      <div
        id="foreground"
        className="absolute inset-0 bg-[url('https://i.ibb.co/bWKX2R9/foreground.png')] bg-cover bg-bottom"
      ></div>

      {/* Title */}
      <h1
        id="title"
        className="relative z-10 pt-40 text-center text-6xl font-bold text-white drop-shadow-lg"
      >
        Task 11: Parallax Scroll
      </h1>
    </main>
  );
}

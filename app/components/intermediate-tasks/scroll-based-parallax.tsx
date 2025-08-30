"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxScroll() {
  useGSAP(() => {
    // Clouds - barely moving
    gsap.to("#clouds", {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: "#parallax",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Mountains
    gsap.to("#mountains", {
      yPercent: -15,
      ease: "none",
      scrollTrigger: {
        trigger: "#parallax",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Foreground
    gsap.to("#foreground", {
      yPercent: -10,
      ease: "none",
      scrollTrigger: {
        trigger: "#parallax",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Title
    gsap.to("#title", {
      yPercent: -8,
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
    <>
      {/* Content before parallax section */}
      <div className="h-screen bg-gray-900 flex items-center justify-center">
        <h2 className="text-4xl text-white font-bold">
          Scroll down to see parallax effect
        </h2>
      </div>

      <main id="parallax" className="relative h-[200vh] overflow-hidden">
        {/* Sky background */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-400 via-blue-300 to-blue-200"></div>

        {/* Clouds layer - furthest back */}
        <div
          id="clouds"
          className="absolute inset-0 z-10"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1569428034239-f9565e32e224?q=80&w=1179&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
            opacity: 0.7,
          }}
        ></div>

        {/* Mountains layer - middle */}
        <div
          id="mountains"
          className="absolute inset-0 z-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1472791108553-c9405341e398?q=80&w=1237&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center bottom",
            backgroundRepeat: "no-repeat",
            clipPath: "polygon(0 40%, 100% 30%, 100% 100%, 0% 100%)",
          }}
        ></div>

        {/* Foreground hills - closest */}
        <div
          id="foreground"
          className="absolute inset-0 z-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1170&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center bottom",
            backgroundRepeat: "no-repeat",
            clipPath: "polygon(0 70%, 100% 60%, 100% 100%, 0% 100%)",
          }}
        ></div>

        {/* Title */}
        <div className="absolute inset-0 z-40 flex items-center justify-center">
          <h1
            id="title"
            className="text-6xl md:text-8xl font-bold text-white drop-shadow-2xl text-center px-4"
            style={{
              textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
            }}
          >
            Parallax Scroll
          </h1>
        </div>
      </main>

      {/* Content after parallax section */}
      <div className="h-screen bg-gray-800 flex items-center justify-center">
        <h2 className="text-4xl text-white font-bold">
          Continue scrolling for more content
        </h2>
      </div>
    </>
  );
}

"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);
export default function ScrollFadeImage() {
  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "#fade-img",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: "#fade-img",
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });
    return () => ctx.revert(); // ✅ cleans up triggers
  });

  return (
    <main className="min-h-[200vh] flex flex-col items-center justify-center">
      <div className="flex flex-col gap-4 items-center justify-center">
        <h1 className="font-mono font-bold text-2xl">
          Scroll-triggered Fade (with ScrollTrigger)
        </h1>
        <p className="font-light text-md text-muted-foreground">
          <span className="font-bold">Task 6:</span> Image fades in only when
          scrolled into view.
        </p>

        <p className="text-md text-muted-foreground mb-20 text-lg italic font-bold">
          ⬇️ Scroll down to see the image fade in
        </p>
      </div>
      <Image
        id="fade-img"
        src="https://images.unsplash.com/photo-1493689102740-d55bd3d0e3c8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="opacity-0"
        alt="Scroll-triggered"
        width={1200}
        height={700}
        loading="lazy"
      />
    </main>
  );
}

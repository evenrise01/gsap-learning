"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function GridStagger() {
    useGSAP(() => {
        gsap.from(".square", {
          opacity: 0,
          scale: 0.3,
          y: 50,
          stagger: { each: 0.1, grid: "auto", from: "center" },
          ease: "back.out(1.7)",
        });
      }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col gap-4 items-center justify-center">
        <h1 className="font-mono font-bold text-2xl">Stagger Grid Animation</h1>
        <p className="font-light text-md text-muted-foreground">
          <span className="font-bold">Task 9:</span> Grid of squares animate in a wave (stagger).
        </p>
      </div>
      <div className="grid grid-cols-10 gap-3 my-8">
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} className="square w-12 h-12 bg-green-500" />
        ))}
      </div>
    </main>
  );
}

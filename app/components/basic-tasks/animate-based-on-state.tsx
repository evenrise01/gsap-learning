"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState, useEffect } from "react";

export default function ToggleBox() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // ✨ Run GSAP animation when `open` changes
    if (open) {
      gsap.to("#t8-box", {
        width: 200,
        height: 200,
        duration: 0.5,
        ease: "power2.inOut",
      });
    } else {
      gsap.to("#t8-box", {
        width: 100,
        height: 100,
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
  }, [open]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6">
      <div className="flex flex-col gap-4 items-center justify-center">
        <h1 className="font-mono font-bold text-2xl">Animate based on state</h1>
        <p className="font-light text-md text-muted-foreground">
          <span className="font-bold">Task 8:</span> Animate the box when the
          state changes
        </p>
      </div>
      <div
        id="t8-box"
        className="bg-purple-500 rounded-md"
        style={{ width: 100, height: 100 }}
      />
      <button
        onClick={() => setOpen(!open)}
        className="px-6 py-2 bg-black text-white rounded-lg hover:bg-black/70 cursor-pointer"
      >
        Toggle
      </button>
    </main>
  );
}

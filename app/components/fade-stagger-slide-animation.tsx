//Task 1
// Fade in text
// Make an <h1> start invisible (opacity-0) and fade in when the page loads.

//Task 2
// Slide in a button
// Animate a button so it slides from left to right when the component mounts.

//Task 3
// Stagger multiple items
// Render 3–5 <li> elements in a list and use GSAP’s stagger to animate them one after another.

"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function BeginnerTasks() {
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
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 id="heading" className="text-5xl font-bold opacity-0">
        Task 1. Fade in text 🚀
      </h1>
      <button
        id="slide-button"
        className="border border-white p-2 bg-indigo-400 hover:bg-indigo-700"
      >
       Task 2. Slide in button
      </button>

      <ul className="space-y-4">
        <li id="list-item" className="text-xl opacity-0">
          Task 3. Stagger List 1
        </li>
        <li id="list-item" className="text-xl opacity-0">
        Task 3. Stagger List 2
        </li>
        <li id="list-item" className="text-xl opacity-0">
        Task 3. Stagger List 3
        </li>
      </ul>
    </div>
  );
}

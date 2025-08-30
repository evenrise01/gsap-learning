"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"

export default function BouncingCircle() {
  useGSAP(() => {
    // 👉 Use gsap.to() with repeat:-1, yoyo:true, and a y-translation
    gsap.to('#circle', {
        ease: 'sine.inOut',
        yoyo:true,
        repeat: -1,
        y: -200,
        duration: 1
    })
  })

  return (
    <main className="flex items-center justify-between min-h-screen mx-auto px-8 gap-16">
        <div className="flex flex-col gap-4 items-center justify-center">
        <h1 className="font-mono font-bold text-2xl">Looping Animation (bouncing circle)</h1>
        <p className="font-light text-md text-muted-foreground">
          <span className="font-bold">Task 5:</span> Circle moves up and down infinitely with repeat: -1, yoyo: true.
        </p>
      </div>
      <div id = "circle" className="w-24 h-24 rounded-full bg-pink-500"></div>
    </main>
  )
}

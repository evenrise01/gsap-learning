import React from 'react'
import HeroReveal from '../../components/intermediate-tasks/hero-section-reveal'
import ParallaxScroll from '@/app/components/intermediate-tasks/scroll-based-parallax'


const page = () => {
  return (
    <main className='flex flex-col gap-[100px]'>
      <HeroReveal/>
      <ParallaxScroll/>
    </main>
  )
}

export default page

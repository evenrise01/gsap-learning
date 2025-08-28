import React from 'react'
import BeginnerTasks from './components/fade-stagger-slide-animation'
import HoverCard from './components/hover-animation'
import BouncingCircle from './components/looping-animation'
import ScrollFadeImage from './components/scroll-triggered-fade'

const page = () => {
  return (
    <main className='flex flex-col gap-[200px]'>
      <BeginnerTasks/>
      <HoverCard/>
      <BouncingCircle/>
      <ScrollFadeImage/>
    </main>
  )
}

export default page

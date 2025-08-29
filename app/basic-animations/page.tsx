import React from 'react'
import BeginnerTasks from '../components/fade-stagger-slide-animation'
import HoverCard from '../components/hover-animation'
import BouncingCircle from '../components/looping-animation'
import ScrollFadeImage from '../components/scroll-triggered-fade'
import TimelineAnimation from '../components/timeline-animation'
import ToggleBox from '../components/animate-based-on-state'
import GridStagger from '../components/stagger-grid-animation'

const page = () => {
  return (
    <main className='flex flex-col gap-[100px]'>
      <BeginnerTasks/>
      <HoverCard/>
      <BouncingCircle/>
      <ScrollFadeImage/>
      <TimelineAnimation/>
      <ToggleBox/>
      <GridStagger/>
    </main>
  )
}

export default page

import React from 'react'
import BeginnerTasks from '../../components/basic-tasks/fade-stagger-slide-animation'
import HoverCard from '../../components/basic-tasks/hover-animation'
import BouncingCircle from '../../components/basic-tasks/looping-animation'
import ScrollFadeImage from '../../components/basic-tasks/scroll-triggered-fade'
import TimelineAnimation from '../../components/basic-tasks/timeline-animation'
import ToggleBox from '../../components/basic-tasks/animate-based-on-state'
import GridStagger from '../../components/basic-tasks/stagger-grid-animation'

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

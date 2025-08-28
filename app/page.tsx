import React from 'react'
import BeginnerTasks from './components/fade-stagger-slide-animation'
import HoverCard from './components/hover-animation'

const page = () => {
  return (
    <main className='flex flex-col gap-[200px]'>
      <BeginnerTasks/>
      <HoverCard/>
    </main>
  )
}

export default page

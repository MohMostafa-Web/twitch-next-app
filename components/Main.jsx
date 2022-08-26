import React from 'react'
import CategoriesList from './CategoriesList'
import Hero from './Hero'
import IconsBar from './IconsBar'
import LiveChannels from './LiveChannels'

const Main = () => {
  return (
    <div className='absolute left-14 sm:left-16 lg:left-[15rem] w-[calc(100%-56px)] sm:w-[calc(100%-64px)] lg:w-[calc(100%-15rem)] pb-5'>
      <Hero />
      <LiveChannels />
      <IconsBar />
      <CategoriesList />
    </div>
  )
}

export default Main
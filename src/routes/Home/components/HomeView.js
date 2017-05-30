import React from 'react'
import './HomeView.scss'

// import sections
import SectionOne from './sections/SectionOne'
import SectionTwo from './sections/SectionTwo'
import SectionThree from './sections/SectionThree'
import SectionExtra from './sections/SectionExtra'

export const HomeView = () => (
  <div className='home'>
    <SectionOne/>
    <SectionExtra/>
    <SectionTwo/>
    <SectionThree/>
  </div>
)

export default HomeView

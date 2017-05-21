import React from 'react'
import './HomeView.scss'

// import sections
import SectionOne from './sections/SectionOne'
import SectionTwo from './sections/SectionTwo'
import SectionThree from './sections/SectionThree'

export const HomeView = () => (
  <div className='home'>
    <SectionOne/>
    <SectionTwo/>
    <SectionThree/>
  </div>
)

export default HomeView

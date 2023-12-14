import Cards from '@/components/LandingPage/AboutUs/Cards'
import Title from '@/components/LandingPage/AboutUs/Title'
import { paddingScreen } from '@/services/Utilities/style'

import React from 'react'

const AboutUs = () => {
  return (
    // <div className={`${paddingScreen}`}>
    <div className="padding">
        <Title />
        <Cards />
    </div>
  )
}

export default AboutUs
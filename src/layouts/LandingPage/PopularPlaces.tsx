import Cards from '@/components/LandingPage/PopularPlaces/Cards'
import Title from '@/components/LandingPage/PopularPlaces/Title'
import { paddingScreen } from '@/services/Utilities/style'
import React from 'react'

const PopularPlaces = () => {
  return (
    <div className="padding">
        <Title />
        <Cards />
    </div>
  )
}

export default PopularPlaces
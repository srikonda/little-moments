import Cards from '@/components/LandingPage/PopularPlaces/Cards'
import Title from '@/components/LandingPage/PopularPlaces/Title'
import React from 'react'

const PopularPlaces = () => {
  return (
    <div className='mx-5 sm:mx-12 md:mx-24 lg:mx-44 xl:mx-64 my-12'>
        <Title />
        <Cards />
    </div>
  )
}

export default PopularPlaces
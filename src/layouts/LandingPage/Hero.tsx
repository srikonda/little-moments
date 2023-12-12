import Cards from '@/components/LandingPage/Hero/Cards';
import SearchBar from '@/components/Inputs/SearchBar';
import Title from '@/components/LandingPage/Hero/Title';
import React from 'react';
import Marquee from '../CommonLayouts/Marquee';
import FeacturesButton from '@/components/Buttons/FeacturesButton';

const Hero = () => {
  return (
    <div  className='sm:mx-12 md:mx-24 lg:mx-44 xl:mx-64 mt-20'>
      <Title />
      <SearchBar />
      <div className='my-16'>
        <Cards />
        <FeacturesButton />
      </div>
    </div>
  )
}

export default Hero
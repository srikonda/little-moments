import Cards from '@/components/LandingPage/Hero/Cards';
import SearchBar from '@/components/Inputs/SearchBar';
import Title from '@/components/LandingPage/Hero/Title';
import React from 'react';
import FeacturesButton from '@/components/Buttons/FeacturesButton';
import { paddingScreen } from '@/services/Utilities/style';

const Hero = () => {
  return (
    // <div  className={`${paddingScreen} mt-20`}>
    <div  className="padding mt-20">
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
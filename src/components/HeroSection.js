import React from 'react';
import { useNav } from '../hooks/useNav';

const HeroSection = () => {
  const homeRef = useNav('Home');
  return (
    <section
      ref={homeRef}
      id='homeContainer'
      className='bg-hero w-full mt-15 h-[500px] sm:min-h-[600px] text-center'>
      <div className='w-full bg-hero  h-[500px] sm:min-h-[600px] z-10 flex flex-col justify-center'>
        <h1 className='text-white font-extralight text-7xl grid slide-left mb-4 '>
          Hello, I&apos;m
          <strong className='font-bold mt-4'>Tshwanelo Goodwill Bucibo</strong>
        </h1>
        <strong className='uppercase tracking-wide text-white bounce-top'>and this is My Resume</strong>
      </div>
    </section>
  );
};

export default HeroSection;

import React from 'react';
import { useNav } from '../hooks/useNav';

const About = ({ handleClick }) => {
  const aboutRef = useNav('About');

  return (
    <div
      ref={aboutRef}
      id='aboutContainer'
      className='w-full flex justify-center py-10 sm:py-20'>
      <div className='w-full max-w-6xl flex flex-col'>
        <h2 className='text-white font-extralight pt-5 text-3xl text-center mb-10'>
          About <strong className='font-extrabold'> Me</strong>
        </h2>
        <div className='grid grid-cols-1 m-4 sm:m-8 md:grid-cols-2 gap-6'>
          <div className='bg-portfolio w-full h-80 bg-cover bg-center'></div>
          <div>
            <div className='grid h-80'>
              <p className='font-extralight text-gray-400 text-base text-center	mt-1 mb-4 '>
                {' '}
                I am an innovative, taks-driven proffesional with 5+ years of experience in web development.
              </p>
              <p className='font-light text-gray-400 text-center mb-4'>
                Equipped with a record of success in consistently identifying and providing the technological needs of companies through
                ingenious innovation.
              </p>
              <p className='font-light text-gray-400 text-center m-4'>
                Proficient in developing databases, creating user interfacces, writing and testing codes, troubleshooting simple/complex
                issues, and implementing new features based on user feedback.
              </p>
              <div className='flex justify-center mt-8'>
                <button
                  className='py-4 px-6 tracking-wide text-xs uppercase text-white cursor-pointer border rounded-lg bg-orange-500 border-orange-500 '
                  onClick={handleClick}>
                  Hire Me
                </button>
                <a
                  className='py-4 px-6 tracking-wide text-xs uppercase text-white cursor-pointer border rounded-lg bg-[#6c757d] border-[#6c757d] ml-5 '
                  href='/file/goodwill_resume.pdf'
                  target='_blank'
                  rel='noopener noreferrer'>
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

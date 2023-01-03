import React from 'react';
import { FiCalendar } from 'react-icons/fi';
import { useNav } from '../hooks/useNav';
import { experience } from '../assets/experience';
import { education } from '../assets/education';

const Resume = () => {
  const resumeRef = useNav('Resume');
  return (
    <section
      className='max-w-6xl mx-auto py-10 sm:py-20'
      ref={resumeRef}
      id='resumeContainer'>
      <div className='w-full text-center text-white'>
        <h2 className='font-extralight pt-5 text-3xl'>
          My <strong className='font-extrabold'>Resume</strong>
        </h2>
      </div>
      <div className='grid grid-cols-1 m-4 sm:m-8 md:grid-cols-2 grid-flow-row gap-10 '>
        <div className='w-full'>
          <h2 className='text-white font-extralight text-2xl mb-12'>Education</h2>
          {education.map((education) => (
            <div
              className='p-8 bg-[#333] border-4 border-transparent rounded-md text-gray-400 font-light mb-6'
              key={education.id}>
              <span className='mb-2.5 text-xs font-bold text-white'>
                <span className='mr-1'>
                  <FiCalendar />
                </span>
                {education.date}
              </span>
              <h3 className='text-[#bac964] text-xl font-extralight'>{education.title}</h3>
              <p>{education.description}</p>
              <span>{education.institution}</span>
            </div>
          ))}
        </div>
        <div className='w-full'>
          <h2 className='text-white font-extralight text-2xl mb-12'>Experince</h2>
          {experience.map((experience) => (
            <div
              className='p-8 bg-[#333] border-4 border-transparent rounded-md text-gray-400 font-light mb-6'
              key={experience.id}>
              <span className='mb-2.5 text-xs font-bold text-white'>
                <span className='mr-1'>
                  <FiCalendar />
                </span>
                {experience.date}
              </span>
              <h3 className='text-[#bac964] text-xl font-extralight'>{experience.title}</h3>
              <p>{experience.description}</p>
              <span>{experience.institution}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;

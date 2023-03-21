import React, { useState } from 'react';
import styled from 'styled-components';
import { useNav } from '../hooks/useNav';
import { projects } from '../assets/projects';

const Portfolio = () => {
  const [activePortfolio, setActivePortfolio] = useState('All');

  const portfolioRef = useNav('Portfolio');

  const handlePortfolio = (portfolio) => {
    setActivePortfolio(portfolio);
  };

  return (
    <div
      className='max-w-6xl mx-auto py-10 sm:py-20'
      ref={portfolioRef}
      id='portfolioContainer'>
      <div className='text-white font-extralight pt-5 text-3xl text-center mb-8'>
        Featured <strong className='font-extrabold'>Portfolio</strong>
      </div>
      <div className='flex justify-center'>
        <ul className='list-none flex p-0 mb-8'>
          <li className='text-gray-300 py-4 px-5'>
            {activePortfolio != 'All' ? (
              <a
                className='font-normal	 text-sm text-gray-400 hover:text-[#bac964] tracking-wide cursor-pointer decoration-solid '
                onClick={() => handlePortfolio('All')}>
                All
              </a>
            ) : (
              <a
                className='font-normal	 text-sm text-[#bac964] hover:text-gray-400 tracking-wide cursor-pointer decoration-solid '
                onClick={() => handlePortfolio('All')}>
                All
              </a>
            )}
          </li>
          <li className='text-gray-300 py-4 px-5'>
            {activePortfolio != 'React Js' ? (
              <a
                className='font-normal	 text-sm text-gray-400 hover:text-[#bac964] tracking-wide cursor-pointer decoration-solid '
                onClick={() => handlePortfolio('React Js')}>
                React Js
              </a>
            ) : (
              <a
                className='font-normal	 text-sm text-[#bac964] hover:text-gray-400 tracking-wide cursor-pointer decoration-solid '
                onClick={() => handlePortfolio('React Js')}>
                React Js
              </a>
            )}
          </li>
          <li className='text-gray-300 py-4 px-5'>
            {activePortfolio != 'PWA' ? (
              <a
                className='font-normal	 text-sm text-gray-400 hover:text-[#bac964] tracking-wide cursor-pointer decoration-solid '
                onClick={() => handlePortfolio('PWA')}>
                PWA
              </a>
            ) : (
              <a
                className='font-normal	 text-sm text-[#bac964] hover:text-gray-400 tracking-wide cursor-pointer decoration-solid '
                onClick={() => handlePortfolio('PWA')}>
                PWA
              </a>
            )}
          </li>
          <li className='text-gray-300 py-4 px-5'>
            {activePortfolio != 'Nextjs' ? (
              <a
                className='font-normal	 text-sm text-gray-400 hover:text-[#bac964] tracking-wide cursor-pointer decoration-solid '
                onClick={() => handlePortfolio('Nextjs')}>
                Nextjs
              </a>
            ) : (
              <a
                className='font-normal	 text-sm text-[#bac964] hover:text-gray-400 tracking-wide cursor-pointer decoration-solid '
                onClick={() => handlePortfolio('Nextjs')}>
                Nextjs
              </a>
            )}
          </li>
          <li className='text-gray-300 py-4 px-5'>
            {activePortfolio != 'React Native' ? (
              <a
                className='font-normal	 text-sm text-gray-400 hover:text-[#bac964] tracking-wide cursor-pointer decoration-solid '
                onClick={() => handlePortfolio('React Native')}>
                React Native
              </a>
            ) : (
              <a
                className='font-normal	 text-sm text-[#bac964] hover:text-gray-400 tracking-wide cursor-pointer decoration-solid '
                onClick={() => handlePortfolio('React Native')}>
                React Native
              </a>
            )}
          </li>
          <li className='text-gray-300 py-4 px-5'>
            {activePortfolio != 'Typescript' ? (
              <a
                className='font-normal	 text-sm text-gray-400 hover:text-[#bac964] tracking-wide cursor-pointer decoration-solid '
                onClick={() => handlePortfolio('Typescript')}>
                Typescript
              </a>
            ) : (
              <a
                className='font-normal	 text-sm text-[#bac964] hover:text-gray-400 tracking-wide cursor-pointer decoration-solid '
                onClick={() => handlePortfolio('Typescript')}>
                Typescript
              </a>
            )}
          </li>
        </ul>
      </div>
      <div>
        <div className='grid grid-cols-1 m-4 sm:m-8 sm:grid-cols-3 sm:gap-10'>
          {activePortfolio === 'All' &&
            projects.map((project) => (
              <div
                className='scale-in-center mb-6 sm:mb-0'
                key={project.id}>
                <div className=''>
                  <img
                    src={project.img}
                    width='100%'
                    height='100%'
                  />
                </div>
                <div className='flex flex-col text-center'>
                  <h4 className='text-xl text-gray-400 font-extralight uppercase my-4'>{project.name}</h4>
                  <p className='text-xs uppercase text-[#ccc] mb-2 font-light tracking-wide'>{project.category}</p>
                  {project.github && (
                    <a
                      className='font-normal	 text-sm text-[#bac964] mb-2 hover:text-gray-400 tracking-wide cursor-pointer decoration-solid '
                      href={project.github}
                      target='_blank'>
                      View on Github
                    </a>
                  )}
                  {project.live && (
                    <a
                      className='font-normal	 text-sm text-[#bac964] hover:text-gray-400 tracking-wide cursor-pointer decoration-solid '
                      href={project.live}
                      target='_blank'>
                      View Live
                    </a>
                  )}
                </div>
              </div>
            ))}
          {projects.map(
            (project) =>
              project.category === activePortfolio && (
                <div
                  className='scale-in-center mb-6'
                  key={project.id}>
                  <div className=''>
                    <img
                      src={project.img}
                      width='100%'
                      height='100%'
                    />
                  </div>
                  <div className='flex flex-col text-center'>
                    <h4 className='text-xl text-gray-400 font-extralight uppercase my-4'>{project.name}</h4>
                    <p className='text-xs uppercase text-[#ccc] font-light mb-2 tracking-wide'>{project.category}</p>
                    {project.github && (
                      <a
                        className='font-normal	 text-sm text-[#bac964] mb-2 hover:text-gray-400 tracking-wide cursor-pointer decoration-solid '
                        href={project.github}
                        target='_blank'>
                        View on Github
                      </a>
                    )}
                    {project.live && (
                      <a
                        className='font-normal	 text-sm text-[#bac964] hover:text-gray-400 tracking-wide cursor-pointer decoration-solid '
                        href={project.live}
                        target='_blank'>
                        View Live
                      </a>
                    )}
                  </div>
                </div>
              ),
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

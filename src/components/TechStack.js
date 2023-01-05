import React from 'react';
import { techstack } from '../assets/techStack';

const TechStack = (props) => {
  return (
    <div className='max-w-6xl my-0 mx-auto py-10 sm:py-20'>
      <h2 className='text-white font-extralight pt-5 text-3xl text-center mb-6'>
        Tech <strong className='font-extrabold'>Stack</strong>
      </h2>
      <div className='grid grid-cols-1 m-4 sm:m-8 sm:grid-cols-3 gap-10'>
        <div className='pt-10 pb-7 bg-gray-300 text-black font-light mb-6 border-0 border-transparent	 rounded-lg	'>
          <h2 className='font-bold mb-2 border-b p-4 text-center text-white text-2xl bg-orange-500'>Frontend</h2>
          <p className='mb-2 text-base text-neutral-900 font-normal  p-1 text-center'>HTML, CSS & JavaScript</p>
          <p className='mb-2 text-base text-neutral-900 font-normal  p-1 text-center'>Typescript  </p>
          <p className='mb-2 text-base text-neutral-900 font-normal  p-1 text-center'>React</p>
          <p className='mb-2 text-base text-neutral-900 font-normal  p-1 text-center'> NextJs [SSR, SSG, ISR] </p>
          <p className='mb-2 text-base text-neutral-900 font-normal  p-1 text-center'>React Native (Expo) </p>
          <p className='mb-2 text-base text-neutral-900 font-normal  p-1 text-center'>PWA</p>
          <p className='mb-2 text-base text-neutral-900 font-normal  p-1 text-center'>Bootstrap, MUI, Tailwind css & Saas</p>
        </div>
         <div className='pt-10 pb-7 bg-gray-300 text-black font-light mb-6 border-0 border-transparent	 rounded-lg	'>
          <h2 className='font-bold mb-2 border-b p-4 text-center text-white text-2xl bg-orange-500'>Backend</h2>
          <p className='mb-2 text-base text-neutral-900 font-normal  p-1 text-center'>Nodejs</p>
          <p className='mb-2 text-base text-neutral-900 font-normal  p-1 text-center'>Express </p>
          <p className='mb-2 text-base text-neutral-900 font-normal  p-1 text-center'>MongoDB </p>
          <p className='mb-2 text-base text-neutral-900 font-normal  p-1 text-center'> MySQL </p>
        </div>
         <div className='pt-10 pb-7 bg-gray-300 text-black font-light mb-6 border-0 border-transparent	 rounded-lg	'>
          <h2 className='font-bold mb-2 border-b p-4 text-center text-white text-2xl bg-orange-500'>Tools</h2>
          <p className='mb-2 text-base text-neutral-900 font-normal  p-1 text-center'>Github & Git</p>
          <p className='mb-2 text-base text-neutral-900 font-normal  p-1 text-center'>Jest, React Testing Library & Cypres </p>
          <p className='mb-2 text-base text-neutral-900 font-normal  p-1 text-center'>Payment Gateway [Paypal, Stripe, Google] </p>
          <p className='mb-2 text-base text-neutral-900 font-normal  p-1 text-center'> Firebase </p>
          <p className='mb-2 text-base text-neutral-900 font-normal  p-1 text-center'> CMS [Sanity, Netlify] </p>
          <p className='mb-2 text-base text-neutral-900 font-normal  p-1 text-center'>Azure, AWS & Google Cloud </p>
          <p className='mb-2 text-base text-neutral-900 font-normal  p-1 text-center'> REST API & GRAPHQL </p>
          <p className='mb-2 text-base text-neutral-900 font-normal  p-1 text-center'>EsLint & Prettier </p>
          <p className='mb-2 text-base text-neutral-900 font-normal  p-1 text-center'>Docker </p>
        </div>
      </div>
    </div>
  );
};

export default TechStack;

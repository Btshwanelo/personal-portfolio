import React from 'react';
import { LinkedInIcon, TwitterIcon, GithubIcon } from '../assets/Icons';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <section className='w-full max-w-6xl flex flex-col justify-center mx-auto py-20'>
      <p className='relative w-full min-h0[1px] px-4 text-base text-center mb-12 font-light text-gray-200'>
        Copyright © {year} All rights reserved | Tshwanelo Goodwill Bucibo
      </p>
      <div className='w-full flex justify-center'>
        <a
          className='flex justify-center align-middle p-4 bg-[#333] relative rounded-full text-xl mx-3 cursor-pointer'
          href='https://www.linkedin.com/in/tshwanelo-bucibo-b9193ab8/'
          target='_blank'
          rel='noopener noreferrer'>
          <LinkedInIcon />
        </a>
        <a
          className='flex justify-center align-middle p-4 bg-[#333] relative rounded-full text-xl mx-3 cursor-pointer'
          href='https://github.com/Btshwanelo/'
          target='_blank'
          rel='noopener noreferrer'>
          <GithubIcon />
        </a>
      </div>
    </section>
  );
};

export default Footer;

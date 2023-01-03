import React, { useState } from 'react';
import { navLinks } from '../assets/navLinks';
import NavLink from './NavLink';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div className={`flex flex-col sm:flex-row sm:justify-center py-2  bg-white fixed top-0 w-full z-20`}>
      <div
        className='px-5 sm:hidden'
        onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
            />
          </svg>
        )}
      </div>
      <ul className={`list-none sm:flex m-0 p-0 ${!isMobile && 'hidden'}`}>
        {navLinks.map((nav) => (
          <NavLink
            key={nav.id}
            navLinkId={nav.navLinkId}
            scrollToId={nav.scrollToId}
          />
        ))}
      </ul>
    </div>
  );
};

export default Navbar;

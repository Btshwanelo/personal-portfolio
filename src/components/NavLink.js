import React, { useContext } from 'react';
import { NavContext } from '../hooks/NavContext';

const NavLink = ({ navLinkId, scrollToId }) => {
  const { activeNavLinkId, setActiveNavLinkId } = useContext(NavContext);

  const handleClick = () => {
    setActiveNavLinkId(navLinkId);
    document.getElementById(scrollToId).scrollIntoView({ behavior: 'smooth' });
  };

  return activeNavLinkId !== navLinkId ? (
    <li className='py-4 px-5'>
      <a
        className='cursor-pointer text-sm font-normal uppercase text-gray-500 hover:text-[ #bac964]'
        id={navLinkId}
        onClick={handleClick}>
        {navLinkId}
      </a>
    </li>
  ) : (
    <li className='py-4 px-5'>
      <a
        className='cursor-pointer text-sm font-normal uppercase text-orange-500 hover:text-[ #bac964]'
        id={navLinkId}
        onClick={handleClick}>
        {navLinkId}
      </a>
    </li>
  );
};

export default NavLink;

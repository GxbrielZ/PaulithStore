import React from 'react';
import { Link } from 'react-router-dom';
import { IoMenu, IoClose } from "react-icons/io5";
import MenuLinks from '../../data/MenuLinks';

const NavbarLinksLeft = ({ nav, handleNav }) => {
  return (
    <div className='flex-1 flex justify-start'>
      {nav ? (
            <IoClose
                onClick={handleNav}
                className='text-3xl text-yellow-800 cursor-pointer
                z-50 md:hidden fixed'
            />
        ) : (
            <IoMenu
                onClick={handleNav}
                className='text-3xl text-yellow-800 cursor-pointer md:hidden'
            />
      )}
      <div className='md:flex hidden'>
        <ul
            className='flex flex-col md:flex-row md:gap-12 gap-6 text-sm'
        >    
          {MenuLinks.slice(0, 3).map(link => (
            <li key={link.id}>
              <Link
                to={link.link}
                className='text-yellow-800 uppercase
                hover:text-yellow-600'
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavbarLinksLeft;
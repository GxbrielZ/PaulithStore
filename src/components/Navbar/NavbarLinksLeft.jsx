import React from 'react';
import { Link } from 'react-router-dom';
import MenuLinks from '../../data/MenuLinks';

const NavbarLinksLeft = () => {
  return (
    <div className='flex-1 flex justify-start'>
      <div className='md:flex hidden'>
        <ul
            className='flex flex-col md:flex-row md:gap-12 gap-6 text-sm'
        >    
          <li>
            <Link
                to={MenuLinks[0].link}
                className='text-yellow-800 uppercase hover:text-yellow-600'
            >
                {MenuLinks[0].name}
            </Link>
          </li>
          <li>
            <Link
                to={MenuLinks[1].link}
                className='text-yellow-800 uppercase hover:text-yellow-600'
            >
                {MenuLinks[1].name}
            </Link>
          </li>
          <li>
            <Link
                to={MenuLinks[2].link}
                className='text-yellow-800 uppercase hover:text-yellow-600'
            >
                {MenuLinks[2].name}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarLinksLeft;
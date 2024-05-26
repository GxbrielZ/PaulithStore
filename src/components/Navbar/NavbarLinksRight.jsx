import React from 'react';
import { Link } from 'react-router-dom';
import MenuLinks from '../../data/MenuLinks';

const NavbarLinksRight = () => {
  return (
    <div className='md:flex hidden items-center md:mr-6'>
        <ul
            className='flex flex-col md:flex-row md:gap-12 gap-6 text-sm'
        >    
          {MenuLinks.slice(3, 5).map(link => (
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
  );
};

export default NavbarLinksRight;
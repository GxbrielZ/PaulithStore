import React from 'react';
import MenuLinks from '../../data/MenuLinks';
import { Link } from 'react-router-dom';

const MobileMenu = () => {
  return (
    <div
        className='fixed top-0 left-0 w-full min-h-screen bg-white
        z-40 flex flex-col justify-start lg:hidden
        py-[6.5rem] pl-[1.5rem]'
    >
        <ul className='flex flex-col gap-10 text-2xl'>
            {MenuLinks.map(link => (
                <li key={link.id}>
                    <Link
                        to={link.link}
                        className='text-yellow-800 uppercase hover:text-yellow-600'
                    >
                        {link.name}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
  );
};

export default MobileMenu;
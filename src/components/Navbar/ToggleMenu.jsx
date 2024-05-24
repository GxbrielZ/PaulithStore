import React from 'react';
import { Link } from 'react-router-dom';
import MenuLinks from '../../data/MenuLinks';

const ToggleMenu = ({ nav, handleNav }) => {
  return (
    nav && (
        <div
            className='md:hidden absolute top-0 left-0
            flex items-center justify-center
            w-full h-screen bg-black/90 text-white'
        >
            <ul className='flex flex-col items-center'>
                {MenuLinks.map((data, index) => (
                    <li key={index}>
                        <Link
                            to={data.link}
                            onClick={handleNav}
                            className='text-white font-bold uppercase tracking-wide block py-5'
                        >
                            {data.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
  );
};

export default ToggleMenu;
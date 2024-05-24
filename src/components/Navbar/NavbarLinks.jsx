import React from 'react';
import { Link } from 'react-router-dom';
import MenuLinks from '../../data/MenuLinks';

const NavbarLinks = () => {
  return (
    <div className='md:flex hidden'>
        <ul
            className='flex flex-col md:flex-row w-full md:gap-[4vw] gap-6 text-sm'
        >    
            {
                MenuLinks.map((data, index) => (
                    <li key={index}>
                        <Link
                            to={data.link}
                            className='text-white uppercase'
                        >
                            {data.name}
                        </Link>
                    </li>
                ))
            }
        </ul>
    </div>
  );
};

export default NavbarLinks;
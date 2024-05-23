import React from 'react';
import { Link } from 'react-router-dom';

const MenuLinks = [
    {
        id: 1,
        name: "Strona Główna",
        link: "/#home"
    },
    {
        id: 2,
        name: "Sklep",
        link: "/#shop"
    },
    {
        id: 3,
        name: "Regulamin",
        link: "/#rules"
    },
    {
        id: 4,
        name: "Kontakt",
        link: "/#contact"
    },
];

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
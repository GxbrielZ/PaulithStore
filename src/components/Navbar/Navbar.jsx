import React from 'react';
import { useState } from 'react';
import PaulithLogo from "../../assets/Logo/PaulithLogo.png";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoMenu, IoClose } from "react-icons/io5";

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

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div 
            className='absolute w-full flex justify-between p-4 items-center
            font-lato z-20'
        >
            {/* Logo */}
            <div className='flex items-center gap-2'>
                <img className='w-9' src={PaulithLogo} alt="Paulith company logo" />
                <a
                    href='#'
                    className='text-white font-bold text-2xl uppercase
                    tracking-wide md:cursor-pointer'
                >
                    Paulith
                </a>
            </div>

            {/* Navbar Center */}
            <div
                className='md:flex hidden'
            >
                <ul
                    className='flex flex-col md:flex-row w-full md:gap-[4vw] gap-6'>    
                    {
                        MenuLinks.map((data, index) => (
                            <li key={index}>
                                <a
                                    href={data.link}
                                    className='text-white hover:text-goldenrod
                                    font-bold uppercase tracking-wide duration-500'
                                >
                                    {data.name}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>

            {/* Navbar Right Side */}
            <div className='flex items-center'>
                <button className='relative p-3'>
                    <MdOutlineShoppingBag className='text-2xl text-white' />
                        <div
                            className='w-4 h-4 bg-red-500
                            text-white rounded-full absolute top-0 right-0
                            flex items-center justify-center text-xs'
                        >
                            4
                        </div>
                </button>
                {nav ? (
                    <IoClose
                        onClick={handleNav}
                        className='text-2xl text-white cursor-pointer
                        z-10 md:hidden'
                    />
                ) : (
                    <IoMenu
                        onClick={handleNav}
                        className='text-2xl text-white cursor-pointer md:hidden'
                    />
                )}
            </div>

            {/* Toggle Menu */}
            {nav && (
                <div
                    className='md:hidden absolute top-0 left-0
                    flex items-center justify-center
                    w-full h-screen bg-black/90 text-white'
                >
                    <ul className='flex flex-col items-center'>
                        {MenuLinks.map((data, index) => (
                            <li key={index}>
                                <a
                                    href={data.link}
                                    className='text-white font-bold uppercase tracking-wide block py-5'
                                >
                                    {data.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
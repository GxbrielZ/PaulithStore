import React, { useState } from 'react';
import PaulithLogo from "../../assets/Logo/PaulithLogo.png";
import MenuLinks from '../../data/MenuLinks';
import NavbarLinks from './NavbarLinks';
import ToggleMenu from './ToggleMenu';
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div 
            className='absolute w-full flex justify-between py-4 px-2 md:px-12 items-center z-20 font-merriweather'
        >
            {/* Logo */}
            <a
                href='#'
                className='text-white text-2xl uppercase
                tracking-wide md:cursor-pointer italic'
            >
                Paulith
            </a>

            {/* Navbar Center */}
            <NavbarLinks />

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
            <ToggleMenu nav={nav} handleNav={handleNav} />
        </div>
    );
};

export default Navbar;
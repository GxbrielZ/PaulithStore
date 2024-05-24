import React, { useState } from 'react';
import PaulithLogo from "../../assets/Logo/PaulithLogo.png";
import MenuLinks from '../../data/MenuLinks';
import NavbarLinks from './NavbarLinks';
import CartButton from './CartButton';
import ToggleMenu from './ToggleMenu';

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
            <NavbarLinks />
            <CartButton nav={nav} handleNav={handleNav} />
            <ToggleMenu nav={nav} handleNav={handleNav} />
        </div>
    );
};

export default Navbar;
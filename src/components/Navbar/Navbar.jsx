import React, { useState } from 'react';
import NavbarLinksLeft from './NavbarLinksLeft';
import NavbarLinksRight from './NavbarLinksRight';
import Logo from './Logo';
import CartButton from './CartButton';
import ToggleMenu from './ToggleMenu';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div 
            className='w-full flex justify-center items-center py-4 px-2
            md:px-12 font-merriweather'
        >
            <NavbarLinksLeft />
            <Logo />
            <div className='flex-1 flex justify-end'>
                <NavbarLinksRight />
                <CartButton nav={nav} handleNav={handleNav} />
                <ToggleMenu nav={nav} handleNav={handleNav} />
            </div>
        </div>
    );
};

export default Navbar;
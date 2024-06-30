import React, { useState } from 'react';
import NavbarLinksLeft from './NavbarLinksLeft';
import NavbarLinksRight from './NavbarLinksRight';
import Logo from './Logo';
import CartButton from './CartButton';
import MobileMenu from '../MobileMenu/MobileMenu';

const Navbar = ({ cartItems, setCartItems }) => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div 
            className='sticky top-0 z-50 w-full flex justify-center items-center px-4 lg:px-12 md:py-1 font-merriweather shadow-md bg-white'
        >
            <NavbarLinksLeft nav={nav} handleNav={handleNav} />
            <Logo />
            <div className='flex-1 flex justify-end'>
                <NavbarLinksRight />
                <CartButton
                    cartItems={cartItems}
                    setCartItems={setCartItems}
                />
            </div>
            {nav && <MobileMenu />}
        </div>
    );
};

export default Navbar;
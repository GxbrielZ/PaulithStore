import React from 'react';
import Navbar from '../Navbar/Navbar';
import JewellerySection from './JewellerySection';
import Footer from '../Footer/Footer';
import { useCart } from '../Navbar/CartContext';

const Jewellery = () => {
    const { cartItems } = useCart();

    return (
        <>
            <Navbar cartItems={cartItems} />
            <JewellerySection />
            <Footer />
        </>
    )
};

export default Jewellery;
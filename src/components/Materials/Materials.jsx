import React from 'react';
import Navbar from '../Navbar/Navbar';
import MaterialsSection from './MaterialsSection';
import Footer from '../Footer/Footer';
import { useCart } from '../Navbar/CartContext';

const Materials = () => {
    const { cartItems } = useCart();

    return (
        <>
            <Navbar cartItems={cartItems} />
            <MaterialsSection />
            <Footer />
        </>
    )
};

export default Materials;
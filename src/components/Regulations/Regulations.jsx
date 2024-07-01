import React from 'react';
import Navbar from '../Navbar/Navbar';
import RegulationsSection from '../Regulations/RegulationsSection';
import Footer from '../Footer/Footer';
import { useCart } from '../Navbar/CartContext';

const Regulations = () => {
    const { cartItems } = useCart();

    return (
        <>
            <Navbar cartItems={cartItems} />
            <RegulationsSection />
            <Footer />
        </>
    )
};

export default Regulations;
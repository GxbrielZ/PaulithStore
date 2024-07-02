import React from 'react';
import Navbar from '../Navbar/Navbar';
import ContactSection from './ContactSection';
import Footer from '../Footer/Footer';
import { useCart } from '../Navbar/CartContext';

const ContactTab = () => {
    const { cartItems } = useCart();

    return (
        <>
            <Navbar cartItems={cartItems} />
            <ContactSection />
            <Footer />
        </>
    )
};

export default ContactTab;
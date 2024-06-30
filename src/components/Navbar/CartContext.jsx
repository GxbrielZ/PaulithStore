import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        if (!cartItems.some(cartItem => cartItem.prodName === item.prodName)) {
          setCartItems([...cartItems, item]);
        }
    };

    const removeFromCart = (prodName) => {
        setCartItems(cartItems.filter(cartItem => cartItem.prodName !== prodName));
    };

    return (
        <CartContext.Provider
            value={{ cartItems, addToCart, removeFromCart }}
        >
            {children}
        </CartContext.Provider>
    );
};
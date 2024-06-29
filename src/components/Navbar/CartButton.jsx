import React, { useState, useEffect, useRef } from 'react';
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";

const CartButton = ({ cartItems = [], setCartItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const cartRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const removeFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  return (
    <div
      className='flex items-center relative font-merriweather'
      ref={cartRef}
    >
        <button
          className='relative p-3 text-2xl text-yellow-800 hover:text-yellow-600'
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Cart"
        >
          <MdOutlineShoppingBag />
          {cartItems.length > 0 && (
            <div
              className='w-4 h-4 bg-yellow-800 text-white
              rounded-full absolute top-0 right-0
              flex items-center justify-center text-xs'
            >
              {cartItems.length}
            </div>
          )}
        </button>
        {isOpen && (
          <div
            className='absolute right-0 top-12 bg-white shadow-lg rounded p-4 w-80 text-yellow-900 z-30'
          >
            {cartItems.length === 0 ? (
              <p>Koszyk jest pusty</p>
            ) : (
              <ul>
                {cartItems.map((item, index) => (
                  <li
                    key={index}
                    className='flex justify-between items-center my-2'
                  >
                    <span
                      className='flex-1 truncate'
                    >
                      {item.prodName}
                    </span>
                    <span
                      className='flex-none w-20 text-right'
                    >
                      {item.prodPrice}
                    </span>
                    <button
                      className='ml-5 hover:text-yellow-700'
                      onClick={() => removeFromCart(index)}
                    >
                      <FaTrashAlt />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
    </div>
  );
};

export default CartButton;
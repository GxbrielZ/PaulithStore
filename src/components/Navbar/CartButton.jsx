import React from 'react';
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoMenu, IoClose } from "react-icons/io5";

const CartButton = ({ nav, handleNav }) => {
  return (
    <div className='flex items-center'>
        <button className='relative p-3 text-2xl text-yellow-800 hover:text-yellow-600'>
            <MdOutlineShoppingBag />
                <div
                    className='w-4 h-4 bg-yellow-800 text-white
                    rounded-full absolute top-0 right-0
                    flex items-center justify-center text-xs'
                >
                    4
                </div>
        </button>
        {nav ? (
            <IoClose
                onClick={handleNav}
                className='text-2xl text-yellow-800 cursor-pointer
                z-10 md:hidden'
            />
        ) : (
            <IoMenu
                onClick={handleNav}
                className='text-2xl text-yellow-800 cursor-pointer md:hidden'
            />
        )}
    </div>
  );
};

export default CartButton;
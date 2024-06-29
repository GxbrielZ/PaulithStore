import React, {useState} from 'react';
import { MdOutlineShoppingBag } from "react-icons/md";

const CartButton = () => {
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
    </div>
  );
};

export default CartButton;
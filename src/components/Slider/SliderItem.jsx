import React from 'react';
import { Link } from 'react-router-dom';

const SliderItem = ({ imageSrc, linkTo, prodName, prodPrice, addToCart }) => {
  return (
    <div
      className='mx-4 md:mx-3 shadow-md rounded-lg hover:scale-105
      duration-700 my-4 font-merriweather'
    >
      <Link to={linkTo}>
        <img
          src={imageSrc}
          alt="#"
          className="w-full sm:aspect-[4/3] md:aspect-[1/1]
          lg:aspect-[2/2] object-cover rounded-t-lg"
        />
      </Link>
      <div className='p-4 text-yellow-900 flex flex-col'>
        <div className='flex justify-between mb-4 text-lg'>
          <h1 className='truncate max-w-xs'>{prodName}</h1>
          <p>{prodPrice}</p>
        </div>
        <button
          className='bg-yellow-800 hover:bg-yellow-900 text-white p-2 rounded'
          onClick={() => addToCart({ imageSrc, prodName, prodPrice })}
        >
          Dodaj do koszyka
        </button>
      </div>
    </div>
  );
};

export default SliderItem;
import React from 'react';
import { Link } from 'react-router-dom';

const SliderItem = ({ imageSrc, linkTo, prodName, prodPrice }) => {
  return (
    <Link to={linkTo}>
        <div
          className='mx-4 md:mx-3 shadow-md rounded-lg hover:scale-105
          duration-700 my-4'
        >
            <img
                src={imageSrc}
                alt="#"
                className="w-full aspect-[4/3] md:aspect-[1/1]
                lg:aspect-[2/2] object-cover rounded-t-lg"
            />
            <div className='p-4'>
              <h1 className='mb-2 text-xl'>{prodName}</h1>
              <p className='mb-2 text-lg'>{prodPrice}</p>
            </div>
        </div>
    </Link>
  );
};

export default SliderItem;
import React from 'react';
import Slider from "react-slick";
import SliderItem from './SliderItem';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import products from '../../data/products';

function NextBtn(props) {
  const { onClick } = props;

  return (
    <div
      onClick={onClick} 
      className='absolute top-1/2 right-0 transform -translate-y-1/2 z-10
      bg-white opacity-70 p-2'
    >
      <IoIosArrowForward
        className='text-black text-5xl cursor-pointer hover:scale-110
        duration-300'
      />
    </div>
  );
};

function PrevBtn(props) {
  const { onClick } = props;

  return (
    <div
      onClick={onClick}
      className='absolute top-1/2 left-0 transform -translate-y-1/2 z-10
      bg-white opacity-70 p-2'
    >
      <IoIosArrowBack
        className='text-black text-5xl cursor-pointer hover:scale-110
        duration-300'
      />
    </div>
  );
};

const ProductSlider = ({ addToCart }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="slider-container mx-8">
      <Slider {...settings}>
        {products.map((product) => (
          <SliderItem
            key={product.id}
            imageSrc={product.imageSrc}
            prodName={product.prodName}
            prodPrice={product.prodPrice}
            addToCart={addToCart}
          />
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
import React, {useState} from 'react';
import Slider from "react-slick";
import SliderItem from './SliderItem';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Product1 from "../../assets/ProductSlider/Product1.jpg";
import Product2 from "../../assets/ProductSlider/Product2.jpg";
import Product3 from "../../assets/ProductSlider/Product3.jpg";
import Product4 from "../../assets/ProductSlider/Product4.jpg";
import Product5 from "../../assets/ProductSlider/Product5.jpg";
import Product6 from "../../assets/ProductSlider/Product6.jpg";
import CartButton from '../Navbar/CartButton'

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
        <SliderItem imageSrc={Product1} prodName="Górskie Oczyszczenie" prodPrice="100 PLN" addToCart={addToCart} />
        <SliderItem imageSrc={Product2} prodName="Wymyślić nazwę" prodPrice="160 PLN" addToCart={addToCart} />
        <SliderItem imageSrc={Product3} prodName="Pierścionek" prodPrice="130 PLN" addToCart={addToCart} />
        <SliderItem imageSrc={Product4} prodName="Zestaw Biżuterii" prodPrice="180 PLN" addToCart={addToCart} />
        <SliderItem imageSrc={Product5} prodName="Naszyjnik" prodPrice="250 PLN" addToCart={addToCart} />
        <SliderItem imageSrc={Product6} prodName="Naszyjnik" prodPrice="230 PLN" addToCart={addToCart} />
      </Slider>
    </div>
  );
};

export default ProductSlider;
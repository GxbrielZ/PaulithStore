import React from 'react';
import { Link } from 'react-router-dom';
import HeroImg from "../../assets/Hero/HeroImage.png"

const Hero = () => {
    return (
      <div
        className='relative h-[93vh] md:h-[82vh] flex flex-col
        justify-center items-center text-center mt-1 px-4 sm:px-8
        font-merriweather'
        style={{ backgroundImage: `url(${HeroImg})`, backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className='text-3xl sm:text-5xl font-bold text-white mb-4 z-10'>
          Magia Biżuterii
        </h1>
        <p className='text-lg sm:text-xl text-white mb-8 z-10'>
          Odkryj świat, w którym każdy klejnot opowiada swoją historię. <br/>Nasza ręcznie robiona biżuteria z minerałów łączy naturalne piękno i precyzję, tworząc niezwykłe dzieła sztuki. <br/>Przywitaj nową erę elegancji z biżuterią, która każdego dnia wprowadza magię i piękno do Twojej codzienności.
        </p>
        <Link
          to='/#'
          className='bg-yellow-800 hover:bg-yellow-900 text-white
          py-2 px-12 rounded z-10'
        >
          Odkryj
        </Link>
      </div>
    );
};

export default Hero;
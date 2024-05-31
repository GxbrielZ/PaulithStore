import React from 'react';
import { Link } from 'react-router-dom';
import HeroImg1 from "../../assets/Hero/HeroImg1.jpg"
import HeroImg2 from "../../assets/Hero/HeroImg2.jpg"

const Hero = () => {
    return (
      <div className="px-4 md:px-20 text-yellow-800 font-merriweather">
        <h1 className='text-center text-4xl italic my-6'>
          Magia Biżuterii
        </h1>
        <div
          className="grid grid-cols-1 gap-1
          md:[grid-template-columns:1fr_2fr]"
        >
          <img
            src={HeroImg1}
            alt="Jewelry 1"
            className="w-full aspect-[4/5] object-cover rounded-l-xl brightness-90"
          />
          <div>
            <img
                src={HeroImg2}
                alt="Jewelry 3"
                className="w-full aspect-[16/5] object-cover rounded-tr-xl brightness-90"
            />
            <div
              className='flex items-center bg-yellow-500 bg-opacity-20
              aspect-[16/5] px-10 rounded-br-xl'
            >
              <p className='text-3xl italic'>
                Odkryj świat, w którym każdy klejnot opowiada swoją historię. <br/>Nasza ręcznie robiona biżuteria z minerałów łączy naturalne piękno i precyzję, tworząc niezwykłe dzieła sztuki. <br/>Przywitaj nową erę elegancji z biżuterią, która każdego dnia wprowadza magię i piękno do Twojej codzienności.
              </p>
              <div className=''>
                <Link
                  to="/#"
                  className="bg-yellow-800 hover:bg-yellow-900 text-white font-semibold py-2 px-12 rounded"
                >
                  Odkryj
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Hero;
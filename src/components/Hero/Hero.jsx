import React from 'react';
import { Link } from 'react-router-dom';
import Bracelet from "../../assets/Categories/Bracelet.jpg";

const Hero = () => {
    return (
      <div className="px-4 md:px-20 text-yellow-800 font-merriweather">
        <h1 className="text-6xl text-center italic py-8">
            Magia Biżuterii
        </h1>
        <div
          className="grid grid-cols-1 gap-1
          md:[grid-template-columns:1fr_2fr]"
        >
          <img
            src={Bracelet}
            alt="Jewelry 1"
            className="w-full aspect-[4/5] object-cover"
          />
          <div className="">
            <img
                src={Bracelet}
                alt="Jewelry 3"
                className="w-full aspect-[15/5] object-cover"
            />
            <p className='mt-4 mx-6 text-3xl italic'>
              Odkryj świat, w którym każdy klejnot opowiada swoją historię. <br/>Nasza ręcznie robiona biżuteria z minerałów łączy naturalne piękno i precyzję, tworząc niezwykłe dzieła sztuki. <br/>Przywitaj nową erę elegancji z biżuterią, która każdego dnia wprowadza magię i piękno do Twojej codzienności.
            </p>
            <div className='flex justify-end mt-6'>
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
    );
};

export default Hero;
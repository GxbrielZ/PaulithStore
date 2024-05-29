import React from 'react';
import { Link } from 'react-router-dom';
import Bracelet from "../../assets/Categories/Bracelet.jpg";

const Hero = () => {
    return (
      <div className="px-4 md:px-20 text-yellow-800">
        <h1 className="text-6xl text-center italic py-8
        font-merriweather"
        >
            Magia Biżuterii
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="">
            <img
                src={Bracelet}
                alt="Jewelry 1"
                className="w-full aspect-[5/6] object-cover"
            />
          </div>
          <div className="">
            <img
                src={Bracelet}
                alt="Jewelry 2"
                className="w-full aspect-[5/6] object-cover"
            />
          </div>
          <div className="">
            <img
                src={Bracelet}
                alt="Jewelry 3"
                className="w-full aspect-[8/5] object-cover"
            />
            <div className="mt-6 text-yellow-800 font-merriweather">
                <p className='mt-2'>
                    Zanurz się w świecie unikalnych klejnotów, gdzie każdy element jest wyjątkowy.
                </p>
                <p className='mt-2'>
                    Nasza ręcznie robiona biżuteria z minerałów łączy w sobie naturalne piękno i precyzję, tworząc niezwykłe dzieła sztuki.
                </p>
                <p className='mt-2'>
                    Pozwól, aby nasze wyjątkowe kolekcje dodały blasku Twojemu życiu.
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
      </div>
    );
};

export default Hero;
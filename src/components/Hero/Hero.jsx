import React from 'react';
import HeroPic from "../../assets/Hero/HeroPic.jpg";

const HeroData = [
    {
        id: 1,
        img: HeroPic,
        title: "Magia biżuterii",
        buttonTitle: "Sprawdź Ofertę",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
];

const Hero = () => {
    return (
      <div className='w-full h-screen font-lato'>
        <img className='top-0 left-0 w-full h-full object-cover' src={HeroPic} alt="" />
        <div className='bg-black/30 absolute top-0 left-0 w-full h-screen'></div>
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
            <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
                <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>
                    {HeroData[0].title}
                </h1>
                <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>
                    {HeroData[0].description}
                </p>
                <button
                    className='border py-2 px-3 rounded-full bg-white text-black'
                >
                    {HeroData[0].buttonTitle}
                </button>
            </div>
        </div>
      </div>  
    );
};

export default Hero;
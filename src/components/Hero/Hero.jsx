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
      <div className='relative w-full h-[93vh] font-lato'>
        <img className='top-0 left-0 w-full h-full object-cover' src={HeroPic} alt="" />
        <div className='bg-black/30 absolute top-0 left-0 w-full h-[93vh]'></div>
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
            <div className='absolute left-[5vw] md:left-[10vw]'>
                <h1 className='font-bold text-4xl drop-shadow-2xl'>
                    {HeroData[0].title}
                </h1>
                <p className='max-w-[90vw] md:max-w-[80vw]
                lg:max-w-[50vw] drop-shadow-2xl my-5 text-[1.15rem]
                md:text-xl'>
                    {HeroData[0].description}
                </p>
                <button
                    className='border rounded-lg p-2 hover:text-black
                    hover:bg-white duration-700'
                >
                    {HeroData[0].buttonTitle}
                </button>
            </div>
        </div>
      </div>  
    );
};

export default Hero;
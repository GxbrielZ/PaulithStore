import React from 'react';
import CategoryItem from "./CategoryItem"
import Necklease from "../../assets/Categories/Necklease.jpg";
import Ring from "../../assets/Categories/Ring.jpg";
import Image2 from "../../assets/Categories/Image2.jpg";
import Bracelet from "../../assets/Categories/Bracelet.jpg";

const Category = () => {
  return (
    <div className="m-10 flex justify-center">
        <div
          className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4
          gap-5 lg:gap-8 font-merriweather italic'
        >
            <CategoryItem imageSrc={Necklease} overlayText='Naszyjniki' />
            <CategoryItem imageSrc={Ring} overlayText='Pierścionki' />
            <CategoryItem imageSrc={Bracelet} overlayText='Bransoletki' />
            <CategoryItem imageSrc={Image2} overlayText='Zestawy' />
        </div>
    </div>
  );
};

export default Category;
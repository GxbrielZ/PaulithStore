import React from 'react';
import { Link } from 'react-router-dom';

const CategoryItem = ({ imageSrc, overlayText, linkTo }) => {
    return (
        <div className="relative">
            <Link to={linkTo}>
                <div className="relative">
                    <img
                        src={imageSrc}
                        alt="#"
                        className="w-full aspect-[4/5] object-cover rounded-lg"
                    />
                    <div
                        className="absolute inset-0 flex items-center justify-center
                        bg-black/40 hover:bg-black/25 duration-500 rounded-lg"
                    >
                    <span className="text-white font-lato text-5xl uppercase">
                        {overlayText}
                    </span>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default CategoryItem;
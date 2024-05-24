import React from 'react';
import { Link } from 'react-router-dom';
import PaulithLogo from "../../assets/Logo/PaulithLogo.png";

const Logo = () => {
  return (
    <Link className='flex items-center text-yellow-800 text-sm'>
        <img
            src={PaulithLogo}
            alt="#"
            className='w-[4.5rem]'
        />
        <span>PAULITH</span>
    </Link>
  );
};

export default Logo;
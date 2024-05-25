import React from 'react';
import { Link } from 'react-router-dom';
import PaulithLogo from "../../assets/Logo/PaulithLogo.png";

const Logo = () => {
  return (
    <div className='flex justify-center'>
      <Link className='flex items-center text-yellow-800 text-xl' to="/#">
        <img
            src={PaulithLogo}
            alt="Logo"
            className='w-[4.5rem]'
        />
        <span>PAULITH</span>
      </Link>
    </div>
  );
};

export default Logo;
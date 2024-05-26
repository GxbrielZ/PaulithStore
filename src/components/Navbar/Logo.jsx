import React from 'react';
import { Link } from 'react-router-dom';
import PaulithLogo from "../../assets/Logo/PaulithLogo.png";

const Logo = () => {
  return (
    <Link className='flex items-center text-yellow-800 text-xl' to="/#">
      <img
          src={PaulithLogo}
          alt="Logo"
          className='w-[3rem] pr-3'
      />
      <span>PAULITH</span>
    </Link>
  );
};

export default Logo;
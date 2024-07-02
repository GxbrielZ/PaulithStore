import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='w-full text-center border-t border-gray-200 py-4 font-merriweather'>
      <div className='flex flex-col sm:flex-row justify-between items-center mx-[1.5rem] md:mx-[2.5rem] text-yellow-800'>
        <div className='text-sm'>
          &copy; 2024 PAULITH STORE
        </div>
        <div className='flex space-x-6 sm:mt-0 mt-2 text-sm'>
          <Link to="#" className='hover:text-yellow-600'>
            O NAS
          </Link>
          <Link to='/regulations' className='hover:text-yellow-600'>
            REGULAMIN
          </Link>
          <Link to="#" className='hover:text-yellow-600'>
            POLITYKA PRYWATNOŚCI
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
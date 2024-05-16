import React from 'react';

const TextBanner = ({ inputText }) => {
  return (
    <div>
        <h1
            className='uppercase text-center m-10 text-2xl'
        >
            {inputText}
        </h1>
    </div>
  );
};

export default TextBanner;
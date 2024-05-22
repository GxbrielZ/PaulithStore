import React from 'react';

const FormField = ({ id, label, type, placeholder }) => {
  return (
    <div className='mb-6'>
        <label
            htmlFor={id}
            className='block text-yellow-800 text-sm mb-2'
        >
            {label}
        </label>
        <input
            type={type}
            id={id}
            placeholder={placeholder}
            className='appearance-none border rounded w-full py-2 px-3
            text-yellow-900 leading-tight focus:outline-none focus:ring-1
            focus:ring-yellow-600'
        />
    </div>
  );
};

export default FormField;
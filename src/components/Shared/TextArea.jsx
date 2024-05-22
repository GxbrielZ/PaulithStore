import React from 'react';

const TextArea = () => {
  return (
    <div className='mb-6'>
        <label
            htmlFor='message'
            className='block text-yellow-800 text-sm mb-2'
        >
            Wiadomość
        </label>
        <textarea
            id="message"
            placeholder='Wiadomość...'
            rows='5'
            className='appearance-none border rounded w-full py-2 px-3
            text-yellow-900 leading-tight focus:outline-none focus:ring-1
            focus:ring-yellow-600 resize-none'
        >
        </textarea>
    </div>
  );
};

export default TextArea;
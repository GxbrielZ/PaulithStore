import React from 'react';
import FormField from '../Shared/FormField';
import TextArea from '../Shared/TextArea';

const Contact = () => {
  return (
    <div className='mb-10 flex items-center justify-center font-merriweather'>
      <form>
        <div className='md:flex md:gap-5'>
          <FormField
            type='text'
            id='name'
            label='Imię'
            placeholder='Imię...'
          />
          <FormField
            type='email'
            id='email'
            label='E-mail'
            placeholder='Email...'
          />
        </div>
        <FormField
          type='text'
          id='subject'
          label='Temat'
          placeholder='Temat...'
        />
        <TextArea />
        <div className='flex items-center justify-center'>
          <button
            type='submit'
            className='bg-yellow-800 hover:bg-yellow-900 text-white
            py-2 px-6 rounded'
          >
            Wyślij Wiadomość
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
import React from 'react';

const Contact = () => {
  return (
    <div className='container pb-12 border-b-2'>
        <form action="#" method='POST'>
            <div className='grid grid-cols-2 grid-rows-2 gap-4'>
                <div>
                    <label for='firstName' className='block'>Imię</label>
                    <input
                        type="text"
                        name='firstName'
                        placeholder='Imię...'
                        className='mt-1 p-2 w-full border rounded-md'
                    />
                </div>
                <div>
                    <label for='lastName' className='block'>Nazwisko</label>
                    <input
                        type="text"
                        name='lastName'
                        placeholder='Nazwisko...'
                        className='mt-1 p-2 w-full border rounded-md'
                    />
                </div>
                <div>
                    <label for='email' className='block'>E-mail</label>
                    <input
                        type="email"
                        name='email'
                        placeholder='Adres e-mail...'
                        className='mt-1 p-2 w-full border rounded-md'
                    />
                </div>
                <div>
                    <label for='topic' className='block'>Temat</label>
                    <input
                        type="text"
                        name='topic'
                        placeholder='Temat...'
                        className='mt-1 p-2 w-full border rounded-md'
                    />
                </div>
            </div>

            <div className='mt-4'>
                <label for='message' className='block'>Wiadomość</label>
                <textarea
                    name="message" 
                    rows="5"
                    placeholder='Treść wiadomości...'
                    className='resize-none w-full mt-1 p-2 border rounded-md'
                ></textarea>
            </div>

            <div className='mt-6 text-center'>
                <button
                    type='submit'
                    className='p-3 bg-blue-500 text-white rounded-md
                    hover:bg-blue-600 duration-500'
                >
                    Wyślij wiadomość
                </button>
            </div>
        </form>
    </div>
  );
};

export default Contact;
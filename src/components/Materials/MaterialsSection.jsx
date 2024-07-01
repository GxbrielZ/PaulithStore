import React from 'react';
import Flowers from '../../assets/MineralsSection/Flowers.png';

const MaterialsSection = () => {
  return (
    <div
        className='font-merriweather md:h-[87vh] my-1'
        style={{ backgroundImage: `url(${Flowers})` }}
    >
        <div className='text-yellow-900 md:text-lg w-[90%] md:w-[38%] md:ml-[22%] text-center m-auto'
        >
            <h1 className='pt-10 md:pt-20 text-xl md:text-2xl'>
                Do Tworzenia Biżuterii Używamy Minerałów
            </h1>
            <p className='pt-2'>
                Minerały to klejnoty natury, które skrywają w sobie tysiące lat historii i niepowtarzalne piękno. Każdy z nich, od najdelikatniejszego ametystu po olśniewający diament, nosi w sobie esencję ziemi, jej energię i niezwykłe historie. Te naturalne skarby fascynują nie tylko swoją barwą i blaskiem, ale także unikalnymi właściwościami, które od wieków inspirowały artystów, jubilerów i odkrywców.
            </p>
            <p className='pt-2'>
                Zachwycają nas swoim blaskiem, a ich dotyk przypomina, że piękno przyrody jest nieskończone. Każdy minerał to inna opowieść, odzwierciedlająca siłę żywiołów, które je ukształtowały. Współczesna biżuteria, tworzona z tych wyjątkowych materiałów, staje się nie tylko ozdobą, ale także nośnikiem energii i symboliki, której poszukujemy w codziennym życiu.
            </p>
            <p className='pt-2 pb-10'>
                Wybierając minerały, zbliżamy się do natury, jej majestatu i tajemnic. Niezależnie od tego, czy przyciąga nas ich estetyka, czy metafizyczne właściwości, minerały są nieodłączną częścią naszej kultury i osobistej historii, zachęcając do odkrywania głębszego połączenia z ziemią.
            </p>
        </div>
    </div>
  )
};

export default MaterialsSection;
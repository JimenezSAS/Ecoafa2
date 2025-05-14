import React from 'react'
import ambiente from '../../../assets/logo/ambiente(1).jpg'
import Background from '../../../assets/ProyectosCiviles/Background.jpg'

import Card1 from './CardsPrincipales/Card1';
import Card2 from './CardsPrincipales/Card2';
import Card3 from './CardsPrincipales/Card3';
import Card4 from './CardsPrincipales/Card4';
import Card5 from './CardsPrincipales/Card5';
import Card6 from './CardsPrincipales/Card6';
import Card7 from './CardsPrincipales/Card7';



import { useEffect, useState } from 'react';
const Proyectos = () => {
  // Importa useEffect y useState de React

  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    // Hace que la imagen aparezca después de un pequeño delay
    const timer = setTimeout(() => setShowImage(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="overflow-hidden"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div>
        <img
          src={ambiente}
          className={`mx-auto h-150 w-full object-cover transition-all duration-1000 ease-out ${
            showImage ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
          alt="Logo"
        />
      </div>
      <div className='bg-gradient-to-l from-white-100 to-white-300'>
        <h1 className='flex font-bold text-6xl justify-center p-15 bg-gradient-to-r from-blue-50 to-blue-100'>Conoce nuestros Proyectos</h1>
      </div>
      <div className='flex justify-between flex-wrap bg-gradient-to-l  gap-20'>
        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
        <Card5 />
        <Card6 />
        <Card7 />
      </div>
    </section>
  )
}

export default Proyectos

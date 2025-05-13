import React from 'react'
import ambiente from '../../../assets/logo/ambiente(1).jpg'
import Tarjeta1 from './Tarjeta1'
import Tarjeta2 from './Tarjeta2'
import Tarjeta3 from './Tarjeta3'
const Proyectos = () => {
  return (
    <section className='overflow-hidden  '>
      <div className=''>
       
        <img 
          src={ambiente}
          className="mx-auto h-150 w-full object-cover " 
          alt="Logo"
        />
      </div>
      <div className='bg-gradient-to-l from-green-100 to-green-300'>
        <h1 className=' flex font-bold text-6xl justify-center p-4'>Proyectos</h1>
      </div>
      <div className='flex justify-between flex-wrap bg-gradient-to-l from-green-100 to-green-300'>
       
       
        <Tarjeta1/>
      <Tarjeta2/>
      </div>
      
    </section>
  )
}

export default Proyectos

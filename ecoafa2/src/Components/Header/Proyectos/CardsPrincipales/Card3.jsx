import React from 'react'
import Tetes from '../../../../assets/ProyectosCiviles/Tetes.jpg'
const Card3 = () => {
  return (
    <section className=' flex w-full h-96 p-4'>
      <div className="flex flex-row bg-white/80 rounded-lg shadow-lg  overflow-hidden w-7xl max-h-96 mx-auto my-5 transform hover:scale-105 transition-all duration-500 h-[600px] ">
        <div className="flex-1 bg-cover bg-center" style={{ backgroundImage: `url(${Tetes})` }}></div>
        <div className="flex-2 p-5 flex flex-col justify-between grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">FestiPlanner – Concert Management</h2>
            <p className="text-lg text-gray-600 my-2">Streamline Your Concert Planning with Ease!</p>
            <p className="text-sm text-gray-500">Ultimate concert management with Ruby on Rails and React. Real-time updates, seamless scheduling, and robust ticketing support. Your events, perfectly organized.</p>
          </div>
          <button className="mt-2 bg-blue-800 hover:bg-blue-900/80 text-white hover:text-black/80 px-10 py-3 rounded-r-[2rem] cursor-pointer text-lg transition-all duration-[400ms]">
            See Project
          </button>
        </div>
      </div>
    </section>
  )
}

export default Card3

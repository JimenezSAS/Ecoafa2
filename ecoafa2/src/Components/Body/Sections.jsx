import React from 'react'
import Nosotros6 from '../../assets/images/Nosotros6.jpg'

const Sections = () => {
  return (
    <section className="w-full relative mb-16 mt-10">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${Nosotros6})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.55) blur(1px)',
          zIndex: 0,
        }}
      ></div>
      {/* Capa oscura para mejor contraste */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0097B2]/80 via-white/10 to-[#0097B2]/80 z-10"></div>
      {/* Contenido */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-[350px] py-16 px-4">
        <div className="max-w-3xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-montserrat drop-shadow-lg">
            ECOAFA S.A.S
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 font-medium drop-shadow">
            Somos una organización comprometida con la protección del medio ambiente y el desarrollo sostenible en los sectores forestal, ambiental, sanitario y agropecuario. Desde 2007, trabajamos para ofrecer soluciones integrales que contribuyan a la conservación de los recursos naturales, la restauración de ecosistemas y la mejora de la calidad de vida en comunidades rurales y urbanas.
          </p>
          <button
            onClick={() => {
              const section = document.getElementById('nosotros');
              if (section) section.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-[#0097B2] hover:bg-green-800 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition"
          >
            Nosotros
          </button>
        </div>
      </div>
    </section>
  )
}

export default Sections
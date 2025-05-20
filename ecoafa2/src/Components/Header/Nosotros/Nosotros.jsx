import { FaLocationDot } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

const Nosotros = () => {
  return (
    <div className="bg-gradient-to-br from-[#dce6b6] via-[#ffffff] to-[#edf0e4] min-h-screen">
      {/* Imagen de fondo y título */}
      <div className="bg-[url('./assets/images/Nosotros4.jpg')] bg-cover bg-center w-full h-[50vh] flex items-center justify-center shadow rounded-b-2xl">
        <h1 className="text-6xl md:text-7xl font-montserrat font-bold text-center uppercase tracking-[0.2em] text-[#95B811] drop-shadow-2xl py-6">
          Nosotros
        </h1>
      </div>

      {/* Descripción principal */}
      <p className="bg-white text-gray-800 rounded-xl border border-gray-200 p-8 mt-10 mx-auto shadow text-xl text-justify w-11/12 md:w-3/4 font-sans">
        Somos una organización comprometida con la protección del medio ambiente y el desarrollo sostenible
         en los sectores forestal, ambiental, sanitario y agropecuario. Desde 2007, trabajamos para ofrecer
          soluciones integrales que contribuyan a la conservación de los recursos naturales,
           la restauración de ecosistemas y la mejora de la calidad de vida en comunidades rurales y urbanas. 
           Nuestro equipo está conformado por profesionales especializados que utilizan tecnología de punta
            para garantizar el éxito de cada proyecto, promoviendo prácticas responsables y sostenibles
            para un futuro más verde.
      </p>

      <div>
        {/* Subtítulo */}
        <h2
          className="text-3xl md:text-4xl font-bold text-center mt-16 mb-16 font-montserrat w-full
          bg-white border-l-4 border-green-700 shadow py-6 px-4 rounded-lg
          tracking-wide text-[#95B811]"
        >
          EMPRESA DE CONSULTORÍA Y OBRAS AMBIENTALES, FORESTAL Y AGROPECUARIA
        </h2>
        <h3 className="text-2xl font-semibold text-green-900 text-center mb-16 font-serif tracking-wide">
          CONTACTO
        </h3>

        {/* Sección de contacto SIN sombras y SIN hover */}
       <section className="w-full flex flex-col md:flex-row gap-10 justify-between items-stretch px-4 md:px-20 -mt-12">
          {/* Perfil profesional */}
          <div className="bg-white flex flex-col p-8 rounded-2xl w-full md:w-1/2 border-l-8 border-[#95B811]">
            <p className="text-2xl font-bold text-green-900 mb-2 tracking-wide">
              DIEGO HARLEY BELTRAN JIMÉNEZ
            </p>
            <p className="text-lg text-green-800 font-medium">
              Ingeniero Ambiental<br />
              Especialista en Educación Ambiental<br />
              MSc en Adaptación y Mitigación en Cambio Climático
            </p>
          </div>
          {/* Datos de contacto */}
          <div className="bg-white flex flex-col gap-6 p-8 rounded-2xl w-full md:w-1/2 border-r-8 border-lime-400">
            <div className="flex items-center gap-4 text-green-900 text-xl font-semibold hover:text-green-700 transition-colors duration-200">
              <FaLocationDot size={28} className="text-green-700" />
              CRA 12 # 93 - 78 BOGOTÁ D.C.
            </div>
            <div className="flex items-center gap-4 text-green-900 text-xl font-semibold hover:text-green-700 transition-colors duration-200">
              <IoCallOutline size={28} className="text-green-700" />
              310 879 5727
            </div>
            <div className="flex items-center gap-4 text-green-900 text-xl font-semibold hover:text-green-700 transition-colors duration-200">
              <MdOutlineEmail size={28} className="text-green-700" />
              GERENCIA@ECOAFA.COM
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Nosotros;
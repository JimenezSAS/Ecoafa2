import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
 

const Contacto = () => {

  return (
     <div className="bg-gradient-to-br from-[#dce6b6] via-[#ffffff] to-[#edf0e4] min-h-screen">
      {/* Imagen de fondo y título */}
    <div className="bg-[url('./assets/images/Nosotros2.jpg')] bg-cover bg-center w-full h-[50vh] flex items-center justify-center shadow rounded-b-2xl">
   <h1 className="text-6xl md:text-7xl font-montserrat font-bold text-center uppercase tracking-[0.2em] text-[#0097B2] drop-shadow-2xl py-6">
  Contacto
</h1>
      </div>
       <div className=" w-full max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-lg border border-green-200">
        <iframe 
          title="Ubicación Ecoafa"
          src="https://www.google.com/maps?q=CRA+12+%23+93+-+78+BOGOTÁ+D.C.&output=embed"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    <div className="w-full flex flex-col justify-center items-center py-16 bg-gradient-to-b from-white to-green-50">
      <section className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden border border-green-200">
        {/* Información de contacto */}
        <div className="bg-[#0097B2] text-white flex flex-col justify-center items-start p-10 md:w-1/2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Contáctame</h2>
            <p className="text-lg opacity-90">
              ¿Tienes preguntas o deseas más información? <br />
              ¡Estoy aquí para ayudarte!
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <FaLocationDot size={22} className="text-lime-300" />
              <span className="text-base">CRA 12 # 93 - 78 BOGOTÁ D.C.</span>
            </div>
            <div className="flex items-center gap-3">
              <IoCallOutline size={22} className="text-lime-300" />
              <span className="text-base">310 879 5727</span>
            </div>
            <div className="flex items-center gap-3">
              <MdOutlineEmail size={22} className="text-lime-300" />
              <span className="text-base">GERENCIA@ECOAFA.COM</span>
            </div>
          </div>
        </div>
        {/* Perfil profesional */}
        <div className="flex flex-col justify-center items-start p-10 md:w-1/2 bg-gradient-to-br from-lime-50 via-white to-green-100">
          <p className="text-2xl font-bold text-green-900 mb-2 tracking-wide">
            DIEGO HARLEY BELTRAN JIMÉNEZ
          </p>
          <p className="text-lg text-green-800 font-medium mb-4">
            Ingeniero Ambiental<br />
            Especialista en Educación Ambiental<br />
            MSc en Adaptación y Mitigación en Cambio Climático
          </p>
          <div className="mt-4">
            <a
              href="mailto:GERENCIA@ECOAFA.COM"
              className="inline-block bg-[#0097B2] text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-green-800 transition"
            >
              Enviar correo
            </a>
          </div>
          
        </div>
      </section>
    
     
    </div>
    </div>
    
  )
}


export default Contacto
import React from "react";
import backgroundImage from '../../assets/ProyectosCiviles/Agroforestal.png'; // Importar la imagen con el nuevo nombre

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gradient-to-br from-[#eef2e2] via-[#f8f9fa] to-[#eef2e2] text-center font-montserrat"> {/* Padding py-8 px-4 eliminado */}
      <div
        className=" flex justify-around items-start mb-4 p-8" // Añadido padding y rounded-lg para mejor visualización

        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${backgroundImage})`, // Opacidad añadida aquí
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <section className="flex flex-col items-center  backdrop-blur-sm p-4 rounded-md"> {/* Añadido fondo semitransparente a las secciones para legibilidad */}
          
          <h2 className="text-[#0097B2] text-2xl font-bold mb-2">Ecoafa</h2>
          <ul className="flex flex-col gap-1 text-[#0097B2]">
            <li>Contacto</li>
            <li>Hola</li>
          </ul>
        </section>
        <section className="flex flex-col items-center  backdrop-blur-sm p-4 rounded-md"> {/* Añadido fondo semitransparente a las secciones para legibilidad */}
          <h2 className="text-[#0097B2] text-2xl font-bold mb-2">Ecoafa</h2>
          <ul className="flex flex-col gap-1 text-[#0097B2]">
            <li>Contacto</li>
            <li>Hola</li>
          </ul>
        </section>
      </div>

      <div className="max-w-6xl mx-auto">
        <p className="text-sm text-[#0097B2]">
          &copy; {currentYear} Ecoafa. Todos los derechos reservados.
        </p>

        <p className="mt-2 text-xs text-[#93B611] hover:text-[#0097B2] transition-colors">
          <a href="#top">Volver arriba</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

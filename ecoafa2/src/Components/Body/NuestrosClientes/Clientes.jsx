import React, { useRef } from "react";
import Imagen1 from '../../../assets/Icons/Imagen1.png';
import Imagen2 from '../../../assets/Icons/Imagen2.png';
import Imagen3 from '../../../assets/Icons/Imagen3.png';
import Imagen4 from '../../../assets/Icons/Imagen4.png';
import Imagen5 from '../../../assets/Icons/Imagen5.png';
import Imagen6 from '../../../assets/Icons/Imagen6.png';
import Imagen7 from '../../../assets/Icons/Imagen7.png';
import Imagen8 from '../../../assets/Icons/Imagen8.png';
import Imagen9 from '../../../assets/Icons/Imagen9.png';
import Imagen10 from '../../../assets/Icons/Imagen10.png';
import Imagen11 from '../../../assets/Icons/Imagen11.png';
import Imagen12 from '../../../assets/Icons/Imagen12.png';
import Imagen13 from '../../../assets/Icons/Imagen13.png';
import Imagen14 from '../../../assets/Icons/Imagen14.png';
import Imagen15 from '../../../assets/Icons/Imagen15.png';
import Imagen16 from '../../../assets/Icons/Imagen16.png';
import Imagen17 from '../../../assets/Icons/Imagen17.png';
import Imagen18 from '../../../assets/Icons/Imagen18.png';
import Imagen19 from '../../../assets/Icons/Imagen19.png';
import Imagen21 from '../../../assets/Icons/Imagen21.png';
import Imagen22 from '../../../assets/Icons/Imagen22.png';
import Imagen23 from '../../../assets/Icons/Imagen23.png';



const imagenes = [
  Imagen1, Imagen2, Imagen3, Imagen4, Imagen5, Imagen6, Imagen7, Imagen8, Imagen9, Imagen10, Imagen11, Imagen12,
  Imagen13, Imagen14, Imagen15, Imagen16, Imagen17, Imagen18, Imagen19, Imagen21, Imagen22, Imagen23
];

const Clientes = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full py-16 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-black tracking-wide font-montserrat">
        Nuestros Clientes
      </h2>
      <div className="relative max-w-7xl mx-auto">
        {/* Botón Izquierda */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-black/70 hover:text-white text-green-700 rounded-full p-2 shadow transition z-10"
          aria-label="Anterior"
        >
          <span className="text-2xl font-bold">&lsaquo;</span>
        </button>
        {/* Carrusel */}
        <div
          ref={carouselRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth px-12 py-4"
          style={{ scrollBehavior: "smooth" }}
        >
          {imagenes.map((img, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-40 h-40 md:w-48 md:h-48 bg-white rounded-xl shadow border flex items-center justify-center p-4 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={img}
                alt={`Cliente ${idx + 1}`}
                className="object-contain w-full h-full"
                draggable="false"
              />
            </div>
          ))}
        </div>
        {/* Botón Derecha */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-black/70 hover:text-white text-green-700 rounded-full p-2 shadow transition z-10"
          aria-label="Siguiente"
        >
          <span className="text-2xl font-bold">&rsaquo;</span>
        </button>
      </div>
    </div>
  );
};

export default Clientes;
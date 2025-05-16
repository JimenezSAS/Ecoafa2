import ambiente from '../../../assets/logo/ambiente(1).jpg'
import {proyectosData} from './Data/ProyectosData';
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';


// Componente principal
const Proyectos = () => {
  // Estado para animar la imagen de fondo al cargar
  const [showImage, setShowImage] = useState(false);
  // Estado para saber qué cards están expandidas (array de ids)
  const [expandedIds, setExpandedIds] = useState([]);

  // Efecto para mostrar la imagen de fondo con animación al montar el componente
  useEffect(() => {
    const timer = setTimeout(() => setShowImage(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="overflow-hidden min-h-screen relative bg-gradient-to-br from-[#dce6b6] via-[#ffffff] to-[#edf0e4]">
      {/* Imagen de fondo superior con animación */}
      <div className="w-full relative">
        <img
          src={ambiente}
          className={`w-full h-screen transition-all duration-1000 ease-out  ${
            showImage ? 'opacity-80 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
          alt="Logo"
        />
        {/* Título centrado sobre la imagen */}
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-36 t</div>ext-6xl md:text-7xl font-montserrat font-bold text-center uppercase tracking-[0.2em] text-[#0097B2] drop-shadow-2xl z-20">
         Nuestros Proyectos y experiencia
        </h1>
      </div>

      {/* Grilla de proyectos */}
      <div className="w-full flex justify-center items-center py-16 px-4">
        <div className="relative w-full max-w-6xl">
          <div className="grid grid-}cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full relative z-20">
            {proyectosData.map((proyecto) => {
              // Saber si esta card está expandida y si hay alguna expandida
              const isExpanded = expandedIds.includes(proyecto.id);
              const isAnyExpanded = expandedIds.length > 0;
              return (
                <div key={proyecto.id} className="relative">
                  {/* Card normal */}
                  <div
                    className={`
                      relative rounded-xl cursor-pointer overflow-hidden transition-all duration-500
                      bg-white
                       shadow-lg shadow-[#0092B2]/30
                      hover:shadow-2xl hover:shadow-[#0092B2]/50
                      ${isAnyExpanded && !isExpanded ? 'filter blur-lg opacity-40 pointer-events-none' : ''}
                    `}
                    onClick={() => {
                      // Al hacer click, expande la card (agrega su id al array)
                      if (!isExpanded) setExpandedIds(ids => [...ids, proyecto.id]);
                    }}
                  >
                    <div
                      className="w-full h-56 bg-cover bg-center rounded-t-xl p-0"
                      style={{ backgroundImage: `url(${proyecto.imagen})` }}
                    ></div>
                    <div className="p-6 w-full flex flex-col items-start">
                      <h2 className="text-2xl font-bold mb-4 text-[#0092B2]">{proyecto.titulo}</h2>
                      <p className="text-black mb-4">{proyecto.descripcion}</p>
                      <button
                        className={`px-6 py-2 font-semibold mt-2 rounded bg-[#93B611] text-white hover:bg-[#0092B2] hover:text-white transition-colors duration-200 shadow`}
                      >
                        ACCEDER
                      </button>
                    </div>
                  </div>
                  {/* Card expandida (usando portal para centrar en pantalla) */} 
                  {isExpanded && ReactDOM.createPortal(
                    <div
                      className="fixed inset-0 flex items-center justify-center z-[100]"
                      style={{ pointerEvents: 'auto' }}
                    >
                      {/* Fondo oscuro detrás de la card expandida */}
                      <div
                        className="absolute inset-0 bg-black/30 transition-opacity duration-300"
                        onClick={() =>
                          setExpandedIds(ids => ids.filter(id => id !== proyecto.id))
                        }
                      />
                      {/* Card expandida, más grande y centrada */}
                      <div
                        className="relative rounded-xl shadow-2xl bg-white border-2 border-[#0092B2] flex flex-col items-center justify-center p-0 w-[90vw] max-w-5xl min-h-[450px] transition-all duration-500 scale-105 shadow-[#93B611]/50"
                        onClick={e => e.stopPropagation()}
                      >
                        <div
                          className="w-full h-96 bg-cover bg-center rounded-xl p-0"
                          style={{ backgroundImage: `url(${proyecto.imagen})` }}
                        ></div>
                        <div className="p-6 w-full flex flex-col items-center">
                          <h2 className="text-2xl font-bold mb-4 text-[#0092B2]">{proyecto.titulo}</h2>
                          <p className="text-black mb-4">{proyecto.descripcion}</p>
                          <div className="text-[#0092B2] mb-6">{proyecto.detalles}</div>
                          {/* Botón para cerrar la card expandida */}
                          <button
                            className="absolute top-4 right-4 bg-[#93B611] rounded-full p-2 hover:bg-[#0092B2] transition"
                            onClick={() =>
                              setExpandedIds(ids => ids.filter(id => id !== proyecto.id))
                            }
                            aria-label="Cerrar"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>,
                    document.body
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Proyectos

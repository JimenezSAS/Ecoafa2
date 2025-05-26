import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {Slide} from './Slide';
import imgAmbiental from '../../assets/images/Desarrollo_ambiental1.png';
import imgAmbiental2 from '../../assets/images/Desarrollo_ambiental2.png';
import desarrolloAmbiental from '../../assets/images/Nosotros2.jpg';
import forestal from '../../assets/images/forestal.jpg';
import Agropecuario from '../../assets/images/agropecuario.jpg';
import Territorio from '../../assets/images/territorio.jpg';
import Forestal1 from '../../assets/images/Forestal1.png';
import Forestal2 from '../../assets/images/Forestal2.png';
import Agropecuario1 from '../../assets/images/Agropecuario1.png';
import Territorial1 from '../../assets/images/Territorial1.png';
import Clientes from './Clientes'
import Sections from './Sections';

// Ejemplo de logos de clientes (puedes reemplazar las URLs por tus imágenes)
const clientes = [
  { nombre: 'Empresa 1', logo: '/assets/clientes/cliente1.png' },
  { nombre: 'Empresa 2', logo: '/assets/clientes/cliente2.png' },
  { nombre: 'Empresa 3', logo: '/assets/clientes/cliente3.png' },
  { nombre: 'Empresa 4', logo: '/assets/clientes/cliente4.png' },
];

const enfoques = [
  {
    titulo: 'DESARROLLO AMBIENTAL',
    descripcion: 'Servicios de gestión ambiental, estudios de impacto, licencias, monitoreo y cumplimiento normativo para proyectos sostenibles.',
    imagen: desarrolloAmbiental, // Imagen de fondo
    imgExtra: [imgAmbiental, imgAmbiental2] // Imágenes extra para el modal
  },
  {
    titulo: 'DESARROLLO FORESTAL',
    descripcion: 'Manejo y conservación de recursos forestales, reforestación, planes de manejo y certificaciones ambientales.',
    imagen: forestal,
    imgExtra: [Forestal1, Forestal2],
  },
  {
    titulo: 'DESARROLLO TERRITORIAL',
    descripcion: 'Ordenamiento territorial, planificación urbana y rural, gestión de suelos y asesoría en políticas públicas.',
    imagen: Territorio,
    imgExtra: Territorial1,
  },
  {
    titulo: 'DESARROLLO AGROPECUARIO',
    descripcion: 'Asesoría técnica, implementación de buenas prácticas agrícolas y pecuarias, y proyectos de sostenibilidad rural.',
    imagen: Agropecuario,
    imgExtra: Agropecuario1,
  },
];

const Body = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState({});
  const [imgIndex, setImgIndex] = useState(0);

  const handleOpenModal = (enfoque) => {
    setModalInfo(enfoque);
    setImgIndex(0); 
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setModalInfo({});
  };

  const handleNextImage = (e) => {
    e.stopPropagation(); // Evita que el click cierre el modal
    if (Array.isArray(modalInfo.imgExtra)) {
      setImgIndex((prev) => (prev + 1) % modalInfo.imgExtra.length);
    }
  };

  // Modal usando ReactDOM.createPortal
  const modal = modalOpen
    ? ReactDOM.createPortal(
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={handleCloseModal}
        >
          <div
            className="relative w-full h-full flex items-center justify-center"
            
          >
            {/* Imagen extra formato de bordes*/}
            {modalInfo.imgExtra && (
              <img
                src={Array.isArray(modalInfo.imgExtra) ? modalInfo.imgExtra[imgIndex] : modalInfo.imgExtra}
                alt={modalInfo.titulo}
                className="w-full h-full object-contain"
                style={{ maxHeight: '90vh', maxWidth: '100vw' }}
              />
            )}
            {/* Botón cerrar imgextra */}
            <button
              className="absolute top-8 right-10 text-4xl text-white hover:text-[#95B811] font-bold z-40"
              onClick={handleCloseModal}
              aria-label="Cerrar"
              style={{
                background: 'rgba(0,0,0,0.4)',
                borderRadius: '50%',
                width: 48,
                height: 48,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                padding: 0,
              }}
            >
              ×
            </button>
            {/* Flecha para cambiar imagen superpuesta */}
            {Array.isArray(modalInfo.imgExtra) && modalInfo.imgExtra.length > 1 && (
              <button
                className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-white/60 hover:bg-green-200/70 text-green-800 rounded-full p-3 shadow-lg transition z-40"
                style={{ backdropFilter: 'blur(2px)' }}
                onClick={handleNextImage}
                aria-label="Siguiente imagen"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>
        </div>,
        document.body
      )
    : null;

  return (
    <div className="bg-gradient-to-br from-[#dce6b6] via-[#ffffff] to-[#edf0e4] min-h-screen py-10 px-4">
      {/* Slide principal */}
      <div className="max-w-5xl mx-auto mb-16">
        <Slide />
      </div>

      {/* Servicios */}
      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-4xl font-bold text-center text-green-800 mb-6">Servicios</h2>
        <p className="text-lg text-center text-gray-700 mb-10">
          Los servicios que ofrece <span className="font-semibold text-green-700">ECOAFA S.A.S
          </span> se encuentran en el marco de la normatividad ambiental vigente, enfocados al desarrollo sostenible y a la responsabilidad social.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {enfoques.map((enfoque, idx) => (
            <div
              key={enfoque.titulo}
              className="relative rounded-2xl shadow-lg border border-green-200 overflow-hidden h-64 flex flex-col cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              onClick={() => handleOpenModal(enfoque)}
            >
              {/* Imagen principal */}
              <div
                className="w-full"
                style={{
                  backgroundImage: `url(${enfoque.imagen})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center top',
                  height: '50%',
                  minHeight: 0,
                }}
              />
              {/* Contenido de texto en la mitad inferior */}
              <div className="w-full bg-white/80 p-6 flex-1 flex flex-col items-center justify-center h-1/2">
                {enfoque.imgTop && (
                  <img
                    src={enfoque.imgTop}
                    alt={enfoque.titulo}
                    className="w-20 h-20 object-cover rounded-full mb-3 shadow"
                    style={{
                      border: '3px solid #0097B2',
                      background: '#fff',
                      marginTop: '-3.5rem',
                      marginBottom: '1rem',
                      zIndex: 2,
                      position: 'relative'
                    }}
                  />
                )}
                <h3 className="text-2xl font-semibold text-green-900 mb-2">{enfoque.titulo}</h3>
                <p className="text-gray-700">{enfoque.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal*/}
      {modal}
      
      {/* Sección de Nosotros */}
      <div>
        <Sections />
      </div>

     {/* Nuestros Clientes */}
<section className="max-w-7xl mx-auto mt-20">
  <Clientes />
</section>
    </div>
  );
};

export default Body;
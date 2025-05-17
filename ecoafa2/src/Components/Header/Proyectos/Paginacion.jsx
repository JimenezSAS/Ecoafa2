import React from "react";

const Paginacion = ({ total, porPagina, paginaActual, setPaginaActual }) => {
  const totalPaginas = Math.ceil(total / porPagina);
  if (totalPaginas <= 1) return null;

  const paginas = [];
  for (let i = 1; i <= totalPaginas; i++) {
    paginas.push(i);
  }

  return (
    <div className="flex justify-center items-center gap-2 mt-8 select-none">
      {paginas.map((num) => (
        <button
          key={num}
          className={`px-2 text-lg ${
            paginaActual === num
              ? "text-[#0092B2] font-bold underline"
              : "text-[#0092B2] hover:underline"
          }`}
          onClick={() => setPaginaActual(num)}
        >
          {num}
        </button>
      ))}
      {paginaActual < totalPaginas && (
        <button
          className="ml-2 text-[#0092B2] hover:underline"
          onClick={() => setPaginaActual(paginaActual + 1)}
        >
          Siguiente
        </button>
      )}
    </div>
  );
};

export default Paginacion;
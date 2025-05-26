import React, { useState } from 'react';

const Formulario = () => {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    e.target.reset();
    setTimeout(() => setEnviado(false), 3000);
  };

  return (
    <div className="w-full px-6 py-8 bg-white rounded-2xl shadow-lg mt-8 border border-green-100">
      <h3 className="text-2xl font-bold text-green-900 mb-6">Envíanos tu consulta</h3>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row gap-5">
          <input
            type="text"
            name="nombre"
            required
            placeholder="Nombre completo"
            className="flex-1 border border-green-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-300"
          />
          <input
            type="email"
            name="correo"
            required
            placeholder="Correo electrónico"
            className="flex-1 border border-green-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>
        <input
          type="text"
          name="asunto"
          required
          placeholder="Asunto"
          className="border border-green-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-300"
        />
        <textarea
          name="mensaje"
          required
          placeholder="Escribe tu mensaje..."
          rows={4}
          className="border border-green-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-300 resize-none"
        ></textarea>
        <button
          type="submit"
          className="self-end bg-[#0097B2] hover:bg-green-800 text-white font-semibold px-8 py-2 rounded-full shadow transition"
        >
          Enviar consulta
        </button>
        {enviado && (
          <div className="text-green-700 font-semibold mt-2">¡Consulta enviada correctamente!</div>
        )}
      </form>
    </div>
  );
};

export default Formulario;
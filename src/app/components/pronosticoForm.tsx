"use client";

import { useRef, useState } from "react";
import axios, { Axios } from "axios";

function PronosticoForm() {
  const [pronostico, setPronostico] = useState({
    usuario_id: 8,
    partido_id: 24,
    goles_local: 0,
    goles_visitante: 500,
  });

  const form = useRef<HTMLFormElement>(null)

  const handleChange = (e: any) => {
    setPronostico({
      ...pronostico,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const rest = await axios.post('/api/pronosticos', pronostico)
    console.log(rest);
    form.current?.reset()
  }

  return (
    <form className="bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4"
    onSubmit={handleSubmit}
    ref={form}
    >
      <label
        htmlFor="user"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        Usuario
      </label>
      <input
        type="number"
        name="usuario"
        placeholder="usuario"
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
      />

      <label
        htmlFor="partido"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        Partido
      </label>
      <input
        type="number"
        name="partido"
        placeholder="partido"
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
      />

      <label
        htmlFor="equipo_local"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        Equipo Local
      </label>
      <input
        type="number"
        name="equipo_local"
        placeholder="equipo_local"
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
      />

      <label
        htmlFor="equipo_visitante"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        Equipo Visitante
      </label>
      <input
        type="number"
        name="equipo_visitante"
        placeholder="equipo_visitante"
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
      />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Save pronostico
      </button>
    </form>
  );
}

export default PronosticoForm;

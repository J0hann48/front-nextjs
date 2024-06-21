"use client"

import { useState } from "react";
function PronosticoForm() {

    const [pronostico, setPronostico] = useState({
        user: 0,
        partido: 0,
        equipo_local: 0,
        equipo_visitante: 0
    })  

    const handleChange = (e: any) =>{
        console.log(e)
    }
    return (
        <form className="bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4">
            <label htmlFor="user"
                className="block text-gray-700 text-sm font-bold mb-2"
            >Usuario</label>
            <input type="number" placeholder="usuario" onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 "
             />

            <label htmlFor="partido"
                className="block text-gray-700 text-sm font-bold mb-2"
            >Partido</label>
            <input type="number" placeholder="partido" onChange={handleChange} />

            <label htmlFor="equipo_local"
                className="block text-gray-700 text-sm font-bold mb-2"
            >Equipo Local</label>
            <input type="number" placeholder="equipo_local" onChange={handleChange} />

            <label htmlFor="equipo_visitante"
                className="block text-gray-700 text-sm font-bold mb-2"
            >Equipo Visitante</label>
            <input type="number" placeholder="equipo_visitante" onChange={handleChange} />
        </form>
    );
}

export default PronosticoForm
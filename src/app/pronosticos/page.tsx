import axios, { Axios } from "axios";
const { db } = require("@vercel/postgres");

async function loadPronosticos() {
  const {data} = await axios.get("http://localhost:3000/api/pronosticos");
  return data;
}

async function PronosticosPage() {
    const result = await loadPronosticos();
  return <div className=" relative  flex w-full flex-col shadow-lg mb-6 text-white">
    <table className=" w-auto      
      text-center
      ">
      <thead>
        <tr className="border border-solid border-l-0">
          <th className="text-md px-6 py-3 border border-slate-600">Usuario</th>
          <th className="text-md px-6 py-3 border border-slate-600">Equipo Local</th>
          <th className="text-md px-6 py-3 border border-slate-600">Goles Local</th>
          <th className="text-md px-6 py-3 border border-slate-600">Equipo Visitante</th>
          <th className="text-md px-6 py-3 border border-slate-600">Goles Visitante</th>
        </tr>
      </thead>
      <tbody>
      {result['message'].map((_pronostico: any) => (
        <tr key={_pronostico.id}>
          <td className="text-md px-6 py-3 border border-slate-700">{_pronostico.usuario}</td>
          <td className="text-md px-6 py-3 border border-slate-700">{_pronostico.equipo_local}</td>
          <td className="text-md px-6 py-3 border border-slate-700">{_pronostico.goles_local}</td>
          <td className="text-md px-6 py-3 border border-slate-700">{_pronostico.equipo_visitante}</td>
          <td className="text-md px-6 py-3 border border-slate-700">{_pronostico.goles_visitante}</td>
        </tr>
    ))}
      </tbody>
    </table>
  </div>;
}

export default PronosticosPage;

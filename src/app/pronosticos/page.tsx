import axios, { Axios } from "axios";
const { db } = require("@vercel/postgres");

async function loadPronosticos() {
  const {data} = await axios.get("http://localhost:3000/api/pronosticos");
  return data;
}

async function PronosticosPage() {
    const result = await loadPronosticos();
  return <div className="text-white">
    {result['message'].map((_partido: any) => (
        <div key={_partido.id}>
            <h1>{_partido.usuario_id}</h1>
        </div>
    ))}
  </div>;
}

export default PronosticosPage;

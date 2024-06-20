import { sql } from "@vercel/postgres";
import { Partidos } from "./definitions";

export async function fetchPartidos() {
    try {
        const data = await sql<Partidos>`
        SELECT         
        el.nombre AS equipo_local,
        ev.nombre AS equipo_visitante,
        p.fecha,
        p.goles_local,
        p.goles_visitante,
        p.fase
    FROM 
        partidos p
    JOIN 
        equipos el ON p.equipo_local_id = el.id
    JOIN 
        equipos ev ON p.equipo_visitante_id = ev.id;
      `;

        const partidos = data.rows;
        return partidos;
    } catch (err) {
        console.error('Database Error:', err);
        throw new Error('Failed to fetch all partidos.');
    }
}
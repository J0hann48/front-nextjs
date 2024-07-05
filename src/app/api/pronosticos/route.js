import { NextResponse } from "next/server";
const { db } = require('@vercel/postgres');


export async function GET() {
    try {
        const client = await db.connect();
        const result = await client.sql`SELECT 
    p.id,
    u.name AS usuario,
	e1.nombre AS equipo_local,
    p.goles_local,
	e2.nombre AS equipo_visitante,
    p.goles_visitante,
    pa.fase
FROM 
    pronosticos p
JOIN 
    users u ON p.usuario_id = u.id
JOIN 
    partidos pa ON p.partido_id = pa.id
JOIN 
    equipos e1 ON pa.equipo_local_id = e1.id
JOIN 
    equipos e2 ON pa.equipo_visitante_id = e2.id`
        await client.end();
        return NextResponse.json({ message: result['rows']})
    } catch (error) {
        await client.end();
        return NextResponse.json(
            {
                message: error.message
            },
            {
                status: 500
            }
        );
    }
}

export async function POST(request) {
    try {
        const dateNow = new Date();
        const {usuario_id, partido_id, goles_local, goles_visitante } = await request.json();
        const client = await db.connect();
        const result = await client.sql`INSERT INTO pronosticos (usuario_id, partido_id, goles_local, goles_visitante, fecha_pronostico)
        VALUES (${usuario_id}, ${partido_id}, ${goles_local}, ${goles_visitante}, ${dateNow});`
        await client.end();
        return NextResponse.json('Pronosticos creado')
    } catch (error) {
        await client.end();
        return NextResponse.json(
            {
                message: error.message
            },
            {
                status: 500
            }
        );
    }
}
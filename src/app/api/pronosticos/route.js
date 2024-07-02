import { NextResponse } from "next/server";
const { db } = require('@vercel/postgres');


export async function GET() {
    try {
        const client = await db.connect();
        const result = await client.sql`SELECT * from pronosticos`
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
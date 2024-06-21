import { NextResponse } from "next/server";
const { db } = require('@vercel/postgres');
export async function GET() {
    const client = await db.connect();  
    const result = await client.sql`SELECT now()`
    console.log(result['rows'])      
    await client.end();
    return NextResponse.json({message: result['rows'][0]['now']})
}

export async function POST(request) {
    const {id, usuario_id, partido_id, goles_local, goles_visitante, fecha_pronostico} = await request.json();
    const client = await db.connect();      
    const result = await client.query(
        "INSERT INTO pronosticos SET ?", {
            id,
            usuario_id,
            partido_id,
            goles_local,
            goles_visitante,
            fecha_pronostico            
        }
    );
    console.log(result)
    await client.end();
    return NextResponse.json('Creando pronosticos')
}
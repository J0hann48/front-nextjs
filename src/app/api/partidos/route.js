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
    const data = await request.json()
    console.log(data)
    return NextResponse.json('Creando resultados')
}


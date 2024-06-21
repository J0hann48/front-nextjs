import { NextResponse } from "next/server";
const { db } = require('@vercel/postgres');


export async function GET(request, { params }) {
    try {
        const client = await db.connect();
        const result = await client.sql`SELECT * from pronosticos where usuario_id = ${params.id}`
        if (result.rows.length === 0) {
            return NextResponse.json(
                {
                    message: "Pronostico no encontrado",
                },
                {
                    status: 404
                }
            )
        }
        console.log(result)
        await client.end();
        return NextResponse.json({ message: result['rows'] })
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

export async function DELETE(request, { params }) {
    try {
        const client = await db.connect();
        const result = await client.sql`DELETE * from pronosticos where id = ${params.id}`
        if (result.rows.length === 0) {
            return NextResponse.json(
                {
                    message: "Pronostico no encontrado",
                },
                {
                    status: 404
                }
            )
        }
        console.log(result)
        await client.end();
        return new Response(null, {
            status: 204
        })
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

export async function PUT(request, { params }) {
    try {
        const data = await request.json()
        const client = await db.connect();
        const result = await client.sql`UPDATE pronosticos SET partido_id=${data.partido_id}, goles_local=${data.goles_local}, goles_visitante=${data.goles_visitante},
            fecha_pronostico= (SELECT now()) WHERE usuario_id=${params.id} and partido_id=${data.partido_id};`
        if (result.rowCount === 0) {
            return NextResponse.json(
                {
                    message: "Pronostico no encontrado",
                },
                {
                    status: 404
                }
            )
        }
        const findById = await client.sql`SELECT * from pronosticos where usuario_id = ${params.id} and partido_id=${data.partido_id}`        
        console.log(findById)

        await client.end();
        return NextResponse.json(findById['rows'])
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
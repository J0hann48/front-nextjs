import { NextResponse } from "next/server";
export function GET() {
    return NextResponse.json({meesage: "Partidos"})
}

export function POST() {
    return NextResponse.json('Modificando resultados')
}


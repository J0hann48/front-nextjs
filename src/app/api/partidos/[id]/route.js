import { NextResponse } from "next/server";
export function GET() {
    return NextResponse.json({meesage: "Partidos by id"})
}
export async function PUT(request) {
    const data = await request.json()
    console.log(data)
    return NextResponse.json({meesage: "Partidos update"})
}
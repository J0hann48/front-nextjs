import { NextResponse } from "next/server";
export function GET() {
    return NextResponse.json({meesage: "Partidos by id"})
}
export function PUT() {
    return NextResponse.json({meesage: "Partidos update"})
}
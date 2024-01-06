import { NextRequest, NextResponse } from "next/server.js";

export async function GET(request) {
  const name = "vishal";
  return NextResponse.json(name);
}

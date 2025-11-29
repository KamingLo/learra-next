import { NextResponse } from "next/server";

export async function GET() {
  try {
    const baseUrl = process.env.API_BASE_URL!;
    const apiKey = process.env.API_KEY!;

    const response = await fetch(`${baseUrl}/produk?limit=6`, {
      headers: { "api-key": apiKey },
      cache: "no-store",
    });

    const result = await response.json();

    return NextResponse.json(result, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}

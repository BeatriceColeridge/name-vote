import { NextResponse } from "next/server";

const DASHBOARD_API = "https://base-dashboard-zeta.vercel.app/api/track";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const response = await fetch(DASHBOARD_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      cache: "no-store",
    });

    return NextResponse.json({ ok: response.ok }, { status: response.ok ? 200 : 502 });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

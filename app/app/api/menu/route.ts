import { NextResponse } from "next/server";

import { buildMenuResponse } from "@/lib/menu-data";

export async function GET() {
  return NextResponse.json(
    {
      ok: true,
      source: "local-seed",
      data: buildMenuResponse(),
    },
    { status: 200 },
  );
}

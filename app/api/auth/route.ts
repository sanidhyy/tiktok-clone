import { NextRequest, NextResponse } from "next/server";

import { client } from "@/utils/client";

export async function POST(req: NextRequest) {
  const user = await req.json();
  await client.createIfNotExists(user);
  return NextResponse.json("Login success");
}

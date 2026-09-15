import { NextRequest, NextResponse } from "next/server";

import { client } from "@/utils/client";
import { allPostsQuery } from "@/utils/queries";

export async function GET() {
  const data = await client.fetch(allPostsQuery());
  return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
  const document = await req.json();
  await client.create(document);
  return NextResponse.json("Video Created", { status: 201 });
}

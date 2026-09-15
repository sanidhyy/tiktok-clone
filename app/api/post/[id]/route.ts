import { NextRequest, NextResponse } from "next/server";

import { client } from "@/utils/client";
import { postDetailQuery } from "@/utils/queries";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const data = await client.fetch(postDetailQuery(id));
  return NextResponse.json(data[0]);
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const { comment, userId } = await req.json();

  const data = await client
    .patch(id)
    .setIfMissing({ comments: [] })
    .insert("after", "comments[-1]", [
      {
        comment,
        _key: crypto.randomUUID(),
        postedBy: { _type: "postedBy", _ref: userId },
      },
    ])
    .commit();

  return NextResponse.json(data);
}

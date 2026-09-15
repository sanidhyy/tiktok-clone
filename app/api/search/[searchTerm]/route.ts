import { NextRequest, NextResponse } from "next/server";

import { searchPostsQuery } from "../../../../utils/queries";
import { client } from "../../../../utils/client";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ searchTerm: string }> },
) {
  const { searchTerm } = await params;
  const videos = await client.fetch(searchPostsQuery(searchTerm));
  return NextResponse.json(videos);
}

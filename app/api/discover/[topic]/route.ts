import { NextRequest, NextResponse } from "next/server";

import { topicPostsQuery } from "../../../../utils/queries";
import { client } from "../../../../utils/client";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ topic: string }> },
) {
  const { topic } = await params;
  const videos = await client.fetch(topicPostsQuery(topic));
  return NextResponse.json(videos);
}

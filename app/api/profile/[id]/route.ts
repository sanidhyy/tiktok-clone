import { NextRequest, NextResponse } from "next/server";

import {
  singleUserQuery,
  userCreatedPostsQuery,
  userLikedPostsQuery,
} from "@/utils/queries";
import { client } from "@/utils/client";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const [user, userVideos, userLikedVideos] = await Promise.all([
    client.fetch(singleUserQuery(id)),
    client.fetch(userCreatedPostsQuery(id)),
    client.fetch(userLikedPostsQuery(id)),
  ]);

  return NextResponse.json({
    user: user[0],
    userVideos,
    userLikedVideos,
  });
}

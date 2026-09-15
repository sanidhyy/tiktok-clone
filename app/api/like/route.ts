import { NextRequest, NextResponse } from "next/server";

import { client } from "../../../utils/client";

export async function PUT(req: NextRequest) {
  const { userId, postId, like } = await req.json();

  const data = like
    ? await client
        .patch(postId)
        .setIfMissing({ likes: [] })
        .insert("after", "likes[-1]", [
          {
            _key: crypto.randomUUID(),
            _ref: userId,
          },
        ])
        .commit()
    : await client.patch(postId).unset([`likes[_ref=="${userId}"]`]).commit();

  return NextResponse.json(data);
}

import type { NextApiRequest, NextApiResponse } from "next";

import { client } from "../../../utils/client";
import { postDetailQuery, queryParam } from "../../../utils/queries";

// Post
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    // fetch a post details
    const { id } = req.query;
    const query = postDetailQuery(id);

    const data = await client.fetch(query);

    res.status(200).json(data[0]);
  } else if (req.method === "PUT") {
    // insert comments
    const { comment, userId } = req.body;
    const { id } = req.query;

    const data = await client
      .patch(queryParam(id))
      .setIfMissing({ comments: [] })
      .insert("after", "comments[-1]", [
        {
          comment: comment,
          _key: crypto.randomUUID(),
          postedBy: { _type: "postedBy", _ref: userId },
        },
      ])
      .commit();

    res.status(200).json(data);
  }
}

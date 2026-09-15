import { NextResponse } from "next/server";

import { allUsersQuery } from "../../../utils/queries";
import { client } from "../../../utils/client";

export async function GET() {
  const data = await client.fetch(allUsersQuery());
  return NextResponse.json(data ?? []);
}

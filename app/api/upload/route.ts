import { NextRequest, NextResponse } from "next/server";

import { client } from "@/utils/client";

const FILE_TYPES = ["video/mp4", "video/webm", "video/ogg"];

export const maxDuration = 60;

export async function POST(req: NextRequest) {
  let formData: FormData;
  try {
    formData = await req.formData();
  } catch {
    return NextResponse.json({ message: "No file provided" }, { status: 400 });
  }

  const file = formData.get("file");

  if (!(file instanceof File)) {
    return NextResponse.json({ message: "No file provided" }, { status: 400 });
  }

  if (!FILE_TYPES.includes(file.type)) {
    return NextResponse.json(
      { message: "Please select a video file." },
      { status: 400 },
    );
  }

  const asset = await client.assets.upload("file", file, {
    contentType: file.type,
    filename: file.name,
  });

  return NextResponse.json({ _id: asset._id, url: asset.url });
}

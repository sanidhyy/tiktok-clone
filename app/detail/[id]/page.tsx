import DetailClient from "./detail-client";
import { client } from "../../../utils/client";
import { postDetailQuery } from "../../../utils/queries";

export const dynamic = "force-dynamic";

export default async function DetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = await client.fetch(postDetailQuery(id));
  return <DetailClient postDetails={data[0]} />;
}

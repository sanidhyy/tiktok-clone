import SearchClient from "./search-client";
import { Video } from "@/types";
import { client } from "@/utils/client";
import { searchPostsQuery } from "@/utils/queries";

export const dynamic = "force-dynamic";

export default async function SearchPage({
  params,
}: {
  params: Promise<{ searchTerm: string }>;
}) {
  const { searchTerm } = await params;
  const videos: Video[] = await client.fetch(searchPostsQuery(searchTerm));
  return <SearchClient videos={videos} searchTerm={searchTerm} />;
}

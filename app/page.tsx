import NoResults from "../components/NoResults";
import VideoCard from "../components/VideoCard";
import { Video } from "../types";
import { client } from "../utils/client";
import { allPostsQuery, topicPostsQuery } from "../utils/queries";

export const dynamic = "force-dynamic";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ topic?: string }>;
}) {
  const { topic } = await searchParams;
  const videos: Video[] = topic
    ? await client.fetch(topicPostsQuery(topic))
    : await client.fetch(allPostsQuery());

  return (
    <div className="flex flex-col gap-10 videos h-full">
      {videos.length ? (
        videos.map((video: Video) => <VideoCard post={video} key={video._id} />)
      ) : (
        <NoResults text={`No Videos`} />
      )}
    </div>
  );
}

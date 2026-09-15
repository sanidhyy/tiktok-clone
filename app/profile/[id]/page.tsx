import ProfileClient from "./profile-client";
import { IUser, Video } from "@/types";
import { client } from "@/utils/client";
import {
  singleUserQuery,
  userCreatedPostsQuery,
  userLikedPostsQuery,
} from "@/utils/queries";

export const dynamic = "force-dynamic";

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const [user, userVideos, userLikedVideos] = await Promise.all([
    client.fetch(singleUserQuery(id)),
    client.fetch(userCreatedPostsQuery(id)),
    client.fetch(userLikedPostsQuery(id)),
  ]);

  const data = {
    user: user[0] as IUser,
    userVideos: userVideos as Video[],
    userLikedVideos: userLikedVideos as Video[],
  };

  return <ProfileClient data={data} />;
}

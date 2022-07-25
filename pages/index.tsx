import axios from "axios";

import NoResults from "../components/NoResults";
import VideoCard from "../components/VideoCard";
import { Video } from "../types";
import { BASE_URL } from "../utils";

// Props interface
interface IProps {
  videos: Video[];
}

// Home
const Home = ({ videos }: IProps) => {
  return (
    <div className="flex flex-col gap-10 videos h-full">
      {videos.length ? (
        // Video
        videos.map((video: Video) => <VideoCard post={video} key={video._id} />)
      ) : (
        // No Videos
        <NoResults text={`No Videos`} />
      )}
    </div>
  );
};

// get server side props
export const getServerSideProps = async ({
  query: { topic },
}: {
  query: { topic: string };
}) => {
  let response = null;
  // fetch post
  if (topic) {
    response = await axios.get(`${BASE_URL}/api/discover/${topic}`);
  } else {
    response = await axios.get(`${BASE_URL}/api/post`);
  }
  return {
    props: {
      videos: response.data,
    },
  };
};

export default Home;

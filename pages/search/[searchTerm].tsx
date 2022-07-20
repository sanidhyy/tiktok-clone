import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GoVerified } from "react-icons/go";
import axios from "axios";
import { useRouter } from "next/router";

import VideoCard from "../../components/VideoCard";
import NoResults from "../../components/NoResults";
import { IUser, Video } from "../../types";
import { BASE_URL } from "../../utils";
import useAuthStore from "../../store/authStore";

const Search = ({ videos }: { videos: Video[] }) => {
  const [accounts, setAccounts] = useState(false);
  const router = useRouter();
  const { searchTerm } = router.query;

  const isAccounts = accounts ? "border-b-2 border-black" : "text-gray-400";
  const isVideos = !accounts ? "border-b-2 border-black" : "text-gray-400";
  return (
    <div className="w-full">
      <div className="flex gap-10 mb-10 mt-10 border-b-2 border-gray-200 bg-white w-full">
        <p
          className={`text-xl font-semibold cursor-pointer mt-2 ${isVideos}`}
          onClick={() => setAccounts(false)}
        >
          Videos
        </p>
        <p
          className={`text-xl font-semibold cursor-pointer mt-2 ${isAccounts}`}
          onClick={() => setAccounts(true)}
        >
          Accounts
        </p>
      </div>
      {accounts ? (
        <div>ACCOUNTS</div>
      ) : (
        <div className="md:mt-16 flex flex-wrap gap-6 md:justify-start">
          {videos?.length ? (
            videos.map((video: Video, idx: number) => (
              <VideoCard post={video} key={idx} />
            ))
          ) : (
            <NoResults text={`No Video results for ${searchTerm}`} />
          )}
        </div>
      )}
    </div>
  );
};

export const getServerSideProps = async ({
  params: { searchTerm },
}: {
  params: { searchTerm: string };
}) => {
  const res = await axios.get(`${BASE_URL}/api/search/${searchTerm}`);

  return {
    props: {
      videos: res.data,
    },
  };
};

export default Search;

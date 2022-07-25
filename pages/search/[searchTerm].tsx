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

// Search
const Search = ({ videos }: { videos: Video[] }) => {
  const [accounts, setAccounts] = useState(false);
  const router = useRouter();
  const { searchTerm }: any = router.query;
  const { allUsers } = useAuthStore();

  // account/video styles
  const isAccounts = accounts ? "border-b-2 border-black" : "text-gray-400";
  const isVideos = !accounts ? "border-b-2 border-black" : "text-gray-400";

  // searched accounts
  const searchedAccounts = allUsers.filter((user: IUser) =>
    user.userName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full">
      <div className="flex gap-10 mb-10 mt-10 border-b-2 border-gray-200 bg-white w-full">
        {/* Videos */}
        <p
          className={`text-xl font-semibold cursor-pointer mt-2 ${isVideos}`}
          onClick={() => setAccounts(false)}
        >
          Videos
        </p>
        {/* Accounts */}
        <p
          className={`text-xl font-semibold cursor-pointer mt-2 ${isAccounts}`}
          onClick={() => setAccounts(true)}
        >
          Accounts
        </p>
      </div>

      {accounts ? (
        <div className="md:mt-16">
          {searchedAccounts.length ? (
            // searched accounts
            searchedAccounts.map((user: IUser, idx: number) => (
              <Link href={`/profile/${user._id}`} key={idx}>
                <div className="flex p-2 font-semibold rounded border-b-2 border-gray-4000 gap-3 cursor-pointer">
                  <div>
                    {/* User Avatar */}
                    <Image
                      src={user.image}
                      width={50}
                      height={50}
                      className="rounded-full"
                      alt={user.userName}
                    />
                  </div>

                  <div className="hidden xl:block">
                    {/* username */}
                    <p className="flex gap-1 items-center text-md font-bold text-primary lowercase">
                      {user.userName.replaceAll(" ", "")}
                      <GoVerified className="text-blue-400" />
                      {/* verified */}
                    </p>
                    {/* User Name */}
                    <p className="capitalize text-gray-400 text-xs">
                      {user.userName}
                    </p>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            //  No Accounts found
            <NoResults text={`No Accounts found for ${searchTerm}`} />
          )}
        </div>
      ) : (
        <div className="md:mt-16 flex flex-wrap gap-6 md:justify-start">
          {videos?.length ? (
            // render Videos
            videos.map((video: Video, idx: number) => (
              <VideoCard post={video} key={idx} />
            ))
          ) : (
            // No Videos found
            <NoResults text={`No Video results for ${searchTerm}`} />
          )}
        </div>
      )}
    </div>
  );
};

// get server side props
export const getServerSideProps = async ({
  params: { searchTerm },
}: {
  params: { searchTerm: string };
}) => {
  // fetch searched videos and accounts
  const res = await axios.get(`${BASE_URL}/api/search/${searchTerm}`);

  return {
    props: {
      videos: res.data,
    },
  };
};

export default Search;

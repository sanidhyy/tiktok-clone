"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GoVerified } from "react-icons/go";

import VideoCard from "../../../components/VideoCard";
import NoResults from "../../../components/NoResults";
import { IUser, Video } from "../../../types";
import useAuthStore from "../../../store/authStore";

const SearchClient = ({
  videos,
  searchTerm,
}: {
  videos: Video[];
  searchTerm: string;
}) => {
  const [accounts, setAccounts] = useState(false);
  const { allUsers } = useAuthStore();

  const isAccounts = accounts ? "border-b-2 border-black" : "text-gray-400";
  const isVideos = !accounts ? "border-b-2 border-black" : "text-gray-400";

  const searchedAccounts = allUsers.filter((user: IUser) =>
    user.userName.toLowerCase().includes(searchTerm.toLowerCase()),
  );

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
        <div className="md:mt-16">
          {searchedAccounts.length ? (
            searchedAccounts.map((user: IUser) => (
              <Link href={`/profile/${user._id}`} key={user._id}>
                <div className="flex p-2 font-semibold rounded border-b-2 border-gray-4000 gap-3 cursor-pointer">
                  <div>
                    <Image
                      src={user.image}
                      width={50}
                      height={50}
                      className="rounded-full"
                      alt={user.userName}
                    />
                  </div>

                  <div className="hidden xl:block">
                    <p className="flex gap-1 items-center text-md font-bold text-primary lowercase">
                      {user.userName.replaceAll(" ", "")}
                      <GoVerified className="text-blue-400" />
                    </p>
                    <p className="capitalize text-gray-400 text-xs">
                      {user.userName}
                    </p>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <NoResults text={`No Accounts found for ${searchTerm}`} />
          )}
        </div>
      ) : (
        <div className="md:mt-16 flex flex-wrap gap-6 md:justify-start">
          {videos?.length ? (
            videos.map((video: Video) => (
              <VideoCard post={video} key={video._id} />
            ))
          ) : (
            <NoResults text={`No Video results for ${searchTerm}`} />
          )}
        </div>
      )}
    </div>
  );
};

export default SearchClient;

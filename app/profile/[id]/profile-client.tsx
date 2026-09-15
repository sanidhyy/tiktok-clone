"use client";

import React, { useState } from "react";
import { GoVerified } from "react-icons/go";

import Avatar from "../../../components/Avatar";
import VideoCard from "../../../components/VideoCard";
import NoResults from "../../../components/NoResults";
import { IUser, Video } from "../../../types";

const ProfileClient = ({
  data,
}: {
  data: {
    user: IUser;
    userVideos: Video[];
    userLikedVideos: Video[];
  };
}) => {
  const [showUserVideos, setShowUserVideos] = useState(true);
  const { user, userVideos, userLikedVideos } = data;
  const videosList = showUserVideos ? userVideos : userLikedVideos;

  const videos = showUserVideos ? "border-b-2 border-black" : "text-gray-400";
  const liked = !showUserVideos ? "border-b-2 border-black" : "text-gray-400";

  return (
    <div className="w-full">
      <div className="flex gap-6 md:gap-10 mb-4 bg-white w-full">
        <div className="w-16 h-16 md:w-32 md:h-32">
          <Avatar src={user.image} alt={user.userName} size={120} />
        </div>

        <div className="flex flex-col justify-center">
          <p className="md:text-2xl tracking-wider flex gap-1 items-center justify-center text-md font-bold text-primary lowercase">
            {user.userName.replaceAll(" ", "")}
            <GoVerified className="text-blue-400" />
          </p>
          <p className="capitalize md:text-xl text-gray-400 text-xs">
            {user.userName}
          </p>
        </div>
      </div>

      <div>
        <div className="flex gap-10 mb-10 mt-10 border-b-2 border-gray-200 bg-white w-full">
          <p
            className={`text-xl font-semibold cursor-pointer mt-2 ${videos}`}
            onClick={() => setShowUserVideos(true)}
          >
            Videos
          </p>
          <p
            className={`text-xl font-semibold cursor-pointer mt-2 ${liked}`}
            onClick={() => setShowUserVideos(false)}
          >
            Liked
          </p>
        </div>

        <div className="flex gap-6 flex-wrap md:justify-start">
          {videosList.length ? (
            videosList.map((post: Video) => (
              <VideoCard post={post} key={post._id} />
            ))
          ) : (
            <NoResults
              text={`No ${showUserVideos ? "" : "Liked"} Videos Yet!`}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileClient;

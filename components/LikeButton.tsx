"use client";

import React from "react";
import { MdFavorite } from "react-icons/md";

import useAuthStore from "../store/authStore";
import Spinner from "./Spinner";

interface IProps {
  handleLike: () => void;
  handleDislike: () => void;
  likes: { _ref?: string }[];
  disabled?: boolean;
}

const LikeButton = ({
  handleLike,
  handleDislike,
  likes,
  disabled = false,
}: IProps) => {
  const { userProfile } = useAuthStore();
  const alreadyLiked = Boolean(
    likes?.some((item) => item._ref === userProfile?._id),
  );

  return (
    <div className="flex gap-6">
      <div className="mt-4 flex flex-col justify-center items-center cursor-pointer">
        {alreadyLiked ? (
          <button
            type="button"
            onClick={handleDislike}
            disabled={disabled}
            className="relative bg-primary rounded-full p-2 md:p-4 text-[#F51997] hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:opacity-50"
          >
            {disabled ? (
              <Spinner className="size-4 md:size-6" />
            ) : (
              <MdFavorite className="text-lg md:text-2xl" />
            )}
          </button>
        ) : (
          <button
            type="button"
            onClick={handleLike}
            disabled={disabled}
            className="relative bg-primary rounded-full p-2 md:p-4 hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:opacity-50"
          >
            {disabled ? (
              <Spinner className="size-4 md:size-6" />
            ) : (
              <MdFavorite className="text-lg md:text-2xl" />
            )}
          </button>
        )}
        <p className="text-md font-semibold">{likes?.length | 0}</p>
      </div>
    </div>
  );
};

export default LikeButton;

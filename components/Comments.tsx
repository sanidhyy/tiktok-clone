"use client";

import React, { Dispatch, SetStateAction, FormEvent } from "react";
import Link from "next/link";
import { GoVerified } from "react-icons/go";
import { IoSend } from "react-icons/io5";

import useAuthStore from "../store/authStore";
import NoResults from "./NoResults";
import { IUser } from "../types";
import Avatar from "./Avatar";
import Spinner from "./Spinner";

// Props interface
interface IProps {
  isPostingComment: boolean;
  comment: string;
  setComment: Dispatch<SetStateAction<string>>;
  addComment: (e: FormEvent) => void;
  comments: IComment[];
}

// comment interface
interface IComment {
  comment: string;
  length?: number;
  _key: string;
  postedBy: { _ref: string; _id: string };
}

// Comments
const Comments = ({
  comment,
  setComment,
  addComment,
  comments,
  isPostingComment,
}: IProps) => {
  const { userProfile, allUsers } = useAuthStore();

  return (
    <div className="border-t-2 border-gray-200 pt-4 px-10 bg-[#F8F8F8] border-b-2 lg:pb-0 pb-25">
      <div className="overflow-scroll lg:h-118.75">
        {comments?.length ? (
          // render each Comment
          comments.map((item, idx) => (
            <>
              {allUsers.map(
                (user: IUser) =>
                  user._id === (item.postedBy._id || item.postedBy._ref) && (
                    <div className="p-2 items-center" key={idx}>
                      <Link href={`/profile/${user._id}`}>
                        <div className="flex items-start gap-3 cursor-pointer">
                          <div className="w-8 h-8">
                            {/* User Avatar */}
                            <Avatar
                              src={user.image}
                              alt={user.userName}
                              size={34}
                            />
                          </div>

                          <div className="hidden xl:block">
                            {/* username */}
                            <p className="flex gap-1 items-center text-md font-bold text-primary lowercase">
                              {user.userName.replaceAll(" ", "")}
                              {/* Verified */}
                              <GoVerified className="text-blue-400" />
                            </p>
                            {/* User Name */}
                            <p className="capitalize text-gray-400 text-xs">
                              {user.userName}
                            </p>
                          </div>
                        </div>
                      </Link>

                      {/* Comment Info */}
                      <div>
                        <p>{item.comment}</p>
                      </div>
                    </div>
                  ),
              )}
            </>
          ))
        ) : (
          // No Comments
          <NoResults text="No Comments yet!" />
        )}
      </div>

      {/* check user login */}
      {userProfile && (
        <div className="absolute bottom-0 left-0 right-0 pb-6 px-2 md:px-10">
          <form onSubmit={addComment} className="relative w-full">
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Add comment..."
              disabled={isPostingComment}
              className="bg-primary w-full px-6 py-4 pr-14 text-md font-medium border-2 border-gray-100 focus:outline-hidden focus:border-2 focus:border-gray-300 rounded-lg disabled:cursor-not-allowed disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isPostingComment}
              title="Comment"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:opacity-50"
            >
              {isPostingComment ? <Spinner /> : <IoSend className="text-2xl" />}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Comments;

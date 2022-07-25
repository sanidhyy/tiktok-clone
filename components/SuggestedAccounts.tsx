import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { GoVerified } from "react-icons/go";

import useAuthStore from "../store/authStore";
import { IUser } from "../types";

// Suggested Accounts
const SuggestedAccounts = () => {
  const { fetchAllUsers, allUsers } = useAuthStore();

  // fetch all users
  useEffect(() => {
    fetchAllUsers();
  }, [fetchAllUsers]);

  return (
    <div className="lg:border-b-2 border-gray-200 pb-4">
      {/* Heading */}
      <p className="text-gray-500 font-semibold m-3 mt-4 hidden xl:block">
        Suggested Accounts
      </p>

      <div>
        {/* render 6 users */}
        {allUsers.slice(0, 6).map((user: IUser) => (
          <Link href={`/profile/${user._id}`} key={user._id}>
            <div className="flex gap-3 hover:bg-primary p-2 cursor-pointer font-semibold rounded">
              <div className="w-8 h-8">
                {/* User Avatar */}
                <Image
                  src={user.image}
                  width={34}
                  height={34}
                  className="rounded-full"
                  alt={user.userName}
                  layout="responsive"
                />
              </div>

              <div className="hidden xl:block">
                {/* username */}
                <p className="flex gap-1 items-center text-md font-bold text-primary lowercase">
                  {user.userName.replaceAll(" ", "")}
                  <GoVerified className="text-blue-400" />
                </p>
                {/* User Name */}
                <p className="capitalize text-gray-400 text-xs">
                  {user.userName}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SuggestedAccounts;

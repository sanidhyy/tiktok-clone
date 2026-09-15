"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AiOutlineLogout } from "react-icons/ai";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { BiSearch } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";

import useAuthStore from "../store/authStore";
import { createOrGetUser } from "../utils";
import Logo from "../utils/tiktik-logo.png";
import Avatar from "./Avatar";

// Navbar
const Navbar = () => {
  const { userProfile, addUser, removeUser } = useAuthStore();
  const [searchValue, setSearchValue] = useState("");

  const router = useRouter();

  // Check if string is empty or contains whitespaces
  const isEmptyOrSpaces = (str: string) => {
    return /^\s*$/.test(str);
  };

  // handle search
  const handleSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!isEmptyOrSpaces(searchValue)) {
      router.push(`/search/${searchValue}`);
    }
  };

  return (
    <div className="w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4">
      <Link href="/">
        <div className="w-25 md:w-32.5">
          {/* Brand Logo */}
          <Image
            className="cursor-pointer w-full h-auto"
            src={Logo}
            alt="TikTik"
          />
        </div>
      </Link>

      <div className="relative hidden md:block">
        <form
          onSubmit={handleSearch}
          className="absolute md:static top-10 -left-20 bg-white"
        >
          {/* Search input */}
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search accounts and videos"
            className="bg-primary p-3 md:text-md font-medium border-2 border-gray-100 focus:outline-hidden focus:border-2 focus:border-gray-300 w-75 md:w-87.5 rounded-full md:top-0"
          />
          {/* Search Btn */}
          <button
            onClick={handleSearch}
            className="absolute md:right-5 right-6 top-4 border-l-2 border-gray-300 pl-4 text-2xl text-gray-400"
          >
            <BiSearch />
          </button>
        </form>
      </div>

      <div>
        {/* check user login */}
        {userProfile ? (
          <div className="flex items-center gap-5 md:gap-10">
            <Link
              href="/upload"
              className="inline-flex h-10 items-center justify-center gap-1.5 border-2 border-gray-200 px-2 md:px-4 text-sm font-semibold rounded-sm hover:bg-gray-100"
            >
              <IoMdAdd className="text-xl" />
              <span className="hidden md:inline">Upload</span>
            </Link>

            {/* User Avatar */}
            {userProfile.image && (
              <Link href={`/profile/${userProfile._id}`}>
                <Avatar
                  src={userProfile.image}
                  alt={userProfile.userName}
                  className="cursor-pointer"
                />
              </Link>
            )}
            {/* Logout */}
            <button
              type="button"
              className="px-2"
              onClick={() => {
                googleLogout();
                removeUser();
              }}
              title="Logout"
            >
              <AiOutlineLogout color="#f51897" fontSize={21} />
            </button>
          </div>
        ) : (
          // Google Login
          <GoogleLogin
            onSuccess={(response) => createOrGetUser(response, addUser)}
            onError={() => console.log("Google Login Error")}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;

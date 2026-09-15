"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaCloudUploadAlt } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import axios from "axios";

import useAuthStore from "@/store/authStore";
import { topics } from "@/utils/constants";
import { BASE_URL } from "@/utils";
import Spinner from "@/components/Spinner";

type UploadedAsset = { _id: string; url?: string };

const Upload = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isPosting, setIsPosting] = useState(false);
  const [videoAsset, setVideoAsset] = useState<UploadedAsset | undefined>();
  const [wrongFileType, setWrongFileType] = useState(false);
  const [caption, setCaption] = useState("");
  const [category, setCategory] = useState(topics[0].name);
  const { userProfile } = useAuthStore();
  const router = useRouter();

  const uploadVideo = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true);
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) {
      setIsLoading(false);
      return;
    }
    const fileTypes = ["video/mp4", "video/webm", "video/ogg"];

    if (fileTypes.includes(selectedFile.type)) {
      const formData = new FormData();
      formData.append("file", selectedFile);

      axios
        .post<UploadedAsset>(`${BASE_URL}/api/upload`, formData)
        .then(({ data }) => {
          setVideoAsset(data);
          setWrongFileType(false);
        })
        .catch(() => {
          setWrongFileType(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
      setWrongFileType(true);
    }
  };

  const handlePost = async () => {
    if (!caption || !videoAsset?._id || !category || isPosting) return;

    setIsPosting(true);
    try {
      const document = {
        _type: "post",
        caption,
        video: {
          _type: "file",
          asset: {
            _type: "reference",
            _ref: videoAsset._id,
          },
        },
        userId: userProfile?._id,
        postedBy: {
          _type: "postedBy",
          _ref: userProfile?._id,
        },
        topic: category,
      };

      await axios.post(`${BASE_URL}/api/post`, document);
      router.push("/");
    } finally {
      setIsPosting(false);
    }
  };

  const isBusy = isLoading || isPosting;

  useEffect(() => {
    if (!userProfile) router.push("/");
  }, [userProfile, router]);

  if (!userProfile) return null;

  return (
    <div className="flex w-full h-full absolute left-0 top-15 mb-10 pt-10 lg:pt-20 bg-[#F8F8F8] justify-center">
      <div className="bg-white rounded-lg xl:h-[80vh] w-[60%] flex gap-6 flex-wrap justify-between items-center p-14 pt-6">
        <div>
          <div>
            <p className="text-2xl font-bold">Upload Video</p>
            <p className="text-md text-gray-400 mt-1">
              Post a video to your account
            </p>
          </div>
          <div className="border-dashed rounded-xl border-4 border-gray-200 flex flex-col justify-center items-center outline-hidden mt-10 w-260 h-115 p-10 cursor-pointer hover:border-red-300 hover:bg-gray-100">
            {isLoading ? (
              <p className="flex items-center gap-2 text-gray-500">
                <Spinner />
                Uploading...
              </p>
            ) : (
              <div>
                {videoAsset ? (
                  <div>
                    <video
                      src={videoAsset.url}
                      loop
                      controls
                      className="rounded-xl h-112.5 mt-16 bg-black"
                    ></video>
                  </div>
                ) : (
                  <label className="cursor-pointer">
                    <div className="flex flex-col items-center justify-center h-full">
                      <div className="flex flex-col items-center justify-center">
                        <p className="font-bold text-xl">
                          <FaCloudUploadAlt className="text-gray-300 text-6xl" />
                        </p>
                        <p className="text-xl font-semibold">Upload video</p>
                      </div>
                      <p className="text-gray-400 text-center mt-10 text-sm leading-10">
                        MP4 or WebM or OGG
                        <br />
                        720x1280 or higher <br />
                        Up to 10 minutes <br />
                        Less than 2GB
                      </p>
                      <p className="bg-[#F51997] text-center mt-10 rounded-sm text-white text-md font-medium p-2 w-52 outline-hidden hover:opacity-75">
                        Select File
                      </p>
                    </div>
                    <input
                      type="file"
                      name="upload-video"
                      className="w-0 h-0"
                      onChange={uploadVideo}
                      disabled={isBusy}
                    />
                  </label>
                )}
              </div>
            )}
            {wrongFileType && (
              <p className="text-center text-xl text-red-400 font-semibold mt-4 w-62.5">
                Please select a video file.
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-3 pb-10">
          <label className="text-md font-medium">Caption</label>
          <input
            type="text"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            disabled={isBusy}
            className="rounded-sm outline-hidden text-md border-2 border-gray-200 p-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
          <label className="text-md font-medium">Choose a Category</label>
          <div className="relative">
            <select
              onChange={(e) => setCategory(e.target.value)}
              disabled={isBusy}
              className="w-full appearance-none bg-transparent outline-hidden border-2 border-gray-200 text-md capitalize rounded-sm cursor-pointer py-2 pl-2 pr-10 lg:py-4 lg:pl-4 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {topics.map((topic) => (
                <option
                  key={topic.name}
                  className="outline-hidden capitalize bg-white text-gray-700 text-md p-2 hover:bg-slate-300"
                  value={topic.name}
                >
                  {topic.name}
                </option>
              ))}
            </select>
            <IoMdArrowDropdown className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-xl text-gray-500" />
          </div>
          <div className="flex gap-6 mt-10">
            <button
              onClick={() => router.push("/")}
              type="button"
              disabled={isBusy}
              className="border-gray-300 border-2 text-md font-medium p-2 rounded-sm w-28 lg:w-44 outline-hidden hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:opacity-50"
            >
              Discard
            </button>
            <button
              onClick={handlePost}
              type="button"
              disabled={isBusy}
              className="bg-[#F51997] text-white text-md font-medium p-2 rounded-sm w-28 lg:w-44 outline-hidden hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:opacity-50 inline-flex items-center justify-center gap-2"
            >
              {isPosting && <Spinner />}
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;

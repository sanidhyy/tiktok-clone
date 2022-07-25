import React from "react";
import { MdOutlineVideocamOff } from "react-icons/md";
import { BiCommentX } from "react-icons/bi";

// Props interface
interface IProps {
  text: string;
}

// No Results
const NoResults = ({ text }: IProps) => {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      {/* No Result Icon */}
      <p className="text-8xl">
        {text === "No Comments yet!" ? (
          <BiCommentX />
        ) : (
          <MdOutlineVideocamOff />
        )}
      </p>
      {/* No Result Text */}
      <p className="text-2xl text-center">{text}</p>
    </div>
  );
};

export default NoResults;

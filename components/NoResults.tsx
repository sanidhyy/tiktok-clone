import React from "react";

interface IProps {
  text: string;
}

const NoResults = ({ text }: IProps) => {
  return (
    <div>
      <h1>NoResults</h1>
    </div>
  );
};

export default NoResults;

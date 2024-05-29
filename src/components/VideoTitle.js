import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-52 px-12 absolute">
      <h1 className="text-white text-5xl font-bold">
        {title}
      </h1>
      <p className="text-white py-4 text-lg w-2/5">
        {overview}
      </p>
      <div className="mt-4">
        <button className=" text-black p-4 rounded-lg text-xl bg-white mx-2 w-56 hover:opacity-70">
          ▶ Play
        </button>
        <button className="bg-white text-black p-4 rounded-lg text-xl w-56 hover:opacity-70">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

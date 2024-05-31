import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-52 px-12 absolute">
      <h1 className="hidden md:block text-white text-5xl font-bold">
        {title}
      </h1>
      <p className="hidden md:block text-white py-4 text-lg w-2/5">
        {overview}
      </p>
      <div className="mt-4">
        <button className="md:inline-block text-black p-2 rounded-lg text-xl bg-white md:p-4 m-2 md:w-56  hover:opacity-70">
          ▶ Play
        </button>
        <button className="md:inline-block hidden bg-white text-black p-4 rounded-lg text-xl w-56 hover:opacity-70">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

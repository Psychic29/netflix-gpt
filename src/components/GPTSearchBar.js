import React from "react";

const GPTSearchBar = () => {
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12 rounded-md">
        <input
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder="What Would You Like To Watch Today ?"
        />
        <button className="col-span-3 m-4 py-2 px-4 text-white bg-red-700 rounded-lg">Search</button>
      </form>
    </div>
  );
};

export default GPTSearchBar;

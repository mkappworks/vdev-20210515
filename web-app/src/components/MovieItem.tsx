import React from "react";

const MovieItem = () => {
  return (
    <div className="border border-gray-200 p-4 flex space-x-4">
      <div className="min-w-0 relative flex-auto ">
        <div className="text-lg font-semibold text-black mb-0.5">
          NAME + YEAR
        </div>
        <div className="flex flex-wrap text-sm font-medium whitespace-pre">
          <div className="flex-none w-full mt-0.5 font-normal">
            <div className="inline text-black">Description</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;

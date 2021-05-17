import React from "react";

const MovieCounter = (props: { count: number }) => {
  return (
    <div className="flex justify-end">
      <div className="text-lg font-semibold text-black ">
        Number of movies: {props.count}
      </div>
    </div>
  );
};

export default MovieCounter;

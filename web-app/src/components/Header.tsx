import React, { useRef } from "react";

import useStore from "../store/store";

const Header = () => {
  const setMoviesHandler = useStore((state) => state.setFilteredMovies);
  const fetchedMovies = useStore((state) => state.fetchedMovies);

  const inputElement = useRef<HTMLInputElement>(null);

  const getSearchTerm = () => {
    if (inputElement && inputElement.current) {
      setMoviesHandler(inputElement.current.value, fetchedMovies);
    }
  };

  return (
    <div className="flex items-center justify-between">
      <div className="text-lg font-semibold text-black mb-0.5">Movies</div>
      <form className="relative">
        <svg
          width="20"
          height="20"
          fill="currentColor"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          />
        </svg>
        <input
          ref={inputElement}
          className="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10"
          type="text"
          aria-label="LookUp a Movie"
          placeholder="LookUp a Movie"
          onChange={getSearchTerm}
        />
      </form>
    </div>
  );
};

export default Header;

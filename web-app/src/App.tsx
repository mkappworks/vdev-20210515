import React, { useEffect, useState, useCallback } from "react";

import useStore from "./store/store";

import Header from "./components/Header";
import MovieItemList from "./components/MovieItemList";
import MovieCounter from "./components/MovieCounter";

const App = () => {
  const fetchMoviesHandler = useStore((state) => state.fetchDatabaseMovies);

  useEffect(() => {
    fetchMoviesHandler("http://localhost:3000/api/movies");
  }, []);

  const filteredMoviesList = useStore((state) => state.filteredMovies);

  const movieCount = filteredMoviesList.length;

  let movieTable = <p>Found no Movies!</p>;

  if (filteredMoviesList.length > 0) {
    movieTable = <MovieItemList movies={filteredMoviesList}></MovieItemList>;
  }

  return (
    <div className="px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4">
      <Header />
      {movieTable}
      <MovieCounter count={movieCount} />
    </div>
  );
};

export default App;

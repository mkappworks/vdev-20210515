import React, { useEffect } from "react";

import useStore from "./store/store";

import Header from "./components/Header";
import MovieItemList from "./components/MovieItemList";
import MovieCounter from "./components/MovieCounter";

const App = () => {
  const fetchMovies = useStore((state) => state.fetchMovies);

  useEffect(() => {
    fetchMovies("http://localhost:3000/api/movies");
  }, []);

  const movies = useStore((state) => state.movies);

  const movieCount = movies.length;

  let movieTable = <p>Found no Movies!</p>;

  if (movies.length > 0) {
    movieTable = <MovieItemList movies={movies}></MovieItemList>;
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

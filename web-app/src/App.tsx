import React from "react";

import Header from "./components/Header";
import MovieItemList from "./components/MovieItemList";
import MovieItem from "./components/MovieItem";
import MovieCounter from "./components/MovieCounter";

const App = () => {
  const list = [<MovieItem />, <MovieItem />, <MovieItem />];

  return (
    <div className="px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4">
      <Header />
      <MovieItemList>{list}</MovieItemList>
      <MovieCounter count={3} />
    </div>
  );
};

export default App;

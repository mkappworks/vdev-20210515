import React from "react";

import MovieItem from "./MovieItem";

const MovieItemList = (props: {
  movies: { id: number; title: string; year: number; description: string }[];
}) => {
  const moviesList = props.movies.map(
    (movie: {
      id: number;
      title: string;
      year: number;
      description: string;
    }) => (
      <MovieItem
        key={movie.id}
        title={movie.title}
        year={movie.year}
        description={movie.description}
      />
    )
  );
  return <div className="py-8">{moviesList}</div>;
};

export default MovieItemList;

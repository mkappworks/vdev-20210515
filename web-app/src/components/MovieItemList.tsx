import React from "react";
import MovieItem from "./MovieItem";

const MovieItemList = (props: any) => {
  return <div className="py-8">{props.children}</div>;
};

export default MovieItemList;

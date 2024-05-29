import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="text-2xl font-bold p-1">
      <h1 className="p-4 text-white ">
        {title}
      </h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies &&
            movies.map(movie =>
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;

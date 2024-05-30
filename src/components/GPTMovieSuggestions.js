import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector(store => store.GPT);
  if (!movieResults)
    return;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      {movieNames?.map((movie, index) =>
        <MovieList key={index} title={movie} movies={movieResults[index]} />
      )}
    </div>
  );
};

export default GPTMovieSuggestions;

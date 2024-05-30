import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGPTMovieResult } from "../utils/GPTSlice";

const GPTSearchBar = () => {
  const langKey = useSelector(store => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMoviesTMDB = async (movie) =>{
    const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, API_OPTIONS);

    const json = await data.json();
    return json.results;
  }

  const handleGPTSearchClick = async () => {
    const GPTQuery =
      "Act as a movie recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". Only give me names of 5 movies, comma separated like the exmaple result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const GPTResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: GPTQuery }],
      model: "gpt-3.5-turbo"
    });

    if(!GPTResults.choices)
        return;
    console.log(GPTResults.choices[0]?.message?.content);

    const GPTMovies = GPTResults.choices[0]?.message?.content.split(",");

    const PromiseArray = GPTMovies.map((movie)=> searchMoviesTMDB(movie));

    const TMDBResults = await Promise.all(PromiseArray);

    dispatch(addGPTMovieResult({movieNames:GPTMovies,movieResults:TMDBResults}));

  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12 rounded-md"
        onSubmit={e => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 text-white bg-red-700 rounded-lg"
          onClick={handleGPTSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;

import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

export const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const upComingMovies = useSelector(store => store.movies.upComingMovies);

  const getMoviesList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    !upComingMovies && getMoviesList();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

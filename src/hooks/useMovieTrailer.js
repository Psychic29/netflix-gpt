import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

export const useMovieTrailer = movieId => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );

    const json = await data.json();
    const videosList = json.results.filter(video => video.type === "Trailer");

    const trailer = videosList.length ? videosList[0] : json.results[0];

    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getMovieVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

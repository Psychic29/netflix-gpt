import { useSelector } from "react-redux";
import {useMovieTrailer} from "../hooks/useMovieTrailer"

const VideoBackground = ({ movieId }) => {

  const trailerVideo = useSelector(state => state.movies?.trailerVideo);
  useMovieTrailer(movieId);

  return (
    <div className="md:py-0 py-44 bg-black">
      <iframe
        className="w-full aspect-video"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key+ "?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
};

export default VideoBackground;

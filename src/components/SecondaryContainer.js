import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector((store) => store.movies?.nowPlayingMovies); 
  const popularMovies = useSelector((store) => store.movies?.popularMovies); 
  const topRatedMovies = useSelector((store) => store.movies?.topRatedMovies); 
  const upcomingMovies = useSelector((store) => store.movies?.upcomingMovies); 

  // if (!nowPlayingMovies || !popularMovies ) return;

  return (
    <div className="-my-56 relative z-50 ">
      <div className="bg-black">
        <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
        <MovieList title={"Popular"} movies={popularMovies} />
        <MovieList title={"Top Rated"} movies={topRatedMovies} />
        <MovieList title={"Up Coming"} movies={upcomingMovies} />
        </div>
    </div>
  );
};

export default SecondaryContainer;

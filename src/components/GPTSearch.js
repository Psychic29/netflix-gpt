import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import { BG_IMG_URL } from "../utils/constants";

const GPTSearch = () => {
  return (
    <div>
      <img
        className="fixed -z-20 h-screen w-full brightness-50"
        src={BG_IMG_URL}
        alt="bg-img"
      />
      <GPTSearchBar />
      <GPTMovieSuggestions />
    </div>
  );
};

export default GPTSearch;

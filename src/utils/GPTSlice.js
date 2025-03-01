import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
  name: "GPT",
  initialState: {
    showGPTSearch: false,
    movieResults: null,
    movieNames: null
  },
  reducers: {
    toggleGPTSearchView: state => {
      state.showGPTSearch = !state.showGPTSearch;
    },
    addGPTMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieResults = movieResults;
      state.movieNames = movieNames;
    }
  }
});

export const { toggleGPTSearchView, addGPTMovieResult } = GPTSlice.actions;
export default GPTSlice.reducer;

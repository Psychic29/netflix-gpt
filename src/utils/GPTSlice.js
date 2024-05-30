import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
  name: "GPT",
  initialState: {
    showGPTSearch: true
  },
  reducers: {
    toggleGPTSearchView: state => {
      state.showGPTSearch = !state.showGPTSearch;
    }
  }
});

export const { toggleGPTSearchView } = GPTSlice.actions;
export default GPTSlice.reducer;

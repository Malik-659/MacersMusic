import { createSlice } from "@reduxjs/toolkit";
import { getFavoriteMusic } from "./favoriteAction";

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    musics: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getFavoriteMusic.fulfilled, (state, action) => {
      state.loading = false;
      state.musics = action.payload;
      console.log(state.musics);
    });
  },
});

export default favoriteSlice.reducer;

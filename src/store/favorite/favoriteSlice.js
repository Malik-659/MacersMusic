import { createSlice } from "@reduxjs/toolkit";
import { getFavoriteMusics } from "./favoriteAction";

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFavoriteMusics.fulfilled, (state, action) => {
        state.loading = false;
        state.favorites = action.payload;
        console.log(state.musics);
      })
      
  },
});

export default favoriteSlice.reducer;

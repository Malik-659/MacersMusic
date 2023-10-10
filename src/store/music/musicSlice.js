import { createSlice } from "@reduxjs/toolkit";
import { getMusic, setMusic } from "./musicAction";

const musicSlice = createSlice({
  name: "musics",
  initialState: {
    musics: [],
    loading: false,
    status: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setMusic.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(getMusic.fulfilled, (state, action) => {
        state.loading = false;
        state.musics = action.payload;
      });
  },
});

export default musicSlice.reducer;

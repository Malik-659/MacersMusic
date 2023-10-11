import { createSlice } from "@reduxjs/toolkit";
import { getMusic, setMusic } from "./musicAction";

const musicSlice = createSlice({
  name: "musics",
  initialState: {
    musics: [], //
    oneMusic: null,
    loading: false, //
    status: "",
    currentPage: 1,
    totalPages: 1,
    currentCategory: "",
    search: "",
    categories: [],
    sortByRating: "",
  },
  reducers: {
    changeCategory: (state, action) => {
      if (action.payload.category === "all") {
        state.currentCategory = "";
      } else {
        state.currentCategory = action.payload.category;
      }
      state.currentPage = 1;
    },
    setSearchVal: (state, action) => {
      state.search = action.payload.search;
      state.currentPage = 1;
    },
    setSortByRating: (state, action) => {
      if (!action.payload.sortByRating) {
        state.sortByRating = "";
      } else {
        state.sortByRating = `&_sort=rating&_order=${action.payload.sortByRating}`;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setMusic.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(getMusic.fulfilled, (state, action) => {
        state.loading = false;
        state.musics = action.payload.data;
        console.log(state.musics);
      });
  },
});

export default musicSlice.reducer;

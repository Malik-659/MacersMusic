import { createSlice } from "@reduxjs/toolkit";
import {
  getAlbum,
  getCategories,
  getMusic,
  getOneMusic,
  setMusic,
} from "./musicAction";

const musicSlice = createSlice({
  name: "musics",
  initialState: {
    musics: [], //
    oneMusic: {
      name: "Корабли",
      image: "https://i.ytimg.com/vi/S0sh7CKrcI0/maxresdefault.jpg",
      music:
        "https://cdn3.sefon.pro/prev/yyNDx_QYTJL9EyG8f8qTdw/1697083777/128/MiyaGi%20-%20%D0%9A%D0%BE%D1%80%D0%B0%D0%B1%D0%BB%D0%B8%20%28192kbps%29.mp3",
      author: "Мияги",
      date: "2023-11-10",
      category: "репп",
      genre: "реп",
      album: "andy",
      comments: [],
      likes: [],
      rating: [],
      id: 2,
    },
    loading: false, //
    status: "",
    currentPage: 1,
    totalPages: 1,
    currentCategory: "",
    search: "",
    categories: [],
    albums: [],
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
      .addCase(setMusic.pending, (state) => {
        state.loading = true;
      })
      .addCase(setMusic.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(setMusic.rejected, (state) => {
        state.loading = false;
        state.status = "error";
      })
      .addCase(getMusic.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMusic.fulfilled, (state, action) => {
        state.loading = false;
        state.musics = action.payload.data;
      })
      .addCase(getMusic.rejected, (state) => {
        state.loading = false;
        state.status = "error";
      })
      .addCase(getOneMusic.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOneMusic.fulfilled, (state, action) => {
        state.loading = false;
        state.oneMusic = action.payload;
      })
      .addCase(getOneMusic.rejected, (state) => {
        state.loading = false;
        state.status = "error";
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(getAlbum.fulfilled, (state, action) => {
        state.albums = action.payload;
      });
  },
});

export const { clearOneMusic } = musicSlice.actions;
export default musicSlice.reducer;

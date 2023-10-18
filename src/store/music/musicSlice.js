import { createSlice } from "@reduxjs/toolkit";
import {
  getAlbum,
  getCategories,
  getMusic,
  getMusicPlayer,
  getOneMusic,
  setMusic,
  deleteMusic,
  getMusicPlayList,
} from "./musicAction";

const musicSlice = createSlice({
  name: "musics",
  initialState: {
    musics: [],
    musicPlayer: [],
    seacrhMusic: [],
    serchStatus: false,
    musicPlyaListDetails: null,
    isEdit: false,
    oneMusic: "",
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
    changeEdit: (state) => {
      state.isEdit = true;
    },

    changeEditTrue: (state) => {
      state.isEdit = false;
    },
    changePage: (state, action) => {
      state.currentPage = action.payload.page;
    },

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

    getSeachMusic: (state, action) => {
      state.seacrhMusic.push(action.payload);
      state.serchStatus = true;
    },

    removeSeachMusic: (state, action) => {
      state.serchStatus = false;
      state.seacrhMusic = [];
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
        state.totalPages = action.payload.totalPages;
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
      .addCase(getMusicPlayList.fulfilled, (state, action) => {
        state.loading = false;
        state.musicPlyaListDetails = action.payload;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(getAlbum.fulfilled, (state, action) => {
        state.albums = action.payload;
      })
      .addCase(getMusicPlayer.fulfilled, (state, action) => {
        state.loading = false;
        state.musicPlayer = action.payload;
      })
      .addCase(deleteMusic.fulfilled, (state, action) => {
        const id = action.payload;
        state.musics = state.musics.filter((music) => music.id !== id);
      });
  },
});

export const { changePage, clearOneMusic, changeEdit, changeEditTrue } =
  musicSlice.actions;
export default musicSlice.reducer;

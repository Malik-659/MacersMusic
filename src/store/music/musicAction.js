import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { MUSIC_API } from "../../helpers/const";
import { getAuthUser, getTotalPages } from "../../helpers/function";

//!
export const setMusic = createAsyncThunk(
  "musics/setMusic",
  async ({ addMusic }, { dispatch }) => {
    let musicObj = {
      comments: [],
      likes: [],
      rating: [],
    };
    const data = await axios.post(MUSIC_API, { ...addMusic, ...musicObj });
    console.log(data);
  }
);

export const getMusic = createAsyncThunk(
  "musics/getMusic",
  async (_, { getState }) => {
    const { currentPage, currentCategory, search, sortByRating, priceRange } =
      getState().musics;
    const categoryAndSearchParams = `q=${search}${
      currentCategory && `&type=${currentCategory}`
    }`;
    const pagesLimitParams = `?_page=${currentPage}&_limit=15`;
    const totalPages = await getTotalPages(
      `${MUSIC_API}?${categoryAndSearchParams}${priceRange}${sortByRating}`
    );
    const { data } = await axios.get(
      `${MUSIC_API}${pagesLimitParams}&${categoryAndSearchParams}${sortByRating}`
    );
    return { data, totalPages };
  }
);

//!
export const getOneMusic = createAsyncThunk(
  "musics/getOneMusic",
  async ({ id }) => {
    const { data } = await axios.get(`${MUSIC_API}/${id}`);
    return data;
  }
);

//!
export const deleteMusic = createAsyncThunk(
  "musics/deleteMusic",
  async ({ id }, { dispatch }) => {
    await axios.delete(`${MUSIC_API}/${id}`);
    dispatch(getMusic());
  }
);

export const editMusic = createAsyncThunk(
  "musics/editMusic",
  async ({ music }, { dispatch }) => {
    await axios.patch(`${MUSIC_API}/${music.id}`, music);
    dispatch(getMusic());
  }
);

export const getCategories = createAsyncThunk(
  "musics/getCategories",
  async () => {
    const { data } = await axios.get(MUSIC_API);
    const uniqueCategories = new Set(data.map((music) => music.categories));
    const categories = [];
    for (let i of uniqueCategories) {
      categories.push(i);
    }
    return categories;
  }
);

export const toggleMusicLike = createAsyncThunk(
  "musics/toggleMusicLike",
  async ({ setIsLike, likes, musicId }, { dispatch }) => {
    const user = getAuthUser();
    let updatedLikesArr;

    if (!likes) {
      updatedLikesArr = [];
    } else {
      updatedLikesArr = [...likes];
    }

    if (setIsLike) {
      updatedLikesArr.push({
        id: Date.now(),
        user,
      });
    } else {
      updatedLikesArr = updatedLikesArr.filter((like) => like.user !== user);
    }

    await axios.patch(`${MUSIC_API}/${musicId}`, { likes: updatedLikesArr });

    dispatch(getMusic());
  }
);

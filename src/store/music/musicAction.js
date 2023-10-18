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
    dispatch(getMusic());
  }
);

export const getMusic = createAsyncThunk(
  "musics/getMusic",
  async (_, { getState }) => {
    const { currentPage, currentCategory, search } = getState().musics;
    const categoryAndSearchParams = `q=${search}${
      currentCategory && `&category=${currentCategory}`
    }`;
    const pagesLimitParams = `?_page=${currentPage}&_limit=3`;
    console.log(`${MUSIC_API}?${categoryAndSearchParams}`);
    const totalPages = await getTotalPages(`${MUSIC_API}?`);
    const { data } = await axios.get(
      `${MUSIC_API}${pagesLimitParams}&${categoryAndSearchParams}`
    );
    console.log(totalPages);
    return { data, totalPages };
  }
);

export const getMusicPlayer = createAsyncThunk(
  "musics/getMusicPlayer",
  async () => {
    const res = await axios.get(MUSIC_API);
    return res.data;
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

export const getMusicPlayList = createAsyncThunk(
  "musics/getMusicPlayList",
  async (indexMusic) => {
    return indexMusic;
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

export const EditMusic = createAsyncThunk(
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
    const uniqueCategories = new Set(data.map((music) => music.category));
    const categories = [];
    for (let i of uniqueCategories) {
      categories.push(i);
    }
    return categories;
  }
);

export const getAlbum = createAsyncThunk("musics/getAlbum", async () => {
  const { data } = await axios.get(MUSIC_API);
  const uniqueAlbum = new Set(data.map((music) => music.album));
  const album = [];
  for (let i of uniqueAlbum) {
    album.push(i);
  }
  return album;
});

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

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { MUSIC_API } from "../../helpers/const";

export const setMusic = createAsyncThunk("musics/setMusic", async (music) => {
  let musicObj = {
    comments: [],
    likes: [],
    rating: [],
  };
  const data = await axios.post(MUSIC_API, { ...music, ...musicObj });
  console.log(data);
});

export const getMusic = createAsyncThunk("musics/getMusic", async () => {
  const data = await axios.get(MUSIC_API);
  return data.data;
});

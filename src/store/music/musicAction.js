import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { MUSIC_API } from "../../helpers/const";

export const setMusic = createAsyncThunk("musics/setMusic", async (music) => {
  const data = await axios.post(MUSIC_API, music);
  console.log(data);
});

export const getMusic = createAsyncThunk("musics/getMusic", async () => {
  const data = await axios.get(MUSIC_API);
  return data.data;
});

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { MUSIC_API } from "../../helpers/const";

export const getFavoriteMusic = createAsyncThunk(
  "favorite/getFavoriteMusic",
  async () => {
    const res = await axios.get(MUSIC_API);
    console.log(res.data);
  }
);

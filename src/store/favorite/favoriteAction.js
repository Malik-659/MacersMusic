import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { USERS_API, MUSIC_API  } from "../../helpers/const";

export const getFavoriteMusics = createAsyncThunk(
  "favorite/getFavoriteMusic",
  async () => {
    const res = await axios.get(MUSIC_API);

  }
);



import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { MUSIC_API, USERS_API } from "../../helpers/const";
import { useRevalidator } from "react-router-dom";

export const registerAccount = createAsyncThunk(
  "account/registerAccount",
  async (user) => {
    let admin = "admin";
    let adminValue = true;
    if (user.password == "13579") {
      user[admin] = adminValue;
    } else {
      user[admin] = !adminValue;
    }
    const res = await axios.post(USERS_API, user);
  }
);

export const loginAccount = createAsyncThunk(
  "account/loginAccount",
  async (user) => {
    const res = await axios.get(USERS_API);

    const oneUser = res.data.find(
      (item) => user.name === item.name && user.password === item.password
    );

    if (!oneUser) {
      return alert("Такой пользователльл не найден!");
    } else {
      return oneUser;
    }
  }
);

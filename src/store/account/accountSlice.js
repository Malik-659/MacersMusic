import { createSlice } from "@reduxjs/toolkit";
import {
  checkAccountUser,
  loginAccount,
  registerAccount,
} from "./accountAction";
import { addToLocalStorage } from "../../helpers/function";

const accountSlice = createSlice({
  name: "account",
  initialState: {
    name: null,
    admin: null,
    loading: false,
    status: "",
    modalReg: false,
    modalLog: false,
    show: true,
  },
  reducers: {
    removeAdmin: (state) => {
        state.admin = false
    },

    toggleReg: (state) => {
      state.modalReg = !state.modalReg;
    },
    toggleLog: (state) => {
      state.modalLog = !state.modalLog;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerAccount.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerAccount.fulfilled, (state, action) => {
        state.loading = false;
        state.status = action.payload;
      })
      .addCase(registerAccount.rejected, (state) => {
        state.loading = false;
        state.status = "error";
      })
      .addCase(loginAccount.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginAccount.fulfilled, (state, action) => {
        state.loading = false;
        state.name = action.payload.name;
        state.admin = action.payload.admin;
        addToLocalStorage(action.payload.name, action.payload.admin);
      })
      .addCase(loginAccount.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { clearLogout, toggleLog, toggleReg, removeAdmin } = accountSlice.actions;
export default accountSlice.reducer;

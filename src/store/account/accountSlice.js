import { createSlice } from "@reduxjs/toolkit";
import { loginAccount, registerAccount } from "./accountAction";
import { addToLocalStorage } from "../../helpers/function";

const accountSlice = createSlice({
  name: "account",
  initialState: {
    name: null,
    loading: false,
    modalReg: false,
    modalLog: false,
  },
  reducers: {
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
        // state.loading = action.payload;
      })
      .addCase(registerAccount.rejected, (state) => {
        state.loading = false;
      })
      .addCase(loginAccount.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginAccount.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.name;
        addToLocalStorage(action.payload.name);
      })
      .addCase(loginAccount.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { toggleLog, toggleReg } = accountSlice.actions;
export default accountSlice.reducer;

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
    show: true
  },
  reducers: {

    changeShow : (state, action) => {
      state.show = action.payload
    },
    // clearLogout: (state) => {
    //   state.name = null;
    //   state.isAdmin = null;
    // },
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
        state.user = action.payload;
        addToLocalStorage(action.payload.name);
      })
      .addCase(loginAccount.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { clearLogout, toggleLog, toggleReg } = accountSlice.actions;
export default accountSlice.reducer;

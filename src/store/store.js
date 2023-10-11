import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./account/accountSlice";
import musicReducer from "./music/musicSlice";

export default configureStore({
  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware({
  //       serializableCheck: false,
  //     }),
  reducer: {
    account: accountReducer,
    musics: musicReducer,
  },
});

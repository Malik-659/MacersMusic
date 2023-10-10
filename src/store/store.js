import { configureStore } from "@reduxjs/toolkit";
import musicReducer from "./music/musicSlice";

export default configureStore({
  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware({
  //       serializableCheck: false,
  //     }),
  reducer: {
    musics: musicReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import albumReducer from "./features/albumSlice";

const albumStore = configureStore({
  reducer: {
    album: albumReducer,
  },
});

export default albumStore;

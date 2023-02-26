import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  images: [],
};

export const albumSlice = createSlice({
  name: "album",
  initialState,
  reducers: {
    addImage: (state, action) => {
      state.images = state.images.concat(action.payload);
    },
  },
});

export const { addImage } = albumSlice.actions;

export default albumSlice.reducer;

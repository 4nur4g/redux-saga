import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cats: [],
  isLoading: false,
};

const catSlice = createSlice({
  name: "cats",
  initialState,
  reducers: {
    getCatsFetch(state) {
      state.isLoading = true;
    },
    getCatSuccess(state, action) {
      state.isLoading = false;
      state.cats = action.payload;
    },
    getCatFailure(state) {
      state.isLoading = false;
    },
  },
});

export const { getCatsFetch, getCatSuccess, getCatFailure } = catSlice.actions;

export default catSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import createMiddleware from "redux-saga";
import catReducer from "./catSlice";

const saga = createMiddleware();
const store = configureStore({
  reducer: {
    cats: catReducer,
  },
  middleware: [saga],
});

export default store;

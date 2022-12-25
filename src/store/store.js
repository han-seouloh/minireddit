import { configureStore } from "@reduxjs/toolkit";
import menuBarReducer from "../features/menuBar/menuBarSlice";
import subredditReducer from "./subredditSlice";

export default configureStore({
  reducer: {
    menu: menuBarReducer,
    subreddit: subredditReducer
  }
});
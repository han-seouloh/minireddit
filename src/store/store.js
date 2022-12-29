import { configureStore } from "@reduxjs/toolkit";
import menuBarReducer from "../features/menuBar/menuBarSlice";
import subredditReducer from "./subredditSlice";
import postsReducer from "./postsSlice";

export default configureStore({
  reducer: {
    menu: menuBarReducer,
    subreddit: subredditReducer,
    posts: postsReducer
  }
});
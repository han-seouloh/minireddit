import { configureStore } from "@reduxjs/toolkit";
import menuBarReducer from "../features/menuBar/menuBarSlice";
import subredditReducer from "./subredditSlice";
import postsReducer from "./postsSlice";
import commentsReducer from "./commentsSlice";

export default configureStore({
  reducer: {
    menu: menuBarReducer,
    subreddit: subredditReducer,
    posts: postsReducer,
    comments: commentsReducer
  }
});
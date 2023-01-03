import { createSlice } from "@reduxjs/toolkit";
import { getPosts } from "../api/reddit";
import { searchPosts } from "../api/reddit";

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    selectedPost: null,
    time: 'hour',
    isLoading: false,
    hasError: false
  },
  reducers: {
    setSelectedPost: (state, action) => {
      state.selectedPost = action.payload;
    },
    setTime: (state,action) => {
      state.time = action.payload;
    }
  },
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [getPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.hasError = false;
      state.posts = action.payload;
      state.selectedPost = action.payload[0].id;
    },
    [getPosts.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
    [searchPosts.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [searchPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.hasError = false;
      state.posts = action.payload;
      state.selectedPost = action.payload[0].id;
    },
    [searchPosts.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    }
  }
});

export const selectPosts = state => state.posts;

export const { setSelectedPost, setTime } = postsSlice.actions;
export default postsSlice.reducer;
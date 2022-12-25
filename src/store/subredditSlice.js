import { createSlice } from "@reduxjs/toolkit";
import { getSubreddit } from "../api/reddit";

export const subredditSlice = createSlice({
  name: 'subreddit',
  initialState: {
    subreddit: 'all',
    subredditInfo: {},
    isLoading: false,
    hasError: false
  },
  reducers: {
    setSubreddit: (state, action) => {
      state.subreddit = action.payload;
    }
  },
  extraReducers: {
    [getSubreddit.pending]: (state) => {
      state.isloading = true;
      state.hasError = false;
    },
    [getSubreddit.fulfilled]: (state,action) => {
      state.isloading = false;
      state.hasError = false;
      state.subredditInfo = action.payload;
    },
    [getSubreddit.rejected]: (state) => {
      state.isloading = false;
      state.hasError = true;
    }
  }
});

export const selectSubreddit = state => state.subreddit;

export const { setSubreddit } = subredditSlice.actions;
export default subredditSlice.reducer;
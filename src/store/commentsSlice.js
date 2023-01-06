import { createSlice } from "@reduxjs/toolkit";
import { getComments } from "../api/reddit";

export const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    comments: {},
    isLoading: false,
    hasError: false
  },
  reducers: {
    removeComments: (state, action) => {
      delete state.comments[action.payload.id]
    }
  },
  extraReducers: {
    [getComments.pending]: (state) => {
      state.isLoading = true;
      state.hasError= false;
    },
    [getComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.hasError= false;
      state.comments[action.payload.id] = action.payload.comments;
    },
    [getComments.rejected]: (state) => {
      state.isLoading = false;
      state.hasError= true;
    }
  }
});

export const selectComments = state => state.comments;
export const {removeComments} = commentsSlice.actions;

export default commentsSlice.reducer;
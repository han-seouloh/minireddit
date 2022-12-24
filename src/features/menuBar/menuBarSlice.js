import { createSlice } from "@reduxjs/toolkit";

// Initial State
const initialState = {
  menu: true
};

// Slice Object
export const menuBarSlice = createSlice({
  name: 'menu',
  initialState: initialState,
  reducers: {
    toggleMenu: (state, action) => {
      if (state.menu) {
        state.menu = false;
      } else {
        state.menu = true;
      }
    }
  }
});

// Selectors
export const selectMenu = (state) => state.menu;

//Exports
export const {
  toggleMenu
} = menuBarSlice.actions;

export default menuBarSlice.reducer;
import { configureStore } from "@reduxjs/toolkit";
import menuBarReducer from "../features/menuBar/menuBarSlice";

export default configureStore({
  reducer: {
    menu: menuBarReducer
  }
});
import { configureStore } from "@reduxjs/toolkit";
import ThemeReducer from "./features/ThemeSlice"

export const store = configureStore({
  reducer: {
    theme: ThemeReducer
  }
})

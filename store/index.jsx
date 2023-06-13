import { configureStore } from "@reduxjs/toolkit";
import AppStateSlice from "./AppState";

const store = configureStore({
  reducer: {
    appState: AppStateSlice.reducer,
  },
});

export default store;

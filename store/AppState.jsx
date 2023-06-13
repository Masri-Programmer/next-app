import { createSlice } from "@reduxjs/toolkit";

const AppStateSlice = createSlice({
  name: "appState",
  initialState: {
    sideNavState: false,
    showSearchBoxState: false,
    navigateState: "home",
    cartSelectAll: false,
  },
  reducers: {
    setSideNav(state, action) {
      state.sideNavState = !state.sideNavState;
    },
    setSearchBox(state, action) {
      state.showSearchBoxState = action.payload;
    },
    setNavigateState(state, action) {
      state.navigateState = action.payload;
    },
    setCartSelectAllState(state, action) {
      state.cartSelectAll = true;
    },
  },
});

export const {
  setSideNav,
  setSearchBox,
  setNavigateState,
  setCartSelectAllState,
} = AppStateSlice.actions;
export default AppStateSlice;

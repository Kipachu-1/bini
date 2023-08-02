import { RootState } from "../store";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface ModalsState {
  navbarVisible: boolean;
  navbarVisibleScroll: boolean;
  filterMBVisible: boolean;
}

const initialState: ModalsState = {
  navbarVisible: false,
  navbarVisibleScroll: true,
  filterMBVisible: false,
};

export const ModalsState = createSlice({
  name: "ModalsState",
  initialState,
  reducers: {
    setNavbarVisibility: (state, action: PayloadAction<boolean>) => {
      state.navbarVisible = action.payload;
    },
    setNavbarVisibilityScroll: (state, action: PayloadAction<boolean>) => {
      state.navbarVisibleScroll = action.payload;
    },
    setFilterMBVisibility: (state, action: PayloadAction<boolean>) => {
      state.filterMBVisible = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setNavbarVisibility,
  setNavbarVisibilityScroll,
  setFilterMBVisibility,
} = ModalsState.actions;

export const selectNavbarVisibility = (state: RootState) =>
  state.ModalsState.navbarVisible;
export const selectNavbarVisibilityScroll = (state: RootState) =>
  state.ModalsState.navbarVisibleScroll;
export const selectFilterMBVisibility = (state: RootState) =>
  state.ModalsState.filterMBVisible;
export default ModalsState.reducer;

import { RootState } from "../store";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface ModalsState {
  navbarVisible: boolean;
  navbarVisibleScroll: boolean;
}

const initialState: ModalsState = {
  navbarVisible: false,
  navbarVisibleScroll: true,
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
  },
});

// Action creators are generated for each case reducer function
export const { setNavbarVisibility, setNavbarVisibilityScroll } =
  ModalsState.actions;

export const selectNavbarVisibility = (state: RootState) =>
  state.ModalsState.navbarVisible;
export const selectNavbarVisibilityScroll = (state: RootState) =>
  state.ModalsState.navbarVisibleScroll;

export default ModalsState.reducer;

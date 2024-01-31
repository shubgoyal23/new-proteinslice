import { createSlice } from "@reduxjs/toolkit";

export const themeService = createSlice({
   name: "User theme",
   initialState: {
      CurrentTheme: "light",
   },
   reducers: {
      changeTheme: (state, action) => {
         state.CurrentTheme = action.payload;
      },
   },
});

export const { changeTheme } = themeService.actions;

export default themeService.reducer;

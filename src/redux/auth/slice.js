import { createSlice } from "@reduxjs/toolkit";
import { login, logout, refreshUser, register } from "./operations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isLoading: false, //! немає в конспекті
    error: null, //! немає в конспекті
  },
  extraReducers: {
    [register.pending](state) {
      state.isLoading = true;
    },
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    },
    [register.rejected](state) {
      state.isLoading = false;
      state.error = true; //! використай бібліотеку сповіщень
    },
    [login.pending](state) {
      state.isLoading = true;
    },
    [login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    },
    [login.rejected](state) {
      state.isLoading = false;
      state.error = true; //! використай бібліотеку сповіщень
    },
    [logout.pending](state) {
      state.isLoading = true;
    },
    [logout.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = null;
    },
    [logout.rejected](state) {
      state.isLoading = false;
      state.error = true; //! використай бібліотеку сповіщень
    },
    [refreshUser.pending](state) {
      state.isLoading = true;
    },
    [refreshUser.fulfilled]() {},
    [refreshUser.rejected](state) {
      state.isLoading = false;
      state.error = true; //! використай бібліотеку сповіщень
    },
  },
});

export default authSlice.reducer;

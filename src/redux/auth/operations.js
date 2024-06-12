import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global/";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (newUser, thunkAPI) => {
    try {
      const response = await axios.post("/users/signup", newUser);
      setAuthHeader(response.data.token);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
); // register - для реєстрації нового користувача. Базовий тип екшену "auth/register". Використовується у компоненті RegistrationForm на сторінці реєстрації.

export const login = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post("/users/login", userData);
      setAuthHeader(response.data.token);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
); // login - для логіну існуючого користувача. Базовий тип екшену "auth/login". Використовується у компоненті LoginForm на сторінці логіну.

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/users/logout");
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
}); // logout - для виходу з додатка. Базовий тип екшену "auth/logout". Використовується у компоненті UserMenu у шапці додатку.

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/users/current");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
); // refreshUser - оновлення користувача за токеном. Базовий тип екшену "auth/refresh". Використовується у компоненті App під час його монтування.

// Токен авторизованого користувача потрібно зберігати в локальному сховищі за допомогою бібліотеки persist.

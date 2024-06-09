// для зберігання асинхронних генераторів екшенів.
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://666332f762966e20ef0bd866.mockapi.io/";

// операція - це асинхрона функція, котру потрібно диспачнути

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      //fullfilled payload
      const response = await axios.get("/contacts");
      return response.data; // це буде значенням payload
    } catch (error) {
      // rejected payload
      return thunkAPI.rejectWithValue(error.message);
    }
  }
); // fetchContacts - одержання масиву контактів (метод GET) запитом. Базовий тип екшену це рядок "contacts/fetchAll".

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", newContact);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
); // addContact - додавання нового контакту (метод POST). Базовий тип екшену це рядок "contacts/addContact".

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
); // deleteContact - видалення контакту по ID (метод DELETE). Базовий тип екшену це рядок "contacts/deleteContact".

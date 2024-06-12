import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "./../redux/auth/slice";
import contactsReducer from "./../redux/contacts/slice";
// import filtersReducer from "./../redux/filters/slice";

export const store = configureStore({
  reducer: {
    // auth: authReducer,
    contacts: contactsReducer,
    // filters: filtersReducer,
  },
});

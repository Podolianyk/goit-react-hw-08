import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: { items: [] },
  reducers: {
    addContact: {
      reducer(state, { payload }) {
        state.items.push(payload);
      },
      prepare(value) {
        return {
          payload: {
            name: value.name,
            number: value.number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, { payload }) {
      const indexOfContact = state.items.findIndex(
        (contact) => contact.id === payload
      );
      state.items.splice(indexOfContact, 1);
    },
  },
});

export default contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;
export const selectContacts = (state) => state.contacts.items;

import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts", // Ім'я слайсу
  initialState: { items: [] }, // Початковий стан редюсера слайсу
  reducers: {
    addContact: {
      reducer(state, { payload }) {
        state.items.push(payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    // addContact(state, { payload }) {
    //   console.log(payload);
    //   state.items.push(payload); // обробка екшн у редюсері
    // }, // редюсер - це функція, які завжди отримує state(поточний стан), action(об'єкт з властивостями type і payload) і за замовчуванням вони повертають той стан, що отримують.В даному випадку action деструктурували, бо нам потрібне лише значення payload

    deleteContact(state, { payload }) {
      const indexOfContact = state.items.findIndex(
        (contact) => contact.id === payload
      );
      state.items.splice(indexOfContact, 1);
    },
  }, // Об'єкт редюсерів
});

export default contactsSlice.reducer; // експортуємо редюсери слайсу
export const { addContact, deleteContact } = contactsSlice.actions; //експортуємо генератори екшенів
export const selectContacts = (state) => {
  state.contacts.items;
}; // експортуємо стан items, який будемо використовувати у компонентах
// console.log(selectContacts);

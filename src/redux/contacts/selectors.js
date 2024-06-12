// import { createSelector } from "@reduxjs/toolkit";
// import { selectFilter } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

// export const selectFilteredContacts = createSelector(
//   [selectContacts, selectFilter],
//   (contacts, filter) => {
//     return contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   }
// ); // складний селектор, він використовуться для обчислення шматків редакс стану
// селектор створений за допомогою createSelector буде мемоізований, тобто який перераховує contacts, коли змінюється значення state.contacts або state.filter, але не тоді, коли зміни відбуваються в інших (незалежних) частинах дерева.

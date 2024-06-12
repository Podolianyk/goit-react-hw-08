import { Route, Routes } from "react-router-dom";
import Loyaut from "../Layout/Layout";
import { Suspense, lazy } from "react";

const HomePage = lazy(() => import("./../../pages/HomePage/HomePage.jsx"));
const RegistrationPage = lazy(() =>
  import("./../../pages/RegistrationPage/RegistrationPage.jsx")
);
const LoginPage = lazy(() => import("./../../pages/LoginPage/LoginPage.jsx"));
const ContactsPage = lazy(() =>
  import("./../../pages/ContactsPage/ContactsPage.jsx")
);
const NotFoundPage = lazy(() =>
  import("./../../pages/NotFoundPage/NotFoundPage.jsx")
);

export default function App() {
  return (
    <Loyaut>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Loyaut>
  );
}

// import { useDispatch, useSelector } from "react-redux";
// import {
//   selectContacts,
//   selectError,
//   selectLoading,
// } from "../../redux/contacts/selectors.js";
// import { useEffect } from "react";
// import { fetchContacts } from "../../redux/contacts/operations.js";
// import ContactForm from "../ContactForm/ContactForm";
// import SearchBox from "../SearchBox/SearchBox";
// import ContactList from "../ContactList/ContactList";
// import Loader from "../Loader/Loader.jsx";
// import Error from "../Error/Error.jsx";
// import css from "./App.module.css";

// export default function App() {
//   const contacts = useSelector(selectContacts);
//   const isLoading = useSelector(selectLoading);
//   const isError = useSelector(selectError);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <div className={css.container}>
//       <h1>Phonebook</h1>
//       <ContactForm />
//       <SearchBox />
//       {isLoading && <Loader>Loading message</Loader>}
//       {isError && <Error>Please, try again later!</Error>}
//       {contacts.length > 0 ? (
//         <ContactList />
//       ) : (
//         <p>Create your first contact!</p>
//       )}
//     </div>
//   );
// }
